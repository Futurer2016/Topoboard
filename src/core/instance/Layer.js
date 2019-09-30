const { extend } = require('../util/inherit');
const { newCanvas, getContext, showCanvas, snapshot, download } = require('../util/utils');
const { removeEventListener } = require('../events/events');

/**
 * 图层对象
 * @param board
 * @param attributes
 * @constructor
 */
function Layer(board, className, visible = true, alpha = true) {
    //画板对象
    this.board = board;

    this.className = className;
    //透明模式
	this.alpha = alpha;
	//图元队列
    this.graphs = [];
    // 图层: 显示(default) / 隐藏
    this.visible = visible;

	className = 'board-canvas' + (typeof className == 'undefined'? '' : ' ' + className);
    let cacheCanvas = newCanvas(this.board.el, className);
    this.ctx = getContext(cacheCanvas, alpha);

    this.events = {};
};

/**
 * 扩展基础方法
 */
extend(Layer.prototype, {
    //获取画板对象
    getBoard: function() {
        return this.board;
    },
    // 删除图层
    remove: function() {
        return this.board.removeLayer(this);
    },
    //将 layer 置顶
    top() {
        this.board.removeLayer(this);
        this.board.pushLayer(this);
        this.board.refresh();
    },
    //将 layer 置底
    bottom() {
        this.board.removeLayer(this);
        this.board.unshiftLayer(this);
        this.board.refresh();
    },
    //重置layer画布size
    resize: function(width, height) {
        this.ctx.canvas.width = width || this.ctx.canvas.width;
        this.ctx.canvas.height = height || this.ctx.canvas.height;
        // 修改graph的大小
        this.graphs.forEach(graph => graph.resize(width, height));
    },
    //导出图片
    snapshot(title) {
        return snapshot(this.ctx.canvas, title);
    },
    //导出画板数据
    download(title) {
        let data = snapshot(this.ctx.canvas);
        download(data, title);
    }
});

/**
 * 扩展图元相关方法
 */
extend(Layer.prototype, {
    //获取图元列表
    getGraphs: function() {
        return this.graphs;
    },
    //在队列前面插入图元
    unshiftGraph(graph) {
        let graphs = this.graphs;
        let index = graphs.indexOf(graph);
        if(index > -1) {
            graphs.splice(index, 1);
        }
        return graphs.unshift(graph);
    },
    //在队列前面移除图元
    shiftGraph() {
        return this.graphs.shift();
    },
    //在队列末尾追加图元
    pushGraph: function(graph) {
        let graphs = this.graphs;
        let index = graphs.indexOf(graph);
        if(index > -1) {
            graphs.splice(index, 1);
        }
        return graphs.push(graph);
    },
    //在队列末尾移除图元
    popGraph() {
        return this.graphs.pop();
    },
    //删除图元
    removeGraph: function(graph) {
        let index = this.graphs.indexOf(graph);
        if(index == -1) return;
        return this.graphs.splice(index, 1)[0];
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
        this.graphs.forEach(graph => graph.clear());
        this.graphs = [];
    },
    //擦除画板，擦除后可以使用refresh重新渲染
    clean: function(isGraphClean) {
        isGraphClean && this.graphs.forEach(graph => graph.clean());
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    },
    //刷新
    refresh: function(isGraphRefresh) {
        if(! this.visible) {
            this.clean();
            return;
        }
        this.clean(isGraphRefresh);
        // 刷新图元
        isGraphRefresh && this.graphs.forEach(graph => graph.refresh());
        // 刷新图层
        this.graphs.forEach(graph => {
            showCanvas(this.ctx, graph.drawer.ctx);
        });
    },
	//显示
    show: function() {
        if(this.visible) return;
        this.visible = true;
        this.refresh();
        this.board.refresh();
    },
	//隐藏
    hide: function() {
        if(! this.visible) return;
        this.visible = false;
        this.refresh();
        this.board.refresh();
    },
    toggle: function() {
        this.visible = ! this.visible;
        this.refresh();
        this.board.refresh();
    },
    showGraphs: function() {
        this.graphs.forEach(graph => graph.show());
    },
    hideGraphs: function() {
        this.graphs.forEach(graph => graph.hide());
    }
});

extend(Layer.prototype, {
    addEventListener(eventType, cb) {
        this.events[eventType] = this.events[eventType] || [];
        let eventList = this.events[eventType];
        eventList.push(cb);
    },
    removeEventListener(eventType, cb) {
        removeEventListener(this, eventType, cb);
    },
    trigger(event) {
        // 图层隐藏状态
		if(! this.visible) {
			return;
        }
        let bubble;
        let ret;
        // 触发当前图层所有event.type类型的事件
        this.events[event.type] && this.events[event.type].some(cb => {
            bubble = cb.call(this, event);
            if(bubble === true) {
                ret = bubble;
            }
        });
        return ret;
    },
    /**
     * 触发所有图元事件
     * 
     * @param {*} event 
     * @returns {Boolean} true 阻止冒泡/ false 继续冒泡
     */
    triggerGraphEvent(event) {
        // 图层隐藏状态
		if(! this.visible) {
			return;
        }
        let graphs = this.graphs;
        for(let i = graphs.length - 1; i >= 0; i --) {
            let graph = graphs[i];
            let bubble = graph.trigger(event);
            // 返回true阻止后面的graph触发事件, 阻止Layer触发事件
            if(bubble) {
                return bubble;
            }
        }
    }
});

module.exports = Layer;