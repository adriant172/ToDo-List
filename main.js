/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Oswald-VariableFont_wght.ttf */ "./src/fonts/Oswald-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Oswald';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(truetype);\n}\n@keyframes selecting {\n    to {\n        transform: scale(1.2, 1.2);\n    }\n}\nbody {\n    margin: 0;\n    font-family: 'Oswald';\n}\nli {\n    cursor: pointer;\n}\n.overlay {\n    position: fixed;\n    display: none;\n    background-color: rgba(104,104,104,0.8);\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n}\n#content {\n    display: grid;\n    grid-template-columns: 2fr 5fr;\n    grid-template-rows: .75fr 9fr;\n    min-height: 100vh;\n    background-color: #fcfcfc ;\n}\nheader {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-weight: 400;\n    font-size: 36px;\n    background-color: #3777FF;\n}\n.categories {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: #e7e5e4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 400px;\n    \n}\n.category-name {\n    padding: 2px;\n    padding-left: 10px;\n    width: 80%;\n}\n.items {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: #fcfcfc;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 50vw;\n}\n.category-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 15px;\n    height: 70vh;\n    width: 80%;\n}\n.category-title {\n    margin: 0;\n}\n.list-container {\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    width: 90%;\n    padding: 0;\n    \n}\n.task-item {\n    display: flex;\n    flex-flow: column;\n    align-items: flex-start;\n    gap:10px;\n    flex-shrink: 1;\n    min-width: 75%;\n    max-height: 15vh;\n    border:2px grey solid;\n    border-radius: 3px;\n    border-top: 1px grey solid;\n    border-bottom: 1px grey solid;\n    margin-bottom: 0;\n    padding: 1rem;\n}\n.list-container > li:first-child {\n    border-top: 2px grey solid;\n}\n.list-container > li:nth-last-child(2) {\n    border-bottom: 2px grey solid;\n}\n.item-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background-color: whitesmoke;\n    margin: auto;\n    padding: 1.5em;\n    width: 40vw;\n    height: 40vh;\n    font-size: 1.5rem;\n    border: 2px black solid;\n}\n.newTaskButton {\n    width: 25%;\n    min-width: 100px;\n    margin: 10px;\n}\n.newTaskButton:hover, .newCategoryButton:hover{\n    animation: selecting .5s infinite alternate;\n    /* transform: scale(1.5); */\n}\n.newCategoryButton {\n    margin: .8rem;\n}\n.taskDescription {\n    resize: none;\n    height: 80%;\n    width: 90%;\n}\n.category-list {\n    width: 80%;\n    padding: 0;\n    gap: 25px;\n    list-style-type: none;\n}\n.view-task-container{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    background-color: whitesmoke;\n    margin: auto;\n    padding: 1.5em;\n    width: 60vw;\n    height: 70vh;\n    font-size: 1.5rem;\n    border: 2px black solid;\n}\nbutton {\n    border-radius: 10px;\n    cursor: pointer;\n}\n.edit-task-button, .delete-task-button {\n    margin-top: 10px;\n}\n.icons {\n    width: 30px;\n    height: 30px;\n}\n.cancel-button, .edit-task-button, .delete-task-button, .newTaskButton, .newCategoryButton{\n    border: none;\n    background:inherit;\n}\n.add-task-button {\n    background-color: #3777FF;\n}\n#edit-task-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 5;\n    display: flex;\n    justify-content:space-between;\n    align-items: center;\n    margin-bottom: 10px;\n    border-bottom: solid 2px grey;\n\n}\n.buttons {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n#edit-task-main-content {\n    grid-row: 2 / 11;\n    grid-column: 1 / 4;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n#edit-task-sidebar {\n    grid-row: 2 / 11;\n    grid-column: 4 / 5;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.delete-task-button {\n    grid-column: 4 / 5;\n}\n.form-entry {\n    max-width: 70%;\n    border: none;\n    border-radius: 10px;\n    padding: 10px;\n}\nlabel {\n    font-size: 16px;\n    font-weight: bold;\n    font-style: italic;\n}\ntextarea {\n    resize: none;\n}\n#newTaskDescription {\n    height: 40%;\n    width: 80%\n}\n.taskTitle {\n    min-height: 10%;\n}\n.taskDescription, .taskNotes {\n    min-height: 100px;\n    max-height: 35%;\n}\n.category-name:hover {\n    border-radius:15px;\n    background-color: whitesmoke;\n}\n#priority > option {\n    display: flex;\n    justify-content: space-evenly;\n    height: .5rem;\n    width: .5rem;\n}\n.P1 {\n    background-color: rgba(255, 70, 70, .5);\n}\n.P2 {\n    background-color: rgba(255, 252, 96, .5);\n}\n.P3 {\n    background-color: rgba(28, 119, 195, .5);\n}\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,6DAAiE;AACrE;AACA;IACI;QACI,0BAA0B;IAC9B;AACJ;AACA;IACI,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,aAAa;IACb,uCAAuC;IACvC,UAAU;IACV,OAAO;IACP,MAAM;IACN,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,6BAA6B;IAC7B,iBAAiB;IACjB,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;;AAEpB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,UAAU;AACd;AACA;IACI,SAAS;AACb;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;IACV,UAAU;;AAEd;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,QAAQ;IACR,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;IAClB,0BAA0B;IAC1B,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,4BAA4B;IAC5B,YAAY;IACZ,cAAc;IACd,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,2CAA2C;IAC3C,2BAA2B;AAC/B;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,WAAW;IACX,UAAU;AACd;AACA;IACI,UAAU;IACV,UAAU;IACV,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,mCAAmC;IACnC,4BAA4B;IAC5B,YAAY;IACZ,cAAc;IACd,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,6BAA6B;;AAEjC;AACA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;IACX;AACJ;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,YAAY;AAChB;AACA;IACI,uCAAuC;AAC3C;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,wCAAwC;AAC5C","sourcesContent":["@font-face {\n    font-family: 'Oswald';\n    src: url('./fonts/Oswald-VariableFont_wght.ttf') format(truetype);\n}\n@keyframes selecting {\n    to {\n        transform: scale(1.2, 1.2);\n    }\n}\nbody {\n    margin: 0;\n    font-family: 'Oswald';\n}\nli {\n    cursor: pointer;\n}\n.overlay {\n    position: fixed;\n    display: none;\n    background-color: rgba(104,104,104,0.8);\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n}\n#content {\n    display: grid;\n    grid-template-columns: 2fr 5fr;\n    grid-template-rows: .75fr 9fr;\n    min-height: 100vh;\n    background-color: #fcfcfc ;\n}\nheader {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-weight: 400;\n    font-size: 36px;\n    background-color: #3777FF;\n}\n.categories {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    background-color: #e7e5e4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 400px;\n    \n}\n.category-name {\n    padding: 2px;\n    padding-left: 10px;\n    width: 80%;\n}\n.items {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    background-color: #fcfcfc;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 50vw;\n}\n.category-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 15px;\n    height: 70vh;\n    width: 80%;\n}\n.category-title {\n    margin: 0;\n}\n.list-container {\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    width: 90%;\n    padding: 0;\n    \n}\n.task-item {\n    display: flex;\n    flex-flow: column;\n    align-items: flex-start;\n    gap:10px;\n    flex-shrink: 1;\n    min-width: 75%;\n    max-height: 15vh;\n    border:2px grey solid;\n    border-radius: 3px;\n    border-top: 1px grey solid;\n    border-bottom: 1px grey solid;\n    margin-bottom: 0;\n    padding: 1rem;\n}\n.list-container > li:first-child {\n    border-top: 2px grey solid;\n}\n.list-container > li:nth-last-child(2) {\n    border-bottom: 2px grey solid;\n}\n.item-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    background-color: whitesmoke;\n    margin: auto;\n    padding: 1.5em;\n    width: 40vw;\n    height: 40vh;\n    font-size: 1.5rem;\n    border: 2px black solid;\n}\n.newTaskButton {\n    width: 25%;\n    min-width: 100px;\n    margin: 10px;\n}\n.newTaskButton:hover, .newCategoryButton:hover{\n    animation: selecting .5s infinite alternate;\n    /* transform: scale(1.5); */\n}\n.newCategoryButton {\n    margin: .8rem;\n}\n.taskDescription {\n    resize: none;\n    height: 80%;\n    width: 90%;\n}\n.category-list {\n    width: 80%;\n    padding: 0;\n    gap: 25px;\n    list-style-type: none;\n}\n.view-task-container{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    background-color: whitesmoke;\n    margin: auto;\n    padding: 1.5em;\n    width: 60vw;\n    height: 70vh;\n    font-size: 1.5rem;\n    border: 2px black solid;\n}\nbutton {\n    border-radius: 10px;\n    cursor: pointer;\n}\n.edit-task-button, .delete-task-button {\n    margin-top: 10px;\n}\n.icons {\n    width: 30px;\n    height: 30px;\n}\n.cancel-button, .edit-task-button, .delete-task-button, .newTaskButton, .newCategoryButton{\n    border: none;\n    background:inherit;\n}\n.add-task-button {\n    background-color: #3777FF;\n}\n#edit-task-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 5;\n    display: flex;\n    justify-content:space-between;\n    align-items: center;\n    margin-bottom: 10px;\n    border-bottom: solid 2px grey;\n\n}\n.buttons {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n#edit-task-main-content {\n    grid-row: 2 / 11;\n    grid-column: 1 / 4;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n#edit-task-sidebar {\n    grid-row: 2 / 11;\n    grid-column: 4 / 5;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.delete-task-button {\n    grid-column: 4 / 5;\n}\n.form-entry {\n    max-width: 70%;\n    border: none;\n    border-radius: 10px;\n    padding: 10px;\n}\nlabel {\n    font-size: 16px;\n    font-weight: bold;\n    font-style: italic;\n}\ntextarea {\n    resize: none;\n}\n#newTaskDescription {\n    height: 40%;\n    width: 80%\n}\n.taskTitle {\n    min-height: 10%;\n}\n.taskDescription, .taskNotes {\n    min-height: 100px;\n    max-height: 35%;\n}\n.category-name:hover {\n    border-radius:15px;\n    background-color: whitesmoke;\n}\n#priority > option {\n    display: flex;\n    justify-content: space-evenly;\n    height: .5rem;\n    width: .5rem;\n}\n.P1 {\n    background-color: rgba(255, 70, 70, .5);\n}\n.P2 {\n    background-color: rgba(255, 252, 96, .5);\n}\n.P3 {\n    background-color: rgba(28, 119, 195, .5);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCategoryButton": () => (/* binding */ addCategoryButton),
/* harmony export */   "addTaskButtonListener": () => (/* binding */ addTaskButtonListener),
/* harmony export */   "cancelButtonListener": () => (/* binding */ cancelButtonListener),
/* harmony export */   "categorySelectListeners": () => (/* binding */ categorySelectListeners),
/* harmony export */   "deleteTaskButtonListener": () => (/* binding */ deleteTaskButtonListener),
/* harmony export */   "taskItemsListeners": () => (/* binding */ taskItemsListeners),
/* harmony export */   "updateTaskButtonListener": () => (/* binding */ updateTaskButtonListener)
/* harmony export */ });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ "./src/handlers.js");
/* harmony import */ var _to_do_s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do's */ "./src/to-do's.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page */ "./src/main-page.js");






