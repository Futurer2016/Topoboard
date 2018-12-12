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

var board = new Topoboard.Board(document.getElementById('myCanvas'));
var scene = new Topoboard.Scene(function () {
  board.clean();
  board.refresh();
}, 1000 / 60);
scene.active();
var cirLayer = new Topoboard.Layer(board, {
  id: 'cir1',
  layerName: '圆'
});
var circle = new Topoboard.Circle({
  layer: cirLayer,
  o: [100, 100],
  r: 20,
  width: 2,
  color: 'red',
  closePath: true
}).stroke();
var recLayer = new Topoboard.Layer(board, {
  id: 'rec1',
  layerName: '折线'
});
var rect = new Topoboard.Rect({
  layer: recLayer,
  lt: [20, 20],
  rb: [100, 100],
  width: 6,
  color: '#f40'
}).stroke();
var pl = new Topoboard.PolyLine({
  layer: recLayer,
  axis: [[10, 10], [40, 10], [40, 40], [10, 40]],
  width: 5,
  color: 'blue',
  closePath: true
}).fill();
setInterval(function () {
  pl.axis[0][0]++;
}, 1000 / 60);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImJvYXJkIiwiVG9wb2JvYXJkIiwiQm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2NlbmUiLCJTY2VuZSIsImNsZWFuIiwicmVmcmVzaCIsImFjdGl2ZSIsImNpckxheWVyIiwiTGF5ZXIiLCJpZCIsImxheWVyTmFtZSIsImNpcmNsZSIsIkNpcmNsZSIsImxheWVyIiwibyIsInIiLCJ3aWR0aCIsImNvbG9yIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwicmVjTGF5ZXIiLCJyZWN0IiwiUmVjdCIsImx0IiwicmIiLCJwbCIsIlBvbHlMaW5lIiwiYXhpcyIsImZpbGwiLCJzZXRJbnRlcnZhbCIsImN0eCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxLQUFLLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxLQUFkLENBQW9CQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBcEIsQ0FBWjtBQUNBLElBQUlDLEtBQUssR0FBRyxJQUFJSixTQUFTLENBQUNLLEtBQWQsQ0FBb0IsWUFBVztBQUN2Q04sT0FBSyxDQUFDTyxLQUFOO0FBQ0FQLE9BQUssQ0FBQ1EsT0FBTjtBQUNILENBSFcsRUFHVCxPQUFNLEVBSEcsQ0FBWjtBQUlBSCxLQUFLLENBQUNJLE1BQU47QUFDQSxJQUFJQyxRQUFRLEdBQUcsSUFBSVQsU0FBUyxDQUFDVSxLQUFkLENBQW9CWCxLQUFwQixFQUEyQjtBQUFDWSxJQUFFLEVBQUUsTUFBTDtBQUFhQyxXQUFTLEVBQUU7QUFBeEIsQ0FBM0IsQ0FBZjtBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJYixTQUFTLENBQUNjLE1BQWQsQ0FBcUI7QUFDOUJDLE9BQUssRUFBRU4sUUFEdUI7QUFFOUJPLEdBQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBRjJCO0FBRzlCQyxHQUFDLEVBQUUsRUFIMkI7QUFJOUJDLE9BQUssRUFBRSxDQUp1QjtBQUs5QkMsT0FBSyxFQUFFLEtBTHVCO0FBTTlCQyxXQUFTLEVBQUU7QUFObUIsQ0FBckIsRUFPVkMsTUFQVSxFQUFiO0FBU0EsSUFBSUMsUUFBUSxHQUFHLElBQUl0QixTQUFTLENBQUNVLEtBQWQsQ0FBb0JYLEtBQXBCLEVBQTJCO0FBQUNZLElBQUUsRUFBRSxNQUFMO0FBQWFDLFdBQVMsRUFBRTtBQUF4QixDQUEzQixDQUFmO0FBRUEsSUFBSVcsSUFBSSxHQUFHLElBQUl2QixTQUFTLENBQUN3QixJQUFkLENBQW1CO0FBQzFCVCxPQUFLLEVBQUVPLFFBRG1CO0FBRTFCRyxJQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUZzQjtBQUcxQkMsSUFBRSxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FIc0I7QUFJMUJSLE9BQUssRUFBRSxDQUptQjtBQUsxQkMsT0FBSyxFQUFFO0FBTG1CLENBQW5CLEVBTVJFLE1BTlEsRUFBWDtBQVFBLElBQUlNLEVBQUUsR0FBRyxJQUFJM0IsU0FBUyxDQUFDNEIsUUFBZCxDQUF1QjtBQUM1QmIsT0FBSyxFQUFFTyxRQURxQjtBQUU1Qk8sTUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFELEVBQVcsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFYLEVBQXFCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBckIsRUFBK0IsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUEvQixDQUZzQjtBQUc1QlgsT0FBSyxFQUFFLENBSHFCO0FBSTVCQyxPQUFLLEVBQUUsTUFKcUI7QUFLNUJDLFdBQVMsRUFBRTtBQUxpQixDQUF2QixFQU1OVSxJQU5NLEVBQVQ7QUFRQUMsV0FBVyxDQUFDLFlBQVc7QUFDbkJKLElBQUUsQ0FBQ0UsSUFBSCxDQUFRLENBQVIsRUFBVyxDQUFYO0FBQ0gsQ0FGVSxFQUVSLE9BQU8sRUFGQyxDQUFYO0FBS0EsSUFBSUcsR0FBRyxHQUFHakMsS0FBSyxDQUFDaUMsR0FBaEIsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkMsS0FBWixFLENBQ0E7QUFDQTs7QUFFQW9DLE1BQU0sQ0FBQ3BDLEtBQVAsR0FBZUEsS0FBZjtBQUNBb0MsTUFBTSxDQUFDSCxHQUFQLEdBQWFqQyxLQUFLLENBQUNpQyxHQUFuQjtBQUNBRyxNQUFNLENBQUMxQixRQUFQLEdBQWtCQSxRQUFsQjtBQUNBMEIsTUFBTSxDQUFDYixRQUFQLEdBQWtCQSxRQUFsQixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYm9hcmQgPSBuZXcgVG9wb2JvYXJkLkJvYXJkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpKTtcbnZhciBzY2VuZSA9IG5ldyBUb3BvYm9hcmQuU2NlbmUoZnVuY3Rpb24oKSB7XG4gICAgYm9hcmQuY2xlYW4oKTtcbiAgICBib2FyZC5yZWZyZXNoKCk7XG59LCAxMDAwLyA2MCk7XG5zY2VuZS5hY3RpdmUoKTtcbnZhciBjaXJMYXllciA9IG5ldyBUb3BvYm9hcmQuTGF5ZXIoYm9hcmQsIHtpZDogJ2NpcjEnLCBsYXllck5hbWU6ICflnIYnfSk7XG52YXIgY2lyY2xlID0gbmV3IFRvcG9ib2FyZC5DaXJjbGUoe1xuICAgIGxheWVyOiBjaXJMYXllcixcbiAgICBvOiBbMTAwLCAxMDBdLFxuICAgIHI6IDIwLFxuICAgIHdpZHRoOiAyLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBjbG9zZVBhdGg6IHRydWVcbn0pLnN0cm9rZSgpO1xuXG52YXIgcmVjTGF5ZXIgPSBuZXcgVG9wb2JvYXJkLkxheWVyKGJvYXJkLCB7aWQ6ICdyZWMxJywgbGF5ZXJOYW1lOiAn5oqY57q/J30pO1xuXG52YXIgcmVjdCA9IG5ldyBUb3BvYm9hcmQuUmVjdCh7XG4gICAgbGF5ZXI6IHJlY0xheWVyLFxuICAgIGx0OiBbMjAsIDIwXSxcbiAgICByYjogWzEwMCwgMTAwXSxcbiAgICB3aWR0aDogNixcbiAgICBjb2xvcjogJyNmNDAnXG59KS5zdHJva2UoKTtcblxudmFyIHBsID0gbmV3IFRvcG9ib2FyZC5Qb2x5TGluZSh7XG4gICAgbGF5ZXI6IHJlY0xheWVyLFxuICAgIGF4aXM6IFtbMTAsIDEwXSwgWzQwLCAxMF0sIFs0MCwgNDBdLCBbMTAsIDQwXV0sXG4gICAgd2lkdGg6IDUsXG4gICAgY29sb3I6ICdibHVlJyxcbiAgICBjbG9zZVBhdGg6IHRydWVcbn0pLmZpbGwoKTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgcGwuYXhpc1swXVswXSArKztcbn0sIDEwMDAgLyA2MCk7XG5cblxudmFyIGN0eCA9IGJvYXJkLmN0eDtcbi8vIGN0eC5iZWdpblBhdGgoKTtcbi8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuLy8gY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuLy9cbi8vIGN0eC5tb3ZlVG8oMCwgMCk7XG4vLyBjdHgubGluZVRvKDMwMCwgMzAwKTtcbi8vIGN0eC5saW5lVG8oNDAwLCAyMCk7XG4vLyBjdHgubGluZVRvKDIwLCA0MCk7XG4vLyBjdHguZmlsbCgpO1xuLy8gY3R4LmNsb3NlUGF0aCgpO1xuXG5jb25zb2xlLmxvZyhib2FyZCk7XG4vLyBib2FyZC5jbGVhcigpO1xuLy8gYm9hcmQucmVmcmVzaCgpO1xuXG53aW5kb3cuYm9hcmQgPSBib2FyZDtcbndpbmRvdy5jdHggPSBib2FyZC5jdHg7XG53aW5kb3cuY2lyTGF5ZXIgPSBjaXJMYXllcjtcbndpbmRvdy5yZWNMYXllciA9IHJlY0xheWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==