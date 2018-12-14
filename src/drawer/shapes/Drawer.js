
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
Drawer.prototype = {
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
	}, 
	stroke: function(executor) {
		this.draw(executor);
		this.ctx.stroke();
	}
};

module.exports = Drawer;