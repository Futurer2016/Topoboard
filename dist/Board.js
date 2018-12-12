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

/***/ "./src/base/inherit.js":
/*!*****************************!*\
  !*** ./src/base/inherit.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function inherit(Child, Parent, childField) {
  var F = function F() {};

  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;

  for (var key in childField) {
    var value = childField[key];
    Child.prototype[key] = value;
  }
}

;
module.exports = inherit;

/***/ }),

/***/ "./src/drawer/Board.js":
/*!*****************************!*\
  !*** ./src/drawer/Board.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var arr = [],
    //画板
Board = function Board(canvas) {
  if (!canvas || !canvas.getContext) {
    throw new Error('找不到指定元素或者不支持Canvas的浏览器');
  }

  this.ctx = canvas.getContext('2d'); //图层

  this.layers = []; //隐藏的图层

  this._hide_layers = [];
};

Board.prototype = {
  constructor: Board,
  //获取canvas上下文对象
  getContext: function getContext() {
    return this.ctx;
  },
  //重置canvas的大小
  resize: function resize(_ref) {
    var width = _ref.width,
        height = _ref.height;
    this.ctx.canvas.width = width || this.ctx.canvas.width;
    this.ctx.canvas.height = height || this.ctx.canvas.height;
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
    arr.forEach.call(this.layers, function (value, key) {
      value.refresh();
    });
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
  },
  getLayers: function getLayers() {
    return this.layers;
  }
};
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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var Board = __webpack_require__(/*! ./Board.js */ "./src/drawer/Board.js");

var Scene = __webpack_require__(/*! ./Scene */ "./src/drawer/Scene.js");

var Layer = __webpack_require__(/*! ./Layer */ "./src/drawer/Layer.js");

var Circle = __webpack_require__(/*! ./shapes/Circle */ "./src/drawer/shapes/Circle.js");

var PolyLine = __webpack_require__(/*! ./shapes/PolyLine */ "./src/drawer/shapes/PolyLine.js");

var Rect = __webpack_require__(/*! ./shapes/Rect */ "./src/drawer/shapes/Rect.js");

