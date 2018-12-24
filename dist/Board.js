/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/drawer/Topoboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base/utils.js":
/*!***************************!*\
  !*** ./src/base/utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 继承方法
 * @param Child
 * @param Parent
 * @param childField
 */
function inherit(Child, Parent, childField) {
  var F = function F() {};

  F.prototype = Parent.prototype;
  Child.prototype = new F();

  for (var key in childField) {
    var value = childField[key];
    Child.prototype[key] = value;
  }

  Object.defineProperties(Child.prototype, {
    'constructor': {
      value: Child,
      enumerable: false,
      configurable: true,
      writable: true
    }
  });
}
/**
 * 获取xhr对象
 */


function getXhr() {
  var xhr;

  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (ActiveXObject) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  return xhr;
}
/**
 * 获取查询字符串
 * @param data
 * @returns {string}
 */


function getQueryString(data) {
  if (!data) {
    return '';
  }

  var ret = '?';

  for (var key in data) {
    var value = data[key];

    if (data.hasOwnProperty(value)) {
      ret += key + '=' + value + '&';
    }
  }

  return ret.substr(0, ret.length - 1);
}
/**
 * ajax网络请求方法
 * @param url
 * @param method
 * @param data
 * @param success
 * @param type
 */


function ajax(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'GET' : _ref$method,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? '' : _ref$data,
      success = _ref.success,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'json' : _ref$type;
  var xhr = getXhr();
  method.toUpperCase() == 'POST' && xhr.setRequestHeader('Content-Type', 'x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      success(type == 'json' ? JSON.parse(xhr.responseText) : xhr.responseText);
    }
  };

  var queryStr = getQueryString(data);

  if (method.toUpperCase() == 'POST') {
    data = queryStr;
  } else if (method.toUpperCase() == 'GET') {
    url += queryStr;
    data = '';
  }

  xhr.open("get", url, true);
  xhr.send(data);
}

module.exports = {
  inherit: inherit,
  ajax: ajax
};

/***/ }),

/***/ "./src/drawer/Animation.js":
/*!*********************************!*\
  !*** ./src/drawer/Animation.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var DEFAULT_INTERVAL = 1000 / 60; //初始化状态

var STATE_INITIAL = 0; //开始状态

var STATE_START = 1; //停止状态

var STATE_STOP = 2;
/**
 * animation
 */

var requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || //所有都不支持，用setTimeout兼容
  function (callback) {
    return window.setTimeout(callback, callback.interval || DEFAULT_INTERVAL); // make interval as precise as possible.
  };
}();
/**
 * cancel raf
 */


var cancelAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();
/**
 *
 * @param board
 * @param period 每一次回调的间隔时间
 * @constructor
 */


function Animation(board, interval) {
  this.board = board;
  this.interval = interval || DEFAULT_INTERVAL;
  this.timer = 0;
  this.state = STATE_INITIAL;
}
/**
 * 时间轴上每一次回调执行的函数
 * @param time 从动画开始到当前执行的时间
 */


Animation.prototype.onenterframe = function (time) {};
/**
 * 开始动画
 */


Animation.prototype.start = function () {
  if (this.state === STATE_START) return;
  this.state = STATE_START;
  startAnimation(this, +new Date());
};
/**
 * 重新开始动画
 */


Animation.prototype.restart = function () {
  if (this.state === STATE_START) return;
  if (!this.dur || !this.interval) return;
  this.state = STATE_START; //无缝连接停止动画的状态

  startAnimation(this, +new Date() - this.dur);
};
/**
 * 停止动画
 */


Animation.prototype.stop = function () {
  if (this.state !== STATE_START) return;
  this.state = STATE_STOP; //如果动画开始过，则记录动画从开始到当前所经历的时间

  if (this.startTime) {
    this.dur = +new Date() - this.startTime;
  }

  cancelAnimationFrame(this.timer);
};
/**
 * 时间轴动画启动函数
 * @param animation 时间轴实例
 * @param startTime 动画开始时间戳
 */


function startAnimation(animation, startTime) {
  //记录上一次回调的时间戳
  var lastTick = +new Date();
  animation.startTime = startTime;
  nextTick.interval = animation.interval;
  nextTick();
  /**
   * 每一帧执行的函数
   */

  function nextTick() {
    var now = +new Date();
    animation.timer = requestAnimationFrame(nextTick); //如果当前时间与上一次回调的时间戳相差大于我们设置的间隔时间，表示可以执行一次回调函数。

    if (now - lastTick >= animation.interval) {
      if (animation.board) {
        animation.board.clean();
        animation.board.refresh();
      }

      animation.onenterframe(now - startTime);
      lastTick = now;
    }
  }
}

module.exports = Animation;

/***/ }),

/***/ "./src/drawer/Board.js":
/*!*****************************!*\
  !*** ./src/drawer/Board.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 画板
 * @param canvas
 * @constructor
 */
function Board(canvas) {
  if (!canvas || !canvas.getContext) {
    throw new Error('找不到指定元素或者不支持Canvas的浏览器');
  }

  this.destCtx = canvas.getContext('2d');
  var cacheCanvas = document.createElement('canvas');
  cacheCanvas.width = canvas.width;
  cacheCanvas.height = canvas.height;
  this.ctx = cacheCanvas.getContext('2d'); //图层

  this.layers = []; //隐藏的图层

  this._hide_layers = [];
}

;
Board.prototype = {
  //获取canvas上下文对象
  getContext: function getContext() {
    return this.destCtx;
  },
  getCanvas: function getCanvas() {
    return this.destCtx.canvas;
  },
  //重置canvas的大小
  resize: function resize(_ref) {
    var width = _ref.width,
        height = _ref.height;
    this.ctx.canvas.width = width || this.ctx.canvas.width;
    this.ctx.canvas.height = height || this.ctx.canvas.height;
    this.destCtx.canvas.width = width || this.destCtx.canvas.width;
    this.destCtx.canvas.height = height || this.destCtx.canvas.height;
  },
  //擦除画板，擦除后可以使用refresh重新渲染
  clean: function clean() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.destCtx.clearRect(0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
  },
  //清除所有画板元素，清除后使用refresh不能重新渲染
  clear: function clear() {
    this.layers.forEach(function (value) {
      value.clear();
    });
    this.layers = [];
  },
  //刷新页面
  refresh: function refresh() {
    this.layers.forEach(function (value) {
      value.refresh();
    }); //显示图片内容

    this.destCtx.drawImage(this.ctx.canvas, 0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
  },
  //显示
  show: function show() {
    if (this._hide_layers.length == 0) {
      return;
    }

    this.layers = this._hide_layers;
    this._hide_layers = [];
  },
  //隐藏
  hide: function hide() {
    if (this.layers.length == 0) {
      return;
    }

    this._hide_layers = this.layers;
    this.layers = [];
  },
  //获取图层对象
  getLayer: function getLayer(id) {
    var layer;

    for (var key in this.layers) {
      layer = this.layers[key];

      if (layer.attributes.id == id) {
        return layer;
      }
    }

    throw new Error('请给定正确的图层对象中attributes属性的id值');
  },
  //获取所有图层对象的数组
  getLayers: function getLayers() {
    return this.layers;
  },
  exportImg: function exportImg() {
    var imgData = this.distCtx.canvas.toDataURL();
    var img = new Image();
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

/***/ }),

/***/ "./src/drawer/Layer.js":
/*!*****************************!*\
  !*** ./src/drawer/Layer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Layer(board, attributes) {
  //图层id
  this.attributes = attributes; //画板对象

  this.board = board; //图元队列

  this.graphs = [];
  this._hide_graphs = [];
  board.getLayers().push(this);
}

;
Layer.prototype = {
  constructor: Layer,
  //清除所有画板元素，清除后使用refresh不能重新渲染
  clear: function clear() {
    this.graphs.forEach(function (value, key) {
      value.clear();
    });
    this.graphs = [];
  },
  //刷新
  refresh: function refresh() {
    this.graphs.forEach(function (value, key) {
      value.refresh();
    });
  },
  show: function show() {
    if (this._hide_graphs.length == 0) {
      return;
    }

    this.graphs = this._hide_graphs;
    this._hide_graphs = [];
  },
  hide: function hide() {
    if (this.graphs.length == 0) {
      return;
    }

    this._hide_graphs = this.graphs;
    this.graphs = [];
  },
  //获取画板对象
  getBoard: function getBoard() {
    return this.board;
  },
  getGraph: function getGraph(index) {
    return this.graphs[index];
  },
  getGraphs: function getGraphs() {
    return this.graphs;
  },
  //添加图元
  push: function push(item) {
    this.graphs.push(item);
  },
  //删除图元
  remove: function remove(item) {
    this.graphs.splice(this.graphs.indexOf(item), 1);
  }
};
module.exports = Layer;

/***/ }),

