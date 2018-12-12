function Layer(board, attributes) {
	//图层id
	this.attributes = attributes;
	//画板对象
	this.board = board;
	//图元队列
	this.graphs = [];
	this._hide_graphs = [];

	board.getLayers().push(this);
};
Layer.prototype = {
	constructor: Layer,
	//清除所有画板元素，清除后使用refresh不能重新渲染
	clear: function() {
		this.graphs.forEach(function(value, key) {
			value.clear();
		});
		this.graphs = [];
	},
	//刷新
    refresh: function() {
        this.graphs.forEach(function(value, key) {
            value.refresh();
        });
    },
	show: function() {
		if(this._hide_graphs.length == 0) {return;}
        this.graphs = this._hide_graphs;
		this._hide_graphs = [];
	},
	hide: function() {
        if(this.graphs.length == 0) {return;}
        this._hide_graphs = this.graphs;
        this.graphs = [];
	},
	//获取画板对象
	getBoard: function() {
		return this.board;
	},
    getGraph: function(index) {
        return this.graphs[index];
    },
    getGraphs: function() {
        return this.graphs;
    },
	//添加图元
	push: function(item) {
		this.graphs.push(item);
	}, 
	//删除图元
	remove: function(item) {
		this.graphs.splice(this.graphs.indexOf(item), 1);
	},
};

module.exports = Layer;