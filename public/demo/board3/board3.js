const { createBoardBox, createElement } = require('../util/dom');

/**
 * topo图
 */
let { container, btnBox, imgViewBox } = createBoardBox('board1', '实现一个Topo图');
let loading, 
links = [
  {label: '开始', coor: [50, 50]},
  {label: '1', coor: [150, 50]},
  {label: '2', coor: [150, 150]},
  {label: '3', coor: [300,150]},
  {label: '4', coor: [300, 250]},
  {label: '结束', coor: [400, 50]}
];

let imgManager = new Topoboard.ImgManager({imgJsonUrl: 'img.json'});
imgManager.load();
imgManager.onreadystatechange = function() {
  //数据加载完成
  if(this.readyState == Topoboard.ImgManager.STATE_RESOURCE_INFO_READY) {
    callbacks.imgInfoReady(this.data.images.length);
  }
  //图片加载中
  else if(this.readyState == Topoboard.ImgManager.STATE_RESOURCE_LOADING) {
    callbacks.imgLoading(this.count, this.data.images.length);
  }
  else if(this.readyState == Topoboard.ImgManager.STATE_RESOURCE_READY) {
    callbacks.imgLoaded(this.imgs);
  }
};
let random = (begin, end) => {
  return parseInt(Math.random() * (end - begin) + begin);
};
let callbacks = {
  imgLoaded: function(imgs) {
    // 背景图片
    new Topoboard.graphs.Img({
        layer: bkLayer,
        image: imgs.bg
    }).draw();
    let znode = links.reduce((prev, next) => {
      // 绘制link
      let line = new Topoboard.graphs.PolyLine({
        layer: linkLayer,
        path: [
          new TB.model.Vector(prev.coor[0], prev.coor[1]), 
          new TB.model.Vector(next.coor[0], next.coor[1])
        ],
        width: 8,
        color: 'lightblue',
        shadow: new TB.model.Shadow(0, 0, '#fff', 5),
        closePath: false
      }).stroke();
      line.addEventListener('mousemove', function(e) {
        this.color = '#008c8c';
        this.shadow.color = '#f40';
        this.shadow.blur = 10;
        this.refresh();
        this.layer.refresh();
        board.refresh();
      });
      line.addEventListener('mouseleave', function(e) {
        this.color = 'lightblue';
        this.shadow.color = '#fff';
        this.shadow.blur = 5;
        this.refresh();
        this.layer.refresh();
        board.refresh();
      });
      // 绘制node
      let node = new Topoboard.graphs.Circle({
          layer: nodeLayer,
          o: new TB.model.Vector(prev.coor[0], prev.coor[1]),
          r: 12,
          width: 2,
          color: 'red',
          closePath: true,
          shadow: new TB.model.Shadow(0, 0, '#fff', 5)
      }).fill();
      node.addEventListener('mousemove', function(e) {
        this.color = '#008c8c';
        this.shadow.color = '#f40';
        this.shadow.blur = 10;
        this.refresh();
        this.layer.refresh();
        board.refresh();
        return true;
      });
      node.addEventListener('mouseleave', function(e) {
        this.color = 'red';
        this.shadow.color = '#fff';
        this.shadow.blur = 5;
        this.refresh();
        this.layer.refresh();
        board.refresh();
      });
      let label = new Topoboard.graphs.Text({
        layer: labelLayer,
        position: new TB.model.Vector(prev.coor[0] - 5, prev.coor[1] - 20),
        content: prev.label,
        font: new TB.model.Font(18, '微软雅黑'),
        color: 'chocolate'
      }).fill();
      return next;
    });
    let node = new Topoboard.graphs.Circle({
      layer: nodeLayer,
      o: new TB.model.Vector(znode.coor[0], znode.coor[1]),
      r: 12,
      width: 2,
      color: 'red',
      closePath: true,
      shadow: new TB.model.Shadow(0, 0, '#fff', 5)
    }).fill();
    node.addEventListener('mousemove', function(e) {
      this.color = '#008c8c';
      this.shadow.color = '#f40';
      this.shadow.blur = 10;
      this.refresh();
      this.layer.refresh();
      board.refresh();
      return true;
    });
    node.addEventListener('mouseleave', function(e) {
      this.color = 'red';
      this.shadow.color = '#fff';
      this.shadow.blur = 5;
      this.refresh();
      this.layer.refresh();
      board.refresh();
    });
    let label = new Topoboard.graphs.Text({
      layer: labelLayer,
      position: new TB.model.Vector(znode.coor[0] - 5, znode.coor[1] - 20),
      content: znode.label,
      font: new TB.model.Font(18, '微软雅黑'),
      color: 'chocolate'
    }).fill();

    // 结束加载中图层
    loadingAni.stop(), loadingLayer.remove();
    board.refresh(true);
  },
  // 更新加载中信息内容
  imgLoading: function(count, total) {
      loading.count = count;
      loading.text = 'loading: ' + count + '/' + total;
      loading.content = loading.text + loading.dots;

      loading.refresh();
      loadingLayer.refresh();
      board.refresh();
  },
  imgInfoReady: function(total) {
      // 绘制加载中信息
      loading = new Topoboard.graphs.Text({
          layer: loadingLayer,
          // position: new Topoboard.Vector(300, 300),
          content: 'loading: 0/' + total,
          font: new TB.model.Font(18, '微软雅黑'),
          color: '#f40'
      }).fill();
      loading.count = 0;
      loading.total = total;
      loading.text = 'loading: 0/' + total;
  }
};
// 画板
let board = new Topoboard(container, ['click', 'mousemove', 'mouseleave']);
// 图层
let loadingLayer = board.newLayer('loading-layer');
let bkLayer = board.newLayer('bk-layer', false);
let linkLayer = board.newLayer('link-layer');
let nodeLayer = board.newLayer('node-layer');
let labelLayer = board.newLayer('label-layer');

let loadingAni = new Topoboard.Animation(500);
loadingAni.onenterframe = function() {
  loadingLayer.refresh(); // 图层存在动画, 需要刷新
  board.refresh(); // 画板存在动画, 需要刷新
};

let dot = 1;
loadingAni.addTask(function() {
  if(! loading) {
    return;
  }
  dot ++;
  if(dot >= 6) {
    dot = 1;
  }
  let str = new Array(dot).fill(1).reduce(prev => prev + '.', '');
  loading.dots = str;
  loading.content = loading.text + loading.dots;
  loading.refresh();
});
loadingAni.start();

console.log(board);

window.board3 = board;

// 注册页面按钮事件
let img = createElement('img');

let addBtn = (title, onclick) => {
  let btn = createElement('button');
  btn.innerText = title;
  btn.onclick = function(e) {
    onclick.call(this, e);
  }
  btnBox.appendChild(btn);
}
addBtn('预览图片', e => {
  let data = board.snapshot();
  img.src = data;
  imgViewBox.appendChild(img);
});
addBtn('导出图片', e => {
  board.download();
});
board.layers.forEach(layer => {
  if(layer.className == 'loading-layer') {
    return;
  }
  let title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
  addBtn(title, (e) => {
    layer.toggle();
    title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
    e.target.innerText = title;
  });
});