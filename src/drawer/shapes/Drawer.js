//画家
function Drawer(ctx) {
	this.ctx = ctx;
}
Drawer.prototype = {
	draw: function(executor, styler) {
		this.ctx.beginPath();
        styler && styler(this.ctx);
        executor && executor(this.ctx);
	}, 
	fill: function(executor, styler) {
		this.draw(executor, styler);
		this.ctx.fill();
	}, 
	stroke: function(executor, styler) {
		this.draw(executor, styler);
		this.ctx.stroke();
	},
	closePath: function() {
        this.ctx.closePath();
	}
};

module.exports = Drawer;