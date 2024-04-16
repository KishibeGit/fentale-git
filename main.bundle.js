/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/eclair-3366430_1280.jpg */ "./src/images/eclair-3366430_1280.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/coffee-3120750_1280.jpg */ "./src/images/coffee-3120750_1280.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgb(0,0,0, .01), rgb(0,0,0,.01)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: center;
    background-size: cover;
}

.app {
    height: 100%;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    background-color: rgb(240, 255, 255, .8);
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    width: 59%;
    box-shadow: 10px -10px 50px #e9e3e3;
}

.li {
    list-style: none;
    color: rgb(72, 70, 70);
    font-weight: 700;
}

main {
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background-color: azure;
}

.description {
    width: 60%;
    font-weight: 500;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    color: black;
    padding-top: 15rem;
}

h4 {
    font-size: 2rem;
    font-weight: 800;
    color: gold;
}

h5 {
    font-size: 2rem;
    font-weight: 800;
    color: gold;
    text-align: center;
    margin-bottom: 2rem;
}


h3 {
    color: tomato;
}

h2 {
    margin-left: -25rem;
    margin-bottom: 2rem;
    color: tomato;

}

.icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    position: fixed;
    bottom: 0;
    margin-bottom: 2rem;
    padding: 1rem;
    border-bottom: solid goldenrod 1px;
}

img {
    width: 20px;
    height: 20px;
}

.menu {
    background-color: rgb(240, 255, 255);
    height: 100%;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    height: 80%;
    width: 50%;
    column-gap: 3rem;
    margin-left: -25rem;
}

.container > * {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

article {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

#form-container {
    height: 100%;
    width: 100%;
    background-color: azure;
}

#form {
    background-color: rgb(135, 173, 173);
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 10rem;
    background-image: linear-gradient(rgb(0,0,0, .4), rgb(0,0,0,.4)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: aliceblue;
    background-color: rgb(0, 0, 0, .2);
    padding: 2rem;
}

input {
    color:goldenrod;
    border: solid azure 1px;
    background-color: transparent;
}

input:focus{
    outline: none;
    border: solid green 2px;
}

input:invalid::after {
    border: solid red 2px;
}

input:valid {
    border: solid green 3px;
}

input[type="text"], input[type="date"], input[type="time"], input[type="number"]{
    width: 20rem;
    margin-left: 1rem;
}

input[type="email"] {
    width: 100%;
    color: aliceblue;
} 

button[type="submit"] {
    background-color: tomato;
    border: none;
    color: azure;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: 2rem;
    font-weight: 700;
    border-radius: .4rem;
}

#radio {
    align-self: center;
}

#radio > * {
    margin: 1rem;
}

h1 {
    color: tomato;
    border-bottom: solid azure 1px;
    text-align: center;
}

#contact-container {
    height: 100%;
    width: 100%;
    background-color: rgb(240, 255, 255);
}


#contact {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 2rem;
    padding-top: 10rem;
    width: 100%;
    height: 80%;
    background-color: rgb(0,0,0,.8);
    position: fixed;
    bottom: 0;
}


#News {
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    width: 100%;
    padding-left: 5rem;
}

#News button {
    background-color: tomato;
    color: aliceblue;
    text-align: center;
    height: 30px;
    width: 40px;
    border: none;
}

#News input {
    height: 30px;
    border-color: rgb(240, 248, 255, .7);
}

.info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: rgba(246, 248, 250, 0.715);
}

#contact h4 {
    color: tomato;
    border-bottom: solid 1px aliceblue;
    margin-bottom: 2rem;
    text-align: center;
}

