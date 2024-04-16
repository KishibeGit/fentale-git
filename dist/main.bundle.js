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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pizza-8128208_1280.jpg */ "./src/images/pizza-8128208_1280.jpg"), __webpack_require__.b);
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-image: linear-gradient(rgb(0,0,0, .01), rgb(0,0,0,.01)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position: right;
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

.li:hover {
    border-bottom: solid goldenrod 3px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-width: 5px;
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
    padding: 1rem;
}

.description:hover {
    color: rgb(95, 128, 117);
    background-color: rgb(240, 255, 255, .3);
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
    border-radius: 50%;
}

img:hover {
    box-shadow: 2px -2px 10px rgb(248, 215, 132);
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



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,4DAA4D;IAC5D,2GAAwG;IACxG,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,wCAAwC;IACxC,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;IACf,MAAM;IACN,QAAQ;IACR,UAAU;IACV,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,+BAA+B;IAC/B,8BAA8B;IAC9B,wBAAwB;AAC5B;;;AAGA;IACI,MAAM;IACN,OAAO;IACP,UAAU;IACV,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,wCAAwC;AAC5C;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,WAAW;IACX,UAAU;IACV,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,yGAAuG;AAC3G;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;AACxC;;;AAGA;IACI,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,SAAS;IACT,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,+BAA+B;IAC/B,eAAe;IACf,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,sBAAsB;;IAEtB,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,SAAS;QACT,wCAAwC;QACxC,iBAAiB;QACjB,oBAAoB;QACpB,MAAM;QACN,WAAW;IACf;;;IAGA;QACI,OAAO;QACP,wCAAwC;QACxC,WAAW;IACf;;IAEA;QACI,kBAAkB;QAClB,oBAAoB;IACxB;;IAEA;QACI,aAAa;QACb,0BAA0B;QAC1B,uBAAuB;QACvB,YAAY;QACZ,UAAU;QACV,aAAa;QACb,kBAAkB;IACtB;;;IAGA;QACI,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,YAAY;QACZ,WAAW;QACX,uBAAuB;QACvB,gBAAgB;IACpB;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,YAAY;QACZ,cAAc;IAClB;;;;;IAKA;QACI,aAAa;QACb,0BAA0B;QAC1B,+BAA+B;QAC/B,kBAAkB;QAClB,mBAAmB;QACnB,oBAAoB;QACpB,oBAAoB;QACpB,WAAW;IACf;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,WAAW;IACf;IACA;QACI,UAAU;IACd;;AAEJ","sourcesContent":["* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    width: 100%;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    background-image: linear-gradient(rgb(0,0,0, .01), rgb(0,0,0,.01)), url(./images/pizza-8128208_1280.jpg);\n    background-position: right;\n    background-size: cover;\n}\n\n.app {\n    height: 100%;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    background-color: rgb(240, 255, 255, .8);\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 59%;\n    box-shadow: 10px -10px 50px #e9e3e3;\n}\n\n.li {\n    list-style: none;\n    color: rgb(72, 70, 70);\n    font-weight: 700;\n}\n\n.li:hover {\n    border-bottom: solid goldenrod 3px;\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n    border-bottom-width: 5px;\n}\n\n\nmain {\n    top: 0;\n    left: 0;\n    width: 40%;\n    height: 100%;\n    background-color: azure;\n}\n\n.description {\n    width: 60%;\n    font-weight: 500;\n    padding: 1rem;\n}\n\n.description:hover {\n    color: rgb(95, 128, 117);\n    background-color: rgb(240, 255, 255, .3);\n}\n\n\nsection {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 6rem;\n    color: black;\n    padding-top: 15rem;\n}\n\nh4 {\n    font-size: 2rem;\n    font-weight: 800;\n    color: gold;\n}\n\nh5 {\n    font-size: 2rem;\n    font-weight: 800;\n    color: gold;\n    text-align: center;\n    margin-bottom: 2rem;\n}\n\n\nh3 {\n    color: tomato;\n}\n\nh2 {\n    margin-left: -25rem;\n    margin-bottom: 2rem;\n    color: tomato;\n\n}\n\n.icons {\n    display: flex;\n    justify-content: center;\n    gap: 1.5rem;\n    position: fixed;\n    bottom: 0;\n    margin-bottom: 2rem;\n    padding: 1rem;\n    border-bottom: solid goldenrod 1px;\n}\n\nimg {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n}\n\nimg:hover {\n    box-shadow: 2px -2px 10px rgb(248, 215, 132);\n}\n\n.menu {\n    background-color: rgb(240, 255, 255);\n    height: 100%;\n    padding-top: 10rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    height: 80%;\n    width: 50%;\n    column-gap: 3rem;\n    margin-left: -25rem;\n}\n\n.container > * {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\narticle {\n    display: flex;\n    justify-content: space-between;\n    gap: 2rem;\n}\n\n#form-container {\n    height: 100%;\n    width: 100%;\n    background-color: azure;\n}\n\n#form {\n    background-color: rgb(135, 173, 173);\n    height: 100%;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding-top: 10rem;\n    background-image: linear-gradient(rgb(0,0,0, .4), rgb(0,0,0,.4)), url(./images/coffee-3120750_1280.jpg);\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    color: aliceblue;\n    background-color: rgb(0, 0, 0, .2);\n    padding: 2rem;\n}\n\ninput {\n    color:goldenrod;\n    border: solid azure 1px;\n    background-color: transparent;\n}\n\ninput:focus{\n    outline: none;\n    border: solid green 2px;\n}\n\ninput:invalid::after {\n    border: solid red 2px;\n}\n\ninput:valid {\n    border: solid green 3px;\n}\n\ninput[type=\"text\"], input[type=\"date\"], input[type=\"time\"], input[type=\"number\"]{\n    width: 20rem;\n    margin-left: 1rem;\n}\n\ninput[type=\"email\"] {\n    width: 100%;\n    color: aliceblue;\n} \n\nbutton[type=\"submit\"] {\n    background-color: tomato;\n    border: none;\n    color: azure;\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n    font-size: 2rem;\n    font-weight: 700;\n    border-radius: .4rem;\n}\n\n#radio {\n    align-self: center;\n}\n\n#radio > * {\n    margin: 1rem;\n}\n\nh1 {\n    color: tomato;\n    border-bottom: solid azure 1px;\n    text-align: center;\n}\n\n#contact-container {\n    height: 100%;\n    width: 100%;\n    background-color: rgb(240, 255, 255);\n}\n\n\n#contact {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 2rem;\n    padding-top: 10rem;\n    width: 100%;\n    height: 80%;\n    background-color: rgb(0,0,0,.8);\n    position: fixed;\n    bottom: 0;\n}\n\n\n#News {\n    display: flex;\n    flex-direction: column;\n    \n    gap: 1rem;\n    width: 100%;\n    padding-left: 5rem;\n}\n\n#News button {\n    background-color: tomato;\n    color: aliceblue;\n    text-align: center;\n    height: 30px;\n    width: 40px;\n    border: none;\n}\n\n#News input {\n    height: 30px;\n    border-color: rgb(240, 248, 255, .7);\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: rgba(246, 248, 250, 0.715);\n}\n\n#contact h4 {\n    color: tomato;\n    border-bottom: solid 1px aliceblue;\n    margin-bottom: 2rem;\n    text-align: center;\n}\n\n@media (max-width: 768px) {\n    nav {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 2rem;\n        background-color: rgb(240, 255, 255, .8);\n        padding-top: 2rem;\n        padding-bottom: 2rem;\n        top: 0;\n        width: 100%;\n    }\n    \n\n    main {\n        left: 0;\n        background-color: rgb(240, 255, 255, .5);\n        width: 100%;\n    }\n\n    .menu{\n        overflow-y: scroll;\n        padding-bottom: 2rem;\n    }\n\n    .container {\n        display: grid;\n        grid-template-columns: 1fr;\n        justify-content: center;\n        height: 100%;\n        width: 50%;\n        row-gap: 1rem;\n        margin-left: -5rem;\n    }\n\n\n    h2 {\n        margin-left: -5rem;\n    }\n\n    h5 {\n        font-size: 1.4rem;\n    }\n\n    #form-container {\n        height: 100%;\n        width: 100%;\n        background-color: azure;\n        margin-bottom: 0;\n    }\n\n    #form {\n        height: 100%;\n        width: 100%;\n    }\n\n    input[type=\"text\"], input[type=\"date\"], input[type=\"time\"], input[type=\"number\"]{\n        width: 20rem;\n        margin-left: 0;\n    }\n\n    \n    \n\n    #contact {\n        display: grid;\n        grid-template-columns: 1fr;\n        background-color: rgb(0,0,0,.8);\n        overflow-y: scroll;\n        padding-left: .5rem;\n        padding-right: .5rem;\n        padding-bottom: 1rem;\n        height: 90%;\n    }\n\n    #contact span {\n        display: block;\n    }\n\n    .info {\n        gap: .5rem;\n    }\n\n    #contact h4 {\n        font-size: 1rem;\n    }\n\n    #News {\n        padding-left: 1rem;\n    }\n\n    #News h1 {\n        font-size: 1rem;\n    }\n\n    #News button {\n        width: 30px;\n    }\n    #News input {\n        width: 60%;\n    }\n\n}\n\n\n\n"],"sourceRoot":""}]);
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
    h4.textContent = "Join Us and discover the true essence of Ethiopian cuisine.";
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

/***/ "./src/images/pizza-8128208_1280.jpg":
/*!*******************************************!*\
  !*** ./src/images/pizza-8128208_1280.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ac32fcebe1e34644673.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySUFBa0Q7QUFDOUYsNENBQTRDLDZJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLG1DQUFtQztBQUNqSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsbUNBQW1DO0FBQy9HOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUEsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sNEJBQTRC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QUFDQTtBQUNBLDZDQUE2QyxnREFBYTtBQUMxRCxNQUFNO0FBQ047QUFDQTtBQUNBLDZDQUE2Qyw4Q0FBSTtBQUNqRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBTztBQUNwRDtBQUNBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9zcmMvcmVzZXJ2YXRpb24uanMiLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZlbnRhbGUtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmVudGFsZS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mZW50YWxlLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BpenphLTgxMjgyMDhfMTI4MC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jb2ZmZWUtMzEyMDc1MF8xMjgwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsMCwwLCAuMDEpLCByZ2IoMCwwLDAsLjAxKSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYXBwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjgpO1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDU5JTtcbiAgICBib3gtc2hhZG93OiAxMHB4IC0xMHB4IDUwcHggI2U5ZTNlMztcbn1cblxuLmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiByZ2IoNzIsIDcwLCA3MCk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxpOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBnb2xkZW5yb2QgM3B4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDVweDtcbn1cblxuXG5tYWluIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmRlc2NyaXB0aW9uOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDk1LCAxMjgsIDExNyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjU1LCAyNTUsIC4zKTtcbn1cblxuXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZyZW07XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctdG9wOiAxNXJlbTtcbn1cblxuaDQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGNvbG9yOiBnb2xkO1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6IGdvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cblxuaDMge1xuICAgIGNvbG9yOiB0b21hdG87XG59XG5cbmgyIHtcbiAgICBtYXJnaW4tbGVmdDogLTI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgY29sb3I6IHRvbWF0bztcblxufVxuXG4uaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgZ29sZGVucm9kIDFweDtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pbWc6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDJweCAtMnB4IDEwcHggcmdiKDI0OCwgMjE1LCAxMzIpO1xufVxuXG4ubWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjU1LCAyNTUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogODAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgY29sdW1uLWdhcDogM3JlbTtcbiAgICBtYXJnaW4tbGVmdDogLTI1cmVtO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5hcnRpY2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDJyZW07XG59XG5cbiNmb3JtLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xufVxuXG4jZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMTczLCAxNzMpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMCwwLDAsIC40KSwgcmdiKDAsMCwwLC40KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMik7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuaW5wdXQge1xuICAgIGNvbG9yOmdvbGRlbnJvZDtcbiAgICBib3JkZXI6IHNvbGlkIGF6dXJlIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IHNvbGlkIGdyZWVuIDJweDtcbn1cblxuaW5wdXQ6aW52YWxpZDo6YWZ0ZXIge1xuICAgIGJvcmRlcjogc29saWQgcmVkIDJweDtcbn1cblxuaW5wdXQ6dmFsaWQge1xuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gM3B4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImRhdGVcIl0sIGlucHV0W3R5cGU9XCJ0aW1lXCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJde1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xufSBcblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IGF6dXJlO1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XG59XG5cbiNyYWRpbyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jcmFkaW8gPiAqIHtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbmgxIHtcbiAgICBjb2xvcjogdG9tYXRvO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGF6dXJlIDFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWN0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1KTtcbn1cblxuXG4jY29udGFjdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwuOCk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbn1cblxuXG4jTmV3cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIGdhcDogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG59XG5cbiNOZXdzIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiNOZXdzIGlucHV0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjQwLCAyNDgsIDI1NSwgLjcpO1xufVxuXG4uaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBjb2xvcjogcmdiYSgyNDYsIDI0OCwgMjUwLCAwLjcxNSk7XG59XG5cbiNjb250YWN0IGg0IHtcbiAgICBjb2xvcjogdG9tYXRvO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBhbGljZWJsdWU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG5hdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuOCk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG5cbiAgICBtYWluIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjU1LCAyNTUsIC41KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLm1lbnV7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICByb3ctZ2FwOiAxcmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XG4gICAgfVxuXG5cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXJlbTtcbiAgICB9XG5cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIH1cblxuICAgICNmb3JtLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgICNmb3JtIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImRhdGVcIl0sIGlucHV0W3R5cGU9XCJ0aW1lXCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJde1xuICAgICAgICB3aWR0aDogMjByZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIFxuICAgIFxuXG4gICAgI2NvbnRhY3Qge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLC44KTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cblxuICAgICNjb250YWN0IHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICAgIGdhcDogLjVyZW07XG4gICAgfVxuXG4gICAgI2NvbnRhY3QgaDQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgI05ld3Mge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgfVxuXG4gICAgI05ld3MgaDEge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgI05ld3MgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuICAgICNOZXdzIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG5cbn1cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDREQUE0RDtJQUM1RCwyR0FBd0c7SUFDeEcsMEJBQTBCO0lBQzFCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFT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Q3BCLG9CQUFvQjtRQUNwQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7SUFDZDs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigwLDAsMCwgLjAxKSwgcmdiKDAsMCwwLC4wMSkpLCB1cmwoLi9pbWFnZXMvcGl6emEtODEyODIwOF8xMjgwLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uYXBwIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSwgLjgpO1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgd2lkdGg6IDU5JTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAtMTBweCA1MHB4ICNlOWUzZTM7XFxufVxcblxcbi5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoNzIsIDcwLCA3MCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5saTpob3ZlciB7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGdvbGRlbnJvZCAzcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNXB4O1xcbn1cXG5cXG5cXG5tYWluIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZGVzY3JpcHRpb246aG92ZXIge1xcbiAgICBjb2xvcjogcmdiKDk1LCAxMjgsIDExNyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuMyk7XFxufVxcblxcblxcbnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDZyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZy10b3A6IDE1cmVtO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgY29sb3I6IGdvbGQ7XFxufVxcblxcbmg1IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogZ29sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5cXG5oMyB7XFxuICAgIGNvbG9yOiB0b21hdG87XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgY29sb3I6IHRvbWF0bztcXG5cXG59XFxuXFxuLmljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgZ29sZGVucm9kIDFweDtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5pbWc6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggLTJweCAxMHB4IHJnYigyNDgsIDIxNSwgMTMyKTtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNTUsIDI1NSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGNvbHVtbi1nYXA6IDNyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjVyZW07XFxufVxcblxcbi5jb250YWluZXIgPiAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmFydGljbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxufVxcblxcbiNmb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMTczLCAxNzMpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDAsMCwwLCAuNCksIHJnYigwLDAsMCwuNCkpLCB1cmwoLi9pbWFnZXMvY29mZmVlLTMxMjA3NTBfMTI4MC5qcGcpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjIpO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGNvbG9yOmdvbGRlbnJvZDtcXG4gICAgYm9yZGVyOiBzb2xpZCBhenVyZSAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCBncmVlbiAycHg7XFxufVxcblxcbmlucHV0OmludmFsaWQ6OmFmdGVyIHtcXG4gICAgYm9yZGVyOiBzb2xpZCByZWQgMnB4O1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlcjogc29saWQgZ3JlZW4gM3B4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSwgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdLCBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXXtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbn0gXFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBhenVyZTtcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjRyZW07XFxufVxcblxcbiNyYWRpbyB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3JhZGlvID4gKiB7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogdG9tYXRvO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBhenVyZSAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjU1LCAyNTUpO1xcbn1cXG5cXG5cXG4jY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLC44KTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxufVxcblxcblxcbiNOZXdzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXG59XFxuXFxuI05ld3MgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI05ld3MgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI0MCwgMjQ4LCAyNTUsIC43KTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGNvbG9yOiByZ2JhKDI0NiwgMjQ4LCAyNTAsIDAuNzE1KTtcXG59XFxuXFxuI2NvbnRhY3QgaDQge1xcbiAgICBjb2xvcjogdG9tYXRvO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYWxpY2VibHVlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICBuYXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuOCk7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI1NSwgMjU1LCAuNSk7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAubWVudXtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgcm93LWdhcDogMXJlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXJlbTtcXG4gICAgfVxcblxcblxcbiAgICBoMiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTVyZW07XFxuICAgIH1cXG5cXG4gICAgaDUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIH1cXG5cXG4gICAgI2Zvcm0tY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgICNmb3JtIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLCBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0sIGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJde1xcbiAgICAgICAgd2lkdGg6IDIwcmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgXFxuICAgIFxcblxcbiAgICAjY29udGFjdCB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsLjgpO1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgfVxcblxcbiAgICAjY29udGFjdCBzcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5pbmZvIHtcXG4gICAgICAgIGdhcDogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgI2NvbnRhY3QgaDQge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNOZXdzIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAjTmV3cyBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgI05ld3MgYnV0dG9uIHtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuICAgICNOZXdzIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSBgPGRpdiBpZCA9IFwiY29udGFjdC1jb250YWluZXJcIj5cblxuPGRpdiBpZCA9IFwiY29udGFjdFwiPlxuICAgIDxkaXYgY2xhc3MgPSBcImluZm9cIj5cbiAgICA8aDQ+QWJvdXQgVXM8L2g0PlxuICAgIDxwPldlIHNlcnZlIGRlbGljaW91cyBFdGhpb3BpYW4gYW5kIGludGVybmF0aW9uYWwgPC9icj5cbiAgICBjdWlzaW5lIG1hZGUgd2l0aCBmcmVzaCxsb2NhbGx5LXNvdXJjZWQgaW5ncmVkaWVudHMuPC9icj5cbiAgICBPdXIgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSBpcyBwZXJmZWN0IGZvciBhbnkgb2NjYXNpb24sIDwvYnI+XG4gICAgYW5kIG91ciBjYXJlZnVsbHkgY3VyYXRlZCBzZWxlY3Rpb24gb2Ygd2luZXMgYW5kIDwvYnI+XG4gICAgY29ja3RhaWxzIHdpbGwgZW5oYW5jZSB5b3VyIGRpbmluZyBleHBlcmllbmNlLiA8L2JyPlxuICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICBjbGFzcyA9IFwiaW5mb1wiPlxuICAgIDxoND5PcGVuIEhvdXJzPC9oND5cbiAgICA8cD5Nb25kYXktRnJpZGF5IDxzcGFuPjg6MDAgYW0gLSA4OjAwIHBtPC9zcGFuPjwvcD5cbiAgICA8cD5TYXRhcmRheS1TdW5kYXkgPHNwYW4+ODowMCBhbSAtIDY6MDAgcG08L3NwYW4+PC9wPlxuICAgIDxwPkFsd2F5cyBDbG9zZSBPbiBIb2xpZGF5czwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICBjbGFzcyA9IFwiaW5mb1wiPlxuICAgIDxoND5Db250YWN0IFVzPC9oND5cbiAgICA8cD5TaWRpc3QgS2lsbywgQXJhZGEsIDwvcD5cbiAgICA8cD5BZGRpcyBBYmFiYSwgRXRoaW9waWE8L3A+XG4gICAgPHA+UC5PLkI6IDEwMzk4NzM8L3A+XG4gICAgPHA+UGhvbmUgTnVtYmVyOiArMjUxMTExMTExMTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgaWQgPSBcIk5ld3NcIj5cbiAgICA8aDE+R2V0IE5ld3MgJiBPZmZlcnM8L2gxPlxuICAgIDxsYWJlbD48aW5wdXQgdHlwZVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIj48YnV0dG9uPj48L2J1dHRvbj48bGFiZWw+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvZGl2PmA7IiwiaW1wb3J0IFwiLi8uL3N0eWxlLmNzc1wiXG5pbXBvcnQgZmJJY29uIGZyb20gXCIuL2ljb25zL2ZhY2Vib29rXzQ0OTQ0NzkucG5nXCJcbmltcG9ydCBpZ0ljb24gZnJvbSBcIi4vaWNvbnMvaW5zdGFncmFtXzIxMTE0NjMucG5nXCJcbmltcG9ydCB0d2l0dGVySWNvbiBmcm9tIFwiLi9pY29ucy90d2l0dGVyXzQ0OTQ0NzcucG5nXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgXG4gICBsZXQgaXRlbXMgPSBbJ0hvbWUnLCAnTWVudScsICdSZXNlcnZhdGlvbicsICdDb250YWN0J107XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIGFycmF5IGFuZCBjcmVhdGUgYW4gbGkgZWxlbWVudCBmb3IgZWFjaCBpdGVtXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImxpXCIpXG4gICAgICAgIGxpLmlkID0gaXRlbVxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgcmVzdE5hbWUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gRmVudGFsZSBSZXN0YXVyYW50XCI7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIldlIHNlcnZlIGRlbGljaW91cyBFdGhpb3BpYW4gYW5kIGludGVybmF0aW9uYWwgY3Vpc2luZSBtYWRlIHdpdGggZnJlc2gsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50c2lzLlwiO1xuICAgIGg0LnRleHRDb250ZW50ID0gXCJKb2luIFVzIGFuZCBkaXNjb3ZlciB0aGUgdHJ1ZSBlc3NlbmNlIG9mIEV0aGlvcGlhbiBjdWlzaW5lLlwiO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKVxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocmVzdE5hbWUpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDQpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKVxuXG5cbiAgICBsZXQgZmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxldCBpZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbGV0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgZmIuc3JjID0gZmJJY29uO1xuICAgIGlnLnNyYyA9IGlnSWNvbjtcbiAgICB0d2l0dGVyLnNyYyA9IHR3aXR0ZXJJY29uO1xuXG4gICAgaWNvbnMuYXBwZW5kQ2hpbGQoZmIpO1xuICAgIGljb25zLmFwcGVuZENoaWxkKGlnKTtcbiAgICBpY29ucy5hcHBlbmRDaGlsZCh0d2l0dGVyKTtcbiAgICBpY29ucy5jbGFzc0xpc3QuYWRkKCdpY29ucycpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGljb25zKVxuXG4gICAgcmV0dXJuIHsgbmF2LCBtYWlufVxuXG59XG5cbiIsIlxuXG5leHBvcnQgY29uc3QgbWVudUNvbXBvbmVudCA9IGA8ZGl2IGNsYXNzID0gXCJtZW51XCI+XG5cbjxoMj5PdXIgTWVudTwvaDI+XG5cbjxkaXYgY2xhc3MgPSBcImNvbnRhaW5lclwiPlxuXG48ZGl2PlxuPGg1Pk1BSU4gQ09VUlNFUzwvaDU+XG48YXJ0aWNsZT5cbjxwPkdyaWxsZWQgRmlzaCBBbmQgUG90YXRvZXM8L3A+XG48cD4kIDIwLjAwPC9wPlxuPC9hcnRpY2xlPlxuPGFydGljbGU+XG48cD5DaGlja2VuIEFuZCBSaWNlPC9wPlxuPHA+JCAyMC4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+VHVya3kgQW5kIEhhbSBQaWU8L3A+XG48cD4kIDIwLjAwPC9wPlxuPC9hcnRpY2xlPlxuPC9kaXY+XG5cbjxkaXY+XG48aDU+U0FMQURTPC9oNT5cbjxhcnRpY2xlPlxuPHA+R3VhY2Ftb2xlIFNhbGFkPC9wPlxuPHA+JCAxMC4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+Q2hpY2tlbiBTYWxhZDwvcD5cbjxwPiQgMTAuMDA8L3A+XG48L2FydGljbGU+XG48YXJ0aWNsZT5cbjxwPkNvYmIgU2FsYWQ8L3A+XG48cD4kIDEwLjAwPC9wPlxuPC9hcnRpY2xlPlxuPC9kaXY+XG5cbjxkaXY+XG48aDU+REVTU0VSVDwvaDU+XG48YXJ0aWNsZT5cbjxwPkZydWl0IEFuZCBDcmVhbTwvcD5cbjxwPiQgNS4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+QXBwbGUgUGllPC9wPlxuPHA+JCA1LjAwPC9wPlxuPC9hcnRpY2xlPlxuPGFydGljbGU+XG48cD5JY2UgY3JlYW08L3A+XG48cD4kIDUuMDA8L3A+XG48L2FydGljbGU+XG48L2Rpdj5cblxuPGRpdj5cbjxoNT5EUklOS1M8L2g1PlxuPGFydGljbGU+XG48cD5NaW5lcmFsIFdhdGVyPC9wPlxuPHA+JCAyLjAwPC9wPlxuPC9hcnRpY2xlPlxuPGFydGljbGU+XG48cD5GcmVzaCBGcnVpdCBKdWljZTwvcD5cbjxwPiQgMi4wMDwvcD5cbjwvYXJ0aWNsZT5cbjxhcnRpY2xlPlxuPHA+V2luZXM8L3A+XG48cD4kIDIuMDA8L3A+XG48L2FydGljbGU+XG48L2Rpdj5cblxuPC9kaXY+XG5cbjwvZGl2PmAiLCJleHBvcnQgY29uc3QgZm9ybSA9IGA8ZGl2IGlkID0gXCJmb3JtLWNvbnRhaW5lclwiPlxuPHNlY3Rpb24gaWQgPSBcImZvcm1cIj5cblxuXG48aDE+Qm9vayBhIFRhYmxlPC9oMT5cblxuPGZvcm0+XG4gICAgXG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImJvb2tpbmdfZGF0ZVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJib29raW5nX2RhdGVcIiBuYW1lPVwiYm9va2luZ19kYXRlXCIgcmVxdWlyZWQ+ICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImJvb2tpbmdfdGltZVwiPlRpbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgaWQ9XCJib29raW5nX3RpbWVcIiBuYW1lPVwiYm9va2luZ190aW1lXCIgcmVxdWlyZWQ+ICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInBlb3BsZVwiPkd1ZXN0cyA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGVvcGxlXCIgbWluPVwiMVwiIG1heD1cIjhcIiBuYW1lPVwicGVvcGxlXCIgcmVxdWlyZWQ+ICAgICAgICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkID0gXCJyYWRpb1wiPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhZ3JlZVwiIG5hbWU9XCJwbGFjZVwiIHJlcXVpcmVkIGNoZWNrZWQ+IFxuICAgICAgICAgICAgSW5kb29yXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImFncmVlXCIgbmFtZT1cInBsYWNlXCIgcmVxdWlyZWQ+IFxuICAgICAgICAgICAgT3V0ZG9vclxuICAgICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsX2FkZHJlc3NcIiBuYW1lPVwiZW1haWxfYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIHJlcXVpcmVkPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkJvb2sgTm93PC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9zZWN0aW9uPlxuPC9kaXY+YDtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCByZW5kZXJIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBmb3JtIH0gZnJvbSBcIi4vcmVzZXJ2YXRpb25cIjtcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hcHAuY2xhc3NMaXN0LmFkZChcImFwcFwiKTtcblxuZnVuY3Rpb24gcmVuZGVybmF2QmFyKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVySG9tZSgpLm5hdik7XG5cbn1cblxuZnVuY3Rpb24gbWFpbkNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBhcHAuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XG59XG5cbnJlbmRlcm5hdkJhcigpO1xubWFpbkNvbXBvbmVudChyZW5kZXJIb21lKCkubWFpbik7XG5cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIilcblxubmF2QmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJIb21lXCIpIHtcbiAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgbWFpbkNvbXBvbmVudChyZW5kZXJIb21lKCkubWFpbik7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJNZW51XCIpIHtcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBhcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbWVudUNvbXBvbmVudCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJSZXNlcnZhdGlvblwiKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwXCIpO1xuICAgICAgICBhcHAuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYXBwLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGZvcm0pO1xuICAgIH1lbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gXCJDb250YWN0XCIpIHtcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBcIik7XG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBhcHAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgY29udGFjdCk7XG4gICAgICB9XG4gIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9