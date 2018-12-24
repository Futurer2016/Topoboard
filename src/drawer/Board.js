/**
 * 画板
 * @param canvas
 * @constructor
 */
function Board(canvas) {
    if(! canvas || ! canvas.getContext) {
        throw new Error('找不到指定元素或者不支持Canvas的浏览器');
    }

    this.destCtx = canvas.getContext('2d');

    let cacheCanvas = document.createElement('canvas');
    cacheCanvas.width = canvas.width;
    cacheCanvas.height = canvas.height;

    this.ctx = cacheCanvas.getContext('2d');
    //图层
    this.layers = [];
    //隐藏的图层
    this._hide_layers = [];
};
Board.prototype = {
    //获取canvas上下文对象
    getContext: function() {
        return this.destCtx;
    },
    getCanvas: function() {
        return this.destCtx.canvas;
    },
    //重置canvas的大小
    resize: function({width, height}) {
        this.ctx.canvas.width = width || this.ctx.canvas.width;
        this.ctx.canvas.height = height || this.ctx.canvas.height;
        this.destCtx.canvas.width = width || this.destCtx.canvas.width;
        this.destCtx.canvas.height = height || this.destCtx.canvas.height;
    },
    //擦除画板，擦除后可以使用refresh重新渲染
    clean: function() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.destCtx.clearRect(0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
    },
    //清除所有画板元素，清除后使用refresh不能重新渲染
    clear: function() {
        this.layers.forEach(function(value) {
            value.clear();
        });
        this.layers = [];
    },
    //刷新页面
    refresh: function() {
        this.layers.forEach(function(value) {
            value.refresh();
        });
        //显示图片内容
        this.destCtx.drawImage(this.ctx.canvas, 0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
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
        let layer;
        for(let key in this.layers) {
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
    },
    exportImg: function() {
        let imgData = this.distCtx.canvas.toDataURL();
        let img = new Image();
        img.src = imgData;

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