/***/ "./src/drawer/Topoboard.js":
/*!*********************************!*\
  !*** ./src/drawer/Topoboard.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var CutParams = __webpack_require__(/*! ./component/CutParams */ "./src/drawer/component/CutParams.js");

var Shadow = __webpack_require__(/*! ./component/Shadow */ "./src/drawer/component/Shadow.js");

var ImgManager = __webpack_require__(/*! ./shapes/ImgManager */ "./src/drawer/shapes/ImgManager.js");

var Board = __webpack_require__(/*! ./Board.js */ "./src/drawer/Board.js");

var Animation = __webpack_require__(/*! ./Animation */ "./src/drawer/Animation.js");

var Layer = __webpack_require__(/*! ./Layer */ "./src/drawer/Layer.js");

var Circle = __webpack_require__(/*! ./shapes/Circle */ "./src/drawer/shapes/Circle.js");

var PolyLine = __webpack_require__(/*! ./shapes/PolyLine */ "./src/drawer/shapes/PolyLine.js");

var Rect = __webpack_require__(/*! ./shapes/Rect */ "./src/drawer/shapes/Rect.js");

var Img = __webpack_require__(/*! ./shapes/Img */ "./src/drawer/shapes/Img.js");

var Text = __webpack_require__(/*! ./shapes/Text */ "./src/drawer/shapes/Text.js");

function factory() {
  return {
    Board: Board,
    Animation: Animation,
    Layer: Layer,
    Circle: Circle,
    PolyLine: PolyLine,
    Rect: Rect,
    Img: Img,
    Text: Text,
    ImgManager: ImgManager,
    CutParams: CutParams,
    Shadow: Shadow
  };
}

if (true) {
  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

if (window) {
  window['Topoboard'] = factory();
}

module.exports = factory();

/***/ }),

/***/ "./src/drawer/component/CutParams.js":
/*!*******************************************!*\
  !*** ./src/drawer/component/CutParams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function CutParams(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

module.exports = CutParams;

/***/ }),

/***/ "./src/drawer/component/Shadow.js":
/*!****************************************!*\
  !*** ./src/drawer/component/Shadow.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Shadow(color, x, y, blur) {
  this.color = color;
  this.x = x;
  this.y = y;
  this.blur = blur;
}

module.exports = Shadow;

/***/ }),

/***/ "./src/drawer/shapes/Circle.js":
/*!*************************************!*\
  !*** ./src/drawer/shapes/Circle.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Graph = __webpack_require__(/*! ./Graph */ "./src/drawer/shapes/Graph.js");

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    inherit = _require.inherit; //圆形


function Circle(_ref) {
  var layer = _ref.layer,
      o = _ref.o,
      r = _ref.r,
      width = _ref.width,
      color = _ref.color,
      closePath = _ref.closePath,
      shadow = _ref.shadow;
  Graph.call(this, {
    layer: layer,
    closePath: closePath,
    color: color,
    shadow: shadow
  });
  this.o = o;
  this.r = r;
  this.width = width;
}

inherit(Circle, Graph, {
  fill: function fill() {
    var self = this;
    this.drawer.fill(function (ctx) {
      ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI * 2, true);
      ctx.fillStyle = self.color;
      self.closePath && ctx.closePath();
    });
    this.push('fill');
    return this;
  },
  stroke: function stroke() {
    var self = this;
    this.drawer.stroke(function (ctx) {
      ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI * 2, true);
      ctx.strokeStyle = self.color;
      ctx.lineWidth = self.width;
      self.closePath && ctx.closePath();
    });
    this.push('stroke');
    return this;
  }
});
module.exports = Circle;

/***/ }),

/***/ "./src/drawer/shapes/Drawer.js":
/*!*************************************!*\
  !*** ./src/drawer/shapes/Drawer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addShadow(ctx, shadow) {
  ctx.shadowBlur = shadow.blur;
  ctx.shadowColor = shadow.color;
  ctx.shadowOffsetX = shadow.x;
  ctx.shadowOffsetY = shadow.y;
} //画家


function Drawer(graph, ctx) {
  this.graph = graph;
  this.ctx = ctx;
}

Drawer.prototype = {
  closePath: function closePath() {
    this.ctx.closePath();
  },
  draw: function draw(executor) {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.graph.color;
    addShadow(this.ctx, this.graph.shadow);
    executor && executor(this.ctx);
  },
  fill: function fill(executor) {
    this.draw(executor);
    this.ctx.fill();
  },
  stroke: function stroke(executor) {
    this.draw(executor);
    this.ctx.stroke();
  }
};
module.exports = Drawer;

/***/ }),

/***/ "./src/drawer/shapes/Graph.js":
/*!************************************!*\
  !*** ./src/drawer/shapes/Graph.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Drawer = __webpack_require__(/*! ./Drawer */ "./src/drawer/shapes/Drawer.js");

var Shadow = __webpack_require__(/*! ../component/Shadow */ "./src/drawer/component/Shadow.js");

function Graph(_ref) {
  var layer = _ref.layer,
      closePath = _ref.closePath,
      color = _ref.color,
      shadow = _ref.shadow;
  this.layer = layer;
  this.drawer = new Drawer(this, this.layer.getBoard().getContext());
  this.methods = [];
  this._hide_methods = [];
  this.closePath = closePath;
  this.color = color;
  this.shadow = shadow || new Shadow(0, '#000', 0, 0);
  this.layer.push(this);
} //清除所有画板元素，清除后使用refresh不能重新渲染


Graph.prototype.clear = function () {
  this.methods = [];
}; //调用当前元素的记录方法，重新绘制图形


Graph.prototype.refresh = function () {
  var self = this;
  this.methods.forEach(function (value) {
    self[value]();
    self.methods.pop();
  });
};

Graph.prototype.show = function () {
  if (this._hide_methods.length == 0) {
    return;
  }

  this._hide_methods = this.methods;
  this.methods = [];
};

Graph.prototype.hide = function () {
  if (this.methods.length == 0) {
    return;
  }

  this.methods = this._hide_methods;
  this._hide_methods = [];
};

Graph.prototype.push = function (method) {
  this.methods.push(method);
};

Graph.prototype.getLayer = function () {
  return this.layer;
};

module.exports = Graph;

/***/ }),

/***/ "./src/drawer/shapes/Img.js":
/*!**********************************!*\
  !*** ./src/drawer/shapes/Img.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Graph = __webpack_require__(/*! ./Graph */ "./src/drawer/shapes/Graph.js");

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    inherit = _require.inherit;
/**
 *
 * @param imageJson
 * @param src @type CutParams
 * @param dst @type CutParams
 * @constructor
 */