function addTaskButtonListener(selectedCategory) {
    const addTaskButton = document.querySelector('.add-task-button');
    const addItemForm = document.querySelector('#new-task-form');
    const taskOverlay = document.querySelector('#task-overlay');
    const newCurrentCategory = selectedCategory;
    
    const newTaskData = (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.taskDataHandler)();
    const task = new _to_do_s__WEBPACK_IMPORTED_MODULE_1__.taskItem(newTaskData.title, newTaskData.description, newTaskData.date);
        
    (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.setTaskToCategory)(newCurrentCategory.title, task)
    ;(0,_handlers__WEBPACK_IMPORTED_MODULE_0__.setCurrentCategory)(newCurrentCategory.title);

    addItemForm.reset();
    location.reload();
    taskOverlay.style.display = "";


    // addTaskButton.addEventListener('click', () => {
    //     const newTaskData = taskDataHandler();
    //     const task = new taskItem(newTaskData.title, newTaskData.description, newTaskData.date);
        
    //     setTaskToCategory(newCurrentCategory.title, task)
    //     setCurrentCategory(newCurrentCategory.title);

    //     addItemForm.reset();
    //     location.reload();
    //     taskOverlay.style.display = "";
    // })
}

function updateTaskButtonListener(selectedCategory) {
    const editTaskButton = document.querySelector('.edit-task-button');
    const editTaskForm = document.querySelector('#edit-task-form');
    const editTaskOverlay = document.querySelector('#view-task-overlay');

    editTaskButton.addEventListener('click', () => {
        const taskData = (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.updateTaskData)();
        (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.editTask)(selectedCategory.title, taskData);
        (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.setCurrentCategory)(selectedCategory.title);

        editTaskForm.reset();
        location.reload()
        editTaskOverlay.style.display = "";
    })
    
}

function deleteTaskButtonListener(selectedCategory) {
    const deleteTaskButton = document.querySelector('.delete-task-button')
    const editTaskForm = document.querySelector('#edit-task-form');
    const editTaskOverlay = document.querySelector('#view-task-overlay');

    deleteTaskButton.addEventListener('click', () => {
        const taskData = (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.updateTaskData)();
        (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(selectedCategory.title,taskData);
        (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.setCurrentCategory)(selectedCategory.title);

        editTaskForm.reset();
        location.reload()
        editTaskOverlay.style.display = "";

    })
}

function addCategoryButton() {
    const categoryForm = document.querySelector('#category-form');
    const categoryOverlay = document.querySelector('#category-overlay');
    const newCategory = (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.newCategoryDataHandler)();
        (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.setCategory)(newCategory.title);
        categoryForm.reset();
        location.reload();
        categoryOverlay.style.display = "";
        
}

function cancelButtonListener(){
    const cancelButtons = document.querySelectorAll('.cancel-button, .modal-cancel-button');
    const forms = document.querySelectorAll('form');
    const overlays = document.querySelectorAll('.overlay');
    cancelButtons.forEach( button => {
        button.addEventListener('click', () => {
            forms.forEach( form => {
                form.reset()
            })
            overlays.forEach( overlay => {
                overlay.style.display = "";
            })
        })
    })
   
}

function categorySelectListeners(categories){
    const categoryItems = document.querySelectorAll('.category-name');
    categoryItems.forEach( (item) => {
        item.addEventListener('click', () => {
            const currentCategory = categories[`${item.innerHTML}`];
            (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.setCurrentCategory)(currentCategory.title);
            location.reload();
            
        })
    })
}

function taskItemsListeners(){
    const taskList = document.querySelectorAll('.task-item');

    let currentCategory = document.querySelector('.category-title');
    taskList.forEach((item) => {
        item.addEventListener('click', () => {
            const overlay = document.querySelector('#view-task-overlay');
            const categoryTitle = document.querySelector('#category-title');
            const title = document.querySelector('#edit-taskTitle');
            const description = document.querySelector('#edit-taskDescription');
            const notes = document.querySelector('#edit-taskNotes');
            const status = document.querySelector('#taskStatus')
            const priority = document.querySelector('#priority');
            const dueDate = document.querySelector('#dueDate');

            overlay.style.display = "flex";


            const taskName = item.firstChild.innerHTML;
            const taskData = (0,_handlers__WEBPACK_IMPORTED_MODULE_0__.getTaskData)(currentCategory.innerHTML, taskName);


            categoryTitle.innerHTML = currentCategory.innerHTML;
            title.value = taskData.title;
            description.value = taskData.description;
            notes.value= taskData.notes;
            status.value = taskData.status;
            if (taskData.priority == undefined) {
                priority.value = "P4"
            } else {
                priority.value = taskData.priority;
            }
            const thisDate = taskData.dueDate;
            console.log(String(thisDate));
            dueDate.value = String(thisDate);

        })
    })
}







/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryDataHandler": () => (/* binding */ categoryDataHandler),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "getAllCategories": () => (/* binding */ getAllCategories),
/* harmony export */   "getCurrentCategory": () => (/* binding */ getCurrentCategory),
/* harmony export */   "getTaskData": () => (/* binding */ getTaskData),
/* harmony export */   "newCategoryDataHandler": () => (/* binding */ newCategoryDataHandler),
/* harmony export */   "setCategory": () => (/* binding */ setCategory),
/* harmony export */   "setCurrentCategory": () => (/* binding */ setCurrentCategory),
/* harmony export */   "setTaskToCategory": () => (/* binding */ setTaskToCategory),
/* harmony export */   "taskDataHandler": () => (/* binding */ taskDataHandler),
/* harmony export */   "updateTaskData": () => (/* binding */ updateTaskData)
/* harmony export */ });
/* harmony import */ var _to_do_s__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do's */ "./src/to-do's.js");



