const { extend, inherit } = require('../util/inherit');

function Font({fontSize = '16', fontWeight = 'normal', fontFamily = ''}) {
  if(! (this instanceof Font)) {
    return new Font(fontSize, fontFamily);
  }
  this.fontSize = fontSize;
  this.fontWeight = fontWeight;
  this.fontFamily = fontFamily;
}

extend(Font.prototype, {
  getFont() {
    let font = `${this.fontSize}px ${this.fontWeight} ${this.fontFamily}`;
    return font;
  }
});

module.exports = Font;