@media (max-width: 768px) {
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        background-color: rgb(240, 255, 255, .8);
        padding-top: 2rem;
        padding-bottom: 2rem;
        top: 0;
        width: 100%;
    }
    

    main {
        left: 0;
        background-color: rgb(240, 255, 255, .5);
        width: 100%;
    }

    .menu{
        overflow-y: scroll;
        padding-bottom: 2rem;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        height: 100%;
        width: 50%;
        row-gap: 1rem;
        margin-left: -5rem;
    }


    h2 {
        margin-left: -5rem;
    }

    h5 {
        font-size: 1.4rem;
    }

    #form-container {
        height: 100%;
        width: 100%;
        background-color: azure;
        margin-bottom: 0;
    }

    #form {
        height: 100%;
        width: 100%;
    }

    input[type="text"], input[type="date"], input[type="time"], input[type="number"]{
        width: 20rem;
        margin-left: 0;
    }

    
    

    #contact {
        display: grid;
        grid-template-columns: 1fr;
        background-color: rgb(0,0,0,.8);
        overflow-y: scroll;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-bottom: 1rem;
        height: 90%;
    }

    #contact span {
        display: block;
    }

    .info {
        gap: .5rem;
    }

    #contact h4 {
        font-size: 1rem;
    }

    #News {
        padding-left: 1rem;
    }

    #News h1 {
        font-size: 1rem;
    }

    #News button {
        width: 30px;
    }
    #News input {
        width: 60%;
    }

}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100%;\n    background-image: linear-gradient(rgb(0,0,0, .01), rgb(0,0,0,.01)), url(./images/eclair-3366430_1280.jpg);\n    background-position: center;\n    background-size: cover;\n}\n\n.app {\n    height: 100%;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    background-color: rgb(240, 255, 255, .8);\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 59%;\n    box-shadow: 10px -10px 50px #e9e3e3;\n}\n\n.li {\n    list-style: none;\n    color: rgb(72, 70, 70);\n    font-weight: 700;\n}\n\nmain {\n    top: 0;\n    left: 0;\n    width: 40%;\n    height: 100%;\n    background-color: azure;\n}\n\n.description {\n    width: 60%;\n    font-weight: 500;\n}\n\nsection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 6rem;\n    color: black;\n    padding-top: 15rem;\n}\n\nh4 {\n    font-size: 2rem;\n    font-weight: 800;\n    color: gold;\n}\n\nh5 {\n    font-size: 2rem;\n    font-weight: 800;\n    color: gold;\n    text-align: center;\n    margin-bottom: 2rem;\n}\n\n\nh3 {\n    color: tomato;\n}\n\nh2 {\n    margin-left: -25rem;\n    margin-bottom: 2rem;\n    color: tomato;\n\n}\n\n.icons {\n    display: flex;\n    justify-content: center;\n    gap: 1.5rem;\n    position: fixed;\n    bottom: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    border-bottom: solid goldenrod 1px;\n}\n\nimg {\n    width: 20px;\n    height: 20px;\n}\n\n.menu {\n    background-color: rgb(240, 255, 255);\n    height: 100%;\n    padding-top: 10rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    height: 80%;\n    width: 50%;\n    column-gap: 3rem;\n    margin-left: -25rem;\n}\n\n.container > * {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\narticle {\n    display: flex;\n    justify-content: space-between;\n    gap: 2rem;\n}\n\n#form-container {\n    height: 100%;\n    width: 100%;\n    background-color: azure;\n}\n\n#form {\n    background-color: rgb(135, 173, 173);\n    height: 100%;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding-top: 10rem;\n    background-image: linear-gradient(rgb(0,0,0, .4), rgb(0,0,0,.4)), url(./images/coffee-3120750_1280.jpg);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    color: aliceblue;\n    background-color: rgb(0, 0, 0, .2);\n    padding: 2rem;\n}\n\ninput {\n    color:goldenrod;\n    border: solid azure 1px;\n    background-color: transparent;\n}\n\ninput:focus{\n    outline: none;\n    border: solid green 2px;\n}\n\ninput:invalid::after {\n    border: solid red 2px;\n}\n\ninput:valid {\n    border: solid green 3px;\n}\n\ninput[type=\"text\"], input[type=\"date\"], input[type=\"time\"], input[type=\"number\"]{\n    width: 20rem;\n    margin-left: 1rem;\n}\n\ninput[type=\"email\"] {\n    width: 100%;\n    color: aliceblue;\n} \n\nbutton[type=\"submit\"] {\n    background-color: tomato;\n    border: none;\n    color: azure;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    font-size: 2rem;\n    font-weight: 700;\n    border-radius: .4rem;\n}\n\n#radio {\n    align-self: center;\n}\n\n#radio > * {\n    margin: 1rem;\n}\n\nh1 {\n    color: tomato;\n    border-bottom: solid azure 1px;\n    text-align: center;\n}\n\n#contact-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(240, 255, 255);\n}\n\n\n#contact {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 2rem;\n    padding-top: 10rem;\n    width: 100%;\n    height: 80%;\n    background-color: rgb(0,0,0,.8);\n    position: fixed;\n    bottom: 0;\n}\n\n\n#News {\n    display: flex;\n    flex-direction: column;\n    \n    gap: 1rem;\n    width: 100%;\n    padding-left: 5rem;\n}\n\n#News button {\n    background-color: tomato;\n    color: aliceblue;\n    text-align: center;\n    height: 30px;\n    width: 40px;\n    border: none;\n}\n\n#News input {\n    height: 30px;\n    border-color: rgb(240, 248, 255, .7);\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: rgba(246, 248, 250, 0.715);\n}\n\n#contact h4 {\n    color: tomato;\n    border-bottom: solid 1px aliceblue;\n    margin-bottom: 2rem;\n    text-align: center;\n}\n\n@media (max-width: 768px) {\n    nav {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 2rem;\n        background-color: rgb(240, 255, 255, .8);\n        padding-top: 2rem;\n        padding-bottom: 2rem;\n        top: 0;\n        width: 100%;\n    }\n    \n\n    main {\n        left: 0;\n        background-color: rgb(240, 255, 255, .5);\n        width: 100%;\n    }\n\n    .menu{\n        overflow-y: scroll;\n        padding-bottom: 2rem;\n    }\n\n    .container {\n        display: grid;\n        grid-template-columns: 1fr;\n        justify-content: center;\n        height: 100%;\n        width: 50%;\n        row-gap: 1rem;\n        margin-left: -5rem;\n    }\n\n\n    h2 {\n        margin-left: -5rem;\n    }\n\n    h5 {\n        font-size: 1.4rem;\n    }\n\n    #form-container {\n        height: 100%;\n        width: 100%;\n        background-color: azure;\n        margin-bottom: 0;\n    }\n\n    #form {\n        height: 100%;\n        width: 100%;\n    }\n\n    input[type=\"text\"], input[type=\"date\"], input[type=\"time\"], input[type=\"number\"]{\n        width: 20rem;\n        margin-left: 0;\n    }\n\n    \n    \n\n    #contact {\n        display: grid;\n        grid-template-columns: 1fr;\n        background-color: rgb(0,0,0,.8);\n        overflow-y: scroll;\n        padding-left: .5rem;\n        padding-right: .5rem;\n        padding-bottom: 1rem;\n        height: 90%;\n    }\n\n    #contact span {\n        display: block;\n    }\n\n    .info {\n        gap: .5rem;\n    }\n\n    #contact h4 {\n        font-size: 1rem;\n    }\n\n    #News {\n        padding-left: 1rem;\n    }\n\n    #News h1 {\n        font-size: 1rem;\n    }\n\n    #News button {\n        width: 30px;\n    }\n    #News input {\n        width: 60%;\n    }\n\n}\n\n\n\n"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });


const contact = `<div id = "contact-container">

<div id = "contact">
    <div class = "info">
    <h4>About Us</h4>
    <p>We serve delicious Ethiopian and international </br>
    cuisine made with fresh,locally-sourced ingredients.</br>
    Our warm and inviting atmosphere is perfect for any occasion, </br>
    and our carefully curated selection of wines and </br>
    cocktails will enhance your dining experience. </br>
    </p>
    </div>
    <div  class = "info">
    <h4>Open Hours</h4>
    <p>Monday-Friday <span>8:00 am - 8:00 pm</span></p>
    <p>Satarday-Sunday <span>8:00 am - 6:00 pm</span></p>
    <p>Always Close On Holidays</p>
    </div>
    <div  class = "info">
    <h4>Contact Us</h4>
    <p>Sidist Kilo, Arada, </p>
    <p>Addis Ababa, Ethiopia</p>
    <p>P.O.B: 1039873</p>
    <p>Phone Number: +2511111111</p>
    </div>

    <div id = "News">
    <h1>Get News & Offers</h1>
    <label><input type"email" placeholder="Enter your email"><button>></button><label>
    </div>
</div>
</div>`;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ././style.css */ "./src/style.css");
/* harmony import */ var _icons_facebook_4494479_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/facebook_4494479.png */ "./src/icons/facebook_4494479.png");
/* harmony import */ var _icons_instagram_2111463_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/instagram_2111463.png */ "./src/icons/instagram_2111463.png");
/* harmony import */ var _icons_twitter_4494477_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/twitter_4494477.png */ "./src/icons/twitter_4494477.png");





