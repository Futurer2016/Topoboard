const Vector = require('./Vector');

function Shadow(x, y, color, blur) {
  if(this instanceof Window) {
    return new Shadow(x, y, color, blur);
  }
  Vector.call(this, x, y);

  this.color = color;
  this.blur = blur;
}

module.exports = Shadow;