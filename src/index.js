var board = new Topoboard.Board(document.getElementById('myCanvas'));
var scene = new Topoboard.Scene(function() {
    board.clean();
    board.refresh();
}, 1000/ 60);
scene.active();
var cirLayer = new Topoboard.Layer(board, {id: 'cir1', layerName: '圆'});
var circle = new Topoboard.Circle({
    layer: cirLayer,
    o: [100, 100],
    r: 20,
    width: 2,
    color: 'red',
    closePath: true
}).stroke();

var recLayer = new Topoboard.Layer(board, {id: 'rec1', layerName: '折线'});

var rect = new Topoboard.Rect({
    layer: recLayer,
    lt: [20, 20],
    rb: [100, 100],
    width: 6,
    color: '#f40'
}).stroke();

var pl = new Topoboard.PolyLine({
    layer: recLayer,
    axis: [[10, 10], [40, 10], [40, 40], [10, 40]],
    width: 5,
    color: 'blue',
    closePath: true
}).fill();

setInterval(function() {
    pl.axis[0][0] ++;
}, 1000 / 60);


var ctx = board.ctx;
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
