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

flow = new FlowComponent({
  width: 360,
  height: 640
});

flow.center();

flow.backgroundColor = "white";

// s.Account.whitemask.visible = false
a = new account(s, flow);

a.init();

c = new child(s, flow);

c.init();

d = new delivery(s, flow);

d.init();

p = new payment(s, flow);

p.init();

sum = new summary(s, flow);

sum.init();

flow.showNext(s.Account, scaleTransition);

flow.on(Events.Click, function(event, layer) {
  return flow.showNext(s.Child_details, scaleTransition);
});

// Set the default animation options
animationOptions = {
  curve: "spring(500,12,0)"
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "account", function() { return account; });
var account = class account {
  constructor(s, flow) {
    this.s = s;
    this.flow = flow;
    this.a = this.s.Account.children;
  }

  init() {}

};

// @a.whitemask.visible = false
// @a.whitemask.opacity = 0

// @a.addchildmodal.visible = false
// @a.addchildmodal.opacity = 0

// @a.haveanaccountmodal.visible = false
// @a.haveanaccountmodal.opacity = 0

// @a.summary.visible = false
// @a.summary.opacity = 0

// @a.continue.on Events.Click, (event, layer) ->
//   flow.showNext(@s.Child_details, scaleTransition)


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "child", function() { return child; });
var child = class child {
  constructor(s, flow) {
    this.s = s;
    this.flow = flow;
    this.c = this.s.Child_details;
    this.c2 = this.s.Child_details_2;
  }

  init() {}

};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delivery", function() { return delivery; });
var delivery = class delivery {
  constructor(s, flow) {
    this.s = s;
    this.flow = flow;
    this.d = this.s.Delivery_address;
    this.d2 = this.s.Delivery_address_2;
  }

  init() {}

};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payment", function() { return payment; });
var payment = class payment {
  constructor(s, flow) {
    this.s = s;
    this.flow = flow;
    this.p = this.s.Payment_details;
    this.p2 = this.s.Payment_details_2;
  }

  init() {}

};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summary", function() { return summary; });
var summary = class summary {
  constructor(s, flow) {
    this.s = s;
    this.flow = flow;
    this.sum = this.s.Summary;
    this.sum1 = this.s.Summary_1;
    this.sum2 = this.s.Summary_2;
  }

  init() {}

};


/***/ })
/******/ ]);
//# sourceMappingURL=app.26fc254222c23fe5d7d9.js.map