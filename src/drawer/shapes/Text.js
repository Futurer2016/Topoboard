const Graph = require('./Graph');
const Vector = require('../component/Vector');
const {inherit} = require('../../base/utils');

function Text({layer, position, content, font, color, shadow}) {
    Graph.call(this, {layer, closePath: true, color, shadow});

    this.content = content;
    this.position = position || new Vector(layer.board.getCanvas().width, layer.board.getCanvas().height);
    this.font = font;
}

inherit(Text, Graph, {
    fill: function() {
        let self = this, ctx = this.drawer.ctx;
        ctx.font = self.font;
        ctx.fillStyle = this.color;
        ctx.fillText(self.content, self.position.x, self.position.y);
        this.closePath && ctx.closePath();

        this.push('fill');
        return this;
    }
});

module.exports = Text;