function factory() {
  return {
    Board: Board,
    Scene: Scene,
    Layer: Layer,
    Circle: Circle,
    PolyLine: PolyLine,
    Rect: Rect
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

/***/ "./src/drawer/shapes/Circle.js":
/*!*************************************!*\
  !*** ./src/drawer/shapes/Circle.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Graph = __webpack_require__(/*! ./Graph */ "./src/drawer/shapes/Graph.js");

var inherit = __webpack_require__(/*! ../../base/inherit */ "./src/base/inherit.js"); //圆形


function Circle(_ref) {
  var layer = _ref.layer,
      o = _ref.o,
      r = _ref.r,
      width = _ref.width,
      color = _ref.color,
      closePath = _ref.closePath;
  Graph.call(this, layer, closePath);
  this.o = o;
  this.r = r;
  this.width = width;
  this.color = color;
}

inherit(Circle, Graph, {
  fill: function fill() {
    var self = this;
    this.drawer.fill(function (ctx) {
      ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI * 2, true);
    }, function (ctx) {
      ctx.fillStyle = self.color;
    });
    this.push('fill');
    return this;
  },
  stroke: function stroke() {
    var self = this;
    this.drawer.stroke(function (ctx) {
      ctx.arc(self.o[0], self.o[1], self.r, 0, Math.PI * 2, true);
      self.closePath && ctx.closePath();
    }, function (ctx) {
      ctx.strokeStyle = self.color;
      ctx.lineWidth = self.width;
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

//画家
function Drawer(ctx) {
  this.ctx = ctx;
}

Drawer.prototype = {
  draw: function draw(executor, styler) {
    this.ctx.beginPath();
    styler && styler(this.ctx);
    executor && executor(this.ctx);
  },
  fill: function fill(executor, styler) {
    this.draw(executor, styler);
    this.ctx.fill();
  },
  stroke: function stroke(executor, styler) {
    this.draw(executor, styler);
    this.ctx.stroke();
  },
  closePath: function closePath() {
    this.ctx.closePath();
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

function Graph(layer, closePath) {
  this.layer = layer;
  this.drawer = layer ? new Drawer(this.layer.getBoard().getContext()) : this.drawer;
  this.methods = [];
  this._hide_methods = [];
  this.closePath = closePath;
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

/***/ "./src/drawer/shapes/PolyLine.js":
/*!***************************************!*\
  !*** ./src/drawer/shapes/PolyLine.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Graph = __webpack_require__(/*! ./Graph */ "./src/drawer/shapes/Graph.js");

var inherit = __webpack_require__(/*! ../../base/inherit */ "./src/base/inherit.js"); //折线


function PolyLine(_ref) {
  var layer = _ref.layer,
      axis = _ref.axis,
      width = _ref.width,
      color = _ref.color,
      closePath = _ref.closePath;
  Graph.call(this, layer, closePath);
  this.axis = axis;
  this.width = width || 1;
  this.color = color;
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
      self.closePath && ctx.closePath();
    }, function (ctx) {
      ctx.strokeStyle = self.color;
      ctx.lineWidth = self.width;
      ctx.lineCap = "round";
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
      self.closePath && ctx.closePath();
    }, function (ctx) {
      ctx.fillStyle = self.color;
      ctx.lineWidth = self.width;
      ctx.lineCap = "round";
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

var inherit = __webpack_require__(/*! ../../base/inherit */ "./src/base/inherit.js");

function Rect(_ref) {
  var layer = _ref.layer,
      lt = _ref.lt,
      rb = _ref.rb,
      width = _ref.width,
      color = _ref.color;
  Graph.call(this, layer, false);
  this.lt = lt;
  this.rb = rb;
  this.width = width;
  this.color = color;
}

inherit(Rect, Graph, {
  fill: function fill() {
    var self = this;
    this.drawer.fill(function (ctx) {
      ctx.fillRect(self.lt[0], self.lt[1], self.rb[0], self.rb[1]);
    }, function (ctx) {
      ctx.fillStyle = self.color;
      ctx.lineWidth = self.width;
    });
    this.push('fill');
    return this;
  },
  stroke: function stroke() {
    var self = this;
    this.drawer.stroke(function (ctx) {
      ctx.strokeRect(self.lt[0], self.lt[1], self.rb[0], self.rb[1]);
    }, function (ctx) {
      ctx.strokeStyle = self.color;
      ctx.lineWidth = self.width;
    });
    this.push('stroke');
    return this;
  }
});
module.exports = Rect;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvaW5oZXJpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL0JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9TY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL1RvcG9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL1BvbHlMaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL1JlY3QuanMiXSwibmFtZXMiOlsiaW5oZXJpdCIsIkNoaWxkIiwiUGFyZW50IiwiY2hpbGRGaWVsZCIsIkYiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsImtleSIsInZhbHVlIiwibW9kdWxlIiwiZXhwb3J0cyIsImFyciIsIkJvYXJkIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsIkVycm9yIiwiY3R4IiwibGF5ZXJzIiwiX2hpZGVfbGF5ZXJzIiwicmVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjbGVhbiIsImNsZWFyUmVjdCIsImNsZWFyIiwiZm9yRWFjaCIsInJlZnJlc2giLCJjYWxsIiwic2hvdyIsImxlbmd0aCIsImhpZGUiLCJnZXRMYXllciIsImlkIiwibGF5ZXIiLCJhdHRyaWJ1dGVzIiwiZ2V0TGF5ZXJzIiwiTGF5ZXIiLCJib2FyZCIsImdyYXBocyIsIl9oaWRlX2dyYXBocyIsInB1c2giLCJnZXRCb2FyZCIsImdldEdyYXBoIiwiaW5kZXgiLCJnZXRHcmFwaHMiLCJpdGVtIiwicmVtb3ZlIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpbmRvdyIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJpbnRlcnZhbCIsIkRFRkFVTFRfSU5URVJWQUwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJTY2VuZSIsImNhbGxhYmxlIiwicGVyaW9kIiwidGltZXIiLCJhY3RpdmUiLCJzZWxmIiwic2V0SW50ZXJ2YWwiLCJzdG9wIiwiY2xlYXJJbnRlcnZhbCIsInJlcXVpcmUiLCJDaXJjbGUiLCJQb2x5TGluZSIsIlJlY3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwiR3JhcGgiLCJvIiwiciIsImNvbG9yIiwiY2xvc2VQYXRoIiwiZmlsbCIsImRyYXdlciIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsInN0cm9rZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiRHJhd2VyIiwiZHJhdyIsImV4ZWN1dG9yIiwic3R5bGVyIiwiYmVnaW5QYXRoIiwibWV0aG9kcyIsIl9oaWRlX21ldGhvZHMiLCJwb3AiLCJtZXRob2QiLCJheGlzIiwibW92ZVRvIiwibGluZVRvIiwibGluZUNhcCIsImx0IiwicmIiLCJmaWxsUmVjdCIsInN0cm9rZVJlY3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7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QnZCLElBQUksQ0FBQ2hELEtBQXJCO0FBQ0gsS0FMRDtBQU9BLFNBQUtvQixJQUFMLENBQVUsUUFBVjtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBeEJnQixDQUFkLENBQVA7QUEyQkEvQixNQUFNLENBQUNDLE9BQVAsR0FBaUJpRSxJQUFqQixDIiwiZmlsZSI6IkJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZHJhd2VyL1RvcG9ib2FyZC5qc1wiKTtcbiIsImZ1bmN0aW9uIGluaGVyaXQoQ2hpbGQsIFBhcmVudCwgY2hpbGRGaWVsZCkge1xuXHR2YXIgRiA9IGZ1bmN0aW9uKCkge307XG4gICAgRi5wcm90b3R5cGUgPSBQYXJlbnQucHJvdG90eXBlO1xuXHRDaGlsZC5wcm90b3R5cGUgPSBuZXcgRigpO1xuICAgIENoaWxkLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENoaWxkO1xuICAgIGZvcihsZXQga2V5IGluIGNoaWxkRmllbGQpIHtcbiAgICBcdGxldCB2YWx1ZSA9IGNoaWxkRmllbGRba2V5XTtcbiAgICAgICAgQ2hpbGQucHJvdG90eXBlW2tleV0gPSB2YWx1ZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmhlcml0OyIsInZhciBhcnIgPSBbXSxcbi8v55S75p2/XG5Cb2FyZCA9IGZ1bmN0aW9uKGNhbnZhcykge1xuICAgIGlmKCEgY2FudmFzIHx8ICEgY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfmib7kuI3liLDmjIflrprlhYPntKDmiJbogIXkuI3mlK/mjIFDYW52YXPnmoTmtY/op4jlmagnKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIC8v5Zu+5bGCXG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAvL+makOiXj+eahOWbvuWxglxuICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gW107XG59O1xuQm9hcmQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBCb2FyZCxcbiAgICAvL+iOt+WPlmNhbnZhc+S4iuS4i+aWh+WvueixoVxuICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdHg7XG4gICAgfSxcbiAgICAvL+mHjee9rmNhbnZhc+eahOWkp+Wwj1xuICAgIHJlc2l6ZTogZnVuY3Rpb24oe3dpZHRoLCBoZWlnaHR9KSB7XG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoIHx8IHRoaXMuY3R4LmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0O1xuICAgIH0sXG4gICAgLy/mk6bpmaTnlLvmnb/vvIzmk6bpmaTlkI7lj6/ku6Xkvb/nlKhyZWZyZXNo6YeN5paw5riy5p+TXG4gICAgY2xlYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdHguY2FudmFzLndpZHRoLCB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICB9LFxuICAgIC8v5riF6Zmk5omA5pyJ55S75p2/5YWD57Sg77yM5riF6Zmk5ZCO5L2/55SocmVmcmVzaOS4jeiDvemHjeaWsOa4suafk1xuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YWx1ZS5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICB9LFxuICAgIC8v5Yi35paw6aG16Z2iXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGFyci5mb3JFYWNoLmNhbGwodGhpcy5sYXllcnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvL+aYvuekulxuICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLl9oaWRlX2xheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5faGlkZV9sYXllcnM7XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+makOiXj1xuICAgIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLmxheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+iOt+WPluWbvuWxguWvueixoVxuICAgIGdldExheWVyOiBmdW5jdGlvbihpZCkge1xuICAgICAgICB2YXIgbGF5ZXI7XG4gICAgICAgIGZvcih2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgICAgICBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICAgICAgICBpZihsYXllci5hdHRyaWJ1dGVzLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRMYXllcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcbiIsImZ1bmN0aW9uIExheWVyKGJvYXJkLCBhdHRyaWJ1dGVzKSB7XG5cdC8v5Zu+5bGCaWRcblx0dGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0Ly/nlLvmnb/lr7nosaFcblx0dGhpcy5ib2FyZCA9IGJvYXJkO1xuXHQvL+WbvuWFg+mYn+WIl1xuXHR0aGlzLmdyYXBocyA9IFtdO1xuXHR0aGlzLl9oaWRlX2dyYXBocyA9IFtdO1xuXG5cdGJvYXJkLmdldExheWVycygpLnB1c2godGhpcyk7XG59O1xuTGF5ZXIucHJvdG90eXBlID0ge1xuXHRjb25zdHJ1Y3RvcjogTGF5ZXIsXG5cdC8v5riF6Zmk5omA5pyJ55S75p2/5YWD57Sg77yM5riF6Zmk5ZCO5L2/55SocmVmcmVzaOS4jeiDvemHjeaWsOa4suafk1xuXHRjbGVhcjogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5ncmFwaHMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHR2YWx1ZS5jbGVhcigpO1xuXHRcdH0pO1xuXHRcdHRoaXMuZ3JhcGhzID0gW107XG5cdH0sXG5cdC8v5Yi35pawXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFsdWUucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRpZih0aGlzLl9oaWRlX2dyYXBocy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuZ3JhcGhzID0gdGhpcy5faGlkZV9ncmFwaHM7XG5cdFx0dGhpcy5faGlkZV9ncmFwaHMgPSBbXTtcblx0fSxcblx0aGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuZ3JhcGhzLmxlbmd0aCA9PSAwKSB7cmV0dXJuO31cbiAgICAgICAgdGhpcy5faGlkZV9ncmFwaHMgPSB0aGlzLmdyYXBocztcbiAgICAgICAgdGhpcy5ncmFwaHMgPSBbXTtcblx0fSxcblx0Ly/ojrflj5bnlLvmnb/lr7nosaFcblx0Z2V0Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmJvYXJkO1xuXHR9LFxuICAgIGdldEdyYXBoOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHNbaW5kZXhdO1xuICAgIH0sXG4gICAgZ2V0R3JhcGhzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xuICAgIH0sXG5cdC8v5re75Yqg5Zu+5YWDXG5cdHB1c2g6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR0aGlzLmdyYXBocy5wdXNoKGl0ZW0pO1xuXHR9LCBcblx0Ly/liKDpmaTlm77lhYNcblx0cmVtb3ZlOiBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dGhpcy5ncmFwaHMuc3BsaWNlKHRoaXMuZ3JhcGhzLmluZGV4T2YoaXRlbSksIDEpO1xuXHR9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXllcjsiLCIvKipcbiAqIGFuaW1hdGlvblxuICovXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvL+aJgOaciemDveS4jeaUr+aMge+8jOeUqHNldFRpbWVvdXTlhbzlrrlcblx0XHRmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgKGNhbGxiYWNrLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwpKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxuXHRcdH07XG59KSgpO1xuXG4vKipcbiAqIGNhbmNlbCByYWZcbiAqL1xudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5vQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcblx0XHRmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xuXHRcdH07XG59KSgpO1xuXG5mdW5jdGlvbiBTY2VuZShjYWxsYWJsZSwgcGVyaW9kKSB7XG5cdHRoaXMuY2FsbGFibGUgPSBjYWxsYWJsZTtcblx0dGhpcy5wZXJpb2QgPSBwZXJpb2Q7XG5cdHRoaXMudGltZXI7XG59XG4vL+W8gOWni+WKqOeUu1xuU2NlbmUucHJvdG90eXBlLmFjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRzZWxmLmNhbGxhYmxlKCk7XG5cdH0sIHRoaXMucGVyaW9kKTtcbn07XG4vL+WBnOatouWKqOeUu1xuU2NlbmUucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0dGhpcy50aW1lciA9IG51bGw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lOyIsImNvbnN0IEJvYXJkID0gcmVxdWlyZSgnLi9Cb2FyZC5qcycpO1xuY29uc3QgU2NlbmUgPSByZXF1aXJlKCcuL1NjZW5lJyk7XG5jb25zdCBMYXllciA9IHJlcXVpcmUoJy4vTGF5ZXInKTtcbmNvbnN0IENpcmNsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL0NpcmNsZScpO1xuY29uc3QgUG9seUxpbmUgPSByZXF1aXJlKCcuL3NoYXBlcy9Qb2x5TGluZScpO1xuY29uc3QgUmVjdCA9IHJlcXVpcmUoJy4vc2hhcGVzL1JlY3QnKTtcblxuZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBCb2FyZCwgU2NlbmUsIExheWVyLCBDaXJjbGUsIFBvbHlMaW5lLCBSZWN0XG4gICAgfTtcbn1cbmlmKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKCdUb3BvYm9hcmQnLCBmYWN0b3J5KTtcbn1cbmlmKHdpbmRvdykge1xuICAgIHdpbmRvd1snVG9wb2JvYXJkJ10gPSBmYWN0b3J5KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyIsImNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9HcmFwaCcpO1xuY29uc3QgaW5oZXJpdCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvaW5oZXJpdCcpO1xuXG4vL+WchuW9olxuZnVuY3Rpb24gQ2lyY2xlKHtsYXllciwgbywgciwgd2lkdGgsIGNvbG9yLCBjbG9zZVBhdGh9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCBsYXllciwgY2xvc2VQYXRoKTtcblxuXHR0aGlzLm8gPSBvO1xuXHR0aGlzLnIgPSByO1xuXHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdHRoaXMuY29sb3IgPSBjb2xvcjtcbn1cbmluaGVyaXQoQ2lyY2xlLCBHcmFwaCwge1xuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLmZpbGwoZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgICAgICBjdHguYXJjKHNlbGYub1swXSwgc2VsZi5vWzFdLCBzZWxmLnIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc2VsZi5jb2xvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdmaWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc3Ryb2tlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5zdHJva2UoZnVuY3Rpb24oY3R4KSB7XG5cdFx0XHRjdHguYXJjKHNlbGYub1swXSwgc2VsZi5vWzFdLCBzZWxmLnIsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7XG5cdFx0XHRzZWxmLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGN0eCkge1xuXHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gc2VsZi5jb2xvcjtcblx0XHRcdGN0eC5saW5lV2lkdGggPSBzZWxmLndpZHRoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ3N0cm9rZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaXJjbGU7IiwiLy/nlLvlrrZcbmZ1bmN0aW9uIERyYXdlcihjdHgpIHtcblx0dGhpcy5jdHggPSBjdHg7XG59XG5EcmF3ZXIucHJvdG90eXBlID0ge1xuXHRkcmF3OiBmdW5jdGlvbihleGVjdXRvciwgc3R5bGVyKSB7XG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHN0eWxlciAmJiBzdHlsZXIodGhpcy5jdHgpO1xuICAgICAgICBleGVjdXRvciAmJiBleGVjdXRvcih0aGlzLmN0eCk7XG5cdH0sIFxuXHRmaWxsOiBmdW5jdGlvbihleGVjdXRvciwgc3R5bGVyKSB7XG5cdFx0dGhpcy5kcmF3KGV4ZWN1dG9yLCBzdHlsZXIpO1xuXHRcdHRoaXMuY3R4LmZpbGwoKTtcblx0fSwgXG5cdHN0cm9rZTogZnVuY3Rpb24oZXhlY3V0b3IsIHN0eWxlcikge1xuXHRcdHRoaXMuZHJhdyhleGVjdXRvciwgc3R5bGVyKTtcblx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblx0fSxcblx0Y2xvc2VQYXRoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRHJhd2VyOyIsImNvbnN0IERyYXdlciA9IHJlcXVpcmUoJy4vRHJhd2VyJyk7XG5cbmZ1bmN0aW9uIEdyYXBoKGxheWVyLCBjbG9zZVBhdGgpIHtcblx0dGhpcy5sYXllciA9IGxheWVyO1xuICAgIHRoaXMuZHJhd2VyID0gbGF5ZXI/IG5ldyBEcmF3ZXIodGhpcy5sYXllci5nZXRCb2FyZCgpLmdldENvbnRleHQoKSk6IHRoaXMuZHJhd2VyO1xuXHR0aGlzLm1ldGhvZHMgPSBbXTtcblx0dGhpcy5faGlkZV9tZXRob2RzID0gW107XG5cdHRoaXMuY2xvc2VQYXRoID0gY2xvc2VQYXRoO1xuXG4gICAgdGhpcy5sYXllci5wdXNoKHRoaXMpO1xufVxuLy/muIXpmaTmiYDmnInnlLvmnb/lhYPntKDvvIzmuIXpmaTlkI7kvb/nlKhyZWZyZXNo5LiN6IO96YeN5paw5riy5p+TXG5HcmFwaC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5tZXRob2RzID0gW107XG59O1xuLy/osIPnlKjlvZPliY3lhYPntKDnmoTorrDlvZXmlrnms5XvvIzph43mlrDnu5jliLblm77lvaJcbkdyYXBoLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblx0dGhpcy5tZXRob2RzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcblx0XHRzZWxmW3ZhbHVlXSgpO1xuXHRcdHNlbGYubWV0aG9kcy5wb3AoKTtcblx0fSk7XG59O1xuR3JhcGgucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcblx0aWYodGhpcy5faGlkZV9tZXRob2RzLmxlbmd0aCA9PSAwKSB7cmV0dXJuO31cblx0dGhpcy5faGlkZV9tZXRob2RzID0gdGhpcy5tZXRob2RzO1xuXHR0aGlzLm1ldGhvZHMgPSBbXTtcbn07XG5HcmFwaC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuXHRpZih0aGlzLm1ldGhvZHMubGVuZ3RoID09IDApIHtyZXR1cm47fVxuXHR0aGlzLm1ldGhvZHMgPSB0aGlzLl9oaWRlX21ldGhvZHM7XG5cdHRoaXMuX2hpZGVfbWV0aG9kcyA9IFtdO1xufTtcbkdyYXBoLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cdHRoaXMubWV0aG9kcy5wdXNoKG1ldGhvZCk7XG59O1xuR3JhcGgucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyYXBoOyIsImNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9HcmFwaCcpO1xuY29uc3QgaW5oZXJpdCA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvaW5oZXJpdCcpO1xuLy/mipjnur9cbmZ1bmN0aW9uIFBvbHlMaW5lKHtsYXllciwgYXhpcywgd2lkdGgsIGNvbG9yLCBjbG9zZVBhdGh9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCBsYXllciwgY2xvc2VQYXRoKTtcblxuXHR0aGlzLmF4aXMgPSBheGlzO1xuXHR0aGlzLndpZHRoID0gd2lkdGggfHwgMTtcblx0dGhpcy5jb2xvciA9IGNvbG9yO1xufVxuaW5oZXJpdChQb2x5TGluZSwgR3JhcGgsIHtcbiAgICBzdHJva2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZShmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gc2VsZi5heGlzO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhheGlzWzBdWzBdLCBheGlzWzBdWzFdKTtcbiAgICAgICAgICAgIGF4aXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYoa2V5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2VsZi5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBzZWxmLndpZHRoO1xuICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnc3Ryb2tlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZmlsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuZmlsbChmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gc2VsZi5heGlzO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhheGlzWzBdWzBdLCBheGlzWzBdWzFdKTtcbiAgICAgICAgICAgIGF4aXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYoa2V5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHZhbHVlWzBdLCB2YWx1ZVsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHNlbGYuY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gc2VsZi53aWR0aDtcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ2ZpbGwnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9seUxpbmU7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCBpbmhlcml0ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS9pbmhlcml0Jyk7XG5cbmZ1bmN0aW9uIFJlY3Qoe2xheWVyLCBsdCwgcmIsIHdpZHRoLCBjb2xvcn0pIHtcbiAgICBHcmFwaC5jYWxsKHRoaXMsIGxheWVyLCBmYWxzZSk7XG5cbiAgICB0aGlzLmx0ID0gbHQ7XG4gICAgdGhpcy5yYiA9IHJiO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG59XG5cbmluaGVyaXQoUmVjdCwgR3JhcGgsIHtcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5maWxsKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHNlbGYubHRbMF0sIHNlbGYubHRbMV0sIHNlbGYucmJbMF0sIHNlbGYucmJbMV0pO1xuICAgICAgICB9LCBmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBzZWxmLmNvbG9yO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHNlbGYud2lkdGg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZmlsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHN0cm9rZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuc3Ryb2tlKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3Qoc2VsZi5sdFswXSwgc2VsZi5sdFsxXSwgc2VsZi5yYlswXSwgc2VsZi5yYlsxXSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2VsZi5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBzZWxmLndpZHRoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ3N0cm9rZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=