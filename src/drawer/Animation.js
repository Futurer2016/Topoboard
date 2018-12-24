const DEFAULT_INTERVAL = 1000 / 60;
//初始化状态
const STATE_INITIAL = 0;
//开始状态
const STATE_START = 1;
//停止状态
const STATE_STOP = 2;
/**
 * animation
 */
const requestAnimationFrame = (function () {
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
const cancelAnimationFrame = (function () {
	return window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		function (id) {
			window.clearTimeout(id);
		};
})();

/**
 *
 * @param board
 * @param period 每一次回调的间隔时间
 * @constructor
 */
function Animation(board, interval) {
	this.board = board;
	this.interval = interval || DEFAULT_INTERVAL;
	this.timer = 0;
    this.state = STATE_INITIAL;
}

/**
 * 时间轴上每一次回调执行的函数
 * @param time 从动画开始到当前执行的时间
 */
Animation.prototype.onenterframe = function(time) {

};
/**
 * 开始动画
 */
Animation.prototype.start = function() {
    if (this.state === STATE_START)
        return;
    this.state = STATE_START;

    startAnimation(this, +new Date());
};

/**
 * 重新开始动画
 */
Animation.prototype.restart = function () {
    if (this.state === STATE_START)
        return;
    if (!this.dur || !this.interval)
        return;

    this.state = STATE_START;

    //无缝连接停止动画的状态
    startAnimation(this, +new Date() - this.dur);
};

/**
 * 停止动画
 */
Animation.prototype.stop = function() {
    if (this.state !== STATE_START)
        return;
    this.state = STATE_STOP;

    //如果动画开始过，则记录动画从开始到当前所经历的时间
    if (this.startTime) {
        this.dur = +new Date() - this.startTime;
    }
    cancelAnimationFrame(this.timer);
};

/**
 * 时间轴动画启动函数
 * @param animation 时间轴实例
 * @param startTime 动画开始时间戳
 */
function startAnimation(animation, startTime) {
    //记录上一次回调的时间戳
    let lastTick = +new Date();

    animation.startTime = startTime;
    nextTick.interval = animation.interval;
    nextTick();

    /**
     * 每一帧执行的函数
     */
    function nextTick() {
        let now = +new Date();

        animation.timer = requestAnimationFrame(nextTick);

        //如果当前时间与上一次回调的时间戳相差大于我们设置的间隔时间，表示可以执行一次回调函数。
        if (now - lastTick >= animation.interval) {
        	if(animation.board) {
				animation.board.clean();
				animation.board.refresh();
        	}
            animation.onenterframe(now - startTime);
            lastTick = now;
        }
    }
}

module.exports = Animation;