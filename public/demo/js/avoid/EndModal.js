import BeginModal from "./BeginModal";
import Btn from '../basic/Btn';

export default class EndModal extends BeginModal {
  constructor(board, area, text, padding, endp, onclick) {
    super(board, area, text, padding, onclick, 'end-layer');
    this.endp = endp;

    this.titleBar = null;
    this._init();
  }
  _init() {
    this._initGraph();
  }
  _initGraph() {
    super._initGraph();
    this.titleBar = new Btn(this.layer, {
      y: 90,
      padding: this.endp, 
      text: '游戏结束', 
      style: function(ctx, expand) {
        let gradient = new TB.model.RadialGradient(
          ctx, 
          new TB.model.Radial(expand.x + expand.w / 2, expand.y + expand.h / 2, 30), 
          new TB.model.Radial(expand.x + expand.w / 2, expand.y + expand.h / 2, 300), 
          [
            {step: 0, color: '#003c3c66'},
            {step: 0.5, color: '#001c1c66'},
            {step: 1, color: '#0006'}
          ]
        );
        return gradient;
      }, 
      color: '#fcc', 
      onclick: () => {
        this.layer.hide();
        this.onclick();
      }
    });
    this.score = new Topoboard.graphs.Text({
      layer: this.layer,
      content: '',
      position: function(ctx, measure) {
        let x = ctx.canvas.width / 2;
        let y = 180;

        return new TB.model.Vector(x, y);
      },
      font: new TB.model.Font({fontSize: 28, fontFamily: '微软雅黑'}),
      style: '#f40'
    }).fill();
  }
  show(dur, score) {
    this.score.content = '坚持时间: ' + score;
    this.score.refresh();
    super.show();
  }
}