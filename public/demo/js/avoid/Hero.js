import LayerModel from "../basic/LayerModel";

export default class Hero extends LayerModel {
  constructor(board, img, area, heroConf, dest) {
    super(board, 'hero-layer');
    this.img = img;
    this.area = area;
    this.heroConf = heroConf;
    this.dest = dest;
    // true 保持不动 false 可以移动
    this.holdon = true;
    this._init();
  }
  _init() {
    this._initGraph();
    this._initAni();
  }
  _initGraph() {
    this.graph = new Topoboard.graphs.Img({
      layer: this.layer,
      image: this.img,
      src: new TB.model.Expand(0, 0, 32, 32),
      dest: new TB.model.Expand(250, 150, 32, 32)
    }).draw();
  }
  _initAni() {
    let _this = this;
    let dx = 0;
    let dy = 0;
    // 监听事件
    document.addEventListener('keydown', function(e) {
      if(_this.holdon) return;
      // 上
      if(e.keyCode == 38) {
        dy = -_this.heroConf.speed;
      }
      // 右
      else if(e.keyCode == 39) {
        dx = _this.heroConf.speed;
      }
      // 下
      else if(e.keyCode == 40) {
        dy = _this.heroConf.speed;
      }
      // 左
      else if(e.keyCode == 37) {
        dx = -_this.heroConf.speed;
      }
      e.preventDefault();
    });
    document.addEventListener('keyup', function(e) {
      if(_this.holdon) return;
      if(e.keyCode == 38 || e.keyCode == 40) {
        dy = 0;
      }
      else if(e.keyCode == 37 || e.keyCode == 39) {
        dx = 0;
      }
    });
    this.animation = new Topoboard.Animation();
    this.animation.onenterframe = () => {
      this.active();
    };
    this.animation.addTask(() => {
      this.graph.dest.x += dx;
      this.graph.dest.y += dy;

      if(this.graph.dest.x < this.area.border) {
        this.graph.dest.x  = this.area.border;
      }
      if(this.graph.dest.y < this.area.border) {
        this.graph.dest.y  = this.area.border;
      }
      let maxX = this.area.width - this.area.border - this.heroConf.width;
      let maxY = this.area.height - this.area.border - this.heroConf.height;
      if(this.graph.dest.x > maxX) {
        this.graph.dest.x  = maxX;
      }
      if(this.graph.dest.y > maxY) {
        this.graph.dest.y  = maxY;
      }

      this.graph.refresh();
    });
  }
  action() {
    this.holdon = false;
  }
  holdon() {
    this.holdon = true;
  }
  show() {
    this.graph.dest = new TB.model.Expand(250, 150, 32, 32);
    this.graph.refresh();
    super.show();
  }
}