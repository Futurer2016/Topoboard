import LayerModel from '../basic/LayerModel';
import Modal from '../basic/Modal';
import Btn from '../basic/Btn';

export default class BeginModal extends LayerModel {
  constructor(board, area, text, padding, onclick, className = 'begin-layer') {
    super(board, className);
    this.area = area;
    this.text = text;
    this.padding = padding;
    this.onclick = onclick;
    className == 'begin-layer' && this._init();
  }
  _init() {
    this._initGraph();
  }
  _initGraph() {
    this.modal = new Modal(this.layer, this.area);
    // 开始按钮
    this.btn = new Btn(this.layer, {
      padding: this.padding, 
      text: this.text, 
      style: function(ctx, expand) {
        let gradient = new TB.model.RadialGradient(
          ctx, 
          new TB.model.Radial(expand.x + expand.w / 2, expand.y + expand.h / 2, 30), 
          new TB.model.Radial(expand.x + expand.w / 2, expand.y + expand.h / 2, 100), 
          [
            {step: 0, color: '#003c3c'},
            {step: 0.5, color: '#001c1c'},
            {step: 1, color: '#000'}
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
  }
}