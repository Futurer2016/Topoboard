const Vector = require('./Vector');

function Expand(x, y, w, h) {
  if(! (this instanceof Expand)) {
    return new Expand(x, y, w, h);
  }

  Vector.call(this, x, y);

  this.w = w;
  this.h = h;
}

module.exports = Expand;