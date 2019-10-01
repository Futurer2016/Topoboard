const { inherit } = require('../util/inherit');
const Gradient = require('./abs/Gradient');

/**
 * 线性渐变对象模型
 * @param {CanvasRenderingContext2D} ctx
 * @param {Vector} begin
 * @param {Vector} end
 * @param {Array|Object} colors [{step: 0, color: '#000'}, {step: 1, color: '#fff'}]
 * @constructor
 */
function LinearGradient(ctx, begin, end, colors) {
  if(! (this instanceof LinearGradient)) {
    return new LinearGradient(ctx, begin, end, colors);
  }

  Gradient.call(this, ctx, colors);

  this.begin = begin;
  this.end = end;

  let gradient = ctx.createLinearGradient(begin.x, begin.y, end.x, end.y);
  this.addColorStops(gradient);
  return gradient;
}

inherit(LinearGradient, Gradient);

module.exports = LinearGradient;