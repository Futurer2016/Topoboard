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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var text, pl;
var canvas = document.getElementById('myCanvas');
var imgManager = new Topoboard.ImgManager({
  imgJsonUrl: 'img.json'
});
imgManager.load();

imgManager.onreadystatechange = function () {
  //数据加载完成
  if (this.readyState == Topoboard.ImgManager.STATE_RESOURCE_INFO_READY) {
    callbacks.imgInfoReady(this.data.images.length);
  } //图片加载中
  else if (this.readyState == Topoboard.ImgManager.STATE_RESOURCE_LOADING) {
      callbacks.imgLoading(this.count, this.data.images.length);
    } else if (this.readyState == Topoboard.ImgManager.STATE_RESOURCE_READY) {
      callbacks.imgLoaded(this.imgs);
    }
};

var callbacks = {
  imgLoaded: function imgLoaded(imgs) {
    new Topoboard.Img({
      layer: bkLayer,
      image: imgs.bg
    }).draw();
    var rect = new Topoboard.Rect({
      layer: recLayer,
      cutParams: {
        x: 20,
        y: 20,
        w: 100,
        h: 100
      },
      width: 6,
      color: '#f40',
      shadow: new Topoboard.Shadow('#fff', 0, 0, 2)
    }).fill();
    var circle = new Topoboard.Circle({
      layer: cirLayer,
      o: new Topoboard.Vector(100, 100),
      r: 20,
      width: 2,
      color: 'red',
      closePath: true,
      shadow: new Topoboard.Shadow('#fff', 0, 0, 5)
    }).stroke();
    pl = new Topoboard.PolyLine({
      layer: plLayer,
      axis: [[10, 10], [40, 10], [40, 40], [10, 40]],
      width: 5,
      color: 'blue',
      closePath: true
    }).fill();
    text && text.clear(), recLayer.removeGraph(text);
    board.refresh(true);
  },
  imgLoading: function imgLoading(count, total) {
    text.content = 'loading: ' + count + '/' + total;
  },
  imgInfoReady: function imgInfoReady(total) {
    text = new Topoboard.Text({
      layer: recLayer,
      position: new Topoboard.Vector(300, 300),
      content: 'loading: 0/' + total,
      font: '18px 微软雅黑',
      color: '#f40'
    }).fill();
  }
};
var board = new Topoboard(document.getElementById('myCanvas'));
var bkLayer = board.newLayer('bk');
var recLayer = board.newLayer('rec');
var cirLayer = board.newLayer('cir');
var plLayer = board.newLayer('polyline');
var animation = new Topoboard.Animation();

animation.onenterframe = function () {
  // console.log(arguments[0]);
  plLayer.refresh();
  board.refresh();
};

animation.addTask(function () {
  pl && pl.axis[0][0]++;
}); // animation.start();

var ctx = board.ctx; // ctx.beginPath();
// ctx.fillStyle = 'green';
// ctx.lineWidth = 10;
// ctx.lineCap = 'round';
//
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 300);
// ctx.lineTo(400, 20);
// ctx.lineTo(20, 40);
// ctx.fill();
// ctx.closePath();

console.log(board); // board.clear();
// board.refresh();

