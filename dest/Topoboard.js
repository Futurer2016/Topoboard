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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/drawer/boardcontainer.less":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/drawer/boardcontainer.less ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".board-container {\n  position: relative;\n}\n.board-container .board-canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/base/utils.js":
/*!***************************!*\
  !*** ./src/base/utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 扩展字段方法
 * @param obj
 * @param fields
 */
function extend(obj, fields) {
  for (var key in fields) {
    var value = fields[key];
    obj[key] = value;
  }
}
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
  extend(Child.prototype, childField);
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
/**
 * 根据给定的元素模板
 * 生成新的canvas对象
 * canvas对象与给定的元素模板具有相同的宽度和高度
 * @param ele
 * @param newClassName
 * @returns {HTMLElement}
 */


function newCanvas(ele, newClassName) {
  var cacheCanvas = document.createElement('canvas');

  if (newClassName) {
    var className = cacheCanvas.className;
    cacheCanvas.className += (className === '' ? '' : ' ') + newClassName;
  }

  cacheCanvas.width = ele.width || ele.clientWidth;
  cacheCanvas.height = ele.height || ele.clientHeight;
  return cacheCanvas;
}
/**
 * 将srcCtx画布内容添加到destCtx画布中
 * @param destCtx
 * @param srcCtx
 */


function showCanvas(destCtx, srcCtx) {
  destCtx.drawImage(srcCtx.canvas, 0, 0, destCtx.canvas.width, destCtx.canvas.height);
}

module.exports = {
  extend: extend,
  inherit: inherit,
  ajax: ajax,
  newCanvas: newCanvas,
  showCanvas: showCanvas
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
 * @param interval 每一次回调的间隔时间
 * @constructor
 */


function Animation(interval) {
  this.interval = interval || DEFAULT_INTERVAL;
  this.timer = 0;
  this.state = STATE_INITIAL;
  this.tasks = [];
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

Animation.prototype.addTask = function (task) {
  this.tasks.push(task);
  return this;
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
      var duration = now - startTime;
      animation.tasks.forEach(function (task) {
        return task(duration);
      });
      animation.onenterframe(duration);
      lastTick = now;
    }
  }
}

module.exports = Animation;

/***/ }),

/***/ "./src/drawer/Layer.js":
/*!*****************************!*\
  !*** ./src/drawer/Layer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../base/utils */ "./src/base/utils.js"),
    extend = _require.extend,
    newCanvas = _require.newCanvas,
    showCanvas = _require.showCanvas;
/**
 * 图层对象
 * @param board
 * @param attributes
 * @constructor
 */


function Layer(board, className, alpha) {
  //画板对象
  this.board = board;
  this.className = className; //透明模式

  this.alpha = alpha; //图元队列

  this.graphs = []; //隐藏的图元队列

  this._hide_graphs = [];
  className = 'board-canvas' + (typeof className == 'undefined' ? '' : ' ' + className);
  var canvas = newCanvas(this.board.ele, className);
  var cacheCanvas = newCanvas(canvas, className);

  if (typeof this.alpha == 'undefined' || this.alpha === true) {
    //目标canvas上下文
    this.destCtx = canvas.getContext('2d'); //隐藏canvas上下文

    this.ctx = cacheCanvas.getContext('2d');
  } //不透明的画布
  else {
      //目标canvas上下文
      this.destCtx = canvas.getContext('2d', {
        alpha: false
      }); //隐藏canvas上下文

      this.ctx = cacheCanvas.getContext('2d', {
        alpha: false
      });
    }
}

;
/**
 * 扩展基础方法
 */

extend(Layer.prototype, {
  //获取画板对象
  getBoard: function getBoard() {
    return this.board;
  },
  unshiftLayer: function unshiftLayer() {
    this.board.unshiftLayer(this);
  },
  pushLayer: function pushLayer() {
    this.board.pushLayer(this);
  },
  remove: function remove() {
    this.board.removeLayer(this);
  },
  //将 layer 置顶
  top: function top() {
    this.remove();
    this.pushLayer();
  },
  //将 layer 置底
  bottom: function bottom() {
    this.remove();
    this.unshiftLayer();
  },
  //重置canvas的大小
  resize: function resize(width, height) {
    this.ctx.canvas.width = width || this.ctx.canvas.width;
    this.ctx.canvas.height = height || this.ctx.canvas.height;
    this.destCtx.canvas.width = width || this.destCtx.canvas.width;
    this.destCtx.canvas.height = height || this.destCtx.canvas.height;
  },
  //导出图片
  export: function _export() {
    var imgData = this.destCtx.canvas.toDataURL();
    var img = new Image();
    img.src = imgData;
    return img;
  }
});
/**
 * 扩展绘制类方法
 */

extend(Layer.prototype, {
  //获取绘图画笔
  getContext: function getContext() {
    return this.ctx;
  },
  //清除所有画板元素，清除后使用refresh不能重新渲染
  clear: function clear() {
    this.hide();

    this._hide_graphs.forEach(function (graph) {
      return graph.clear();
    });

    this._hide_graphs = [];
  },
  //擦除画板，擦除后可以使用refresh重新渲染
  clean: function clean() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.destCtx.clearRect(0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
  },
  //刷新
  refresh: function refresh() {
    this.clean(); //刷新图元信息

    this.graphs.forEach(function (graph) {
      return graph.refresh();
    }); //显示图片内容

    showCanvas(this.destCtx, this.ctx);
  },
  //显示
  show: function show() {
    if (this._hide_graphs.length == 0) {
      return;
    }

    this.graphs = this._hide_graphs;
    this._hide_graphs = [];
  },
  //隐藏
  hide: function hide() {
    if (this.graphs.length == 0) {
      return;
    }

    this._hide_graphs = this.graphs;
    this.graphs = [];
  }
});
/**
 * 扩展图元相关方法
 */

extend(Layer.prototype, {
  //获取图元对象
  getGraph: function getGraph(index) {
    return this.graphs[index];
  },
  //获取图元列表
  getGraphs: function getGraphs() {
    return this.graphs;
  },
  //添加图元
  addGraph: function addGraph(item) {
    this.graphs.push(item);
  },
  //删除图元
  removeGraph: function removeGraph(item) {
    this.graphs.splice(this.graphs.indexOf(item), 1);
  }
});
module.exports = Layer;

/***/ }),

/***/ "./src/drawer/Topoboard.js":
/*!*********************************!*\
  !*** ./src/drawer/Topoboard.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// import Text from "./shapes/Text";
// import {extend} from "../base/utils";
// import Vector from "./component/Vector";
// import CutParams from "./component/CutParams";
// import Shadow from "./component/Shadow";
// import ImgManager from "./shapes/ImgManager";
// import Board from "./Board.js";
// import Animation from "./Animation";
// import Layer from "./Layer";
// import Circle from "./shapes/Circle";
// import PolyLine from "./shapes/PolyLine";
// import Rect from "./shapes/Rect";
// import Img from "./shapes/Img";
__webpack_require__(/*! ./boardcontainer.less */ "./src/drawer/boardcontainer.less");

var _require = __webpack_require__(/*! ../base/utils */ "./src/base/utils.js"),
    extend = _require.extend,
    newCanvas = _require.newCanvas,
    showCanvas = _require.showCanvas;

var Vector = __webpack_require__(/*! ./component/Vector */ "./src/drawer/component/Vector.js");

var CutParams = __webpack_require__(/*! ./component/CutParams */ "./src/drawer/component/CutParams.js");

var Shadow = __webpack_require__(/*! ./component/Shadow */ "./src/drawer/component/Shadow.js");

var ImgManager = __webpack_require__(/*! ./shapes/ImgManager */ "./src/drawer/shapes/ImgManager.js");

var Animation = __webpack_require__(/*! ./Animation */ "./src/drawer/Animation.js");

var Layer = __webpack_require__(/*! ./Layer */ "./src/drawer/Layer.js");

var Circle = __webpack_require__(/*! ./shapes/Circle */ "./src/drawer/shapes/Circle.js");

var PolyLine = __webpack_require__(/*! ./shapes/PolyLine */ "./src/drawer/shapes/PolyLine.js");

var Rect = __webpack_require__(/*! ./shapes/Rect */ "./src/drawer/shapes/Rect.js");

var Img = __webpack_require__(/*! ./shapes/Img */ "./src/drawer/shapes/Img.js");

var Text = __webpack_require__(/*! ./shapes/Text */ "./src/drawer/shapes/Text.js");
/**
 * 全局对象
 * @param ele
 * @constructor
 */


function Topoboard(ele) {
  this.ele = ele; //图层

  this.layers = []; //隐藏的图层

  this._hide_layers = [];
  var destLayer = new Layer(this, undefined, 'dest-canvas');
  this.upTree(destLayer);
  this.destCtx = destLayer.destCtx;
}
/**
 * 扩展基础方法
 */


extend(Topoboard.prototype, {
  //调整画板大小
  resize: function resize(width, height, isChangeDom) {
    //修改Dom元素大小
    if (isChangeDom) {
      this.ele.style.width = width + 'px';
      this.ele.style.height = height + 'px';
    }

    this.destCtx.canvas.width = width || this.destCtx.canvas.width;
    this.destCtx.canvas.height = height || this.destCtx.canvas.height;
    this.layers.forEach(function (layer) {
      return layer.resize(width, height);
    });
  },
  //导出图片
  export: function _export() {
    //导出画板数据
    var imgData = this.destCtx.canvas.toDataURL();
    var img = new Image();
    img.src = imgData;
    return img;
  }
});
/**
 * 扩展图层相关方法
 */

