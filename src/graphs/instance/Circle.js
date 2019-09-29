const { inherit } = require('../../core/util/inherit');
const Graph = require('../../core/instance/Graph');

//圆形
function Circle({layer, o, r, width, color, closePath, shadow}) {
    Graph.call(this, {layer, closePath, color, shadow});

	this.o = o;
	this.r = r;
	this.width = width;
}
inherit(Circle, Graph, {
    fill: function() {
        let _this = this;
        this.drawer.fill(function(ctx) {
            ctx.arc(_this.o.x, _this.o.y, _this.r, 0, Math.PI * 2, true);
            ctx.fillStyle = _this.color;
            _this.closePath && ctx.closePath();
        });

        this.push('fill');
        return this;
    },
    stroke: function() {
        let _this = this;
        this.drawer.stroke(function(ctx) {
			ctx.arc(_this.o.x, _this.o.y, _this.r, 0, Math.PI * 2, true);
			ctx.strokeStyle = _this.color;
			ctx.lineWidth = _this.width;
            _this.closePath && ctx.closePath();
        });

        this.push('stroke');
        return this;
    }
});

module.exports = Circle;