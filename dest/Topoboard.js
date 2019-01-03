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
  //扩展方法
  extend: extend,
  //继承
  inherit: inherit,
  //异步网络请求
  ajax: ajax,
  //创建新的canvas对象
  newCanvas: newCanvas,
  //将srcCtx画布内容添加到destCtx画布中
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
  className = 'board-canvas' + (typeof className == 'undefined' ? '' : ' ' + className); // let canvas = newCanvas(this.board.ele, className);
  // let cacheCanvas = newCanvas(canvas, className);

  var cacheCanvas = newCanvas(this.board.ele, className);

  if (typeof this.alpha == 'undefined' || this.alpha === true) {
    //目标canvas上下文
    // this.destCtx = canvas.getContext('2d');
    //隐藏canvas上下文
    this.ctx = cacheCanvas.getContext('2d');
  } //不透明的画布
  else {
      //目标canvas上下文
      // this.destCtx = canvas.getContext('2d', {alpha: false});
      //隐藏canvas上下文
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
  //将 layer 置顶
  top: function top() {
    this.board.removeLayer(this);
    this.board.pushLayer(this);
  },
  //将 layer 置底
  bottom: function bottom() {
    this.board.removeLayer(this);
    this.board.unshiftLayer(this);
  },
  //重置canvas的大小
  resize: function resize(width, height) {
    this.ctx.canvas.width = width || this.ctx.canvas.width;
    this.ctx.canvas.height = height || this.ctx.canvas.height; // this.destCtx.canvas.width = width || this.destCtx.canvas.width;
    // this.destCtx.canvas.height = height || this.destCtx.canvas.height;
  },
  //导出图片
  export: function _export() {
    var imgData = this.ctx.canvas.toDataURL();
    var img = new Image();
    img.src = imgData;
    return img;
  }
});
/**
 * 扩展图元相关方法
 */

