const Graph = require('./Graph');
const inherit = require('../../base/inherit');

//圆形
function Circle({layer, o, r, width, color, closePath}) {
    Graph.call(this, layer, closePath);

	this.o = o;
	this.r = r;
	this.width = width;
	this.color = color;
}
inherit(Circle, Graph, {
    fill: function() {
        var self = this;
        this.drawer.fill(function(ctx) {
            ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI * 2, true);
        }, function(ctx) {
            ctx.fillStyle = self.color;
        });

        this.push('fill');
        return this;
    },
    stroke: function() {
        var self = this;
        this.drawer.stroke(function(ctx) {
			ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI*2, true);
			self.closePath && ctx.closePath();
        }, function(ctx) {
			ctx.strokeStyle = self.color;
			ctx.lineWidth = self.width;
        });

        this.push('stroke');
        return this;
    }
});

module.exports = Circle;