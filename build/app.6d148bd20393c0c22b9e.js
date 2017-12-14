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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var a, account, animationOptions, c, child, d, delivery, device, deviceHeight, deviceWidth, flow, p, payment, s, scaleTransition, sum, summary;

({account} = __webpack_require__(1));

({child} = __webpack_require__(2));

({delivery} = __webpack_require__(3));

({payment} = __webpack_require__(4));

({summary} = __webpack_require__(5));

// Custom transition
scaleTransition = function(nav, layerA, layerB, overlay) {
  var transition;
  return transition = {
    layerA: {
      show: {
        scale: 1.0,
        opacity: 1
      },
      hide: {
        scale: 0.5,
        opacity: 0
      }
    },
    layerB: {
      show: {
        scale: 1.0,
        opacity: 1
      },
      hide: {
        scale: 0.5,
        opacity: 0
      }
    }
  };
};

Framer.Extras.Preloader.enable();

// setup device for presentation
device = new Framer.DeviceView();

device.deviceType = "fullscreen";

device.background.backgroundColor = "#212121";

deviceHeight = device.screen.height;

deviceWidth = device.screen.width;

Framer.Defaults.Layer.force2d = true;

s = Framer.Importer.load("app.framer/imported/app@2x");

a = new account(s);

a.init();

c = new child(s);

c.init();

d = new delivery(s);

d.init();

p = new payment(s);

p.init();

sum = new summary(s);

sum.init();

flow = new FlowComponent({
  width: 360,
  height: 640
});

flow.center();

flow.backgroundColor = "white";

flow.showNext(a.screenElement, scaleTransition);

// Set the default animation options
animationOptions = {
  curve: "spring(500,12,0)"
};

// On a click, go to the next state
// s.Account.on Events.Click, (event, layer) ->
// 	s.circle.stateCycle()

// imageLayer = new Layer
//     x: 100
//     y: 100
//     width: 250
//     height: 250
//     opacity: 0.1
//     backgroundColor: "green"

// imageLayer.center()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "account", function() { return account; });
var account = class account {
  constructor(s) {
    this.s = s;
    this.a = this.s.Account;
  }

  // @screenElement = new ScrollComponent
  //   width: 360
  //   height: 640
  //   backgroundColor: "white"

  // @screenElement.scrollHorizontal = false
  init() {
    return print("account initiated");
  }

};

// @a.parent = @screenElement.content


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "child", function() { return child; });
var child = class child {
  constructor(s) {
    this.s = s;
    this.c = this.s.Child_details;
    this.c2 = this.s.Child_details_2;
    this.screenElement = new ScrollComponent({
      width: 360,
      height: 640,
      backgroundColor: "white"
    });
    this.screenElement.scrollHorizontal = false;
  }

  init() {
    print("child details initiated");
    this.c.parent = this.screenElement.content;
    return this.c2.parent = this.screenElement.content;
  }

};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delivery", function() { return delivery; });
var delivery = class delivery {
  constructor(s) {
    this.s = s;
    this.d = this.s.Delivery_address;
    this.d2 = this.s.Delivery_address_2;
    this.screenElement = new ScrollComponent({
      width: 360,
      height: 640,
      backgroundColor: "white"
    });
    this.screenElement.scrollHorizontal = false;
  }

  init() {
    print("delivery initiated");
    this.d.parent = this.screenElement.content;
    return this.d2.parent = this.screenElement.content;
  }

};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payment", function() { return payment; });
var payment = class payment {
  constructor(s) {
    this.s = s;
    this.p = this.s.Payment_details;
    this.p2 = this.s.Payment_details_2;
    this.screenElement = new ScrollComponent({
      width: 360,
      height: 640,
      backgroundColor: "white"
    });
    this.screenElement.scrollHorizontal = false;
  }

  init() {
    print("payment initiated");
    this.p.parent = this.screenElement.content;
    return this.p2.parent = this.screenElement.content;
  }

};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summary", function() { return summary; });
var summary = class summary {
  constructor(s) {
    this.s = s;
    this.sum = this.s.Summary;
    this.sum1 = this.s.Summary_1;
    this.sum2 = this.s.Summary_2;
    this.screenElement = new ScrollComponent({
      width: 360,
      height: 640,
      backgroundColor: "white"
    });
    this.screenElement.scrollHorizontal = false;
  }

  init() {
    print("summary initiated");
    this.sum.parent = this.screenElement.content;
    this.sum1.parent = this.screenElement.content;
    return this.sum2.parent = this.screenElement.content;
  }

};


/***/ })
/******/ ]);
//# sourceMappingURL=app.6d148bd20393c0c22b9e.js.map