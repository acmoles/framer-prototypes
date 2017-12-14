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

var InputField, action, actionButtons, app, device, deviceHeight, deviceWidth, i, initialScale, j, k, l, len, len1, switchInput, switchOptions, taskInput;

({InputField} = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"inputField\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));


// setup device for presentation
device = new Framer.DeviceView();

device.setupContext();

device.deviceType = "google-nexus-6p";

device.contentScale = 1;

deviceHeight = device.screen.height;

deviceWidth = device.screen.width;

app = Framer.Importer.load("app.framer/imported/app@1x");

// variables to hold a scale value we’ll use later
initialScale = 0.2;

// array of our actions
actionButtons = [];

// the input element from module
taskInput = new InputField({
  name: "task",
  type: "text-area",
  width: deviceWidth,
  height: deviceHeight - app.keyboard.height,
  index: 0,
  color: "DarkCyan",
  backgroundColor: "#f5f5f5",
  fontSize: 200,
  indent: 120,
  placeHolder: "Add task",
  placeHolderFocus: "",
  autoCapitalize: true
});

// hide some layers for the initial state
app.actions.opacity = 0;

app.overlay.opacity = 0;

app.iconWrite.opacity = 0;

app.keyboard.opacity = 0;

app.keyboard.y = app.keyboard.height + deviceHeight;

taskInput.opacity = 0;

// set initial rotation for the icon
app.iconWrite.rotation = -180;

// create an array of action layers (Add, Reminder, Task)
for (i = j = 0; j < 3; i = ++j) {
  actionButtons.push(app[`action${i + 1}`]);
}

// Add initial scale value to action buttons
for (k = 0, len = actionButtons.length; k < len; k++) {
  action = actionButtons[k];
  action.scale = initialScale;
}

// define states
app.overlay.states.add({
  openActions: {
    opacity: 1
  }
});

app.overlay.states.animationOptions = {
  curve: "spring(400, 20, 0)"
};

app.actions.states.add({
  openActions: {
    opacity: 1
  }
});

app.actions.states.animationOptions = {
  curve: "spring(400, 20, 0)"
};

app.keyboard.states.add({
  openInput: {
    opacity: 1,
    y: deviceHeight - app.keyboard.height
  }
});

app.keyboard.states.animationOptions = {
  curve: "linear",
  time: 0.1
};

for (l = 0, len1 = actionButtons.length; l < len1; l++) {
  action = actionButtons[l];
  action.states.add({
    openActions: {
      scale: 1
    }
  });
  action.states.animationOptions = {
    curve: "spring(500, 30, 0)"
  };
}

app.iconPlus.states.add({
  openActions: {
    opacity: 0,
    rotation: 90
  }
});

app.iconPlus.states.animationOptions = {
  curve: "spring(500, 30, 0)"
};

app.iconWrite.states.add({
  openActions: {
    opacity: 1,
    rotation: 0
  }
});

app.iconWrite.states.animationOptions = {
  curve: "spring(500, 30, 0)"
};

taskInput.states.add({
  openInput: {
    opacity: 1
  }
});

taskInput.states.animationOptions = {
  curve: "spring(400, 20, 0)"
};

// functions
switchOptions = function(state) {
  var len2, m;
  for (m = 0, len2 = actionButtons.length; m < len2; m++) {
    action = actionButtons[m];
    action.states.switch(state);
  }
  app.overlay.states.switch(state);
  app.actions.states.switch(state);
  app.iconPlus.states.switch(state);
  return app.iconWrite.states.switch(state);
};

switchInput = function(state) {
  taskInput.states.switch(state);
  return app.keyboard.states.switch(state);
};

// events
app.floatingButton.on(Events.Click, function() {
  return switchOptions("openActions");
});

app.overlay.on(Events.Click, function() {
  return switchOptions("default");
});

app.action2.on(Events.Click, function() {
  taskInput.index = 1;
  return switchInput("openInput");
});

app.keyboard.on(Events.Click, function() {
  taskInput.index = 0;
  switchInput("default");
  return switchOptions("default");
});


/***/ })
/******/ ]);
//# sourceMappingURL=app.e21af00457169244a67b.js.map