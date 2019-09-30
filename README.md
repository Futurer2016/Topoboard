# Topoboard
本项目致力于将绘图模式的canvas上下文CanvasRenderingContext2D, 整理成面向对象的使用模式, 不再不需要获取CanvasRenderingContext2D, 不再需要moveTo、lineTo, 不再需要beginPath、closePath, 不再需要面向过程编程。

## 可实现的功能
1. 匀速运动与抛物运动与碰撞检查
![image](https://github.com/Futurer2016/Topoboard/blob/master/readmefile/img/board1.gif)
2. 实现一个柱状图
![image](https://github.com/Futurer2016/Topoboard/blob/master/readmefile/img/board2.gif)
3. 实现一个Topo图
![image](https://github.com/Futurer2016/Topoboard/blob/master/readmefile/img/board3.gif)

## 起步
当你需要开始一个canvas时, 你需要在页面中提供一个容器, 并提供指定的宽高, 如: 
```html
<div id="container" style="width: 500px; height: 300px;"></div>
```

## Topoboard
1. Topoboard 会向外暴露的变量名称
```js
if(window) {
  window['TB'] = window['Topoboard'] = Topoboard;
}
if(typeof define == 'function' && define.amd) {
  define('Topoboard', () => Topoboard);
}
```
2. 创建Topoboard实例, 第一个参数是容器实例, 第二个参数是支持的事件类型（仅鼠标事件）
```js
let board = new Topoboard(document.getElementById('container'), ['click']);
```

## layer
创建图层, 后创建的图层覆盖在上面
```js
let bkLayer = board.newLayer('bk-layer');
let plLayer = board.newLayer('pl-layer');
let recLayer = board.newLayer('rec-layer');
let labelLayer = board.newLayer('label-layer');
```
## model
作为丰富图形对象信息的一种重要参数组件, 数据模型是必要的
1. Expand 矩形扩展模型, 它的实例等价于一个普通对象
```js
let e = new TB.model.Expand(150, 100, 80, 80);
// Expand { x: 150, y: 100, w: 80, h: 80 };
// x,y 表示图形的基准坐标。w,h 表示图形的扩展宽高。可用于图片、矩形等图形对象的参数使用
```
2. Font 字体模型, 它的实例用于生成一个字体样式字符串
```js
let font = new TB.model.Font(18, '微软雅黑');
let f = font.getFont();
// '18px 微软雅黑'
```
3. Shadow 阴影模型, 它是Vector的子对象, 它的实例等价于一个普通对象
```js
let shadow = new TB.model.Shadow(0, 0, '#fff', 5);
// Shadow {x: 0, y: 0, color: '#fff', blur: 5}
```
4. Vector 向量模型, 它的实例等价于一个普通对象
```js
let v = new TB.model.Vector(100, 100);
// Vector {x: 100, y: 100}
```
## graphs
要绘制一个图形, 只需要声明一个对象, 并决定要fill还是stroke(Img除外)。相同图层下, 后绘制的图形覆盖在其他图形上面。
1. Circle 绘制一个圆形
```js
circle = new Topoboard.graphs.Circle({
  layer: cirLayer,
  o: new TB.model.Vector(100, 100),
  r: 20,
  width: 2,
  color: 'red',
  closePath: true,
  shadow: new TB.model.Shadow(0, 0, '#fff', 5)
}).stroke();
```
2. Img 绘制一个背景图片
```js
new Topoboard.graphs.Img({
  layer: bkLayer,
  image: '1.png'
}).draw();
```
3. PolyLine 绘制一个折线
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
  color: 'lightblue',
  closePath: false
}).stroke();
```
4. Rect 绘制一个矩形
```js
rect = new Topoboard.graphs.Rect({
  layer: recLayer,
  expand: new TB.model.Expand(150, 100, 80, 80),
  lineWidth: 6,
  color: '#fcc',
  shadow: new TB.model.Shadow(0, 0, '#fff', 2)
}).fill();
```
5. Text 添加文本
```js
let label = new Topoboard.graphs.Text({
  layer: labelLayer,
  position: new TB.model.Vector(prev.coor[0] - 5, prev.coor[1] - 20),
  content: prev.label,
  font: new TB.model.Font(18, '微软雅黑'),
  color: 'chocolate'
}).fill();
```
## events
事件模型仍旧基于浏览器的原有事件机制, 如click、mousemove、mouseleave等。
### 如何支持一个事件？
1. 创建Topoboard对象时, 需要提前预约, 我需要那几个事件
```js
let board = new Topoboard(document.getElementById('container'), ['click', 'mousemove', 'mouseleave']);
```
2. 在需要触发事件的对象上注册事件
```js
rect.addEventListener('click', function(event) {
  console.log(this, event.type);
  // this指向rect对象实例, event是事件对象
  return true; // 当几个graph，或者几个图层叠加时, 事件从上到下依次触发, 返回 true表示阻止事件传递
});
```
### 支持的事件类型
仅支持部分鼠标事件, 只有部分鼠标事件具有正确的行为。
## Animation
1. 声明一个动画实例
```js
let loadingAni = new Topoboard.Animation(500);
```
## more
在此基础上还可以实现更多的功能, 发挥你的脑洞。
## 联系我
Futurer2016@outlook.com