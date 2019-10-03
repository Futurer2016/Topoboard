
export default class Modal {
  constructor(layer, area) {
    this.layer = layer;
    this.graph = null;
    this.area = area;
    this._init();
  }
  _init() {
    this._initGraph();
  }
  _initGraph() {
    // 遮罩层
    this.graph = new Topoboard.graphs.Rect({
      layer: this.layer,
      expand: new TB.model.Expand(0, 0, this.area.width, this.area.height),
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
  }
}