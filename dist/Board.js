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
  },
  //清除所有画板元素，清除后使用refresh不能重新渲染
  clear: function clear() {
    this.layers.forEach(function (value, key) {
      value.clear();
    });
    this.layers = [];
  },
  //刷新页面
  refresh: function refresh() {
    this.layers.forEach(function (value, key) {
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

/***/ "./src/drawer/Scene.js":
/*!*****************************!*\
  !*** ./src/drawer/Scene.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

function Scene(callable, period) {
  this.callable = callable;
  this.period = period;
  this.timer;
} //开始动画


Scene.prototype.active = function () {
  var self = this;
  this.timer = setInterval(function () {
    self.callable();
  }, this.period);
}; //停止动画


Scene.prototype.stop = function () {
  clearInterval(this.timer);
  this.timer = null;
};

module.exports = Scene;

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

var Scene = __webpack_require__(/*! ./Scene */ "./src/drawer/Scene.js");

var Layer = __webpack_require__(/*! ./Layer */ "./src/drawer/Layer.js");

var Circle = __webpack_require__(/*! ./shapes/Circle */ "./src/drawer/shapes/Circle.js");

var PolyLine = __webpack_require__(/*! ./shapes/PolyLine */ "./src/drawer/shapes/PolyLine.js");

var Rect = __webpack_require__(/*! ./shapes/Rect */ "./src/drawer/shapes/Rect.js");

var Img = __webpack_require__(/*! ./shapes/Img */ "./src/drawer/shapes/Img.js");

var Text = __webpack_require__(/*! ./shapes/Text */ "./src/drawer/shapes/Text.js");

function factory() {
  return {
    Board: Board,
    Scene: Scene,
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

function Shadow(blur, color, x, y) {
  this.blur = blur;
  this.color = color;
  this.x = x;
  this.y = y;
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
    ajax = _require.ajax;
/**
 * 图片加载管理器
 * @param imgJsonUrl
 * @constructor
 */


function ImgManager(_ref) {
  var imgJsonUrl = _ref.imgJsonUrl;
  this.imgJsonUrl = imgJsonUrl;
  this.imgs = {};
}

ImgManager.prototype.load = function (callback, loading) {
  var self = this;
  ajax({
    url: this.imgJsonUrl,
    success: function success(data) {
      var imgs = data.images,
          count = 0;

      for (var key in imgs) {
        //创建图片
        self.imgs[imgs[key].name] = new Image(); //加载图片

        self.imgs[imgs[key].name].src = imgs[key].url; //监听加载

        self.imgs[imgs[key].name].onload = function () {
          count++; //加载中的回调，入参：当前对象，当前计数，总数量

          loading && loading(self, count, imgs.length); //加载完成

          if (count == imgs.length) {
            callback && callback(self);
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
      text = _ref.text,
      font = _ref.font,
      color = _ref.color,
      shadow = _ref.shadow;
  Graph.call(this, {
    layer: layer,
    closePath: true,
    color: color,
    shadow: shadow
  });
  this.text = text;
  this.position = position;
  this.font = font;
}

inherit(Text, Graph, {
  fill: function fill() {
    var self = this,
        ctx = this.drawer.ctx;
    ctx.font = self.font;
    ctx.fillStyle = this.color;
    ctx.fillText(self.text, self.position[0], self.position[1]);
    this.closePath && ctx.closePath();
    this.push('fill');
    return this;
  }
});
module.exports = Text;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9Cb2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL0xheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9Ub3BvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9jb21wb25lbnQvQ3V0UGFyYW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvY29tcG9uZW50L1NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0ltZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9JbWdNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL1BvbHlMaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvVGV4dC5qcyJdLCJuYW1lcyI6WyJpbmhlcml0IiwiQ2hpbGQiLCJQYXJlbnQiLCJjaGlsZEZpZWxkIiwiRiIsInByb3RvdHlwZSIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImdldFhociIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsImdldFF1ZXJ5U3RyaW5nIiwiZGF0YSIsInJldCIsImhhc093blByb3BlcnR5Iiwic3Vic3RyIiwibGVuZ3RoIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJ0eXBlIiwidG9VcHBlckNhc2UiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInF1ZXJ5U3RyIiwib3BlbiIsInNlbmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiQm9hcmQiLCJjYW52YXMiLCJnZXRDb250ZXh0IiwiRXJyb3IiLCJkZXN0Q3R4IiwiY2FjaGVDYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImxheWVycyIsIl9oaWRlX2xheWVycyIsImdldENhbnZhcyIsInJlc2l6ZSIsImNsZWFuIiwiY2xlYXJSZWN0IiwiY2xlYXIiLCJmb3JFYWNoIiwicmVmcmVzaCIsImRyYXdJbWFnZSIsInNob3ciLCJoaWRlIiwiZ2V0TGF5ZXIiLCJpZCIsImxheWVyIiwiYXR0cmlidXRlcyIsImdldExheWVycyIsImV4cG9ydEltZyIsImltZ0RhdGEiLCJkaXN0Q3R4IiwidG9EYXRhVVJMIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJMYXllciIsImJvYXJkIiwiZ3JhcGhzIiwiX2hpZGVfZ3JhcGhzIiwicHVzaCIsImNvbnN0cnVjdG9yIiwiZ2V0Qm9hcmQiLCJnZXRHcmFwaCIsImluZGV4IiwiZ2V0R3JhcGhzIiwiaXRlbSIsInJlbW92ZSIsInNwbGljZSIsImluZGV4T2YiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiaW50ZXJ2YWwiLCJERUZBVUxUX0lOVEVSVkFMIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiU2NlbmUiLCJjYWxsYWJsZSIsInBlcmlvZCIsInRpbWVyIiwiYWN0aXZlIiwic2VsZiIsInNldEludGVydmFsIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiLCJDdXRQYXJhbXMiLCJyZXF1aXJlIiwiU2hhZG93IiwiSW1nTWFuYWdlciIsIkNpcmNsZSIsIlBvbHlMaW5lIiwiUmVjdCIsIkltZyIsIlRleHQiLCJmYWN0b3J5IiwiZGVmaW5lIiwieCIsInkiLCJ3IiwiaCIsImJsdXIiLCJjb2xvciIsIkdyYXBoIiwibyIsInIiLCJjbG9zZVBhdGgiLCJzaGFkb3ciLCJjYWxsIiwiZmlsbCIsImRyYXdlciIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsInN0cm9rZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYWRkU2hhZG93Iiwic2hhZG93Qmx1ciIsInNoYWRvd0NvbG9yIiwic2hhZG93T2Zmc2V0WCIsInNoYWRvd09mZnNldFkiLCJEcmF3ZXIiLCJncmFwaCIsImRyYXciLCJleGVjdXRvciIsImJlZ2luUGF0aCIsIm1ldGhvZHMiLCJfaGlkZV9tZXRob2RzIiwicG9wIiwiaW1hZ2UiLCJkc3QiLCJjdXQiLCJpbWdKc29uVXJsIiwiaW1ncyIsImxvYWQiLCJsb2FkaW5nIiwiaW1hZ2VzIiwiY291bnQiLCJuYW1lIiwib25sb2FkIiwiYXhpcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVDYXAiLCJjdXRQYXJhbXMiLCJyZWN0IiwicG9zaXRpb24iLCJ0ZXh0IiwiZm9udCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFD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SixHQUFnQixLQUFLWixLQUFyQjtBQUNBOUUsT0FBRyxDQUFDK0gsUUFBSixDQUFhckUsSUFBSSxDQUFDbUUsSUFBbEIsRUFBd0JuRSxJQUFJLENBQUNrRSxRQUFMLENBQWMsQ0FBZCxDQUF4QixFQUEwQ2xFLElBQUksQ0FBQ2tFLFFBQUwsQ0FBYyxDQUFkLENBQTFDO0FBQ0EsU0FBSzFDLFNBQUwsSUFBa0JsRixHQUFHLENBQUNrRixTQUFKLEVBQWxCO0FBRUEsU0FBS3JELElBQUwsQ0FBVSxNQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFWZ0IsQ0FBZCxDQUFQO0FBYUF6QyxNQUFNLENBQUNDLE9BQVAsR0FBaUJpRixJQUFqQixDIiwiZmlsZSI6IkJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZHJhd2VyL1RvcG9ib2FyZC5qc1wiKTtcbiIsIi8qKlxuICog57un5om/5pa55rOVXG4gKiBAcGFyYW0gQ2hpbGRcbiAqIEBwYXJhbSBQYXJlbnRcbiAqIEBwYXJhbSBjaGlsZEZpZWxkXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQoQ2hpbGQsIFBhcmVudCwgY2hpbGRGaWVsZCkge1xuXHRsZXQgRiA9IGZ1bmN0aW9uKCkge307XG4gICAgRi5wcm90b3R5cGUgPSBQYXJlbnQucHJvdG90eXBlO1xuXHRDaGlsZC5wcm90b3R5cGUgPSBuZXcgRigpO1xuICAgIGZvcihsZXQga2V5IGluIGNoaWxkRmllbGQpIHtcbiAgICBcdGxldCB2YWx1ZSA9IGNoaWxkRmllbGRba2V5XTtcbiAgICAgICAgQ2hpbGQucHJvdG90eXBlW2tleV0gPSB2YWx1ZTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDaGlsZC5wcm90b3R5cGUsIHtcblx0ICAgICdjb25zdHJ1Y3Rvcic6IHtcblx0ICAgICAgICB2YWx1ZTogQ2hpbGQsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiDojrflj5Z4aHLlr7nosaFcbiAqL1xuZnVuY3Rpb24gZ2V0WGhyKCkge1xuICAgIGxldCB4aHI7XG4gICAgaWYoWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYoQWN0aXZlWE9iamVjdCkge1xuICAgICAgICB4aHIgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geGhyO1xufVxuXG4vKipcbiAqIOiOt+WPluafpeivouWtl+espuS4slxuICogQHBhcmFtIGRhdGFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICBpZighIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQgcmV0ID0gJz8nO1xuICAgIGZvcih2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0ICs9IGtleSArICc9JyArIHZhbHVlICsgJyYnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQuc3Vic3RyKDAsIHJldC5sZW5ndGggLSAxKTtcbn1cblxuLyoqXG4gKiBhamF4572R57uc6K+35rGC5pa55rOVXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gbWV0aG9kXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHN1Y2Nlc3NcbiAqIEBwYXJhbSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGFqYXgoe3VybCwgbWV0aG9kID0gJ0dFVCcsIGRhdGEgPSAnJywgc3VjY2VzcywgdHlwZSA9ICdqc29uJ30pIHtcbiAgICBsZXQgeGhyID0gZ2V0WGhyKCk7XG4gICAgbWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ1BPU1QnICYmIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAneC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICBzdWNjZXNzKHR5cGUgPT0gJ2pzb24nPyBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpOiB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcXVlcnlTdHIgPSBnZXRRdWVyeVN0cmluZyhkYXRhKTtcbiAgICBpZihtZXRob2QudG9VcHBlckNhc2UoKSA9PSAnUE9TVCcpIHtcbiAgICAgICAgZGF0YSA9IHF1ZXJ5U3RyO1xuICAgIH1cbiAgICBlbHNlIGlmKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnKSB7XG4gICAgICAgIHVybCArPSBxdWVyeVN0cjtcbiAgICAgICAgZGF0YSA9ICcnO1xuICAgIH1cbiAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZW5kKGRhdGEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbmhlcml0OiBpbmhlcml0LFxuICAgIGFqYXg6IGFqYXhcbn07IiwiLyoqXG4gKiDnlLvmnb9cbiAqIEBwYXJhbSBjYW52YXNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBCb2FyZChjYW52YXMpIHtcbiAgICBpZighIGNhbnZhcyB8fCAhIGNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign5om+5LiN5Yiw5oyH5a6a5YWD57Sg5oiW6ICF5LiN5pSv5oyBQ2FudmFz55qE5rWP6KeI5ZmoJyk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXN0Q3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgY2FjaGVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYWNoZUNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICBjYWNoZUNhbnZhcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgdGhpcy5jdHggPSBjYWNoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8v5Zu+5bGCXG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAvL+makOiXj+eahOWbvuWxglxuICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gW107XG59O1xuQm9hcmQucHJvdG90eXBlID0ge1xuICAgIC8v6I635Y+WY2FudmFz5LiK5LiL5paH5a+56LGhXG4gICAgZ2V0Q29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc3RDdHg7XG4gICAgfSxcbiAgICBnZXRDYW52YXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXN0Q3R4LmNhbnZhcztcbiAgICB9LFxuICAgIC8v6YeN572uY2FudmFz55qE5aSn5bCPXG4gICAgcmVzaXplOiBmdW5jdGlvbih7d2lkdGgsIGhlaWdodH0pIHtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gd2lkdGggfHwgdGhpcy5jdHguY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZGVzdEN0eC5jYW52YXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodDtcbiAgICB9LFxuICAgIC8v5pOm6Zmk55S75p2/77yM5pOm6Zmk5ZCO5Y+v5Lul5L2/55SocmVmcmVzaOmHjeaWsOa4suafk1xuICAgIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3R4LmNhbnZhcy53aWR0aCwgdGhpcy5jdHguY2FudmFzLmhlaWdodCk7XG4gICAgfSxcbiAgICAvL+a4hemZpOaJgOacieeUu+adv+WFg+e0oO+8jOa4hemZpOWQjuS9v+eUqHJlZnJlc2jkuI3og73ph43mlrDmuLLmn5NcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFsdWUuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+WIt+aWsOmhtemdolxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5pi+56S65Zu+54mH5YaF5a65XG4gICAgICAgIHRoaXMuZGVzdEN0eC5kcmF3SW1hZ2UodGhpcy5jdHguY2FudmFzLCAwLCAwLCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoLCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCk7XG4gICAgfSxcbiAgICAvL+aYvuekulxuICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLl9oaWRlX2xheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5faGlkZV9sYXllcnM7XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+makOiXj1xuICAgIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLmxheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+iOt+WPluWbvuWxguWvueixoVxuICAgIGdldExheWVyOiBmdW5jdGlvbihpZCkge1xuICAgICAgICBsZXQgbGF5ZXI7XG4gICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICAgICAgICBpZihsYXllci5hdHRyaWJ1dGVzLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcign6K+357uZ5a6a5q2j56Gu55qE5Zu+5bGC5a+56LGh5LitYXR0cmlidXRlc+WxnuaAp+eahGlk5YC8Jyk7XG4gICAgfSxcbiAgICAvL+iOt+WPluaJgOacieWbvuWxguWvueixoeeahOaVsOe7hFxuICAgIGdldExheWVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVycztcbiAgICB9LFxuICAgIGV4cG9ydEltZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5kaXN0Q3R4LmNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gaW1nRGF0YTtcblxuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCb2FyZC5wcm90b3R5cGUsIHtcbiAgICAnY29uc3RydWN0b3InOiB7XG4gICAgICAgIHZhbHVlOiBCb2FyZCxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcbiIsImZ1bmN0aW9uIExheWVyKGJvYXJkLCBhdHRyaWJ1dGVzKSB7XG5cdC8v5Zu+5bGCaWRcblx0dGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0Ly/nlLvmnb/lr7nosaFcblx0dGhpcy5ib2FyZCA9IGJvYXJkO1xuXHQvL+WbvuWFg+mYn+WIl1xuXHR0aGlzLmdyYXBocyA9IFtdO1xuXHR0aGlzLl9oaWRlX2dyYXBocyA9IFtdO1xuXG5cdGJvYXJkLmdldExheWVycygpLnB1c2godGhpcyk7XG59O1xuTGF5ZXIucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogTGF5ZXIsXG5cdC8v5riF6Zmk5omA5pyJ55S75p2/5YWD57Sg77yM5riF6Zmk5ZCO5L2/55SocmVmcmVzaOS4jeiDvemHjeaWsOa4suafk1xuXHRjbGVhcjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5ncmFwaHMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHR2YWx1ZS5jbGVhcigpO1xuXHRcdH0pO1xuXHRcdHRoaXMuZ3JhcGhzID0gW107XG5cdH0sXG5cdC8v5Yi35pawXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFsdWUucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRpZih0aGlzLl9oaWRlX2dyYXBocy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuZ3JhcGhzID0gdGhpcy5faGlkZV9ncmFwaHM7XG5cdFx0dGhpcy5faGlkZV9ncmFwaHMgPSBbXTtcblx0fSxcblx0aGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuZ3JhcGhzLmxlbmd0aCA9PSAwKSB7cmV0dXJuO31cbiAgICAgICAgdGhpcy5faGlkZV9ncmFwaHMgPSB0aGlzLmdyYXBocztcbiAgICAgICAgdGhpcy5ncmFwaHMgPSBbXTtcblx0fSxcblx0Ly/ojrflj5bnlLvmnb/lr7nosaFcblx0Z2V0Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmJvYXJkO1xuXHR9LFxuICAgIGdldEdyYXBoOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHNbaW5kZXhdO1xuICAgIH0sXG4gICAgZ2V0R3JhcGhzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xuICAgIH0sXG5cdC8v5re75Yqg5Zu+5YWDXG5cdHB1c2g6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR0aGlzLmdyYXBocy5wdXNoKGl0ZW0pO1xuXHR9LCBcblx0Ly/liKDpmaTlm77lhYNcblx0cmVtb3ZlOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dGhpcy5ncmFwaHMuc3BsaWNlKHRoaXMuZ3JhcGhzLmluZGV4T2YoaXRlbSksIDEpO1xuXHR9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXllcjsiLCIvKipcbiAqIGFuaW1hdGlvblxuICovXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvL+aJgOaciemDveS4jeaUr+aMge+8jOeUqHNldFRpbWVvdXTlhbzlrrlcblx0XHRmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgKGNhbGxiYWNrLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwpKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxuXHRcdH07XG59KSgpO1xuXG4vKipcbiAqIGNhbmNlbCByYWZcbiAqL1xudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5vQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcblx0XHRmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xuXHRcdH07XG59KSgpO1xuXG5mdW5jdGlvbiBTY2VuZShjYWxsYWJsZSwgcGVyaW9kKSB7XG5cdHRoaXMuY2FsbGFibGUgPSBjYWxsYWJsZTtcblx0dGhpcy5wZXJpb2QgPSBwZXJpb2Q7XG5cdHRoaXMudGltZXI7XG59XG4vL+W8gOWni+WKqOeUu1xuU2NlbmUucHJvdG90eXBlLmFjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRzZWxmLmNhbGxhYmxlKCk7XG5cdH0sIHRoaXMucGVyaW9kKTtcbn07XG4vL+WBnOatouWKqOeUu1xuU2NlbmUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0dGhpcy50aW1lciA9IG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lOyIsImNvbnN0IEN1dFBhcmFtcyA9IHJlcXVpcmUoJy4vY29tcG9uZW50L0N1dFBhcmFtcycpO1xuY29uc3QgU2hhZG93ID0gcmVxdWlyZSgnLi9jb21wb25lbnQvU2hhZG93Jyk7XG5cbmNvbnN0IEltZ01hbmFnZXIgPSByZXF1aXJlKCcuL3NoYXBlcy9JbWdNYW5hZ2VyJyk7XG5cbmNvbnN0IEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZC5qcycpO1xuY29uc3QgU2NlbmUgPSByZXF1aXJlKCcuL1NjZW5lJyk7XG5jb25zdCBMYXllciA9IHJlcXVpcmUoJy4vTGF5ZXInKTtcbmNvbnN0IENpcmNsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL0NpcmNsZScpO1xuY29uc3QgUG9seUxpbmUgPSByZXF1aXJlKCcuL3NoYXBlcy9Qb2x5TGluZScpO1xuY29uc3QgUmVjdCA9IHJlcXVpcmUoJy4vc2hhcGVzL1JlY3QnKTtcbmNvbnN0IEltZyA9IHJlcXVpcmUoJy4vc2hhcGVzL0ltZycpO1xuY29uc3QgVGV4dCA9IHJlcXVpcmUoJy4vc2hhcGVzL1RleHQnKTtcblxuZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBCb2FyZCwgU2NlbmUsIExheWVyLCBDaXJjbGUsIFBvbHlMaW5lLCBSZWN0LCBJbWcsIFRleHQsXG4gICAgICAgIEltZ01hbmFnZXIsXG4gICAgICAgIEN1dFBhcmFtcywgU2hhZG93XG4gICAgfTtcbn1cbmlmKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCdUb3BvYm9hcmQnLCBmYWN0b3J5KTtcbn1cbmlmKHdpbmRvdykge1xuICAgIHdpbmRvd1snVG9wb2JvYXJkJ10gPSBmYWN0b3J5KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyIsImZ1bmN0aW9uIEN1dFBhcmFtcyh4LCB5LCB3LCBoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudyA9IHc7XG4gICAgdGhpcy5oID0gaDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXRQYXJhbXM7IiwiZnVuY3Rpb24gU2hhZG93KGJsdXIsIGNvbG9yLCB4LCB5KSB7XG4gICAgdGhpcy5ibHVyID0gYmx1cjtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRvdzsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcblxuLy/lnIblvaJcbmZ1bmN0aW9uIENpcmNsZSh7bGF5ZXIsIG8sIHIsIHdpZHRoLCBjb2xvciwgY2xvc2VQYXRoLCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aCwgY29sb3IsIHNoYWRvd30pO1xuXG5cdHRoaXMubyA9IG87XG5cdHRoaXMuciA9IHI7XG5cdHRoaXMud2lkdGggPSB3aWR0aDtcbn1cbmluaGVyaXQoQ2lyY2xlLCBHcmFwaCwge1xuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLmZpbGwoZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgICAgICBjdHguYXJjKHNlbGYub1swXSwgc2VsZi5vWzFdLCBzZWxmLnIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBzZWxmLmNvbG9yO1xuICAgICAgICAgICAgc2VsZi5jbG9zZVBhdGggJiYgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ2ZpbGwnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdHJva2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZShmdW5jdGlvbihjdHgpIHtcblx0XHRcdGN0eC5hcmMoc2VsZi5vWzBdLCBzZWxmLm9bMV0sIHNlbGYuciwgMCwgTWF0aC5QSSoyLCB0cnVlKTtcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IHNlbGYuY29sb3I7XG5cdFx0XHRjdHgubGluZVdpZHRoID0gc2VsZi53aWR0aDtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdzdHJva2UnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2lyY2xlOyIsIlxuZnVuY3Rpb24gYWRkU2hhZG93KGN0eCwgc2hhZG93KSB7XG4gICAgY3R4LnNoYWRvd0JsdXIgPSBzaGFkb3cuYmx1cjtcbiAgICBjdHguc2hhZG93Q29sb3IgPSBzaGFkb3cuY29sb3I7XG4gICAgY3R4LnNoYWRvd09mZnNldFggPSBzaGFkb3cueDtcbiAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHNoYWRvdy55O1xufVxuLy/nlLvlrrZcbmZ1bmN0aW9uIERyYXdlcihncmFwaCwgY3R4KSB7XG5cdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0dGhpcy5jdHggPSBjdHg7XG59XG5EcmF3ZXIucHJvdG90eXBlID0ge1xuICAgIGNsb3NlUGF0aDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0sXG5cdGRyYXc6IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFwaC5jb2xvcjtcblx0XHRhZGRTaGFkb3codGhpcy5jdHgsIHRoaXMuZ3JhcGguc2hhZG93KTtcbiAgICAgICAgZXhlY3V0b3IgJiYgZXhlY3V0b3IodGhpcy5jdHgpO1xuXHR9LCBcblx0ZmlsbDogZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0XHR0aGlzLmRyYXcoZXhlY3V0b3IpO1xuXHRcdHRoaXMuY3R4LmZpbGwoKTtcblx0fSwgXG5cdHN0cm9rZTogZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0XHR0aGlzLmRyYXcoZXhlY3V0b3IpO1xuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERyYXdlcjsiLCJjb25zdCBEcmF3ZXIgPSByZXF1aXJlKCcuL0RyYXdlcicpO1xuY29uc3QgU2hhZG93ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50L1NoYWRvdycpO1xuXG5mdW5jdGlvbiBHcmFwaCh7bGF5ZXIsIGNsb3NlUGF0aCwgY29sb3IsIHNoYWRvd30pIHtcblx0dGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuZHJhd2VyID0gbmV3IERyYXdlcih0aGlzLCB0aGlzLmxheWVyLmdldEJvYXJkKCkuZ2V0Q29udGV4dCgpKTtcblx0dGhpcy5tZXRob2RzID0gW107XG5cdHRoaXMuX2hpZGVfbWV0aG9kcyA9IFtdO1xuXHR0aGlzLmNsb3NlUGF0aCA9IGNsb3NlUGF0aDtcblxuXHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdHRoaXMuc2hhZG93ID0gc2hhZG93IHx8IG5ldyBTaGFkb3coMCwgJyMwMDAnLCAwLCAwKTtcblxuICAgIHRoaXMubGF5ZXIucHVzaCh0aGlzKTtcbn1cbi8v5riF6Zmk5omA5pyJ55S75p2/5YWD57Sg77yM5riF6Zmk5ZCO5L2/55SocmVmcmVzaOS4jeiDvemHjeaWsOa4suafk1xuR3JhcGgucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMubWV0aG9kcyA9IFtdO1xufTtcbi8v6LCD55So5b2T5YmN5YWD57Sg55qE6K6w5b2V5pa55rOV77yM6YeN5paw57uY5Yi25Zu+5b2iXG5HcmFwaC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHRoaXMubWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0c2VsZlt2YWx1ZV0oKTtcblx0XHRzZWxmLm1ldGhvZHMucG9wKCk7XG5cdH0pO1xufTtcbkdyYXBoLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XG5cdGlmKHRoaXMuX2hpZGVfbWV0aG9kcy5sZW5ndGggPT0gMCkge3JldHVybjt9XG5cdHRoaXMuX2hpZGVfbWV0aG9kcyA9IHRoaXMubWV0aG9kcztcblx0dGhpcy5tZXRob2RzID0gW107XG59O1xuR3JhcGgucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcblx0aWYodGhpcy5tZXRob2RzLmxlbmd0aCA9PSAwKSB7cmV0dXJuO31cblx0dGhpcy5tZXRob2RzID0gdGhpcy5faGlkZV9tZXRob2RzO1xuXHR0aGlzLl9oaWRlX21ldGhvZHMgPSBbXTtcbn07XG5HcmFwaC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHR0aGlzLm1ldGhvZHMucHVzaChtZXRob2QpO1xufTtcbkdyYXBoLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxheWVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGltYWdlSnNvblxuICogQHBhcmFtIHNyYyBAdHlwZSBDdXRQYXJhbXNcbiAqIEBwYXJhbSBkc3QgQHR5cGUgQ3V0UGFyYW1zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW1nKHtsYXllciwgaW1hZ2UsIHNyYywgZHN0LCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aDogZmFsc2UsIHNoYWRvd30pO1xuXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIHRoaXMuZHN0ID0gZHN0O1xufVxuaW5oZXJpdChJbWcsIEdyYXBoLCB7XG4gICAgLy/mt7vliqDlm77niYdcbiAgICBkcmF3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5kc3QueCwgdGhpcy5kc3QueSwgdGhpcy5kc3QudywgdGhpcy5kc3QuaCk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdkcmF3Jyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy/oo4Hliarlm77niYdcbiAgICBjdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuc3JjLngsIHRoaXMuc3JjLnksIHRoaXMuc3JjLncsIHRoaXMuc3JjLmgsIHRoaXMuZHN0LngsIHRoaXMuZHN0LnksIHRoaXMuZHN0LncsIHRoaXMuZHN0LmgpO1xuXG4gICAgICAgIHRoaXMucHVzaCgnY3V0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltZzsiLCJjb25zdCB7YWpheH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbi8qKlxuICog5Zu+54mH5Yqg6L29566h55CG5ZmoXG4gKiBAcGFyYW0gaW1nSnNvblVybFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEltZ01hbmFnZXIoe2ltZ0pzb25Vcmx9KSB7XG4gICAgdGhpcy5pbWdKc29uVXJsID0gaW1nSnNvblVybDtcbiAgICB0aGlzLmltZ3MgPSB7fTtcbn1cbkltZ01hbmFnZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihjYWxsYmFjaywgbG9hZGluZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBhamF4KHtcbiAgICAgICAgdXJsOiB0aGlzLmltZ0pzb25VcmwsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBpbWdzID0gZGF0YS5pbWFnZXMsXG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaW1ncykge1xuICAgICAgICAgICAgICAgIC8v5Yib5bu65Zu+54mHXG4gICAgICAgICAgICAgICAgc2VsZi5pbWdzW2ltZ3Nba2V5XS5uYW1lXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIC8v5Yqg6L295Zu+54mHXG4gICAgICAgICAgICAgICAgc2VsZi5pbWdzW2ltZ3Nba2V5XS5uYW1lXS5zcmMgPSBpbWdzW2tleV0udXJsO1xuICAgICAgICAgICAgICAgIC8v55uR5ZCs5Yqg6L29XG4gICAgICAgICAgICAgICAgc2VsZi5pbWdzW2ltZ3Nba2V5XS5uYW1lXS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAgICAgICAgIC8v5Yqg6L295Lit55qE5Zue6LCD77yM5YWl5Y+C77ya5b2T5YmN5a+56LGh77yM5b2T5YmN6K6h5pWw77yM5oC75pWw6YePXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgJiYgbG9hZGluZyhzZWxmLCBjb3VudCwgaW1ncy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAvL+WKoOi9veWujOaIkFxuICAgICAgICAgICAgICAgICAgICBpZihjb3VudCA9PSBpbWdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1nTWFuYWdlcjsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcbi8v5oqY57q/XG5mdW5jdGlvbiBQb2x5TGluZSh7bGF5ZXIsIGF4aXMsIHdpZHRoLCBjb2xvciwgY2xvc2VQYXRoLCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aCwgY29sb3IsIHNoYWRvd30pO1xuXG5cdHRoaXMuYXhpcyA9IGF4aXM7XG5cdHRoaXMud2lkdGggPSB3aWR0aCB8fCAxO1xufVxuaW5oZXJpdChQb2x5TGluZSwgR3JhcGgsIHtcbiAgICBzdHJva2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZShmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIGxldCBheGlzID0gc2VsZi5heGlzO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhheGlzWzBdWzBdLCBheGlzWzBdWzFdKTtcbiAgICAgICAgICAgIGF4aXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYoa2V5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzZWxmLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHNlbGYud2lkdGg7XG4gICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdzdHJva2UnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5maWxsKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBzZWxmLmF4aXM7XG4gICAgICAgICAgICBjdHgubW92ZVRvKGF4aXNbMF1bMF0sIGF4aXNbMF1bMV0pO1xuICAgICAgICAgICAgYXhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZihrZXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBzZWxmLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHNlbGYud2lkdGg7XG4gICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdmaWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbHlMaW5lOyIsImNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9HcmFwaCcpO1xuY29uc3Qge2luaGVyaXR9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuXG5mdW5jdGlvbiBSZWN0KHtsYXllciwgY3V0UGFyYW1zLCB3aWR0aCwgY29sb3IsIHNoYWRvd30pIHtcbiAgICBHcmFwaC5jYWxsKHRoaXMsIHtsYXllciwgY2xvc2VQYXRoOiBmYWxzZSwgY29sb3IsIHNoYWRvd30pO1xuXG4gICAgdGhpcy5jdXRQYXJhbXMgPSBjdXRQYXJhbXM7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xufVxuXG5pbmhlcml0KFJlY3QsIEdyYXBoLCB7XG4gICAgZHJhdzogZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgY3R4LnJlY3Qoc2VsZi5jdXRQYXJhbXMueCwgc2VsZi5jdXRQYXJhbXMueSwgc2VsZi5jdXRQYXJhbXMudywgc2VsZi5jdXRQYXJhbXMuaCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNlbGYuY29sb3I7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBzZWxmLndpZHRoO1xuICAgIH0sXG4gICAgZmlsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuZmlsbChmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIHNlbGYuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ2ZpbGwnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzdHJva2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZShmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIHNlbGYuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ3N0cm9rZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0OyIsImNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9HcmFwaCcpO1xuY29uc3Qge2luaGVyaXR9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuXG5mdW5jdGlvbiBUZXh0KHtsYXllciwgcG9zaXRpb24sIHRleHQsIGZvbnQsIGNvbG9yLCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aDogdHJ1ZSwgY29sb3IsIHNoYWRvd30pO1xuXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5mb250ID0gZm9udDtcbn1cblxuaW5oZXJpdChUZXh0LCBHcmFwaCwge1xuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXMsIGN0eCA9IHRoaXMuZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmZvbnQgPSBzZWxmLmZvbnQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFRleHQoc2VsZi50ZXh0LCBzZWxmLnBvc2l0aW9uWzBdLCBzZWxmLnBvc2l0aW9uWzFdKTtcbiAgICAgICAgdGhpcy5jbG9zZVBhdGggJiYgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZmlsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0OyJdLCJzb3VyY2VSb290IjoiIn0=