/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2016/5/13.
	 */

	var LoginPanel = __webpack_require__(1);
	var ProductList = __webpack_require__(6);
	var Tabbox = __webpack_require__(10);
	var Xynav = __webpack_require__(13);

	var IndexPage = React.createClass({
	  displayName: "IndexPage",

	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(Xynav, { XynavUri: "http://172.20.0.50/xywap/Public/imgs/cun-logo1.png", title: "小鱼存呗" }),
	      React.createElement(LoginPanel, { LoginPanelUri: "http://172.20.0.50/xywap/Public/imgs/denglu.png" }),
	      React.createElement(ProductList, { rate_t: "零活存", r_t1: "随存随取", rate: "3.50%", r_t1: "七日年化收益率", ProjectListUri: "http://172.20.0.50/xywap/Public/imgs/jinrb.png" }),
	      React.createElement(ProductList, { rate_t: "定期", r_t1: "追求更高收益", rate: "7.00%", r_t1: "预计年化收益率", ProjectListUri: "http://172.20.0.50/xywap/Public/imgs/jinrb.png" }),
	      React.createElement(Tabbox, null)
	    );
	  }
	});

	ReactDOM.render(React.createElement(IndexPage, null), document.getElementById("example"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2016/5/9.
	 */

	var style = __webpack_require__(2);

	var LoginPanel = React.createClass({
	  displayName: "LoginPanel",

	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "box" },
	      React.createElement(
	        "div",
	        { className: "login" },
	        React.createElement(
	          "a",
	          { href: "/Home/Login/login.html" },
	          React.createElement("img", { src: this.props.LoginPanelUri }),
	          React.createElement(
	            "p",
	            null,
	            "登录"
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = LoginPanel;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./LoginPanel.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./LoginPanel.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".box {\r\n    width: 100%;\r\n    height: 158px;\r\n    /* background: -webkit-linear-gradient(-45deg,#284b78,#1b3b68); */\r\n    background: -webkit-linear-gradient(-45deg,#284b78,#1b3b68);\r\n    /* border-bottom: 1px solid #566e90; */\r\n    -webkit-box-shadow: 0px 1px 4px #777;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.login {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n.login a {\r\n    display: block;\r\n    padding-top: 26px;\r\n}\r\n.login img {\r\n    width: 77px;\r\n    height: 77px;\r\n}\r\n.login p {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding-top: 8px;\r\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2016/5/9.
	 */

	var style = __webpack_require__(7);

	var ProjectList = React.createClass({
	  displayName: "ProjectList",


	  getInitialState: function () {
	    return {

	      rate: ""

	    };
	  },
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "ProjectListbox" },
	      React.createElement("img", { src: this.props.ProjectListUri }),
	      React.createElement(
	        "div",
	        { className: "b_c" },
	        React.createElement(
	          "div",
	          null,
	          React.createElement(
	            "p",
	            { className: "rate_t" },
	            this.state.rate
	          ),
	          React.createElement(
	            "p",
	            { className: "r_t1" },
	            this.props.r_t1
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "textRight" },
	          React.createElement(
	            "p",
	            { className: "rate" },
	            this.props.rate
	          ),
	          React.createElement(
	            "p",
	            { className: "r_t1" },
	            this.props.r_t1
	          )
	        )
	      )
	    );
	  },
	  componentDidMount: function () {
	    $.getJSON("http://172.20.0.50/xywap/Home/index/testAjax?callback=?", function (json) {
	      this.setState({ rate: json.command });
	    }.bind(this));

	    //$.ajax({
	    //  url:"http://172.20.0.50/xywap/Home/index/testAjax",
	    //  type:"POST",
	    //  data:"",
	    //  success: function (data) {
	    //    console.log(data)
	    //  },
	    //  error: function (data) {
	    //    console.log(data)
	    //  }
	    // })
	  }
	});

	module.exports = ProjectList;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./ProjectList.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./ProjectList.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".ProjectListbox{\r\n    width: 100%;\r\n}\r\n\r\n\r\n\r\n.ProjectListbox div{\r\n    display: inline-block;\r\n    width: 35%;\r\n    vertical-align: top;\r\n}\r\n\r\n.ProjectListbox .b_c {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 44px;\r\n    border-bottom: 1px #e6e6e6 solid;\r\n    padding-left: 70px;\r\n    padding-top: 13px;\r\n    padding-bottom: 14px;\r\n}\r\n\r\n.ProjectListbox img{\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 31px;\r\n    height: 31px;\r\n    margin: 20px;\r\n}\r\n\r\n.textRight{\r\n    text-align: right;\r\n}\r\n\r\n.rate_t {\r\n    font-size: 18px;\r\n    color: #434343;\r\n}\r\n\r\n.rate {\r\n    color: #f15934;\r\n    font-size: 18px;\r\n}\r\n\r\n.r_t1 {\r\n    font-size: 12px;\r\n    color: #979797;\r\n    margin-top: 5px;\r\n}\r\n\r\n.tab1 {\r\n    width: 23px;\r\n    height: 21px;\r\n    background: url(" + __webpack_require__(9) + ") no-repeat;\r\n    background-position: 0% 100%;\r\n    background-size: 100% 200%;\r\n}\r\n\r\n.tab i {\r\n    margin-top: 8px;\r\n    display: block;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABSCAYAAAArWeaNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGQjEyNTdBQkJEODZFNTExOTQyRDgyNjAyRUQzMDJGQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RUM3RkFEODg2QzMxMUU1OEJFMDhFQUJCOUQ2RTYwNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RUM3RkFENzg2QzMxMUU1OEJFMDhFQUJCOUQ2RTYwNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZDMTI1N0FCQkQ4NkU1MTE5NDJEODI2MDJFRDMwMkZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZCMTI1N0FCQkQ4NkU1MTE5NDJEODI2MDJFRDMwMkZBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XmqMhwAAAxBJREFUeNrsml9oTXEcwM81rkxMjRckZVHKHtQeSFyxdZeUhUIk90H2JPNy8SDSOvMgiTUvW8IeFIoHNOOi2R548Kc9sMmjmloeeJh0fL7tp7Ss7dx7fuf+Tr6nPn23e36/8/ucs+/v1+/se1NBEHhJPGZ4CT1UXMVVXMVVXMVV3BnxhfnCXJiVKHGEVxAGoYefqxIhjmgtoQ/Ow0fo5bNFTosjuI7wGFq++pkrxMPwFJ5xbklU46Si3I8j1kC4CTmk7084d9LcxBbODTvzxBHbSbgBuydKy8FnrSZ1+mi7xglxRHKEy7ANwcJk7TjXLikET0xKlS9VEDhGELKIDU6zz3ZCJ+yjT0/s4gicJeyFegQ+h+ybIdyCZvrejkWcQVOES7AJGhj4S5E3Xke4B6e4RqdVcQarIHTBSmhkwNESU2014SFc5FoXbE5OSY+lZlkbLXVim3mxEY5zE2ttii+Gawz4Paql1MyPDzBPd4f/OAIXbrgYgW8wX18kVFzFVdx58TGYnUTxHzBHU0XFHRD/Celyi88soo9sZ9ezdz4Yscsy2+IDsBwyEYu/hfexveXr5FRxFVdxFVdxFVfxJIrn8/lqaLR1fSubLISlLNgLq6ANTvi+Hzj9xJGWivJLkJKglA+PQDufVzgrjpyUAfuNeBNPWQpTUm6RUuJ1zqedE0dKyn8v4C7sR1r+T+IR38gbE2yAO7SrdEYcGUkJKYNfldRA9tff5/l9iCA3VgMPaF9V9smJhKRBN5xG0J+irXwR4ZE3XhzI0nykLE8ckZyRPjqVtHnyIrrZvHA/N6tPvOIMKtVkKXEfQqhjuv1oKxWNLHySSWxWoXjEGUxKhudgFyLdYfvTR/5P2GRWn36uV2s1xxngT0X5AOxAoFBiqsnaLt9p2WNyfsDWE98qqSGxVGnz5GX1aZZlEs7YTBVZg0cY8FVU67/ZCshan45tVdFtrYpPfoSq07gkHqpOo6mi4iqu4ioe9pA9+oIkigf/TaoUU+es5AWgK2KPGtvi77zxr1tH/ZeS/f3rMB1+CzAAu2AOYgPSDqAAAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2016/5/9.
	 */

	var style = __webpack_require__(11);

	var ProjectList = React.createClass({
	  displayName: "ProjectList",

	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "tab_box" },
	      React.createElement(
	        "div",
	        { className: "tab" },
	        React.createElement(
	          "a",
	          { className: "home tab_on", href: "http://172.20.90.10/Home/index/index.html" },
	          React.createElement("i", { className: "tab1" }),
	          React.createElement(
	            "span",
	            null,
	            "首页"
	          )
	        ),
	        React.createElement(
	          "a",
	          { className: "m_money", href: "http://172.20.90.10/Home/index/moneyIndex.html" },
	          React.createElement("i", { className: "tab2" }),
	          React.createElement(
	            "span",
	            null,
	            "理财"
	          )
	        ),
	        React.createElement(
	          "a",
	          { className: "mine", href: "http://172.20.90.10/Home/index/mineIndex.html" },
	          React.createElement("i", { className: "tab3" }),
	          React.createElement(
	            "span",
	            null,
	            "sssssss"
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = ProjectList;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./Tabbox.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./Tabbox.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".tab_box {\r\n    width: 100%;\r\n    height: 57px;\r\n    position: fixed;\r\n    bottom: 0;\r\n    font-size: 0;\r\n    background: #fff;\r\n    border-top: 1px #e6e6e6 solid;\r\n    -webkit-box-shadow: 0 -1px 2px #e6e6e6;\r\n}\r\n\r\n.tab {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.tab .home {\r\n    position: absolute;\r\n    left: 0px;\r\n}\r\n.tab a {\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.tab .mine {\r\n    position: absolute;\r\n    right: 0px;\r\n}\r\n\r\n.tab_on .tab1, .tab_on .tab2, .tab_on .tab3 {\r\n    background-position: 0px 0px;\r\n}\r\n\r\n.tab span {\r\n    display: block;\r\n    font-size: 12px;\r\n    color: #777777;\r\n    margin-top: 5px;\r\n}", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2016/5/5.
	 */
	var style = __webpack_require__(14);

	var Xynav = React.createClass({
	    displayName: "Xynav",

	    render: function () {
	        return React.createElement(
	            "div",
	            { id: "Xynav" },
	            React.createElement("img", { src: this.props.XynavUri }),
	            React.createElement(
	                "span",
	                null,
	                this.props.title
	            )
	        );
	    }
	});

	module.exports = Xynav;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./nav.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./nav.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "#Xynav {\r\n    height: 40px;\r\n    width: 100%;\r\n    line-height: 40px;\r\n    position: relative;\r\n    background: -webkit-gradient(linear,left top,left bottom,from(#3c5a87),to(#325587));\r\n    background: -moz-linear-gradient(top,#3c5a87,#325587);\r\n    background: -o-gradient(linear,left top,left bottom,from(#3c5a87),to(#325587));\r\n    border-bottom: 2px solid #3e6093;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-align: center;\r\n}\r\n\r\n#Xynav img {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    left: 10px;\r\n    top:5px;\r\n    right:20px;\r\n}", ""]);

	// exports


/***/ }
/******/ ]);