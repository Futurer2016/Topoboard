import { createBoardBox, addAreaBox, addRangeInput } from '../util/dom';
import snapshot from '../util/snapshot';

// 背景
import Bk from '../avoid/Bk';
// 加载中
import Loading from '../basic/Loading';
// 遮罩层
import BeginModal from '../avoid/BeginModal';
import EndModal from '../avoid/EndModal';
// 计时器
import CountDown from '../avoid/CountDown';
import Timer from '../avoid/Timer';
// 人物
import Hero from '../avoid/Hero';
import Monster from '../avoid/Monster';
/**
 * topo图
 */
let { container, btnBox, imgViewBox } = createBoardBox('board5', '小游戏-躲避怪物');
container.style.width = '514px';
container.style.height = '482px';

let json, imgList, 
// 各个对象
avoids  = {};
// 角色配置
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
let callbacks = {
  imgLoaded: function(imgs) {
    imgList = imgs;
    // 1. 背景图片
    avoids.bk = new Bk(board, imgs.bg);
    // 显示背景图片
    avoids.bk.show();

    let padding = {
      top: 10,
      right: 20,
      bottom: 10,
      left: 20
    };
    let area = config['area'];
    // 2. 开始遮罩层
    avoids.beginModal = new BeginModal(board, area, '开始游戏', padding, () => {
      // 开始倒计时
      avoids.countDown.show();
      avoids.countDown.doAni();
      // 英雄出生
      avoids.hero.show();
    });
    // 显示开始遮罩层
    avoids.beginModal.show();
    // 3. 倒计时
    avoids.countDown = new CountDown(board, json['count-down'], () => {
      // 计时开始
      avoids.timer.show();
      avoids.timer.doAni();
      // 英雄开始活动
      avoids.hero.action();
      avoids.hero.doAni();
      // 怪物开始出生
      avoids.monster.show();
      avoids.monster.doAni();
    });
    // 4. 开始游戏
    // 4.1 开始计时
    avoids.timer = new Timer(board, {
      top: 20,
      right: 400,
      bottom: 20,
      left: 400
    });
    // 4.2 英雄定义
    avoids.hero = new Hero(board, imgList.hero, area, config['hero']);
    // 4.3 怪物出生
    avoids.monster = new Monster(board, imgList.monster, area, config['monster'], (m) => {
      let ma = m.dest;
      let ml = ma.x;
      let mt = ma.y;
      let mr = ma.x + ma.w;
      let mb = ma.y + ma.h;

      let ha = avoids.hero.graph.dest;
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
    });

    // 6. 游戏结束
    let endp = {
      top: 30,
      right: 400,
      bottom: 30,
      left: 400
    };
    avoids.endModal = new EndModal(board, area, '重新开始', padding, endp, (e) => {
      // 重新开始
      setTimeout(() => {
        // 开始倒计时
        avoids.countDown.show();
        avoids.countDown.doAni();
        // 英雄出生
        avoids.hero.show();
      }, 0);
    });
    // 添加控制按钮
    addBtns();
    // 结束加载中图层
    avoids.loading.destroy();
    board.refresh();
  },
  // 更新加载中信息内容
  imgLoading: function(count, total) {
    avoids.loading.update(count);
  },
  imgInfoReady: function(total) {
    // 配置全文
    json = imgManager.data;
    // 角色配置
    config = json['roles'];
    avoids.loading = new Loading(board, total);
    avoids.loading.doAni();
  }
};

// 画板
let board = new Topoboard(container, ['click', 'mousemove', 'mouseleave', 'keydown', 'keyup']);

let doFinish = (m) => {
  avoids.timer.layer.hide();
  avoids.timer.stopAni();
  avoids.hero.stopAni();
  avoids.monster.stopAni();

  // 显示结束界面
  avoids.endModal.show(avoids.timer.dur, avoids.timer.durText);
  avoids.endModal.active();
}

console.log(board);

window.board5 = board;

function addBtns() {
  let gameBox = addAreaBox(btnBox, '游戏控制');
  // 添加input 滑块
  let heroSpeed = addRangeInput(gameBox, '英雄速度', avoids.hero.heroConf.maxSpeed, avoids.hero.heroConf.speed, function(e) {
    avoids.hero.heroConf.speed = + e.target.value;
  });
  let monsterSpeed = addRangeInput(gameBox, '怪物速度', avoids.monster.monsterConf.maxSpeed, avoids.monster.monsterConf.speed, function(e) {
    avoids.monster.monsterConf.speed = + e.target.value;
  });
  let monsterTotal = addRangeInput(gameBox, '怪物最大数量', avoids.monster.monsterConf.total, avoids.monster.monsterConf.total, function(e) {
    avoids.monster.monsterConf.total = + e.target.value;
  });

  snapshot(btnBox, board, imgViewBox);
}