function taskDataHandler() {
    const taskTitle = document.querySelector('#newTaskTitle');
    const taskDescription = document.querySelector('#newTaskDescription');
    const taskDate = document.querySelector('#taskDueDate');

    return {"title": taskTitle.value, "description": taskDescription.value, "date": taskDate.value}
}

function categoryDataHandler(){
    const categoryTitle = document.querySelector('.category-title');

    return { "title": categoryTitle.innerHTML }
}
function newCategoryDataHandler(){
    const newCategoryTitle = document.querySelector('#newCategoryTitle')

    return {"title": newCategoryTitle.value }
}

function getAllCategories(){
    const categories = {}
    const categoriesData = JSON.parse(window.localStorage.getItem("categories"));
    for (const catObject in categoriesData) {
        const cat = new _to_do_s__WEBPACK_IMPORTED_MODULE_0__.category(`${catObject}`);
        const taskItems = categoriesData[catObject]["taskItems"];
        for (const task of taskItems) {
            cat.addItem(task);
        }
        categories[cat.title] = cat;
    }
        return categories
}

function setCategory(name){
    const allCategories = getAllCategories();
    allCategories[name] = {"title": name, "taskItems":[]};
    window.localStorage.categories = JSON.stringify(allCategories);
}

function setTaskToCategory(categoryName, taskObject){
    const allCategories = getAllCategories();
    allCategories[categoryName]['taskItems'].push(taskObject);
    window.localStorage.categories = JSON.stringify(allCategories);
}

function editTask(categoryName, taskObject) {
    const allCategories = getAllCategories();
    const allTasks = allCategories[categoryName]['taskItems'];
    allTasks.forEach( (task, index) => {
        if (task.title == taskObject.title){
            allTasks[index] = taskObject;
        }
    });
    allCategories[categoryName]['taskItems'] = allTasks;
    window.localStorage.categories = JSON.stringify(allCategories);
}

function deleteTask(categoryName, taskObject){
    const allCategories = getAllCategories();
    const allTasks = allCategories[categoryName]['taskItems'];
    allTasks.forEach( (task, index) => {
        if (task.title == taskObject.title){
            allTasks.splice(index, 1);
        }
    });
    allCategories[categoryName]['taskItems'] = allTasks;
    window.localStorage.categories = JSON.stringify(allCategories);

}

function setCurrentCategory(categoryName){
    const allCategories = getAllCategories();
    const selectedCategory = allCategories[categoryName];
    window.localStorage.setItem("currentCategory", JSON.stringify(selectedCategory));
}

function getCurrentCategory(){
    const currentCategory = JSON.parse(window.localStorage.getItem("currentCategory"));
    return currentCategory
}

function updateTaskData(){
    const taskTitle = document.querySelector('#edit-taskTitle').value;
    const taskDescription = document.querySelector('#edit-taskDescription').value;
    const taskNotes = document.querySelector('#edit-taskNotes').value;
    const taskStatus = document.querySelector('#taskStatus').value;
    const taskPriority = document.querySelector('#priority').value;
    const taskDueDate = document.querySelector('#dueDate').value;

    console.log({ title: taskTitle, description: taskDescription, notes: taskNotes, status: taskStatus, priority: taskPriority, dueDate: taskDueDate });
    return { title: taskTitle, description: taskDescription, notes: taskNotes, status: taskStatus, priority: taskPriority, dueDate: taskDueDate }
}

function getTaskData(categoryName, taskName){
    const allCategories = getAllCategories();
    
    const tasks = allCategories[categoryName].taskItems;
    for (const task of tasks) {
        if (task.title == taskName) {
            return task
        }
    }
}





/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCategory": () => (/* binding */ displayCategory),
/* harmony export */   "displayCategoryList": () => (/* binding */ displayCategoryList),
/* harmony export */   "generateMainLayout": () => (/* binding */ generateMainLayout)
/* harmony export */ });


function generateMainLayout(contentElement) {
    const header = document.createElement('header');
    header.innerHTML = "To Do's"
    const categories = document.createElement('div');
    const mainView = document.createElement('div');
    const mainPage = [header, categories, mainView]

    categories.classList.add('categories');
    mainView.classList.add('items');

    mainPage.forEach(e => {
        contentElement.appendChild(e)
        }
    )
    
    displayAddCategoryButton();
    
    // Displaying currently selected category items/ main view
    const categoryContainer = document.createElement('div');
    const categoryTitle = document.createElement('h3');
    const listContainer = document.createElement('ul');
    


    categoryContainer.classList.add('category-container');
    categoryTitle.classList.add('category-title');
    listContainer.classList.add('list-container');

    categoryContainer.appendChild(categoryTitle);
    categoryContainer.appendChild(listContainer)
    mainView.appendChild(categoryContainer)

    // Displaying the list of all categories in the left pane
    const categoryListContainer = document.createElement('ul');
    categoryListContainer.classList.add('category-list');

    categories.appendChild(categoryListContainer);

}



function displayTask(listContainer, title, date, priority){
    const taskContainer = document.createElement('li');
    const titleElement = document.createElement('div');
    const dateElement = document.createElement('div')
    
    titleElement.innerHTML = title;
    dateElement.innerHTML = date;

    const allElements = [titleElement, dateElement];
    allElements.forEach( e => {
        taskContainer.appendChild(e)
    })
    taskContainer.classList.add("task-item");
    if (priority == "P1")  {
        taskContainer.classList.add("P1")
    } else if (priority == "P2") {
        taskContainer.classList.add("P2")
    } else if (priority == "P3") {
        taskContainer.classList.add("P3")
    }
    listContainer.appendChild(taskContainer);

}

function displayAddTaskButton() {
    const mainItemsView = document.querySelector('.list-container');
    const addTaskButton = document.createElement('button');
    const plusImg = document.createElement('img');

    
    addTaskButton.type = "button"
    addTaskButton.classList.add('newTaskButton');

    addTaskButton.addEventListener('click', () => {
        const overlay = document.querySelector('#add-task-overlay');
        overlay.style.display = "flex";
    });
    plusImg.src = "/src/images/note-plus.svg";
    plusImg.alt = "Add task icon"
    plusImg.classList.add('icons');
    addTaskButton.appendChild(plusImg);
    mainItemsView.appendChild(addTaskButton);

}

function displayAddCategoryButton() {
    const categoriesView = document.querySelector('.categories');
    const addCategoryButton = document.createElement('button');
    const plusImg = document.createElement('img');
    
    addCategoryButton.type = "button"
    addCategoryButton.classList.add('newCategoryButton');
    

    addCategoryButton.addEventListener('click', () => {
        const overlay = document.querySelector('#category-overlay');
        overlay.style.display = "flex";
    });
    plusImg.src = "/src/images/plus.svg";
    plusImg.alt = "Add task icon"
    plusImg.classList.add('icons');
    addCategoryButton.appendChild(plusImg);
    categoriesView.appendChild(addCategoryButton);

}

