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

var imgManager = new Topoboard.ImgManager({
  imgJsonUrl: 'img.json'
});
var canvas = document.getElementById('myCanvas');
var text = null;
imgManager.load({
  loaded: function loaded(im) {
    console.log(im);
    new Topoboard.Img({
      layer: cirLayer,
      image: im.imgs.bg,
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
    var pl = new Topoboard.PolyLine({
      layer: recLayer,
      axis: [[10, 10], [40, 10], [40, 40], [10, 40]],
      width: 5,
      color: 'blue',
      closePath: true
    }).fill();
  },
  loading: function loading(im, count, imgs) {
    text.text = 'loading: ' + count + '/' + imgs.length;
  },
  dataReady: function dataReady(imgs) {
    text = new Topoboard.Text({
      layer: recLayer,
      position: [300, 300],
      text: 'loading: 0/' + imgs.length,
      font: '18px consola',
      color: '#f40'
    }).fill();
  }
});
var board = new Topoboard.Board(document.getElementById('myCanvas'));
var scene = new Topoboard.Scene(function () {
  board.clean();
  board.refresh();
}, 1000 / 60); // scene.active();

var cirLayer = new Topoboard.Layer(board, {
  id: 'cir1',
  layerName: '圆'
});
var recLayer = new Topoboard.Layer(board, {
  id: 'rec1',
  layerName: '折线'
}); // setInterval(function() {
//     pl.axis[0][0] ++;
// }, 1000 / 60);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImltZ01hbmFnZXIiLCJUb3BvYm9hcmQiLCJJbWdNYW5hZ2VyIiwiaW1nSnNvblVybCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0IiwibG9hZCIsImxvYWRlZCIsImltIiwiY29uc29sZSIsImxvZyIsIkltZyIsImxheWVyIiwiY2lyTGF5ZXIiLCJpbWFnZSIsImltZ3MiLCJiZyIsImRzdCIsIkN1dFBhcmFtcyIsImJvYXJkIiwiZ2V0Q2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3IiwicmVjdCIsIlJlY3QiLCJyZWNMYXllciIsImN1dFBhcmFtcyIsIngiLCJ5IiwidyIsImgiLCJjb2xvciIsInNoYWRvdyIsIlNoYWRvdyIsImZpbGwiLCJjaXJjbGUiLCJDaXJjbGUiLCJvIiwiciIsImNsb3NlUGF0aCIsInN0cm9rZSIsInBsIiwiUG9seUxpbmUiLCJheGlzIiwibG9hZGluZyIsImNvdW50IiwibGVuZ3RoIiwiZGF0YVJlYWR5IiwiVGV4dCIsInBvc2l0aW9uIiwiZm9udCIsIkJvYXJkIiwic2NlbmUiLCJTY2VuZSIsImNsZWFuIiwicmVmcmVzaCIsIkxheWVyIiwiaWQiLCJsYXllck5hbWUiLCJjdHgiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFD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ekMsS0FBSyxDQUFDeUMsR0FBaEIsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFuRCxPQUFPLENBQUNDLEdBQVIsQ0FBWVMsS0FBWixFLENBQ0E7QUFDQTs7QUFFQTBDLE1BQU0sQ0FBQzFDLEtBQVAsR0FBZUEsS0FBZjtBQUNBMEMsTUFBTSxDQUFDRCxHQUFQLEdBQWF6QyxLQUFLLENBQUN5QyxHQUFuQjtBQUNBQyxNQUFNLENBQUNoRCxRQUFQLEdBQWtCQSxRQUFsQjtBQUNBZ0QsTUFBTSxDQUFDbkMsUUFBUCxHQUFrQkEsUUFBbEIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGltZ01hbmFnZXIgPSBuZXcgVG9wb2JvYXJkLkltZ01hbmFnZXIoe2ltZ0pzb25Vcmw6ICdpbWcuanNvbid9KTtcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcblxudmFyIHRleHQgPSBudWxsO1xuXG5pbWdNYW5hZ2VyLmxvYWQoe1xuICAgIGxvYWRlZDogZnVuY3Rpb24oaW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coaW0pO1xuICAgICAgICBuZXcgVG9wb2JvYXJkLkltZyh7XG4gICAgICAgICAgICBsYXllcjogY2lyTGF5ZXIsXG4gICAgICAgICAgICBpbWFnZTogaW0uaW1ncy5iZyxcbiAgICAgICAgICAgIGRzdDogbmV3IFRvcG9ib2FyZC5DdXRQYXJhbXMoMCwgMCwgYm9hcmQuZ2V0Q2FudmFzKCkud2lkdGgsIGJvYXJkLmdldENhbnZhcygpLmhlaWdodClcbiAgICAgICAgfSkuZHJhdygpO1xuXG4gICAgICAgIHZhciByZWN0ID0gbmV3IFRvcG9ib2FyZC5SZWN0KHtcbiAgICAgICAgICAgIGxheWVyOiByZWNMYXllcixcbiAgICAgICAgICAgIGN1dFBhcmFtczoge3g6IDIwLCB5OiAyMCwgdzogMTAwLCBoOiAxMDB9LFxuICAgICAgICAgICAgd2lkdGg6IDYsXG4gICAgICAgICAgICBjb2xvcjogJyNmNDAnLFxuICAgICAgICAgICAgc2hhZG93OiBuZXcgVG9wb2JvYXJkLlNoYWRvdygnI2ZmZicsIDAsIDAsIDIpXG4gICAgICAgIH0pLmZpbGwoKTtcblxuICAgICAgICB2YXIgY2lyY2xlID0gbmV3IFRvcG9ib2FyZC5DaXJjbGUoe1xuICAgICAgICAgICAgbGF5ZXI6IGNpckxheWVyLFxuICAgICAgICAgICAgbzogWzEwMCwgMTAwXSxcbiAgICAgICAgICAgIHI6IDIwLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICBjbG9zZVBhdGg6IHRydWUsXG4gICAgICAgICAgICBzaGFkb3c6IG5ldyBUb3BvYm9hcmQuU2hhZG93KCcjZmZmJywgMCwgMCwgNSlcbiAgICAgICAgfSkuc3Ryb2tlKCk7XG5cbiAgICAgICAgdmFyIHBsID0gbmV3IFRvcG9ib2FyZC5Qb2x5TGluZSh7XG4gICAgICAgICAgICBsYXllcjogcmVjTGF5ZXIsXG4gICAgICAgICAgICBheGlzOiBbWzEwLCAxMF0sIFs0MCwgMTBdLCBbNDAsIDQwXSwgWzEwLCA0MF1dLFxuICAgICAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgICAgY2xvc2VQYXRoOiB0cnVlXG4gICAgICAgIH0pLmZpbGwoKTtcbiAgICB9LFxuICAgIGxvYWRpbmc6IGZ1bmN0aW9uKGltLCBjb3VudCwgaW1ncykge1xuICAgICAgICB0ZXh0LnRleHQgPSAnbG9hZGluZzogJyArIGNvdW50ICsgJy8nICsgaW1ncy5sZW5ndGg7XG4gICAgfSxcbiAgICBkYXRhUmVhZHk6IGZ1bmN0aW9uKGltZ3MpIHtcbiAgICAgICAgdGV4dCA9IG5ldyBUb3BvYm9hcmQuVGV4dCh7XG4gICAgICAgICAgICBsYXllcjogcmVjTGF5ZXIsXG4gICAgICAgICAgICBwb3NpdGlvbjogWzMwMCwgMzAwXSxcbiAgICAgICAgICAgIHRleHQ6ICdsb2FkaW5nOiAwLycgKyBpbWdzLmxlbmd0aCxcbiAgICAgICAgICAgIGZvbnQ6ICcxOHB4IGNvbnNvbGEnLFxuICAgICAgICAgICAgY29sb3I6ICcjZjQwJ1xuICAgICAgICB9KS5maWxsKCk7XG4gICAgfVxufSk7XG52YXIgYm9hcmQgPSBuZXcgVG9wb2JvYXJkLkJvYXJkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpKTtcbnZhciBzY2VuZSA9IG5ldyBUb3BvYm9hcmQuU2NlbmUoZnVuY3Rpb24oKSB7XG4gICAgYm9hcmQuY2xlYW4oKTtcbiAgICBib2FyZC5yZWZyZXNoKCk7XG59LCAxMDAwLyA2MCk7XG4vLyBzY2VuZS5hY3RpdmUoKTtcbnZhciBjaXJMYXllciA9IG5ldyBUb3BvYm9hcmQuTGF5ZXIoYm9hcmQsIHtpZDogJ2NpcjEnLCBsYXllck5hbWU6ICflnIYnfSk7XG5cbnZhciByZWNMYXllciA9IG5ldyBUb3BvYm9hcmQuTGF5ZXIoYm9hcmQsIHtpZDogJ3JlYzEnLCBsYXllck5hbWU6ICfmipjnur8nfSk7XG5cblxuLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4vLyAgICAgcGwuYXhpc1swXVswXSArKztcbi8vIH0sIDEwMDAgLyA2MCk7XG5cblxudmFyIGN0eCA9IGJvYXJkLmN0eDtcbi8vIGN0eC5iZWdpblBhdGgoKTtcbi8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuLy8gY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuLy9cbi8vIGN0eC5tb3ZlVG8oMCwgMCk7XG4vLyBjdHgubGluZVRvKDMwMCwgMzAwKTtcbi8vIGN0eC5saW5lVG8oNDAwLCAyMCk7XG4vLyBjdHgubGluZVRvKDIwLCA0MCk7XG4vLyBjdHguZmlsbCgpO1xuLy8gY3R4LmNsb3NlUGF0aCgpO1xuXG5jb25zb2xlLmxvZyhib2FyZCk7XG4vLyBib2FyZC5jbGVhcigpO1xuLy8gYm9hcmQucmVmcmVzaCgpO1xuXG53aW5kb3cuYm9hcmQgPSBib2FyZDtcbndpbmRvdy5jdHggPSBib2FyZC5jdHg7XG53aW5kb3cuY2lyTGF5ZXIgPSBjaXJMYXllcjtcbndpbmRvdy5yZWNMYXllciA9IHJlY0xheWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==