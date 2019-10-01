const { createBoardBox, createElement, addBtn } = require('../util/dom');

/**
 * topo图
 */
let { container, btnBox, imgViewBox } = createBoardBox('board1', '小游戏-躲避怪物');
container.style.width = '512px';
container.style.height = '480px';

let loading, hero;

let imgManager = new Topoboard.ImgManager({imgJsonUrl: 'data/avoid.json'});
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
    hero = new Topoboard.graphs.Img({
        layer: bkLayer,
        image: imgs.hero,
        src: new TB.model.Expand(0, 0, 32, 32),
        dest: new TB.model.Expand(100, 100, 32, 32)
    }).draw();

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
      content: 'loading: 0/' + total,
      font: new TB.model.Font(18, '微软雅黑'),
      style: '#f40'
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
let bkLayer = board.newLayer('bk-layer');

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
addBtn(btnBox, '预览图片', e => {
  let data = board.snapshot();
  img.src = data;
  imgViewBox.appendChild(img);
});
addBtn(btnBox, '导出图片', e => {
  board.download();
});
board.layers.forEach(layer => {
  if(layer.className == 'loading-layer') {
    return;
  }
  let title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
  addBtn(btnBox, title, (e) => {
    layer.toggle();
    title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
    e.target.innerText = title;
  });
});