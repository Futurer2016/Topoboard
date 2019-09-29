const { extend, inherit } = require('../util/inherit');

function Font(fontSize, fontFamily) {
  if(! (this instanceof Font)) {
    return new Font(fontSize, fontFamily);
  }
  this.fontSize = fontSize;
  this.fontFamily = fontFamily;
}

extend(Font.prototype, {
  getFont() {
    return `${this.fontSize}px ${this.fontFamily}`;
  }
});

module.exports = Font;