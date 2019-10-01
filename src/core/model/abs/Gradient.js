const { extend } = require('../../util/inherit');

function Gradient(ctx, colors) {
  if(! (this instanceof Gradient)) {
    return new Gradient(ctx, colors);
  }

  this.ctx = ctx;
  this.colors = colors;
}

extend(Gradient.prototype, {
  addColorStops(gradient) {
    let colors = this.colors;
    if(! Array.isArray(colors)) {
      colors = [colors];
    }
    colors.forEach(color => gradient.addColorStop(color.step, color.color));
  }
});

module.exports = Gradient;