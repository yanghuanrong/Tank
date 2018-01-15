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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/tankAll.gif";

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_tank__ = __webpack_require__(11);




//初始化p1玩家数据
const P1_TANK = {
    life: 3,                // 生命数
    dir: 'up',              // 初始方向
    id: 'me',               // id
    parent: 'left',         //父级元素
    className: 'tank',      // class
    status: 0,              // 0 普通状态；1 一星状态； 2 二星状态； 3 三星状态
    x: 128,                 // 初始的x轴坐标
    y: 384,                 // 初始的y轴坐标
    // 上移动时的动画
    t: [[0, -448], [-32, -480]],
    // 右移动时的动画
    r: [[-896, -1344], [-928, -1376]],
    // 下移动时的动画
    b: [[-1792, -2240], [-1825, -2273]],
    // 左移动时的动画
    l: [[-2688, -3136], [-2720, -3168]],
};

class Game {
    constructor() {
        this.key = {};  // 键盘按键对象
        this.level = 1; // 当前正在游戏的关卡
    }

    //初始化
    init() {
        new __WEBPACK_IMPORTED_MODULE_1__js_map__["a" /* default */](this.level);
    }

    //游戏开始
    GameStart() {
        this.init();
        this.p1 = new __WEBPACK_IMPORTED_MODULE_2__js_tank__["a" /* default */](P1_TANK);
        this.time = setInterval(() => {
            this.updateGame();
        }, 32)
    }

    //键盘按下
    keyDown() {
        document.onkeydown = e => {
            e.preventDefault();
            this.key[e.keyCode] = true;
            this.p1.play = true;
            return false
        }
    }

    //键盘抬起
    keyUp() {
        document.onkeyup = e => {
            e.preventDefault();
            this.key[e.keyCode] = false;
            this.p1.play = false;
        }
    }

    //玩家一控制
    OnePlayer() {
        if (this.key['87']) {
            this.p1.move('up');
        } else if (this.key['68']) {
            this.p1.move('right');
        } else if (this.key['83']) {
            this.p1.move('down');
        } else if (this.key['65']) {
            this.p1.move('left');
        }else {
            this.p1.animationStop();
        }
        if(this.key['74']){
            this.p1.bullet();
        }
    }

    //玩家控制
    ctrlPlayers() {
        this.keyDown();
        this.keyUp();
        this.OnePlayer();
    }

    //更新游戏
    updateGame() {
        this.ctrlPlayers();
    }
}

