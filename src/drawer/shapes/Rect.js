const Graph = require('./Graph');
const inherit = require('../../base/inherit');

function Rect({layer, lt, rb, width, color}) {
    Graph.call(this, layer, false);

    this.lt = lt;
    this.rb = rb;
    this.width = width;
    this.color = color;
}

inherit(Rect, Graph, {
    fill: function() {
        var self = this;
        this.drawer.fill(function(ctx) {
            ctx.fillRect(self.lt[0], self.lt[1], self.rb[0], self.rb[1]);
        }, function(ctx) {
            ctx.fillStyle = self.color;
            ctx.lineWidth = self.width;
        });

        this.push('fill');
        return this;
    },
    stroke: function() {
        var self = this;
        this.drawer.stroke(function(ctx) {
            ctx.strokeRect(self.lt[0], self.lt[1], self.rb[0], self.rb[1]);
        }, function(ctx) {
            ctx.strokeStyle = self.color;
            ctx.lineWidth = self.width;
        });

        this.push('stroke');
        return this;
    }
});

module.exports = Rect;