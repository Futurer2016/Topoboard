const Graph = require('./Graph');
const {inherit} = require('../../base/utils');

//圆形
function Circle({layer, o, r, width, color, closePath, shadow}) {
    Graph.call(this, {layer, closePath, color, shadow});

	this.o = o;
	this.r = r;
	this.width = width;
}
inherit(Circle, Graph, {
    fill: function() {
        let self = this;
        this.drawer.fill(function(ctx) {
            ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI * 2, true);
            ctx.fillStyle = self.color;
            self.closePath && ctx.closePath();
        });

        this.push('fill');
        return this;
    },
    stroke: function() {
        let self = this;
        this.drawer.stroke(function(ctx) {
			ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI*2, true);
			ctx.strokeStyle = self.color;
			ctx.lineWidth = self.width;
            self.closePath && ctx.closePath();
        });

        this.push('stroke');
        return this;
    }
});

module.exports = Circle;