var arr = [],
//画板
Board = function(canvas) {
    if(! canvas || ! canvas.getContext) {
        throw new Error('找不到指定元素或者不支持Canvas的浏览器');
    }

    this.ctx = canvas.getContext('2d');
    //图层
    this.layers = [];
    //隐藏的图层
    this._hide_layers = [];
};
Board.prototype = {
    //获取canvas上下文对象
    getContext: function() {
        return this.ctx;
    },
    //重置canvas的大小
    resize: function({width, height}) {
        this.ctx.canvas.width = width || this.ctx.canvas.width;
        this.ctx.canvas.height = height || this.ctx.canvas.height;
    },
    //擦除画板，擦除后可以使用refresh重新渲染
    clean: function() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    },
    //清除所有画板元素，清除后使用refresh不能重新渲染
    clear: function() {
        this.layers.forEach(function(value, key) {
            value.clear();
        });
        this.layers = [];
    },
    //刷新页面
    refresh: function() {
        arr.forEach.call(this.layers, function(value, key) {
            value.refresh();
        });
    },
    //显示
    show: function() {
        if(this._hide_layers.length == 0) {return;}
        this.layers = this._hide_layers;
        this._hide_layers = [];
    },
    //隐藏
    hide: function() {
        if(this.layers.length == 0) {return;}
        this._hide_layers = this.layers;
        this.layers = [];
    },
    //获取图层对象
    getLayer: function(id) {
        var layer;
        for(var key in this.layers) {
            layer = this.layers[key];
            if(layer.attributes.id == id) {
                return layer;
            }
        }
        throw new Error('请给定正确的图层对象中attributes属性的id值');
    },
    //获取所有图层对象的数组
    getLayers: function() {
        return this.layers;
    }
};
Object.defineProperties(Board.prototype, {
    'constructor': {
        value: Board,
        enumerable: false,
        configurable: true,
        writable: true
    }
});

module.exports = Board;
