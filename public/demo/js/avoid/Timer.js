import LayerModel from "../basic/LayerModel";
import Btn from '../basic/Btn';

export default class Timer extends LayerModel {
  constructor(board, padding) {
    super(board, 'timer-layer');
    this.padding = padding;

    this.banner = null;
    this._init();
  }
  _init() {
    this._initGraph();
    this._initAni();
  }
  _initGraph() {
    this.banner = new Btn(this.layer, {
      y: 30,
      padding: this.padding, 
      text: '00.00.000',
      style: function(ctx, expand) {
        let gradient = new TB.model.RadialGradient(
          ctx, 
          new TB.model.Radial(expand.x + expand.w / 2, expand.y + expand.h / 2, 30), 
          new TB.model.Radial(expand.x + expand.w / 2, expand.y + expand.h / 2, 400), 
          [
            {step: 0, color: '#0000'},
            {step: 0.5, color: '#0003'},
            {step: 1, color: '#0005'}
          ]
        );
        return gradient;
      }, 
      color: '#fcc'
    });
  }
  _initAni() {
    this.animation = new Topoboard.Animation();
    this.animation.onenterframe = () => {
      this.active();
    };
    this.animation.addTask(() => {
      this.dur = new Date() - this.begin;
      let cur = new Date(this.dur);
      let ms = cur.getMilliseconds();
      ms = ms > 10? (ms > 100? ms: '0' + ms): '00' + ms;
      let s = cur.getSeconds();
      s = s > 10? s: '0' + s;
      let m = cur.getMinutes();
      m = m > 10? m: '0' + m;
      this.durText = `${m}.${s}.${ms}`;
      this.banner.btnText.content = this.durText;
      this.banner.btnText.refresh();
    });
  }
  show() {
    this.begin = new Date();
    super.show();
  }
}