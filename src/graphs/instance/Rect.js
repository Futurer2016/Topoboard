const { inherit } = require('../../core/util/inherit');
const Graph = require('../../core/instance/Graph');

function Rect({layer, expand, lineWidth, color, shadow, visible}) {
    Graph.call(this, {layer, closePath: false, color, shadow, visible});

    this.expand = expand;
    this.lineWidth = lineWidth;
}

inherit(Rect, Graph, {
    draw: function(ctx) {
        let self = this;
        ctx.rect(self.expand.x, self.expand.y, self.expand.w, self.expand.h);
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