const { createBoardBox, createElement } = require('../util/dom');

let { container, btnBox, imgViewBox } = createBoardBox('board1', '静态图层与动态图层独立渲染');
let loading, pl, circle, rect, prec, mouseline;

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
let callbacks = {
    imgLoaded: function(imgs) {
        // 背景图片
        new Topoboard.graphs.Img({
            layer: bkLayer,
            image: imgs.bg
        }).draw();
        // 填充长方体
        rect = new Topoboard.graphs.Rect({
            layer: recLayer,
            expand: new TB.model.Expand(20, 20, 100, 100),
            lineWidth: 6,
            color: '#f40',
            shadow: new TB.model.Shadow(0, 0, '#fff', 2)
        }).fill();
        rect.addEventListener('click', e => {
            console.log('rect', this, e);
        });
        // 边框长方体
        prec = new Topoboard.graphs.Rect({
            layer: recLayer,
            expand: new TB.model.Expand(30, 30, 200, 200),
            lineWidth: 5,
            color: '#4f0',
            shadow: new TB.model.Shadow(0, 0, '#fff', 5)
        }).stroke();
        prec.addEventListener('click', e => {
            console.log('rect', this, e);
        });
        // 边框圆环
        circle = new Topoboard.graphs.Circle({
            layer: cirLayer,
            o: new TB.model.Vector(100, 100),
            r: 20,
            width: 2,
            color: 'red',
            closePath: true,
            shadow: new TB.model.Shadow(0, 0, '#fff', 5)
        }).stroke();
        circle.addEventListener('click', function(e) {
            console.log('circle', this, e);
        });
        // 折线绘制
        pl = new Topoboard.graphs.PolyLine({
            layer: plLayer,
            path: [new TB.model.Vector(10, 10), new TB.model.Vector(40, 10), new TB.model.Vector(40, 40), new TB.model.Vector(10, 40)],
            width: 5,
            color: 'blue',
            closePath: true
        }).stroke();
        pl.addEventListener('click', function(e) {
            console.log('polyline', this, e);
        });

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

let board = new Topoboard(container, ['click']);

let loadingLayer = board.newLayer('loading-layer');
let bkLayer = board.newLayer('bk-layer');
let recLayer = board.newLayer('rec-layer');
let cirLayer = board.newLayer('cir-layer');
let plLayer = board.newLayer('polyline-layer');
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
  if(dot > 6) {
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
    plLayer.refresh(true); // 图层存在动画, 需要刷新
    cirLayer.refresh(true); // 图层存在动画, 需要刷新
    board.refresh(); // 画板存在动画, 需要刷新
};
let step = 1;
animation.addTask(function() {
    if(pl) {
        if(pl.path[0].x > 100) {
            step = -1;
        }
        else if(pl.path[0].x < 0) {
            step = 1
        }
        // 折线动画
        pl.path[0].x = pl.path[0].x + step;
        pl.path[0].y = pl.path[0].y + step;
    };
});
animation.addTask(function() {
    // 圆动画
    circle && (circle.o.x += step, circle.r += step);
    // rect && rect.expand.y ++;
    //鼠标移动事件
});
animation.start();

console.log(board);

window.board1 = board;

let img = createElement('img');

let addBtn = (title, onclick) => {
    let btn = createElement('button');
    btn.innerText = title;
    btn.onclick=function(e) {
        onclick.call(this, e);
    }
    btnBox.appendChild(btn);
}
// 注册页面按钮事件
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