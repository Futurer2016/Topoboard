const { extend } = require('../util/inherit');
const { showCanvas, snapshot, download } = require('../util/utils');
const { addEventListener, removeEventListener } = require('../events/events');

const Layer = require('./Layer');

function bindEvent(board, eventList) {
  eventList.forEach(eventType => {
    addEventListener(board.ctx.canvas, eventType, e => {
      //触发图层事件
      let done = board.triggerLayerEvent(e);
      if(done) {
        return;
      }
      //触发画板事件
      if(board.events[eventType]) {
        board.events[eventType].some(cb => {
            let ret = cb.call(board, e);
            return ret;
        });
      }
    });
  });
}

//canvas 上树
function upTree(canvas, el, isBefore) {
    //在前面插入子节点，要求元素已存在其他子节点
    if(isBefore && el.children.length) {
        el.insertBefore(canvas, el.children[0]);
    }
    else {
        el.append(canvas);
    }
}

//canvas 下树
// function downTree(canvas) {
//     canvas.remove();
// }
/**
 * 全局对象
 * @param el
 * @constructor
 */
function Topoboard(el, events) {
    if(! el) {
        throw Error('画布载体不能为空,一个块级div元素是理想的载体');
    }
    this.el = el;
    //图层
    this.layers = [];
    let destLayer = new Layer(this, 'dest-canvas');
    upTree(destLayer.getContext().canvas, this.el);
    this.ctx = destLayer.ctx;

    this.events = {};

    this.visible = true;

    bindEvent(this, events);
}

/**
 * 扩展基础方法
 */
extend(Topoboard.prototype, {
    //调整board画布size
    resize(width, height, isChangeContainer) {
        //修改Dom元素大小
        if(isChangeContainer) {
            this.el.style.width = width + 'px';
            this.el.style.height = height + 'px';
        }
        //修改画布大小
        this.ctx.canvas.width = width || this.ctx.canvas.width;
        this.ctx.canvas.height = height || this.ctx.canvas.height;
        //修改图层size
        this.layers.forEach(layer => layer.resize(width, height));
        //刷新画布内容
        this.refresh(true);
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
 * 扩展图层相关方法
 */
extend(Topoboard.prototype, {
    //获取图层数组
    getLayers() {
        return this.layers;
    },
    //获取新的图层对象,与 addLayer 不能对相同layer对象使用
    newLayer(className, visible, alpha) {
        let layer = new Layer(this, className, visible, alpha);
        this.pushLayer(layer);
        return layer;
    },
    //移除指定的图层对象
    removeLayer(layer) {
        let index = this.layers.indexOf(layer);
        if(index == -1) return;
        return this.layers.splice(index, 1)[0];
    },
    //在队列开始插入图层
    unshiftLayer(layer) {
        let layers = this.layers;
        let index = layers.indexOf(layer);
        if(index > -1) {
            layers.splice(index, 1);
        }
        return layers.unshift(layer);
    },
    //从队列开始移除图层
    shiftLayer() {
        return this.layers.shift();
    },
    //添加已存在的图层对象,与 newLayer 不能对相同layer对象使用
    pushLayer(layer) {
        let layers = this.layers;
        let index = layers.indexOf(layer);
        if(index > -1) {
            layers.splice(index, 1);
        }
        //加入显示队列
        return layers.push(layer);
    },
    //从队列末尾移除图层
    popLayer() {
        return this.layers.pop();
    }
});

/**
 * 扩展绘制类方法
 */
extend(Topoboard.prototype, {
    //清除所有画板元素，清除后使用refresh不能重新渲染
    clear() {
        this.layers.forEach(layer => layer.clear());
        this.layers = [];
    },
    //擦除画板，擦除后可以使用refresh重新渲染
    clean(isLayerClean) {
        isLayerClean && this.layers.forEach(layer => layer.clean());
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    },
    /**
     * 将所有图层重新绘制到画板
     * @param isLayerRefresh 决定是否需要对每一个图层都进行刷新
     */
    refresh: function(isLayerRefresh) {
        this.clean(isLayerRefresh);
        if(! this.visible) return;
        //刷新图层
        isLayerRefresh && this.layers.forEach(layer => layer.refresh(true));
        //刷新画板
        this.layers.forEach(layer => {
            showCanvas(this.ctx, layer.getContext());
        });
    },
    show() {
        this.visible = true;
        this.refresh();
    },
    hide() {
        this.visible = false;
        this.refresh();
    },
    //显示
    showLayers() {
        this.layers.forEach(layer => layer.show());
    },
    //隐藏
    hideLayers() {
        this.layers.forEach(layer => layer.hide());
    }
});

/**
 * 扩展事件绑定方法
 */
extend(Topoboard.prototype, {
    on(eventType, cb) {
        this.events[eventType] = this.events[eventType] || [];
        let eventList = this.events[eventType];
        eventList.push(cb);
    },
    off(eventType, cb) {
        removeEventListener(this, eventType, cb);
    },
    /**
     * 触发所有图层事件
     * 
     * @param {*} event 
     * @returns {Boolean} true 阻止冒泡/ false 继续冒泡
     */
    triggerLayerEvent(event) {
        // board 隐藏状态
		if(! this.visible) {
			return;
        }
        let layers = this.layers;
        let bubble = false;
        for(let i = layers.length - 1; i >= 0; i --) {
            let layer = layers[i];
            //触发所有图元事件
            let bubble = layer.triggerGraphEvent(event);
            if(bubble) {
                return bubble;
            }
            //触发图层事件
            bubble = layer.trigger(event);
            if(bubble) {
                return bubble;
            }
        }

        return bubble;
    }
});

module.exports = Topoboard;