function Img(_ref) {
  var layer = _ref.layer,
      image = _ref.image,
      src = _ref.src,
      dst = _ref.dst,
      shadow = _ref.shadow;
  Graph.call(this, {
    layer: layer,
    closePath: false,
    shadow: shadow
  });
  this.image = image;
  this.src = src;
  this.dst = dst;
}

inherit(Img, Graph, {
  //添加图片
  draw: function draw() {
    this.drawer.ctx.drawImage(this.image, this.dst.x, this.dst.y, this.dst.w, this.dst.h);
    this.push('draw');
    return this;
  },
  //裁剪图片
  cut: function cut() {
    this.drawer.ctx.drawImage(this.image, this.src.x, this.src.y, this.src.w, this.src.h, this.dst.x, this.dst.y, this.dst.w, this.dst.h);
    this.push('cut');
    return this;
  }
});
module.exports = Img;

/***/ }),

/***/ "./src/drawer/shapes/ImgManager.js":
/*!*****************************************!*\
  !*** ./src/drawer/shapes/ImgManager.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    ajax = _require.ajax; //数据准备状态：0：请求未初始化；1：开始加载图片信息；2：已加载图片信息，开始加载图片；3：每加载一张图片调用一次；4：所有图片都加载完成


var STATE_INITIAL = 0;
var STATE_RESOURCE_INFO_PRE_LOAD = 1;
var STATE_RESOURCE_INFO_READY = 2;
var STATE_RESOURCE_LOADING = 3;
var STATE_RESOURCE_READY = 4;
/**
 * 图片加载管理器
 * @param imgJsonUrl
 * @constructor
 */

function ImgManager(_ref) {
  var imgJsonUrl = _ref.imgJsonUrl,
      onreadystatechange = _ref.onreadystatechange;
  this.imgJsonUrl = imgJsonUrl;
  this.data;
  this.imgs = {};
  this.count = 0;
  this.readyState = STATE_INITIAL;
  this.onreadystatechange = onreadystatechange;
}

ImgManager.prototype.load = function () {
  var self = this;
  this.readyState = STATE_RESOURCE_INFO_PRE_LOAD;
  this.onreadystatechange && this.onreadystatechange();
  ajax({
    url: this.imgJsonUrl,
    success: function success(data) {
      self.data = data;
      var imgs = data.images;
      self.readyState = STATE_RESOURCE_INFO_READY;
      self.onreadystatechange && self.onreadystatechange();

      for (var key in imgs) {
        //创建图片
        self.imgs[imgs[key].name] = new Image(); //加载图片

        self.imgs[imgs[key].name].src = imgs[key].url; //监听加载

        self.imgs[imgs[key].name].onload = function () {
          self.count++;
          self.readyState = STATE_RESOURCE_LOADING;
          self.onreadystatechange && self.onreadystatechange(); //加载完成

          if (self.count == imgs.length) {
            self.readyState = STATE_RESOURCE_READY;
            self.onreadystatechange && self.onreadystatechange();
          }
        };
      }
    }
  });
};

module.exports = ImgManager;

/***/ }),

/***/ "./src/drawer/shapes/PolyLine.js":
/*!***************************************!*\
  !*** ./src/drawer/shapes/PolyLine.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Graph = __webpack_require__(/*! ./Graph */ "./src/drawer/shapes/Graph.js");

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    inherit = _require.inherit; //折线


function PolyLine(_ref) {
  var layer = _ref.layer,
      axis = _ref.axis,
      width = _ref.width,
      color = _ref.color,
      closePath = _ref.closePath,
      shadow = _ref.shadow;
  Graph.call(this, {
    layer: layer,
    closePath: closePath,
    color: color,
    shadow: shadow
  });
  this.axis = axis;
  this.width = width || 1;
}

inherit(PolyLine, Graph, {
  stroke: function stroke() {
    var self = this;
    this.drawer.stroke(function (ctx) {
      var axis = self.axis;
      ctx.moveTo(axis[0][0], axis[0][1]);
      axis.forEach(function (value, key) {
        if (key > 0) {
          ctx.lineTo(value[0], value[1]);
        }
      });
      ctx.strokeStyle = self.color;
      ctx.lineWidth = self.width;
      ctx.lineCap = "round";
      self.closePath && ctx.closePath();
    });
    this.push('stroke');
    return this;
  },
  fill: function fill() {
    var self = this;
    this.drawer.fill(function (ctx) {
      var axis = self.axis;
      ctx.moveTo(axis[0][0], axis[0][1]);
      axis.forEach(function (value, key) {
        if (key > 0) {
          ctx.lineTo(value[0], value[1]);
        }
      });
      ctx.fillStyle = self.color;
      ctx.lineWidth = self.width;
      ctx.lineCap = "round";
      self.closePath && ctx.closePath();
    });
    this.push('fill');
    return this;
  }
});
module.exports = PolyLine;

/***/ }),

/***/ "./src/drawer/shapes/Rect.js":
/*!***********************************!*\
  !*** ./src/drawer/shapes/Rect.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Graph = __webpack_require__(/*! ./Graph */ "./src/drawer/shapes/Graph.js");

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    inherit = _require.inherit;

function Rect(_ref) {
  var layer = _ref.layer,
      cutParams = _ref.cutParams,
      width = _ref.width,
      color = _ref.color,
      shadow = _ref.shadow;
  Graph.call(this, {
    layer: layer,
    closePath: false,
    color: color,
    shadow: shadow
  });
  this.cutParams = cutParams;
  this.width = width;
}

inherit(Rect, Graph, {
  draw: function draw(ctx) {
    var self = this;
    ctx.rect(self.cutParams.x, self.cutParams.y, self.cutParams.w, self.cutParams.h);
    ctx.strokeStyle = self.color;
    ctx.lineWidth = self.width;
  },
  fill: function fill() {
    var self = this;
    this.drawer.fill(function (ctx) {
      self.draw(ctx);
    });
    this.push('fill');
    return this;
  },
  stroke: function stroke() {
    var self = this;
    this.drawer.stroke(function (ctx) {
      self.draw(ctx);
    });
    this.push('stroke');
    return this;
  }
});
module.exports = Rect;

/***/ }),

/***/ "./src/drawer/shapes/Text.js":
/*!***********************************!*\
  !*** ./src/drawer/shapes/Text.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Graph = __webpack_require__(/*! ./Graph */ "./src/drawer/shapes/Graph.js");

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    inherit = _require.inherit;

function Text(_ref) {
  var layer = _ref.layer,
      position = _ref.position,
      content = _ref.content,
      font = _ref.font,
      color = _ref.color,
      shadow = _ref.shadow;
  Graph.call(this, {
    layer: layer,
    closePath: true,
    color: color,
    shadow: shadow
  });
  this.content = content;
  this.position = position;
  this.font = font;
}

