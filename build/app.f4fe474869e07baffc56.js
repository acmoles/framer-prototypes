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
/***/ (function(module, exports) {

var all, app, artboardHeight, artboardWidth, device, deviceHeight, deviceWidth, imageLayer, ratio;

Framer.Extras.Preloader.enable();

// setup device for presentation
device = new Framer.DeviceView();

device.deviceType = "fullscreen";

device.contentScale = 1;

device.background.backgroundColor = "#212121";

deviceHeight = device.screen.height;

deviceWidth = device.screen.width;

artboardWidth = 360;

artboardHeight = 640;

ratio = deviceWidth / artboardWidth;

console.log('ratio:' + ratio);

console.log('screenW:' + deviceWidth);

console.log('screenH:' + deviceHeight);

Framer.Defaults.Layer.force2d = true;

all = new Layer({
  width: artboardWidth,
  height: artboardHeight,
  scale: ratio,
  originY: 0,
  y: 0
});

all.center();

app = Framer.Importer.load("app.framer/imported/app@1x");

app.parent = all;

app.circle.opacity = 0.1;

app.circle.center();

imageLayer = new Layer({
  x: 100,
  y: 100,
  width: 250,
  height: 250,
  opacity: 0.5,
  parent: all,
  backgroundColor: "green"
});

imageLayer.center();

imageLayer.states = {
  second: {
    y: 100,
    scale: 0.6,
    rotationZ: 100
  },
  third: {
    y: 300,
    scale: 1.3
  },
  fourth: {
    y: 200,
    scale: 0.9,
    rotationZ: 200,
    blur: 10
  }
};

// Set the default animation options
imageLayer.animationOptions = {
  curve: "spring(500,12,0)"
};

// On a click, go to the next state
imageLayer.on(Events.Click, function(event, layer) {
  return imageLayer.stateCycle();
});


/***/ })
/******/ ]);
//# sourceMappingURL=app.f4fe474869e07baffc56.js.map