function renderHome() {
    const nav = document.createElement("nav");
    const main = document.createElement("main");
    const icons = document.createElement("div");
    
    
   let items = ['Home', 'Menu', 'Reservation', 'Contact'];

    // Loop through the array and create an li element for each item
    items.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add("li")
        li.id = item
        nav.appendChild(li);
    });

    const section = document.createElement("section")
    const restName = document.createElement("h4");
    const description = document.createElement("div");
    const h4 = document.createElement("h3")
    restName.textContent = "Welcome to Fentale Restaurant";
    description.textContent = "We serve delicious Ethiopian and international cuisine made with fresh, locally-sourced ingredientsis.";
    h4.textContent = "Come join us and discover the true essence of Ethiopian cuisine.";
    description.classList.add("description")
    section.appendChild(restName);
    section.appendChild(description);
    section.appendChild(h4)
    main.appendChild(section)


    let fb = document.createElement("img");
    let ig = document.createElement("img");
    let twitter = document.createElement("img")
    fb.src = _icons_facebook_4494479_png__WEBPACK_IMPORTED_MODULE_1__;
    ig.src = _icons_instagram_2111463_png__WEBPACK_IMPORTED_MODULE_2__;
    twitter.src = _icons_twitter_4494477_png__WEBPACK_IMPORTED_MODULE_3__;

    icons.appendChild(fb);
    icons.appendChild(ig);
    icons.appendChild(twitter);
    icons.classList.add('icons')

    main.appendChild(icons)

    return { nav, main}

}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuComponent: () => (/* binding */ menuComponent)
/* harmony export */ });


