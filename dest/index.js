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

var text, pl, circle, rect;
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
    rect = new Topoboard.Rect({
      layer: recLayer,
      cutParams: new TB.CutParams(20, 20, 100, 100),
      lineWidth: 6,
      color: '#f40',
      shadow: new Topoboard.Shadow('#fff', 0, 0, 2)
    }).fill();
    circle = new Topoboard.Circle({
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
      axis: [new TB.Vector(10, 10), new TB.Vector(40, 10), new TB.Vector(40, 40), new TB.Vector(10, 40)],
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
      // position: new Topoboard.Vector(300, 300),
      content: 'loading: 0/' + total,
      font: new TB.Font(18, '微软雅黑'),
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
  // plLayer.refresh();
  // cirLayer.refresh();
  // recLayer.refresh();
  board.refresh(1);
};

animation.addTask(function () {
  pl && (pl.axis[0].x++, pl.axis[0].y++);
  circle && circle.o.x++;
  rect && rect.cutParams.y++;
});
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
window.bkLayer = bkLayer;
window.cirLayer = cirLayer;
window.recLayer = recLayer;
window.plLayer = plLayer;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInRleHQiLCJwbCIsImNpcmNsZSIsInJlY3QiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW1nTWFuYWdlciIsIlRvcG9ib2FyZCIsIkltZ01hbmFnZXIiLCJpbWdKc29uVXJsIiwibG9hZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJTVEFURV9SRVNPVVJDRV9JTkZPX1JFQURZIiwiY2FsbGJhY2tzIiwiaW1nSW5mb1JlYWR5IiwiZGF0YSIsImltYWdlcyIsImxlbmd0aCIsIlNUQVRFX1JFU09VUkNFX0xPQURJTkciLCJpbWdMb2FkaW5nIiwiY291bnQiLCJTVEFURV9SRVNPVVJDRV9SRUFEWSIsImltZ0xvYWRlZCIsImltZ3MiLCJJbWciLCJsYXllciIsImJrTGF5ZXIiLCJpbWFnZSIsImJnIiwiZHJhdyIsIlJlY3QiLCJyZWNMYXllciIsImN1dFBhcmFtcyIsIlRCIiwiQ3V0UGFyYW1zIiwibGluZVdpZHRoIiwiY29sb3IiLCJzaGFkb3ciLCJTaGFkb3ciLCJmaWxsIiwiQ2lyY2xlIiwiY2lyTGF5ZXIiLCJvIiwiVmVjdG9yIiwiciIsIndpZHRoIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiUG9seUxpbmUiLCJwbExheWVyIiwiYXhpcyIsImNsZWFyIiwicmVtb3ZlR3JhcGgiLCJib2FyZCIsInJlZnJlc2giLCJ0b3RhbCIsImNvbnRlbnQiLCJUZXh0IiwiZm9udCIsIkZvbnQiLCJuZXdMYXllciIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsIm9uZW50ZXJmcmFtZSIsImFkZFRhc2siLCJ4IiwieSIsInN0YXJ0IiwiY3R4IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLElBQUosRUFBVUMsRUFBVixFQUFjQyxNQUFkLEVBQXNCQyxJQUF0QjtBQUVBLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWI7QUFDQSxJQUFJQyxVQUFVLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxVQUFkLENBQXlCO0FBQUNDLFlBQVUsRUFBRTtBQUFiLENBQXpCLENBQWpCO0FBQ0FILFVBQVUsQ0FBQ0ksSUFBWDs7QUFDQUosVUFBVSxDQUFDSyxrQkFBWCxHQUFnQyxZQUFXO0FBQ3ZDO0FBQ0EsTUFBRyxLQUFLQyxVQUFMLElBQW1CTCxTQUFTLENBQUNDLFVBQVYsQ0FBcUJLLHlCQUEzQyxFQUFzRTtBQUNsRUMsYUFBUyxDQUFDQyxZQUFWLENBQXVCLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsTUFBeEM7QUFDSCxHQUZELENBR0E7QUFIQSxPQUlLLElBQUcsS0FBS04sVUFBTCxJQUFtQkwsU0FBUyxDQUFDQyxVQUFWLENBQXFCVyxzQkFBM0MsRUFBbUU7QUFDcEVMLGVBQVMsQ0FBQ00sVUFBVixDQUFxQixLQUFLQyxLQUExQixFQUFpQyxLQUFLTCxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWxEO0FBQ0gsS0FGSSxNQUdBLElBQUcsS0FBS04sVUFBTCxJQUFtQkwsU0FBUyxDQUFDQyxVQUFWLENBQXFCYyxvQkFBM0MsRUFBaUU7QUFDbEVSLGVBQVMsQ0FBQ1MsU0FBVixDQUFvQixLQUFLQyxJQUF6QjtBQUNIO0FBQ0osQ0FaRDs7QUFhQSxJQUFJVixTQUFTLEdBQUc7QUFDWlMsV0FBUyxFQUFFLG1CQUFTQyxJQUFULEVBQWU7QUFDdEIsUUFBSWpCLFNBQVMsQ0FBQ2tCLEdBQWQsQ0FBa0I7QUFDZEMsV0FBSyxFQUFFQyxPQURPO0FBRWRDLFdBQUssRUFBRUosSUFBSSxDQUFDSztBQUZFLEtBQWxCLEVBR0dDLElBSEg7QUFLQTVCLFFBQUksR0FBRyxJQUFJSyxTQUFTLENBQUN3QixJQUFkLENBQW1CO0FBQ3RCTCxXQUFLLEVBQUVNLFFBRGU7QUFFdEJDLGVBQVMsRUFBRSxJQUFJQyxFQUFFLENBQUNDLFNBQVAsQ0FBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsQ0FGVztBQUd0QkMsZUFBUyxFQUFFLENBSFc7QUFJdEJDLFdBQUssRUFBRSxNQUplO0FBS3RCQyxZQUFNLEVBQUUsSUFBSS9CLFNBQVMsQ0FBQ2dDLE1BQWQsQ0FBcUIsTUFBckIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkM7QUFMYyxLQUFuQixFQU1KQyxJQU5JLEVBQVA7QUFRQXZDLFVBQU0sR0FBRyxJQUFJTSxTQUFTLENBQUNrQyxNQUFkLENBQXFCO0FBQzFCZixXQUFLLEVBQUVnQixRQURtQjtBQUUxQkMsT0FBQyxFQUFFLElBQUlwQyxTQUFTLENBQUNxQyxNQUFkLENBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBRnVCO0FBRzFCQyxPQUFDLEVBQUUsRUFIdUI7QUFJMUJDLFdBQUssRUFBRSxDQUptQjtBQUsxQlQsV0FBSyxFQUFFLEtBTG1CO0FBTTFCVSxlQUFTLEVBQUUsSUFOZTtBQU8xQlQsWUFBTSxFQUFFLElBQUkvQixTQUFTLENBQUNnQyxNQUFkLENBQXFCLE1BQXJCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DO0FBUGtCLEtBQXJCLEVBUU5TLE1BUk0sRUFBVDtBQVVBaEQsTUFBRSxHQUFHLElBQUlPLFNBQVMsQ0FBQzBDLFFBQWQsQ0FBdUI7QUFDeEJ2QixXQUFLLEVBQUV3QixPQURpQjtBQUV4QkMsVUFBSSxFQUFFLENBQUMsSUFBSWpCLEVBQUUsQ0FBQ1UsTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBbEIsQ0FBRCxFQUF3QixJQUFJVixFQUFFLENBQUNVLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEVBQWxCLENBQXhCLEVBQStDLElBQUlWLEVBQUUsQ0FBQ1UsTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBbEIsQ0FBL0MsRUFBc0UsSUFBSVYsRUFBRSxDQUFDVSxNQUFQLENBQWMsRUFBZCxFQUFrQixFQUFsQixDQUF0RSxDQUZrQjtBQUd4QkUsV0FBSyxFQUFFLENBSGlCO0FBSXhCVCxXQUFLLEVBQUUsTUFKaUI7QUFLeEJVLGVBQVMsRUFBRTtBQUxhLEtBQXZCLEVBTUZQLElBTkUsRUFBTDtBQVFBekMsUUFBSSxJQUFJQSxJQUFJLENBQUNxRCxLQUFMLEVBQVIsRUFBc0JwQixRQUFRLENBQUNxQixXQUFULENBQXFCdEQsSUFBckIsQ0FBdEI7QUFDQXVELFNBQUssQ0FBQ0MsT0FBTixDQUFjLElBQWQ7QUFDSCxHQW5DVztBQW9DWm5DLFlBQVUsRUFBRSxvQkFBU0MsS0FBVCxFQUFnQm1DLEtBQWhCLEVBQXVCO0FBQy9CekQsUUFBSSxDQUFDMEQsT0FBTCxHQUFlLGNBQWNwQyxLQUFkLEdBQXNCLEdBQXRCLEdBQTRCbUMsS0FBM0M7QUFDSCxHQXRDVztBQXVDWnpDLGNBQVksRUFBRSxzQkFBU3lDLEtBQVQsRUFBZ0I7QUFDMUJ6RCxRQUFJLEdBQUcsSUFBSVEsU0FBUyxDQUFDbUQsSUFBZCxDQUFtQjtBQUN0QmhDLFdBQUssRUFBRU0sUUFEZTtBQUV0QjtBQUNBeUIsYUFBTyxFQUFFLGdCQUFnQkQsS0FISDtBQUl0QkcsVUFBSSxFQUFFLElBQUl6QixFQUFFLENBQUMwQixJQUFQLENBQVksRUFBWixFQUFnQixNQUFoQixDQUpnQjtBQUt0QnZCLFdBQUssRUFBRTtBQUxlLEtBQW5CLEVBTUpHLElBTkksRUFBUDtBQU9IO0FBL0NXLENBQWhCO0FBa0RBLElBQUljLEtBQUssR0FBRyxJQUFJL0MsU0FBSixDQUFjSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZCxDQUFaO0FBRUEsSUFBSXNCLE9BQU8sR0FBRzJCLEtBQUssQ0FBQ08sUUFBTixDQUFlLElBQWYsQ0FBZDtBQUNBLElBQUk3QixRQUFRLEdBQUdzQixLQUFLLENBQUNPLFFBQU4sQ0FBZSxLQUFmLENBQWY7QUFDQSxJQUFJbkIsUUFBUSxHQUFHWSxLQUFLLENBQUNPLFFBQU4sQ0FBZSxLQUFmLENBQWY7QUFDQSxJQUFJWCxPQUFPLEdBQUdJLEtBQUssQ0FBQ08sUUFBTixDQUFlLFVBQWYsQ0FBZDtBQUVBLElBQUlDLFNBQVMsR0FBRyxJQUFJdkQsU0FBUyxDQUFDd0QsU0FBZCxFQUFoQjs7QUFDQUQsU0FBUyxDQUFDRSxZQUFWLEdBQXlCLFlBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQVYsT0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZDtBQUNILENBTkQ7O0FBT0FPLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixZQUFXO0FBQ3pCakUsSUFBRSxLQUFLQSxFQUFFLENBQUNtRCxJQUFILENBQVEsQ0FBUixFQUFXZSxDQUFYLElBQWlCbEUsRUFBRSxDQUFDbUQsSUFBSCxDQUFRLENBQVIsRUFBV2dCLENBQVgsRUFBdEIsQ0FBRjtBQUNBbEUsUUFBTSxJQUFJQSxNQUFNLENBQUMwQyxDQUFQLENBQVN1QixDQUFULEVBQVY7QUFDQWhFLE1BQUksSUFBSUEsSUFBSSxDQUFDK0IsU0FBTCxDQUFla0MsQ0FBZixFQUFSO0FBQ0gsQ0FKRDtBQUtBTCxTQUFTLENBQUNNLEtBQVY7QUFFQSxJQUFJQyxHQUFHLEdBQUdmLEtBQUssQ0FBQ2UsR0FBaEIsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsS0FBWixFLENBQ0E7QUFDQTs7QUFFQWtCLE1BQU0sQ0FBQ2xCLEtBQVAsR0FBZUEsS0FBZjtBQUNBa0IsTUFBTSxDQUFDSCxHQUFQLEdBQWFmLEtBQUssQ0FBQ2UsR0FBbkI7QUFDQUcsTUFBTSxDQUFDN0MsT0FBUCxHQUFpQkEsT0FBakI7QUFDQTZDLE1BQU0sQ0FBQzlCLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0E4QixNQUFNLENBQUN4QyxRQUFQLEdBQWtCQSxRQUFsQjtBQUNBd0MsTUFBTSxDQUFDdEIsT0FBUCxHQUFpQkEsT0FBakIsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibGV0IHRleHQsIHBsLCBjaXJjbGUsIHJlY3Q7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbmxldCBpbWdNYW5hZ2VyID0gbmV3IFRvcG9ib2FyZC5JbWdNYW5hZ2VyKHtpbWdKc29uVXJsOiAnaW1nLmpzb24nfSk7XG5pbWdNYW5hZ2VyLmxvYWQoKTtcbmltZ01hbmFnZXIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgLy/mlbDmja7liqDovb3lrozmiJBcbiAgICBpZih0aGlzLnJlYWR5U3RhdGUgPT0gVG9wb2JvYXJkLkltZ01hbmFnZXIuU1RBVEVfUkVTT1VSQ0VfSU5GT19SRUFEWSkge1xuICAgICAgICBjYWxsYmFja3MuaW1nSW5mb1JlYWR5KHRoaXMuZGF0YS5pbWFnZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgLy/lm77niYfliqDovb3kuK1cbiAgICBlbHNlIGlmKHRoaXMucmVhZHlTdGF0ZSA9PSBUb3BvYm9hcmQuSW1nTWFuYWdlci5TVEFURV9SRVNPVVJDRV9MT0FESU5HKSB7XG4gICAgICAgIGNhbGxiYWNrcy5pbWdMb2FkaW5nKHRoaXMuY291bnQsIHRoaXMuZGF0YS5pbWFnZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLnJlYWR5U3RhdGUgPT0gVG9wb2JvYXJkLkltZ01hbmFnZXIuU1RBVEVfUkVTT1VSQ0VfUkVBRFkpIHtcbiAgICAgICAgY2FsbGJhY2tzLmltZ0xvYWRlZCh0aGlzLmltZ3MpO1xuICAgIH1cbn07XG5sZXQgY2FsbGJhY2tzID0ge1xuICAgIGltZ0xvYWRlZDogZnVuY3Rpb24oaW1ncykge1xuICAgICAgICBuZXcgVG9wb2JvYXJkLkltZyh7XG4gICAgICAgICAgICBsYXllcjogYmtMYXllcixcbiAgICAgICAgICAgIGltYWdlOiBpbWdzLmJnXG4gICAgICAgIH0pLmRyYXcoKTtcblxuICAgICAgICByZWN0ID0gbmV3IFRvcG9ib2FyZC5SZWN0KHtcbiAgICAgICAgICAgIGxheWVyOiByZWNMYXllcixcbiAgICAgICAgICAgIGN1dFBhcmFtczogbmV3IFRCLkN1dFBhcmFtcygyMCwgMjAsIDEwMCwgMTAwKSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogNixcbiAgICAgICAgICAgIGNvbG9yOiAnI2Y0MCcsXG4gICAgICAgICAgICBzaGFkb3c6IG5ldyBUb3BvYm9hcmQuU2hhZG93KCcjZmZmJywgMCwgMCwgMilcbiAgICAgICAgfSkuZmlsbCgpO1xuXG4gICAgICAgIGNpcmNsZSA9IG5ldyBUb3BvYm9hcmQuQ2lyY2xlKHtcbiAgICAgICAgICAgIGxheWVyOiBjaXJMYXllcixcbiAgICAgICAgICAgIG86IG5ldyBUb3BvYm9hcmQuVmVjdG9yKDEwMCwgMTAwKSxcbiAgICAgICAgICAgIHI6IDIwLFxuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICBjbG9zZVBhdGg6IHRydWUsXG4gICAgICAgICAgICBzaGFkb3c6IG5ldyBUb3BvYm9hcmQuU2hhZG93KCcjZmZmJywgMCwgMCwgNSlcbiAgICAgICAgfSkuc3Ryb2tlKCk7XG5cbiAgICAgICAgcGwgPSBuZXcgVG9wb2JvYXJkLlBvbHlMaW5lKHtcbiAgICAgICAgICAgIGxheWVyOiBwbExheWVyLFxuICAgICAgICAgICAgYXhpczogW25ldyBUQi5WZWN0b3IoMTAsIDEwKSwgbmV3IFRCLlZlY3Rvcig0MCwgMTApLCBuZXcgVEIuVmVjdG9yKDQwLCA0MCksIG5ldyBUQi5WZWN0b3IoMTAsIDQwKV0sXG4gICAgICAgICAgICB3aWR0aDogNSxcbiAgICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgICBjbG9zZVBhdGg6IHRydWVcbiAgICAgICAgfSkuZmlsbCgpO1xuXG4gICAgICAgIHRleHQgJiYgdGV4dC5jbGVhcigpLCByZWNMYXllci5yZW1vdmVHcmFwaCh0ZXh0KTtcbiAgICAgICAgYm9hcmQucmVmcmVzaCh0cnVlKTtcbiAgICB9LFxuICAgIGltZ0xvYWRpbmc6IGZ1bmN0aW9uKGNvdW50LCB0b3RhbCkge1xuICAgICAgICB0ZXh0LmNvbnRlbnQgPSAnbG9hZGluZzogJyArIGNvdW50ICsgJy8nICsgdG90YWw7XG4gICAgfSxcbiAgICBpbWdJbmZvUmVhZHk6IGZ1bmN0aW9uKHRvdGFsKSB7XG4gICAgICAgIHRleHQgPSBuZXcgVG9wb2JvYXJkLlRleHQoe1xuICAgICAgICAgICAgbGF5ZXI6IHJlY0xheWVyLFxuICAgICAgICAgICAgLy8gcG9zaXRpb246IG5ldyBUb3BvYm9hcmQuVmVjdG9yKDMwMCwgMzAwKSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdsb2FkaW5nOiAwLycgKyB0b3RhbCxcbiAgICAgICAgICAgIGZvbnQ6IG5ldyBUQi5Gb250KDE4LCAn5b6u6L2v6ZuF6buRJyksXG4gICAgICAgICAgICBjb2xvcjogJyNmNDAnXG4gICAgICAgIH0pLmZpbGwoKTtcbiAgICB9XG59O1xuXG5sZXQgYm9hcmQgPSBuZXcgVG9wb2JvYXJkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpKTtcblxubGV0IGJrTGF5ZXIgPSBib2FyZC5uZXdMYXllcignYmsnKTtcbmxldCByZWNMYXllciA9IGJvYXJkLm5ld0xheWVyKCdyZWMnKTtcbmxldCBjaXJMYXllciA9IGJvYXJkLm5ld0xheWVyKCdjaXInKTtcbmxldCBwbExheWVyID0gYm9hcmQubmV3TGF5ZXIoJ3BvbHlsaW5lJyk7XG5cbmxldCBhbmltYXRpb24gPSBuZXcgVG9wb2JvYXJkLkFuaW1hdGlvbigpO1xuYW5pbWF0aW9uLm9uZW50ZXJmcmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGFyZ3VtZW50c1swXSk7XG4gICAgLy8gcGxMYXllci5yZWZyZXNoKCk7XG4gICAgLy8gY2lyTGF5ZXIucmVmcmVzaCgpO1xuICAgIC8vIHJlY0xheWVyLnJlZnJlc2goKTtcbiAgICBib2FyZC5yZWZyZXNoKDEpO1xufTtcbmFuaW1hdGlvbi5hZGRUYXNrKGZ1bmN0aW9uKCkge1xuICAgIHBsICYmIChwbC5heGlzWzBdLnggKyssIHBsLmF4aXNbMF0ueSArKyk7XG4gICAgY2lyY2xlICYmIGNpcmNsZS5vLnggKys7XG4gICAgcmVjdCAmJiByZWN0LmN1dFBhcmFtcy55ICsrO1xufSk7XG5hbmltYXRpb24uc3RhcnQoKTtcblxubGV0IGN0eCA9IGJvYXJkLmN0eDtcbi8vIGN0eC5iZWdpblBhdGgoKTtcbi8vIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuLy8gY3R4LmxpbmVXaWR0aCA9IDEwO1xuLy8gY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuLy9cbi8vIGN0eC5tb3ZlVG8oMCwgMCk7XG4vLyBjdHgubGluZVRvKDMwMCwgMzAwKTtcbi8vIGN0eC5saW5lVG8oNDAwLCAyMCk7XG4vLyBjdHgubGluZVRvKDIwLCA0MCk7XG4vLyBjdHguZmlsbCgpO1xuLy8gY3R4LmNsb3NlUGF0aCgpO1xuXG5jb25zb2xlLmxvZyhib2FyZCk7XG4vLyBib2FyZC5jbGVhcigpO1xuLy8gYm9hcmQucmVmcmVzaCgpO1xuXG53aW5kb3cuYm9hcmQgPSBib2FyZDtcbndpbmRvdy5jdHggPSBib2FyZC5jdHg7XG53aW5kb3cuYmtMYXllciA9IGJrTGF5ZXI7XG53aW5kb3cuY2lyTGF5ZXIgPSBjaXJMYXllcjtcbndpbmRvdy5yZWNMYXllciA9IHJlY0xheWVyO1xud2luZG93LnBsTGF5ZXIgPSBwbExheWVyOyJdLCJzb3VyY2VSb290IjoiIn0=