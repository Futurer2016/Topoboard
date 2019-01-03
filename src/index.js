let text, pl, circle, rect, prec;

let canvas = document.getElementById('myCanvas');
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
        new Topoboard.Img({
            layer: bkLayer,
            image: imgs.bg
        }).draw();

        rect = new Topoboard.Rect({
            layer: recLayer,
            cutParams: new TB.CutParams(20, 20, 100, 100),
            lineWidth: 6,
            color: '#f40',
            shadow: new Topoboard.Shadow('#fff', 0, 0, 2)
        }).fill();

        prec = new Topoboard.Rect({
            layer: recLayer,
            cutParams: new TB.CutParams(30, 30, 200, 200),
            lineWidth: 5,
            color: '#4f0',
            shadow: new Topoboard.Shadow('#000', 0, 0, 5)
        }).stroke();

        circle = new Topoboard.Circle({
            layer: cirLayer,
            o: new Topoboard.Vector(100, 100),
            r: 20,
            width: 2,
            color: 'red',
            closePath: true,
            shadow: new Topoboard.Shadow('#fff', 0, 0, 5)
        }).stroke();

        pl = new Topoboard.PolyLine({
            layer: plLayer,
            axis: [new TB.Vector(10, 10), new TB.Vector(40, 10), new TB.Vector(40, 40), new TB.Vector(10, 40)],
            width: 5,
            color: 'blue',
            closePath: true
        }).fill();

        text && text.clear(), recLayer.removeGraph(text);
        board.refresh(true);
    },
    imgLoading: function(count, total) {
        text.content = 'loading: ' + count + '/' + total;
    },
    imgInfoReady: function(total) {
        text = new Topoboard.Text({
            layer: recLayer,
            // position: new Topoboard.Vector(300, 300),
            content: 'loading: 0/' + total,
            font: new TB.Font(18, '微软雅黑'),
            color: '#f40'
        }).fill();
    }
};

let board = new Topoboard(document.getElementById('myCanvas'));

let bkLayer = board.newLayer('bk');
let recLayer = board.newLayer('rec');
let cirLayer = board.newLayer('cir');
let plLayer = board.newLayer('polyline');

let animation = new Topoboard.Animation();
animation.onenterframe = function() {
    // console.log(arguments[0]);
    // plLayer.refresh();
    // cirLayer.refresh();
    // recLayer.refresh();
    board.refresh(1);
};
animation.addTask(function() {
    pl && (pl.axis[0].x ++, pl.axis[0].y ++);
    circle && circle.o.x ++;
    rect && rect.cutParams.y ++;
});
// animation.start();

let ctx = board.ctx;
// ctx.beginPath();
// ctx.fillStyle = 'green';
// ctx.lineWidth = 10;
// ctx.lineCap = 'round';
//
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 300);
// ctx.lineTo(400, 20);
// ctx.lineTo(20, 40);
// ctx.fill();
// ctx.closePath();

console.log(board);
// board.clear();
// board.refresh();

window.board = board;
window.ctx = board.ctx;
window.bkLayer = bkLayer;
window.cirLayer = cirLayer;
window.recLayer = recLayer;
window.plLayer = plLayer;