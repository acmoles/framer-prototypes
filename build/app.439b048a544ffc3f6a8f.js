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

var a, account, animationOptions, c, child, d, delivery, device, deviceHeight, deviceWidth, fadeTransition, flow, h, homepage, p, payment, product, r, s, sum, summary;

({homepage} = __webpack_require__(1));

({child} = __webpack_require__(2));

({product} = __webpack_require__(3));

({account} = __webpack_require__(4));

({delivery} = __webpack_require__(5));

({payment} = __webpack_require__(6));

({summary} = __webpack_require__(7));

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

h = new homepage(s, flow, fadeTransition);

h.init();

c = new child(s, flow, fadeTransition);

c.init();

r = new product(s, flow, fadeTransition);

r.init();

a = new account(s, flow, fadeTransition);

a.init();

d = new delivery(s, flow, fadeTransition);

d.init();

p = new payment(s, flow, fadeTransition);

p.init();

sum = new summary(s, flow, fadeTransition);

sum.init();

flow.showNext(s.Homepage);

// Set the default animation options
animationOptions = {
  curve: "spring(500,12,0)"
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepage", function() { return homepage; });
var homepage = class homepage {
  constructor(s, flow, fadeTransition) {
    this.s = s;
    this.flow = flow;
    this.fadeTransition = fadeTransition;
    this.h = this.s.Homepage;
    this.hc = this.s.Homepage_code;
  }

  init() {
    var self;
    this.hc.visible = false;
    self = this;
    this.assignTransition(this.s.get_started, self.s.Child_details);
    this.assignTransition(this.s.sticky_get_started, self.s.Child_details);
    this.assignTransition(this.s.get_started_code, self.s.Child_details_2);
    this.assignTransition(this.s.sticky_code_get_started, self.s.Child_details_2);
    return this.flow.showOverlayMiddle(this.s.sticky_get_started);
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
    this.assignTransition(this.s.continue_child, self.s.Products);
    this.assignTransition(this.s.add_child, self.s.Child_details_2);
    this.assignTransition(this.s.got_code_child, self.s.Child_details_2);
    return this.assignTransition(this.s.continue_child_2, self.s.Products);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return product; });
var product = class product {
  constructor(s, flow, fadeTransition) {
    this.s = s;
    this.flow = flow;
    this.fadeTransition = fadeTransition;
    this.r = this.s.Products;
  }

  init() {
    var clickoff, i, len, link, results, self;
    this.r.visible = false;
    self = this;
    this.assignTransition(this.s.continue_product, self.s.Account);
    this.assignTransition(this.s.back_to_child, self.s.Child_details_2);
    // Product select dropdown
    this.assignInactiveState(this.s.dropdown_up_rectangle);
    this.s.caret.states = {
      active: {
        rotation: 180
      },
      inactive: {
        rotation: 0
      }
    };
    this.assignActiveState(this.s.whitemask_products);
    this.assignActiveState(this.s.dropdown_dropped_rectangle);
    this.assignActiveState(this.s.dropped_boxes);
    clickoff = [this.s.caret, this.s.box_details, this.s.dropped_boxes, this.s.dropdown_dropped_rectangle];
    results = [];
    for (i = 0, len = clickoff.length; i < len; i++) {
      link = clickoff[i];
      results.push((function(link) {
        return link.on(Events.Click, self.dropdownEvent.bind(self));
      })(link));
    }
    return results;
  }

  dropdownEvent(event, layer) {
    this.s.caret.stateCycle('active', 'inactive');
    this.s.dropdown_up_rectangle.stateCycle('active', 'inactive');
    this.s.whitemask_products.visible = this.s.whitemask_products.visible ? false : true;
    this.s.whitemask_products.stateCycle('inactive', 'active');
    this.s.dropdown_dropped_rectangle.visible = this.s.dropdown_dropped_rectangle.visible ? false : true;
    this.s.dropdown_dropped_rectangle.stateCycle('inactive', 'active');
    this.s.dropped_boxes.visible = this.s.dropped_boxes.visible ? false : true;
    return this.s.dropped_boxes.stateCycle('inactive', 'active');
  }

  assignTransition(button, transitionTo) {
    var self;
    self = this;
    return button.on(Events.Click, function(event, layer) {
      self.flow.transition(transitionTo, self.fadeTransition);
      return transitionTo.visible = true;
    });
  }

  assignActiveState(object) {
    object.states = {
      active: {
        opacity: 1
      },
      inactive: {
        opacity: 0
      }
    };
    return object.stateSwitch('inactive');
  }

  assignInactiveState(object) {
    object.states = {
      active: {
        opacity: 1
      },
      inactive: {
        opacity: 0
      }
    };
    return object.stateSwitch('active');
  }

};


/***/ }),
/* 4 */
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
    var sl;
    this.a.visible = false;
    sl = this;
    this.assignTransition(this.s.continue_account, sl.s.Delivery_address);
    this.assignTransition(this.s.back_to_product, sl.s.Products);
    // Login
    this.s.have_an_account.on(Events.Click, function(event, layer) {
      sl.mask.opacity = 0;
      sl.mask.states.active = {
        opacity: 1,
        animationOptions: {
          time: 0.1
        }
      };
      sl.mask.visible = true;
      sl.mask.animate('active');
      sl.s.have_an_account_modal.opacity = 0;
      sl.s.have_an_account_modal.states.active = {
        opacity: 1,
        animationOptions: {
          time: 0.1
        }
      };
      sl.s.have_an_account_modal.visible = true;
      sl.s.have_an_account_modal.animate('active');
      sl.s.summary_title.states.faded = {
        opacity: 0.2
      };
      sl.s.summary_title.animate('faded');
      sl.s.summary_folded_back.states.faded = {
        opacity: 0.2
      };
      return sl.s.summary_folded_back.animate('faded');
    });
    this.s.summary_title.on(Events.Click, function(event, layer) {
      sl.s.caret_account.states.active = {
        rotation: 180
      };
      return sl.s.caret_account.animate('active');
    });
    // TODO do order summary
    return this.assignTransition(this.s.login, sl.s.Delivery_address);
  }

  assignTransition(button, transitionTo) {
    var sl;
    sl = this;
    return button.on(Events.Click, function(event, layer) {
      sl.flow.transition(transitionTo, sl.fadeTransition);
      return transitionTo.visible = true;
    });
  }

};


/***/ }),
/* 5 */
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
    this.assignTransition(this.s.back_to_account, self.s.Account);
    this.assignTransition(this.s.continue_address, self.s.Payment_details);
    this.assignTransition(this.s.same_address, self.s.Delivery_address_2);
    this.assignTransition(this.s.continue_address_2, self.s.Payment_details);
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


/***/ }),
/* 6 */
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
    //1
    this.assignTransition(this.s.continue_payment, self.s.Summary);
    this.assignTransition(this.s.back_to_delivery, self.s.Delivery_address_2);
    this.assignTransition(this.s.payment_method_toggle, self.s.Payment_details_2);
    this.assignTransition(this.s.payment_type_toggle, self.s.Payment_details_2);
    //2
    this.assignTransition(this.s.continue_payment_2, self.s.Summary_2);
    this.assignTransition(this.s.back_to_delivery_2, self.s.Delivery_address_2);
    this.assignTransition(this.s.payment_type_toggle_2, self.s.Payment_details);
    return this.assignTransition(this.s.payment_method_toggle_2, self.s.Payment_details);
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
/* 7 */
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
    this.sum2 = this.s.Summary_2;
  }

  init() {
    this.sum.visible = false;
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
//# sourceMappingURL=app.439b048a544ffc3f6a8f.js.map