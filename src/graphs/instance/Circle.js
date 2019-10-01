const { inherit } = require('../../core/util/inherit');
const Graph = require('../../core/instance/Graph');

//圆形
function Circle({layer, radial, width, style, closePath, shadow}) {
    Graph.call(this, {layer, closePath, style, shadow});

	this.radial = radial;
	this.width = width;
}
inherit(Circle, Graph, {
    fill: function() {
        let _this = this;
        this.drawer.fill(function(ctx) {
            ctx.arc(_this.radial.x, _this.radial.y, _this.radial.r, 0, Math.PI * 2, true);
            _this.closePath && ctx.closePath();
        });

        this.push('fill');
        return this;
    },
    stroke: function() {
        let _this = this;
        this.drawer.stroke(function(ctx) {
			ctx.arc(_this.radial.x, _this.radial.y, _this.radial.r, 0, Math.PI * 2, true);
			ctx.lineWidth = _this.width;
            _this.closePath && ctx.closePath();
        });

        this.push('stroke');
        return this;
    }
});

module.exports = Circle;