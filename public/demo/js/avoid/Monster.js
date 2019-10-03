import LayerModel from "../basic/LayerModel";
import { random } from '../util/util';

export default class Monster extends LayerModel {
  constructor(board, img, area, monsterConf, onmove) {
    super(board, 'monster-layer');
    this.img = img;
    this.area = area;
    this.monsterConf = monsterConf;
    this.onmove = onmove;
    this._init();
  }
  _init() {
    this._initAni();
  }
  _initAni() {
    this.monsters = [];
    // 怪物出生动画
    let maxAngle = 85 * Math.PI / 180;
    this.monsterCreateAni = new Topoboard.Animation(1000);
    this.monsterCreateAni.onenterframe = () => {
      this.active();
    };
    this.monsterCreateAni.addTask(() => {
      if(this.monsters.length >= this.monsterConf.total) {
        this.monsterCreateAni.stop();
        return;
      }
      let m = new Topoboard.graphs.Img({
        layer: this.layer,
        image: this.img,
        src: new TB.model.Expand(0, 0, 32, 32),
        dest: new TB.model.Expand(this.area.border, this.area.border, 32, 32)
      }).draw();
      
      let angle = random(1, maxAngle);
      let dx = this.monsterConf.speed * Math.sin(angle);
      let dy = this.monsterConf.speed * Math.sin(maxAngle - angle);
      m.dx = dx;
      m.dy = dy;

      this.monsters.push(m);
    });

    // 怪物移动动画
    this.monsterAni = new Topoboard.Animation();
    this.monsterAni.onenterframe = () => {
      this.monsters.forEach(monster => monster.refresh());
      this.active();
    };
    this.monsterAni.addTask(() => {
      this.monsters.forEach(m => {
        m.dest.x += m.dx;
        m.dest.y += m.dy;
        if(m.dest.x < this.area.border) {
          m.dest.x = this.area.border;
          m.dx = -m.dx;
        }
        if(m.dest.y < this.area.border) {
          m.dest.y = this.area.border;
          m.dy = -m.dy;
        }
        let maxX = this.area.width - this.area.border - this.monsterConf.width;
        let maxY = this.area.height - this.area.border - this.monsterConf.height;
        if(m.dest.x > maxX) {
          m.dest.x = maxX;
          m.dx = -m.dx;
        }
        if(m.dest.y > maxY) {
          m.dest.y = maxY;
          m.dy = -m.dy;
        }
        this.onmove && this.onmove(m);
      });
    });
  }
  doAni() {
    this.monsterCreateAni && this.monsterCreateAni.start();
    this.monsterAni && this.monsterAni.start();
  }
  stopAni() {
    this.monsterCreateAni && this.monsterCreateAni.stop();
    this.monsterAni && this.monsterAni.stop();
  }
  show() {
    this.layer.clear();
    this.monsters = [];
    super.show();
  }
}