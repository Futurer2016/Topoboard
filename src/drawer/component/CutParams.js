const Vector = require('./Vector');

function CutParams(x, y, w, h) {
    Vector.call(this, x, y);

    this.w = w;
    this.h = h;
}

module.exports = CutParams;