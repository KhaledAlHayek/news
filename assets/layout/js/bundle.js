/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/layout/src/app.ts":
/*!**********************************!*\
  !*** ./assets/layout/src/app.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Slider */ \"./assets/layout/src/classes/Slider.ts\");\n\nconst sliders = document.querySelectorAll(\".slider\");\nsliders.forEach(slider => {\n    new _classes_Slider__WEBPACK_IMPORTED_MODULE_0__.Slider(slider);\n});\n\n\n//# sourceURL=webpack://project/./assets/layout/src/app.ts?");

/***/ }),

/***/ "./assets/layout/src/classes/Slider.ts":
/*!*********************************************!*\
  !*** ./assets/layout/src/classes/Slider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\n    constructor(sliderEl) {\n        this.index = 0;\n        this.sliderElement = sliderEl;\n        if (this.sliderElement) {\n            this.sliderContentWrapper = this.sliderElement.querySelector(\".slider__wrapper\");\n            this.sliderPrevButton = this.sliderElement.querySelector(\".slider__prev\");\n            this.sliderNextButton = this.sliderElement.querySelector(\".slider__next\");\n            this.sliderElementsHolder = this.sliderElement.querySelector(\".slider__elements\");\n            this.sliderElements = this.sliderElementsHolder.querySelectorAll(\".slider__element\");\n            this.totalElements = this.sliderElements.length;\n            this.init();\n        }\n    }\n    init() {\n        this.sliderElements[this.index].classList.add(\"slider__element--active\");\n        this.controlButtons();\n        this.sliderPrevButton.addEventListener(\"click\", () => {\n            this.prev();\n            this.setup();\n        });\n        this.sliderNextButton.addEventListener(\"click\", () => {\n            this.next();\n            this.setup();\n        });\n    }\n    setup() {\n        this.controlButtons();\n        this.showUpElement();\n    }\n    controlButtons() {\n        this.index === 0 ? this.disablePrev() : this.enablePrev();\n        this.index === this.totalElements - 1 ? this.disableNext() : this.enableNext();\n    }\n    showUpElement() {\n        this.sliderElements.forEach(el => {\n            el.classList.remove(\"slider__element--active\");\n        });\n        this.sliderElements[this.index].classList.add(\"slider__element--active\");\n    }\n    prev() {\n        if (this.index != 0) {\n            this.index--;\n        }\n    }\n    next() {\n        if (this.index != this.totalElements - 1) {\n            this.index++;\n        }\n    }\n    disablePrev() {\n        this.sliderPrevButton.classList.add(\"disabled\");\n    }\n    disableNext() {\n        this.sliderNextButton.classList.add(\"disabled\");\n    }\n    enablePrev() {\n        this.sliderPrevButton.classList.remove(\"disabled\");\n    }\n    enableNext() {\n        this.sliderNextButton.classList.remove(\"disabled\");\n    }\n}\n\n\n//# sourceURL=webpack://project/./assets/layout/src/classes/Slider.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/layout/src/app.ts");
/******/ 	
/******/ })()
;