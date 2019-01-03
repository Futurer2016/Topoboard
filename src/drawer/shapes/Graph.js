const {extend} = require('../../base/utils');
const Drawer = require('./Drawer');
const Shadow = require('../component/Shadow');

function Graph({layer, closePath, color, shadow}) {
	if(! layer) {
		throw Error('layer属性不能为空');
	}
	this.layer = layer;
    this.drawer = new Drawer(this, this.layer.getContext());
	this.methods = [];
	this._hide_methods = [];
	this.closePath = closePath;

	this.color = color;
	this.shadow = shadow || new Shadow(0, '#000', 0, 0);

    this.layer.pushGraph(this);
}

/**
 * 扩展基本方法
 */
extend(Graph.prototype, {
    getLayer() {
        return this.layer;
    },
	//置顶
	top() {
    	this.layer.removeGraph(this);
    	this.layer.pushGraph(this);
    	this.layer.refresh();
    	this.layer.getBoard().refresh();
	},
	//置底
	bottom() {
    	this.layer.removeGraph(this);
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
        this.hide();
        this._hide_methods = [];
    },
	//调用当前元素的记录方法，重新绘制图形
    refresh() {
		this.methods.forEach(value => {
			this[value]();
			this.methods.pop();
		});
	},
	show() {
		if (this._hide_methods.length == 0) {
			return;
		}
		this._hide_methods = this.methods;
		this.methods = [];
	},
	hide() {
		if (this.methods.length == 0) {
			return;
		}
		this.methods = this._hide_methods;
		this._hide_methods = [];
	}
});

module.exports = Graph;