extend(Topoboard.prototype, {
  //获取图层数组
  getLayers: function getLayers() {
    return this.layers;
  },
  //获取新的图层对象,与 addLayer 不能对相同layer对象使用
  newLayer: function newLayer(className) {
    var layer = new Layer(this, className, arguments[1]);
    this.pushLayer(layer);
    return layer;
  },
  //canvas 上树
  upTree: function upTree(layer, isBefore) {
    //在前面插入子节点，要求元素已存在其他子节点
    if (isBefore && this.ele.children.length) {
      this.ele.insertBefore(layer.destCtx.canvas, this.ele.children[0]);
    } else {
      this.ele.append(layer.destCtx.canvas);
    }
  },
  //canvas 下树
  downTree: function downTree(layer) {
    layer.destCtx.canvas.remove();
  },
  //在队列开始插入图层
  unshiftLayer: function unshiftLayer(layer) {
    if (this.layers.indexOf(layer) > -1) {
      return;
    }

    this.layers.unshift(layer); //canvas 上树
    // this.upTree(layer, true);
  },
  //从队列开始移除图层
  shiftLayer: function shiftLayer() {
    //末尾移除
    var layer = this.layers.shift(); //canvas 下树
    // this.downTree(layer);

    return layer;
  },
  //添加已存在的图层对象,与 newLayer 不能对相同layer对象使用
  pushLayer: function pushLayer(layer) {
    if (this.layers.indexOf(layer) > -1) {
      return;
    } //加入显示队列


    this.layers.push(layer); //canvas 上树
    // this.upTree(layer);
  },
  //从队列末尾移除图层
  popLayer: function popLayer() {
    //末尾移除
    var layer = this.layers.pop(); //canvas 下树
    // this.downTree(layer);

    return layer;
  },
  //移除指定的图层对象
  removeLayer: function removeLayer(layer) {
    //离开显示和隐藏队列
    this.layers.splice(this.layers.indexOf(layer), 1);

    this._hide_layers.splice(this.layers.indexOf(layer), 1); //canvas 下树
    // this.downTree(layer);

  }
});
/**
 * 扩展绘制类方法
 */

extend(Topoboard.prototype, {
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
  //清除所有画板元素，清除后使用refresh不能重新渲染
  clear: function clear() {
    this.hide();

    this._hide_layers.forEach(function (layer) {
      return layer.clear();
    });
  },
  //擦除画板，擦除后可以使用refresh重新渲染
  clean: function clean(isLayerClean) {
    isLayerClean && this.layers.forEach(function (layer) {
      return layer.clean();
    });
    this.destCtx.clearRect(0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
  },
  //刷新画板
  refresh: function refresh(isLayerRefresh) {
    var _this = this;

    this.clean(isLayerRefresh); //刷新图层

    isLayerRefresh && this.layers.forEach(function (layer) {
      return layer.refresh();
    }); //刷新画板

    this.layers.forEach(function (layer) {
      showCanvas(_this.destCtx, layer.destCtx);
    });
  }
});
/**
 * 扩展静态属性
 */

extend(Topoboard, {
  Animation: Animation,
  Layer: Layer,
  Circle: Circle,
  PolyLine: PolyLine,
  Rect: Rect,
  Img: Img,
  Text: Text,
  ImgManager: ImgManager,
  Vector: Vector,
  CutParams: CutParams,
  Shadow: Shadow
});
/**
 * 兼容AMD模式
 */

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Topoboard;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
/**
 * 暴露全局变量
 */


if (window) {
  window['TB'] = window['Topoboard'] = Topoboard;
}

module.exports = Topoboard;

/***/ }),

/***/ "./src/drawer/boardcontainer.less":
/*!****************************************!*\
  !*** ./src/drawer/boardcontainer.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./boardcontainer.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/drawer/boardcontainer.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/drawer/component/CutParams.js":
/*!*******************************************!*\
  !*** ./src/drawer/component/CutParams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Vector = __webpack_require__(/*! ./Vector */ "./src/drawer/component/Vector.js");

function CutParams(x, y, w, h) {
  Vector.call(this, x, y);
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
/***/ (function(module, exports, __webpack_require__) {

var Vector = __webpack_require__(/*! ./Vector */ "./src/drawer/component/Vector.js");

function Shadow(x, y, color, blur) {
  Vector.call(this, x, y);
  this.color = color;
  this.blur = blur;
}

module.exports = Shadow;

/***/ }),

/***/ "./src/drawer/component/Vector.js":
/*!****************************************!*\
  !*** ./src/drawer/component/Vector.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

module.exports = Vector;

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
      ctx.arc(self.o.x, self.o.y, self.r, 0, Math.PI * 2, true);
      ctx.fillStyle = self.color;
      self.closePath && ctx.closePath();
    });
    this.push('fill');
    return this;
  },
  stroke: function stroke() {
    var self = this;
    this.drawer.stroke(function (ctx) {
      ctx.arc(self.o.x, self.o.y, self.r, 0, Math.PI * 2, true);
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

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    extend = _require.extend;

var Drawer = __webpack_require__(/*! ./Drawer */ "./src/drawer/shapes/Drawer.js");

var Shadow = __webpack_require__(/*! ../component/Shadow */ "./src/drawer/component/Shadow.js");

function Graph(_ref) {
  var layer = _ref.layer,
      closePath = _ref.closePath,
      color = _ref.color,
      shadow = _ref.shadow;
  this.layer = layer;
  this.drawer = new Drawer(this, this.layer.getContext());
  this.methods = [];
  this._hide_methods = [];
  this.closePath = closePath;
  this.color = color;
  this.shadow = shadow || new Shadow(0, '#000', 0, 0);
  this.layer.addGraph(this);
}

extend(Graph.prototype, {
  getLayer: function getLayer() {
    return this.layer;
  },
  push: function push(method) {
    this.methods.push(method);
  }
});
/**
 * 扩展绘图部分方法
 */

extend(Graph.prototype, {
  //清除所有画板元素，清除后使用refresh不能重新渲染
  clear: function clear() {
    this.hide();
    this._hide_methods = [];
  },
  //调用当前元素的记录方法，重新绘制图形
  refresh: function refresh() {
    var _this = this;

    this.methods.forEach(function (value) {
      _this[value]();

      _this.methods.pop();
    });
  },
  show: function show() {
    if (this._hide_methods.length == 0) {
      return;
    }

    this._hide_methods = this.methods;
    this.methods = [];
  },
  hide: function hide() {
    if (this.methods.length == 0) {
      return;
    }

    this.methods = this._hide_methods;
    this._hide_methods = [];
  }
});
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
    if (this.src) {
      this.drawer.ctx.drawImage(this.image, this.src.x, this.src.y, this.src.w, this.src.h, this.dst.x, this.dst.y, this.dst.w, this.dst.h);
    } else if (this.dst) {
      this.drawer.ctx.drawImage(this.image, this.dst.x, this.dst.y, this.dst.w, this.dst.h);
    } else {
      this.drawer.ctx.drawImage(this.image, 0, 0, this.layer.getContext().canvas.width, this.layer.getContext().canvas.height);
    }

    this.push('draw');
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
    extend = _require.extend,
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
/**
 * 扩展静态常量
 */


extend(ImgManager, {
  STATE_INITIAL: STATE_INITIAL,
  STATE_RESOURCE_INFO_PRE_LOAD: STATE_RESOURCE_INFO_PRE_LOAD,
  STATE_RESOURCE_INFO_READY: STATE_RESOURCE_INFO_READY,
  STATE_RESOURCE_LOADING: STATE_RESOURCE_LOADING,
  STATE_RESOURCE_READY: STATE_RESOURCE_READY
});
extend(ImgManager.prototype, {
  load: function load() {
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
  }
});
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

var Vector = __webpack_require__(/*! ../component/Vector */ "./src/drawer/component/Vector.js");

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
  this.position = position || new Vector(layer.board.getCanvas().width, layer.board.getCanvas().height);
  this.font = font;
}