const menuComponent = `<div class = "menu">

<h2>Our Menu</h2>

<div class = "container">

<div>
<h5>MAIN COURSES</h5>
<article>
<p>Grilled Fish And Potatoes</p>
<p>$ 20.00</p>
</article>
<article>
<p>Chicken And Rice</p>
<p>$ 20.00</p>
</article>
<article>
<p>Turky And Ham Pie</p>
<p>$ 20.00</p>
</article>
</div>

<div>
<h5>SALADS</h5>
<article>
<p>Guacamole Salad</p>
<p>$ 10.00</p>
</article>
<article>
<p>Chicken Salad</p>
<p>$ 10.00</p>
</article>
<article>
<p>Cobb Salad</p>
<p>$ 10.00</p>
</article>
</div>

<div>
<h5>DESSERT</h5>
<article>
<p>Fruit And Cream</p>
<p>$ 5.00</p>
</article>
<article>
<p>Apple Pie</p>
<p>$ 5.00</p>
</article>
<article>
<p>Ice cream</p>
<p>$ 5.00</p>
</article>
</div>

<div>
<h5>DRINKS</h5>
<article>
<p>Mineral Water</p>
<p>$ 2.00</p>
</article>
<article>
<p>Fresh Fruit Juice</p>
<p>$ 2.00</p>
</article>
<article>
<p>Wines</p>
<p>$ 2.00</p>
</article>
</div>

</div>

</div>`

/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
const form = `<div id = "form-container">
<section id = "form">


<h1>Book a Table</h1>

<form>
    
    <div>
        <label for="booking_date">Date:</label>
        <input type="date" id="booking_date" name="booking_date" required>   
    </div>
    <div>
        <label for="booking_time">Time:</label>
        <input type="time" id="booking_time" name="booking_time" required>   
    </div>
    <div>
        <label for="people">Guests </label>
        <input type="number" id="people" min="1" max="8" name="people" required>        
    </div>
    <div id = "radio">
        <label>
            <input type="radio" id="agree" name="place" required checked> 
            Indoor
        </label>
        <label>
            <input type="radio" id="agree" name="place" required> 
            Outdoor
        </label>
    </div>
    <div>
        <input type="email" id="email_address" name="email_address" placeholder="Enter your email" required>
    </div>
    <button type="submit">Book Now</button>
    </form>
</section>
</div>`;




/***/ }),

/***/ "./src/icons/facebook_4494479.png":
/*!****************************************!*\
  !*** ./src/icons/facebook_4494479.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e6a1e5fdf0bd596048d.png";

/***/ }),

/***/ "./src/icons/instagram_2111463.png":
/*!*****************************************!*\
  !*** ./src/icons/instagram_2111463.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e719d8b29f452a16302d.png";

/***/ }),

/***/ "./src/icons/twitter_4494477.png":
/*!***************************************!*\
  !*** ./src/icons/twitter_4494477.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93ac3f9a344ecd5d01a4.png";

/***/ }),

/***/ "./src/images/coffee-3120750_1280.jpg":
/*!********************************************!*\
  !*** ./src/images/coffee-3120750_1280.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c67e123f4d47f2d059d.jpg";

/***/ }),

/***/ "./src/images/eclair-3366430_1280.jpg":
/*!********************************************!*\
  !*** ./src/images/eclair-3366430_1280.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7633d2c6a16d23691be.jpg";

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation */ "./src/reservation.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const app = document.createElement("div");
app.classList.add("app");

function rendernavBar() {
    document.body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])().nav);

}

function mainComponent(component) {
    app.appendChild(component);
    document.body.appendChild(app);
}

rendernavBar();
mainComponent((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])().main);

const menu = document.querySelector("#Menu");
/*
menu.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    app.insertAdjacentHTML('afterbegin', menuComponent);
})

*/

const book = document.querySelector("#Reservation");
/*
book.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    app.insertAdjacentHTML('afterbegin', form);
})
*/
const contactUs = document.querySelector("#Contact");
/*
contactUs.addEventListener("click", () => {
    const app = document.querySelector(".app");
    app.innerHTML = "";
    app.insertAdjacentHTML('afterbegin', contact);
})
*/


const navBar = document.querySelector("nav")

