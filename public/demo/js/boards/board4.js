const { createBoardBox } = require('../util/dom');
import snapshot from '../util/snapshot';
import layerControl from '../util/layerControl';

/**
 * topo图
 */
let h2 = '炫彩小球-鼠标跟随';

// 小球衰减速度
let menus = 0.3;
let maxSpeed = 5;
let maxBlur = 20;

let { container, btnBox, imgViewBox } = createBoardBox('board4', h2);

function random(min, max) {
  return Math.random() * (max - min) + min;
}
function randomColor() {
  return 'rgba(' + random(0, 256) + ', ' + random(0, 256) + ', ' + random(0, 256) + ', ' + random(0, 1) + ')';
}

// 画板
let board = new Topoboard(container, ['mousemove', 'mouseleave']);
// 图层
let bkLayer = board.newLayer('bk-layer');
let ballLayer = board.newLayer('ball-layer');

let rect = new Topoboard.graphs.Rect({
  layer: bkLayer,
  expand: new TB.model.Expand(0, 0, 500, 300),
  lineWidth: 2,
  style: function(ctx) {
    let gradient = new TB.model.RadialGradient(
      ctx, 
      new TB.model.Radial(200, 150, 30), 
      new TB.model.Radial(250, 150, 250), 
      [
        {step: 0, color: '#003c3c'},
        {step: 0.5, color: '#001c1c'},
        {step: 1, color: '#000'}
      ]
    );
    return gradient;
  }
}).fill();

bkLayer.refresh();
board.refresh();

let balls= [];
let store = [];
let max =  300;
// 创建一个球, 如果创建的球超过max个, 不再创建新的
// 如果 balls.length == max 鼠标位置将不会出现新的小球, 此时 store.length == 0
function createBall(x, y) {
  let ball;
  if(balls.length + store.length >= max) {
    ball = store.pop();
    if(ball) {
      ball.radial.x = x;
      ball.radial.y = y;
      ball.radial.r = 20;

      balls.push(ball);
    }
  }
  else {
    // 生成一个球
    ball = new Topoboard.graphs.Circle({
      layer: ballLayer,
      radial: new TB.model.Radial(x, y, 20),
      width: 2,
      style: randomColor(),
      closePath: true,
      shadow: new TB.model.Shadow(0, 0, '#fff', random(0, maxBlur))
    }).fill();
    ball.dx = random(-maxSpeed, maxSpeed);
    ball.dy = random(-maxSpeed, maxSpeed);
    balls.push(ball);
  }
  return ball;
}
board.on('mousemove', (e) => {
  if(animation.isStopped()) {
    animation.restart();
  }
  let x = e.offsetX;
  let y = e.offsetY;
  createBall(x, y);
});

let animation = new Topoboard.Animation();
// 小球衰减
animation.addTask(function() {
  if(! balls.length) {
    animation.stop();
    return;
  }
  let removedBall = [];
  balls.forEach(ball => {
    ball.radial.r -= menus;
    if(ball.radial.r <= 0) {
      ball.radial.r = 0;
      removedBall.push(ball);
    }
  });
  if(removedBall.length) {
    let next = removedBall.reduceRight((prev, next) => {
      let i = balls.indexOf(prev);
      i > -1 && store.push(balls.splice(i, 1)[0]);
      return next;
    });
    let i = balls.indexOf(next);
    i > -1 && store.push(balls.splice(i, 1)[0]);
  }
});
// 小球移动
animation.addTask(() => {
  balls.forEach(ball => {
    ball.radial.x += ball.dx;
    ball.radial.y += ball.dy;
  });
});
animation.onenterframe = function() {
  ballLayer.refresh(true); // 图层存在动画, 需要刷新
  board.refresh(); // 画板存在动画, 需要刷新
};
animation.start();

console.log(board);

window.board4 = board;

snapshot(btnBox, board, imgViewBox);
layerControl(btnBox, board);
