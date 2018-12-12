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

function Scene(callable, period) {
	this.callable = callable;
	this.period = period;
	this.timer;
}
//开始动画
Scene.prototype.active = function() {
	var self = this;
	this.timer = setInterval(function() {
		self.callable();
	}, this.period);
};
//停止动画
Scene.prototype.stop = function() {
	clearInterval(this.timer);
	this.timer = null;
};

module.exports = Scene;