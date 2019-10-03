import LayerModel from '../basic/LayerModel';

export default class CountDown extends LayerModel {
  constructor(board, countDownConfig, onready) {
    super(board, 'count-down-layer');
    // 最大字体
    this.max = countDownConfig.max;
    // 最小字体
    this.min = countDownConfig.min;
    // 字体递减步数
    this.step = countDownConfig.step;
    // 文字保持在最小字体的最大周期数
    this.minTime = countDownConfig.minTime;
    // 背景图片
    this.graph = null;
    this.onready = onready;
    this._init();
  }
  _init() {
    this._initGraph();
    this._initAni();
  }
  _initGraph() {
    this.graph = new Topoboard.graphs.Text({
      layer: this.layer,
      content: 3,
      font: new TB.model.Font({fontSize: this.max, fontWeight: 'bold', fontFamily: '微软雅黑'}),
      style: '#f40'
    }).fill();
  }
  _initAni() {
    let count = 0;
    this.animation = new Topoboard.Animation();
    this.animation.onenterframe = () => {
      this.active();
    };
  
    this.animation.addTask(() => {
      // 递减字体
      let size = this.graph.font.fontSize -= this.step;
      // 达到最小字体
      if(size <= this.min) {
        this.graph.font.fontSize = this.min;
        count ++;
      }
      // 最小字体时长到时
      if(count >= this.minTime) {
        count = 0;
        this.graph.content --;
        this.graph.content && (this.graph.font.fontSize = this.max);
      }
      if(this.graph.content <= 0) {
        this.animation.stop();
        this.graph.remove();
        
        this.onready && this.onready();
      }
  
      this.graph.refresh();
    });
  }
}