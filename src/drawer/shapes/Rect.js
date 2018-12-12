const Graph = require('./Graph');
const {inherit} = require('../../base/utils');

function Rect({layer, cutParams, width, color}) {
    Graph.call(this, layer, false);

    this.cutParams = cutParams;
    this.width = width;
    this.color = color;
}

inherit(Rect, Graph, {
    fill: function() {
        let self = this;
        this.drawer.fill(function(ctx) {
            ctx.fillRect(self.cutParams.x, self.cutParams.y, self.cutParams.w, self.cutParams.h);
        }, function(ctx) {
            ctx.fillStyle = self.color;
            ctx.lineWidth = self.width;
        });

        this.push('fill');
        return this;
    },
    stroke: function() {
        let self = this;
        this.drawer.stroke(function(ctx) {
            ctx.strokeRect(self.cutParams.x, self.cutParams.y, self.cutParams.w, self.cutParams.h);
        }, function(ctx) {
            ctx.strokeStyle = self.color;
            ctx.lineWidth = self.width;
        });

        this.push('stroke');
        return this;
    }
});

module.exports = Rect;