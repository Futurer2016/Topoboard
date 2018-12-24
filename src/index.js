let text, pl;

let canvas = document.getElementById('myCanvas');
let imgManager = new Topoboard.ImgManager({imgJsonUrl: 'img.json'});
imgManager.load();
imgManager.onreadystatechange = function() {
    //数据加载完成
    if(this.readyState == 2) {
        callbacks.imgInfoReady(this.data.images.length);
    }
    //图片加载中
    else if(this.readyState == 3) {
        callbacks.imgLoading(this.count, this.data.images.length);
    }
    else if(this.readyState == 4) {
        callbacks.imgLoaded(this.imgs);
    }
};
let callbacks = {
    imgLoaded: function(imgs) {
        new Topoboard.Img({
            layer: cirLayer,
            image: imgs.bg,
            dst: new Topoboard.CutParams(0, 0, board.getCanvas().width, board.getCanvas().height)
        }).draw();

        let rect = new Topoboard.Rect({
            layer: recLayer,
            cutParams: {x: 20, y: 20, w: 100, h: 100},
            width: 6,
            color: '#f40',
            shadow: new Topoboard.Shadow('#fff', 0, 0, 2)
        }).fill();

        let circle = new Topoboard.Circle({
            layer: cirLayer,
            o: [100, 100],
            r: 20,
            width: 2,
            color: 'red',
            closePath: true,
            shadow: new Topoboard.Shadow('#fff', 0, 0, 5)
        }).stroke();

        pl = new Topoboard.PolyLine({
            layer: recLayer,
            axis: [[10, 10], [40, 10], [40, 40], [10, 40]],
            width: 5,
            color: 'blue',
            closePath: true
        }).fill();

        text && text.clear(), recLayer.remove(text);
    },
    imgLoading: function(count, total) {
        text.content = 'loading: ' + count + '/' + total;
    },
    imgInfoReady: function(total) {
        text = new Topoboard.Text({
            layer: recLayer,
            position: [300, 300],
            content: 'loading: 0/' + total,
            font: '18px consola',
            color: '#f40'
        }).fill();
    }
};

let board = new Topoboard.Board(document.getElementById('myCanvas'));
let cirLayer = new Topoboard.Layer(board, {id: 'cir1', layerName: '圆'});
let recLayer = new Topoboard.Layer(board, {id: 'rec1', layerName: '折线'});

let animation = new Topoboard.Animation(board);
animation.onenterframe = function() {
    pl && pl.axis[0][0] ++;
};
animation.start();

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
window.cirLayer = cirLayer;
window.recLayer = recLayer;
