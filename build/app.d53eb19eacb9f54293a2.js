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

var a, account, animationOptions, c, child, d, delivery, device, deviceHeight, deviceWidth, fadeTransition, flow, p, payment, s, sum, summary;

({account} = __webpack_require__(1));

({child} = __webpack_require__(2));

({delivery} = __webpack_require__(3));

({payment} = __webpack_require__(4));

({summary} = __webpack_require__(5));

Framer.Extras.Preloader.enable();

// setup device for presentation
device = new Framer.DeviceView();

device.deviceType = "fullscreen";

device.background.backgroundColor = "#212121";

deviceHeight = device.screen.height;

deviceWidth = device.screen.width;

Framer.Defaults.Layer.force2d = true;

fadeTransition = function() {
  var transition;
  return transition = {
    layerA: {
      show: {
        opacity: 1
      },
      hide: {
        opacity: 0
      }
    },
    layerB: {
      show: {
        opacity: 1
      },
      hide: {
        opacity: 0
      }
    }
  };
};

s = Framer.Importer.load("app.framer/imported/app@2x");

flow = new FlowComponent({
  width: 360,
  height: 640
});

flow.center();

flow.backgroundColor = "white";

a = new account(s, flow, fadeTransition);

a.init();

c = new child(s, flow, fadeTransition);

c.init();

d = new delivery(s, flow, fadeTransition);

d.init();

p = new payment(s, flow, fadeTransition);

p.init();

sum = new summary(s, flow, fadeTransition);

sum.init();

flow.showNext(s.Account);

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
  constructor(s, flow, fadeTransition) {
    this.s = s;
    this.flow = flow;
    this.fadeTransition = fadeTransition;
    this.a = this.s.Account;
    this.mask = this.s.whitemask_account;
  }

  init() {
    var self;
    self = this;
    this.assignTransition(this.s.continue_account, self.s.Child_details);
    this.s.have_an_account.on(Events.Click, function(event, layer) {
      self.mask.opacity = 0;
      self.mask.states.active = {
        opacity: 1,
        animationOptions: {
          time: 0.1
        }
      };
      self.mask.visible = true;
      self.mask.animate('active');
      self.s.have_an_account_modal.opacity = 0;
      self.s.have_an_account_modal.states.active = {
        opacity: 1,
        animationOptions: {
          time: 0.1
        }
      };
      self.s.have_an_account_modal.visible = true;
      self.s.have_an_account_modal.animate('active');
      self.s.summary_account.states.faded = {
        opacity: 0.2
      };
      return self.s.summary_account.animate('faded');
    });
    return this.assignTransition(this.s.login, self.s.Child_details);
  }

  assignTransition(button, transitionTo) {
    var self;
    self = this;
    return button.on(Events.Click, function(event, layer) {
      self.flow.transition(transitionTo, self.fadeTransition);
      return transitionTo.visible = true;
    });
  }

};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "child", function() { return child; });
var child = class child {
  constructor(s, flow, fadeTransition) {
    this.s = s;
    this.flow = flow;
    this.fadeTransition = fadeTransition;
    this.c = this.s.Child_details;
    this.c2 = this.s.Child_details_2;
  }

  init() {
    var self;
    this.c.visible = false;
    this.c2.visible = false;
    self = this;
    this.assignTransition(this.s.continue_child, self.s.Delivery_address);
    this.assignTransition(this.s.continue_child_2, self.s.Delivery_address);
    this.assignTransition(this.s.back_to_account, self.s.Account);
    return this.assignTransition(this.s.back_to_account_2, self.s.Account);
  }

  assignTransition(button, transitionTo) {
    var self;
    self = this;
    return button.on(Events.Click, function(event, layer) {
      self.flow.transition(transitionTo, self.fadeTransition);
      return transitionTo.visible = true;
    });
  }

};

// page1.onClick ->
//  flowComp.showNext(page2, animate: false)


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delivery", function() { return delivery; });
var delivery = class delivery {
  constructor(s, flow, fadeTransition) {
    this.s = s;
    this.flow = flow;
    this.fadeTransition = fadeTransition;
    this.d = this.s.Delivery_address;
    this.d2 = this.s.Delivery_address_2;
  }

  init() {
    var self;
    this.d.visible = false;
    this.d2.visible = false;
    self = this;
    this.assignTransition(this.s.continue_address_1, self.s.Payment_details);
    this.assignTransition(this.s.continue_address_2, self.s.Payment_details);
    this.assignTransition(this.s.back_to_personalisation_1, self.s.Child_details);
    return this.assignTransition(this.s.back_to_personalisation_2, self.s.Child_details_2);
  }

  assignTransition(button, transitionTo) {
    var self;
    self = this;
    return button.on(Events.Click, function(event, layer) {
      self.flow.transition(transitionTo, self.fadeTransition);
      return transitionTo.visible = true;
    });
  }

};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payment", function() { return payment; });
var payment = class payment {
  constructor(s, flow, fadeTransition) {
    this.s = s;
    this.flow = flow;
    this.fadeTransition = fadeTransition;
    this.p = this.s.Payment_details;
    this.p2 = this.s.Payment_details_2;
  }

  init() {
    var self;
    this.p.visible = false;
    this.p2.visible = false;
    self = this;
    this.assignTransition(this.s.continue_payment_1, self.s.Summary);
    this.assignTransition(this.s.continue_payment_2, self.s.Summary_2);
    this.assignTransition(this.s.back_to_delivery_1, self.s.Delivery_address);
    return this.assignTransition(this.s.continue_payment_2, self.s.Delivery_address_2);
  }

  assignTransition(button, transitionTo) {
    var self;
    self = this;
    return button.on(Events.Click, function(event, layer) {
      self.flow.transition(transitionTo, self.fadeTransition);
      return transitionTo.visible = true;
    });
  }

};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "summary", function() { return summary; });
var summary = class summary {
  constructor(s, flow, fadeTransition) {
    this.s = s;
    this.flow = flow;
    this.fadeTransition = fadeTransition;
    this.sum = this.s.Summary;
    this.sum1 = this.s.Summary_1;
    this.sum2 = this.s.Summary_2;
  }

  init() {
    this.sum.visible = false;
    this.sum1.visible = false;
    return this.sum2.visible = false;
  }

  assignTransition(button, transitionTo) {
    var self;
    self = this;
    return button.on(Events.Click, function(event, layer) {
      self.flow.transition(transitionTo, self.fadeTransition);
      return transitionTo.visible = true;
    });
  }

};


/***/ })
/******/ ]);
//# sourceMappingURL=app.d53eb19eacb9f54293a2.js.map