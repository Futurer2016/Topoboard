

export default class Btn {
  constructor(layer, {x, y, padding, text, style, color, onclick}) {
    this.layer = layer;
    this.x = x;
    this.y = y;
    this.padding = padding;
    this.text = text;
    this.style = style;
    this.color = color;

    this.onclick = onclick;

    this._init();
  }
  _init() {
    let _this = this;
    let boxExpand;
    this.btnText = new Topoboard.graphs.Text({
      layer: this.layer,
      content: this.text,
      position: function(ctx, measure) {
        let font = this.font;
        let x = _this.x || ctx.canvas.width / 2;
        let y = _this.y || ctx.canvas.height / 1.5;
        let textWidth = measure.width;
        boxExpand = new TB.model.Expand(
          x - textWidth - _this.padding.left, 
          y - font.fontSize / 2 - _this.padding.top, 
          textWidth * 2 + _this.padding.left + _this.padding.right, 
          font.fontSize + _this.padding.top + _this.padding.bottom
        );

        return new TB.model.Vector(x, y);
      },
      font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
      style: _this.color || '#fcc'
    }).fill();
    this.btn = new Topoboard.graphs.Rect({
      layer: this.layer,
      expand: boxExpand,
      lineWidth: 2,
      style: function(ctx) {
        return _this.style.call(this, ctx, boxExpand);
      }
    }).fill();
    this.btn.on('click', (e) => {
      this.onclick && this.onclick();
    });
    this.layer.pushGraph(this.btnText);
  }
}