function displayCategory(categoryTitleValue, arrayOfItems) {
    const listContainer = document.querySelector('.list-container');
    const categoryTitle = document.querySelector('.category-title');
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }

    categoryTitle.innerHTML = categoryTitleValue;

    
    arrayOfItems.forEach( i => {
        displayTask(listContainer, i.title, i.dueDate, i.priority)
    })
    displayAddTaskButton();
    
}

function displayCategoryList(categories) {
    const categoryList = document.querySelector('.category-list');
    while (categoryList.firstChild) {
        categoryList.removeChild(categoryList.firstChild);
    }
    for (const entry in categories){
        let categoryName = document.createElement('li');
        categoryName.classList.add('category-name');
        categoryName.innerHTML = `${entry}`;
        categoryList.appendChild(categoryName);

    }
}





/***/ }),

/***/ "./src/to-do's.js":
/*!************************!*\
  !*** ./src/to-do's.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "category": () => (/* binding */ category),
/* harmony export */   "taskItem": () => (/* binding */ taskItem)
/* harmony export */ });


class taskItem {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description= description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = "To Do";
        this.notes = "";
        this.checklist = [];
    }
}

class category {
    constructor(title){
        this.title = title;
        this.taskItems = [];
    }
    addItem(itemObj) {
        this.taskItems.push(itemObj)
    }
    set allTasks(taskList) {
        if (Array.isArray(taskList) == true) {
            this.taskItems = taskList;
        }

    }

}



/***/ }),

/***/ "./src/fonts/Oswald-VariableFont_wght.ttf":
/*!************************************************!*\
  !*** ./src/fonts/Oswald-VariableFont_wght.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46d7853f0185f6bf0c93.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ "./src/main-page.js");
/* harmony import */ var _to_do_s__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do's */ "./src/to-do's.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers */ "./src/handlers.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");









let currentCategory;
let categories;
let currentCategoryData;
let categoriesData;

const content = document.querySelector('#content');
const addCategoryForm = document.querySelector('#category-form');
const addTaskForm = document.querySelector('#new-task-form');
(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.generateMainLayout)(content);


if ( window.localStorage.getItem("categories") == null) {
    const defaultItem = {title: "Default", taskItems: []};
     categories = {
        "Default": defaultItem,
    }
    currentCategory = new _to_do_s__WEBPACK_IMPORTED_MODULE_1__.category(defaultItem.title);
    window.localStorage.setItem("categories", JSON.stringify(categories));
    window.localStorage.setItem("currentCategory", JSON.stringify(defaultItem));
} else {
    currentCategoryData = JSON.parse(window.localStorage.getItem("currentCategory"));
    categoriesData = JSON.parse(window.localStorage.getItem("categories"));

    currentCategory = new _to_do_s__WEBPACK_IMPORTED_MODULE_1__.category(currentCategoryData.title);
    currentCategory.taskItems = currentCategoryData.taskItems;
    categories = (0,_handlers__WEBPACK_IMPORTED_MODULE_2__.getAllCategories)();
}


(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.displayCategoryList)(categories)


;(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.displayCategory)(currentCategory.title, currentCategory.taskItems);

addCategoryForm.onsubmit = () => {
    (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCategoryButton)();
}
addTaskForm.onsubmit = () => {
    ;(0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addTaskButtonListener)(currentCategory);
}



;(0,_buttons__WEBPACK_IMPORTED_MODULE_3__.cancelButtonListener)();
(0,_buttons__WEBPACK_IMPORTED_MODULE_3__.categorySelectListeners)(categories);
(0,_buttons__WEBPACK_IMPORTED_MODULE_3__.taskItemsListeners)();
(0,_buttons__WEBPACK_IMPORTED_MODULE_3__.updateTaskButtonListener)(currentCategory);
(0,_buttons__WEBPACK_IMPORTED_MODULE_3__.deleteTaskButtonListener)(currentCategory);