window.board = board;
window.ctx = board.ctx;
window.bkLayer = bkLayer;
window.cirLayer = cirLayer;
window.recLayer = recLayer;
window.plLayer = plLayer;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInRleHQiLCJwbCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWdNYW5hZ2VyIiwiVG9wb2JvYXJkIiwiSW1nTWFuYWdlciIsImltZ0pzb25VcmwiLCJsb2FkIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIlNUQVRFX1JFU09VUkNFX0lORk9fUkVBRFkiLCJjYWxsYmFja3MiLCJpbWdJbmZvUmVhZHkiLCJkYXRhIiwiaW1hZ2VzIiwibGVuZ3RoIiwiU1RBVEVfUkVTT1VSQ0VfTE9BRElORyIsImltZ0xvYWRpbmciLCJjb3VudCIsIlNUQVRFX1JFU09VUkNFX1JFQURZIiwiaW1nTG9hZGVkIiwiaW1ncyIsIkltZyIsImxheWVyIiwiYmtMYXllciIsImltYWdlIiwiYmciLCJkcmF3IiwicmVjdCIsIlJlY3QiLCJyZWNMYXllciIsImN1dFBhcmFtcyIsIngiLCJ5IiwidyIsImgiLCJ3aWR0aCIsImNvbG9yIiwic2hhZG93IiwiU2hhZG93IiwiZmlsbCIsImNpcmNsZSIsIkNpcmNsZSIsImNpckxheWVyIiwibyIsIlZlY3RvciIsInIiLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJQb2x5TGluZSIsInBsTGF5ZXIiLCJheGlzIiwiY2xlYXIiLCJyZW1vdmVHcmFwaCIsImJvYXJkIiwicmVmcmVzaCIsInRvdGFsIiwiY29udGVudCIsIlRleHQiLCJwb3NpdGlvbiIsImZvbnQiLCJuZXdMYXllciIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsIm9uZW50ZXJmcmFtZSIsImFkZFRhc2siLCJjdHgiLCJjb25zb2xlIiwibG9nIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBQ0E2QyxNQUFNLENBQUMxQixRQUFQLEdBQWtCQSxRQUFsQjtBQUNBMEIsTUFBTSxDQUFDdkMsUUFBUCxHQUFrQkEsUUFBbEI7QUFDQXVDLE1BQU0sQ0FBQ25CLE9BQVAsR0FBaUJBLE9BQWpCLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImxldCB0ZXh0LCBwbDtcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xubGV0IGltZ01hbmFnZXIgPSBuZXcgVG9wb2JvYXJkLkltZ01hbmFnZXIoe2ltZ0pzb25Vcmw6ICdpbWcuanNvbid9KTtcbmltZ01hbmFnZXIubG9hZCgpO1xuaW1nTWFuYWdlci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAvL+aVsOaNruWKoOi9veWujOaIkFxuICAgIGlmKHRoaXMucmVhZHlTdGF0ZSA9PSBUb3BvYm9hcmQuSW1nTWFuYWdlci5TVEFURV9SRVNPVVJDRV9JTkZPX1JFQURZKSB7XG4gICAgICAgIGNhbGxiYWNrcy5pbWdJbmZvUmVhZHkodGhpcy5kYXRhLmltYWdlcy5sZW5ndGgpO1xuICAgIH1cbiAgICAvL+WbvueJh+WKoOi9veS4rVxuICAgIGVsc2UgaWYodGhpcy5yZWFkeVN0YXRlID09IFRvcG9ib2FyZC5JbWdNYW5hZ2VyLlNUQVRFX1JFU09VUkNFX0xPQURJTkcpIHtcbiAgICAgICAgY2FsbGJhY2tzLmltZ0xvYWRpbmcodGhpcy5jb3VudCwgdGhpcy5kYXRhLmltYWdlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMucmVhZHlTdGF0ZSA9PSBUb3BvYm9hcmQuSW1nTWFuYWdlci5TVEFURV9SRVNPVVJDRV9SRUFEWSkge1xuICAgICAgICBjYWxsYmFja3MuaW1nTG9hZGVkKHRoaXMuaW1ncyk7XG4gICAgfVxufTtcbmxldCBjYWxsYmFja3MgPSB7XG4gICAgaW1nTG9hZGVkOiBmdW5jdGlvbihpbWdzKSB7XG4gICAgICAgIG5ldyBUb3BvYm9hcmQuSW1nKHtcbiAgICAgICAgICAgIGxheWVyOiBia0xheWVyLFxuICAgICAgICAgICAgaW1hZ2U6IGltZ3MuYmdcbiAgICAgICAgfSkuZHJhdygpO1xuXG4gICAgICAgIGxldCByZWN0ID0gbmV3IFRvcG9ib2FyZC5SZWN0KHtcbiAgICAgICAgICAgIGxheWVyOiByZWNMYXllcixcbiAgICAgICAgICAgIGN1dFBhcmFtczoge3g6IDIwLCB5OiAyMCwgdzogMTAwLCBoOiAxMDB9LFxuICAgICAgICAgICAgd2lkdGg6IDYsXG4gICAgICAgICAgICBjb2xvcjogJyNmNDAnLFxuICAgICAgICAgICAgc2hhZG93OiBuZXcgVG9wb2JvYXJkLlNoYWRvdygnI2ZmZicsIDAsIDAsIDIpXG4gICAgICAgIH0pLmZpbGwoKTtcblxuICAgICAgICBsZXQgY2lyY2xlID0gbmV3IFRvcG9ib2FyZC5DaXJjbGUoe1xuICAgICAgICAgICAgbGF5ZXI6IGNpckxheWVyLFxuICAgICAgICAgICAgbzogbmV3IFRvcG9ib2FyZC5WZWN0b3IoMTAwLCAxMDApLFxuICAgICAgICAgICAgcjogMjAsXG4gICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgIGNsb3NlUGF0aDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWRvdzogbmV3IFRvcG9ib2FyZC5TaGFkb3coJyNmZmYnLCAwLCAwLCA1KVxuICAgICAgICB9KS5zdHJva2UoKTtcblxuICAgICAgICBwbCA9IG5ldyBUb3BvYm9hcmQuUG9seUxpbmUoe1xuICAgICAgICAgICAgbGF5ZXI6IHBsTGF5ZXIsXG4gICAgICAgICAgICBheGlzOiBbWzEwLCAxMF0sIFs0MCwgMTBdLCBbNDAsIDQwXSwgWzEwLCA0MF1dLFxuICAgICAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgY2xvc2VQYXRoOiB0cnVlXG4gICAgICAgIH0pLmZpbGwoKTtcblxuICAgICAgICB0ZXh0ICYmIHRleHQuY2xlYXIoKSwgcmVjTGF5ZXIucmVtb3ZlR3JhcGgodGV4dCk7XG4gICAgICAgIGJvYXJkLnJlZnJlc2godHJ1ZSk7XG4gICAgfSxcbiAgICBpbWdMb2FkaW5nOiBmdW5jdGlvbihjb3VudCwgdG90YWwpIHtcbiAgICAgICAgdGV4dC5jb250ZW50ID0gJ2xvYWRpbmc6ICcgKyBjb3VudCArICcvJyArIHRvdGFsO1xuICAgIH0sXG4gICAgaW1nSW5mb1JlYWR5OiBmdW5jdGlvbih0b3RhbCkge1xuICAgICAgICB0ZXh0ID0gbmV3IFRvcG9ib2FyZC5UZXh0KHtcbiAgICAgICAgICAgIGxheWVyOiByZWNMYXllcixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVG9wb2JvYXJkLlZlY3RvcigzMDAsIDMwMCksXG4gICAgICAgICAgICBjb250ZW50OiAnbG9hZGluZzogMC8nICsgdG90YWwsXG4gICAgICAgICAgICBmb250OiAnMThweCDlvq7ova/pm4Xpu5EnLFxuICAgICAgICAgICAgY29sb3I6ICcjZjQwJ1xuICAgICAgICB9KS5maWxsKCk7XG4gICAgfVxufTtcblxubGV0IGJvYXJkID0gbmV3IFRvcG9ib2FyZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKSk7XG5cbmxldCBia0xheWVyID0gYm9hcmQubmV3TGF5ZXIoJ2JrJyk7XG5sZXQgcmVjTGF5ZXIgPSBib2FyZC5uZXdMYXllcigncmVjJyk7XG5sZXQgY2lyTGF5ZXIgPSBib2FyZC5uZXdMYXllcignY2lyJyk7XG5sZXQgcGxMYXllciA9IGJvYXJkLm5ld0xheWVyKCdwb2x5bGluZScpO1xuXG5sZXQgYW5pbWF0aW9uID0gbmV3IFRvcG9ib2FyZC5BbmltYXRpb24oKTtcbmFuaW1hdGlvbi5vbmVudGVyZnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhhcmd1bWVudHNbMF0pO1xuICAgIHBsTGF5ZXIucmVmcmVzaCgpO1xuICAgIGJvYXJkLnJlZnJlc2goKTtcbn07XG5hbmltYXRpb24uYWRkVGFzayhmdW5jdGlvbigpIHtcbiAgICBwbCAmJiBwbC5heGlzWzBdWzBdICsrO1xufSk7XG4vLyBhbmltYXRpb24uc3RhcnQoKTtcblxubGV0IGN0eCA9IGJvYXJkLmN0eDtcbi8vIGN0eC5iZWdpblBhdGgoKTtcbi8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuLy8gY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuLy9cbi8vIGN0eC5tb3ZlVG8oMCwgMCk7XG4vLyBjdHgubGluZVRvKDMwMCwgMzAwKTtcbi8vIGN0eC5saW5lVG8oNDAwLCAyMCk7XG4vLyBjdHgubGluZVRvKDIwLCA0MCk7XG4vLyBjdHguZmlsbCgpO1xuLy8gY3R4LmNsb3NlUGF0aCgpO1xuXG5jb25zb2xlLmxvZyhib2FyZCk7XG4vLyBib2FyZC5jbGVhcigpO1xuLy8gYm9hcmQucmVmcmVzaCgpO1xuXG53aW5kb3cuYm9hcmQgPSBib2FyZDtcbndpbmRvdy5jdHggPSBib2FyZC5jdHg7XG53aW5kb3cuYmtMYXllciA9IGJrTGF5ZXI7XG53aW5kb3cuY2lyTGF5ZXIgPSBjaXJMYXllcjtcbndpbmRvdy5yZWNMYXllciA9IHJlY0xheWVyO1xud2luZG93LnBsTGF5ZXIgPSBwbExheWVyOyJdLCJzb3VyY2VSb290IjoiIn0=