inherit(Text, Graph, {
  fill: function fill() {
    var self = this,
        ctx = this.drawer.ctx;
    ctx.font = self.font;
    ctx.fillStyle = this.color;
    ctx.fillText(self.content, self.position.x, self.position.y);
    this.closePath && ctx.closePath();
    this.push('fill');
    return this;
  }
});
module.exports = Text;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9ib2FyZGNvbnRhaW5lci5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9MYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL1RvcG9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL2JvYXJkY29udGFpbmVyLmxlc3M/ZTg2YSIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL2NvbXBvbmVudC9DdXRQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9jb21wb25lbnQvU2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvY29tcG9uZW50L1ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0ltZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9JbWdNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL1BvbHlMaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL1JlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvVGV4dC5qcyJdLCJuYW1lcyI6WyJleHRlbmQiLCJvYmoiLCJmaWVsZHMiLCJrZXkiLCJ2YWx1ZSIsImluaGVyaXQiLCJDaGlsZCIsIlBhcmVudCIsImNoaWxkRmllbGQiLCJGIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImdldFhociIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsImdldFF1ZXJ5U3RyaW5nIiwiZGF0YSIsInJldCIsImhhc093blByb3BlcnR5Iiwic3Vic3RyIiwibGVuZ3RoIiwiYWpheCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJ0eXBlIiwidG9VcHBlckNhc2UiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInF1ZXJ5U3RyIiwib3BlbiIsInNlbmQiLCJuZXdDYW52YXMiLCJlbGUiLCJuZXdDbGFzc05hbWUiLCJjYWNoZUNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzaG93Q2FudmFzIiwiZGVzdEN0eCIsInNyY0N0eCIsImRyYXdJbWFnZSIsImNhbnZhcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJERUZBVUxUX0lOVEVSVkFMIiwiU1RBVEVfSU5JVElBTCIsIlNUQVRFX1NUQVJUIiwiU1RBVEVfU1RPUCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpbmRvdyIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJpbnRlcnZhbCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsIm9DYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwiQW5pbWF0aW9uIiwidGltZXIiLCJzdGF0ZSIsInRhc2tzIiwib25lbnRlcmZyYW1lIiwidGltZSIsInN0YXJ0Iiwic3RhcnRBbmltYXRpb24iLCJEYXRlIiwicmVzdGFydCIsImR1ciIsInN0b3AiLCJzdGFydFRpbWUiLCJhZGRUYXNrIiwidGFzayIsInB1c2giLCJhbmltYXRpb24iLCJsYXN0VGljayIsIm5leHRUaWNrIiwibm93IiwiZHVyYXRpb24iLCJmb3JFYWNoIiwicmVxdWlyZSIsIkxheWVyIiwiYm9hcmQiLCJhbHBoYSIsImdyYXBocyIsIl9oaWRlX2dyYXBocyIsImdldENvbnRleHQiLCJjdHgiLCJnZXRCb2FyZCIsInVuc2hpZnRMYXllciIsInB1c2hMYXllciIsInJlbW92ZSIsInJlbW92ZUxheWVyIiwidG9wIiwiYm90dG9tIiwicmVzaXplIiwiZXhwb3J0IiwiaW1nRGF0YSIsInRvRGF0YVVSTCIsImltZyIsIkltYWdlIiwic3JjIiwiY2xlYXIiLCJoaWRlIiwiZ3JhcGgiLCJjbGVhbiIsImNsZWFyUmVjdCIsInJlZnJlc2giLCJzaG93IiwiZ2V0R3JhcGgiLCJpbmRleCIsImdldEdyYXBocyIsImFkZEdyYXBoIiwiaXRlbSIsInJlbW92ZUdyYXBoIiwic3BsaWNlIiwiaW5kZXhPZiIsIlZlY3RvciIsIkN1dFBhcmFtcyIsIlNoYWRvdyIsIkltZ01hbmFnZXIiLCJDaXJjbGUiLCJQb2x5TGluZSIsIlJlY3QiLCJJbWciLCJUZXh0IiwiVG9wb2JvYXJkIiwibGF5ZXJzIiwiX2hpZGVfbGF5ZXJzIiwiZGVzdExheWVyIiwidW5kZWZpbmVkIiwidXBUcmVlIiwiaXNDaGFuZ2VEb20iLCJzdHlsZSIsImxheWVyIiwiZ2V0TGF5ZXJzIiwibmV3TGF5ZXIiLCJhcmd1bWVudHMiLCJpc0JlZm9yZSIsImNoaWxkcmVuIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kIiwiZG93blRyZWUiLCJ1bnNoaWZ0Iiwic2hpZnRMYXllciIsInNoaWZ0IiwicG9wTGF5ZXIiLCJwb3AiLCJpc0xheWVyQ2xlYW4iLCJpc0xheWVyUmVmcmVzaCIsImRlZmluZSIsIngiLCJ5IiwidyIsImgiLCJjYWxsIiwiY29sb3IiLCJibHVyIiwiR3JhcGgiLCJvIiwiciIsImNsb3NlUGF0aCIsInNoYWRvdyIsImZpbGwiLCJzZWxmIiwiZHJhd2VyIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwic3Ryb2tlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJhZGRTaGFkb3ciLCJzaGFkb3dCbHVyIiwic2hhZG93Q29sb3IiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsIkRyYXdlciIsImRyYXciLCJleGVjdXRvciIsImJlZ2luUGF0aCIsIm1ldGhvZHMiLCJfaGlkZV9tZXRob2RzIiwiZ2V0TGF5ZXIiLCJpbWFnZSIsImRzdCIsIlNUQVRFX1JFU09VUkNFX0lORk9fUFJFX0xPQUQiLCJTVEFURV9SRVNPVVJDRV9JTkZPX1JFQURZIiwiU1RBVEVfUkVTT1VSQ0VfTE9BRElORyIsIlNUQVRFX1JFU09VUkNFX1JFQURZIiwiaW1nSnNvblVybCIsImltZ3MiLCJjb3VudCIsImxvYWQiLCJpbWFnZXMiLCJuYW1lIiwib25sb2FkIiwiYXhpcyIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVDYXAiLCJjdXRQYXJhbXMiLCJyZWN0IiwicG9zaXRpb24iLCJjb250ZW50IiwiZm9udCIsImdldENhbnZhcyIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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O0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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QjtBQUFDckIsU0FBSyxFQUFMQSxLQUFEO0FBQVEyQixhQUFTLEVBQUUsSUFBbkI7QUFBeUJMLFNBQUssRUFBTEEsS0FBekI7QUFBZ0NNLFVBQU0sRUFBTkE7QUFBaEMsR0FBakI7QUFFQSxPQUFLMkMsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0QsUUFBTCxHQUFnQkEsUUFBUSxJQUFJLElBQUl2RixNQUFKLENBQVdpQixLQUFLLENBQUNwRCxLQUFOLENBQVk2SCxTQUFaLEdBQXdCbEwsS0FBbkMsRUFBMEN5RyxLQUFLLENBQUNwRCxLQUFOLENBQVk2SCxTQUFaLEdBQXdCaEwsTUFBbEUsQ0FBNUI7QUFDQSxPQUFLK0ssSUFBTCxHQUFZQSxJQUFaO0FBQ0g7O0FBRUQ1TixPQUFPLENBQUMySSxJQUFELEVBQU9pQyxLQUFQLEVBQWM7QUFDakJLLE1BQUksRUFBRSxnQkFBVztBQUNiLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQUEsUUFBaUI3RSxHQUFHLEdBQUcsS0FBSzhFLE1BQUwsQ0FBWTlFLEdBQW5DO0FBQ0FBLE9BQUcsQ0FBQ3VILElBQUosR0FBVzFDLElBQUksQ0FBQzBDLElBQWhCO0FBQ0F2SCxPQUFHLENBQUNrRixTQUFKLEdBQWdCLEtBQUtiLEtBQXJCO0FBQ0FyRSxPQUFHLENBQUN5SCxRQUFKLENBQWE1QyxJQUFJLENBQUN5QyxPQUFsQixFQUEyQnpDLElBQUksQ0FBQ3dDLFFBQUwsQ0FBY3JELENBQXpDLEVBQTRDYSxJQUFJLENBQUN3QyxRQUFMLENBQWNwRCxDQUExRDtBQUNBLFNBQUtTLFNBQUwsSUFBa0IxRSxHQUFHLENBQUMwRSxTQUFKLEVBQWxCO0FBRUEsU0FBS3hGLElBQUwsQ0FBVSxNQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFWZ0IsQ0FBZCxDQUFQO0FBYUFuQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJzRixJQUFqQixDIiwiZmlsZSI6IlRvcG9ib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2RyYXdlci9Ub3BvYm9hcmQuanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZC1jYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qKlxuICog5omp5bGV5a2X5q615pa55rOVXG4gKiBAcGFyYW0gb2JqXG4gKiBAcGFyYW0gZmllbGRzXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChvYmosIGZpZWxkcykge1xuICAgIGZvcihsZXQga2V5IGluIGZpZWxkcykge1xuICAgICAgICBsZXQgdmFsdWUgPSBmaWVsZHNba2V5XTtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG59XG5cbi8qKlxuICog57un5om/5pa55rOVXG4gKiBAcGFyYW0gQ2hpbGRcbiAqIEBwYXJhbSBQYXJlbnRcbiAqIEBwYXJhbSBjaGlsZEZpZWxkXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQoQ2hpbGQsIFBhcmVudCwgY2hpbGRGaWVsZCkge1xuXHRsZXQgRiA9IGZ1bmN0aW9uKCkge307XG4gICAgRi5wcm90b3R5cGUgPSBQYXJlbnQucHJvdG90eXBlO1xuXHRDaGlsZC5wcm90b3R5cGUgPSBuZXcgRigpO1xuICAgIGV4dGVuZChDaGlsZC5wcm90b3R5cGUsIGNoaWxkRmllbGQpO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDaGlsZC5wcm90b3R5cGUsIHtcblx0ICAgICdjb25zdHJ1Y3Rvcic6IHtcblx0ICAgICAgICB2YWx1ZTogQ2hpbGQsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiDojrflj5Z4aHLlr7nosaFcbiAqL1xuZnVuY3Rpb24gZ2V0WGhyKCkge1xuICAgIGxldCB4aHI7XG4gICAgaWYoWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYoQWN0aXZlWE9iamVjdCkge1xuICAgICAgICB4aHIgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geGhyO1xufVxuXG4vKipcbiAqIOiOt+WPluafpeivouWtl+espuS4slxuICogQHBhcmFtIGRhdGFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldFF1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICBpZighIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQgcmV0ID0gJz8nO1xuICAgIGZvcihsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0ICs9IGtleSArICc9JyArIHZhbHVlICsgJyYnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQuc3Vic3RyKDAsIHJldC5sZW5ndGggLSAxKTtcbn1cblxuLyoqXG4gKiBhamF4572R57uc6K+35rGC5pa55rOVXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gbWV0aG9kXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHN1Y2Nlc3NcbiAqIEBwYXJhbSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGFqYXgoe3VybCwgbWV0aG9kID0gJ0dFVCcsIGRhdGEgPSAnJywgc3VjY2VzcywgdHlwZSA9ICdqc29uJ30pIHtcbiAgICBsZXQgeGhyID0gZ2V0WGhyKCk7XG4gICAgbWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ1BPU1QnICYmIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAneC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICBzdWNjZXNzKHR5cGUgPT0gJ2pzb24nPyBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpOiB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcXVlcnlTdHIgPSBnZXRRdWVyeVN0cmluZyhkYXRhKTtcbiAgICBpZihtZXRob2QudG9VcHBlckNhc2UoKSA9PSAnUE9TVCcpIHtcbiAgICAgICAgZGF0YSA9IHF1ZXJ5U3RyO1xuICAgIH1cbiAgICBlbHNlIGlmKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdHRVQnKSB7XG4gICAgICAgIHVybCArPSBxdWVyeVN0cjtcbiAgICAgICAgZGF0YSA9ICcnO1xuICAgIH1cbiAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZW5kKGRhdGEpO1xufVxuXG4vKipcbiAqIOagueaNrue7meWumueahOWFg+e0oOaooeadv1xuICog55Sf5oiQ5paw55qEY2FudmFz5a+56LGhXG4gKiBjYW52YXPlr7nosaHkuI7nu5nlrprnmoTlhYPntKDmqKHmnb/lhbfmnInnm7jlkIznmoTlrr3luqblkozpq5jluqZcbiAqIEBwYXJhbSBlbGVcbiAqIEBwYXJhbSBuZXdDbGFzc05hbWVcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gbmV3Q2FudmFzKGVsZSwgbmV3Q2xhc3NOYW1lKSB7XG4gICAgbGV0IGNhY2hlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgaWYobmV3Q2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBjYWNoZUNhbnZhcy5jbGFzc05hbWU7XG4gICAgICAgIGNhY2hlQ2FudmFzLmNsYXNzTmFtZSArPSAoY2xhc3NOYW1lID09PSAnJz8gJyc6ICcgJykgKyBuZXdDbGFzc05hbWU7XG4gICAgfVxuICAgIGNhY2hlQ2FudmFzLndpZHRoID0gZWxlLndpZHRoIHx8IGVsZS5jbGllbnRXaWR0aDtcbiAgICBjYWNoZUNhbnZhcy5oZWlnaHQgPSBlbGUuaGVpZ2h0IHx8IGVsZS5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gY2FjaGVDYW52YXM7XG59XG5cbi8qKlxuICog5bCGc3JjQ3R455S75biD5YaF5a655re75Yqg5YiwZGVzdEN0eOeUu+W4g+S4rVxuICogQHBhcmFtIGRlc3RDdHhcbiAqIEBwYXJhbSBzcmNDdHhcbiAqL1xuZnVuY3Rpb24gc2hvd0NhbnZhcyhkZXN0Q3R4LCBzcmNDdHgpIHtcbiAgICBkZXN0Q3R4LmRyYXdJbWFnZShzcmNDdHguY2FudmFzLCAwLCAwLCBkZXN0Q3R4LmNhbnZhcy53aWR0aCwgZGVzdEN0eC5jYW52YXMuaGVpZ2h0KTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBleHRlbmQsXG4gICAgaW5oZXJpdCxcbiAgICBhamF4LFxuICAgIG5ld0NhbnZhcyxcbiAgICBzaG93Q2FudmFzXG59OyIsImNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSAxMDAwIC8gNjA7XG4vL+WIneWni+WMlueKtuaAgVxuY29uc3QgU1RBVEVfSU5JVElBTCA9IDA7XG4vL+W8gOWni+eKtuaAgVxuY29uc3QgU1RBVEVfU1RBUlQgPSAxO1xuLy/lgZzmraLnirbmgIFcbmNvbnN0IFNUQVRFX1NUT1AgPSAyO1xuLyoqXG4gKiBhbmltYXRpb25cbiAqL1xuY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvL+aJgOaciemDveS4jeaUr+aMge+8jOeUqHNldFRpbWVvdXTlhbzlrrlcblx0XHRmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgKGNhbGxiYWNrLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwpKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxuXHRcdH07XG59KSgpO1xuXG4vKipcbiAqIGNhbmNlbCByYWZcbiAqL1xuY29uc3QgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChpZCk7XG5cdFx0fTtcbn0pKCk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBib2FyZFxuICogQHBhcmFtIGludGVydmFsIOavj+S4gOasoeWbnuiwg+eahOmXtOmalOaXtumXtFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEFuaW1hdGlvbihpbnRlcnZhbCkge1xuXHR0aGlzLmludGVydmFsID0gaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcblx0dGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0lOSVRJQUw7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xufVxuXG4vKipcbiAqIOaXtumXtOi9tOS4iuavj+S4gOasoeWbnuiwg+aJp+ihjOeahOWHveaVsFxuICogQHBhcmFtIHRpbWUg5LuO5Yqo55S75byA5aeL5Yiw5b2T5YmN5omn6KGM55qE5pe26Ze0XG4gKi9cbkFuaW1hdGlvbi5wcm90b3R5cGUub25lbnRlcmZyYW1lID0gZnVuY3Rpb24odGltZSkge1xuXG59O1xuLyoqXG4gKiDlvIDlp4vliqjnlLtcbiAqL1xuQW5pbWF0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9TVEFSVClcbiAgICAgICAgcmV0dXJuO1xuICAgIHRoaXMuc3RhdGUgPSBTVEFURV9TVEFSVDtcblxuICAgIHN0YXJ0QW5pbWF0aW9uKHRoaXMsICtuZXcgRGF0ZSgpKTtcbn07XG5cbi8qKlxuICog6YeN5paw5byA5aeL5Yqo55S7XG4gKi9cbkFuaW1hdGlvbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfU1RBUlQpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIXRoaXMuZHVyIHx8ICF0aGlzLmludGVydmFsKVxuICAgICAgICByZXR1cm47XG5cbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfU1RBUlQ7XG5cbiAgICAvL+aXoOe8nei/nuaOpeWBnOatouWKqOeUu+eahOeKtuaAgVxuICAgIHN0YXJ0QW5pbWF0aW9uKHRoaXMsICtuZXcgRGF0ZSgpIC0gdGhpcy5kdXIpO1xufTtcblxuLyoqXG4gKiDlgZzmraLliqjnlLtcbiAqL1xuQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFNUQVRFX1NUQVJUKVxuICAgICAgICByZXR1cm47XG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1NUT1A7XG5cbiAgICAvL+WmguaenOWKqOeUu+W8gOWni+i/h++8jOWImeiusOW9leWKqOeUu+S7juW8gOWni+WIsOW9k+WJjeaJgOe7j+WOhueahOaXtumXtFxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSkge1xuICAgICAgICB0aGlzLmR1ciA9ICtuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xufTtcblxuQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiDml7bpl7TovbTliqjnlLvlkK/liqjlh73mlbBcbiAqIEBwYXJhbSBhbmltYXRpb24g5pe26Ze06L205a6e5L6LXG4gKiBAcGFyYW0gc3RhcnRUaW1lIOWKqOeUu+W8gOWni+aXtumXtOaIs1xuICovXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbihhbmltYXRpb24sIHN0YXJ0VGltZSkge1xuICAgIC8v6K6w5b2V5LiK5LiA5qyh5Zue6LCD55qE5pe26Ze05oizXG4gICAgbGV0IGxhc3RUaWNrID0gK25ldyBEYXRlKCk7XG5cbiAgICBhbmltYXRpb24uc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgIG5leHRUaWNrLmludGVydmFsID0gYW5pbWF0aW9uLmludGVydmFsO1xuICAgIG5leHRUaWNrKCk7XG5cbiAgICAvKipcbiAgICAgKiDmr4/kuIDluKfmiafooYznmoTlh73mlbBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgICAgICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGFuaW1hdGlvbi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShuZXh0VGljayk7XG5cbiAgICAgICAgLy/lpoLmnpzlvZPliY3ml7bpl7TkuI7kuIrkuIDmrKHlm57osIPnmoTml7bpl7TmiLPnm7jlt67lpKfkuo7miJHku6zorr7nva7nmoTpl7TpmpTml7bpl7TvvIzooajnpLrlj6/ku6XmiafooYzkuIDmrKHlm57osIPlh73mlbDjgIJcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RUaWNrID49IGFuaW1hdGlvbi5pbnRlcnZhbCkge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gbm93IC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrKGR1cmF0aW9uKSk7XG4gICAgICAgICAgICBhbmltYXRpb24ub25lbnRlcmZyYW1lKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGxhc3RUaWNrID0gbm93O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1hdGlvbjsiLCJjb25zdCB7ZXh0ZW5kLCBuZXdDYW52YXMsIHNob3dDYW52YXN9ID0gcmVxdWlyZSgnLi4vYmFzZS91dGlscycpO1xuXG4vKipcbiAqIOWbvuWxguWvueixoVxuICogQHBhcmFtIGJvYXJkXG4gKiBAcGFyYW0gYXR0cmlidXRlc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExheWVyKGJvYXJkLCBjbGFzc05hbWUsIGFscGhhKSB7XG4gICAgLy/nlLvmnb/lr7nosaFcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG5cbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAvL+mAj+aYjuaooeW8j1xuXHR0aGlzLmFscGhhID0gYWxwaGE7XG5cdC8v5Zu+5YWD6Zif5YiXXG5cdHRoaXMuZ3JhcGhzID0gW107XG5cdC8v6ZqQ6JeP55qE5Zu+5YWD6Zif5YiXXG5cdHRoaXMuX2hpZGVfZ3JhcGhzID0gW107XG5cblx0Y2xhc3NOYW1lID0gJ2JvYXJkLWNhbnZhcycgKyAodHlwZW9mIGNsYXNzTmFtZSA9PSAndW5kZWZpbmVkJz8gJycgOiAnICcgKyBjbGFzc05hbWUpO1xuICAgIGxldCBjYW52YXMgPSBuZXdDYW52YXModGhpcy5ib2FyZC5lbGUsIGNsYXNzTmFtZSk7XG4gICAgbGV0IGNhY2hlQ2FudmFzID0gbmV3Q2FudmFzKGNhbnZhcywgY2xhc3NOYW1lKTtcbiAgICBpZih0eXBlb2YgdGhpcy5hbHBoYSA9PSAndW5kZWZpbmVkJyB8fCB0aGlzLmFscGhhID09PSB0cnVlKSB7XG4gICAgICAgIC8v55uu5qCHY2FudmFz5LiK5LiL5paHXG4gICAgICAgIHRoaXMuZGVzdEN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAvL+makOiXj2NhbnZhc+S4iuS4i+aWh1xuICAgICAgICB0aGlzLmN0eCA9IGNhY2hlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICAgIC8v5LiN6YCP5piO55qE55S75biDXG4gICAgZWxzZSB7XG4gICAgICAgIC8v55uu5qCHY2FudmFz5LiK5LiL5paHXG4gICAgICAgIHRoaXMuZGVzdEN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHthbHBoYTogZmFsc2V9KTtcbiAgICAgICAgLy/pmpDol49jYW52YXPkuIrkuIvmlodcbiAgICAgICAgdGhpcy5jdHggPSBjYWNoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcsIHthbHBoYTogZmFsc2V9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIOaJqeWxleWfuuehgOaWueazlVxuICovXG5leHRlbmQoTGF5ZXIucHJvdG90eXBlLCB7XG4gICAgLy/ojrflj5bnlLvmnb/lr7nosaFcbiAgICBnZXRCb2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH0sXG4gICAgdW5zaGlmdExheWVyKCkge1xuICAgICAgICB0aGlzLmJvYXJkLnVuc2hpZnRMYXllcih0aGlzKTtcbiAgICB9LFxuICAgIHB1c2hMYXllcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5wdXNoTGF5ZXIodGhpcyk7XG4gICAgfSxcbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucmVtb3ZlTGF5ZXIodGhpcyk7XG4gICAgfSxcbiAgICAvL+WwhiBsYXllciDnva7pobZcbiAgICB0b3AoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMucHVzaExheWVyKCk7XG4gICAgfSxcbiAgICAvL+WwhiBsYXllciDnva7lupVcbiAgICBib3R0b20oKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMudW5zaGlmdExheWVyKCk7XG4gICAgfSxcbiAgICAvL+mHjee9rmNhbnZhc+eahOWkp+Wwj1xuICAgIHJlc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmN0eC5jYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5jdHguY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5kZXN0Q3R4LmNhbnZhcy53aWR0aCA9IHdpZHRoIHx8IHRoaXMuZGVzdEN0eC5jYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuZGVzdEN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuZGVzdEN0eC5jYW52YXMuaGVpZ2h0O1xuICAgIH0sXG5cdC8v5a+85Ye65Zu+54mHXG5cdGV4cG9ydCgpIHtcbiAgICAgICAgbGV0IGltZ0RhdGEgPSB0aGlzLmRlc3RDdHguY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBpbWdEYXRhO1xuXG4gICAgICAgIHJldHVybiBpbWc7XG5cdH1cbn0pO1xuXG4vKipcbiAqIOaJqeWxlee7mOWItuexu+aWueazlVxuICovXG5leHRlbmQoTGF5ZXIucHJvdG90eXBlLCB7XG4gICAgLy/ojrflj5bnu5jlm77nlLvnrJRcbiAgICBnZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdHg7XG4gICAgfSxcbiAgICAvL+a4hemZpOaJgOacieeUu+adv+WFg+e0oO+8jOa4hemZpOWQjuS9v+eUqHJlZnJlc2jkuI3og73ph43mlrDmuLLmn5NcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLl9oaWRlX2dyYXBocy5mb3JFYWNoKGdyYXBoID0+IGdyYXBoLmNsZWFyKCkpO1xuICAgICAgICB0aGlzLl9oaWRlX2dyYXBocyA9IFtdO1xuICAgIH0sXG4gICAgLy/mk6bpmaTnlLvmnb/vvIzmk6bpmaTlkI7lj6/ku6Xkvb/nlKhyZWZyZXNo6YeN5paw5riy5p+TXG4gICAgY2xlYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jdHguY2FudmFzLndpZHRoLCB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kZXN0Q3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoLCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCk7XG4gICAgfSxcbiAgICAvL+WIt+aWsFxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNsZWFuKCk7XG4gICAgICAgIC8v5Yi35paw5Zu+5YWD5L+h5oGvXG4gICAgICAgIHRoaXMuZ3JhcGhzLmZvckVhY2goZ3JhcGggPT4gZ3JhcGgucmVmcmVzaCgpKTtcbiAgICAgICAgLy/mmL7npLrlm77niYflhoXlrrlcbiAgICAgICAgc2hvd0NhbnZhcyh0aGlzLmRlc3RDdHgsIHRoaXMuY3R4KTtcbiAgICB9LFxuXHQvL+aYvuekulxuICAgIHNob3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLl9oaWRlX2dyYXBocy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuZ3JhcGhzID0gdGhpcy5faGlkZV9ncmFwaHM7XG4gICAgICAgIHRoaXMuX2hpZGVfZ3JhcGhzID0gW107XG4gICAgfSxcblx0Ly/pmpDol49cbiAgICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5ncmFwaHMubGVuZ3RoID09IDApIHtyZXR1cm47fVxuICAgICAgICB0aGlzLl9oaWRlX2dyYXBocyA9IHRoaXMuZ3JhcGhzO1xuICAgICAgICB0aGlzLmdyYXBocyA9IFtdO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOaJqeWxleWbvuWFg+ebuOWFs+aWueazlVxuICovXG5leHRlbmQoTGF5ZXIucHJvdG90eXBlLCB7XG4gICAgLy/ojrflj5blm77lhYPlr7nosaFcbiAgICBnZXRHcmFwaDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhzW2luZGV4XTtcbiAgICB9LFxuICAgIC8v6I635Y+W5Zu+5YWD5YiX6KGoXG4gICAgZ2V0R3JhcGhzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xuICAgIH0sXG4gICAgLy/mt7vliqDlm77lhYNcbiAgICBhZGRHcmFwaDogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB0aGlzLmdyYXBocy5wdXNoKGl0ZW0pO1xuICAgIH0sXG4gICAgLy/liKDpmaTlm77lhYNcbiAgICByZW1vdmVHcmFwaDogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB0aGlzLmdyYXBocy5zcGxpY2UodGhpcy5ncmFwaHMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXI7IiwiLy8gaW1wb3J0IFRleHQgZnJvbSBcIi4vc2hhcGVzL1RleHRcIjtcbi8vIGltcG9ydCB7ZXh0ZW5kfSBmcm9tIFwiLi4vYmFzZS91dGlsc1wiO1xuLy8gaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9jb21wb25lbnQvVmVjdG9yXCI7XG4vLyBpbXBvcnQgQ3V0UGFyYW1zIGZyb20gXCIuL2NvbXBvbmVudC9DdXRQYXJhbXNcIjtcbi8vIGltcG9ydCBTaGFkb3cgZnJvbSBcIi4vY29tcG9uZW50L1NoYWRvd1wiO1xuLy8gaW1wb3J0IEltZ01hbmFnZXIgZnJvbSBcIi4vc2hhcGVzL0ltZ01hbmFnZXJcIjtcbi8vIGltcG9ydCBCb2FyZCBmcm9tIFwiLi9Cb2FyZC5qc1wiO1xuLy8gaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi9BbmltYXRpb25cIjtcbi8vIGltcG9ydCBMYXllciBmcm9tIFwiLi9MYXllclwiO1xuLy8gaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9zaGFwZXMvQ2lyY2xlXCI7XG4vLyBpbXBvcnQgUG9seUxpbmUgZnJvbSBcIi4vc2hhcGVzL1BvbHlMaW5lXCI7XG4vLyBpbXBvcnQgUmVjdCBmcm9tIFwiLi9zaGFwZXMvUmVjdFwiO1xuLy8gaW1wb3J0IEltZyBmcm9tIFwiLi9zaGFwZXMvSW1nXCI7XG5yZXF1aXJlKCcuL2JvYXJkY29udGFpbmVyLmxlc3MnKTtcblxuY29uc3Qge2V4dGVuZCwgbmV3Q2FudmFzLCBzaG93Q2FudmFzfSA9IHJlcXVpcmUoJy4uL2Jhc2UvdXRpbHMnKTtcbmNvbnN0IFZlY3RvciA9IHJlcXVpcmUoJy4vY29tcG9uZW50L1ZlY3RvcicpO1xuY29uc3QgQ3V0UGFyYW1zID0gcmVxdWlyZSgnLi9jb21wb25lbnQvQ3V0UGFyYW1zJyk7XG5jb25zdCBTaGFkb3cgPSByZXF1aXJlKCcuL2NvbXBvbmVudC9TaGFkb3cnKTtcblxuY29uc3QgSW1nTWFuYWdlciA9IHJlcXVpcmUoJy4vc2hhcGVzL0ltZ01hbmFnZXInKTtcblxuY29uc3QgQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9BbmltYXRpb24nKTtcbmNvbnN0IExheWVyID0gcmVxdWlyZSgnLi9MYXllcicpO1xuY29uc3QgQ2lyY2xlID0gcmVxdWlyZSgnLi9zaGFwZXMvQ2lyY2xlJyk7XG5jb25zdCBQb2x5TGluZSA9IHJlcXVpcmUoJy4vc2hhcGVzL1BvbHlMaW5lJyk7XG5jb25zdCBSZWN0ID0gcmVxdWlyZSgnLi9zaGFwZXMvUmVjdCcpO1xuY29uc3QgSW1nID0gcmVxdWlyZSgnLi9zaGFwZXMvSW1nJyk7XG5jb25zdCBUZXh0ID0gcmVxdWlyZSgnLi9zaGFwZXMvVGV4dCcpO1xuLyoqXG4gKiDlhajlsYDlr7nosaFcbiAqIEBwYXJhbSBlbGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBUb3BvYm9hcmQoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgLy/lm77lsYJcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIC8v6ZqQ6JeP55qE5Zu+5bGCXG4gICAgdGhpcy5faGlkZV9sYXllcnMgPSBbXTtcbiAgICBsZXQgZGVzdExheWVyID0gbmV3IExheWVyKHRoaXMsIHVuZGVmaW5lZCwgJ2Rlc3QtY2FudmFzJyk7XG4gICAgdGhpcy51cFRyZWUoZGVzdExheWVyKTtcbiAgICB0aGlzLmRlc3RDdHggPSBkZXN0TGF5ZXIuZGVzdEN0eDtcbn1cblxuLyoqXG4gKiDmianlsZXln7rnoYDmlrnms5VcbiAqL1xuZXh0ZW5kKFRvcG9ib2FyZC5wcm90b3R5cGUsIHtcbiAgICAvL+iwg+aVtOeUu+adv+Wkp+Wwj1xuICAgIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0LCBpc0NoYW5nZURvbSkge1xuICAgICAgICAvL+S/ruaUuURvbeWFg+e0oOWkp+Wwj1xuICAgICAgICBpZihpc0NoYW5nZURvbSkge1xuICAgICAgICAgICAgdGhpcy5lbGUuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmVsZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdEN0eC5jYW52YXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5yZXNpemUod2lkdGgsIGhlaWdodCkpO1xuICAgIH0sXG4gICAgLy/lr7zlh7rlm77niYdcbiAgICBleHBvcnQoKSB7XG4gICAgICAgIC8v5a+85Ye655S75p2/5pWw5o2uXG4gICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5kZXN0Q3R4LmNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gaW1nRGF0YTtcblxuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOaJqeWxleWbvuWxguebuOWFs+aWueazlVxuICovXG5leHRlbmQoVG9wb2JvYXJkLnByb3RvdHlwZSwge1xuICAgIC8v6I635Y+W5Zu+5bGC5pWw57uEXG4gICAgZ2V0TGF5ZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnM7XG4gICAgfSxcbiAgICAvL+iOt+WPluaWsOeahOWbvuWxguWvueixoSzkuI4gYWRkTGF5ZXIg5LiN6IO95a+555u45ZCMbGF5ZXLlr7nosaHkvb/nlKhcbiAgICBuZXdMYXllcihjbGFzc05hbWUpIHtcbiAgICAgICAgbGV0IGxheWVyID0gbmV3IExheWVyKHRoaXMsIGNsYXNzTmFtZSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgdGhpcy5wdXNoTGF5ZXIobGF5ZXIpO1xuICAgICAgICByZXR1cm4gbGF5ZXI7XG4gICAgfSxcbiAgICAvL2NhbnZhcyDkuIrmoJFcbiAgICB1cFRyZWUobGF5ZXIsIGlzQmVmb3JlKSB7XG4gICAgICAgIC8v5Zyo5YmN6Z2i5o+S5YWl5a2Q6IqC54K577yM6KaB5rGC5YWD57Sg5bey5a2Y5Zyo5YW25LuW5a2Q6IqC54K5XG4gICAgICAgIGlmKGlzQmVmb3JlICYmIHRoaXMuZWxlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5lbGUuaW5zZXJ0QmVmb3JlKGxheWVyLmRlc3RDdHguY2FudmFzLCB0aGlzLmVsZS5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZS5hcHBlbmQobGF5ZXIuZGVzdEN0eC5jYW52YXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL2NhbnZhcyDkuIvmoJFcbiAgICBkb3duVHJlZShsYXllcikge1xuICAgICAgICBsYXllci5kZXN0Q3R4LmNhbnZhcy5yZW1vdmUoKTtcbiAgICB9LFxuICAgIC8v5Zyo6Zif5YiX5byA5aeL5o+S5YWl5Zu+5bGCXG4gICAgdW5zaGlmdExheWVyKGxheWVyKSB7XG4gICAgICAgIGlmKHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVycy51bnNoaWZ0KGxheWVyKTtcbiAgICAgICAgLy9jYW52YXMg5LiK5qCRXG4gICAgICAgIC8vIHRoaXMudXBUcmVlKGxheWVyLCB0cnVlKTtcbiAgICB9LFxuICAgIC8v5LuO6Zif5YiX5byA5aeL56e76Zmk5Zu+5bGCXG4gICAgc2hpZnRMYXllcigpIHtcbiAgICAgICAgLy/mnKvlsL7np7vpmaRcbiAgICAgICAgbGV0IGxheWVyID0gdGhpcy5sYXllcnMuc2hpZnQoKTtcbiAgICAgICAgLy9jYW52YXMg5LiL5qCRXG4gICAgICAgIC8vIHRoaXMuZG93blRyZWUobGF5ZXIpO1xuXG4gICAgICAgIHJldHVybiBsYXllcjtcbiAgICB9LFxuICAgIC8v5re75Yqg5bey5a2Y5Zyo55qE5Zu+5bGC5a+56LGhLOS4jiBuZXdMYXllciDkuI3og73lr7nnm7jlkIxsYXllcuWvueixoeS9v+eUqFxuICAgIHB1c2hMYXllcihsYXllcikge1xuICAgICAgICBpZih0aGlzLmxheWVycy5pbmRleE9mKGxheWVyKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/liqDlhaXmmL7npLrpmJ/liJdcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaChsYXllcik7XG4gICAgICAgIC8vY2FudmFzIOS4iuagkVxuICAgICAgICAvLyB0aGlzLnVwVHJlZShsYXllcik7XG4gICAgfSxcbiAgICAvL+S7jumYn+WIl+acq+Wwvuenu+mZpOWbvuWxglxuICAgIHBvcExheWVyKCkge1xuICAgICAgICAvL+acq+Wwvuenu+mZpFxuICAgICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVycy5wb3AoKTtcbiAgICAgICAgLy9jYW52YXMg5LiL5qCRXG4gICAgICAgIC8vIHRoaXMuZG93blRyZWUobGF5ZXIpO1xuXG4gICAgICAgIHJldHVybiBsYXllcjtcbiAgICB9LFxuICAgIC8v56e76Zmk5oyH5a6a55qE5Zu+5bGC5a+56LGhXG4gICAgcmVtb3ZlTGF5ZXIobGF5ZXIpIHtcbiAgICAgICAgLy/nprvlvIDmmL7npLrlkozpmpDol4/pmJ/liJdcbiAgICAgICAgdGhpcy5sYXllcnMuc3BsaWNlKHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpLCAxKTtcbiAgICAgICAgdGhpcy5faGlkZV9sYXllcnMuc3BsaWNlKHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpLCAxKTtcbiAgICAgICAgLy9jYW52YXMg5LiL5qCRXG4gICAgICAgIC8vIHRoaXMuZG93blRyZWUobGF5ZXIpO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIOaJqeWxlee7mOWItuexu+aWueazlVxuICovXG5leHRlbmQoVG9wb2JvYXJkLnByb3RvdHlwZSwge1xuICAgIC8v5pi+56S6XG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYodGhpcy5faGlkZV9sYXllcnMubGVuZ3RoID09IDApIHtyZXR1cm47fVxuICAgICAgICB0aGlzLmxheWVycyA9IHRoaXMuX2hpZGVfbGF5ZXJzO1xuICAgICAgICB0aGlzLl9oaWRlX2xheWVycyA9IFtdO1xuICAgIH0sXG4gICAgLy/pmpDol49cbiAgICBoaWRlKCkge1xuICAgICAgICBpZih0aGlzLmxheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gdGhpcy5sYXllcnM7XG4gICAgICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+a4hemZpOaJgOacieeUu+adv+WFg+e0oO+8jOa4hemZpOWQjuS9v+eUqHJlZnJlc2jkuI3og73ph43mlrDmuLLmn5NcbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIuY2xlYXIoKSk7XG4gICAgfSxcbiAgICAvL+aTpumZpOeUu+adv++8jOaTpumZpOWQjuWPr+S7peS9v+eUqHJlZnJlc2jph43mlrDmuLLmn5NcbiAgICBjbGVhbihpc0xheWVyQ2xlYW4pIHtcbiAgICAgICAgaXNMYXllckNsZWFuICYmIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIuY2xlYW4oKSk7XG4gICAgICAgIHRoaXMuZGVzdEN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kZXN0Q3R4LmNhbnZhcy53aWR0aCwgdGhpcy5kZXN0Q3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIH0sXG4gICAgLy/liLfmlrDnlLvmnb9cbiAgICByZWZyZXNoOiBmdW5jdGlvbihpc0xheWVyUmVmcmVzaCkge1xuICAgICAgICB0aGlzLmNsZWFuKGlzTGF5ZXJSZWZyZXNoKTtcbiAgICAgICAgLy/liLfmlrDlm77lsYJcbiAgICAgICAgaXNMYXllclJlZnJlc2ggJiYgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5yZWZyZXNoKCkpO1xuICAgICAgICAvL+WIt+aWsOeUu+adv1xuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcbiAgICAgICAgICAgIHNob3dDYW52YXModGhpcy5kZXN0Q3R4LCBsYXllci5kZXN0Q3R4KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5omp5bGV6Z2Z5oCB5bGe5oCnXG4gKi9cbmV4dGVuZChUb3BvYm9hcmQsIHtcbiAgICBBbmltYXRpb24sIExheWVyLCBDaXJjbGUsIFBvbHlMaW5lLCBSZWN0LCBJbWcsIFRleHQsXG4gICAgSW1nTWFuYWdlcixcbiAgICBWZWN0b3IsIEN1dFBhcmFtcywgU2hhZG93XG59KTtcblxuLyoqXG4gKiDlhbzlrrlBTUTmqKHlvI9cbiAqL1xuaWYodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ1RvcG9ib2FyZCcsICgpID0+IFRvcG9ib2FyZCk7XG59XG5cbi8qKlxuICog5pq06Zyy5YWo5bGA5Y+Y6YePXG4gKi9cbmlmKHdpbmRvdykge1xuICAgIHdpbmRvd1snVEInXSA9IHdpbmRvd1snVG9wb2JvYXJkJ10gPSBUb3BvYm9hcmQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wb2JvYXJkOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZGNvbnRhaW5lci5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZGNvbnRhaW5lci5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmRjb250YWluZXIubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImNvbnN0IFZlY3RvciA9IHJlcXVpcmUoJy4vVmVjdG9yJyk7XG5cbmZ1bmN0aW9uIEN1dFBhcmFtcyh4LCB5LCB3LCBoKSB7XG4gICAgVmVjdG9yLmNhbGwodGhpcywgeCwgeSk7XG5cbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3V0UGFyYW1zOyIsImNvbnN0IFZlY3RvciA9IHJlcXVpcmUoJy4vVmVjdG9yJyk7XG5cbmZ1bmN0aW9uIFNoYWRvdyh4LCB5LCBjb2xvciwgYmx1cikge1xuICAgIFZlY3Rvci5jYWxsKHRoaXMsIHgsIHkpO1xuXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuYmx1ciA9IGJsdXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZG93OyIsImZ1bmN0aW9uIFZlY3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvcjsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcblxuLy/lnIblvaJcbmZ1bmN0aW9uIENpcmNsZSh7bGF5ZXIsIG8sIHIsIHdpZHRoLCBjb2xvciwgY2xvc2VQYXRoLCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aCwgY29sb3IsIHNoYWRvd30pO1xuXG5cdHRoaXMubyA9IG87XG5cdHRoaXMuciA9IHI7XG5cdHRoaXMud2lkdGggPSB3aWR0aDtcbn1cbmluaGVyaXQoQ2lyY2xlLCBHcmFwaCwge1xuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLmZpbGwoZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgICAgICBjdHguYXJjKHNlbGYuby54LCBzZWxmLm8ueSwgc2VsZi5yLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc2VsZi5jb2xvcjtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdmaWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc3Ryb2tlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5zdHJva2UoZnVuY3Rpb24oY3R4KSB7XG5cdFx0XHRjdHguYXJjKHNlbGYuby54LCBzZWxmLm8ueSwgc2VsZi5yLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xuXHRcdFx0Y3R4LnN0cm9rZVN0eWxlID0gc2VsZi5jb2xvcjtcblx0XHRcdGN0eC5saW5lV2lkdGggPSBzZWxmLndpZHRoO1xuICAgICAgICAgICAgc2VsZi5jbG9zZVBhdGggJiYgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ3N0cm9rZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaXJjbGU7IiwiXG5mdW5jdGlvbiBhZGRTaGFkb3coY3R4LCBzaGFkb3cpIHtcbiAgICBjdHguc2hhZG93Qmx1ciA9IHNoYWRvdy5ibHVyO1xuICAgIGN0eC5zaGFkb3dDb2xvciA9IHNoYWRvdy5jb2xvcjtcbiAgICBjdHguc2hhZG93T2Zmc2V0WCA9IHNoYWRvdy54O1xuICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gc2hhZG93Lnk7XG59XG4vL+eUu+WutlxuZnVuY3Rpb24gRHJhd2VyKGdyYXBoLCBjdHgpIHtcblx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHR0aGlzLmN0eCA9IGN0eDtcbn1cbkRyYXdlci5wcm90b3R5cGUgPSB7XG4gICAgY2xvc2VQYXRoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfSxcblx0ZHJhdzogZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0XHR0aGlzLmN0eC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmdyYXBoLmNvbG9yO1xuXHRcdGFkZFNoYWRvdyh0aGlzLmN0eCwgdGhpcy5ncmFwaC5zaGFkb3cpO1xuICAgICAgICBleGVjdXRvciAmJiBleGVjdXRvcih0aGlzLmN0eCk7XG5cdH0sIFxuXHRmaWxsOiBmdW5jdGlvbihleGVjdXRvcikge1xuXHRcdHRoaXMuZHJhdyhleGVjdXRvcik7XG5cdFx0dGhpcy5jdHguZmlsbCgpO1xuXHR9LCBcblx0c3Ryb2tlOiBmdW5jdGlvbihleGVjdXRvcikge1xuXHRcdHRoaXMuZHJhdyhleGVjdXRvcik7XG5cdFx0dGhpcy5jdHguc3Ryb2tlKCk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRHJhd2VyOyIsImNvbnN0IHtleHRlbmR9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuY29uc3QgRHJhd2VyID0gcmVxdWlyZSgnLi9EcmF3ZXInKTtcbmNvbnN0IFNoYWRvdyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudC9TaGFkb3cnKTtcblxuZnVuY3Rpb24gR3JhcGgoe2xheWVyLCBjbG9zZVBhdGgsIGNvbG9yLCBzaGFkb3d9KSB7XG5cdHRoaXMubGF5ZXIgPSBsYXllcjtcbiAgICB0aGlzLmRyYXdlciA9IG5ldyBEcmF3ZXIodGhpcywgdGhpcy5sYXllci5nZXRDb250ZXh0KCkpO1xuXHR0aGlzLm1ldGhvZHMgPSBbXTtcblx0dGhpcy5faGlkZV9tZXRob2RzID0gW107XG5cdHRoaXMuY2xvc2VQYXRoID0gY2xvc2VQYXRoO1xuXG5cdHRoaXMuY29sb3IgPSBjb2xvcjtcblx0dGhpcy5zaGFkb3cgPSBzaGFkb3cgfHwgbmV3IFNoYWRvdygwLCAnIzAwMCcsIDAsIDApO1xuXG4gICAgdGhpcy5sYXllci5hZGRHcmFwaCh0aGlzKTtcbn1cblxuZXh0ZW5kKEdyYXBoLnByb3RvdHlwZSwge1xuICAgIGdldExheWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcjtcbiAgICB9LFxuICAgIHB1c2gobWV0aG9kKSB7XG4gICAgICAgIHRoaXMubWV0aG9kcy5wdXNoKG1ldGhvZCk7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5omp5bGV57uY5Zu+6YOo5YiG5pa55rOVXG4gKi9cbmV4dGVuZChHcmFwaC5wcm90b3R5cGUsIHtcblx0Ly/muIXpmaTmiYDmnInnlLvmnb/lhYPntKDvvIzmuIXpmaTlkI7kvb/nlKhyZWZyZXNo5LiN6IO96YeN5paw5riy5p+TXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLl9oaWRlX21ldGhvZHMgPSBbXTtcbiAgICB9LFxuXHQvL+iwg+eUqOW9k+WJjeWFg+e0oOeahOiusOW9leaWueazle+8jOmHjeaWsOe7mOWItuWbvuW9olxuICAgIHJlZnJlc2goKSB7XG5cdFx0dGhpcy5tZXRob2RzLmZvckVhY2godmFsdWUgPT4ge1xuXHRcdFx0dGhpc1t2YWx1ZV0oKTtcblx0XHRcdHRoaXMubWV0aG9kcy5wb3AoKTtcblx0XHR9KTtcblx0fSxcblx0c2hvdygpIHtcblx0XHRpZiAodGhpcy5faGlkZV9tZXRob2RzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX2hpZGVfbWV0aG9kcyA9IHRoaXMubWV0aG9kcztcblx0XHR0aGlzLm1ldGhvZHMgPSBbXTtcblx0fSxcblx0aGlkZSgpIHtcblx0XHRpZiAodGhpcy5tZXRob2RzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMubWV0aG9kcyA9IHRoaXMuX2hpZGVfbWV0aG9kcztcblx0XHR0aGlzLl9oaWRlX21ldGhvZHMgPSBbXTtcblx0fVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR3JhcGg7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCB7aW5oZXJpdH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBpbWFnZUpzb25cbiAqIEBwYXJhbSBzcmMgQHR5cGUgQ3V0UGFyYW1zXG4gKiBAcGFyYW0gZHN0IEB0eXBlIEN1dFBhcmFtc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEltZyh7bGF5ZXIsIGltYWdlLCBzcmMsIGRzdCwgc2hhZG93fSkge1xuICAgIEdyYXBoLmNhbGwodGhpcywge2xheWVyLCBjbG9zZVBhdGg6IGZhbHNlLCBzaGFkb3d9KTtcblxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB0aGlzLmRzdCA9IGRzdDtcbn1cbmluaGVyaXQoSW1nLCBHcmFwaCwge1xuICAgIC8v5re75Yqg5Zu+54mHXG4gICAgZHJhdzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLnNyYykge1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMuc3JjLngsIHRoaXMuc3JjLnksIHRoaXMuc3JjLncsIHRoaXMuc3JjLmgsXG4gICAgICAgICAgICAgICAgdGhpcy5kc3QueCwgdGhpcy5kc3QueSwgdGhpcy5kc3QudywgdGhpcy5kc3QuaFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZHN0KSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHRoaXMuZHN0LngsIHRoaXMuZHN0LnksIHRoaXMuZHN0LncsIHRoaXMuZHN0LmgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwLCB0aGlzLmxheWVyLmdldENvbnRleHQoKS5jYW52YXMud2lkdGgsIHRoaXMubGF5ZXIuZ2V0Q29udGV4dCgpLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wdXNoKCdkcmF3Jyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEltZzsiLCJjb25zdCB7ZXh0ZW5kLCBhamF4fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcblxuLy/mlbDmja7lh4blpIfnirbmgIHvvJow77ya6K+35rGC5pyq5Yid5aeL5YyW77ybMe+8muW8gOWni+WKoOi9veWbvueJh+S/oeaBr++8mzLvvJrlt7LliqDovb3lm77niYfkv6Hmga/vvIzlvIDlp4vliqDovb3lm77niYfvvJsz77ya5q+P5Yqg6L295LiA5byg5Zu+54mH6LCD55So5LiA5qyh77ybNO+8muaJgOacieWbvueJh+mDveWKoOi9veWujOaIkFxuY29uc3QgU1RBVEVfSU5JVElBTCA9IDA7XG5jb25zdCBTVEFURV9SRVNPVVJDRV9JTkZPX1BSRV9MT0FEID0gMTtcbmNvbnN0IFNUQVRFX1JFU09VUkNFX0lORk9fUkVBRFkgPSAyO1xuY29uc3QgU1RBVEVfUkVTT1VSQ0VfTE9BRElORyA9IDM7XG5jb25zdCBTVEFURV9SRVNPVVJDRV9SRUFEWSA9IDQ7XG5cbi8qKlxuICog5Zu+54mH5Yqg6L29566h55CG5ZmoXG4gKiBAcGFyYW0gaW1nSnNvblVybFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEltZ01hbmFnZXIoe2ltZ0pzb25VcmwsIG9ucmVhZHlzdGF0ZWNoYW5nZX0pIHtcbiAgICB0aGlzLmltZ0pzb25VcmwgPSBpbWdKc29uVXJsO1xuICAgIHRoaXMuZGF0YTtcbiAgICB0aGlzLmltZ3MgPSB7fTtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSBTVEFURV9JTklUSUFMO1xuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gb25yZWFkeXN0YXRlY2hhbmdlO1xufVxuXG4vKipcbiAqIOaJqeWxlemdmeaAgeW4uOmHj1xuICovXG5leHRlbmQoSW1nTWFuYWdlciwge1xuICAgIFNUQVRFX0lOSVRJQUwsXG4gICAgU1RBVEVfUkVTT1VSQ0VfSU5GT19QUkVfTE9BRCwgU1RBVEVfUkVTT1VSQ0VfSU5GT19SRUFEWSxcbiAgICBTVEFURV9SRVNPVVJDRV9MT0FESU5HLCBTVEFURV9SRVNPVVJDRV9SRUFEWVxufSk7XG5cbmV4dGVuZChJbWdNYW5hZ2VyLnByb3RvdHlwZSwge1xuICAgIGxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFNUQVRFX1JFU09VUkNFX0lORk9fUFJFX0xPQUQ7XG4gICAgICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlICYmIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgIGFqYXgoe1xuICAgICAgICAgICAgdXJsOiB0aGlzLmltZ0pzb25VcmwsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICBsZXQgaW1ncyA9IGRhdGEuaW1hZ2VzO1xuICAgICAgICAgICAgICAgIHNlbGYucmVhZHlTdGF0ZSA9IFNUQVRFX1JFU09VUkNFX0lORk9fUkVBRFk7XG4gICAgICAgICAgICAgICAgc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UgJiYgc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBpbWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5Yib5bu65Zu+54mHXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1nc1tpbWdzW2tleV0ubmFtZV0gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy/liqDovb3lm77niYdcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWdzW2ltZ3Nba2V5XS5uYW1lXS5zcmMgPSBpbWdzW2tleV0udXJsO1xuICAgICAgICAgICAgICAgICAgICAvL+ebkeWQrOWKoOi9vVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmltZ3NbaW1nc1trZXldLm5hbWVdLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVhZHlTdGF0ZSA9IFNUQVRFX1JFU09VUkNFX0xPQURJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVhZHlzdGF0ZWNoYW5nZSAmJiBzZWxmLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/liqDovb3lrozmiJBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuY291bnQgPT0gaW1ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlYWR5U3RhdGUgPSBTVEFURV9SRVNPVVJDRV9SRUFEWTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9ucmVhZHlzdGF0ZWNoYW5nZSAmJiBzZWxmLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbWdNYW5hZ2VyOyIsImNvbnN0IEdyYXBoID0gcmVxdWlyZSgnLi9HcmFwaCcpO1xuY29uc3Qge2luaGVyaXR9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuLy/mipjnur9cbmZ1bmN0aW9uIFBvbHlMaW5lKHtsYXllciwgYXhpcywgd2lkdGgsIGNvbG9yLCBjbG9zZVBhdGgsIHNoYWRvd30pIHtcbiAgICBHcmFwaC5jYWxsKHRoaXMsIHtsYXllciwgY2xvc2VQYXRoLCBjb2xvciwgc2hhZG93fSk7XG5cblx0dGhpcy5heGlzID0gYXhpcztcblx0dGhpcy53aWR0aCA9IHdpZHRoIHx8IDE7XG59XG5pbmhlcml0KFBvbHlMaW5lLCBHcmFwaCwge1xuICAgIHN0cm9rZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuc3Ryb2tlKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBzZWxmLmF4aXM7XG4gICAgICAgICAgICBjdHgubW92ZVRvKGF4aXNbMF1bMF0sIGF4aXNbMF1bMV0pO1xuICAgICAgICAgICAgYXhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZihrZXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNlbGYuY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gc2VsZi53aWR0aDtcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICAgICAgc2VsZi5jbG9zZVBhdGggJiYgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ3N0cm9rZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLmZpbGwoZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IHNlbGYuYXhpcztcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oYXhpc1swXVswXSwgYXhpc1swXVsxXSk7XG4gICAgICAgICAgICBheGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmKGtleSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHNlbGYuY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gc2VsZi53aWR0aDtcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICAgICAgc2VsZi5jbG9zZVBhdGggJiYgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ2ZpbGwnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9seUxpbmU7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCB7aW5oZXJpdH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIFJlY3Qoe2xheWVyLCBjdXRQYXJhbXMsIHdpZHRoLCBjb2xvciwgc2hhZG93fSkge1xuICAgIEdyYXBoLmNhbGwodGhpcywge2xheWVyLCBjbG9zZVBhdGg6IGZhbHNlLCBjb2xvciwgc2hhZG93fSk7XG5cbiAgICB0aGlzLmN1dFBhcmFtcyA9IGN1dFBhcmFtcztcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG59XG5cbmluaGVyaXQoUmVjdCwgR3JhcGgsIHtcbiAgICBkcmF3OiBmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjdHgucmVjdChzZWxmLmN1dFBhcmFtcy54LCBzZWxmLmN1dFBhcmFtcy55LCBzZWxmLmN1dFBhcmFtcy53LCBzZWxmLmN1dFBhcmFtcy5oKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gc2VsZi5jb2xvcjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHNlbGYud2lkdGg7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5maWxsKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgc2VsZi5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZmlsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHN0cm9rZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuc3Ryb2tlKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgc2VsZi5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnc3Ryb2tlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Q7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCBWZWN0b3IgPSByZXF1aXJlKCcuLi9jb21wb25lbnQvVmVjdG9yJyk7XG5jb25zdCB7aW5oZXJpdH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIFRleHQoe2xheWVyLCBwb3NpdGlvbiwgY29udGVudCwgZm9udCwgY29sb3IsIHNoYWRvd30pIHtcbiAgICBHcmFwaC5jYWxsKHRoaXMsIHtsYXllciwgY2xvc2VQYXRoOiB0cnVlLCBjb2xvciwgc2hhZG93fSk7XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbiB8fCBuZXcgVmVjdG9yKGxheWVyLmJvYXJkLmdldENhbnZhcygpLndpZHRoLCBsYXllci5ib2FyZC5nZXRDYW52YXMoKS5oZWlnaHQpO1xuICAgIHRoaXMuZm9udCA9IGZvbnQ7XG59XG5cbmluaGVyaXQoVGV4dCwgR3JhcGgsIHtcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzLCBjdHggPSB0aGlzLmRyYXdlci5jdHg7XG4gICAgICAgIGN0eC5mb250ID0gc2VsZi5mb250O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHNlbGYuY29udGVudCwgc2VsZi5wb3NpdGlvbi54LCBzZWxmLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdmaWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==