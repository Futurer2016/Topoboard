const Graph = require('./Graph');
const {inherit} = require('../../base/utils');

function Text({layer, position, content, font, color, shadow}) {
    Graph.call(this, {layer, closePath: true, color, shadow});

    this.content = content;
    this.position = position;
    this.font = font;
}

inherit(Text, Graph, {
    fill: function() {
        let self = this, ctx = this.drawer.ctx;
        ctx.font = self.font;
        ctx.fillStyle = this.color;
        ctx.fillText(self.content, self.position[0], self.position[1]);
        this.closePath && ctx.closePath();

        this.push('fill');
        return this;
    }
});

module.exports = Text;