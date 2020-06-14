# Topoboard
本项目致力于将绘图模式的 canvas 上下文 CanvasRenderingContext2D, 整理成面向对象的使用模式, 不再需要获取CanvasRenderingContext2D, 不再需要moveTo、lineTo, 不再需要beginPath、closePath, 不再需要面向过程编程。

## 可实现的功能
### 匀速运动与抛物运动与碰撞检查
![image](https://i.niupic.com/images/2020/06/14/8gzx.gif)
### 实现一个柱状图
![image](https://i.niupic.com/images/2020/06/14/8gzC.gif)
### 实现一个Topo图
![image](https://gitee.com/FuturerJ/assets/raw/master/Topoboard/img/board3.png)
### 炫彩小球
![image](https://i.niupic.com/images/2020/06/14/8gzD.gif)
### 躲避怪物
![image](https://gitee.com/FuturerJ/assets/raw/master/Topoboard/img/board5.gif)

## 起步
当你需要开始一个canvas时, 你需要在页面中提供一个容器, 并提供指定的宽高, 如: 
```html
<div id="container" style="width: 500px; height: 300px;"></div>
```
## 项目编译
运行命令```npm run build```编译项目, 编译后的文件是```/dist```文件夹下的Topoboard.js文件, 如果需要压缩后的文件, 请修改```webpack.config.js```中的mode为```production```, 重新编译。
## 项目依赖
1. 项目编译依赖包括: Webpack、babel、less、postcss, 等。
2. 项目没有任何运行时依赖。
3. demo中的gif录制功能 使用的库[gif.js](https://github.com/jnordberg/gif.js) 。

## Topoboard
1. Topoboard 会向外暴露的变量名称。
```js
if(window) {
  window['TB'] = window['Topoboard'] = Topoboard;
}
if(typeof define == 'function' && define.amd) {
  define('Topoboard', () => Topoboard);
}
```
2. 创建Topoboard实例, 第一个参数是容器实例, 第二个参数是支持的事件类型（仅鼠标事件）。
```js
let board = new Topoboard(document.getElementById('container'), ['click']);
```

## layer
创建图层, 后创建的图层覆盖在上面。
```js
let bkLayer = board.newLayer('bk-layer');
let plLayer = board.newLayer('pl-layer');
let recLayer = board.newLayer('rec-layer');
let labelLayer = board.newLayer('label-layer');
```
## model
作为丰富图形对象信息的一种重要参数组件, 数据模型是必要的。
1. Expand 矩形扩展模型, 它的实例等价于一个普通对象。
```js
let e = new TB.model.Expand(150, 100, 80, 80);
// Expand { x: 150, y: 100, w: 80, h: 80 };
// x,y 表示图形的基准坐标。w,h 表示图形的扩展宽高。可用于图片、矩形等图形对象的参数使用
```
2. Font 字体模型, 它的实例用于生成一个字体样式字符串。
```js
let font = new TB.model.Font(18, '微软雅黑');
let f = font.getFont();
// '18px 微软雅黑'
```
3. Radial 放射模型, 它是Vector的子对象, 它的示例等价于一个普通对象。
```js
let radial = new TB.model.Radial(0, 0, 5);
// Radial {x: 0, y: 0, r: 5}
```
4. Shadow 阴影模型, 它是Vector的子对象, 它的实例等价于一个普通对象。
```js
let shadow = new TB.model.Shadow(0, 0, '#fff', 5);
// Shadow {x: 0, y: 0, color: '#fff', blur: 5}
```
5. Vector 向量模型, 它的实例等价于一个普通对象。
```js
let v = new TB.model.Vector(100, 100);
// Vector {x: 100, y: 100}
```
## graphs
要绘制一个图形, 只需要声明一个对象, 并决定要fill还是stroke(Img除外)。相同图层下, 后绘制的图形覆盖在其他图形上面。
1. Circle 绘制一个圆形。
```js
circle = new Topoboard.graphs.Circle({
  layer: cirLayer,
  radial: new TB.model.Vector(100, 100, 20),
  width: 2,
  style: 'red',
  closePath: true,
  shadow: new TB.model.Shadow(0, 0, '#fff', 5)
}).stroke();
```
2. Img 绘制一个背景图片。
```js
new Topoboard.graphs.Img({
  layer: bkLayer,
  image: '1.png'
}).draw();
```
3. PolyLine 绘制一个折线。
如下: 
```js
new Topoboard.graphs.PolyLine({
  layer: plLayer,
  path: [
    new TB.model.Vector(30, 30), 
    new TB.model.Vector(30, 200), 
    new TB.model.Vector(450, 200)
  ],
  width: 2,
  style: 'lightblue',
  closePath: false
}).stroke();
```
4. Rect 绘制一个矩形。
```js
rect = new Topoboard.graphs.Rect({
  layer: recLayer,
  expand: new TB.model.Expand(150, 100, 80, 80),
  lineWidth: 6,
  style: '#fcc',
  shadow: new TB.model.Shadow(0, 0, '#fff', 2)
}).fill();
```
5. Text 添加文本。
```js
let label = new Topoboard.graphs.Text({
  layer: labelLayer,
  position: new TB.model.Vector(prev.coor[0] - 5, prev.coor[1] - 20),
  content: prev.label,
  font: new TB.model.Font(18, '微软雅黑'),
  style: 'chocolate'
}).fill();
```
## events
事件模型仍旧基于浏览器的原有事件机制, 如click、mousemove、mouseleave等。
### 如何支持一个事件？
1. 创建Topoboard对象时, 需要提前预约, 我需要那几个事件。
```js
let board = new Topoboard(document.getElementById('container'), ['click', 'mousemove', 'mouseleave']);
```
2. 在需要触发事件的对象上注册事件。
```js
rect.addEventListener('click', function(event) {
  console.log(this, event.type);
  // this指向rect对象实例, event是事件对象
  return true; // 当几个graph，或者几个图层叠加时, 事件从上到下依次触发, 返回 true表示阻止事件传递
});
```
### 支持的事件类型
仅支持部分鼠标事件, 只有部分鼠标事件具有正确的行为。
## ImgManager 基于Ajax的图片加载管理
1. 先准备一个```img.json```文件, 用于保存所有依赖的图片路径和图片名称。
```js
{
  "images": [
    {"name": "bg", "url": "./img/bg.jpg"},
    {"name": "box-bg", "url": "./img/box-bg.png"},
    {"name": "cat1", "url": "./img/cat1.jpg"},
    {"name": "cat2", "url": "./img/cat2.jpg"},
    {"name": "cat3", "url": "./img/cat3.jpg"},
    {"name": "cat4", "url": "./img/cat4.jpg"}
  ]
}
```
2. 创建一个图片管理对象。
```js
let imgManager = new Topoboard.ImgManager({imgJsonUrl: 'img.json'});
```
3. 开始加载图片。
```js
imgManager.load();
```
4. 注册加载图片事件。
```js
// callbacks 是事先自己定义好的函数
imgManager.onreadystatechange = function() {
  //img.json 数据加载完成
  if(this.readyState == Topoboard.ImgManager.STATE_RESOURCE_INFO_READY) {
    callbacks.imgInfoReady(this.data.images.length);
  }
  //图片加载中, 每一个图片加载完成触发一次这种状态
  else if(this.readyState == Topoboard.ImgManager.STATE_RESOURCE_LOADING) {
    callbacks.imgLoading(this.count, this.data.images.length);
  }
  // 图片已全部加载完成
  else if(this.readyState == Topoboard.ImgManager.STATE_RESOURCE_READY) {
    callbacks.imgLoaded(this.imgs);
  }
};
```

## Animation 动画管理
制作一个加载中动画。
1. 加载中文本对象准备。
```js
let loading;
let loadingLayer = board.newLayer('loading-layer');
// 更新加载中信息内容
let callbacks = {
  imgLoaded: function(imgs) {
    // 结束加载中图层
    loadingAni.stop(), loadingLayer.remove();
  },
  imgLoading: function(count, total) {
    loading.count = count;
    loading.text = 'loading: ' + count + '/' + total;
    loading.content = loading.text + loading.dots;

    loading.refresh();
    loadingLayer.refresh();
    board.refresh();
  },
  imgInfoReady: function(total) {
    // 绘制加载中信息
    loading = new Topoboard.graphs.Text({
      layer: loadingLayer,
      // position: new Topoboard.Vector(300, 300),
      content: 'loading: 0/' + total,
      font: new TB.model.Font(18, '微软雅黑'),
      style: '#f40'
    }).fill();
    loading.count = 0;
    loading.total = total;
    loading.text = 'loading: 0/' + total;
  }
};
```
1. 声明一个动画实例。
```js
// 500代表每隔多长时间才执行一帧动画
let loadingAni = new Topoboard.Animation(500);
```
2. 添加帧事务。
```js
let dot = 1;
loadingAni.addTask(function() {
  if(! loading) {
    return;
  }
  dot ++;
  if(dot > 6) {
    dot = 1;
  }
  let str = new Array(dot).fill(1).reduce(prev => prev + '.', '');
  loading.dots = str;
  loading.content = loading.text + loading.dots;
  loading.refresh();
});
```
3. 每一帧事务后触发帧事件。
```js
loadingAni.onenterframe = function() {
  loadingLayer.refresh(); // 图层存在动画, 需要刷新
  board.refresh(); // 画板存在动画, 需要刷新
};
```
4. 启动动画。
```js
loadingAni.start();
```
至此已经实现了一个加载中的动画, 其展示效果大概如下：
```js
'loading:0/6.'
'loading:0/6..'
'loading:1/6..'
'loading:1/6...'
'loading:2/6....'
'loading:3/6.....'
// ...
```
5. 停止动画。
```js
loadingAni.stop();
```
6. 重新启动动画。
```js
loadingAni.restart();
```

## 性能优化
当存在graph、layer修改时, 可以 通过```board.refresh(true)```强制刷新所有layer和graph。应该注意的是，这样的操作是相当**消耗性能**的, 因为不论图层是否有变动, 图层及其下的所有graph都要重新绘制一次。
当board中存在某一个 graph 需要进行动画处理时, 应该尽量把它划分到单独图层中, 再进行精确刷新处理。比如像下面这种处理方式是比较高性能的处理方式:
```js
graph.refresh();
layer.refresh();
board.refresh();
```
或者尽量把存在动画的所有 graph 划分到专有的layer中,然后采用如下 方式进行刷新:
```js
layer.refresh(true);
board.refresh();
```

## more
在此基础上还可以实现更多的功能, 发挥你的脑洞。
## 联系我
Futurer2016@outlook.com
