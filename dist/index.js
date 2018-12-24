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
  if (this.readyState == 2) {
    callbacks.imgInfoReady(this.data.images.length);
  } //图片加载中
  else if (this.readyState == 3) {
      callbacks.imgLoading(this.count, this.data.images.length);
    } else if (this.readyState == 4) {
      callbacks.imgLoaded(this.imgs);
    }
};

var callbacks = {
  imgLoaded: function imgLoaded(imgs) {
    new Topoboard.Img({
      layer: cirLayer,
      image: imgs.bg,
      dst: new Topoboard.CutParams(0, 0, board.getCanvas().width, board.getCanvas().height)
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
      o: [100, 100],
      r: 20,
      width: 2,
      color: 'red',
      closePath: true,
      shadow: new Topoboard.Shadow('#fff', 0, 0, 5)
    }).stroke();
    pl = new Topoboard.PolyLine({
      layer: recLayer,
      axis: [[10, 10], [40, 10], [40, 40], [10, 40]],
      width: 5,
      color: 'blue',
      closePath: true
    }).fill();
    text && text.clear(), recLayer.remove(text);
  },
  imgLoading: function imgLoading(count, total) {
    text.content = 'loading: ' + count + '/' + total;
  },
  imgInfoReady: function imgInfoReady(total) {
    text = new Topoboard.Text({
      layer: recLayer,
      position: [300, 300],
      content: 'loading: 0/' + total,
      font: '18px consola',
      color: '#f40'
    }).fill();
  }
};
var board = new Topoboard.Board(document.getElementById('myCanvas'));
var cirLayer = new Topoboard.Layer(board, {
  id: 'cir1',
  layerName: '圆'
});
var recLayer = new Topoboard.Layer(board, {
  id: 'rec1',
  layerName: '折线'
});
var animation = new Topoboard.Animation(board);

animation.onenterframe = function () {
  pl && pl.axis[0][0]++;
};