new Game().GameStart();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body{margin:0; padding:0; background-color:#FFF;}\r\n*{ margin: 0; padding: 0;}\r\nimg{border:none; vertical-align:top; display:block}\r\np.info{width:496px; height:40px; margin:20px auto; line-height:20px;}\r\n.float-left{float:left;}\r\n.clear-both{height:0; overflow:hidden; clear:both;}\r\n\r\n.wall,.bare,.flower,.iron,.water{width:16px; height:16px; float:left; overflow:hidden; position: relative;}\r\n\r\n.wall{background:url(" + __webpack_require__(0) + ") no-repeat 0 -96px;}\r\n.bare{background:#000;}\r\n.iron{background:url(" + __webpack_require__(0) + ") no-repeat -16px -96px;}\r\n.flower{background:url(" + __webpack_require__(0) + ") no-repeat -32px -96px; z-index: 5;}\r\n.water{background:url(" + __webpack_require__(0) + ") no-repeat -48px -96px;}\r\n#lair{width:32px; height:32px; background:url(" + __webpack_require__(0) + ") no-repeat -256px 0; z-index: 2;}\r\n\r\n#main{width:496px; height:416px; margin:20px auto; position:relative; background-color:#000; overflow:hidden;}\r\n#left,#right{ width:416px; height:416px; float:left; background:#000;position:relative;}\r\n#left span{ color: #F00}\r\n#right{width:80px;background-color: rgb(127, 127, 127);}\r\n\r\n.tank { background-image: url(" + __webpack_require__(5) + "); background-repeat: no-repeat; overflow: hidden; position: absolute; width: 32px; height: 32px; z-index: 3; top:384px; left:128px; }\r\n\r\n\r\n.bullet { background-image: url(" + __webpack_require__(6) + "); width: 8px; height: 8px; position: absolute; z-index: 4; background-repeat: no-repeat; }\r\n.Boom { background-image: url(" + __webpack_require__(7) + "); width: 64px; height: 64px; position: absolute; z-index: 4; }\r\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/Tank.png";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhIAAIAPcAAP///2wHAP///62trQAAAJlOAAYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///yH5BAEAAAAALAAAAAAgAAgAAAhEAAEIbNVKoMGDBgkqLIiwIcGECxkCiCiR4sSIFxdC1DgQo0WKDz+CzKiQpEaRKEta7MjRZMGUDw/G3KgSY0OEM28CCAgAOw=="

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABABAMAAACZybMtAAAAD1BMVEX///+1MSD///8AAABcAH405hh6AAAAAXRSTlMAQObYZgAAA4JJREFUeF7tmNGpLDkWBGObdeC4EC6UC2l2uXBdSBeOC8tSdNPc24/3NzP9pgNRKpT5FSAkxN+Nv8lv/MO5/a3aBP2hMVEu5MYHufD1UgQCgEmIagJg4MYHvA+SoAGfRCYAipoj6nGYgPns4ouGStFCgABCCsBJQJGluzA7U0L5GLzgFEGh28sOYB85gusAC0tnCpzvYPA//CVYEDsr7AKzfc7twylSZj2lH4MXUvDZJlDLBaFP1Yfw4vnZxQC0JDIDSIURChEACgwKrcBdIPnjDAbw1ym5JvLqRrMLlimzVaAF4ISZpWWhLABlCn+SQSE0KODL/PREcj7HAZAtwNJlcQGUAqDMLns1rmFhp29oUHgtCPXEAqj8wGgRTvTkzmkIs3SXAYSKHfTh+LK3MLvMDkUAfCuD3ifLT0414OXyRY4kGOSZlgIwLAtlFzorFxUGQHaE2QGAWfHGGxElovlVPmpGyct8VKPJU0FAD+M4/2cc1UO5iEdUR+e40jEeJvJWBkk0Ma9DiHOM5mVBouOhk2+B0UTH0XHis0KSy+DMjHko1rzfjTrd2bGUFwgsOOVVIWWPL+xRT54JO7Us4+4OMDsrJ2CFmS7AwFwFkNL3MijYtQcnP5Bqp7j4syDA7EoH+K5Y7MLM2unMFGYug9xZjl0WGMCCnG91krR26LwSSBvLQJEzP2N1OQqo/S6QMsPusoVBWE5EWAEWppXB2V0KvMNt5r88Uzp+NScvOHF77PTrpeOTyE4dyg9mH99hy4BABQZgBxZ2mc5wtd/tNoPO2LHhBcHZbvdAfmJoB/erKs+EWWSHocjAKgAV7MKwXBIXgKtf3+ok0TNtWiwvSK2Uhr4oCDvW8j0MFQr4xQAWZnYLAYp0OXioRArMzo33QiC8BhNz5HWHmBhN9DlHSBLVxFE1eigACT6Yx3RV4o0/BwMSkl/GIYZEnhEgHiaqhx7xMDzwIs/TVc2/531QT3KCBdLyDZl9HCVDkfM5uyJghl0AsPbf98Jqc0LOH35ldoYCUmYeFbxbxcKw4C7D9PNGfZHTCiAngdNa6bcHocIsYJFlpf0YBLAABDif1nJykQKechkUigAtNz7g0xfwsZJ7EBNIokeSw9FEgBsfwgVyEcN3hfcVPY5DTQCEGx/kG+JzFPLwiReJV/B7gx+EPAnVxCQAwd8a/OD33ySEO/nHG/wfNSW8XuR+ZTwAAAAASUVORK5CYII="

/***/ }),
/* 8 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 9 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const map = {
    level_1: {
        gkType: [
            [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
            [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 2, 2],
            [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 2, 2],
            [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 0, 0, 0, 0],
            [3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 3, 3, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 0, 0, 0, 0, 3, 3, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [2, 2, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [2, 2, 1, 1, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 7, 9, 0, 7, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 7, 0, 0, 7, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
        ],
        tankType: [1, 1, 2, 2, 1, 1, 0, 0, 2, 2, 1, 1, 0, 0, 2, 2, 1, 1, 0, 0]
    }
};


/**
 * 渲染当前关卡的地图。
 * @param {json} 接收地图数据.
 * @param {number} 接收目前正在玩的关卡。
 */
