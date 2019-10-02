const { createBoardBox, createElement, addAreaBox, addBtn, addRangeInput } = require('../util/dom');

/**
 * topo图
 */
let { container, btnBox, imgViewBox } = createBoardBox('board5', '小游戏-躲避怪物');
container.style.width = '514px';
container.style.height = '482px';

let json, imgList, loading, loadingAni, 
timeCount, timerText, tcAni, 
hero, heroAni, 
monsters = [], monsterCreateAni, monsterAni;

let config;

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
  return Math.random() * (end - begin) + begin;
};
let callbacks = {
  imgLoaded: function(imgs) {
    imgList = imgs;
    // 背景图片
    new Topoboard.graphs.Img({
        layer: bkLayer,
        image: imgs.bg
    }).draw();

    addModal(beginLayer, '开始游戏', () => {
      addCountDown();
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
    json = imgManager.data;
    config = json['roles'];
    addBtns();
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
// 开始按钮遮罩层
function addModal(layer, text, onclick, score) {
  let padding = {
    top: 10,
    right: 20,
    bottom: 10,
    left: 20
  };
  // 遮罩层
  let modal = new Topoboard.graphs.Rect({
    layer: layer,
    expand: new TB.model.Expand(0, 0, 512, 480),
    lineWidth: 2,
    style: function(ctx) {
      let gradient = new TB.model.RadialGradient(
        ctx, 
        new TB.model.Radial(250, 250, 30), 
        new TB.model.Radial(250, 250, 250), 
        [
          {step: 0, color: '#003c3caa'},
          {step: 0.5, color: '#001c1caa'},
          {step: 1, color: '#000a'}
        ]
      );
      return gradient;
    }
  }).fill();
  let btnBoxExpand;
  let btnText = new Topoboard.graphs.Text({
    layer: layer,
    content: text,
    position: function(ctx, measure) {
      let font = this.font;
      let x = ctx.canvas.width / 2;
      let y = ctx.canvas.height / 2;
      let textWidth = measure.width;
      btnBoxExpand = new TB.model.Expand(
        x - textWidth - padding.left, 
        y - font.fontSize / 2 - padding.top, 
        textWidth * 2 + padding.left + padding.right, 
        font.fontSize + padding.top + padding.bottom
      );

      return new TB.model.Vector(x, y);
    },
    font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
    style: '#fcc'
  }).fill();
  let btn = new Topoboard.graphs.Rect({
    layer: layer,
    expand: btnBoxExpand,
    lineWidth: 2,
    style: function(ctx) {
      let gradient = new TB.model.RadialGradient(
        ctx, 
        new TB.model.Radial(btnBoxExpand.x + btnBoxExpand.w / 2, btnBoxExpand.y + btnBoxExpand.h / 2, 30), 
        new TB.model.Radial(btnBoxExpand.x + btnBoxExpand.w / 2, btnBoxExpand.y + btnBoxExpand.h / 2, 100), 
        [
          {step: 0, color: '#003c3c'},
          {step: 0.5, color: '#001c1c'},
          {step: 1, color: '#000'}
        ]
      );
      return gradient;
    }
  }).fill();
  btn.addEventListener('click', function(e) {
    layer.hide();
    onclick && onclick();
  });
  layer.pushGraph(btnText);
  
  //  游戏结束内容
  if(! score) return;
  let endp = {
    top: 30,
    right: 400,
    bottom: 30,
    left: 400
  };
  let titleBoxExpand;
  let titleText = new Topoboard.graphs.Text({
    layer: layer,
    content: '游戏结束',
    position: function(ctx, measure) {
      let font = this.font;
      let x = ctx.canvas.width / 2;
      let y = 80;
      let textWidth = measure.width;
      titleBoxExpand = new TB.model.Expand(
        x - textWidth - endp.left, 
        y - font.fontSize / 2 - endp.top, 
        textWidth * 2 + endp.left + endp.right, 
        font.fontSize + endp.top + endp.bottom
      );

      return new TB.model.Vector(x, y);
    },
    font: new TB.model.Font({fontSize: 60, fontFamily: '微软雅黑'}),
    style: '#fcc'
  }).fill();
  let titleBox = new Topoboard.graphs.Rect({
    layer: layer,
    expand: titleBoxExpand,
    lineWidth: 2,
    style: function(ctx) {
      let gradient = new TB.model.RadialGradient(
        ctx, 
        new TB.model.Radial(titleBoxExpand.x + titleBoxExpand.w / 2, titleBoxExpand.y + titleBoxExpand.h / 2, 30), 
        new TB.model.Radial(titleBoxExpand.x + titleBoxExpand.w / 2, titleBoxExpand.y + titleBoxExpand.h / 2, 100), 
        [
          {step: 0, color: '#003c3c88'},
          {step: 0.5, color: '#001c1c88'},
          {step: 1, color: '#0008'}
        ]
      );
      return gradient;
    }
  }).fill();
}

// 倒计时动画
function addCountDown() {
  let countDownConfig = json['count-down'];
  let max = countDownConfig.max;
  let min = countDownConfig.min;
  let step = countDownConfig.step;
  // 文字保持在最小字体的时长
  let minTime = countDownConfig.minTime;
  let count = countDownConfig.count;

  countDown = new Topoboard.graphs.Text({
    layer: countDownLayer,
    content: 3,
    font: new TB.model.Font({fontSize: max, fontWeight: 'bold', fontFamily: '微软雅黑'}),
    style: '#f40'
  }).fill();
  countDownLayer.refresh();
  board.refresh();

  let countDownAni = new Topoboard.Animation();
  countDownAni.onenterframe = function() {
    countDownLayer.refresh(); // 图层存在动画, 需要刷新
    board.refresh(); // 画板存在动画, 需要刷新
  };

  countDownAni.addTask(function() {
    // 递减字体
    let size = countDown.font.fontSize -= step;
    // 达到最小字体
    if(size <= min) {
      countDown.font.fontSize = min;
      count ++;
    }
    // 最小字体时长到时
    if(count >= minTime) {
      count = 0;
      countDown.content --;
      countDown.content && (countDown.font.fontSize = max);
    }
    if(countDown.content <= 0) {
      countDownAni.stop();
      countDown.remove();
      // 游戏开始
      addTimeCount();
      addHero();
      addMonster();
    }

    countDown.refresh();
  });
  countDownAni.start();
}

// 画板
let board = new Topoboard(container, ['click', 'keydown', 'keyup']);
// 图层
// 加载中
let loadingLayer = board.newLayer('loading-layer');
// 背景
let bkLayer = board.newLayer('bk-layer');
// 英雄
let heroLayer = board.newLayer('hero-layer');
// 怪物
let monsterLayer = board.newLayer('monster-layer');
// 倒计时
let countDownLayer = board.newLayer('count-down-layer');
// 计时器
let timeCountLayer = board.newLayer('timeCount-layer');
// 开始
let beginLayer = board.newLayer('begin-layer');
// 结束
let endLayer = board.newLayer('end-layer');

// 加载中动画
(function() {
  loadingAni = new Topoboard.Animation(500);
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
})();

// 英雄动画
function addHero() {
  hero = new Topoboard.graphs.Img({
    layer: heroLayer,
    image: imgList.hero,
    src: new TB.model.Expand(0, 0, 32, 32),
    dest: new TB.model.Expand(250, 150, 32, 32)
  }).draw();
  document.addEventListener('keydown', function(e) {
    // 上
    if(e.keyCode == 38) {
      dy = -config.hero.speed;
    }
    // 右
    else if(e.keyCode == 39) {
      dx = config.hero.speed;
    }
    // 下
    else if(e.keyCode == 40) {
      dy = config.hero.speed;
    }
    // 左
    else if(e.keyCode == 37) {
      dx = -config.hero.speed;
    }
    e.preventDefault();
  });
  document.addEventListener('keyup', function(e) {
    if(e.keyCode == 38 || e.keyCode == 40) {
      dy = 0;
    }
    else if(e.keyCode == 37 || e.keyCode == 39) {
      dx = 0;
    }
  });
  heroAni = new Topoboard.Animation();
  heroAni.onenterframe = function() {
    heroLayer.refresh(); // 图层存在动画, 需要刷新
    board.refresh(); // 画板存在动画, 需要刷新
  };
  let dx = 0;
  let dy = 0;
  heroAni.addTask(() => {
    if(! hero) return;
    hero.dest.x += dx;
    hero.dest.y += dy;

    if(hero.dest.x < config.area.border) {
      hero.dest.x  = config.area.border;
    }
    if(hero.dest.y < config.area.border) {
      hero.dest.y  = config.area.border;
    }
    let maxX = config.area.width - config.area.border - config.hero.width;
    let maxY = config.area.height - config.area.border - config.hero.height;
    if(hero.dest.x > maxX) {
      hero.dest.x  = maxX;
    }
    if(hero.dest.y > maxY) {
      hero.dest.y  = maxY;
    }

    hero.refresh();
  });
  heroAni.start();
}
// 怪物动画
function addMonster() {
  // 怪物出生动画
  let maxAngle = 85 * Math.PI / 180;
  monsterCreateAni = new Topoboard.Animation(1000);
  monsterCreateAni.onenterframe = function() {
    monsterLayer.refresh(); // 图层存在动画, 需要刷新
    board.refresh(); // 画板存在动画, 需要刷新
  };
  monsterCreateAni.addTask(() => {
    if(! hero) return;
    if(monsters.length >= config.monster.total) {
      monsterCreateAni.stop();
      return;
    }
    let m = new Topoboard.graphs.Img({
      layer: monsterLayer,
      image: imgList.monster,
      src: new TB.model.Expand(0, 0, 32, 32),
      dest: new TB.model.Expand(config.area.border, config.area.border, 32, 32)
    }).draw();
    
    let angle = random(1, maxAngle);
    let dx = config.monster.speed * Math.sin(angle);
    let dy = config.monster.speed * Math.sin(maxAngle - angle);
    m.dx = dx;
    m.dy = dy;

    monsters.push(m);
  });
  monsterCreateAni.start();

  // 怪物移动动画
  monsterAni = new Topoboard.Animation();
  monsterAni.onenterframe = function() {
    monsterLayer.refresh(true); // 图层存在动画, 需要刷新
    board.refresh(); // 画板存在动画, 需要刷新
  };
  monsterAni.addTask(() => {
    if(! hero) return;
    monsters.forEach(m => {
      m.dest.x += m.dx;
      m.dest.y += m.dy;
      if(m.dest.x < config.area.border) {
        m.dest.x = config.area.border;
        m.dx = -m.dx;
      }
      if(m.dest.y < config.area.border) {
        m.dest.y = config.area.border;
        m.dy = -m.dy;
      }
      let maxX = config.area.width - config.area.border - config.monster.width;
      let maxY = config.area.height - config.area.border - config.monster.height;
      if(m.dest.x > maxX) {
        m.dest.x = maxX;
        m.dx = -m.dx;
      }
      if(m.dest.y > maxY) {
        m.dest.y = maxY;
        m.dy = -m.dy;
      }
      isFinished(m);
    });
  });
  monsterAni.start();
}

// 计时动画
function addTimeCount() {
  let padding = {
    top: 20,
    right: 400,
    bottom: 20,
    left: 400
  };

  let begin = new Date();

  let timerExpand;
  timerText = new Topoboard.graphs.Text({
    layer: timeCountLayer,
    content: '00.00.000',
    position: function(ctx, measure) {
      let font = this.font;
      let x = ctx.canvas.width / 2;
      let y = 30;
      let textWidth = measure.width;
      timerExpand = new TB.model.Expand(
        x - textWidth - padding.left, 
        y - font.fontSize / 2 - padding.top, 
        textWidth * 2 + padding.left + padding.right, 
        font.fontSize + padding.top + padding.bottom
      );

      return new TB.model.Vector(x, y);
    },
    font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
    style: '#fcc'
  }).fill();
  let timerBox = new Topoboard.graphs.Rect({
    layer: timeCountLayer,
    expand: timerExpand,
    lineWidth: 2,
    style: function(ctx) {
      let gradient = new TB.model.RadialGradient(
        ctx, 
        new TB.model.Radial(timerExpand.x + timerExpand.w / 2, timerExpand.y + timerExpand.h / 2, 30), 
        new TB.model.Radial(timerExpand.x + timerExpand.w / 2, timerExpand.y + timerExpand.h / 2, 400), 
        [
          {step: 0, color: '#0000'},
          {step: 0.5, color: '#0003'},
          {step: 1, color: '#0005'}
        ]
      );
      return gradient;
    }
  }).fill();
  timeCountLayer.refresh();
  board.refresh();


  tcAni = new Topoboard.Animation();
  tcAni.onenterframe = function() {
    timeCountLayer.refresh(); // 图层存在动画, 需要刷新
    board.refresh(); // 画板存在动画, 需要刷新
  };
  let dx = 0;
  let dy = 0;
  tcAni.addTask(() => {
    let dur = new Date() - begin;
    let cur = new Date(dur);
    let ms = cur.getMilliseconds();
    ms = ms > 10? (ms > 100? ms: '0' + ms): '00' + ms;
    let s = cur.getSeconds();
    s = s > 10? s: '0' + s;
    let m = cur.getMinutes();
    m = m > 10? m: '0' + m;
    timerText.content = `${m}.${s}.${ms}`;
    timerText.refresh();
  });
  tcAni.start();
}

let isFinished =  (m) => {
  let ma = m.dest;
  let ml = ma.x;
  let mt = ma.y;
  let mr = ma.x + ma.w;
  let mb = ma.y + ma.h;

  let ha = hero.dest;
  let hl = ha.x;
  let ht = ha.y;
  let hr = ha.x + ha.w;
  let hb = ha.y + ha.h;
  // 上下
  if(ml < hr && mr > hl) {
    if(Math.abs(mt - ht) <= ha.h) {
      // console.log('上下');
      doFinish(m);
    }
  }
  // 左右
  else if(mt < hb && mb > ht) {
    if(Math.abs(ml - hl) <= ha.w) {
      // console.log('左右');
      doFinish(m);
    }
  }
}

let doFinish = (m) => {
  console.log('finished');
  console.log('monster: ' + JSON.stringify(m.dest), 'hero: ' + JSON.stringify(hero.dest));
  tcAni.stop();
  heroAni.stop();
  monsterAni.stop();
  monsterCreateAni.stop();
  let score = timerText.content;
  console.log(score);
  // 显示结束界面
  addEndModal(score);
}

function addEndModal(score) {
  addModal(endLayer, '重新开始', () => {
    // 重置游戏
  }, score);
  endLayer.refresh();
  board.refresh();
}

console.log(board);

window.board3 = board;

function addBtns() {
  let gameBox = addAreaBox(btnBox, '游戏控制');
  // 添加input 滑块
  let heroSpeed = addRangeInput(gameBox, '英雄速度', config.hero.maxSpeed, config.hero.speed, function(e) {
    config.hero.speed = + e.target.value;
  });
  let monsterSpeed = addRangeInput(gameBox, '怪物速度', config.monster.maxSpeed, config.monster.speed, function(e) {
    config.monster.speed = + e.target.value;
  });
  let monsterTotal = addRangeInput(gameBox, '怪物最大数量', config.monster.total, config.monster.total, function(e) {
    config.monster.total = + e.target.value;
  });

  // 注册页面按钮事件
  let shotBox = addAreaBox(btnBox, '快照');
  let img = createElement('img');
  addBtn(shotBox, '快照', e => {
    let data = board.snapshot();
    img.src = data;
    imgViewBox.appendChild(img);
  });
  addBtn(shotBox, '导出快照', e => {
    board.download();
  });

  let layerBox = addAreaBox(btnBox, '图层控制');
  board.layers.forEach(layer => {
    if(layer.className == 'loading-layer') {
      return;
    }
    let title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
    addBtn(layerBox, title, (e) => {
      layer.toggle();
      title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
      e.target.innerText = title;
    });
  });

  // 动画录制
  let gifAni = new Topoboard.Animation();
  let addFrame = false, i =  0;
  gifAni.onenterframe = function() {
      addFrame && gif && gif.addFrame(board.ctx, {copy: true, delay: 1000 / 60});
  };
  gifAni.start();

  let gif;
  addBtn(shotBox, '开始录制', e => {
    addFrame = ! addFrame;
    // 开始录制
    if(addFrame) {
      e.target.innerText = '结束录制';
      gif = new GIF({
        worker: 1,
        quality: 1,
        width: 512,
        height: 480
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
}
