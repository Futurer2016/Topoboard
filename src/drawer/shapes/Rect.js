const Graph = require('./Graph');
const {inherit} = require('../../base/utils');

function Rect({layer, cutParams, lineWidth, color, shadow}) {
    Graph.call(this, {layer, closePath: false, color, shadow});

    this.cutParams = cutParams;
    this.lineWidth = lineWidth;
}

inherit(Rect, Graph, {
    draw: function(ctx) {
        let self = this;
        ctx.rect(self.cutParams.x, self.cutParams.y, self.cutParams.w, self.cutParams.h);
        ctx.strokeStyle = self.color;
        ctx.lineWidth = self.lineWidth;
    },
    fill: function() {
        let self = this;
        this.drawer.fill(function(ctx) {
            self.draw(ctx);
        });

        this.push('fill');
        return this;
    },
    stroke: function() {
        let self = this;
        this.drawer.stroke(function(ctx) {
            self.draw(ctx);
        });

        this.push('stroke');
        return this;
    }
});

module.exports = Rect;