inherit(Text, Graph, {
  fill: function fill() {
    var self = this,
        ctx = this.drawer.ctx;
    ctx.font = self.font;
    ctx.fillStyle = this.color;
    ctx.fillText(self.content, self.position[0], self.position[1]);
    this.closePath && ctx.closePath();
    this.push('fill');
    return this;
  }
});
module.exports = Text;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL0xheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvVG9wb2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvY29tcG9uZW50L0N1dFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL2NvbXBvbmVudC9TaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvQ2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9JbWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvSW1nTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9Qb2x5TGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9SZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL1RleHQuanMiXSwibmFtZXMiOlsiaW5oZXJpdCIsIkNoaWxkIiwiUGFyZW50IiwiY2hpbGRGaWVsZCIsIkYiLCJwcm90b3R5cGUiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJnZXRYaHIiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJnZXRRdWVyeVN0cmluZyIsImRhdGEiLCJyZXQiLCJoYXNPd25Qcm9wZXJ0eSIsInN1YnN0ciIsImxlbmd0aCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwidHlwZSIsInRvVXBwZXJDYXNlIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJxdWVyeVN0ciIsIm9wZW4iLCJzZW5kIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRFRkFVTFRfSU5URVJWQUwiLCJTVEFURV9JTklUSUFMIiwiU1RBVEVfU1RBUlQiLCJTVEFURV9TVE9QIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93Iiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImludGVydmFsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJBbmltYXRpb24iLCJib2FyZCIsInRpbWVyIiwic3RhdGUiLCJvbmVudGVyZnJhbWUiLCJ0aW1lIiwic3RhcnQiLCJzdGFydEFuaW1hdGlvbiIsIkRhdGUiLCJyZXN0YXJ0IiwiZHVyIiwic3RvcCIsInN0YXJ0VGltZSIsImFuaW1hdGlvbiIsImxhc3RUaWNrIiwibmV4dFRpY2siLCJub3ciLCJjbGVhbiIsInJlZnJlc2giLCJCb2FyZCIsImNhbnZhcyIsImdldENvbnRleHQiLCJFcnJvciIsImRlc3RDdHgiLCJjYWNoZUNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwibGF5ZXJzIiwiX2hpZGVfbGF5ZXJzIiwiZ2V0Q2FudmFzIiwicmVzaXplIiwiY2xlYXJSZWN0IiwiY2xlYXIiLCJmb3JFYWNoIiwiZHJhd0ltYWdlIiwic2hvdyIsImhpZGUiLCJnZXRMYXllciIsImxheWVyIiwiYXR0cmlidXRlcyIsImdldExheWVycyIsImV4cG9ydEltZyIsImltZ0RhdGEiLCJkaXN0Q3R4IiwidG9EYXRhVVJMIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJMYXllciIsImdyYXBocyIsIl9oaWRlX2dyYXBocyIsInB1c2giLCJjb25zdHJ1Y3RvciIsImdldEJvYXJkIiwiZ2V0R3JhcGgiLCJpbmRleCIsImdldEdyYXBocyIsIml0ZW0iLCJyZW1vdmUiLCJzcGxpY2UiLCJpbmRleE9mIiwiQ3V0UGFyYW1zIiwicmVxdWlyZSIsIlNoYWRvdyIsIkltZ01hbmFnZXIiLCJDaXJjbGUiLCJQb2x5TGluZSIsIlJlY3QiLCJJbWciLCJUZXh0IiwiZmFjdG9yeSIsImRlZmluZSIsIngiLCJ5IiwidyIsImgiLCJjb2xvciIsImJsdXIiLCJHcmFwaCIsIm8iLCJyIiwiY2xvc2VQYXRoIiwic2hhZG93IiwiY2FsbCIsImZpbGwiLCJzZWxmIiwiZHJhd2VyIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwic3Ryb2tlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJhZGRTaGFkb3ciLCJzaGFkb3dCbHVyIiwic2hhZG93Q29sb3IiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsIkRyYXdlciIsImdyYXBoIiwiZHJhdyIsImV4ZWN1dG9yIiwiYmVnaW5QYXRoIiwibWV0aG9kcyIsIl9oaWRlX21ldGhvZHMiLCJwb3AiLCJpbWFnZSIsImRzdCIsImN1dCIsIlNUQVRFX1JFU09VUkNFX0lORk9fUFJFX0xPQUQiLCJTVEFURV9SRVNPVVJDRV9JTkZPX1JFQURZIiwiU1RBVEVfUkVTT1VSQ0VfTE9BRElORyIsIlNUQVRFX1JFU09VUkNFX1JFQURZIiwiaW1nSnNvblVybCIsImltZ3MiLCJjb3VudCIsImxvYWQiLCJpbWFnZXMiLCJuYW1lIiwib25sb2FkIiwiYXhpcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVDYXAiLCJjdXRQYXJhbXMiLCJyZWN0IiwicG9zaXRpb24iLCJjb250ZW50IiwiZm9udCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7OztBQU1BLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQ0MsVUFBaEMsRUFBNEM7QUFDM0MsTUFBSUMsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBVyxDQUFFLENBQXJCOztBQUNHQSxHQUFDLENBQUNDLFNBQUYsR0FBY0gsTUFBTSxDQUFDRyxTQUFyQjtBQUNISixPQUFLLENBQUNJLFNBQU4sR0FBa0IsSUFBSUQsQ0FBSixFQUFsQjs7QUFDRyxPQUFJLElBQUlFLEdBQVIsSUFBZUgsVUFBZixFQUEyQjtBQUMxQixRQUFJSSxLQUFLLEdBQUdKLFVBQVUsQ0FBQ0csR0FBRCxDQUF0QjtBQUNHTCxTQUFLLENBQUNJLFNBQU4sQ0FB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QUxBLEtBQXpCO0FBQWdDTSxVQUFNLEVBQU5BO0FBQWhDLEdBQWpCO0FBRUEsT0FBSzhDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0UsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7O0FBRUQ5TCxPQUFPLENBQUNrSSxJQUFELEVBQU9TLEtBQVAsRUFBYztBQUNqQk0sTUFBSSxFQUFFLGdCQUFXO0FBQ2IsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFBQSxRQUFpQjNELEdBQUcsR0FBRyxLQUFLNEQsTUFBTCxDQUFZNUQsR0FBbkM7QUFDQUEsT0FBRyxDQUFDdUcsSUFBSixHQUFXNUMsSUFBSSxDQUFDNEMsSUFBaEI7QUFDQXZHLE9BQUcsQ0FBQ2dFLFNBQUosR0FBZ0IsS0FBS2QsS0FBckI7QUFDQWxELE9BQUcsQ0FBQ3dHLFFBQUosQ0FBYTdDLElBQUksQ0FBQzJDLE9BQWxCLEVBQTJCM0MsSUFBSSxDQUFDMEMsUUFBTCxDQUFjLENBQWQsQ0FBM0IsRUFBNkMxQyxJQUFJLENBQUMwQyxRQUFMLENBQWMsQ0FBZCxDQUE3QztBQUNBLFNBQUs5QyxTQUFMLElBQWtCdkQsR0FBRyxDQUFDdUQsU0FBSixFQUFsQjtBQUVBLFNBQUs5QixJQUFMLENBQVUsTUFBVjtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBVmdCLENBQWQsQ0FBUDtBQWFBMUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMkYsSUFBakIsQyIsImZpbGUiOiJCb2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2RyYXdlci9Ub3BvYm9hcmQuanNcIik7XG4iLCIvKipcbiAqIOe7p+aJv+aWueazlVxuICogQHBhcmFtIENoaWxkXG4gKiBAcGFyYW0gUGFyZW50XG4gKiBAcGFyYW0gY2hpbGRGaWVsZFxuICovXG5mdW5jdGlvbiBpbmhlcml0KENoaWxkLCBQYXJlbnQsIGNoaWxkRmllbGQpIHtcblx0bGV0IEYgPSBmdW5jdGlvbigpIHt9O1xuICAgIEYucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZTtcblx0Q2hpbGQucHJvdG90eXBlID0gbmV3IEYoKTtcbiAgICBmb3IobGV0IGtleSBpbiBjaGlsZEZpZWxkKSB7XG4gICAgXHRsZXQgdmFsdWUgPSBjaGlsZEZpZWxkW2tleV07XG4gICAgICAgIENoaWxkLnByb3RvdHlwZVtrZXldID0gdmFsdWU7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2hpbGQucHJvdG90eXBlLCB7XG5cdCAgICAnY29uc3RydWN0b3InOiB7XG5cdCAgICAgICAgdmFsdWU6IENoaWxkLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICog6I635Y+WeGhy5a+56LGhXG4gKi9cbmZ1bmN0aW9uIGdldFhocigpIHtcbiAgICBsZXQgeGhyO1xuICAgIGlmKFhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgICBlbHNlIGlmKEFjdGl2ZVhPYmplY3QpIHtcbiAgICAgICAgeGhyID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHhocjtcbn1cblxuLyoqXG4gKiDojrflj5bmn6Xor6LlrZfnrKbkuLJcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRRdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgaWYoISBkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IHJldCA9ICc/JztcbiAgICBmb3IobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldCArPSBrZXkgKyAnPScgKyB2YWx1ZSArICcmJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0LnN1YnN0cigwLCByZXQubGVuZ3RoIC0gMSk7XG59XG5cbi8qKlxuICogYWpheOe9kee7nOivt+axguaWueazlVxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIG1ldGhvZFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSBzdWNjZXNzXG4gKiBAcGFyYW0gdHlwZVxuICovXG5mdW5jdGlvbiBhamF4KHt1cmwsIG1ldGhvZCA9ICdHRVQnLCBkYXRhID0gJycsIHN1Y2Nlc3MsIHR5cGUgPSAnanNvbid9KSB7XG4gICAgbGV0IHhociA9IGdldFhocigpO1xuICAgIG1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdQT1NUJyAmJiB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgc3VjY2Vzcyh0eXBlID09ICdqc29uJz8gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTogeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHF1ZXJ5U3RyID0gZ2V0UXVlcnlTdHJpbmcoZGF0YSk7XG4gICAgaWYobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ1BPU1QnKSB7XG4gICAgICAgIGRhdGEgPSBxdWVyeVN0cjtcbiAgICB9XG4gICAgZWxzZSBpZihtZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJykge1xuICAgICAgICB1cmwgKz0gcXVlcnlTdHI7XG4gICAgICAgIGRhdGEgPSAnJztcbiAgICB9XG4gICAgeGhyLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5oZXJpdDogaW5oZXJpdCxcbiAgICBhamF4OiBhamF4XG59OyIsImNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSAxMDAwIC8gNjA7XG4vL+WIneWni+WMlueKtuaAgVxuY29uc3QgU1RBVEVfSU5JVElBTCA9IDA7XG4vL+W8gOWni+eKtuaAgVxuY29uc3QgU1RBVEVfU1RBUlQgPSAxO1xuLy/lgZzmraLnirbmgIFcbmNvbnN0IFNUQVRFX1NUT1AgPSAyO1xuLyoqXG4gKiBhbmltYXRpb25cbiAqL1xuY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvL+aJgOaciemDveS4jeaUr+aMge+8jOeUqHNldFRpbWVvdXTlhbzlrrlcblx0XHRmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgKGNhbGxiYWNrLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwpKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxuXHRcdH07XG59KSgpO1xuXG4vKipcbiAqIGNhbmNlbCByYWZcbiAqL1xuY29uc3QgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChpZCk7XG5cdFx0fTtcbn0pKCk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBib2FyZFxuICogQHBhcmFtIHBlcmlvZCDmr4/kuIDmrKHlm57osIPnmoTpl7TpmpTml7bpl7RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBBbmltYXRpb24oYm9hcmQsIGludGVydmFsKSB7XG5cdHRoaXMuYm9hcmQgPSBib2FyZDtcblx0dGhpcy5pbnRlcnZhbCA9IGludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUw7XG5cdHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMuc3RhdGUgPSBTVEFURV9JTklUSUFMO1xufVxuXG4vKipcbiAqIOaXtumXtOi9tOS4iuavj+S4gOasoeWbnuiwg+aJp+ihjOeahOWHveaVsFxuICogQHBhcmFtIHRpbWUg5LuO5Yqo55S75byA5aeL5Yiw5b2T5YmN5omn6KGM55qE5pe26Ze0XG4gKi9cbkFuaW1hdGlvbi5wcm90b3R5cGUub25lbnRlcmZyYW1lID0gZnVuY3Rpb24odGltZSkge1xuXG59O1xuLyoqXG4gKiDlvIDlp4vliqjnlLtcbiAqL1xuQW5pbWF0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9TVEFSVClcbiAgICAgICAgcmV0dXJuO1xuICAgIHRoaXMuc3RhdGUgPSBTVEFURV9TVEFSVDtcblxuICAgIHN0YXJ0QW5pbWF0aW9uKHRoaXMsICtuZXcgRGF0ZSgpKTtcbn07XG5cbi8qKlxuICog6YeN5paw5byA5aeL5Yqo55S7XG4gKi9cbkFuaW1hdGlvbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfU1RBUlQpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIXRoaXMuZHVyIHx8ICF0aGlzLmludGVydmFsKVxuICAgICAgICByZXR1cm47XG5cbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfU1RBUlQ7XG5cbiAgICAvL+aXoOe8nei/nuaOpeWBnOatouWKqOeUu+eahOeKtuaAgVxuICAgIHN0YXJ0QW5pbWF0aW9uKHRoaXMsICtuZXcgRGF0ZSgpIC0gdGhpcy5kdXIpO1xufTtcblxuLyoqXG4gKiDlgZzmraLliqjnlLtcbiAqL1xuQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFNUQVRFX1NUQVJUKVxuICAgICAgICByZXR1cm47XG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1NUT1A7XG5cbiAgICAvL+WmguaenOWKqOeUu+W8gOWni+i/h++8jOWImeiusOW9leWKqOeUu+S7juW8gOWni+WIsOW9k+WJjeaJgOe7j+WOhueahOaXtumXtFxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSkge1xuICAgICAgICB0aGlzLmR1ciA9ICtuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xufTtcblxuLyoqXG4gKiDml7bpl7TovbTliqjnlLvlkK/liqjlh73mlbBcbiAqIEBwYXJhbSBhbmltYXRpb24g5pe26Ze06L205a6e5L6LXG4gKiBAcGFyYW0gc3RhcnRUaW1lIOWKqOeUu+W8gOWni+aXtumXtOaIs1xuICovXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbihhbmltYXRpb24sIHN0YXJ0VGltZSkge1xuICAgIC8v6K6w5b2V5LiK5LiA5qyh5Zue6LCD55qE5pe26Ze05oizXG4gICAgbGV0IGxhc3RUaWNrID0gK25ldyBEYXRlKCk7XG5cbiAgICBhbmltYXRpb24uc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgIG5leHRUaWNrLmludGVydmFsID0gYW5pbWF0aW9uLmludGVydmFsO1xuICAgIG5leHRUaWNrKCk7XG5cbiAgICAvKipcbiAgICAgKiDmr4/kuIDluKfmiafooYznmoTlh73mlbBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgICAgICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGFuaW1hdGlvbi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShuZXh0VGljayk7XG5cbiAgICAgICAgLy/lpoLmnpzlvZPliY3ml7bpl7TkuI7kuIrkuIDmrKHlm57osIPnmoTml7bpl7TmiLPnm7jlt67lpKfkuo7miJHku6zorr7nva7nmoTpl7TpmpTml7bpl7TvvIzooajnpLrlj6/ku6XmiafooYzkuIDmrKHlm57osIPlh73mlbDjgIJcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RUaWNrID49IGFuaW1hdGlvbi5pbnRlcnZhbCkge1xuICAgICAgICBcdGlmKGFuaW1hdGlvbi5ib2FyZCkge1xuXHRcdFx0XHRhbmltYXRpb24uYm9hcmQuY2xlYW4oKTtcblx0XHRcdFx0YW5pbWF0aW9uLmJvYXJkLnJlZnJlc2goKTtcbiAgICAgICAgXHR9XG4gICAgICAgICAgICBhbmltYXRpb24ub25lbnRlcmZyYW1lKG5vdyAtIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICBsYXN0VGljayA9IG5vdztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBbmltYXRpb247IiwiLyoqXG4gKiDnlLvmnb9cbiAqIEBwYXJhbSBjYW52YXNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCb2FyZChjYW52YXMpIHtcbiAgICBpZighIGNhbnZhcyB8fCAhIGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign5om+5LiN5Yiw5oyH5a6a5YWD57Sg5oiW6ICF5LiN5pSv5oyBQ2FudmFz55qE5rWP6KeI5ZmoJyk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXN0Q3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgY2FjaGVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYWNoZUNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICBjYWNoZUNhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgdGhpcy5jdHggPSBjYWNoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8v5Zu+5bGCXG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAvL+makOiXj+eahOWbvuWxglxuICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gW107XG59O1xuQm9hcmQucHJvdG90eXBlID0ge1xuICAgIC8v6I635Y+WY2FudmFz5LiK5LiL5paH5a+56LGhXG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3RDdHg7XG4gICAgfSxcbiAgICBnZXRDYW52YXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0Q3R4LmNhbnZhcztcbiAgICB9LFxuICAgIC8v6YeN572uY2FudmFz55qE5aSn5bCPXG4gICAgcmVzaXplOiBmdW5jdGlvbih7d2lkdGgsIGhlaWdodH0pIHtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gd2lkdGggfHwgdGhpcy5jdHguY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZGVzdEN0eC5jYW52YXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodDtcbiAgICB9LFxuICAgIC8v5pOm6Zmk55S75p2/77yM5pOm6Zmk5ZCO5Y+v5Lul5L2/55SocmVmcmVzaOmHjeaWsOa4suafk1xuICAgIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZGVzdEN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kZXN0Q3R4LmNhbnZhcy53aWR0aCwgdGhpcy5kZXN0Q3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIH0sXG4gICAgLy/muIXpmaTmiYDmnInnlLvmnb/lhYPntKDvvIzmuIXpmaTlkI7kvb/nlKhyZWZyZXNo5LiN6IO96YeN5paw5riy5p+TXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICB9LFxuICAgIC8v5Yi35paw6aG16Z2iXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5pi+56S65Zu+54mH5YaF5a65XG4gICAgICAgIHRoaXMuZGVzdEN0eC5kcmF3SW1hZ2UodGhpcy5jdHguY2FudmFzLCAwLCAwLCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoLCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCk7XG4gICAgfSxcbiAgICAvL+aYvuekulxuICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLl9oaWRlX2xheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5faGlkZV9sYXllcnM7XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+makOiXj1xuICAgIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLmxheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+iOt+WPluWbvuWxguWvueixoVxuICAgIGdldExheWVyOiBmdW5jdGlvbihpZCkge1xuICAgICAgICBsZXQgbGF5ZXI7XG4gICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICAgICAgICBpZihsYXllci5hdHRyaWJ1dGVzLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign6K+357uZ5a6a5q2j56Gu55qE5Zu+5bGC5a+56LGh5LitYXR0cmlidXRlc+WxnuaAp+eahGlk5YC8Jyk7XG4gICAgfSxcbiAgICAvL+iOt+WPluaJgOacieWbvuWxguWvueixoeeahOaVsOe7hFxuICAgIGdldExheWVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycztcbiAgICB9LFxuICAgIGV4cG9ydEltZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5kaXN0Q3R4LmNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gaW1nRGF0YTtcblxuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCb2FyZC5wcm90b3R5cGUsIHtcbiAgICAnY29uc3RydWN0b3InOiB7XG4gICAgICAgIHZhbHVlOiBCb2FyZCxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcbiIsImZ1bmN0aW9uIExheWVyKGJvYXJkLCBhdHRyaWJ1dGVzKSB7XG5cdC8v5Zu+5bGCaWRcblx0dGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0Ly/nlLvmnb/lr7nosaFcblx0dGhpcy5ib2FyZCA9IGJvYXJkO1xuXHQvL+WbvuWFg+mYn+WIl1xuXHR0aGlzLmdyYXBocyA9IFtdO1xuXHR0aGlzLl9oaWRlX2dyYXBocyA9IFtdO1xuXG5cdGJvYXJkLmdldExheWVycygpLnB1c2godGhpcyk7XG59O1xuTGF5ZXIucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogTGF5ZXIsXG5cdC8v5riF6Zmk5omA5pyJ55S75p2/5YWD57Sg77yM5riF6Zmk5ZCO5L2/55SocmVmcmVzaOS4jeiDvemHjeaWsOa4suafk1xuXHRjbGVhcjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5ncmFwaHMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHR2YWx1ZS5jbGVhcigpO1xuXHRcdH0pO1xuXHRcdHRoaXMuZ3JhcGhzID0gW107XG5cdH0sXG5cdC8v5Yi35pawXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFsdWUucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRpZih0aGlzLl9oaWRlX2dyYXBocy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuZ3JhcGhzID0gdGhpcy5faGlkZV9ncmFwaHM7XG5cdFx0dGhpcy5faGlkZV9ncmFwaHMgPSBbXTtcblx0fSxcblx0aGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuZ3JhcGhzLmxlbmd0aCA9PSAwKSB7cmV0dXJuO31cbiAgICAgICAgdGhpcy5faGlkZV9ncmFwaHMgPSB0aGlzLmdyYXBocztcbiAgICAgICAgdGhpcy5ncmFwaHMgPSBbXTtcblx0fSxcblx0Ly/ojrflj5bnlLvmnb/lr7nosaFcblx0Z2V0Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmJvYXJkO1xuXHR9LFxuICAgIGdldEdyYXBoOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHNbaW5kZXhdO1xuICAgIH0sXG4gICAgZ2V0R3JhcGhzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xuICAgIH0sXG5cdC8v5re75Yqg5Zu+5YWDXG5cdHB1c2g6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR0aGlzLmdyYXBocy5wdXNoKGl0ZW0pO1xuXHR9LCBcblx0Ly/liKDpmaTlm77lhYNcblx0cmVtb3ZlOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dGhpcy5ncmFwaHMuc3BsaWNlKHRoaXMuZ3JhcGhzLmluZGV4T2YoaXRlbSksIDEpO1xuXHR9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXllcjsiLCJjb25zdCBDdXRQYXJhbXMgPSByZXF1aXJlKCcuL2NvbXBvbmVudC9DdXRQYXJhbXMnKTtcbmNvbnN0IFNoYWRvdyA9IHJlcXVpcmUoJy4vY29tcG9uZW50L1NoYWRvdycpO1xuXG5jb25zdCBJbWdNYW5hZ2VyID0gcmVxdWlyZSgnLi9zaGFwZXMvSW1nTWFuYWdlcicpO1xuXG5jb25zdCBCb2FyZCA9IHJlcXVpcmUoJy4vQm9hcmQuanMnKTtcbmNvbnN0IEFuaW1hdGlvbiA9IHJlcXVpcmUoJy4vQW5pbWF0aW9uJyk7XG5jb25zdCBMYXllciA9IHJlcXVpcmUoJy4vTGF5ZXInKTtcbmNvbnN0IENpcmNsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL0NpcmNsZScpO1xuY29uc3QgUG9seUxpbmUgPSByZXF1aXJlKCcuL3NoYXBlcy9Qb2x5TGluZScpO1xuY29uc3QgUmVjdCA9IHJlcXVpcmUoJy4vc2hhcGVzL1JlY3QnKTtcbmNvbnN0IEltZyA9IHJlcXVpcmUoJy4vc2hhcGVzL0ltZycpO1xuY29uc3QgVGV4dCA9IHJlcXVpcmUoJy4vc2hhcGVzL1RleHQnKTtcblxuZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBCb2FyZCwgQW5pbWF0aW9uLCBMYXllciwgQ2lyY2xlLCBQb2x5TGluZSwgUmVjdCwgSW1nLCBUZXh0LFxuICAgICAgICBJbWdNYW5hZ2VyLFxuICAgICAgICBDdXRQYXJhbXMsIFNoYWRvd1xuICAgIH07XG59XG5pZih0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZSgnVG9wb2JvYXJkJywgZmFjdG9yeSk7XG59XG5pZih3aW5kb3cpIHtcbiAgICB3aW5kb3dbJ1RvcG9ib2FyZCddID0gZmFjdG9yeSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsiLCJmdW5jdGlvbiBDdXRQYXJhbXMoeCwgeSwgdywgaCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3V0UGFyYW1zOyIsImZ1bmN0aW9uIFNoYWRvdyhjb2xvciwgeCwgeSwgYmx1cikge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5ibHVyID0gYmx1cjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGFkb3c7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCB7aW5oZXJpdH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbi8v5ZyG5b2iXG5mdW5jdGlvbiBDaXJjbGUoe2xheWVyLCBvLCByLCB3aWR0aCwgY29sb3IsIGNsb3NlUGF0aCwgc2hhZG93fSkge1xuICAgIEdyYXBoLmNhbGwodGhpcywge2xheWVyLCBjbG9zZVBhdGgsIGNvbG9yLCBzaGFkb3d9KTtcblxuXHR0aGlzLm8gPSBvO1xuXHR0aGlzLnIgPSByO1xuXHR0aGlzLndpZHRoID0gd2lkdGg7XG59XG5pbmhlcml0KENpcmNsZSwgR3JhcGgsIHtcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5maWxsKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgY3R4LmFyYyhzZWxmLm9bMF0sIHNlbGYub1sxXSwgc2VsZi5yLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc2VsZi5jb2xvcjtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdmaWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc3Ryb2tlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5zdHJva2UoZnVuY3Rpb24oY3R4KSB7XG5cdFx0XHRjdHguYXJjKHNlbGYub1swXSwgc2VsZi5vWzFdLCBzZWxmLnIsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7XG5cdFx0XHRjdHguc3Ryb2tlU3R5bGUgPSBzZWxmLmNvbG9yO1xuXHRcdFx0Y3R4LmxpbmVXaWR0aCA9IHNlbGYud2lkdGg7XG4gICAgICAgICAgICBzZWxmLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnc3Ryb2tlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENpcmNsZTsiLCJcbmZ1bmN0aW9uIGFkZFNoYWRvdyhjdHgsIHNoYWRvdykge1xuICAgIGN0eC5zaGFkb3dCbHVyID0gc2hhZG93LmJsdXI7XG4gICAgY3R4LnNoYWRvd0NvbG9yID0gc2hhZG93LmNvbG9yO1xuICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gc2hhZG93Lng7XG4gICAgY3R4LnNoYWRvd09mZnNldFkgPSBzaGFkb3cueTtcbn1cbi8v55S75a62XG5mdW5jdGlvbiBEcmF3ZXIoZ3JhcGgsIGN0eCkge1xuXHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdHRoaXMuY3R4ID0gY3R4O1xufVxuRHJhd2VyLnByb3RvdHlwZSA9IHtcbiAgICBjbG9zZVBhdGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9LFxuXHRkcmF3OiBmdW5jdGlvbihleGVjdXRvcikge1xuXHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhcGguY29sb3I7XG5cdFx0YWRkU2hhZG93KHRoaXMuY3R4LCB0aGlzLmdyYXBoLnNoYWRvdyk7XG4gICAgICAgIGV4ZWN1dG9yICYmIGV4ZWN1dG9yKHRoaXMuY3R4KTtcblx0fSwgXG5cdGZpbGw6IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdFx0dGhpcy5kcmF3KGV4ZWN1dG9yKTtcblx0XHR0aGlzLmN0eC5maWxsKCk7XG5cdH0sIFxuXHRzdHJva2U6IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdFx0dGhpcy5kcmF3KGV4ZWN1dG9yKTtcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEcmF3ZXI7IiwiY29uc3QgRHJhd2VyID0gcmVxdWlyZSgnLi9EcmF3ZXInKTtcbmNvbnN0IFNoYWRvdyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudC9TaGFkb3cnKTtcblxuZnVuY3Rpb24gR3JhcGgoe2xheWVyLCBjbG9zZVBhdGgsIGNvbG9yLCBzaGFkb3d9KSB7XG5cdHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLmRyYXdlciA9IG5ldyBEcmF3ZXIodGhpcywgdGhpcy5sYXllci5nZXRCb2FyZCgpLmdldENvbnRleHQoKSk7XG5cdHRoaXMubWV0aG9kcyA9IFtdO1xuXHR0aGlzLl9oaWRlX21ldGhvZHMgPSBbXTtcblx0dGhpcy5jbG9zZVBhdGggPSBjbG9zZVBhdGg7XG5cblx0dGhpcy5jb2xvciA9IGNvbG9yO1xuXHR0aGlzLnNoYWRvdyA9IHNoYWRvdyB8fCBuZXcgU2hhZG93KDAsICcjMDAwJywgMCwgMCk7XG5cbiAgICB0aGlzLmxheWVyLnB1c2godGhpcyk7XG59XG4vL+a4hemZpOaJgOacieeUu+adv+WFg+e0oO+8jOa4hemZpOWQjuS9v+eUqHJlZnJlc2jkuI3og73ph43mlrDmuLLmn5NcbkdyYXBoLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLm1ldGhvZHMgPSBbXTtcbn07XG4vL+iwg+eUqOW9k+WJjeWFg+e0oOeahOiusOW9leaWueazle+8jOmHjeaWsOe7mOWItuWbvuW9olxuR3JhcGgucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXHR0aGlzLm1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuXHRcdHNlbGZbdmFsdWVdKCk7XG5cdFx0c2VsZi5tZXRob2RzLnBvcCgpO1xuXHR9KTtcbn07XG5HcmFwaC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuXHRpZih0aGlzLl9oaWRlX21ldGhvZHMubGVuZ3RoID09IDApIHtyZXR1cm47fVxuXHR0aGlzLl9oaWRlX21ldGhvZHMgPSB0aGlzLm1ldGhvZHM7XG5cdHRoaXMubWV0aG9kcyA9IFtdO1xufTtcbkdyYXBoLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG5cdGlmKHRoaXMubWV0aG9kcy5sZW5ndGggPT0gMCkge3JldHVybjt9XG5cdHRoaXMubWV0aG9kcyA9IHRoaXMuX2hpZGVfbWV0aG9kcztcblx0dGhpcy5faGlkZV9tZXRob2RzID0gW107XG59O1xuR3JhcGgucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbihtZXRob2QpIHtcblx0dGhpcy5tZXRob2RzLnB1c2gobWV0aG9kKTtcbn07XG5HcmFwaC5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sYXllcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCB7aW5oZXJpdH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBpbWFnZUpzb25cbiAqIEBwYXJhbSBzcmMgQHR5cGUgQ3V0UGFyYW1zXG4gKiBAcGFyYW0gZHN0IEB0eXBlIEN1dFBhcmFtc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEltZyh7bGF5ZXIsIGltYWdlLCBzcmMsIGRzdCwgc2hhZG93fSkge1xuICAgIEdyYXBoLmNhbGwodGhpcywge2xheWVyLCBjbG9zZVBhdGg6IGZhbHNlLCBzaGFkb3d9KTtcblxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB0aGlzLmRzdCA9IGRzdDtcbn1cbmluaGVyaXQoSW1nLCBHcmFwaCwge1xuICAgIC8v5re75Yqg5Zu+54mHXG4gICAgZHJhdzogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuZHN0LngsIHRoaXMuZHN0LnksIHRoaXMuZHN0LncsIHRoaXMuZHN0LmgpO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZHJhdycpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8v6KOB5Ymq5Zu+54mHXG4gICAgY3V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLnNyYy54LCB0aGlzLnNyYy55LCB0aGlzLnNyYy53LCB0aGlzLnNyYy5oLCB0aGlzLmRzdC54LCB0aGlzLmRzdC55LCB0aGlzLmRzdC53LCB0aGlzLmRzdC5oKTtcblxuICAgICAgICB0aGlzLnB1c2goJ2N1dCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbWc7IiwiY29uc3Qge2FqYXh9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuXG4vL+aVsOaNruWHhuWkh+eKtuaAge+8mjDvvJror7fmsYLmnKrliJ3lp4vljJbvvJsx77ya5byA5aeL5Yqg6L295Zu+54mH5L+h5oGv77ybMu+8muW3suWKoOi9veWbvueJh+S/oeaBr++8jOW8gOWni+WKoOi9veWbvueJh++8mzPvvJrmr4/liqDovb3kuIDlvKDlm77niYfosIPnlKjkuIDmrKHvvJs077ya5omA5pyJ5Zu+54mH6YO95Yqg6L295a6M5oiQXG5jb25zdCBTVEFURV9JTklUSUFMID0gMDtcbmNvbnN0IFNUQVRFX1JFU09VUkNFX0lORk9fUFJFX0xPQUQgPSAxO1xuY29uc3QgU1RBVEVfUkVTT1VSQ0VfSU5GT19SRUFEWSA9IDI7XG5jb25zdCBTVEFURV9SRVNPVVJDRV9MT0FESU5HID0gMztcbmNvbnN0IFNUQVRFX1JFU09VUkNFX1JFQURZID0gNDtcblxuLyoqXG4gKiDlm77niYfliqDovb3nrqHnkIblmahcbiAqIEBwYXJhbSBpbWdKc29uVXJsXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW1nTWFuYWdlcih7aW1nSnNvblVybCwgb25yZWFkeXN0YXRlY2hhbmdlfSkge1xuICAgIHRoaXMuaW1nSnNvblVybCA9IGltZ0pzb25Vcmw7XG4gICAgdGhpcy5kYXRhO1xuICAgIHRoaXMuaW1ncyA9IHt9O1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNUQVRFX0lOSVRJQUw7XG4gICAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBvbnJlYWR5c3RhdGVjaGFuZ2U7XG59XG5JbWdNYW5hZ2VyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNUQVRFX1JFU09VUkNFX0lORk9fUFJFX0xPQUQ7XG4gICAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgJiYgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICBhamF4KHtcbiAgICAgICAgdXJsOiB0aGlzLmltZ0pzb25VcmwsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHNlbGYuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBsZXQgaW1ncyA9IGRhdGEuaW1hZ2VzO1xuICAgICAgICAgICAgc2VsZi5yZWFkeVN0YXRlID0gU1RBVEVfUkVTT1VSQ0VfSU5GT19SRUFEWTtcbiAgICAgICAgICAgIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlICYmIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBpbWdzKSB7XG4gICAgICAgICAgICAgICAgLy/liJvlu7rlm77niYdcbiAgICAgICAgICAgICAgICBzZWxmLmltZ3NbaW1nc1trZXldLm5hbWVdID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgLy/liqDovb3lm77niYdcbiAgICAgICAgICAgICAgICBzZWxmLmltZ3NbaW1nc1trZXldLm5hbWVdLnNyYyA9IGltZ3Nba2V5XS51cmw7XG4gICAgICAgICAgICAgICAgLy/nm5HlkKzliqDovb1cbiAgICAgICAgICAgICAgICBzZWxmLmltZ3NbaW1nc1trZXldLm5hbWVdLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlYWR5U3RhdGUgPSBTVEFURV9SRVNPVVJDRV9MT0FESU5HO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVhZHlzdGF0ZWNoYW5nZSAmJiBzZWxmLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAvL+WKoOi9veWujOaIkFxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmNvdW50ID09IGltZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlYWR5U3RhdGUgPSBTVEFURV9SRVNPVVJDRV9SRUFEWTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlICYmIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1nTWFuYWdlcjsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcbi8v5oqY57q/XG5mdW5jdGlvbiBQb2x5TGluZSh7bGF5ZXIsIGF4aXMsIHdpZHRoLCBjb2xvciwgY2xvc2VQYXRoLCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aCwgY29sb3IsIHNoYWRvd30pO1xuXG5cdHRoaXMuYXhpcyA9IGF4aXM7XG5cdHRoaXMud2lkdGggPSB3aWR0aCB8fCAxO1xufVxuaW5oZXJpdChQb2x5TGluZSwgR3JhcGgsIHtcbiAgICBzdHJva2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZShmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIGxldCBheGlzID0gc2VsZi5heGlzO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhheGlzWzBdWzBdLCBheGlzWzBdWzFdKTtcbiAgICAgICAgICAgIGF4aXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYoa2V5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzZWxmLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHNlbGYud2lkdGg7XG4gICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdzdHJva2UnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5maWxsKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBzZWxmLmF4aXM7XG4gICAgICAgICAgICBjdHgubW92ZVRvKGF4aXNbMF1bMF0sIGF4aXNbMF1bMV0pO1xuICAgICAgICAgICAgYXhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZihrZXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBzZWxmLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHNlbGYud2lkdGg7XG4gICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdmaWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbHlMaW5lOyIsImNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9HcmFwaCcpO1xuY29uc3Qge2luaGVyaXR9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuXG5mdW5jdGlvbiBSZWN0KHtsYXllciwgY3V0UGFyYW1zLCB3aWR0aCwgY29sb3IsIHNoYWRvd30pIHtcbiAgICBHcmFwaC5jYWxsKHRoaXMsIHtsYXllciwgY2xvc2VQYXRoOiBmYWxzZSwgY29sb3IsIHNoYWRvd30pO1xuXG4gICAgdGhpcy5jdXRQYXJhbXMgPSBjdXRQYXJhbXM7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xufVxuXG5pbmhlcml0KFJlY3QsIEdyYXBoLCB7XG4gICAgZHJhdzogZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgY3R4LnJlY3Qoc2VsZi5jdXRQYXJhbXMueCwgc2VsZi5jdXRQYXJhbXMueSwgc2VsZi5jdXRQYXJhbXMudywgc2VsZi5jdXRQYXJhbXMuaCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNlbGYuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBzZWxmLndpZHRoO1xuICAgIH0sXG4gICAgZmlsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuZmlsbChmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIHNlbGYuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ2ZpbGwnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdHJva2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZShmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIHNlbGYuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ3N0cm9rZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0OyIsImNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9HcmFwaCcpO1xuY29uc3Qge2luaGVyaXR9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuXG5mdW5jdGlvbiBUZXh0KHtsYXllciwgcG9zaXRpb24sIGNvbnRlbnQsIGZvbnQsIGNvbG9yLCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aDogdHJ1ZSwgY29sb3IsIHNoYWRvd30pO1xuXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5mb250ID0gZm9udDtcbn1cblxuaW5oZXJpdChUZXh0LCBHcmFwaCwge1xuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXMsIGN0eCA9IHRoaXMuZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmZvbnQgPSBzZWxmLmZvbnQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFRleHQoc2VsZi5jb250ZW50LCBzZWxmLnBvc2l0aW9uWzBdLCBzZWxmLnBvc2l0aW9uWzFdKTtcbiAgICAgICAgdGhpcy5jbG9zZVBhdGggJiYgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZmlsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=