class drawMap{
    constructor(gk){
        const gkType = map[`level_${gk}`].gkType;
        let el = document.createDocumentFragment();
        for(let crs in gkType){
            for(let col in gkType[crs]){
                let ele = document.createElement('span');
                ele.style.position = 'absolute';
                ele.style.left = `${col * 16}px`;
                ele.style.top = `${crs * 16}px`;
                switch(gkType[crs][col]) {
                    case 0:
                        ele.className = 'bare';
                        ele.type = 0;
                        break;
                    case 1:
                        ele.className = 'wall';
                        ele.type = 1;
                        break;
                    case 2:
                        ele.className = 'iron';
                        ele.type = 2;
                        break;
                    case 3:
                        ele.className = 'flower';
                        ele.type = 3;
                        break;
                    case 7:
                        ele.className = 'wall';
                        ele.type = 7;
                        break;
                    case 9:
                        ele.id = 'lair';
                        ele.type = 9;
                        break;
                }
                el.appendChild(ele);
            }
        }
        document.querySelector('#left').appendChild(el);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (drawMap);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bullet__ = __webpack_require__(12);

/**
 * 坦克的控制类。
 * @param {string} 目标坦克.
 */
class tank {
    constructor({life,dir,id,parent,className,status,x,y,t,r,b,l}) {
        this.life = life;
        this.dir = dir;
        this.status = status;
        this.t = t;
        this.r = r;
        this.b = b;
        this.l = l;
        this.oParent = document.querySelector(`#${parent}`);
        this.obj = this.created(id,className,x,y);
        this.speed = 2; //移动速度
        this.animation = null;
        this.play = false;
    };
    /**
     * 创建坦克元素，
     * @param {string} id 元素标识
     * @param {string} className 元素样式
     * @param {number} x 坐标
     * @param {number} y 坐标
     * @return {object} 返回坦克dom对象
     */
    created(id,className,x,y){
        let obj = document.createElement('div');
        obj.id = id;
        obj.className = className;
        obj.style.top = y + 'px';
        obj.style.left = x + 'px';
        this.oParent.appendChild(obj);
        return obj;
    };
    /**
     * 移动
     * @param {string} 移动方向
     */
    move(dir) {
        switch (dir) {
            case 'up':
                this.moveUp();
                break;
            case 'right':
                this.moveRight();
                break;
            case 'down':
                this.moveDown();
                break;
            case 'left':
                this.moveLeft();
                break;
            default:
                break;
        }
        if(this.animation == null){
            this.animationStar();
        }else {
            this.animationStop();
        }
    }

    /**
     * 坦克移动方向动画
     */
    animationStar(){
        let positions;
        let index = 0;

        switch (this.dir){
            case 'left':
                positions = this.l[this.status];
                break;
            case 'right':
                positions = this.r[this.status];
                break;
            case 'up':
                positions = this.t[this.status];
                break;
            case 'down':
                positions = this.b[this.status];
                break;
        }

        let run = () => {
            this.obj.style.backgroundPosition = `${positions[index]}px 0`;
            index++;
            if(index >= positions.length){
                index = 0;
            }
            this.animation = setTimeout(run,2);
        };
        run();
    }
    /**
     * 清空坦克移动动画
     */
    animationStop(){
        clearInterval(this.animation);
        this.animation = null;
    }
    /**
     * 左移动
     */
    moveLeft() {
        if (this.obj.offsetLeft <= 0) {
            this.obj.style.left = 0;
        } else {
            this.obj.style.left = this.obj.offsetLeft - this.speed + 'px';
            if (this.axis()) {
                this.obj.style.left = this.obj.offsetLeft + this.speed + 'px';
            }
        }
        this.dir = 'left';
    }

    /**
     * 右移动
     */
    moveRight() {
        if (this.obj.offsetLeft >= this.oParent.offsetWidth - this.obj.offsetWidth) {
            this.obj.style.left = this.oParent.offsetWidth - this.obj.offsetWidth + 'px';
        } else {
            this.obj.style.left = this.obj.offsetLeft + this.speed + 'px';
            if (this.axis()) {
                this.obj.style.left = this.obj.offsetLeft - this.speed + 'px';
            }
        }
        this.dir = 'right';
    }

    /**
     * 上移动
     */
    moveUp() {
        if (this.obj.offsetTop <= 0) {
            this.obj.style.top = 0;
        } else {
            this.obj.style.top = this.obj.offsetTop - this.speed + 'px';
            if (this.axis()) {
                this.obj.style.top = this.obj.offsetTop + this.speed + 'px';
            }
        }
        this.dir = 'up';
    }

    /**
     * 下移动
     */
    moveDown() {
        if (this.obj.offsetTop >= this.oParent.offsetHeight - this.obj.offsetHeight) {
            this.obj.style.top = this.oParent.offsetHeight - this.obj.offsetHeight + 'px';
        } else {
            this.obj.style.top = this.obj.offsetTop + this.speed + 'px';
            if (this.axis()) {
                this.obj.style.top = this.obj.offsetTop - this.speed + 'px';
            }
        }
        this.dir = 'down';
    }

    /**
     * 坦克与墙的碰撞检测。
     * @return {Boolean} true 碰上 false 没碰
     */
    axis() {
        const wall = document.querySelectorAll('.wall');
        const iron = document.querySelectorAll('.iron');
        const allWall = [...wall, ...iron];
        for (let item of allWall) {
            if (this.casks(item)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 碰撞检测。
     * @return {Boolean}
     */
    casks(obj1) {
        const L1 = obj1.offsetLeft;
        const T1 = obj1.offsetTop;
        const R1 = L1 + obj1.offsetWidth;
        const B1 = T1 + obj1.offsetHeight;

        const L2 = this.obj.offsetLeft;
        const T2 = this.obj.offsetTop;
        const R2 = L2 + this.obj.offsetWidth;
        const B2 = T2 + this.obj.offsetHeight;

        if (L1 >= R2 || T1 >= B2 || R1 <= L2 || B1 <= T2) {
            return false;
        }
        return true;
    }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = tank;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class bullet{
    constructor(dir,speed,x,y){

    }
}
/* unused harmony export default */


/***/ })
/******/ ]);