/**
 * animation
 */
var requestAnimationFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
			//所有都不支持，用setTimeout兼容
		function (callback) {
			return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL)); // make interval as precise as possible.
		};
})();

/**
 * cancel raf
 */
var cancelAnimationFrame = (function () {
	return window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		function (id) {
			window.clearTimeout(id);
		};
})();

function Animation(board, period) {
	this.board = board;
	this.period = period;
	this.timer;
}
//开始动画
Animation.prototype.active = function(changing) {
	let self = this;
	this.timer = setInterval(function() {
		if(self.board) {
            self.board.clean();
            self.board.refresh();
		}
		changing && changing();
	}, this.period);
};
//停止动画
Animation.prototype.stop = function() {
	clearInterval(this.timer);
	this.timer = null;
};

module.exports = Animation;