// const  = new taskItem("Walk the dog", "The Dog needs to go for a morning walk everyday", format(new Date(2022, 12, 16), "yyyy/MM/dd"), "2")





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZ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QTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUY7QUFDekM7QUFDaUI7QUFDNEg7OztBQUd6SjtBQUNaOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4REFBa0I7OztBQUdsQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQVE7QUFDbEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLDBCQUEwQiw4Q0FBUTtBQUNsQztBQUNBLGlCQUFpQiwyREFBZ0I7QUFDakM7OztBQUdBLCtEQUFtQjs7O0FBR25CLDREQUFlOztBQUVmO0FBQ0EsSUFBSSwyREFBaUI7QUFDckI7QUFDQTtBQUNBLElBQUksZ0VBQXFCO0FBQ3pCOzs7O0FBSUEsK0RBQW9CO0FBQ3BCLGlFQUF1QjtBQUN2Qiw0REFBa0I7QUFDbEIsa0VBQXdCO0FBQ3hCLGtFQUF3Qjs7Ozs7O0FBTXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG8tZG8ncy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCh0cnVldHlwZSk7XFxufVxcbkBrZXlmcmFtZXMgc2VsZWN0aW5nIHtcXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XFxuICAgIH1cXG59XFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbn1cXG5saSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LDEwNCwxMDQsMC44KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNzVmciA5ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjIDtcXG59XFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzc3RkY7XFxufVxcbi5jYXRlZ29yaWVzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U1ZTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIFxcbn1cXG4uY2F0ZWdvcnktbmFtZSB7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uaXRlbXMge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xcbn1cXG4uY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4uY2F0ZWdvcnktdGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBcXG59XFxuLnRhc2staXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcbiAgICBtaW4td2lkdGg6IDc1JTtcXG4gICAgbWF4LWhlaWdodDogMTV2aDtcXG4gICAgYm9yZGVyOjJweCBncmV5IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBncmV5IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3JleSBzb2xpZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmxpc3QtY29udGFpbmVyID4gbGk6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItdG9wOiAycHggZ3JleSBzb2xpZDtcXG59XFxuLmxpc3QtY29udGFpbmVyID4gbGk6bnRoLWxhc3QtY2hpbGQoMikge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZ3JleSBzb2xpZDtcXG59XFxuLml0ZW0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxLjVlbTtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcbn1cXG4ubmV3VGFza0J1dHRvbiB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuLm5ld1Rhc2tCdXR0b246aG92ZXIsIC5uZXdDYXRlZ29yeUJ1dHRvbjpob3ZlcntcXG4gICAgYW5pbWF0aW9uOiBzZWxlY3RpbmcgLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAqL1xcbn1cXG4ubmV3Q2F0ZWdvcnlCdXR0b24ge1xcbiAgICBtYXJnaW46IC44cmVtO1xcbn1cXG4udGFza0Rlc2NyaXB0aW9uIHtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuLmNhdGVnb3J5LWxpc3Qge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLnZpZXctdGFzay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDEuNWVtO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA3MHZoO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmVkaXQtdGFzay1idXR0b24sIC5kZWxldGUtdGFzay1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4uaWNvbnMge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uY2FuY2VsLWJ1dHRvbiwgLmVkaXQtdGFzay1idXR0b24sIC5kZWxldGUtdGFzay1idXR0b24sIC5uZXdUYXNrQnV0dG9uLCAubmV3Q2F0ZWdvcnlCdXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDppbmhlcml0O1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3NzdGRjtcXG59XFxuI2VkaXQtdGFzay1oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBncmV5O1xcblxcbn1cXG4uYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuI2VkaXQtdGFzay1tYWluLWNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDExO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuI2VkaXQtdGFzay1zaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAxMTtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5kZWxldGUtdGFzay1idXR0b24ge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxufVxcbi5mb3JtLWVudHJ5IHtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG4jbmV3VGFza0Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIHdpZHRoOiA4MCVcXG59XFxuLnRhc2tUaXRsZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwJTtcXG59XFxuLnRhc2tEZXNjcmlwdGlvbiwgLnRhc2tOb3RlcyB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNSU7XFxufVxcbi5jYXRlZ29yeS1uYW1lOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG4jcHJpb3JpdHkgPiBvcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgaGVpZ2h0OiAuNXJlbTtcXG4gICAgd2lkdGg6IC41cmVtO1xcbn1cXG4uUDEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNzAsIDcwLCAuNSk7XFxufVxcbi5QMiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTIsIDk2LCAuNSk7XFxufVxcbi5QMyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjgsIDExOSwgMTk1LCAuNSk7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDZEQUFpRTtBQUNyRTtBQUNBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjtBQUNBO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtB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QUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLHdDQUF3QztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Pc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KHRydWV0eXBlKTtcXG59XFxuQGtleWZyYW1lcyBzZWxlY3Rpbmcge1xcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcXG4gICAgfVxcbn1cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XFxufVxcbmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsMTA0LDEwNCwwLjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC43NWZyIDlmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmMgO1xcbn1cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3NzdGRjtcXG59XFxuLmNhdGVnb3JpZXMge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTVlNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgXFxufVxcbi5jYXRlZ29yeS1uYW1lIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi5pdGVtcyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDUwdnc7XFxufVxcbi5jYXRlZ29yeS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi5jYXRlZ29yeS10aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIFxcbn1cXG4udGFzay1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6MTBweDtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuICAgIG1pbi13aWR0aDogNzUlO1xcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xcbiAgICBib3JkZXI6MnB4IGdyZXkgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGdyZXkgc29saWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBncmV5IHNvbGlkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ubGlzdC1jb250YWluZXIgPiBsaTpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci10b3A6IDJweCBncmV5IHNvbGlkO1xcbn1cXG4ubGlzdC1jb250YWluZXIgPiBsaTpudGgtbGFzdC1jaGlsZCgyKSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBncmV5IHNvbGlkO1xcbn1cXG4uaXRlbS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDEuNWVtO1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxufVxcbi5uZXdUYXNrQnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWluLXdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4ubmV3VGFza0J1dHRvbjpob3ZlciwgLm5ld0NhdGVnb3J5QnV0dG9uOmhvdmVye1xcbiAgICBhbmltYXRpb246IHNlbGVjdGluZyAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7ICovXFxufVxcbi5uZXdDYXRlZ29yeUJ1dHRvbiB7XFxuICAgIG1hcmdpbjogLjhyZW07XFxufVxcbi50YXNrRGVzY3JpcHRpb24ge1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG4uY2F0ZWdvcnktbGlzdCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4udmlldy10YXNrLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMS41ZW07XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDcwdmg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDJweCBibGFjayBzb2xpZDtcXG59XFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZWRpdC10YXNrLWJ1dHRvbiwgLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5pY29ucyB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5jYW5jZWwtYnV0dG9uLCAuZWRpdC10YXNrLWJ1dHRvbiwgLmRlbGV0ZS10YXNrLWJ1dHRvbiwgLm5ld1Rhc2tCdXR0b24sIC5uZXdDYXRlZ29yeUJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOmluaGVyaXQ7XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc3N0ZGO1xcbn1cXG4jZWRpdC10YXNrLWhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGdyZXk7XFxuXFxufVxcbi5idXR0b25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4jZWRpdC10YXNrLW1haW4tY29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMTE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4jZWRpdC10YXNrLXNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIDExO1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmRlbGV0ZS10YXNrLWJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG59XFxuLmZvcm0tZW50cnkge1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcbiNuZXdUYXNrRGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgd2lkdGg6IDgwJVxcbn1cXG4udGFza1RpdGxlIHtcXG4gICAgbWluLWhlaWdodDogMTAlO1xcbn1cXG4udGFza0Rlc2NyaXB0aW9uLCAudGFza05vdGVzIHtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1JTtcXG59XFxuLmNhdGVnb3J5LW5hbWU6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcbiNwcmlvcml0eSA+IG9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBoZWlnaHQ6IC41cmVtO1xcbiAgICB3aWR0aDogLjVyZW07XFxufVxcbi5QMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA3MCwgNzAsIC41KTtcXG59XFxuLlAyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1MiwgOTYsIC41KTtcXG59XFxuLlAzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyOCwgMTE5LCAxOTUsIC41KTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2F0ZWdvcnlEYXRhSGFuZGxlciwgc2V0VGFza1RvQ2F0ZWdvcnksIHRhc2tEYXRhSGFuZGxlciwgbmV3Q2F0ZWdvcnlEYXRhSGFuZGxlciwgc2V0Q2F0ZWdvcnksIHNldEN1cnJlbnRDYXRlZ29yeSwgZ2V0Q3VycmVudENhdGVnb3J5LCBnZXRUYXNrRGF0YSwgdXBkYXRlVGFza0RhdGEsIGVkaXRUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSBcIi4vaGFuZGxlcnNcIjtcbmltcG9ydCB7IHRhc2tJdGVtLCBjYXRlZ29yeSB9IGZyb20gXCIuL3RvLWRvJ3NcIjtcbmltcG9ydCB7IGRpc3BsYXlDYXRlZ29yeSwgZGlzcGxheUNhdGVnb3J5TGlzdCB9IGZyb20gXCIuL21haW4tcGFnZVwiO1xuXG5cblxuZnVuY3Rpb24gYWRkVGFza0J1dHRvbkxpc3RlbmVyKHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xuICAgIGNvbnN0IGFkZEl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWZvcm0nKTtcbiAgICBjb25zdCB0YXNrT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLW92ZXJsYXknKTtcbiAgICBjb25zdCBuZXdDdXJyZW50Q2F0ZWdvcnkgPSBzZWxlY3RlZENhdGVnb3J5O1xuICAgIFxuICAgIGNvbnN0IG5ld1Rhc2tEYXRhID0gdGFza0RhdGFIYW5kbGVyKCk7XG4gICAgY29uc3QgdGFzayA9IG5ldyB0YXNrSXRlbShuZXdUYXNrRGF0YS50aXRsZSwgbmV3VGFza0RhdGEuZGVzY3JpcHRpb24sIG5ld1Rhc2tEYXRhLmRhdGUpO1xuICAgICAgICBcbiAgICBzZXRUYXNrVG9DYXRlZ29yeShuZXdDdXJyZW50Q2F0ZWdvcnkudGl0bGUsIHRhc2spXG4gICAgc2V0Q3VycmVudENhdGVnb3J5KG5ld0N1cnJlbnRDYXRlZ29yeS50aXRsZSk7XG5cbiAgICBhZGRJdGVtRm9ybS5yZXNldCgpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIHRhc2tPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXG5cbiAgICAvLyBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBuZXdUYXNrRGF0YSA9IHRhc2tEYXRhSGFuZGxlcigpO1xuICAgIC8vICAgICBjb25zdCB0YXNrID0gbmV3IHRhc2tJdGVtKG5ld1Rhc2tEYXRhLnRpdGxlLCBuZXdUYXNrRGF0YS5kZXNjcmlwdGlvbiwgbmV3VGFza0RhdGEuZGF0ZSk7XG4gICAgICAgIFxuICAgIC8vICAgICBzZXRUYXNrVG9DYXRlZ29yeShuZXdDdXJyZW50Q2F0ZWdvcnkudGl0bGUsIHRhc2spXG4gICAgLy8gICAgIHNldEN1cnJlbnRDYXRlZ29yeShuZXdDdXJyZW50Q2F0ZWdvcnkudGl0bGUpO1xuXG4gICAgLy8gICAgIGFkZEl0ZW1Gb3JtLnJlc2V0KCk7XG4gICAgLy8gICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICB0YXNrT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAvLyB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQnV0dG9uTGlzdGVuZXIoc2VsZWN0ZWRDYXRlZ29yeSkge1xuICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1idXR0b24nKTtcbiAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWZvcm0nKTtcbiAgICBjb25zdCBlZGl0VGFza092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy10YXNrLW92ZXJsYXknKTtcblxuICAgIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGF0YSA9IHVwZGF0ZVRhc2tEYXRhKCk7XG4gICAgICAgIGVkaXRUYXNrKHNlbGVjdGVkQ2F0ZWdvcnkudGl0bGUsIHRhc2tEYXRhKTtcbiAgICAgICAgc2V0Q3VycmVudENhdGVnb3J5KHNlbGVjdGVkQ2F0ZWdvcnkudGl0bGUpO1xuXG4gICAgICAgIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICBlZGl0VGFza092ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgfSlcbiAgICBcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza0J1dHRvbkxpc3RlbmVyKHNlbGVjdGVkQ2F0ZWdvcnkpIHtcbiAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS10YXNrLWJ1dHRvbicpXG4gICAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1mb3JtJyk7XG4gICAgY29uc3QgZWRpdFRhc2tPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXctdGFzay1vdmVybGF5Jyk7XG5cbiAgICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGF0YSA9IHVwZGF0ZVRhc2tEYXRhKCk7XG4gICAgICAgIGRlbGV0ZVRhc2soc2VsZWN0ZWRDYXRlZ29yeS50aXRsZSx0YXNrRGF0YSk7XG4gICAgICAgIHNldEN1cnJlbnRDYXRlZ29yeShzZWxlY3RlZENhdGVnb3J5LnRpdGxlKTtcblxuICAgICAgICBlZGl0VGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgZWRpdFRhc2tPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlCdXR0b24oKSB7XG4gICAgY29uc3QgY2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5LWZvcm0nKTtcbiAgICBjb25zdCBjYXRlZ29yeU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnktb3ZlcmxheScpO1xuICAgIGNvbnN0IG5ld0NhdGVnb3J5ID0gbmV3Q2F0ZWdvcnlEYXRhSGFuZGxlcigpO1xuICAgICAgICBzZXRDYXRlZ29yeShuZXdDYXRlZ29yeS50aXRsZSk7XG4gICAgICAgIGNhdGVnb3J5Rm9ybS5yZXNldCgpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgY2F0ZWdvcnlPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICBcbn1cblxuZnVuY3Rpb24gY2FuY2VsQnV0dG9uTGlzdGVuZXIoKXtcbiAgICBjb25zdCBjYW5jZWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbmNlbC1idXR0b24sIC5tb2RhbC1jYW5jZWwtYnV0dG9uJyk7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJyk7XG4gICAgY29uc3Qgb3ZlcmxheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3ZlcmxheScpO1xuICAgIGNhbmNlbEJ1dHRvbnMuZm9yRWFjaCggYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZm9ybXMuZm9yRWFjaCggZm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgb3ZlcmxheXMuZm9yRWFjaCggb3ZlcmxheSA9PiB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbiAgIFxufVxuXG5mdW5jdGlvbiBjYXRlZ29yeVNlbGVjdExpc3RlbmVycyhjYXRlZ29yaWVzKXtcbiAgICBjb25zdCBjYXRlZ29yeUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LW5hbWUnKTtcbiAgICBjYXRlZ29yeUl0ZW1zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yaWVzW2Ake2l0ZW0uaW5uZXJIVE1MfWBdO1xuICAgICAgICAgICAgc2V0Q3VycmVudENhdGVnb3J5KGN1cnJlbnRDYXRlZ29yeS50aXRsZSk7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRhc2tJdGVtc0xpc3RlbmVycygpe1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staXRlbScpO1xuXG4gICAgbGV0IGN1cnJlbnRDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZScpO1xuICAgIHRhc2tMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy10YXNrLW92ZXJsYXknKTtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnktdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFza1RpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2tEZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrTm90ZXMnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrU3RhdHVzJylcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcblxuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cblxuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBpdGVtLmZpcnN0Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGEgPSBnZXRUYXNrRGF0YShjdXJyZW50Q2F0ZWdvcnkuaW5uZXJIVE1MLCB0YXNrTmFtZSk7XG5cblxuICAgICAgICAgICAgY2F0ZWdvcnlUaXRsZS5pbm5lckhUTUwgPSBjdXJyZW50Q2F0ZWdvcnkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSB0YXNrRGF0YS50aXRsZTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFza0RhdGEuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBub3Rlcy52YWx1ZT0gdGFza0RhdGEubm90ZXM7XG4gICAgICAgICAgICBzdGF0dXMudmFsdWUgPSB0YXNrRGF0YS5zdGF0dXM7XG4gICAgICAgICAgICBpZiAodGFza0RhdGEucHJpb3JpdHkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBcIlA0XCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUgPSB0YXNrRGF0YS5wcmlvcml0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRoaXNEYXRlID0gdGFza0RhdGEuZHVlRGF0ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFN0cmluZyh0aGlzRGF0ZSkpO1xuICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IFN0cmluZyh0aGlzRGF0ZSk7XG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cblxuXG5cbmV4cG9ydCB7IGFkZFRhc2tCdXR0b25MaXN0ZW5lciAsIGFkZENhdGVnb3J5QnV0dG9uLCBjYW5jZWxCdXR0b25MaXN0ZW5lciwgY2F0ZWdvcnlTZWxlY3RMaXN0ZW5lcnMsIHRhc2tJdGVtc0xpc3RlbmVycywgdXBkYXRlVGFza0J1dHRvbkxpc3RlbmVyLCBkZWxldGVUYXNrQnV0dG9uTGlzdGVuZXJ9IiwiaW1wb3J0IHsgY2F0ZWdvcnkgfSBmcm9tIFwiLi90by1kbydzXCI7XG5cblxuZnVuY3Rpb24gdGFza0RhdGFIYW5kbGVyKCkge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrVGl0bGUnKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0R1ZURhdGUnKTtcblxuICAgIHJldHVybiB7XCJ0aXRsZVwiOiB0YXNrVGl0bGUudmFsdWUsIFwiZGVzY3JpcHRpb25cIjogdGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBcImRhdGVcIjogdGFza0RhdGUudmFsdWV9XG59XG5cbmZ1bmN0aW9uIGNhdGVnb3J5RGF0YUhhbmRsZXIoKXtcbiAgICBjb25zdCBjYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRpdGxlJyk7XG5cbiAgICByZXR1cm4geyBcInRpdGxlXCI6IGNhdGVnb3J5VGl0bGUuaW5uZXJIVE1MIH1cbn1cbmZ1bmN0aW9uIG5ld0NhdGVnb3J5RGF0YUhhbmRsZXIoKXtcbiAgICBjb25zdCBuZXdDYXRlZ29yeVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld0NhdGVnb3J5VGl0bGUnKVxuXG4gICAgcmV0dXJuIHtcInRpdGxlXCI6IG5ld0NhdGVnb3J5VGl0bGUudmFsdWUgfVxufVxuXG5mdW5jdGlvbiBnZXRBbGxDYXRlZ29yaWVzKCl7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHt9XG4gICAgY29uc3QgY2F0ZWdvcmllc0RhdGEgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICAgIGZvciAoY29uc3QgY2F0T2JqZWN0IGluIGNhdGVnb3JpZXNEYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhdCA9IG5ldyBjYXRlZ29yeShgJHtjYXRPYmplY3R9YCk7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtcyA9IGNhdGVnb3JpZXNEYXRhW2NhdE9iamVjdF1bXCJ0YXNrSXRlbXNcIl07XG4gICAgICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrSXRlbXMpIHtcbiAgICAgICAgICAgIGNhdC5hZGRJdGVtKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGNhdGVnb3JpZXNbY2F0LnRpdGxlXSA9IGNhdDtcbiAgICB9XG4gICAgICAgIHJldHVybiBjYXRlZ29yaWVzXG59XG5cbmZ1bmN0aW9uIHNldENhdGVnb3J5KG5hbWUpe1xuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBnZXRBbGxDYXRlZ29yaWVzKCk7XG4gICAgYWxsQ2F0ZWdvcmllc1tuYW1lXSA9IHtcInRpdGxlXCI6IG5hbWUsIFwidGFza0l0ZW1zXCI6W119O1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2F0ZWdvcmllcyA9IEpTT04uc3RyaW5naWZ5KGFsbENhdGVnb3JpZXMpO1xufVxuXG5mdW5jdGlvbiBzZXRUYXNrVG9DYXRlZ29yeShjYXRlZ29yeU5hbWUsIHRhc2tPYmplY3Qpe1xuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBnZXRBbGxDYXRlZ29yaWVzKCk7XG4gICAgYWxsQ2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdWyd0YXNrSXRlbXMnXS5wdXNoKHRhc2tPYmplY3QpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2F0ZWdvcmllcyA9IEpTT04uc3RyaW5naWZ5KGFsbENhdGVnb3JpZXMpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhjYXRlZ29yeU5hbWUsIHRhc2tPYmplY3QpIHtcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gZ2V0QWxsQ2F0ZWdvcmllcygpO1xuICAgIGNvbnN0IGFsbFRhc2tzID0gYWxsQ2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdWyd0YXNrSXRlbXMnXTtcbiAgICBhbGxUYXNrcy5mb3JFYWNoKCAodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHRhc2sudGl0bGUgPT0gdGFza09iamVjdC50aXRsZSl7XG4gICAgICAgICAgICBhbGxUYXNrc1tpbmRleF0gPSB0YXNrT2JqZWN0O1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYWxsQ2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdWyd0YXNrSXRlbXMnXSA9IGFsbFRhc2tzO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2F0ZWdvcmllcyA9IEpTT04uc3RyaW5naWZ5KGFsbENhdGVnb3JpZXMpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGNhdGVnb3J5TmFtZSwgdGFza09iamVjdCl7XG4gICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9IGdldEFsbENhdGVnb3JpZXMoKTtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGFsbENhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXVsndGFza0l0ZW1zJ107XG4gICAgYWxsVGFza3MuZm9yRWFjaCggKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnRpdGxlID09IHRhc2tPYmplY3QudGl0bGUpe1xuICAgICAgICAgICAgYWxsVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFsbENhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXVsndGFza0l0ZW1zJ10gPSBhbGxUYXNrcztcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNhdGVnb3JpZXMgPSBKU09OLnN0cmluZ2lmeShhbGxDYXRlZ29yaWVzKTtcblxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50Q2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKXtcbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gZ2V0QWxsQ2F0ZWdvcmllcygpO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnkgPSBhbGxDYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV07XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudENhdGVnb3J5XCIsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkQ2F0ZWdvcnkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudENhdGVnb3J5KCl7XG4gICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50Q2F0ZWdvcnlcIikpO1xuICAgIHJldHVybiBjdXJyZW50Q2F0ZWdvcnlcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0RhdGEoKXtcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrVGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrTm90ZXMnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tTdGF0dXMnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWU7XG5cbiAgICBjb25zb2xlLmxvZyh7IHRpdGxlOiB0YXNrVGl0bGUsIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb24sIG5vdGVzOiB0YXNrTm90ZXMsIHN0YXR1czogdGFza1N0YXR1cywgcHJpb3JpdHk6IHRhc2tQcmlvcml0eSwgZHVlRGF0ZTogdGFza0R1ZURhdGUgfSk7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRhc2tUaXRsZSwgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbiwgbm90ZXM6IHRhc2tOb3Rlcywgc3RhdHVzOiB0YXNrU3RhdHVzLCBwcmlvcml0eTogdGFza1ByaW9yaXR5LCBkdWVEYXRlOiB0YXNrRHVlRGF0ZSB9XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tEYXRhKGNhdGVnb3J5TmFtZSwgdGFza05hbWUpe1xuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBnZXRBbGxDYXRlZ29yaWVzKCk7XG4gICAgXG4gICAgY29uc3QgdGFza3MgPSBhbGxDYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0udGFza0l0ZW1zO1xuICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrcykge1xuICAgICAgICBpZiAodGFzay50aXRsZSA9PSB0YXNrTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IGdldEN1cnJlbnRDYXRlZ29yeSwgdGFza0RhdGFIYW5kbGVyLCBjYXRlZ29yeURhdGFIYW5kbGVyLCBnZXRBbGxDYXRlZ29yaWVzLCBzZXRDYXRlZ29yeSwgc2V0VGFza1RvQ2F0ZWdvcnksIG5ld0NhdGVnb3J5RGF0YUhhbmRsZXIsIHNldEN1cnJlbnRDYXRlZ29yeSAsIHVwZGF0ZVRhc2tEYXRhLCBnZXRUYXNrRGF0YSwgZWRpdFRhc2ssIGRlbGV0ZVRhc2sgfSIsIlxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1haW5MYXlvdXQoY29udGVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gXCJUbyBEbydzXCJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpblZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IFtoZWFkZXIsIGNhdGVnb3JpZXMsIG1haW5WaWV3XVxuXG4gICAgY2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yaWVzJyk7XG4gICAgbWFpblZpZXcuY2xhc3NMaXN0LmFkZCgnaXRlbXMnKTtcblxuICAgIG1haW5QYWdlLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpXG4gICAgICAgIH1cbiAgICApXG4gICAgXG4gICAgZGlzcGxheUFkZENhdGVnb3J5QnV0dG9uKCk7XG4gICAgXG4gICAgLy8gRGlzcGxheWluZyBjdXJyZW50bHkgc2VsZWN0ZWQgY2F0ZWdvcnkgaXRlbXMvIG1haW4gdmlld1xuICAgIGNvbnN0IGNhdGVnb3J5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG5cblxuICAgIGNhdGVnb3J5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWNvbnRhaW5lcicpO1xuICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktdGl0bGUnKTtcbiAgICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtY29udGFpbmVyJyk7XG5cbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeVRpdGxlKTtcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKVxuICAgIG1haW5WaWV3LmFwcGVuZENoaWxkKGNhdGVnb3J5Q29udGFpbmVyKVxuXG4gICAgLy8gRGlzcGxheWluZyB0aGUgbGlzdCBvZiBhbGwgY2F0ZWdvcmllcyBpbiB0aGUgbGVmdCBwYW5lXG4gICAgY29uc3QgY2F0ZWdvcnlMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjYXRlZ29yeUxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktbGlzdCcpO1xuXG4gICAgY2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeUxpc3RDb250YWluZXIpO1xuXG59XG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5VGFzayhsaXN0Q29udGFpbmVyLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpe1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBcbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgZGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gZGF0ZTtcblxuICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gW3RpdGxlRWxlbWVudCwgZGF0ZUVsZW1lbnRdO1xuICAgIGFsbEVsZW1lbnRzLmZvckVhY2goIGUgPT4ge1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpXG4gICAgfSlcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gICAgaWYgKHByaW9yaXR5ID09IFwiUDFcIikgIHtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiUDFcIilcbiAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09IFwiUDJcIikge1xuICAgICAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJQMlwiKVxuICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJQM1wiKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIlAzXCIpXG4gICAgfVxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheUFkZFRhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgbWFpbkl0ZW1zVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBwbHVzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBcbiAgICBhZGRUYXNrQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdUYXNrQnV0dG9uJyk7XG5cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLW92ZXJsYXknKTtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSk7XG4gICAgcGx1c0ltZy5zcmMgPSBcIi9zcmMvaW1hZ2VzL25vdGUtcGx1cy5zdmdcIjtcbiAgICBwbHVzSW1nLmFsdCA9IFwiQWRkIHRhc2sgaWNvblwiXG4gICAgcGx1c0ltZy5jbGFzc0xpc3QuYWRkKCdpY29ucycpO1xuICAgIGFkZFRhc2tCdXR0b24uYXBwZW5kQ2hpbGQocGx1c0ltZyk7XG4gICAgbWFpbkl0ZW1zVmlldy5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWRkQ2F0ZWdvcnlCdXR0b24oKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpO1xuICAgIGNvbnN0IGFkZENhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcGx1c0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIFxuICAgIGFkZENhdGVnb3J5QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgYWRkQ2F0ZWdvcnlCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3Q2F0ZWdvcnlCdXR0b24nKTtcbiAgICBcblxuICAgIGFkZENhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5LW92ZXJsYXknKTtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSk7XG4gICAgcGx1c0ltZy5zcmMgPSBcIi9zcmMvaW1hZ2VzL3BsdXMuc3ZnXCI7XG4gICAgcGx1c0ltZy5hbHQgPSBcIkFkZCB0YXNrIGljb25cIlxuICAgIHBsdXNJbWcuY2xhc3NMaXN0LmFkZCgnaWNvbnMnKTtcbiAgICBhZGRDYXRlZ29yeUJ1dHRvbi5hcHBlbmRDaGlsZChwbHVzSW1nKTtcbiAgICBjYXRlZ29yaWVzVmlldy5hcHBlbmRDaGlsZChhZGRDYXRlZ29yeUJ1dHRvbik7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheUNhdGVnb3J5KGNhdGVnb3J5VGl0bGVWYWx1ZSwgYXJyYXlPZkl0ZW1zKSB7XG4gICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGl0bGUnKTtcbiAgICB3aGlsZSAobGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGxpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjYXRlZ29yeVRpdGxlLmlubmVySFRNTCA9IGNhdGVnb3J5VGl0bGVWYWx1ZTtcblxuICAgIFxuICAgIGFycmF5T2ZJdGVtcy5mb3JFYWNoKCBpID0+IHtcbiAgICAgICAgZGlzcGxheVRhc2sobGlzdENvbnRhaW5lciwgaS50aXRsZSwgaS5kdWVEYXRlLCBpLnByaW9yaXR5KVxuICAgIH0pXG4gICAgZGlzcGxheUFkZFRhc2tCdXR0b24oKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNhdGVnb3J5TGlzdChjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWxpc3QnKTtcbiAgICB3aGlsZSAoY2F0ZWdvcnlMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY2F0ZWdvcnlMaXN0LnJlbW92ZUNoaWxkKGNhdGVnb3J5TGlzdC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlbnRyeSBpbiBjYXRlZ29yaWVzKXtcbiAgICAgICAgbGV0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNhdGVnb3J5TmFtZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1uYW1lJyk7XG4gICAgICAgIGNhdGVnb3J5TmFtZS5pbm5lckhUTUwgPSBgJHtlbnRyeX1gO1xuICAgICAgICBjYXRlZ29yeUxpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOYW1lKTtcblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCB7IGdlbmVyYXRlTWFpbkxheW91dCwgZGlzcGxheUNhdGVnb3J5LCBkaXNwbGF5Q2F0ZWdvcnlMaXN0IH0iLCJcblxuY2xhc3MgdGFza0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJUbyBEb1wiO1xuICAgICAgICB0aGlzLm5vdGVzID0gXCJcIjtcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBbXTtcbiAgICB9XG59XG5cbmNsYXNzIGNhdGVnb3J5IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrSXRlbXMgPSBbXTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtT2JqKSB7XG4gICAgICAgIHRoaXMudGFza0l0ZW1zLnB1c2goaXRlbU9iailcbiAgICB9XG4gICAgc2V0IGFsbFRhc2tzKHRhc2tMaXN0KSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRhc2tMaXN0KSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tJdGVtcyA9IHRhc2tMaXN0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgdGFza0l0ZW0sIGNhdGVnb3J5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdlbmVyYXRlTWFpbkxheW91dCwgZGlzcGxheUNhdGVnb3J5LCBkaXNwbGF5Q2F0ZWdvcnlMaXN0IH0gZnJvbSBcIi4vbWFpbi1wYWdlXCI7XG5pbXBvcnQgeyB0YXNrSXRlbSwgY2F0ZWdvcnl9IGZyb20gXCIuL3RvLWRvJ3NcIjtcbmltcG9ydCB7IGdldEFsbENhdGVnb3JpZXMsIHRvRG9EYXRhSGFuZGxlciB9IGZyb20gXCIuL2hhbmRsZXJzXCI7XG5pbXBvcnQgeyBhZGRUYXNrQnV0dG9uTGlzdGVuZXIgLCBhZGRDYXRlZ29yeUJ1dHRvbiwgY2FuY2VsQnV0dG9uTGlzdGVuZXIsIGNhdGVnb3J5U2VsZWN0TGlzdGVuZXJzLCB0YXNrSXRlbXNMaXN0ZW5lcnMsIHVwZGF0ZVRhc2tCdXR0b25MaXN0ZW5lciwgZGVsZXRlVGFza0J1dHRvbkxpc3RlbmVyfSBmcm9tIFwiLi9idXR0b25zXCJcblxuXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxubGV0IGN1cnJlbnRDYXRlZ29yeTtcbmxldCBjYXRlZ29yaWVzO1xubGV0IGN1cnJlbnRDYXRlZ29yeURhdGE7XG5sZXQgY2F0ZWdvcmllc0RhdGE7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgYWRkQ2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5LWZvcm0nKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10YXNrLWZvcm0nKTtcbmdlbmVyYXRlTWFpbkxheW91dChjb250ZW50KTtcblxuXG5pZiAoIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikgPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlZmF1bHRJdGVtID0ge3RpdGxlOiBcIkRlZmF1bHRcIiwgdGFza0l0ZW1zOiBbXX07XG4gICAgIGNhdGVnb3JpZXMgPSB7XG4gICAgICAgIFwiRGVmYXVsdFwiOiBkZWZhdWx0SXRlbSxcbiAgICB9XG4gICAgY3VycmVudENhdGVnb3J5ID0gbmV3IGNhdGVnb3J5KGRlZmF1bHRJdGVtLnRpdGxlKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIEpTT04uc3RyaW5naWZ5KGNhdGVnb3JpZXMpKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50Q2F0ZWdvcnlcIiwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEl0ZW0pKTtcbn0gZWxzZSB7XG4gICAgY3VycmVudENhdGVnb3J5RGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudENhdGVnb3J5XCIpKTtcbiAgICBjYXRlZ29yaWVzRGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSk7XG5cbiAgICBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgY2F0ZWdvcnkoY3VycmVudENhdGVnb3J5RGF0YS50aXRsZSk7XG4gICAgY3VycmVudENhdGVnb3J5LnRhc2tJdGVtcyA9IGN1cnJlbnRDYXRlZ29yeURhdGEudGFza0l0ZW1zO1xuICAgIGNhdGVnb3JpZXMgPSBnZXRBbGxDYXRlZ29yaWVzKCk7XG59XG5cblxuZGlzcGxheUNhdGVnb3J5TGlzdChjYXRlZ29yaWVzKVxuXG5cbmRpc3BsYXlDYXRlZ29yeShjdXJyZW50Q2F0ZWdvcnkudGl0bGUsIGN1cnJlbnRDYXRlZ29yeS50YXNrSXRlbXMpO1xuXG5hZGRDYXRlZ29yeUZvcm0ub25zdWJtaXQgPSAoKSA9PiB7XG4gICAgYWRkQ2F0ZWdvcnlCdXR0b24oKTtcbn1cbmFkZFRhc2tGb3JtLm9uc3VibWl0ID0gKCkgPT4ge1xuICAgIGFkZFRhc2tCdXR0b25MaXN0ZW5lcihjdXJyZW50Q2F0ZWdvcnkpO1xufVxuXG5cblxuY2FuY2VsQnV0dG9uTGlzdGVuZXIoKTtcbmNhdGVnb3J5U2VsZWN0TGlzdGVuZXJzKGNhdGVnb3JpZXMpO1xudGFza0l0ZW1zTGlzdGVuZXJzKCk7XG51cGRhdGVUYXNrQnV0dG9uTGlzdGVuZXIoY3VycmVudENhdGVnb3J5KTtcbmRlbGV0ZVRhc2tCdXR0b25MaXN0ZW5lcihjdXJyZW50Q2F0ZWdvcnkpO1xuXG5cblxuXG5cbi8vIGNvbnN0ICA9IG5ldyB0YXNrSXRlbShcIldhbGsgdGhlIGRvZ1wiLCBcIlRoZSBEb2cgbmVlZHMgdG8gZ28gZm9yIGEgbW9ybmluZyB3YWxrIGV2ZXJ5ZGF5XCIsIGZvcm1hdChuZXcgRGF0ZSgyMDIyLCAxMiwgMTYpLCBcInl5eXkvTU0vZGRcIiksIFwiMlwiKVxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=