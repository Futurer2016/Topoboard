const {extend, newCanvas, showCanvas} = require('../base/utils');

/**
 * 图层对象
 * @param board
 * @param attributes
 * @constructor
 */
function Layer(board, className, alpha) {
    //画板对象
    this.board = board;

    this.className = className;
    //透明模式
	this.alpha = alpha;
	//图元队列
	this.graphs = [];
	//隐藏的图元队列
	this._hide_graphs = [];

	className = 'board-canvas' + (typeof className == 'undefined'? '' : ' ' + className);
    // let canvas = newCanvas(this.board.ele, className);
    // let cacheCanvas = newCanvas(canvas, className);
    let cacheCanvas = newCanvas(this.board.ele, className);
    if(typeof this.alpha == 'undefined' || this.alpha === true) {
        //目标canvas上下文
        // this.destCtx = canvas.getContext('2d');
        //隐藏canvas上下文
        this.ctx = cacheCanvas.getContext('2d');
    }
    //不透明的画布
    else {
        //目标canvas上下文
        // this.destCtx = canvas.getContext('2d', {alpha: false});
        //隐藏canvas上下文
        this.ctx = cacheCanvas.getContext('2d', {alpha: false});
    }
};

/**
 * 扩展基础方法
 */
extend(Layer.prototype, {
    //获取画板对象
    getBoard: function() {
        return this.board;
    },
    unshiftLayer() {
        this.board.unshiftLayer(this);
    },
    pushLayer() {
        this.board.pushLayer(this);
    },
    remove() {
        this.board.removeLayer(this);
    },
    //将 layer 置顶
    top() {
        this.remove();
        this.pushLayer();
    },
    //将 layer 置底
    bottom() {
        this.remove();
        this.unshiftLayer();
    },
    //重置canvas的大小
    resize: function(width, height) {
        this.ctx.canvas.width = width || this.ctx.canvas.width;
        this.ctx.canvas.height = height || this.ctx.canvas.height;
        // this.destCtx.canvas.width = width || this.destCtx.canvas.width;
        // this.destCtx.canvas.height = height || this.destCtx.canvas.height;
    },
	//导出图片
	export() {
        let imgData = this.ctx.canvas.toDataURL();
        let img = new Image();
        img.src = imgData;

        return img;
	}
});

/**
 * 扩展绘制类方法
 */
extend(Layer.prototype, {
    //获取绘图画笔
    getContext() {
        return this.ctx;
    },
    //清除所有画板元素，清除后使用refresh不能重新渲染
    clear: function() {
        this.hide();
        this._hide_graphs.forEach(graph => graph.clear());
        this._hide_graphs = [];
    },
    //擦除画板，擦除后可以使用refresh重新渲染
    clean: function() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // this.destCtx.clearRect(0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
    },
    //刷新
    refresh: function() {
        this.clean();
        //刷新图元信息
        this.graphs.forEach(graph => graph.refresh());
        //显示图片内容
        // showCanvas(this.destCtx, this.ctx);
    },
	//显示
    show: function() {
        if(this._hide_graphs.length == 0) {return;}
        this.graphs = this._hide_graphs;
        this._hide_graphs = [];
    },
	//隐藏
    hide: function() {
        if(this.graphs.length == 0) {return;}
        this._hide_graphs = this.graphs;
        this.graphs = [];
    }
});

/**
 * 扩展图元相关方法
 */
extend(Layer.prototype, {
    //获取图元对象
    getGraph: function(index) {
        return this.graphs[index];
    },
    //获取图元列表
    getGraphs: function() {
        return this.graphs;
    },
    //添加图元
    addGraph: function(item) {
        this.graphs.push(item);
    },
    //删除图元
    removeGraph: function(item) {
        this.graphs.splice(this.graphs.indexOf(item), 1);
    }
});

module.exports = Layer;