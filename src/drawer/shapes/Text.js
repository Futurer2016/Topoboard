const Graph = require('./Graph');
const Vector = require('../component/Vector');
const Font = require('../component/Font');
const {inherit} = require('../../base/utils');

function rePosition(text) {
    let ctx = text.layer.getContext();
    let x = Math.floor((ctx.canvas.width - ctx.measureText(text.content).width) / 2);
    let y = Math.floor((ctx.canvas.height - text.font.fontSize) / 2);
    return new Vector(x, y);
}

function Text({layer, position, content, font, color, shadow}) {
    Graph.call(this, {layer, closePath: true, color, shadow});

    this.content = content;
    this.font = font || new Font(18, '微软雅黑');
    this.isCenter = ! position;
    this.position = position || rePosition(this);
}

inherit(Text, Graph, {
    fill: function() {
        let self = this, ctx = this.drawer.ctx;
        ctx.font = self.font.getFont();
        ctx.fillStyle = this.color;
        if(self.isCenter) {
            self.position = rePosition(self);
        }
        ctx.fillText(self.content, self.position.x, self.position.y);
        this.closePath && ctx.closePath();

        this.push('fill');
        return this;
    }
});

module.exports = Text;