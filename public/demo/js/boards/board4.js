const { createBoardBox, createElement, addBtn } = require('../util/dom');

/**
 * topo图
 */
let h2 = '炫彩小球-鼠标跟随';

// 小球衰减速度
let menus = 0.3;
let maxSpeed = 5;
let maxBlur = 20;

let { container, btnBox, imgViewBox } = createBoardBox('board1', h2);

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
  style: '#000'
}).fill();

board.refresh(true);

let balls= [];
board.addEventListener('mousemove', (e) => {
  if(animation.isStopped()) {
    animation.restart();
  }
  let x = e.offsetX;
  let y = e.offsetY;
  // 生成一个球
  let ball = new Topoboard.graphs.Circle({
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
  // 生成第二个球
  ball = new Topoboard.graphs.Circle({
    layer: ballLayer,
    radial: new TB.model.Radial(x, y, 10),
    width: 2,
    style: randomColor(),
    closePath: true,
    shadow: new TB.model.Shadow(0, 0, '#fff', random(0, maxBlur))
  }).fill();
  ball.dx = random(-maxSpeed, maxSpeed);
  ball.dy = random(-maxSpeed, maxSpeed);
  balls.push(ball);
});

let animation = new Topoboard.Animation();
animation.addTask(function() {
  if(! balls.length) {
    animation.stop();
    return;
  }
  let removedBall = [];
  balls.forEach(ball => {
    ball.r -= menus;
    if(ball.r <= 0) {
      ball.r = 0;
      removedBall.push(ball);
    }
  });
  if(removedBall.length) {
    let next = removedBall.reduceRight((prev, next) => {
      let i = balls.indexOf(prev);
      i > -1 && balls.splice(i, 1);
      return next;
    });
    let i = balls.indexOf(next);
    i > -1 && balls.splice(i, 1);
  }

  ballLayer.refresh(true);
});
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

// 动画录制
let gifAni = new Topoboard.Animation();
let addFrame = false, i =  0;
gifAni.onenterframe = function() {
    addFrame && gif && gif.addFrame(board.ctx, {copy: true, delay: 1000 / 60});
};
gifAni.start();

let gif;
let img = createElement('img');
addBtn(btnBox, '开始录制', e => {
  addFrame = ! addFrame;
  // 开始录制
  if(addFrame) {
    e.target.innerText = '结束录制';
    gif = new GIF({
      worker: 1,
      quality: 1,
      width: 500,
      height: 300
    });
    gif.on('finished', function(blob) {
      console.log('record finished');
      let data = URL.createObjectURL(blob);
      // 预览
      img.src = data;
      imgViewBox.appendChild(img);
      // 导出
      // download(data, 'board1');
    });
  }
  // 结束录制
  else {
    e.target.innerText = '开始录制';
    gif.render();
  }
});
