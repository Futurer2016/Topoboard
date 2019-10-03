const { extend } = require('../util/inherit');
const {newCanvas, getContext, snapshot, download} = require('../util/utils');
const { removeEventListener } = require('../events/events');

const Drawer = require('./Drawer');
const Shadow = require('../model/Shadow');

let count = 0;

function Graph({layer, closePath, style, shadow, visible = true}) {
	if(! layer) {
		throw Error('layer属性不能为空');
	}

	this.name = 'graph-' + count++;

	this.layer = layer;

	this.visible = visible;

	let cacheCanvas = newCanvas(layer.board.el, 'graph-canvas');
	let ctx = getContext(cacheCanvas, true);
  this.drawer = new Drawer(this, ctx);
	this.methods = [];
	this.closePath = closePath;

	this.style = style;
	this.shadow = shadow || new Shadow(0, '#000', 0, 0);

	this.events = {};

  this.layer.pushGraph(this);
}

/**
 * 扩展基本方法
 */
extend(Graph.prototype, {
	getLayer() {
			return this.layer;
	},
	remove() {
		return this.getLayer().removeGraph(this);
	},
	// 修改graph画布size
	resize(width, height) {
		this.ctx.canvas.width = width || this.ctx.canvas.width;
		this.ctx.canvas.height = height || this.ctx.canvas.height;
	},
	//导出图片
	snapshot(title) {
			return snapshot(this.ctx.canvas, title);
	},
	//导出画板数据
	download(title) {
			let data = snapshot(this.drawer.ctx.canvas);
			download(data, title);
	},
	//置顶
	top() {
    	this.layer.pushGraph(this);
    	this.layer.refresh();
    	this.layer.getBoard().refresh();
	},
	//置底
	bottom() {
    	this.layer.unshiftGraph(this);
    	this.layer.refresh();
      this.layer.getBoard().refresh();
	},
	push(method) {
			this.methods.push(method);
	}
});

/**
 * 扩展绘图部分方法
 */
extend(Graph.prototype, {
	//清除所有画板元素，清除后使用refresh不能重新渲染
	clear() {
		this.methods = [];
	},
	//擦除图元，擦除后可以使用refresh重新渲染
	clean() {
		let ctx = this.drawer.ctx;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	},
	//调用当前元素的记录方法，重新绘制图形
  refresh() {
    this.clean();
		if(! this.visible) return;
		this.methods.forEach(value => {
			this[value]();
			this.methods.pop();
		});
	},
	show() {
		this.visible = true;
		this.refresh();
		this.layer.refresh();
		this.layer.board.refresh();
	},
	hide() {
		this.visible = false;
		this.refresh();
		this.layer.refresh();
		this.layer.board.refresh();
	},
	toggle() {
		this.visible = ! this.visible;
		this.refresh();
		this.layer.refresh();
		this.layer.board.refresh();
	}
});

extend(Graph.prototype, {
	on(eventType, cb) {
			this.events[eventType] = this.events[eventType] || [];
			let eventList = this.events[eventType];
			eventList.push(cb);
	},
	off(eventType, cb) {
			removeEventListener(this, eventType, cb);
	},
	/**
	 * 根据鼠标触发事件的源点是否在图形内
	 * 决定是否执行相应的鼠标事件
	 * @param {*} event 
	 * @returns {*|boolean}
	 */
	trigger(event) {
		// 隐藏状态
		if(! this.visible) {
			return;
		}
		// 没有注册事件
		let eventList = this.events[event.type];
		if(! eventList || ! eventList.length) {
			return;
		}
		let bubble = false;
		//graph的默认实现，可能根据需要实现不同的判断行为
		if(this.drawer.isStroked()) {
			bubble = computeEvent(this, event, 'isPointInStroke');
		}
		else if(this.drawer.isFilled()) {
			bubble = computeEvent(this, event, 'isPointInPath');
		}

		return bubble;
	}
});

// 需要特殊处理的事件类型
let specialEventType = ['mousemove'];
/**
 * 计算事件与图形是否匹配
 * 匹配时，触发对应事件
 * @param {*} graph 
 * @param {*} event 
 * @param {*} method 
 */
function computeEvent(graph, event, method) {
	let x = event.offsetX;
	let y = event.offsetY;
	let bubble;
	if(graph.drawer.ctx[method](x, y)) {
		bubble = triggerEvent(graph, event.type, event);
	}
	else {
		// 触发mouseleave
		if(graph.events['mouseleave'] && specialEventType.indexOf(event.type) > -1) {
			bubble = triggerEvent(graph, 'mouseleave', event);
		}
	}
	return bubble;
}

/**
 * 触发事件队列
 * @param {*} graph 
 * @param {*} type 
 * @param {*} event 
 */
function triggerEvent(graph, type, event) {
	let eventList = graph.events[type];
	if(eventList) {
		let bubble;
		let ret;
		eventList.forEach(cb => {
			bubble = cb.call(graph, event);
			if(bubble === true) {
				ret = true;
			}
		});
		return ret;
	}
}

module.exports = Graph;