navBar.addEventListener("click", (e) => {
    if (e.target.id === "Home") {
      app.innerHTML = "";
      mainComponent((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])().main);
    } else if (e.target.id === "Menu") {
        const app = document.querySelector(".app");
        app.innerHTML = "";
        app.insertAdjacentHTML('afterbegin', _menu__WEBPACK_IMPORTED_MODULE_1__.menuComponent);
    } else if (e.target.id === "Reservation") {
        const app = document.querySelector(".app");
        app.innerHTML = "";
        app.insertAdjacentHTML('afterbegin', _reservation__WEBPACK_IMPORTED_MODULE_2__.form);
    }else if (e.target.id === "Contact") {
        const app = document.querySelector(".app");
        app.innerHTML = "";
        app.insertAdjacentHTML('afterbegin', _contact__WEBPACK_IMPORTED_MODULE_3__.contact);
      }
  });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2SUFBbUQ7QUFDL0YsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxtQ0FBbUM7QUFDakg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxtQ0FBbUM7QUFDL0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZ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WyJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vc3JjL3Jlc2VydmF0aW9uLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9lY2xhaXItMzM2NjQzMF8xMjgwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvZmZlZS0zMTIwNzUwXzEyODAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwLDAsMCwgLjAxKSwgcmdiKDAsMCwwLC4wMSkpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hcHAge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuOCk7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNTklO1xuICAgIGJveC1zaGFkb3c6IDEwcHggLTEwcHggNTBweCAjZTllM2UzO1xufVxuXG4ubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgY29sb3I6IHJnYig3MiwgNzAsIDcwKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5tYWluIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNnJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy10b3A6IDE1cmVtO1xufVxuXG5oNCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IGdvbGQ7XG59XG5cbmg1IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogZ29sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuXG5oMyB7XG4gICAgY29sb3I6IHRvbWF0bztcbn1cblxuaDIge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBjb2xvcjogdG9tYXRvO1xuXG59XG5cbi5pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBnb2xkZW5yb2QgMXB4O1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLm1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGNvbHVtbi1nYXA6IDNyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0yNXJlbTtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuYXJ0aWNsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAycmVtO1xufVxuXG4jZm9ybS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuI2Zvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDE3MywgMTczKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsMCwwLCAuNCksIHJnYigwLDAsMCwuNCkpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjIpO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbmlucHV0IHtcbiAgICBjb2xvcjpnb2xkZW5yb2Q7XG4gICAgYm9yZGVyOiBzb2xpZCBhenVyZSAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCBncmVlbiAycHg7XG59XG5cbmlucHV0OmludmFsaWQ6OmFmdGVyIHtcbiAgICBib3JkZXI6IHNvbGlkIHJlZCAycHg7XG59XG5cbmlucHV0OnZhbGlkIHtcbiAgICBib3JkZXI6IHNvbGlkIGdyZWVuIDNweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJdLCBpbnB1dFt0eXBlPVwidGltZVwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXXtcbiAgICB3aWR0aDogMjByZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbmlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn0gXG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBhenVyZTtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xufVxuXG4jcmFkaW8ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI3JhZGlvID4gKiB7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG5oMSB7XG4gICAgY29sb3I6IHRvbWF0bztcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBhenVyZSAxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGFjdC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSk7XG59XG5cblxuI2NvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsLjgpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG59XG5cblxuI05ld3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBnYXA6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xufVxuXG4jTmV3cyBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4jTmV3cyBpbnB1dCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUsIC43KTtcbn1cblxuLmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gICAgY29sb3I6IHJnYmEoMjQ2LCAyNDgsIDI1MCwgMC43MTUpO1xufVxuXG4jY29udGFjdCBoNCB7XG4gICAgY29sb3I6IHRvbWF0bztcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYWxpY2VibHVlO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBuYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjgpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuXG4gICAgbWFpbiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuNSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5tZW51e1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIH1cblxuICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcm93LWdhcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cmVtO1xuICAgIH1cblxuXG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XG4gICAgfVxuXG4gICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG5cbiAgICAjZm9ybS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAjZm9ybSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJdLCBpbnB1dFt0eXBlPVwidGltZVwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXXtcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICBcbiAgICBcblxuICAgICNjb250YWN0IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwuOCk7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICB9XG5cbiAgICAjY29udGFjdCBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgICBnYXA6IC41cmVtO1xuICAgIH1cblxuICAgICNjb250YWN0IGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgICNOZXdzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgICNOZXdzIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgICNOZXdzIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbiAgICAjTmV3cyBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuXG59XG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyR0FBeUc7SUFDekcsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsVUFBVTtJQUNWLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGFBQWE7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Z0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7SUFDbEI7Ozs7O0lBS0E7UUFDSSxhQUFhO1FBQ2IsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsMCwwLCAuMDEpLCByZ2IoMCwwLDAsLjAxKSksIHVybCguL2ltYWdlcy9lY2xhaXItMzM2NjQzMF8xMjgwLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmFwcCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjU1LCAyNTUsIC44KTtcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiA1OSU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggLTEwcHggNTBweCAjZTllM2UzO1xcbn1cXG5cXG4ubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDcyLCA3MCwgNzApO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmctdG9wOiAxNXJlbTtcXG59XFxuXFxuaDQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiBnb2xkO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IGdvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuXFxuaDMge1xcbiAgICBjb2xvcjogdG9tYXRvO1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIGNvbG9yOiB0b21hdG87XFxuXFxufVxcblxcbi5pY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGdvbGRlbnJvZCAxcHg7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5tZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjU1LCAyNTUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTI1cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyID4gKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4jZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDE3MywgMTczKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwLDAsMCwgLjQpLCByZ2IoMCwwLDAsLjQpKSwgdXJsKC4vaW1hZ2VzL2NvZmZlZS0zMTIwNzUwXzEyODAuanBnKTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4yKTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBjb2xvcjpnb2xkZW5yb2Q7XFxuICAgIGJvcmRlcjogc29saWQgYXp1cmUgMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gMnB4O1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkOjphZnRlciB7XFxuICAgIGJvcmRlcjogc29saWQgcmVkIDJweDtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXI6IHNvbGlkIGdyZWVuIDNweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSwgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl17XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG59IFxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogYXp1cmU7XFxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcbn1cXG5cXG4jcmFkaW8ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNyYWRpbyA+ICoge1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHRvbWF0bztcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYXp1cmUgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1KTtcXG59XFxuXFxuXFxuI2NvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwuOCk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG5cXG4jTmV3cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBnYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxufVxcblxcbiNOZXdzIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNOZXdzIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNDAsIDI0OCwgMjU1LCAuNyk7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBjb2xvcjogcmdiYSgyNDYsIDI0OCwgMjUwLCAwLjcxNSk7XFxufVxcblxcbiNjb250YWN0IGg0IHtcXG4gICAgY29sb3I6IHRvbWF0bztcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGFsaWNlYmx1ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjgpO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjUpO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnV7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIHJvdy1nYXA6IDFyZW07XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XFxuICAgIH1cXG5cXG5cXG4gICAgaDIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cmVtO1xcbiAgICB9XFxuXFxuICAgIGg1IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB9XFxuXFxuICAgICNmb3JtLWNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAjZm9ybSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSwgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdLCBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXXtcXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICB9XFxuXFxuICAgIFxcbiAgICBcXG5cXG4gICAgI2NvbnRhY3Qge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLC44KTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3Qgc3BhbiB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAuaW5mbyB7XFxuICAgICAgICBnYXA6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgICNjb250YWN0IGg0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjTmV3cyB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI05ld3MgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNOZXdzIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgfVxcbiAgICAjTmV3cyBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICB9XFxuXFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmV4cG9ydCBjb25zdCBjb250YWN0ID0gYDxkaXYgaWQgPSBcImNvbnRhY3QtY29udGFpbmVyXCI+XG5cbjxkaXYgaWQgPSBcImNvbnRhY3RcIj5cbiAgICA8ZGl2IGNsYXNzID0gXCJpbmZvXCI+XG4gICAgPGg0PkFib3V0IFVzPC9oND5cbiAgICA8cD5XZSBzZXJ2ZSBkZWxpY2lvdXMgRXRoaW9waWFuIGFuZCBpbnRlcm5hdGlvbmFsIDwvYnI+XG4gICAgY3Vpc2luZSBtYWRlIHdpdGggZnJlc2gsbG9jYWxseS1zb3VyY2VkIGluZ3JlZGllbnRzLjwvYnI+XG4gICAgT3VyIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUgaXMgcGVyZmVjdCBmb3IgYW55IG9jY2FzaW9uLCA8L2JyPlxuICAgIGFuZCBvdXIgY2FyZWZ1bGx5IGN1cmF0ZWQgc2VsZWN0aW9uIG9mIHdpbmVzIGFuZCA8L2JyPlxuICAgIGNvY2t0YWlscyB3aWxsIGVuaGFuY2UgeW91ciBkaW5pbmcgZXhwZXJpZW5jZS4gPC9icj5cbiAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAgY2xhc3MgPSBcImluZm9cIj5cbiAgICA8aDQ+T3BlbiBIb3VyczwvaDQ+XG4gICAgPHA+TW9uZGF5LUZyaWRheSA8c3Bhbj44OjAwIGFtIC0gODowMCBwbTwvc3Bhbj48L3A+XG4gICAgPHA+U2F0YXJkYXktU3VuZGF5IDxzcGFuPjg6MDAgYW0gLSA2OjAwIHBtPC9zcGFuPjwvcD5cbiAgICA8cD5BbHdheXMgQ2xvc2UgT24gSG9saWRheXM8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAgY2xhc3MgPSBcImluZm9cIj5cbiAgICA8aDQ+Q29udGFjdCBVczwvaDQ+XG4gICAgPHA+U2lkaXN0IEtpbG8sIEFyYWRhLCA8L3A+XG4gICAgPHA+QWRkaXMgQWJhYmEsIEV0aGlvcGlhPC9wPlxuICAgIDxwPlAuTy5COiAxMDM5ODczPC9wPlxuICAgIDxwPlBob25lIE51bWJlcjogKzI1MTExMTExMTE8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkID0gXCJOZXdzXCI+XG4gICAgPGgxPkdldCBOZXdzICYgT2ZmZXJzPC9oMT5cbiAgICA8bGFiZWw+PGlucHV0IHR5cGVcImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCI+PGJ1dHRvbj4+PC9idXR0b24+PGxhYmVsPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L2Rpdj5gOyIsImltcG9ydCBcIi4vLi9zdHlsZS5jc3NcIlxuaW1wb3J0IGZiSWNvbiBmcm9tIFwiLi9pY29ucy9mYWNlYm9va180NDk0NDc5LnBuZ1wiXG5pbXBvcnQgaWdJY29uIGZyb20gXCIuL2ljb25zL2luc3RhZ3JhbV8yMTExNDYzLnBuZ1wiXG5pbXBvcnQgdHdpdHRlckljb24gZnJvbSBcIi4vaWNvbnMvdHdpdHRlcl80NDk0NDc3LnBuZ1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIFxuICAgbGV0IGl0ZW1zID0gWydIb21lJywgJ01lbnUnLCAnUmVzZXJ2YXRpb24nLCAnQ29udGFjdCddO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBhcnJheSBhbmQgY3JlYXRlIGFuIGxpIGVsZW1lbnQgZm9yIGVhY2ggaXRlbVxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJsaVwiKVxuICAgICAgICBsaS5pZCA9IGl0ZW1cbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIGNvbnN0IHJlc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIHJlc3ROYW1lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEZlbnRhbGUgUmVzdGF1cmFudFwiO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJXZSBzZXJ2ZSBkZWxpY2lvdXMgRXRoaW9waWFuIGFuZCBpbnRlcm5hdGlvbmFsIGN1aXNpbmUgbWFkZSB3aXRoIGZyZXNoLCBsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHNpcy5cIjtcbiAgICBoNC50ZXh0Q29udGVudCA9IFwiQ29tZSBqb2luIHVzIGFuZCBkaXNjb3ZlciB0aGUgdHJ1ZSBlc3NlbmNlIG9mIEV0aGlvcGlhbiBjdWlzaW5lLlwiO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKVxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocmVzdE5hbWUpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDQpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKVxuXG5cbiAgICBsZXQgZmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCBpZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGV0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgZmIuc3JjID0gZmJJY29uO1xuICAgIGlnLnNyYyA9IGlnSWNvbjtcbiAgICB0d2l0dGVyLnNyYyA9IHR3aXR0ZXJJY29uO1xuXG4gICAgaWNvbnMuYXBwZW5kQ2hpbGQoZmIpO1xuICAgIGljb25zLmFwcGVuZENoaWxkKGlnKTtcbiAgICBpY29ucy5hcHBlbmRDaGlsZCh0d2l0dGVyKTtcbiAgICBpY29ucy5jbGFzc0xpc3QuYWRkKCdpY29ucycpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGljb25zKVxuXG4gICAgcmV0dXJuIHsgbmF2LCBtYWlufVxuXG59XG5cbiIsIlxuXG5leHBvcnQgY29uc3QgbWVudUNvbXBvbmVudCA9IGA8ZGl2IGNsYXNzID0gXCJtZW51XCI+XG5cbjxoMj5PdXIgTWVudTwvaDI+XG5cbjxkaXYgY2xhc3MgPSBcImNvbnRhaW5lclwiPlxuXG48ZGl2PlxuPGg1Pk1BSU4gQ09VUlNFUzwvaDU+XG48YXJ0aWNsZT5cbjxwPkdyaWxsZWQgRmlzaCBBbmQgUG90YXRvZXM8L3A+XG48cD4kIDIwLjAwPC9wPlxuPC9hcnRpY2xlPlxuPGFydGljbGU+XG48cD5DaGlja2VuIEFuZCBSaWNlPC9wPlxuPHA+JCAyMC4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+VHVya3kgQW5kIEhhbSBQaWU8L3A+XG48cD4kIDIwLjAwPC9wPlxuPC9hcnRpY2xlPlxuPC9kaXY+XG5cbjxkaXY+XG48aDU+U0FMQURTPC9oNT5cbjxhcnRpY2xlPlxuPHA+R3VhY2Ftb2xlIFNhbGFkPC9wPlxuPHA+JCAxMC4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+Q2hpY2tlbiBTYWxhZDwvcD5cbjxwPiQgMTAuMDA8L3A+XG48L2FydGljbGU+XG48YXJ0aWNsZT5cbjxwPkNvYmIgU2FsYWQ8L3A+XG48cD4kIDEwLjAwPC9wPlxuPC9hcnRpY2xlPlxuPC9kaXY+XG5cbjxkaXY+XG48aDU+REVTU0VSVDwvaDU+XG48YXJ0aWNsZT5cbjxwPkZydWl0IEFuZCBDcmVhbTwvcD5cbjxwPiQgNS4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+QXBwbGUgUGllPC9wPlxuPHA+JCA1LjAwPC9wPlxuPC9hcnRpY2xlPlxuPGFydGljbGU+XG48cD5JY2UgY3JlYW08L3A+XG48cD4kIDUuMDA8L3A+XG48L2FydGljbGU+XG48L2Rpdj5cblxuPGRpdj5cbjxoNT5EUklOS1M8L2g1PlxuPGFydGljbGU+XG48cD5NaW5lcmFsIFdhdGVyPC9wPlxuPHA+JCAyLjAwPC9wPlxuPC9hcnRpY2xlPlxuPGFydGljbGU+XG48cD5GcmVzaCBGcnVpdCBKdWljZTwvcD5cbjxwPiQgMi4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+V2luZXM8L3A+XG48cD4kIDIuMDA8L3A+XG48L2FydGljbGU+XG48L2Rpdj5cblxuPC9kaXY+XG5cbjwvZGl2PmAiLCJleHBvcnQgY29uc3QgZm9ybSA9IGA8ZGl2IGlkID0gXCJmb3JtLWNvbnRhaW5lclwiPlxuPHNlY3Rpb24gaWQgPSBcImZvcm1cIj5cblxuXG48aDE+Qm9vayBhIFRhYmxlPC9oMT5cblxuPGZvcm0+XG4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImJvb2tpbmdfZGF0ZVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJib29raW5nX2RhdGVcIiBuYW1lPVwiYm9va2luZ19kYXRlXCIgcmVxdWlyZWQ+ICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImJvb2tpbmdfdGltZVwiPlRpbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgaWQ9XCJib29raW5nX3RpbWVcIiBuYW1lPVwiYm9va2luZ190aW1lXCIgcmVxdWlyZWQ+ICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBlb3BsZVwiPkd1ZXN0cyA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGVvcGxlXCIgbWluPVwiMVwiIG1heD1cIjhcIiBuYW1lPVwicGVvcGxlXCIgcmVxdWlyZWQ+ICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkID0gXCJyYWRpb1wiPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhZ3JlZVwiIG5hbWU9XCJwbGFjZVwiIHJlcXVpcmVkIGNoZWNrZWQ+IFxuICAgICAgICAgICAgSW5kb29yXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImFncmVlXCIgbmFtZT1cInBsYWNlXCIgcmVxdWlyZWQ+IFxuICAgICAgICAgICAgT3V0ZG9vclxuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsX2FkZHJlc3NcIiBuYW1lPVwiZW1haWxfYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIHJlcXVpcmVkPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkJvb2sgTm93PC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9zZWN0aW9uPlxuPC9kaXY+YDtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW5kZXJIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vcmVzZXJ2YXRpb25cIjtcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hcHAuY2xhc3NMaXN0LmFkZChcImFwcFwiKTtcblxuZnVuY3Rpb24gcmVuZGVybmF2QmFyKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVySG9tZSgpLm5hdik7XG5cbn1cblxuZnVuY3Rpb24gbWFpbkNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBhcHAuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XG59XG5cbnJlbmRlcm5hdkJhcigpO1xubWFpbkNvbXBvbmVudChyZW5kZXJIb21lKCkubWFpbik7XG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI01lbnVcIik7XG4vKlxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xuICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGFwcC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBtZW51Q29tcG9uZW50KTtcbn0pXG5cbiovXG5cbmNvbnN0IGJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Jlc2VydmF0aW9uXCIpO1xuLypcbmJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcbiAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBhcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgZm9ybSk7XG59KVxuKi9cbmNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQ29udGFjdFwiKTtcbi8qXG5jb250YWN0VXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcbiAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBhcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgY29udGFjdCk7XG59KVxuKi9cblxuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpXG5cbm5hdkJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiSG9tZVwiKSB7XG4gICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIG1haW5Db21wb25lbnQocmVuZGVySG9tZSgpLm1haW4pO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiTWVudVwiKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xuICAgICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYXBwLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG1lbnVDb21wb25lbnQpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiUmVzZXJ2YXRpb25cIikge1xuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcFwiKTtcbiAgICAgICAgYXBwLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGFwcC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBmb3JtKTtcbiAgICB9ZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiQ29udGFjdFwiKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xuICAgICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYXBwLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGNvbnRhY3QpO1xuICAgICAgfVxuICB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==