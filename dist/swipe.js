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
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__swipe_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swipe_item_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_swipe_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_swipe_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_swipe_scss__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Swipe", function() { return __WEBPACK_IMPORTED_MODULE_0__swipe_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return __WEBPACK_IMPORTED_MODULE_1__swipe_item_vue__["a"]; });






/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swipe_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0265a1a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swipe_vue__ = __webpack_require__(6);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swipe_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0265a1a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swipe_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/swipe/swipe.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0265a1a2", Component.options)
  } else {
    hotAPI.reload("data-v-0265a1a2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wind_dom_src_event__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_wind_dom_src_event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_wind_dom_src_event__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wind_dom_src_class__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wind_dom_src_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wind_dom_src_class__);
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'swipe',

  created() {
    this.dragState = {};
  },

  data() {
    return {
      ready: false,
      dragging: false,
      userScrolling: false,
      animating: false,
      index: 0,
      pages: [],
      timer: null,
      reInitTimer: null,
      noDrag: false,
      isDone: false
    };
  },

  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },

    speed: {
      type: Number,
      default: 300
    },

    defaultIndex: {
      type: Number,
      default: 0
    },

    auto: {
      type: Number,
      default: 3000
    },

    disabledDrag: {
      type: Boolean,
      default: false
    },

    continuous: {
      type: Boolean,
      default: true
    },

    showIndicators: {
      type: Boolean,
      default: false
    },

    noDragWhenSingle: {
      type: Boolean,
      default: true
    },

    prevent: {
      type: Boolean,
      default: false
    },

    stopPropagation: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    index(newIndex) {
      this.$emit('change', newIndex);
    }
  },

  methods: {
    swipeItemCreated() {
      if (!this.ready) return;

      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(() => {
        this.reInitPages();
      }, 100);
    },

    swipeItemDestroyed() {
      if (!this.ready) return;

      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(() => {
        this.reInitPages();
      }, 100);
    },

    translate(element, offset, speed, callback) {
      var direction = this.direction;

      if (speed) {
        this.animating = true;
        element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
        setTimeout(() => {
          if (direction === 'horizontal') {
            element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
          } else if (direction === 'vertical') {
            element.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;
          }
        }, 50);

        var called = false;

        var transitionEndCallback = () => {
          if (called) return;
          called = true;
          this.animating = false;
          element.style.webkitTransition = '';
          element.style.webkitTransform = '';
          if (callback) {
            callback.apply(this, arguments);
          }
        };

        Object(__WEBPACK_IMPORTED_MODULE_0_wind_dom_src_event__["once"])(element, 'webkitTransitionEnd', transitionEndCallback);
        setTimeout(transitionEndCallback, speed + 100); // webkitTransitionEnd maybe not fire on lower version android.
      } else {
        element.style.webkitTransition = '';
        if (direction === 'horizontal') {
          element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
        } else if (direction === 'vertical') {
          element.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;
        }
      }
    },

    reInitPages() {
      var children = this.$children;
      this.noDrag = children.length === 1 && this.noDragWhenSingle;

      var pages = [];
      var intDefaultIndex = Math.floor(this.defaultIndex);
      var defaultIndex = intDefaultIndex >= 0 && intDefaultIndex < children.length ? intDefaultIndex : 0;
      this.index = defaultIndex;

      children.forEach(function (child, index) {
        pages.push(child.$el);

        Object(__WEBPACK_IMPORTED_MODULE_1_wind_dom_src_class__["removeClass"])(child.$el, 'is-active');

        if (index === defaultIndex) {
          Object(__WEBPACK_IMPORTED_MODULE_1_wind_dom_src_class__["addClass"])(child.$el, 'is-active');
        }
      });

      this.pages = pages;
    },

    doAnimate(towards, options) {
      if (this.$children.length === 0) return;
      if (!options && this.$children.length < 2) return;

      var prevPage, nextPage, currentPage, pageHeight, offsetTop, pageWidth, offsetLeft;
      var speed = this.speed || 300;
      var index = this.index;
      var pages = this.pages;
      var pageCount = pages.length;
      var direction = this.direction;

      if (!options) {
        pageWidth = this.$el.clientWidth;
        pageHeight = this.$el.clientHeight;
        currentPage = pages[index];
        prevPage = pages[index - 1];
        nextPage = pages[index + 1];
        if (this.continuous && pages.length > 1) {
          if (!prevPage) {
            prevPage = pages[pages.length - 1];
          }
          if (!nextPage) {
            nextPage = pages[0];
          }
        }
        if (prevPage) {
          prevPage.style.display = 'block';
          if (direction === 'horizontal') {
            this.translate(prevPage, -pageWidth);
          } else if (direction === 'vertical') {
            this.translate(prevPage, -pageHeight);
          }
        }
        if (nextPage) {
          nextPage.style.display = 'block';
          if (direction === 'horizontal') {
            this.translate(nextPage, pageWidth);
          } else if (direction === 'vertical') {
            this.translate(nextPage, pageHeight);
          }
        }
      } else {
        prevPage = options.prevPage;
        currentPage = options.currentPage;
        nextPage = options.nextPage;
        pageHeight = options.pageHeight;
        offsetTop = options.offsetTop;
        pageWidth = options.pageWidth;
        offsetLeft = options.offsetLeft;
      }

      var newIndex;

      var oldPage = this.$children[index].$el;

      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1;
        }
        if (this.continuous && index === 0) {
          newIndex = pageCount - 1;
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1;
        }
        if (this.continuous && index === pageCount - 1) {
          newIndex = 0;
        }
      }

      var callback = () => {
        if (newIndex !== undefined) {
          var newPage = this.$children[newIndex].$el;
          Object(__WEBPACK_IMPORTED_MODULE_1_wind_dom_src_class__["removeClass"])(oldPage, 'is-active');
          Object(__WEBPACK_IMPORTED_MODULE_1_wind_dom_src_class__["addClass"])(newPage, 'is-active');

          this.index = newIndex;
        }
        if (this.isDone) {
          this.end();
        }

        if (prevPage) {
          prevPage.style.display = '';
        }

        if (nextPage) {
          nextPage.style.display = '';
        }
      };

      setTimeout(() => {
        if (towards === 'next') {
          this.isDone = true;
          this.before(currentPage);
          if (direction === 'horizontal') {
            this.translate(currentPage, -pageWidth, speed, callback);
          } else if (direction === 'vertical') {
            this.translate(currentPage, -pageHeight, speed, callback);
          }
          if (nextPage) {
            this.translate(nextPage, 0, speed);
          }
        } else if (towards === 'prev') {
          this.isDone = true;
          this.before(currentPage);
          if (direction === 'horizontal') {
            this.translate(currentPage, pageWidth, speed, callback);
          } else if (direction === 'vertical') {
            this.translate(currentPage, pageHeight, speed, callback);
          }
          if (prevPage) {
            this.translate(prevPage, 0, speed);
          }
        } else {
          this.isDone = false;
          this.translate(currentPage, 0, speed, callback);

          if (direction === 'horizontal' && typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              this.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage && offsetLeft < 0) {
              this.translate(nextPage, pageWidth, speed);
            }
          } else if (direction === 'horizontal') {
            if (prevPage) {
              this.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage) {
              this.translate(nextPage, pageWidth, speed);
            }
          }

          if (direction === 'vertical' && typeof offsetTop !== 'undefined') {
            if (prevPage && offsetTop > 0) {
              this.translate(prevPage, pageHeight * -1, speed);
            }
            if (nextPage && offsetTop < 0) {
              this.translate(nextPage, pageHeight, speed);
            }
          } else if (direction === 'vertical') {
            if (prevPage) {
              this.translate(prevPage, pageHeight * -1, speed);
            }
            if (nextPage) {
              this.translate(nextPage, pageHeight, speed);
            }
          }
        }
      }, 10);
    },

    next() {
      this.doAnimate('next');
    },

    prev() {
      this.doAnimate('prev');
    },

    before() {
      this.$emit('before', this.index);
    },

    end() {
      this.$emit('end', this.index);
    },

    doOnTouchStart(event) {
      if (this.noDrag || this.disabledDrag) return;

      var element = this.$el;
      var dragState = this.dragState;
      var touch = event.touches[0];

      dragState.startTime = new Date();
      dragState.startLeft = touch.pageX;
      dragState.startTop = touch.pageY;
      dragState.startTopAbsolute = touch.clientY;

      dragState.pageWidth = element.offsetWidth;
      dragState.pageHeight = element.offsetHeight;

      var prevPage = this.$children[this.index - 1];
      var dragPage = this.$children[this.index];
      var nextPage = this.$children[this.index + 1];

      if (this.continuous && this.pages.length > 1) {
        if (!prevPage) {
          prevPage = this.$children[this.$children.length - 1];
        }
        if (!nextPage) {
          nextPage = this.$children[0];
        }
      }

      dragState.prevPage = prevPage ? prevPage.$el : null;
      dragState.dragPage = dragPage ? dragPage.$el : null;
      dragState.nextPage = nextPage ? nextPage.$el : null;

      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block';
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block';
      }
    },

    doOnTouchMove(event) {
      if (this.noDrag || this.disabledDrag) return;

      var dragState = this.dragState;
      var touch = event.touches[0];

      dragState.currentLeft = touch.pageX;
      dragState.currentTop = touch.pageY;
      dragState.currentTopAbsolute = touch.clientY;

      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;

      var distanceX = Math.abs(offsetLeft);
      var distanceY = Math.abs(offsetTop);
      if (distanceX < 5 || distanceX >= 5 && distanceY >= 1.73 * distanceX) {
        this.userScrolling = true;
        return;
      } else {
        this.userScrolling = false;
        event.preventDefault();
      }
      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);

      var towards = offsetLeft < 0 ? 'next' : 'prev';

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
      }
      this.translate(dragState.dragPage, offsetLeft);
      if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
      }
    },

    doOnTouchEnd() {
      if (this.noDrag || this.disabledDrag) return;

      var dragState = this.dragState;

      var dragDuration = new Date() - dragState.startTime;
      var towards = null;

      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTop - dragState.startTop;
      var pageWidth = dragState.pageWidth;
      var index = this.index;
      var pageCount = this.pages.length;

      if (dragDuration < 300) {
        let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;
        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true;
        }
        if (fireTap) {
          this.$children[this.index].$emit('tap');
        }
      }

      if (dragDuration < 300 && dragState.currentLeft === undefined) return;

      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev';
      }

      if (!this.continuous) {
        if (index === 0 && towards === 'prev' || index === pageCount - 1 && towards === 'next') {
          towards = null;
        }
      }

      if (this.$children.length < 2) {
        towards = null;
      }

      this.doAnimate(towards, {
        offsetLeft: offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage
      });

      this.dragState = {};
    },

    initTimer() {
      if (this.auto > 0 && !this.timer) {
        this.timer = setInterval(() => {
          if (!this.continuous && this.index >= this.pages.length - 1) {
            return this.clearTimer();
          }
          if (!this.dragging && !this.animating) {
            this.next();
          }
        }, this.auto);
      }
    },

    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  destroyed() {
    if (this.timer) {
      this.clearTimer();
    }
    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer);
      this.reInitTimer = null;
    }
  },

  mounted() {
    this.ready = true;

    this.initTimer();

    this.reInitPages();

    var element = this.$el;

    element.addEventListener('touchstart', event => {
      if (this.prevent) event.preventDefault();
      if (this.stopPropagation) event.stopPropagation();
      if (this.animating) return;
      this.dragging = true;
      this.userScrolling = false;
      this.doOnTouchStart(event);
    });

    element.addEventListener('touchmove', event => {
      if (!this.dragging) return;
      if (this.timer) this.clearTimer();
      this.doOnTouchMove(event);
    });

    element.addEventListener('touchend', event => {
      if (this.userScrolling) {
        this.dragging = false;
        this.dragState = {};
        return;
      }
      if (!this.dragging) return;
      this.initTimer();
      this.doOnTouchEnd(event);
      this.dragging = false;
    });
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var bindEvent = function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

var unbindEvent = function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

var bindOnce = function (el, event, fn) {
  var listener = function () {
    if (fn) {
      fn.apply(this, arguments);
    }
    unbindEvent(el, event, listener);
  };
  bindEvent(el, event, listener);
};

module.exports = {
  on: bindEvent,
  off: unbindEvent,
  once: bindOnce
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

var hasClass = function (el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

var addClass = function (el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

var removeClass = function (el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

module.exports = {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mint-swipe" }, [
    _c(
      "div",
      { ref: "wrap", staticClass: "mint-swipe-items-wrap" },
      [_vm._t("default")],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showIndicators,
            expression: "showIndicators"
          }
        ],
        staticClass: "mint-swipe-indicators"
      },
      _vm._l(_vm.pages, function(page, $index) {
        return _c("div", {
          staticClass: "mint-swipe-indicator",
          class: { "is-active": $index === _vm.index }
        })
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0265a1a2", esExports)
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swipe_item_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_986e8dbe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swipe_item_vue__ = __webpack_require__(9);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_swipe_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_986e8dbe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_swipe_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/swipe/swipe-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-986e8dbe", Component.options)
  } else {
    hotAPI.reload("data-v-986e8dbe", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'swipe-item',

  mounted() {
    this.$parent && this.$parent.swipeItemCreated(this);
  },

  destroyed() {
    // this.$parent && this.$parent.swipeItemDestroyed(this);
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mint-swipe-item" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-986e8dbe", esExports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);