animation.start();
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
window.cirLayer = cirLayer;
window.recLayer = recLayer;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInRleHQiLCJwbCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWdNYW5hZ2VyIiwiVG9wb2JvYXJkIiwiSW1nTWFuYWdlciIsImltZ0pzb25VcmwiLCJsb2FkIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImNhbGxiYWNrcyIsImltZ0luZm9SZWFkeSIsImRhdGEiLCJpbWFnZXMiLCJsZW5ndGgiLCJpbWdMb2FkaW5nIiwiY291bnQiLCJpbWdMb2FkZWQiLCJpbWdzIiwiSW1nIiwibGF5ZXIiLCJjaXJMYXllciIsImltYWdlIiwiYmciLCJkc3QiLCJDdXRQYXJhbXMiLCJib2FyZCIsImdldENhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhdyIsInJlY3QiLCJSZWN0IiwicmVjTGF5ZXIiLCJjdXRQYXJhbXMiLCJ4IiwieSIsInciLCJoIiwiY29sb3IiLCJzaGFkb3ciLCJTaGFkb3ciLCJmaWxsIiwiY2lyY2xlIiwiQ2lyY2xlIiwibyIsInIiLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJQb2x5TGluZSIsImF4aXMiLCJjbGVhciIsInJlbW92ZSIsInRvdGFsIiwiY29udGVudCIsIlRleHQiLCJwb3NpdGlvbiIsImZvbnQiLCJCb2FyZCIsIkxheWVyIiwiaWQiLCJsYXllck5hbWUiLCJhbmltYXRpb24iLCJBbmltYXRpb24iLCJvbmVudGVyZnJhbWUiLCJzdGFydCIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgdGV4dCwgcGw7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbmxldCBpbWdNYW5hZ2VyID0gbmV3IFRvcG9ib2FyZC5JbWdNYW5hZ2VyKHtpbWdKc29uVXJsOiAnaW1nLmpzb24nfSk7XG5pbWdNYW5hZ2VyLmxvYWQoKTtcbmltZ01hbmFnZXIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgLy/mlbDmja7liqDovb3lrozmiJBcbiAgICBpZih0aGlzLnJlYWR5U3RhdGUgPT0gMikge1xuICAgICAgICBjYWxsYmFja3MuaW1nSW5mb1JlYWR5KHRoaXMuZGF0YS5pbWFnZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgLy/lm77niYfliqDovb3kuK1cbiAgICBlbHNlIGlmKHRoaXMucmVhZHlTdGF0ZSA9PSAzKSB7XG4gICAgICAgIGNhbGxiYWNrcy5pbWdMb2FkaW5nKHRoaXMuY291bnQsIHRoaXMuZGF0YS5pbWFnZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICBjYWxsYmFja3MuaW1nTG9hZGVkKHRoaXMuaW1ncyk7XG4gICAgfVxufTtcbmxldCBjYWxsYmFja3MgPSB7XG4gICAgaW1nTG9hZGVkOiBmdW5jdGlvbihpbWdzKSB7XG4gICAgICAgIG5ldyBUb3BvYm9hcmQuSW1nKHtcbiAgICAgICAgICAgIGxheWVyOiBjaXJMYXllcixcbiAgICAgICAgICAgIGltYWdlOiBpbWdzLmJnLFxuICAgICAgICAgICAgZHN0OiBuZXcgVG9wb2JvYXJkLkN1dFBhcmFtcygwLCAwLCBib2FyZC5nZXRDYW52YXMoKS53aWR0aCwgYm9hcmQuZ2V0Q2FudmFzKCkuaGVpZ2h0KVxuICAgICAgICB9KS5kcmF3KCk7XG5cbiAgICAgICAgbGV0IHJlY3QgPSBuZXcgVG9wb2JvYXJkLlJlY3Qoe1xuICAgICAgICAgICAgbGF5ZXI6IHJlY0xheWVyLFxuICAgICAgICAgICAgY3V0UGFyYW1zOiB7eDogMjAsIHk6IDIwLCB3OiAxMDAsIGg6IDEwMH0sXG4gICAgICAgICAgICB3aWR0aDogNixcbiAgICAgICAgICAgIGNvbG9yOiAnI2Y0MCcsXG4gICAgICAgICAgICBzaGFkb3c6IG5ldyBUb3BvYm9hcmQuU2hhZG93KCcjZmZmJywgMCwgMCwgMilcbiAgICAgICAgfSkuZmlsbCgpO1xuXG4gICAgICAgIGxldCBjaXJjbGUgPSBuZXcgVG9wb2JvYXJkLkNpcmNsZSh7XG4gICAgICAgICAgICBsYXllcjogY2lyTGF5ZXIsXG4gICAgICAgICAgICBvOiBbMTAwLCAxMDBdLFxuICAgICAgICAgICAgcjogMjAsXG4gICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgIGNsb3NlUGF0aDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWRvdzogbmV3IFRvcG9ib2FyZC5TaGFkb3coJyNmZmYnLCAwLCAwLCA1KVxuICAgICAgICB9KS5zdHJva2UoKTtcblxuICAgICAgICBwbCA9IG5ldyBUb3BvYm9hcmQuUG9seUxpbmUoe1xuICAgICAgICAgICAgbGF5ZXI6IHJlY0xheWVyLFxuICAgICAgICAgICAgYXhpczogW1sxMCwgMTBdLCBbNDAsIDEwXSwgWzQwLCA0MF0sIFsxMCwgNDBdXSxcbiAgICAgICAgICAgIHdpZHRoOiA1LFxuICAgICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgIGNsb3NlUGF0aDogdHJ1ZVxuICAgICAgICB9KS5maWxsKCk7XG5cbiAgICAgICAgdGV4dCAmJiB0ZXh0LmNsZWFyKCksIHJlY0xheWVyLnJlbW92ZSh0ZXh0KTtcbiAgICB9LFxuICAgIGltZ0xvYWRpbmc6IGZ1bmN0aW9uKGNvdW50LCB0b3RhbCkge1xuICAgICAgICB0ZXh0LmNvbnRlbnQgPSAnbG9hZGluZzogJyArIGNvdW50ICsgJy8nICsgdG90YWw7XG4gICAgfSxcbiAgICBpbWdJbmZvUmVhZHk6IGZ1bmN0aW9uKHRvdGFsKSB7XG4gICAgICAgIHRleHQgPSBuZXcgVG9wb2JvYXJkLlRleHQoe1xuICAgICAgICAgICAgbGF5ZXI6IHJlY0xheWVyLFxuICAgICAgICAgICAgcG9zaXRpb246IFszMDAsIDMwMF0sXG4gICAgICAgICAgICBjb250ZW50OiAnbG9hZGluZzogMC8nICsgdG90YWwsXG4gICAgICAgICAgICBmb250OiAnMThweCBjb25zb2xhJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2Y0MCdcbiAgICAgICAgfSkuZmlsbCgpO1xuICAgIH1cbn07XG5cbmxldCBib2FyZCA9IG5ldyBUb3BvYm9hcmQuQm9hcmQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2FudmFzJykpO1xubGV0IGNpckxheWVyID0gbmV3IFRvcG9ib2FyZC5MYXllcihib2FyZCwge2lkOiAnY2lyMScsIGxheWVyTmFtZTogJ+Wchid9KTtcbmxldCByZWNMYXllciA9IG5ldyBUb3BvYm9hcmQuTGF5ZXIoYm9hcmQsIHtpZDogJ3JlYzEnLCBsYXllck5hbWU6ICfmipjnur8nfSk7XG5cbmxldCBhbmltYXRpb24gPSBuZXcgVG9wb2JvYXJkLkFuaW1hdGlvbihib2FyZCk7XG5hbmltYXRpb24ub25lbnRlcmZyYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcGwgJiYgcGwuYXhpc1swXVswXSArKztcbn07XG5hbmltYXRpb24uc3RhcnQoKTtcblxubGV0IGN0eCA9IGJvYXJkLmN0eDtcbi8vIGN0eC5iZWdpblBhdGgoKTtcbi8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuLy8gY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuLy9cbi8vIGN0eC5tb3ZlVG8oMCwgMCk7XG4vLyBjdHgubGluZVRvKDMwMCwgMzAwKTtcbi8vIGN0eC5saW5lVG8oNDAwLCAyMCk7XG4vLyBjdHgubGluZVRvKDIwLCA0MCk7XG4vLyBjdHguZmlsbCgpO1xuLy8gY3R4LmNsb3NlUGF0aCgpO1xuXG5jb25zb2xlLmxvZyhib2FyZCk7XG4vLyBib2FyZC5jbGVhcigpO1xuLy8gYm9hcmQucmVmcmVzaCgpO1xuXG53aW5kb3cuYm9hcmQgPSBib2FyZDtcbndpbmRvdy5jdHggPSBib2FyZC5jdHg7XG53aW5kb3cuY2lyTGF5ZXIgPSBjaXJMYXllcjtcbndpbmRvdy5yZWNMYXllciA9IHJlY0xheWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==