const {extend} = require('../../base/utils');

function Font(fontSize, fontFamily) {
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
}

extend(Font.prototype, {
    getFont() {
        return `${this.fontSize}px ${this.fontFamily}`;
    }
});

module.exports = Font;