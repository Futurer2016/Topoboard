const { createBoardBox, createElement } = require('../util/dom');

let { container, btnBox, imgViewBox } = createBoardBox('board1', '匀速运动与抛物运动与碰撞检查');
let loading, pl, circle, rect, prec;
let top, right, bottom, left;

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
            expand: new TB.model.Expand(100, 100, 80, 80),
            lineWidth: 6,
            color: '#fcc',
            shadow: new TB.model.Shadow(0, 0, '#fff', 2)
        }).fill();
        rect.addEventListener('click', e => {
            console.log('rect', this, e);
        });
        // 边框长方体
        prec = new Topoboard.graphs.Rect({
            layer: boxLayer,
            expand: new TB.model.Expand(50, 50, 400, 200),
            lineWidth: 4,
            color: '#4f0',
            shadow: new TB.model.Shadow(0, 0, '#fff', 5)
        }).stroke();
        // 外盒子
        let box = prec.expand;
        let offset = prec.lineWidth / 2;
        left = box.x + offset;
        right = box.x + box.w - offset;
        top = box.y + offset;
        bottom = box.y + box.h - offset;
        console.log(top, right, bottom, left);

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
let boxLayer = board.newLayer('box-layer');
let recLayer = board.newLayer('rec-layer');
let cirLayer = board.newLayer('cir-layer');
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
    recLayer.refresh(true);
    cirLayer.refresh(true); // 图层存在动画, 需要刷新
    board.refresh(); // 画板存在动画, 需要刷新
};

// 圆动画
let dx = 2;
let dy = 2;
let speed = 3;
animation.addTask(function() {
    if(! circle) {
        return;
    }
    let x = circle.o.x;
    let y = circle.o.y;
    let r = circle.r;
    let cl = x - r;
    let cr = x + r;
    let ct = y - r;
    let cb = y + r;

    if(cr>= right) {
        dx = -speed;
    }
    else if(cl <= left) {
        dx = speed;
    }
    if(cb >= bottom) {
        dy = -speed;
    }
    else if(ct <= top) {
        dy = speed;
    }
    // 障碍物
    let t = rect.expand;
    let toffset = rect.lineWidth / 2;
    let tleft = t.x - toffset;
    let tright = t.x + t.w + toffset;
    let ttop = t.y - toffset;
    let tbottom = t.y + t.h + toffset;
    // 避开障碍物
    // 左右
    if(y + r / 2 >= ttop && y - r / 2 <= tbottom) {
        // 右
        if(x > tright && cl <= tright) {
            // console.log('右', cl, tright);
            dx = speed;
        }
        // 左
        else if(x < tleft && cr >= tleft) {
            // console.log('左', cr, tleft);
            dx = -speed;
        }
    }
    else if(x - r / 2 <= tright && x + r / 2 >= tleft) {
        // 下
        if(y > tbottom && ct >= tbottom) {
            // console.log('下', ct, tbottom);
            dy = speed;
        }
        // 上
        else if(y < ttop && cb >= ttop) {
            // console.log('上', cb, ttop);
            dy = -speed;
        }
    }

    circle.o.x += dx;
    circle.o.y += dy;
});

// 填充框动画, 抛物体
let vx = 5;
let vy = -20;
let g = 1;
let menus = 3;
animation.addTask(function() {
    if(! rect) {
        return;
    }
    let t = rect.expand;
    let toffset = rect.lineWidth / 2;
    let tleft = t.x - toffset;
    let tright = t.x + t.w + toffset;
    let ttop = t.y - toffset;
    let tbottom = t.y + t.h + toffset;

    if(vx < 0 && tleft <= left) {
        if(vx > menus) {
            vx -= menus;
        }
        vx = -vx;
    }
    if(vx > 0 && tright >= right) {
        if(vx >= menus) {
            vx -= menus;
        }
        vx = -vx;
    }
    if(vy < 0 && ttop <= top) {
        vy = -vy;
    }
    if(vy > 0 && tbottom >= bottom) {
        if(vy >= menus) {
            vy -= menus;
        }
        vy = -vy;
    }

    if(Math.abs(vy) < 1) vy = 0;

    rect.expand.x += vx;
    rect.expand.y += vy;
    
    if(vy == 0 && Math.abs(tbottom - bottom) < 2) {
        vy = 0;
        if(vx >= menus) {
            vx -= menus;
        }
        else {
            vx = 0;
        }
    }
    else {
        vy += g;
    }
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