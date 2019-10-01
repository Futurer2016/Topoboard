const { inherit } = require('../util/inherit');
const Gradient = require('./abs/Gradient');

function RadialGradient(ctx, begin, end, colors) {
  if(! (this instanceof RadialGradient)) {
    return new RadialGradient(ctx, begin, end, colors);
  }

  Gradient.call(this, ctx, colors);

  this.begin = begin;
  this.end = end;

  let gradient = ctx.createRadialGradient(begin.x, begin.y, begin.r, end.x, end.y, end.r);
  this.addColorStops(gradient);
  return gradient;
}

inherit(RadialGradient, Gradient);

module.exports = RadialGradient;