extend(Layer.prototype, {
  //获取图元列表
  getGraphs: function getGraphs() {
    return this.graphs;
  },
  //在队列前面插入图元
  unshiftGraph: function unshiftGraph(graph) {
    if (this.graphs.indexOf(graph) > -1) {
      return;
    }

    this.graphs.unshift(graph);
  },
  //在队列前面移除图元
  // shiftGraph() {
  //     let graph = this.graphs.shift();
  //
  //     return graph;
  // },
  //在队列末尾追加图元
  pushGraph: function pushGraph(graph) {
    if (this.graphs.indexOf(graph) > -1) {
      return;
    }

    this.graphs.push(graph);
  },
  //在队列末尾移除图元
  // popGraph() {
  //     let graph = this.graphs.pop();
  //
  //     return graph;
  // },
  //删除图元
  removeGraph: function removeGraph(graph) {
    this.graphs.splice(this.graphs.indexOf(graph), 1);

    this._hide_graphs.splice(this._hide_graphs.indexOf(graph), 1);
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
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // this.destCtx.clearRect(0, 0, this.destCtx.canvas.width, this.destCtx.canvas.height);
  },
  //刷新
  refresh: function refresh() {
    this.clean(); //刷新图元信息

    this.graphs.forEach(function (graph) {
      return graph.refresh();
    }); //显示图片内容
    // showCanvas(this.destCtx, this.ctx);
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

var Font = __webpack_require__(/*! ./component/Font */ "./src/drawer/component/Font.js");

var ImgManager = __webpack_require__(/*! ./shapes/ImgManager */ "./src/drawer/shapes/ImgManager.js");

var Animation = __webpack_require__(/*! ./Animation */ "./src/drawer/Animation.js");

var Layer = __webpack_require__(/*! ./Layer */ "./src/drawer/Layer.js");

var Circle = __webpack_require__(/*! ./shapes/Circle */ "./src/drawer/shapes/Circle.js");

var PolyLine = __webpack_require__(/*! ./shapes/PolyLine */ "./src/drawer/shapes/PolyLine.js");

var Rect = __webpack_require__(/*! ./shapes/Rect */ "./src/drawer/shapes/Rect.js");

var Img = __webpack_require__(/*! ./shapes/Img */ "./src/drawer/shapes/Img.js");

var Text = __webpack_require__(/*! ./shapes/Text */ "./src/drawer/shapes/Text.js"); //canvas 上树


function upTree(canvas, ele, isBefore) {
  //在前面插入子节点，要求元素已存在其他子节点
  if (isBefore && ele.children.length) {
    ele.insertBefore(canvas, ele.children[0]);
  } else {
    ele.append(canvas);
  }
} //canvas 下树
// function downTree(canvas) {
//     canvas.remove();
// }

/**
 * 全局对象
 * @param ele
 * @constructor
 */


function Topoboard(ele) {
  this.ele = ele; //图层

  this.layers = []; //隐藏的图层

  this._hide_layers = [];
  var destLayer = new Layer(this, 'dest-canvas');
  upTree(destLayer.getContext().canvas, this.ele);
  this.destCtx = destLayer.ctx;
}
/**
 * 扩展基础方法
 */


extend(Topoboard.prototype, {
  //调整画板大小
  resize: function resize(width, height, isChangeContainer) {
    //修改Dom元素大小
    if (isChangeContainer) {
      this.ele.style.width = width + 'px';
      this.ele.style.height = height + 'px';
    } //修改画布大小


    this.destCtx.canvas.width = width || this.destCtx.canvas.width;
    this.destCtx.canvas.height = height || this.destCtx.canvas.height; //修改图层size

    this.layers.forEach(function (layer) {
      return layer.resize(width, height);
    }); //刷新画布内容

    this.refresh(true);
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
  //在队列开始插入图层
  unshiftLayer: function unshiftLayer(layer) {
    if (this.layers.indexOf(layer) > -1) {
      return;
    }

    this.layers.unshift(layer); //canvas 上树
    // this.upTree(layer, true);
  },
  //从队列开始移除图层
  // shiftLayer() {
  //     //末尾移除
  //     let layer = this.layers.shift();
  //     //canvas 下树
  //     // this.downTree(layer);
  //
  //     return layer;
  // },
  //添加已存在的图层对象,与 newLayer 不能对相同layer对象使用
  pushLayer: function pushLayer(layer) {
    if (this.layers.indexOf(layer) > -1) {
      return;
    } //加入显示队列


    this.layers.push(layer); //canvas 上树
    // this.upTree(layer);
  },
  //从队列末尾移除图层
  // popLayer() {
  //     //末尾移除
  //     let layer = this.layers.pop();
  //     //canvas 下树
  //     // this.downTree(layer);
  //
  //     return layer;
  // },
  //移除指定的图层对象
  removeLayer: function removeLayer(layer) {
    //离开显示和隐藏队列
    this.layers.splice(this.layers.indexOf(layer), 1);

    this._hide_layers.splice(this._hide_layers.indexOf(layer), 1); //canvas 下树
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

  /**
   * 将所有图层重新绘制到画板
   * @param isLayerRefresh 决定是否需要对每一个图层都进行刷新
   */
  refresh: function refresh(isLayerRefresh) {
    var _this = this;

    this.clean(isLayerRefresh); //刷新图层

    isLayerRefresh && this.layers.forEach(function (layer) {
      return layer.refresh();
    }); //刷新画板

    this.layers.forEach(function (layer) {
      showCanvas(_this.destCtx, layer.getContext());
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
  Shadow: Shadow,
  Font: Font
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

/***/ "./src/drawer/component/Font.js":
/*!**************************************!*\
  !*** ./src/drawer/component/Font.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    extend = _require.extend;

function Font(fontSize, fontFamily) {
  this.fontSize = fontSize;
  this.fontFamily = fontFamily;
}

extend(Font.prototype, {
  getFont: function getFont() {
    return "".concat(this.fontSize, "px ").concat(this.fontFamily);
  }
});
module.exports = Font;

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
/**
 * 扩展基本方法
 */


extend(Graph.prototype, {
  getLayer: function getLayer() {
    return this.layer;
  },
  top: function top() {
    this.layer.removeGraph(this);
    this.layer.pushGraph(this);
  },
  bottom: function bottom() {
    this.layer.removeGraph(this);
    this.layer.unshiftGraph(this);
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
  },
  //绘制重复平铺的图片
  repeat: function repeat() {}
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
      ctx.moveTo(axis[0].x, axis[0].y);
      axis.forEach(function (vector, key) {
        if (key > 0) {
          ctx.lineTo(vector.x, vector.y);
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
      ctx.moveTo(axis[0].x, axis[0].y);
      axis.forEach(function (vector, key) {
        if (key > 0) {
          ctx.lineTo(vector.x, vector.y);
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
      lineWidth = _ref.lineWidth,
      color = _ref.color,
      shadow = _ref.shadow;
  Graph.call(this, {
    layer: layer,
    closePath: false,
    color: color,
    shadow: shadow
  });
  this.cutParams = cutParams;
  this.lineWidth = lineWidth;
}

inherit(Rect, Graph, {
  draw: function draw(ctx) {
    var self = this;
    ctx.rect(self.cutParams.x, self.cutParams.y, self.cutParams.w, self.cutParams.h);
    ctx.strokeStyle = self.color;
    ctx.lineWidth = self.lineWidth;
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

var Font = __webpack_require__(/*! ../component/Font */ "./src/drawer/component/Font.js");

var _require = __webpack_require__(/*! ../../base/utils */ "./src/base/utils.js"),
    inherit = _require.inherit;

function rePosition(text) {
  var ctx = text.layer.getContext();
  var x = Math.floor((ctx.canvas.width - ctx.measureText(text.content).width) / 2);
  var y = Math.floor((ctx.canvas.height - text.font.fontSize) / 2);
  return new Vector(x, y);
}

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
  this.font = font || new Font(18, '微软雅黑');
  this.isCenter = !position;
  this.position = position || rePosition(this);
}

inherit(Text, Graph, {
  fill: function fill() {
    var self = this,
        ctx = this.drawer.ctx;
    ctx.font = self.font.getFont();
    ctx.fillStyle = this.color;

    if (self.isCenter) {
      self.position = rePosition(self);
    }

    ctx.fillText(self.content, self.position.x, self.position.y);
    this.closePath && ctx.closePath();
    this.push('fill');
    return this;
  }
});
module.exports = Text;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9ib2FyZGNvbnRhaW5lci5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9MYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL1RvcG9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL2JvYXJkY29udGFpbmVyLmxlc3M/ZTg2YSIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL2NvbXBvbmVudC9DdXRQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9jb21wb25lbnQvRm9udC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL2NvbXBvbmVudC9TaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9jb21wb25lbnQvVmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9EcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvSW1nLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmF3ZXIvc2hhcGVzL0ltZ01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvUG9seUxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdlci9zaGFwZXMvUmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2VyL3NoYXBlcy9UZXh0LmpzIl0sIm5hbWVzIjpbImV4dGVuZCIsIm9iaiIsImZpZWxkcyIsImtleSIsInZhbHVlIiwiaW5oZXJpdCIsIkNoaWxkIiwiUGFyZW50IiwiY2hpbGRGaWVsZCIsIkYiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZ2V0WGhyIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0IiwiZ2V0UXVlcnlTdHJpbmciLCJkYXRhIiwicmV0IiwiaGFzT3duUHJvcGVydHkiLCJzdWJzdHIiLCJsZW5ndGgiLCJhamF4IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInR5cGUiLCJ0b1VwcGVyQ2FzZSIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwicXVlcnlTdHIiLCJvcGVuIiwic2VuZCIsIm5ld0NhbnZhcyIsImVsZSIsIm5ld0NsYXNzTmFtZSIsImNhY2hlQ2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsInNob3dDYW52YXMiLCJkZXN0Q3R4Iiwic3JjQ3R4IiwiZHJhd0ltYWdlIiwiY2FudmFzIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRFRkFVTFRfSU5URVJWQUwiLCJTVEFURV9JTklUSUFMIiwiU1RBVEVfU1RBUlQiLCJTVEFURV9TVE9QIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93Iiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImludGVydmFsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJBbmltYXRpb24iLCJ0aW1lciIsInN0YXRlIiwidGFza3MiLCJvbmVudGVyZnJhbWUiLCJ0aW1lIiwic3RhcnQiLCJzdGFydEFuaW1hdGlvbiIsIkRhdGUiLCJyZXN0YXJ0IiwiZHVyIiwic3RvcCIsInN0YXJ0VGltZSIsImFkZFRhc2siLCJ0YXNrIiwicHVzaCIsImFuaW1hdGlvbiIsImxhc3RUaWNrIiwibmV4dFRpY2siLCJub3ciLCJkdXJhdGlvbiIsImZvckVhY2giLCJyZXF1aXJlIiwiTGF5ZXIiLCJib2FyZCIsImFscGhhIiwiZ3JhcGhzIiwiX2hpZGVfZ3JhcGhzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdldEJvYXJkIiwidG9wIiwicmVtb3ZlTGF5ZXIiLCJwdXNoTGF5ZXIiLCJib3R0b20iLCJ1bnNoaWZ0TGF5ZXIiLCJyZXNpemUiLCJleHBvcnQiLCJpbWdEYXRhIiwidG9EYXRhVVJMIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJnZXRHcmFwaHMiLCJ1bnNoaWZ0R3JhcGgiLCJncmFwaCIsImluZGV4T2YiLCJ1bnNoaWZ0IiwicHVzaEdyYXBoIiwicmVtb3ZlR3JhcGgiLCJzcGxpY2UiLCJjbGVhciIsImhpZGUiLCJjbGVhbiIsImNsZWFyUmVjdCIsInJlZnJlc2giLCJzaG93IiwiVmVjdG9yIiwiQ3V0UGFyYW1zIiwiU2hhZG93IiwiRm9udCIsIkltZ01hbmFnZXIiLCJDaXJjbGUiLCJQb2x5TGluZSIsIlJlY3QiLCJJbWciLCJUZXh0IiwidXBUcmVlIiwiaXNCZWZvcmUiLCJjaGlsZHJlbiIsImluc2VydEJlZm9yZSIsImFwcGVuZCIsIlRvcG9ib2FyZCIsImxheWVycyIsIl9oaWRlX2xheWVycyIsImRlc3RMYXllciIsImlzQ2hhbmdlQ29udGFpbmVyIiwic3R5bGUiLCJsYXllciIsImdldExheWVycyIsIm5ld0xheWVyIiwiYXJndW1lbnRzIiwiaXNMYXllckNsZWFuIiwiaXNMYXllclJlZnJlc2giLCJkZWZpbmUiLCJ4IiwieSIsInciLCJoIiwiY2FsbCIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImdldEZvbnQiLCJjb2xvciIsImJsdXIiLCJHcmFwaCIsIm8iLCJyIiwiY2xvc2VQYXRoIiwic2hhZG93IiwiZmlsbCIsInNlbGYiLCJkcmF3ZXIiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2UiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImFkZFNoYWRvdyIsInNoYWRvd0JsdXIiLCJzaGFkb3dDb2xvciIsInNoYWRvd09mZnNldFgiLCJzaGFkb3dPZmZzZXRZIiwiRHJhd2VyIiwiZHJhdyIsImV4ZWN1dG9yIiwiYmVnaW5QYXRoIiwibWV0aG9kcyIsIl9oaWRlX21ldGhvZHMiLCJhZGRHcmFwaCIsImdldExheWVyIiwicG9wIiwiaW1hZ2UiLCJkc3QiLCJyZXBlYXQiLCJTVEFURV9SRVNPVVJDRV9JTkZPX1BSRV9MT0FEIiwiU1RBVEVfUkVTT1VSQ0VfSU5GT19SRUFEWSIsIlNUQVRFX1JFU09VUkNFX0xPQURJTkciLCJTVEFURV9SRVNPVVJDRV9SRUFEWSIsImltZ0pzb25VcmwiLCJpbWdzIiwiY291bnQiLCJsb2FkIiwiaW1hZ2VzIiwibmFtZSIsIm9ubG9hZCIsImF4aXMiLCJtb3ZlVG8iLCJ2ZWN0b3IiLCJsaW5lVG8iLCJsaW5lQ2FwIiwiY3V0UGFyYW1zIiwicmVjdCIsInJlUG9zaXRpb24iLCJ0ZXh0IiwiZmxvb3IiLCJtZWFzdXJlVGV4dCIsImNvbnRlbnQiLCJmb250IiwicG9zaXRpb24iLCJpc0NlbnRlciIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUNBLE9BQUtDLElBQUwsR0FBWUEsSUFBSSxJQUFJLElBQUkxRixJQUFKLENBQVMsRUFBVCxFQUFhLE1BQWIsQ0FBcEI7QUFDQSxPQUFLNEYsUUFBTCxHQUFnQixDQUFFRCxRQUFsQjtBQUNBLE9BQUtBLFFBQUwsR0FBZ0JBLFFBQVEsSUFBSU4sVUFBVSxDQUFDLElBQUQsQ0FBdEM7QUFDSDs7QUFFRHpOLE9BQU8sQ0FBQzBJLElBQUQsRUFBTzZCLEtBQVAsRUFBYztBQUNqQkssTUFBSSxFQUFFLGdCQUFXO0FBQ2IsUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFBQSxRQUFpQnpFLEdBQUcsR0FBRyxLQUFLMEUsTUFBTCxDQUFZMUUsR0FBbkM7QUFDQUEsT0FBRyxDQUFDMEgsSUFBSixHQUFXakQsSUFBSSxDQUFDaUQsSUFBTCxDQUFVMUQsT0FBVixFQUFYO0FBQ0FoRSxPQUFHLENBQUM4RSxTQUFKLEdBQWdCLEtBQUtiLEtBQXJCOztBQUNBLFFBQUdRLElBQUksQ0FBQ21ELFFBQVIsRUFBa0I7QUFDZG5ELFVBQUksQ0FBQ2tELFFBQUwsR0FBZ0JOLFVBQVUsQ0FBQzVDLElBQUQsQ0FBMUI7QUFDSDs7QUFDRHpFLE9BQUcsQ0FBQzZILFFBQUosQ0FBYXBELElBQUksQ0FBQ2dELE9BQWxCLEVBQTJCaEQsSUFBSSxDQUFDa0QsUUFBTCxDQUFjbEUsQ0FBekMsRUFBNENnQixJQUFJLENBQUNrRCxRQUFMLENBQWNqRSxDQUExRDtBQUNBLFNBQUtZLFNBQUwsSUFBa0J0RSxHQUFHLENBQUNzRSxTQUFKLEVBQWxCO0FBRUEsU0FBS25GLElBQUwsQ0FBVSxNQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFiZ0IsQ0FBZCxDQUFQO0FBZ0JBbkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcUYsSUFBakIsQyIsImZpbGUiOiJUb3BvYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kcmF3ZXIvVG9wb2JvYXJkLmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9hcmQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJvYXJkLWNvbnRhaW5lciAuYm9hcmQtY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcbiAqIOaJqeWxleWtl+auteaWueazlVxuICogQHBhcmFtIG9ialxuICogQHBhcmFtIGZpZWxkc1xuICovXG5mdW5jdGlvbiBleHRlbmQob2JqLCBmaWVsZHMpIHtcbiAgICBmb3IobGV0IGtleSBpbiBmaWVsZHMpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gZmllbGRzW2tleV07XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxufVxuXG4vKipcbiAqIOe7p+aJv+aWueazlVxuICogQHBhcmFtIENoaWxkXG4gKiBAcGFyYW0gUGFyZW50XG4gKiBAcGFyYW0gY2hpbGRGaWVsZFxuICovXG5mdW5jdGlvbiBpbmhlcml0KENoaWxkLCBQYXJlbnQsIGNoaWxkRmllbGQpIHtcblx0bGV0IEYgPSBmdW5jdGlvbigpIHt9O1xuICAgIEYucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZTtcblx0Q2hpbGQucHJvdG90eXBlID0gbmV3IEYoKTtcbiAgICBleHRlbmQoQ2hpbGQucHJvdG90eXBlLCBjaGlsZEZpZWxkKTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ2hpbGQucHJvdG90eXBlLCB7XG5cdCAgICAnY29uc3RydWN0b3InOiB7XG5cdCAgICAgICAgdmFsdWU6IENoaWxkLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qKlxuICog6I635Y+WeGhy5a+56LGhXG4gKi9cbmZ1bmN0aW9uIGdldFhocigpIHtcbiAgICBsZXQgeGhyO1xuICAgIGlmKFhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cbiAgICBlbHNlIGlmKEFjdGl2ZVhPYmplY3QpIHtcbiAgICAgICAgeGhyID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHhocjtcbn1cblxuLyoqXG4gKiDojrflj5bmn6Xor6LlrZfnrKbkuLJcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRRdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgaWYoISBkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IHJldCA9ICc/JztcbiAgICBmb3IobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldCArPSBrZXkgKyAnPScgKyB2YWx1ZSArICcmJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0LnN1YnN0cigwLCByZXQubGVuZ3RoIC0gMSk7XG59XG5cbi8qKlxuICogYWpheOe9kee7nOivt+axguaWueazlVxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIG1ldGhvZFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSBzdWNjZXNzXG4gKiBAcGFyYW0gdHlwZVxuICovXG5mdW5jdGlvbiBhamF4KHt1cmwsIG1ldGhvZCA9ICdHRVQnLCBkYXRhID0gJycsIHN1Y2Nlc3MsIHR5cGUgPSAnanNvbid9KSB7XG4gICAgbGV0IHhociA9IGdldFhocigpO1xuICAgIG1ldGhvZC50b1VwcGVyQ2FzZSgpID09ICdQT1NUJyAmJiB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgc3VjY2Vzcyh0eXBlID09ICdqc29uJz8gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTogeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHF1ZXJ5U3RyID0gZ2V0UXVlcnlTdHJpbmcoZGF0YSk7XG4gICAgaWYobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT0gJ1BPU1QnKSB7XG4gICAgICAgIGRhdGEgPSBxdWVyeVN0cjtcbiAgICB9XG4gICAgZWxzZSBpZihtZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJykge1xuICAgICAgICB1cmwgKz0gcXVlcnlTdHI7XG4gICAgICAgIGRhdGEgPSAnJztcbiAgICB9XG4gICAgeGhyLm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2VuZChkYXRhKTtcbn1cblxuLyoqXG4gKiDmoLnmja7nu5nlrprnmoTlhYPntKDmqKHmnb9cbiAqIOeUn+aIkOaWsOeahGNhbnZhc+WvueixoVxuICogY2FudmFz5a+56LGh5LiO57uZ5a6a55qE5YWD57Sg5qih5p2/5YW35pyJ55u45ZCM55qE5a695bqm5ZKM6auY5bqmXG4gKiBAcGFyYW0gZWxlXG4gKiBAcGFyYW0gbmV3Q2xhc3NOYW1lXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG5ld0NhbnZhcyhlbGUsIG5ld0NsYXNzTmFtZSkge1xuICAgIGxldCBjYWNoZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGlmKG5ld0NsYXNzTmFtZSkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gY2FjaGVDYW52YXMuY2xhc3NOYW1lO1xuICAgICAgICBjYWNoZUNhbnZhcy5jbGFzc05hbWUgKz0gKGNsYXNzTmFtZSA9PT0gJyc/ICcnOiAnICcpICsgbmV3Q2xhc3NOYW1lO1xuICAgIH1cbiAgICBjYWNoZUNhbnZhcy53aWR0aCA9IGVsZS53aWR0aCB8fCBlbGUuY2xpZW50V2lkdGg7XG4gICAgY2FjaGVDYW52YXMuaGVpZ2h0ID0gZWxlLmhlaWdodCB8fCBlbGUuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGNhY2hlQ2FudmFzO1xufVxuXG4vKipcbiAqIOWwhnNyY0N0eOeUu+W4g+WGheWuuea3u+WKoOWIsGRlc3RDdHjnlLvluIPkuK1cbiAqIEBwYXJhbSBkZXN0Q3R4XG4gKiBAcGFyYW0gc3JjQ3R4XG4gKi9cbmZ1bmN0aW9uIHNob3dDYW52YXMoZGVzdEN0eCwgc3JjQ3R4KSB7XG4gICAgZGVzdEN0eC5kcmF3SW1hZ2Uoc3JjQ3R4LmNhbnZhcywgMCwgMCwgZGVzdEN0eC5jYW52YXMud2lkdGgsIGRlc3RDdHguY2FudmFzLmhlaWdodCk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy/mianlsZXmlrnms5VcbiAgICBleHRlbmQsXG4gICAgLy/nu6fmib9cbiAgICBpbmhlcml0LFxuICAgIC8v5byC5q2l572R57uc6K+35rGCXG4gICAgYWpheCxcbiAgICAvL+WIm+W7uuaWsOeahGNhbnZhc+WvueixoVxuICAgIG5ld0NhbnZhcyxcbiAgICAvL+WwhnNyY0N0eOeUu+W4g+WGheWuuea3u+WKoOWIsGRlc3RDdHjnlLvluIPkuK1cbiAgICBzaG93Q2FudmFzXG59OyIsImNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSAxMDAwIC8gNjA7XG4vL+WIneWni+WMlueKtuaAgVxuY29uc3QgU1RBVEVfSU5JVElBTCA9IDA7XG4vL+W8gOWni+eKtuaAgVxuY29uc3QgU1RBVEVfU1RBUlQgPSAxO1xuLy/lgZzmraLnirbmgIFcbmNvbnN0IFNUQVRFX1NUT1AgPSAyO1xuLyoqXG4gKiBhbmltYXRpb25cbiAqL1xuY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0XHQvL+aJgOaciemDveS4jeaUr+aMge+8jOeUqHNldFRpbWVvdXTlhbzlrrlcblx0XHRmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgKGNhbGxiYWNrLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwpKTsgLy8gbWFrZSBpbnRlcnZhbCBhcyBwcmVjaXNlIGFzIHBvc3NpYmxlLlxuXHRcdH07XG59KSgpO1xuXG4vKipcbiAqIGNhbmNlbCByYWZcbiAqL1xuY29uc3QgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuXHRcdGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChpZCk7XG5cdFx0fTtcbn0pKCk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBib2FyZFxuICogQHBhcmFtIGludGVydmFsIOavj+S4gOasoeWbnuiwg+eahOmXtOmalOaXtumXtFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEFuaW1hdGlvbihpbnRlcnZhbCkge1xuXHR0aGlzLmludGVydmFsID0gaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcblx0dGhpcy50aW1lciA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0lOSVRJQUw7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xufVxuXG4vKipcbiAqIOaXtumXtOi9tOS4iuavj+S4gOasoeWbnuiwg+aJp+ihjOeahOWHveaVsFxuICogQHBhcmFtIHRpbWUg5LuO5Yqo55S75byA5aeL5Yiw5b2T5YmN5omn6KGM55qE5pe26Ze0XG4gKi9cbkFuaW1hdGlvbi5wcm90b3R5cGUub25lbnRlcmZyYW1lID0gZnVuY3Rpb24odGltZSkge1xuXG59O1xuLyoqXG4gKiDlvIDlp4vliqjnlLtcbiAqL1xuQW5pbWF0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9TVEFSVClcbiAgICAgICAgcmV0dXJuO1xuICAgIHRoaXMuc3RhdGUgPSBTVEFURV9TVEFSVDtcblxuICAgIHN0YXJ0QW5pbWF0aW9uKHRoaXMsICtuZXcgRGF0ZSgpKTtcbn07XG5cbi8qKlxuICog6YeN5paw5byA5aeL5Yqo55S7XG4gKi9cbkFuaW1hdGlvbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfU1RBUlQpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIXRoaXMuZHVyIHx8ICF0aGlzLmludGVydmFsKVxuICAgICAgICByZXR1cm47XG5cbiAgICB0aGlzLnN0YXRlID0gU1RBVEVfU1RBUlQ7XG5cbiAgICAvL+aXoOe8nei/nuaOpeWBnOatouWKqOeUu+eahOeKtuaAgVxuICAgIHN0YXJ0QW5pbWF0aW9uKHRoaXMsICtuZXcgRGF0ZSgpIC0gdGhpcy5kdXIpO1xufTtcblxuLyoqXG4gKiDlgZzmraLliqjnlLtcbiAqL1xuQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFNUQVRFX1NUQVJUKVxuICAgICAgICByZXR1cm47XG4gICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1NUT1A7XG5cbiAgICAvL+WmguaenOWKqOeUu+W8gOWni+i/h++8jOWImeiusOW9leWKqOeUu+S7juW8gOWni+WIsOW9k+WJjeaJgOe7j+WOhueahOaXtumXtFxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSkge1xuICAgICAgICB0aGlzLmR1ciA9ICtuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgfVxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xufTtcblxuQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRUYXNrID0gZnVuY3Rpb24odGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiDml7bpl7TovbTliqjnlLvlkK/liqjlh73mlbBcbiAqIEBwYXJhbSBhbmltYXRpb24g5pe26Ze06L205a6e5L6LXG4gKiBAcGFyYW0gc3RhcnRUaW1lIOWKqOeUu+W8gOWni+aXtumXtOaIs1xuICovXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbihhbmltYXRpb24sIHN0YXJ0VGltZSkge1xuICAgIC8v6K6w5b2V5LiK5LiA5qyh5Zue6LCD55qE5pe26Ze05oizXG4gICAgbGV0IGxhc3RUaWNrID0gK25ldyBEYXRlKCk7XG5cbiAgICBhbmltYXRpb24uc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgIG5leHRUaWNrLmludGVydmFsID0gYW5pbWF0aW9uLmludGVydmFsO1xuICAgIG5leHRUaWNrKCk7XG5cbiAgICAvKipcbiAgICAgKiDmr4/kuIDluKfmiafooYznmoTlh73mlbBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgICAgICAgbGV0IG5vdyA9ICtuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGFuaW1hdGlvbi50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShuZXh0VGljayk7XG5cbiAgICAgICAgLy/lpoLmnpzlvZPliY3ml7bpl7TkuI7kuIrkuIDmrKHlm57osIPnmoTml7bpl7TmiLPnm7jlt67lpKfkuo7miJHku6zorr7nva7nmoTpl7TpmpTml7bpl7TvvIzooajnpLrlj6/ku6XmiafooYzkuIDmrKHlm57osIPlh73mlbDjgIJcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RUaWNrID49IGFuaW1hdGlvbi5pbnRlcnZhbCkge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gbm93IC0gc3RhcnRUaW1lO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrKGR1cmF0aW9uKSk7XG4gICAgICAgICAgICBhbmltYXRpb24ub25lbnRlcmZyYW1lKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGxhc3RUaWNrID0gbm93O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1hdGlvbjsiLCJjb25zdCB7ZXh0ZW5kLCBuZXdDYW52YXMsIHNob3dDYW52YXN9ID0gcmVxdWlyZSgnLi4vYmFzZS91dGlscycpO1xuXG4vKipcbiAqIOWbvuWxguWvueixoVxuICogQHBhcmFtIGJvYXJkXG4gKiBAcGFyYW0gYXR0cmlidXRlc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIExheWVyKGJvYXJkLCBjbGFzc05hbWUsIGFscGhhKSB7XG4gICAgLy/nlLvmnb/lr7nosaFcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG5cbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAvL+mAj+aYjuaooeW8j1xuXHR0aGlzLmFscGhhID0gYWxwaGE7XG5cdC8v5Zu+5YWD6Zif5YiXXG5cdHRoaXMuZ3JhcGhzID0gW107XG5cdC8v6ZqQ6JeP55qE5Zu+5YWD6Zif5YiXXG5cdHRoaXMuX2hpZGVfZ3JhcGhzID0gW107XG5cblx0Y2xhc3NOYW1lID0gJ2JvYXJkLWNhbnZhcycgKyAodHlwZW9mIGNsYXNzTmFtZSA9PSAndW5kZWZpbmVkJz8gJycgOiAnICcgKyBjbGFzc05hbWUpO1xuICAgIC8vIGxldCBjYW52YXMgPSBuZXdDYW52YXModGhpcy5ib2FyZC5lbGUsIGNsYXNzTmFtZSk7XG4gICAgLy8gbGV0IGNhY2hlQ2FudmFzID0gbmV3Q2FudmFzKGNhbnZhcywgY2xhc3NOYW1lKTtcbiAgICBsZXQgY2FjaGVDYW52YXMgPSBuZXdDYW52YXModGhpcy5ib2FyZC5lbGUsIGNsYXNzTmFtZSk7XG4gICAgaWYodHlwZW9mIHRoaXMuYWxwaGEgPT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5hbHBoYSA9PT0gdHJ1ZSkge1xuICAgICAgICAvL+ebruagh2NhbnZhc+S4iuS4i+aWh1xuICAgICAgICAvLyB0aGlzLmRlc3RDdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgLy/pmpDol49jYW52YXPkuIrkuIvmlodcbiAgICAgICAgdGhpcy5jdHggPSBjYWNoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgICAvL+S4jemAj+aYjueahOeUu+W4g1xuICAgIGVsc2Uge1xuICAgICAgICAvL+ebruagh2NhbnZhc+S4iuS4i+aWh1xuICAgICAgICAvLyB0aGlzLmRlc3RDdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7YWxwaGE6IGZhbHNlfSk7XG4gICAgICAgIC8v6ZqQ6JePY2FudmFz5LiK5LiL5paHXG4gICAgICAgIHRoaXMuY3R4ID0gY2FjaGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7YWxwaGE6IGZhbHNlfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiDmianlsZXln7rnoYDmlrnms5VcbiAqL1xuZXh0ZW5kKExheWVyLnByb3RvdHlwZSwge1xuICAgIC8v6I635Y+W55S75p2/5a+56LGhXG4gICAgZ2V0Qm9hcmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9LFxuICAgIC8v5bCGIGxheWVyIOe9rumhtlxuICAgIHRvcCgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5yZW1vdmVMYXllcih0aGlzKTtcbiAgICAgICAgdGhpcy5ib2FyZC5wdXNoTGF5ZXIodGhpcyk7XG4gICAgfSxcbiAgICAvL+WwhiBsYXllciDnva7lupVcbiAgICBib3R0b20oKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucmVtb3ZlTGF5ZXIodGhpcyk7XG4gICAgICAgIHRoaXMuYm9hcmQudW5zaGlmdExheWVyKHRoaXMpO1xuICAgIH0sXG4gICAgLy/ph43nva5jYW52YXPnmoTlpKflsI9cbiAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jdHguY2FudmFzLndpZHRoID0gd2lkdGggfHwgdGhpcy5jdHguY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIC8vIHRoaXMuZGVzdEN0eC5jYW52YXMud2lkdGggPSB3aWR0aCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoO1xuICAgICAgICAvLyB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodDtcbiAgICB9LFxuXHQvL+WvvOWHuuWbvueJh1xuXHRleHBvcnQoKSB7XG4gICAgICAgIGxldCBpbWdEYXRhID0gdGhpcy5jdHguY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBpbWdEYXRhO1xuXG4gICAgICAgIHJldHVybiBpbWc7XG5cdH1cbn0pO1xuXG4vKipcbiAqIOaJqeWxleWbvuWFg+ebuOWFs+aWueazlVxuICovXG5leHRlbmQoTGF5ZXIucHJvdG90eXBlLCB7XG4gICAgLy/ojrflj5blm77lhYPliJfooahcbiAgICBnZXRHcmFwaHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaHM7XG4gICAgfSxcbiAgICAvL+WcqOmYn+WIl+WJjemdouaPkuWFpeWbvuWFg1xuICAgIHVuc2hpZnRHcmFwaChncmFwaCkge1xuICAgICAgICBpZih0aGlzLmdyYXBocy5pbmRleE9mKGdyYXBoKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ncmFwaHMudW5zaGlmdChncmFwaCk7XG4gICAgfSxcbiAgICAvL+WcqOmYn+WIl+WJjemdouenu+mZpOWbvuWFg1xuICAgIC8vIHNoaWZ0R3JhcGgoKSB7XG4gICAgLy8gICAgIGxldCBncmFwaCA9IHRoaXMuZ3JhcGhzLnNoaWZ0KCk7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIGdyYXBoO1xuICAgIC8vIH0sXG4gICAgLy/lnKjpmJ/liJfmnKvlsL7ov73liqDlm77lhYNcbiAgICBwdXNoR3JhcGg6IGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgIGlmKHRoaXMuZ3JhcGhzLmluZGV4T2YoZ3JhcGgpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyYXBocy5wdXNoKGdyYXBoKTtcbiAgICB9LFxuICAgIC8v5Zyo6Zif5YiX5pyr5bC+56e76Zmk5Zu+5YWDXG4gICAgLy8gcG9wR3JhcGgoKSB7XG4gICAgLy8gICAgIGxldCBncmFwaCA9IHRoaXMuZ3JhcGhzLnBvcCgpO1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiBncmFwaDtcbiAgICAvLyB9LFxuICAgIC8v5Yig6Zmk5Zu+5YWDXG4gICAgcmVtb3ZlR3JhcGg6IGZ1bmN0aW9uKGdyYXBoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhzLnNwbGljZSh0aGlzLmdyYXBocy5pbmRleE9mKGdyYXBoKSwgMSk7XG4gICAgICAgIHRoaXMuX2hpZGVfZ3JhcGhzLnNwbGljZSh0aGlzLl9oaWRlX2dyYXBocy5pbmRleE9mKGdyYXBoKSwgMSk7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5omp5bGV57uY5Yi257G75pa55rOVXG4gKi9cbmV4dGVuZChMYXllci5wcm90b3R5cGUsIHtcbiAgICAvL+iOt+WPlue7mOWbvueUu+eslFxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN0eDtcbiAgICB9LFxuICAgIC8v5riF6Zmk5omA5pyJ55S75p2/5YWD57Sg77yM5riF6Zmk5ZCO5L2/55SocmVmcmVzaOS4jeiDvemHjeaWsOa4suafk1xuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2hpZGVfZ3JhcGhzLmZvckVhY2goZ3JhcGggPT4gZ3JhcGguY2xlYXIoKSk7XG4gICAgICAgIHRoaXMuX2hpZGVfZ3JhcGhzID0gW107XG4gICAgfSxcbiAgICAvL+aTpumZpOeUu+adv++8jOaTpumZpOWQjuWPr+S7peS9v+eUqHJlZnJlc2jph43mlrDmuLLmn5NcbiAgICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN0eC5jYW52YXMud2lkdGgsIHRoaXMuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAvLyB0aGlzLmRlc3RDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGVzdEN0eC5jYW52YXMud2lkdGgsIHRoaXMuZGVzdEN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICB9LFxuICAgIC8v5Yi35pawXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgLy/liLfmlrDlm77lhYPkv6Hmga9cbiAgICAgICAgdGhpcy5ncmFwaHMuZm9yRWFjaChncmFwaCA9PiBncmFwaC5yZWZyZXNoKCkpO1xuICAgICAgICAvL+aYvuekuuWbvueJh+WGheWuuVxuICAgICAgICAvLyBzaG93Q2FudmFzKHRoaXMuZGVzdEN0eCwgdGhpcy5jdHgpO1xuICAgIH0sXG5cdC8v5pi+56S6XG4gICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHRoaXMuX2hpZGVfZ3JhcGhzLmxlbmd0aCA9PSAwKSB7cmV0dXJuO31cbiAgICAgICAgdGhpcy5ncmFwaHMgPSB0aGlzLl9oaWRlX2dyYXBocztcbiAgICAgICAgdGhpcy5faGlkZV9ncmFwaHMgPSBbXTtcbiAgICB9LFxuXHQvL+makOiXj1xuICAgIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0aGlzLmdyYXBocy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMuX2hpZGVfZ3JhcGhzID0gdGhpcy5ncmFwaHM7XG4gICAgICAgIHRoaXMuZ3JhcGhzID0gW107XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXI7IiwiLy8gaW1wb3J0IFRleHQgZnJvbSBcIi4vc2hhcGVzL1RleHRcIjtcbi8vIGltcG9ydCB7ZXh0ZW5kfSBmcm9tIFwiLi4vYmFzZS91dGlsc1wiO1xuLy8gaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9jb21wb25lbnQvVmVjdG9yXCI7XG4vLyBpbXBvcnQgQ3V0UGFyYW1zIGZyb20gXCIuL2NvbXBvbmVudC9DdXRQYXJhbXNcIjtcbi8vIGltcG9ydCBTaGFkb3cgZnJvbSBcIi4vY29tcG9uZW50L1NoYWRvd1wiO1xuLy8gaW1wb3J0IEltZ01hbmFnZXIgZnJvbSBcIi4vc2hhcGVzL0ltZ01hbmFnZXJcIjtcbi8vIGltcG9ydCBCb2FyZCBmcm9tIFwiLi9Cb2FyZC5qc1wiO1xuLy8gaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi9BbmltYXRpb25cIjtcbi8vIGltcG9ydCBMYXllciBmcm9tIFwiLi9MYXllclwiO1xuLy8gaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9zaGFwZXMvQ2lyY2xlXCI7XG4vLyBpbXBvcnQgUG9seUxpbmUgZnJvbSBcIi4vc2hhcGVzL1BvbHlMaW5lXCI7XG4vLyBpbXBvcnQgUmVjdCBmcm9tIFwiLi9zaGFwZXMvUmVjdFwiO1xuLy8gaW1wb3J0IEltZyBmcm9tIFwiLi9zaGFwZXMvSW1nXCI7XG5yZXF1aXJlKCcuL2JvYXJkY29udGFpbmVyLmxlc3MnKTtcblxuY29uc3Qge2V4dGVuZCwgbmV3Q2FudmFzLCBzaG93Q2FudmFzfSA9IHJlcXVpcmUoJy4uL2Jhc2UvdXRpbHMnKTtcbmNvbnN0IFZlY3RvciA9IHJlcXVpcmUoJy4vY29tcG9uZW50L1ZlY3RvcicpO1xuY29uc3QgQ3V0UGFyYW1zID0gcmVxdWlyZSgnLi9jb21wb25lbnQvQ3V0UGFyYW1zJyk7XG5jb25zdCBTaGFkb3cgPSByZXF1aXJlKCcuL2NvbXBvbmVudC9TaGFkb3cnKTtcbmNvbnN0IEZvbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudC9Gb250Jyk7XG5cbmNvbnN0IEltZ01hbmFnZXIgPSByZXF1aXJlKCcuL3NoYXBlcy9JbWdNYW5hZ2VyJyk7XG5cbmNvbnN0IEFuaW1hdGlvbiA9IHJlcXVpcmUoJy4vQW5pbWF0aW9uJyk7XG5jb25zdCBMYXllciA9IHJlcXVpcmUoJy4vTGF5ZXInKTtcbmNvbnN0IENpcmNsZSA9IHJlcXVpcmUoJy4vc2hhcGVzL0NpcmNsZScpO1xuY29uc3QgUG9seUxpbmUgPSByZXF1aXJlKCcuL3NoYXBlcy9Qb2x5TGluZScpO1xuY29uc3QgUmVjdCA9IHJlcXVpcmUoJy4vc2hhcGVzL1JlY3QnKTtcbmNvbnN0IEltZyA9IHJlcXVpcmUoJy4vc2hhcGVzL0ltZycpO1xuY29uc3QgVGV4dCA9IHJlcXVpcmUoJy4vc2hhcGVzL1RleHQnKTtcblxuLy9jYW52YXMg5LiK5qCRXG5mdW5jdGlvbiB1cFRyZWUoY2FudmFzLCBlbGUsIGlzQmVmb3JlKSB7XG4gICAgLy/lnKjliY3pnaLmj5LlhaXlrZDoioLngrnvvIzopoHmsYLlhYPntKDlt7LlrZjlnKjlhbbku5blrZDoioLngrlcbiAgICBpZihpc0JlZm9yZSAmJiBlbGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGVsZS5pbnNlcnRCZWZvcmUoY2FudmFzLCBlbGUuY2hpbGRyZW5bMF0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlLmFwcGVuZChjYW52YXMpO1xuICAgIH1cbn1cbi8vY2FudmFzIOS4i+agkVxuLy8gZnVuY3Rpb24gZG93blRyZWUoY2FudmFzKSB7XG4vLyAgICAgY2FudmFzLnJlbW92ZSgpO1xuLy8gfVxuLyoqXG4gKiDlhajlsYDlr7nosaFcbiAqIEBwYXJhbSBlbGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBUb3BvYm9hcmQoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgLy/lm77lsYJcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIC8v6ZqQ6JeP55qE5Zu+5bGCXG4gICAgdGhpcy5faGlkZV9sYXllcnMgPSBbXTtcbiAgICBsZXQgZGVzdExheWVyID0gbmV3IExheWVyKHRoaXMsICdkZXN0LWNhbnZhcycpO1xuICAgIHVwVHJlZShkZXN0TGF5ZXIuZ2V0Q29udGV4dCgpLmNhbnZhcywgdGhpcy5lbGUpO1xuICAgIHRoaXMuZGVzdEN0eCA9IGRlc3RMYXllci5jdHg7XG59XG5cbi8qKlxuICog5omp5bGV5Z+656GA5pa55rOVXG4gKi9cbmV4dGVuZChUb3BvYm9hcmQucHJvdG90eXBlLCB7XG4gICAgLy/osIPmlbTnlLvmnb/lpKflsI9cbiAgICByZXNpemUod2lkdGgsIGhlaWdodCwgaXNDaGFuZ2VDb250YWluZXIpIHtcbiAgICAgICAgLy/kv67mlLlEb23lhYPntKDlpKflsI9cbiAgICAgICAgaWYoaXNDaGFuZ2VDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5lbGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICAvL+S/ruaUueeUu+W4g+Wkp+Wwj1xuICAgICAgICB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoID0gd2lkdGggfHwgdGhpcy5kZXN0Q3R4LmNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5kZXN0Q3R4LmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5kZXN0Q3R4LmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIC8v5L+u5pS55Zu+5bGCc2l6ZVxuICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSk7XG4gICAgICAgIC8v5Yi35paw55S75biD5YaF5a65XG4gICAgICAgIHRoaXMucmVmcmVzaCh0cnVlKTtcbiAgICB9LFxuICAgIC8v5a+85Ye65Zu+54mHXG4gICAgZXhwb3J0KCkge1xuICAgICAgICAvL+WvvOWHuueUu+adv+aVsOaNrlxuICAgICAgICBsZXQgaW1nRGF0YSA9IHRoaXMuZGVzdEN0eC5jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IGltZ0RhdGE7XG5cbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9XG59KTtcblxuLyoqXG4gKiDmianlsZXlm77lsYLnm7jlhbPmlrnms5VcbiAqL1xuZXh0ZW5kKFRvcG9ib2FyZC5wcm90b3R5cGUsIHtcbiAgICAvL+iOt+WPluWbvuWxguaVsOe7hFxuICAgIGdldExheWVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzO1xuICAgIH0sXG4gICAgLy/ojrflj5bmlrDnmoTlm77lsYLlr7nosaEs5LiOIGFkZExheWVyIOS4jeiDveWvueebuOWQjGxheWVy5a+56LGh5L2/55SoXG4gICAgbmV3TGF5ZXIoY2xhc3NOYW1lKSB7XG4gICAgICAgIGxldCBsYXllciA9IG5ldyBMYXllcih0aGlzLCBjbGFzc05hbWUsIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIHRoaXMucHVzaExheWVyKGxheWVyKTtcbiAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgIH0sXG4gICAgLy/lnKjpmJ/liJflvIDlp4vmj5LlhaXlm77lsYJcbiAgICB1bnNoaWZ0TGF5ZXIobGF5ZXIpIHtcbiAgICAgICAgaWYodGhpcy5sYXllcnMuaW5kZXhPZihsYXllcikgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXJzLnVuc2hpZnQobGF5ZXIpO1xuICAgICAgICAvL2NhbnZhcyDkuIrmoJFcbiAgICAgICAgLy8gdGhpcy51cFRyZWUobGF5ZXIsIHRydWUpO1xuICAgIH0sXG4gICAgLy/ku47pmJ/liJflvIDlp4vnp7vpmaTlm77lsYJcbiAgICAvLyBzaGlmdExheWVyKCkge1xuICAgIC8vICAgICAvL+acq+Wwvuenu+mZpFxuICAgIC8vICAgICBsZXQgbGF5ZXIgPSB0aGlzLmxheWVycy5zaGlmdCgpO1xuICAgIC8vICAgICAvL2NhbnZhcyDkuIvmoJFcbiAgICAvLyAgICAgLy8gdGhpcy5kb3duVHJlZShsYXllcik7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIGxheWVyO1xuICAgIC8vIH0sXG4gICAgLy/mt7vliqDlt7LlrZjlnKjnmoTlm77lsYLlr7nosaEs5LiOIG5ld0xheWVyIOS4jeiDveWvueebuOWQjGxheWVy5a+56LGh5L2/55SoXG4gICAgcHVzaExheWVyKGxheWVyKSB7XG4gICAgICAgIGlmKHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL+WKoOWFpeaYvuekuumYn+WIl1xuICAgICAgICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcbiAgICAgICAgLy9jYW52YXMg5LiK5qCRXG4gICAgICAgIC8vIHRoaXMudXBUcmVlKGxheWVyKTtcbiAgICB9LFxuICAgIC8v5LuO6Zif5YiX5pyr5bC+56e76Zmk5Zu+5bGCXG4gICAgLy8gcG9wTGF5ZXIoKSB7XG4gICAgLy8gICAgIC8v5pyr5bC+56e76ZmkXG4gICAgLy8gICAgIGxldCBsYXllciA9IHRoaXMubGF5ZXJzLnBvcCgpO1xuICAgIC8vICAgICAvL2NhbnZhcyDkuIvmoJFcbiAgICAvLyAgICAgLy8gdGhpcy5kb3duVHJlZShsYXllcik7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIGxheWVyO1xuICAgIC8vIH0sXG4gICAgLy/np7vpmaTmjIflrprnmoTlm77lsYLlr7nosaFcbiAgICByZW1vdmVMYXllcihsYXllcikge1xuICAgICAgICAvL+emu+W8gOaYvuekuuWSjOmakOiXj+mYn+WIl1xuICAgICAgICB0aGlzLmxheWVycy5zcGxpY2UodGhpcy5sYXllcnMuaW5kZXhPZihsYXllciksIDEpO1xuICAgICAgICB0aGlzLl9oaWRlX2xheWVycy5zcGxpY2UodGhpcy5faGlkZV9sYXllcnMuaW5kZXhPZihsYXllciksIDEpO1xuICAgICAgICAvL2NhbnZhcyDkuIvmoJFcbiAgICAgICAgLy8gdGhpcy5kb3duVHJlZShsYXllcik7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5omp5bGV57uY5Yi257G75pa55rOVXG4gKi9cbmV4dGVuZChUb3BvYm9hcmQucHJvdG90eXBlLCB7XG4gICAgLy/mmL7npLpcbiAgICBzaG93KCkge1xuICAgICAgICBpZih0aGlzLl9oaWRlX2xheWVycy5sZW5ndGggPT0gMCkge3JldHVybjt9XG4gICAgICAgIHRoaXMubGF5ZXJzID0gdGhpcy5faGlkZV9sYXllcnM7XG4gICAgICAgIHRoaXMuX2hpZGVfbGF5ZXJzID0gW107XG4gICAgfSxcbiAgICAvL+makOiXj1xuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmKHRoaXMubGF5ZXJzLmxlbmd0aCA9PSAwKSB7cmV0dXJuO31cbiAgICAgICAgdGhpcy5faGlkZV9sYXllcnMgPSB0aGlzLmxheWVycztcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICB9LFxuICAgIC8v5riF6Zmk5omA5pyJ55S75p2/5YWD57Sg77yM5riF6Zmk5ZCO5L2/55SocmVmcmVzaOS4jeiDvemHjeaWsOa4suafk1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgdGhpcy5faGlkZV9sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5jbGVhcigpKTtcbiAgICB9LFxuICAgIC8v5pOm6Zmk55S75p2/77yM5pOm6Zmk5ZCO5Y+v5Lul5L2/55SocmVmcmVzaOmHjeaWsOa4suafk1xuICAgIGNsZWFuKGlzTGF5ZXJDbGVhbikge1xuICAgICAgICBpc0xheWVyQ2xlYW4gJiYgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5jbGVhbigpKTtcbiAgICAgICAgdGhpcy5kZXN0Q3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRlc3RDdHguY2FudmFzLndpZHRoLCB0aGlzLmRlc3RDdHguY2FudmFzLmhlaWdodCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlsIbmiYDmnInlm77lsYLph43mlrDnu5jliLbliLDnlLvmnb9cbiAgICAgKiBAcGFyYW0gaXNMYXllclJlZnJlc2gg5Yaz5a6a5piv5ZCm6ZyA6KaB5a+55q+P5LiA5Liq5Zu+5bGC6YO96L+b6KGM5Yi35pawXG4gICAgICovXG4gICAgcmVmcmVzaDogZnVuY3Rpb24oaXNMYXllclJlZnJlc2gpIHtcbiAgICAgICAgdGhpcy5jbGVhbihpc0xheWVyUmVmcmVzaCk7XG4gICAgICAgIC8v5Yi35paw5Zu+5bGCXG4gICAgICAgIGlzTGF5ZXJSZWZyZXNoICYmIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIucmVmcmVzaCgpKTtcbiAgICAgICAgLy/liLfmlrDnlLvmnb9cbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XG4gICAgICAgICAgICBzaG93Q2FudmFzKHRoaXMuZGVzdEN0eCwgbGF5ZXIuZ2V0Q29udGV4dCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8qKlxuICog5omp5bGV6Z2Z5oCB5bGe5oCnXG4gKi9cbmV4dGVuZChUb3BvYm9hcmQsIHtcbiAgICBBbmltYXRpb24sIExheWVyLCBDaXJjbGUsIFBvbHlMaW5lLCBSZWN0LCBJbWcsIFRleHQsXG4gICAgSW1nTWFuYWdlcixcbiAgICBWZWN0b3IsIEN1dFBhcmFtcywgU2hhZG93LCBGb250XG59KTtcblxuLyoqXG4gKiDlhbzlrrlBTUTmqKHlvI9cbiAqL1xuaWYodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoJ1RvcG9ib2FyZCcsICgpID0+IFRvcG9ib2FyZCk7XG59XG5cbi8qKlxuICog5pq06Zyy5YWo5bGA5Y+Y6YePXG4gKi9cbmlmKHdpbmRvdykge1xuICAgIHdpbmRvd1snVEInXSA9IHdpbmRvd1snVG9wb2JvYXJkJ10gPSBUb3BvYm9hcmQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wb2JvYXJkOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZGNvbnRhaW5lci5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZGNvbnRhaW5lci5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmRjb250YWluZXIubGVzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImNvbnN0IFZlY3RvciA9IHJlcXVpcmUoJy4vVmVjdG9yJyk7XG5cbmZ1bmN0aW9uIEN1dFBhcmFtcyh4LCB5LCB3LCBoKSB7XG4gICAgVmVjdG9yLmNhbGwodGhpcywgeCwgeSk7XG5cbiAgICB0aGlzLncgPSB3O1xuICAgIHRoaXMuaCA9IGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3V0UGFyYW1zOyIsImNvbnN0IHtleHRlbmR9ID0gcmVxdWlyZSgnLi4vLi4vYmFzZS91dGlscycpO1xuXG5mdW5jdGlvbiBGb250KGZvbnRTaXplLCBmb250RmFtaWx5KSB7XG4gICAgdGhpcy5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIHRoaXMuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XG59XG5cbmV4dGVuZChGb250LnByb3RvdHlwZSwge1xuICAgIGdldEZvbnQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZvbnRTaXplfXB4ICR7dGhpcy5mb250RmFtaWx5fWA7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9udDsiLCJjb25zdCBWZWN0b3IgPSByZXF1aXJlKCcuL1ZlY3RvcicpO1xuXG5mdW5jdGlvbiBTaGFkb3coeCwgeSwgY29sb3IsIGJsdXIpIHtcbiAgICBWZWN0b3IuY2FsbCh0aGlzLCB4LCB5KTtcblxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmJsdXIgPSBibHVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYWRvdzsiLCJmdW5jdGlvbiBWZWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCB7aW5oZXJpdH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbi8v5ZyG5b2iXG5mdW5jdGlvbiBDaXJjbGUoe2xheWVyLCBvLCByLCB3aWR0aCwgY29sb3IsIGNsb3NlUGF0aCwgc2hhZG93fSkge1xuICAgIEdyYXBoLmNhbGwodGhpcywge2xheWVyLCBjbG9zZVBhdGgsIGNvbG9yLCBzaGFkb3d9KTtcblxuXHR0aGlzLm8gPSBvO1xuXHR0aGlzLnIgPSByO1xuXHR0aGlzLndpZHRoID0gd2lkdGg7XG59XG5pbmhlcml0KENpcmNsZSwgR3JhcGgsIHtcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5maWxsKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgY3R4LmFyYyhzZWxmLm8ueCwgc2VsZi5vLnksIHNlbGYuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHNlbGYuY29sb3I7XG4gICAgICAgICAgICBzZWxmLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZmlsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHN0cm9rZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuc3Ryb2tlKGZ1bmN0aW9uKGN0eCkge1xuXHRcdFx0Y3R4LmFyYyhzZWxmLm8ueCwgc2VsZi5vLnksIHNlbGYuciwgMCwgTWF0aC5QSSoyLCB0cnVlKTtcblx0XHRcdGN0eC5zdHJva2VTdHlsZSA9IHNlbGYuY29sb3I7XG5cdFx0XHRjdHgubGluZVdpZHRoID0gc2VsZi53aWR0aDtcbiAgICAgICAgICAgIHNlbGYuY2xvc2VQYXRoICYmIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdzdHJva2UnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2lyY2xlOyIsIlxuZnVuY3Rpb24gYWRkU2hhZG93KGN0eCwgc2hhZG93KSB7XG4gICAgY3R4LnNoYWRvd0JsdXIgPSBzaGFkb3cuYmx1cjtcbiAgICBjdHguc2hhZG93Q29sb3IgPSBzaGFkb3cuY29sb3I7XG4gICAgY3R4LnNoYWRvd09mZnNldFggPSBzaGFkb3cueDtcbiAgICBjdHguc2hhZG93T2Zmc2V0WSA9IHNoYWRvdy55O1xufVxuLy/nlLvlrrZcbmZ1bmN0aW9uIERyYXdlcihncmFwaCwgY3R4KSB7XG5cdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0dGhpcy5jdHggPSBjdHg7XG59XG5EcmF3ZXIucHJvdG90eXBlID0ge1xuICAgIGNsb3NlUGF0aDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH0sXG5cdGRyYXc6IGZ1bmN0aW9uKGV4ZWN1dG9yKSB7XG5cdFx0dGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cdFx0dGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFwaC5jb2xvcjtcblx0XHRhZGRTaGFkb3codGhpcy5jdHgsIHRoaXMuZ3JhcGguc2hhZG93KTtcbiAgICAgICAgZXhlY3V0b3IgJiYgZXhlY3V0b3IodGhpcy5jdHgpO1xuXHR9LCBcblx0ZmlsbDogZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0XHR0aGlzLmRyYXcoZXhlY3V0b3IpO1xuXHRcdHRoaXMuY3R4LmZpbGwoKTtcblx0fSwgXG5cdHN0cm9rZTogZnVuY3Rpb24oZXhlY3V0b3IpIHtcblx0XHR0aGlzLmRyYXcoZXhlY3V0b3IpO1xuXHRcdHRoaXMuY3R4LnN0cm9rZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERyYXdlcjsiLCJjb25zdCB7ZXh0ZW5kfSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcbmNvbnN0IERyYXdlciA9IHJlcXVpcmUoJy4vRHJhd2VyJyk7XG5jb25zdCBTaGFkb3cgPSByZXF1aXJlKCcuLi9jb21wb25lbnQvU2hhZG93Jyk7XG5cbmZ1bmN0aW9uIEdyYXBoKHtsYXllciwgY2xvc2VQYXRoLCBjb2xvciwgc2hhZG93fSkge1xuXHR0aGlzLmxheWVyID0gbGF5ZXI7XG4gICAgdGhpcy5kcmF3ZXIgPSBuZXcgRHJhd2VyKHRoaXMsIHRoaXMubGF5ZXIuZ2V0Q29udGV4dCgpKTtcblx0dGhpcy5tZXRob2RzID0gW107XG5cdHRoaXMuX2hpZGVfbWV0aG9kcyA9IFtdO1xuXHR0aGlzLmNsb3NlUGF0aCA9IGNsb3NlUGF0aDtcblxuXHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdHRoaXMuc2hhZG93ID0gc2hhZG93IHx8IG5ldyBTaGFkb3coMCwgJyMwMDAnLCAwLCAwKTtcblxuICAgIHRoaXMubGF5ZXIuYWRkR3JhcGgodGhpcyk7XG59XG5cbi8qKlxuICog5omp5bGV5Z+65pys5pa55rOVXG4gKi9cbmV4dGVuZChHcmFwaC5wcm90b3R5cGUsIHtcbiAgICBnZXRMYXllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXI7XG4gICAgfSxcblx0dG9wKCkge1xuICAgIFx0dGhpcy5sYXllci5yZW1vdmVHcmFwaCh0aGlzKTtcbiAgICBcdHRoaXMubGF5ZXIucHVzaEdyYXBoKHRoaXMpO1xuXHR9LFxuXHRib3R0b20oKSB7XG4gICAgXHR0aGlzLmxheWVyLnJlbW92ZUdyYXBoKHRoaXMpO1xuICAgIFx0dGhpcy5sYXllci51bnNoaWZ0R3JhcGgodGhpcyk7XG5cdH0sXG4gICAgcHVzaChtZXRob2QpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzLnB1c2gobWV0aG9kKTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiDmianlsZXnu5jlm77pg6jliIbmlrnms5VcbiAqL1xuZXh0ZW5kKEdyYXBoLnByb3RvdHlwZSwge1xuXHQvL+a4hemZpOaJgOacieeUu+adv+WFg+e0oO+8jOa4hemZpOWQjuS9v+eUqHJlZnJlc2jkuI3og73ph43mlrDmuLLmn5NcbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIHRoaXMuX2hpZGVfbWV0aG9kcyA9IFtdO1xuICAgIH0sXG5cdC8v6LCD55So5b2T5YmN5YWD57Sg55qE6K6w5b2V5pa55rOV77yM6YeN5paw57uY5Yi25Zu+5b2iXG4gICAgcmVmcmVzaCgpIHtcblx0XHR0aGlzLm1ldGhvZHMuZm9yRWFjaCh2YWx1ZSA9PiB7XG5cdFx0XHR0aGlzW3ZhbHVlXSgpO1xuXHRcdFx0dGhpcy5tZXRob2RzLnBvcCgpO1xuXHRcdH0pO1xuXHR9LFxuXHRzaG93KCkge1xuXHRcdGlmICh0aGlzLl9oaWRlX21ldGhvZHMubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5faGlkZV9tZXRob2RzID0gdGhpcy5tZXRob2RzO1xuXHRcdHRoaXMubWV0aG9kcyA9IFtdO1xuXHR9LFxuXHRoaWRlKCkge1xuXHRcdGlmICh0aGlzLm1ldGhvZHMubGVuZ3RoID09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5tZXRob2RzID0gdGhpcy5faGlkZV9tZXRob2RzO1xuXHRcdHRoaXMuX2hpZGVfbWV0aG9kcyA9IFtdO1xuXHR9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmFwaDsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcblxuLyoqXG4gKlxuICogQHBhcmFtIGltYWdlSnNvblxuICogQHBhcmFtIHNyYyBAdHlwZSBDdXRQYXJhbXNcbiAqIEBwYXJhbSBkc3QgQHR5cGUgQ3V0UGFyYW1zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW1nKHtsYXllciwgaW1hZ2UsIHNyYywgZHN0LCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aDogZmFsc2UsIHNoYWRvd30pO1xuXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIHRoaXMuZHN0ID0gZHN0O1xufVxuaW5oZXJpdChJbWcsIEdyYXBoLCB7XG4gICAgLy/mt7vliqDlm77niYdcbiAgICBkcmF3OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5zcmMueCwgdGhpcy5zcmMueSwgdGhpcy5zcmMudywgdGhpcy5zcmMuaCxcbiAgICAgICAgICAgICAgICB0aGlzLmRzdC54LCB0aGlzLmRzdC55LCB0aGlzLmRzdC53LCB0aGlzLmRzdC5oXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5kc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5kc3QueCwgdGhpcy5kc3QueSwgdGhpcy5kc3QudywgdGhpcy5kc3QuaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIHRoaXMubGF5ZXIuZ2V0Q29udGV4dCgpLmNhbnZhcy53aWR0aCwgdGhpcy5sYXllci5nZXRDb250ZXh0KCkuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnB1c2goJ2RyYXcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvL+e7mOWItumHjeWkjeW5s+mTuueahOWbvueJh1xuICAgIHJlcGVhdDogZnVuY3Rpb24oKSB7XG5cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbWc7IiwiY29uc3Qge2V4dGVuZCwgYWpheH0gPSByZXF1aXJlKCcuLi8uLi9iYXNlL3V0aWxzJyk7XG5cbi8v5pWw5o2u5YeG5aSH54q25oCB77yaMO+8muivt+axguacquWIneWni+WMlu+8mzHvvJrlvIDlp4vliqDovb3lm77niYfkv6Hmga/vvJsy77ya5bey5Yqg6L295Zu+54mH5L+h5oGv77yM5byA5aeL5Yqg6L295Zu+54mH77ybM++8muavj+WKoOi9veS4gOW8oOWbvueJh+iwg+eUqOS4gOasoe+8mzTvvJrmiYDmnInlm77niYfpg73liqDovb3lrozmiJBcbmNvbnN0IFNUQVRFX0lOSVRJQUwgPSAwO1xuY29uc3QgU1RBVEVfUkVTT1VSQ0VfSU5GT19QUkVfTE9BRCA9IDE7XG5jb25zdCBTVEFURV9SRVNPVVJDRV9JTkZPX1JFQURZID0gMjtcbmNvbnN0IFNUQVRFX1JFU09VUkNFX0xPQURJTkcgPSAzO1xuY29uc3QgU1RBVEVfUkVTT1VSQ0VfUkVBRFkgPSA0O1xuXG4vKipcbiAqIOWbvueJh+WKoOi9veeuoeeQhuWZqFxuICogQHBhcmFtIGltZ0pzb25VcmxcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbWdNYW5hZ2VyKHtpbWdKc29uVXJsLCBvbnJlYWR5c3RhdGVjaGFuZ2V9KSB7XG4gICAgdGhpcy5pbWdKc29uVXJsID0gaW1nSnNvblVybDtcbiAgICB0aGlzLmRhdGE7XG4gICAgdGhpcy5pbWdzID0ge307XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gU1RBVEVfSU5JVElBTDtcbiAgICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG9ucmVhZHlzdGF0ZWNoYW5nZTtcbn1cblxuLyoqXG4gKiDmianlsZXpnZnmgIHluLjph49cbiAqL1xuZXh0ZW5kKEltZ01hbmFnZXIsIHtcbiAgICBTVEFURV9JTklUSUFMLFxuICAgIFNUQVRFX1JFU09VUkNFX0lORk9fUFJFX0xPQUQsIFNUQVRFX1JFU09VUkNFX0lORk9fUkVBRFksXG4gICAgU1RBVEVfUkVTT1VSQ0VfTE9BRElORywgU1RBVEVfUkVTT1VSQ0VfUkVBRFlcbn0pO1xuXG5leHRlbmQoSW1nTWFuYWdlci5wcm90b3R5cGUsIHtcbiAgICBsb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBTVEFURV9SRVNPVVJDRV9JTkZPX1BSRV9MT0FEO1xuICAgICAgICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSAmJiB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICBhamF4KHtcbiAgICAgICAgICAgIHVybDogdGhpcy5pbWdKc29uVXJsLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgbGV0IGltZ3MgPSBkYXRhLmltYWdlcztcbiAgICAgICAgICAgICAgICBzZWxmLnJlYWR5U3RhdGUgPSBTVEFURV9SRVNPVVJDRV9JTkZPX1JFQURZO1xuICAgICAgICAgICAgICAgIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlICYmIHNlbGYub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaW1ncykge1xuICAgICAgICAgICAgICAgICAgICAvL+WIm+W7uuWbvueJh1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmltZ3NbaW1nc1trZXldLm5hbWVdID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8v5Yqg6L295Zu+54mHXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW1nc1tpbWdzW2tleV0ubmFtZV0uc3JjID0gaW1nc1trZXldLnVybDtcbiAgICAgICAgICAgICAgICAgICAgLy/nm5HlkKzliqDovb1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbWdzW2ltZ3Nba2V5XS5uYW1lXS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY291bnQgKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlYWR5U3RhdGUgPSBTVEFURV9SRVNPVVJDRV9MT0FESU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UgJiYgc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmNvdW50ID09IGltZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWFkeVN0YXRlID0gU1RBVEVfUkVTT1VSQ0VfUkVBRFk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UgJiYgc2VsZi5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW1nTWFuYWdlcjsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcbi8v5oqY57q/XG5mdW5jdGlvbiBQb2x5TGluZSh7bGF5ZXIsIGF4aXMsIHdpZHRoLCBjb2xvciwgY2xvc2VQYXRoLCBzaGFkb3d9KSB7XG4gICAgR3JhcGguY2FsbCh0aGlzLCB7bGF5ZXIsIGNsb3NlUGF0aCwgY29sb3IsIHNoYWRvd30pO1xuXG5cdHRoaXMuYXhpcyA9IGF4aXM7XG5cdHRoaXMud2lkdGggPSB3aWR0aCB8fCAxO1xufVxuaW5oZXJpdChQb2x5TGluZSwgR3JhcGgsIHtcbiAgICBzdHJva2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLnN0cm9rZShmdW5jdGlvbihjdHgpIHtcbiAgICAgICAgICAgIGxldCBheGlzID0gc2VsZi5heGlzO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyhheGlzWzBdLngsIGF4aXNbMF0ueSk7XG4gICAgICAgICAgICBheGlzLmZvckVhY2goZnVuY3Rpb24odmVjdG9yLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZihrZXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8odmVjdG9yLngsIHZlY3Rvci55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHNlbGYuY29sb3I7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gc2VsZi53aWR0aDtcbiAgICAgICAgICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xuICAgICAgICAgICAgc2VsZi5jbG9zZVBhdGggJiYgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnB1c2goJ3N0cm9rZScpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZHJhd2VyLmZpbGwoZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IHNlbGYuYXhpcztcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oYXhpc1swXS54LCBheGlzWzBdLnkpO1xuICAgICAgICAgICAgYXhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZlY3Rvciwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYoa2V5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjdHgubGluZVRvKHZlY3Rvci54LCB2ZWN0b3IueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc2VsZi5jb2xvcjtcbiAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBzZWxmLndpZHRoO1xuICAgICAgICAgICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgICAgICAgICBzZWxmLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZmlsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2x5TGluZTsiLCJjb25zdCBHcmFwaCA9IHJlcXVpcmUoJy4vR3JhcGgnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcblxuZnVuY3Rpb24gUmVjdCh7bGF5ZXIsIGN1dFBhcmFtcywgbGluZVdpZHRoLCBjb2xvciwgc2hhZG93fSkge1xuICAgIEdyYXBoLmNhbGwodGhpcywge2xheWVyLCBjbG9zZVBhdGg6IGZhbHNlLCBjb2xvciwgc2hhZG93fSk7XG5cbiAgICB0aGlzLmN1dFBhcmFtcyA9IGN1dFBhcmFtcztcbiAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbn1cblxuaW5oZXJpdChSZWN0LCBHcmFwaCwge1xuICAgIGRyYXc6IGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGN0eC5yZWN0KHNlbGYuY3V0UGFyYW1zLngsIHNlbGYuY3V0UGFyYW1zLnksIHNlbGYuY3V0UGFyYW1zLncsIHNlbGYuY3V0UGFyYW1zLmgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBzZWxmLmNvbG9yO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gc2VsZi5saW5lV2lkdGg7XG4gICAgfSxcbiAgICBmaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRyYXdlci5maWxsKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgc2VsZi5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnZmlsbCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHN0cm9rZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kcmF3ZXIuc3Ryb2tlKGZ1bmN0aW9uKGN0eCkge1xuICAgICAgICAgICAgc2VsZi5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHVzaCgnc3Ryb2tlJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Q7IiwiY29uc3QgR3JhcGggPSByZXF1aXJlKCcuL0dyYXBoJyk7XG5jb25zdCBWZWN0b3IgPSByZXF1aXJlKCcuLi9jb21wb25lbnQvVmVjdG9yJyk7XG5jb25zdCBGb250ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50L0ZvbnQnKTtcbmNvbnN0IHtpbmhlcml0fSA9IHJlcXVpcmUoJy4uLy4uL2Jhc2UvdXRpbHMnKTtcblxuZnVuY3Rpb24gcmVQb3NpdGlvbih0ZXh0KSB7XG4gICAgbGV0IGN0eCA9IHRleHQubGF5ZXIuZ2V0Q29udGV4dCgpO1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcigoY3R4LmNhbnZhcy53aWR0aCAtIGN0eC5tZWFzdXJlVGV4dCh0ZXh0LmNvbnRlbnQpLndpZHRoKSAvIDIpO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcigoY3R4LmNhbnZhcy5oZWlnaHQgLSB0ZXh0LmZvbnQuZm9udFNpemUpIC8gMik7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIFRleHQoe2xheWVyLCBwb3NpdGlvbiwgY29udGVudCwgZm9udCwgY29sb3IsIHNoYWRvd30pIHtcbiAgICBHcmFwaC5jYWxsKHRoaXMsIHtsYXllciwgY2xvc2VQYXRoOiB0cnVlLCBjb2xvciwgc2hhZG93fSk7XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMuZm9udCA9IGZvbnQgfHwgbmV3IEZvbnQoMTgsICflvq7ova/pm4Xpu5EnKTtcbiAgICB0aGlzLmlzQ2VudGVyID0gISBwb3NpdGlvbjtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb24gfHwgcmVQb3NpdGlvbih0aGlzKTtcbn1cblxuaW5oZXJpdChUZXh0LCBHcmFwaCwge1xuICAgIGZpbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXMsIGN0eCA9IHRoaXMuZHJhd2VyLmN0eDtcbiAgICAgICAgY3R4LmZvbnQgPSBzZWxmLmZvbnQuZ2V0Rm9udCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgaWYoc2VsZi5pc0NlbnRlcikge1xuICAgICAgICAgICAgc2VsZi5wb3NpdGlvbiA9IHJlUG9zaXRpb24oc2VsZik7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGxUZXh0KHNlbGYuY29udGVudCwgc2VsZi5wb3NpdGlvbi54LCBzZWxmLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmNsb3NlUGF0aCAmJiBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgdGhpcy5wdXNoKCdmaWxsJyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==