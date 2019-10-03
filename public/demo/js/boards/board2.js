import { createBoardBox, createElement, addBtn, download } from '../util/dom';

/**
 * 柱形图
 */
let { container, btnBox, imgViewBox } = createBoardBox('board2', '实现一个柱状图');
let loading, axis, 
values = [];

let imgManager = new Topoboard.ImgManager({imgJsonUrl: 'data/img.json'});
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
    // 纵坐标
    axis = new Topoboard.graphs.PolyLine({
      layer: plLayer,
      path: [
        new TB.model.Vector(30, 30), 
        new TB.model.Vector(30, 200), 
        new TB.model.Vector(450, 200)
      ],
      width: 2,
      style: 'lightblue',
      closePath: false
    }).stroke();
    // 填充长方体
    let arr = new Array(6).fill(1);
    arr.reduce((prev, next, index) => {
      // 柱
      let rect = new Topoboard.graphs.Rect({
        layer: recLayer,
        expand: new TB.model.Expand(60 * (index + 1), 200, 40, 0),
        lineWidth: 1,
        style: function(ctx) {
          let gradient = new TB.model.LinearGradient(
            ctx, 
            new TB.model.Vector(0, 0),
            new TB.model.Vector(500, 500),
            [
              {step: 0, color: '#008c8c'},
              {step: 1, color: '#fcc'}
            ]
          );

          return gradient;
        },
        shadow: new TB.model.Shadow('#fff', 0, 0, 2)
      }).fill();
      // 值
      let value = new Topoboard.graphs.Text({
          layer: valueLayer,
          position: new TB.model.Vector(60 * (index + 1) + 20, 200),
          content: 0,
          font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
          textBaseline: 'bottom',
          style: '#f40'
      }).fill();
      // 标题
      let title = new Topoboard.graphs.Text({
          layer: labelLayer,
          position: new TB.model.Vector(60 * (index + 1) + 20, 220),
          content: 'title' + (index + 1),
          font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
          textBaseline: 'bottom',
          style: '#f40'
      }).fill();
      // 浮窗框
      let modalBox = new Topoboard.graphs.Rect({
        layer: modalLayer,
        expand: new TB.model.Expand(0, 0, 100, 30),
        lineWidth: 1,
        style: '#fffc',
        shadow: new TB.model.Shadow('#fff', 0, 0, 2),
        visible: false
      }).fill();
      // 浮窗内容
      let modal = new Topoboard.graphs.Text({
        layer: modalLayer,
        position: new TB.model.Vector(0, 0),
        content: '',
        font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
        style: '#f40',
        visible: false
      }).fill();

      // 随机计算柱高度
      let height = random(0, 170);
      let v = {rect, title, value, modalBox, modal, height};
      // 事件
      rect.on('click', function(event) {
        console.log(this, event.type);
      });
      rect.on('mousemove', function(event) {
        // console.log(this, event.type);
        let x = event.offsetX;
        let y = event.offsetY;
        modalBox.expand.x = x + 10;
        modalBox.expand.y = y -  40;
        modalBox.show();
        modal.position.x = x + 20;
        modal.position.y = y - 20;
        modal.show();
      });
      rect.on('mouseleave', function() {
        modalBox.hide();
        modal.hide();
      });

      prev.push(v);
      return prev;
    }, values);

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
      font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
      style: '#f40'
    }).fill();
    loading.count = 0;
    loading.total = total;
    loading.text = 'loading: 0/' + total;
  }
};

let board = new Topoboard(container, ['click', 'mousemove', 'mouseleave']);

let loadingLayer = board.newLayer('loading-layer');
let bkLayer = board.newLayer('bk-layer');
let recLayer = board.newLayer('rec-layer');
let plLayer = board.newLayer('axis-layer');
let valueLayer = board.newLayer('value-layer');
let labelLayer = board.newLayer('label-layer');
let modalLayer = board.newLayer('modal-layer');

// 加载中动画
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

let animation = new Topoboard.Animation();
animation.onenterframe = function() {
  // 存在动画操作的图层, 需要更新
  valueLayer.refresh(true);
  recLayer.refresh(true);
  // 存在图层动画, 画板需要更新
  board.refresh();
};
let step = 1;

animation.addTask(function() {
  let count = 0;
  values.forEach(({rect, value, height}, index) => {
    if(rect.expand.h < height) {
      rect.expand.h += step;
      rect.expand.y -= step;
      value.position.y -= step;
      value.content = rect.expand.h;
    }
    else {
      count ++;
    }
  });
  if(values.length && count == values.length) {
    animation.stop();
    console.log('animation stopped', values);
  }
});
animation.start();

// 鼠标over事件动画
let ani = new Topoboard.Animation();

ani.onenterframe = function() {
  modalLayer.refresh(true);
  board.refresh();
}
ani.addTask(function() {
  values.forEach(({title, value, modal}) => {
    modal.content = title.content + '-' + value.content;
  });
});
ani.start();

console.log(board);

window.board2 = board;

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
// 动画录制
let gifAni = new Topoboard.Animation();
let addFrame = false, i =  0;
gifAni.onenterframe = function() {
    addFrame &&  !(i ++ % 3) && gif.addFrame(board.ctx, {copy: true, delay: 1000 / 60});
};
gifAni.start();
addBtn(btnBox, '开始录制', e => {
    addFrame = ! addFrame;
    if(addFrame) {
        e.target.innerText = '结束录制';
    }
    else {
        e.target.innerText = '开始录制';
        gif.render();
    }
});

var gif = new GIF({
    worker: 1,
    quality: 1,
    width: 500,
    height: 300
});
gif.on('finished', function(blob) {
    console.log('record finished');
    let data = URL.createObjectURL(blob);
    img.src = data;
    imgViewBox.appendChild(img);
    download(data, 'board2');
});