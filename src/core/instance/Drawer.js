const { extend } = require('../util/inherit');

function addShadow(ctx, shadow) {
	ctx.shadowBlur = shadow.blur;
	ctx.shadowColor = shadow.color;
	ctx.shadowOffsetX = shadow.x;
	ctx.shadowOffsetY = shadow.y;
}
//画家
function Drawer(graph, ctx) {
	this.graph = graph;
	this.ctx = ctx;
}

extend(Drawer.prototype, {
	closePath: function() {
		this.ctx.closePath();
	},
	draw: function(executor) {
		this.ctx.beginPath();
		this.ctx.fillStyle = this.graph.color;
		addShadow(this.ctx, this.graph.shadow);
    executor && executor(this.ctx);
	}, 
	fill: function(executor) {
		this.draw(executor);
		this.ctx.fill();
		this.filled = true;
	}, 
	isFilled: function() {
		return this.filled;
	},
	stroke: function(executor) {
		this.draw(executor);
		this.ctx.stroke();
		this.stroked = true;
	},
	isStroked: function() {
		return this.stroked;
	}
});

module.exports = Drawer;