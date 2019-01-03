// import Text from "./shapes/Text";
// import {extend} from "../base/utils";
// import Vector from "./component/Vector";
// import CutParams from "./component/CutParams";
// import Shadow from "./component/Shadow";
// import ImgManager from "./shapes/ImgManager";
// import Board from "./Board.js";
// import Animation from "./Animation";
// import Layer from "./Layer";
// import Circle from "./shapes/Circle";
// import PolyLine from "./shapes/PolyLine";
// import Rect from "./shapes/Rect";
// import Img from "./shapes/Img";
require('./boardcontainer.less');

const {extend, newCanvas, showCanvas} = require('../base/utils');
const Vector = require('./component/Vector');
const CutParams = require('./component/CutParams');
const Shadow = require('./component/Shadow');
const Font = require('./component/Font');

const ImgManager = require('./shapes/ImgManager');

const Animation = require('./Animation');
const Layer = require('./Layer');
const Circle = require('./shapes/Circle');
const PolyLine = require('./shapes/PolyLine');
const Rect = require('./shapes/Rect');
const Img = require('./shapes/Img');
const Text = require('./shapes/Text');

//canvas 上树
function upTree(canvas, ele, isBefore) {
    //在前面插入子节点，要求元素已存在其他子节点
    if(isBefore && ele.children.length) {
        ele.insertBefore(canvas, ele.children[0]);
    }
    else {
        ele.append(canvas);
    }
}
//canvas 下树
// function downTree(canvas) {
//     canvas.remove();
// }
/**
 * 全局对象
 * @param ele
 * @constructor
 */
function Topoboard(ele) {
    this.ele = ele;
    //图层
    this.layers = [];
    //隐藏的图层
    this._hide_layers = [];
    let destLayer = new Layer(this, 'dest-canvas');
    upTree(destLayer.getContext().canvas, this.ele);
    this.destCtx = destLayer.ctx;
}

/**
 * 扩展基础方法
 */
extend(Topoboard.prototype, {
    //调整画板大小
    resize(width, height, isChangeContainer) {
        //修改Dom元素大小
        if(isChangeContainer) {
            this.ele.style.width = width + 'px';
            this.ele.style.height = height + 'px';
        }
        //修改画布大小
        this.destCtx.canvas.width = width || this.destCtx.canvas.width;
        this.destCtx.canvas.height = height || this.destCtx.canvas.height;
        //修改图层size
        this.layers.forEach(layer => layer.resize(width, height));
        //刷新画布内容
        this.refresh(true);
    },
    //导出图片
    export() {
        //导出画板数据
        let imgData = this.destCtx.canvas.toDataURL();
        let img = new Image();
        img.src = imgData;

        return img;
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
    newLayer(className) {
        let layer = new Layer(this, className, arguments[1]);
        this.pushLayer(layer);
        return layer;
    },
    //在队列开始插入图层
    unshiftLayer(layer) {
        let layers = this._hide_layers.length > 0? this._hide_layers: this.layers;
        if(layers.indexOf(layer) > -1) {
            return;
        }
        layers.unshift(layer);
        //canvas 上树
        // this.upTree(layer, true);
    },
    //从队列开始移除图层
    // shiftLayer() {
    //     let layers = this._hide_layers.length > 0? this._hide_layers: this.layers;
    //     //末尾移除
    //     let layer = layers.shift();
    //     //canvas 下树
    //     // this.downTree(layer);
    //
    //     return layer;
    // },
    //添加已存在的图层对象,与 newLayer 不能对相同layer对象使用
    pushLayer(layer) {
        let layers = this._hide_layers.length > 0? this._hide_layers: this.layers;
        if(layers.indexOf(layer) > -1) {
            return;
        }
        //加入显示队列
        layers.push(layer);
        //canvas 上树
        // this.upTree(layer);
    },
    //从队列末尾移除图层
    // popLayer() {
    //     let layers = this._hide_layers.length > 0? this._hide_layers: this.layers;
    //     //末尾移除
    //     let layer = layers.pop();
    //     //canvas 下树
    //     // this.downTree(layer);
    //
    //     return layer;
    // },
    //移除指定的图层对象
    removeLayer(layer) {
        //离开显示和隐藏队列
        this.layers.splice(this.layers.indexOf(layer), 1);
        this._hide_layers.splice(this._hide_layers.indexOf(layer), 1);
        //canvas 下树
        // this.downTree(layer);
    }
});

/**
 * 扩展绘制类方法
 */
extend(Topoboard.prototype, {
    //显示
    show() {
        if(this._hide_layers.length == 0) {return;}
        this.layers = this._hide_layers;
        this._hide_layers = [];
    },
    //隐藏
    hide() {
        if(this.layers.length == 0) {return;}
        this._hide_layers = this.layers;
        this.layers = [];
    },
    //清除所有画板元素，清除后使用refresh不能重新渲染
    clear() {
        this.hide();
        this._hide_layers.forEach(layer => layer.clear());
    },
    //擦除画板，擦除后可以使用refresh重新渲染
    clean(isLayerClean) {
        isLayerClean && this.layers.forEach(layer => layer.clean());
        this.destCtx.clearRect(0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
    },
    /**
     * 将所有图层重新绘制到画板
     * @param isLayerRefresh 决定是否需要对每一个图层都进行刷新
     */
    refresh: function(isLayerRefresh) {
        this.clean(isLayerRefresh);
        //刷新图层
        isLayerRefresh && this.layers.forEach(layer => layer.refresh());
        //刷新画板
        this.layers.forEach(layer => {
            showCanvas(this.destCtx, layer.getContext());
        });
    }
});

/**
 * 扩展静态属性
 */
extend(Topoboard, {
    Animation, Layer, Circle, PolyLine, Rect, Img, Text,
    ImgManager,
    Vector, CutParams, Shadow, Font
});

/**
 * 兼容AMD模式
 */
if(typeof define == 'function' && define.amd) {
    define('Topoboard', () => Topoboard);
}

/**
 * 暴露全局变量
 */
if(window) {
    window['TB'] = window['Topoboard'] = Topoboard;
}

module.exports = Topoboard;