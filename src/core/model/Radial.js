const Vector = require('./Vector');

function Radial(x, y, r) {
  if(! (this instanceof Radial)) {
    return new Radial(x, y, r);
  }

  Vector.call(this, x, y);

  this.r = r;
}

module.exports = Radial;