"use strict";
(self["webpackChunkrestauranthomepage"] = self["webpackChunkrestauranthomepage"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuDiv": () => (/* binding */ addMenuDiv)
/* harmony export */ });
/* harmony import */ var _Tulipiny_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tulipiny.jpg */ "./src/Tulipiny.jpg");
/* harmony import */ var _Berrystraw_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Berrystraw.jpg */ "./src/Berrystraw.jpg");
/* harmony import */ var _Catalyctic_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Catalyctic.jpg */ "./src/Catalyctic.jpg");
/* harmony import */ var _Caramello_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Caramello.jpg */ "./src/Caramello.jpg");






function addMenuDiv () {

    let mainDiv = document.createElement('div')
    document.body.appendChild(mainDiv)
    mainDiv.setAttribute('id', 'mainDiv')

    let menuHeader = document.createElement('h3')
    mainDiv.appendChild(menuHeader)
    menuHeader.textContent = "Menu"

    let menuDiv = document.createElement('div')
    document.body.appendChild(menuDiv)
    menuDiv.setAttribute('id', 'menuDiv')
    

    

    for (let i=0; i<4; i++) {
        let cakeSpan = document.createElement('span')
        menuDiv.appendChild(cakeSpan)
        cakeSpan.setAttribute('name', 'cake')
    }

    let chooseCakes = document.getElementsByName('cake')

    chooseCakes[0].textContent = 'Tulipiny - Rs. 1000' 
    let myTulipiny = new Image();
    myTulipiny.src = _Tulipiny_jpg__WEBPACK_IMPORTED_MODULE_0__;
    chooseCakes[0].appendChild(myTulipiny)


    chooseCakes[1].textContent = 'Berrystraw - Rs. 700'
    let myBerrystraw = new Image();
    myBerrystraw.src = _Berrystraw_jpg__WEBPACK_IMPORTED_MODULE_1__;
    chooseCakes[1].appendChild(myBerrystraw);


    chooseCakes[2].textContent = 'Catalycitc - Rs. 900'
    let myCatalyctic = new Image();
    myCatalyctic.src = _Catalyctic_jpg__WEBPACK_IMPORTED_MODULE_2__;
    chooseCakes[2].appendChild(myCatalyctic);


    chooseCakes[3].textContent = 'Caramello - Rs. 950'
    let myCaramello = new Image();
    myCaramello.src = _Caramello_jpg__WEBPACK_IMPORTED_MODULE_3__;
    chooseCakes[3].appendChild(myCaramello);

}



/***/ }),

/***/ "./src/Berrystraw.jpg":
/*!****************************!*\
  !*** ./src/Berrystraw.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47867610fc00702f45e5.jpg";

/***/ }),

/***/ "./src/Caramello.jpg":
/*!***************************!*\
  !*** ./src/Caramello.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "340c6de34c2d6e72d02e.jpg";

/***/ }),

/***/ "./src/Catalyctic.jpg":
/*!****************************!*\
  !*** ./src/Catalyctic.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17794ce64f79dd2835fe.jpg";

/***/ }),

/***/ "./src/Tulipiny.jpg":
/*!**************************!*\
  !*** ./src/Tulipiny.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5698de469989e58a30c.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDSTtBQUNBO0FBQ0Y7OztBQUd2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixLQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQVE7QUFDN0I7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQVU7QUFDakM7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUIsNENBQVU7QUFDakM7OztBQUdBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQVM7QUFDL0I7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50aG9tZXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHVsaXBpbnkgZnJvbSAnLi9UdWxpcGlueS5qcGcnXG5pbXBvcnQgQmVycnlzdHJhdyBmcm9tICcuL0JlcnJ5c3RyYXcuanBnJ1xuaW1wb3J0IENhdGFseWN0aWMgZnJvbSAnLi9DYXRhbHljdGljLmpwZydcbmltcG9ydCBDYXJhbWVsbG8gZnJvbSAnLi9DYXJhbWVsbG8uanBnJ1xuXG5cbmZ1bmN0aW9uIGFkZE1lbnVEaXYgKCkge1xuXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkRpdicpXG5cbiAgICBsZXQgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpXG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiXG5cbiAgICBsZXQgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51RGl2KVxuICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51RGl2JylcbiAgICBcblxuICAgIFxuXG4gICAgZm9yIChsZXQgaT0wOyBpPDQ7IGkrKykge1xuICAgICAgICBsZXQgY2FrZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChjYWtlU3BhbilcbiAgICAgICAgY2FrZVNwYW4uc2V0QXR0cmlidXRlKCduYW1lJywgJ2Nha2UnKVxuICAgIH1cblxuICAgIGxldCBjaG9vc2VDYWtlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjYWtlJylcblxuICAgIGNob29zZUNha2VzWzBdLnRleHRDb250ZW50ID0gJ1R1bGlwaW55IC0gUnMuIDEwMDAnIFxuICAgIGxldCBteVR1bGlwaW55ID0gbmV3IEltYWdlKCk7XG4gICAgbXlUdWxpcGlueS5zcmMgPSBUdWxpcGlueTtcbiAgICBjaG9vc2VDYWtlc1swXS5hcHBlbmRDaGlsZChteVR1bGlwaW55KVxuXG5cbiAgICBjaG9vc2VDYWtlc1sxXS50ZXh0Q29udGVudCA9ICdCZXJyeXN0cmF3IC0gUnMuIDcwMCdcbiAgICBsZXQgbXlCZXJyeXN0cmF3ID0gbmV3IEltYWdlKCk7XG4gICAgbXlCZXJyeXN0cmF3LnNyYyA9IEJlcnJ5c3RyYXc7XG4gICAgY2hvb3NlQ2FrZXNbMV0uYXBwZW5kQ2hpbGQobXlCZXJyeXN0cmF3KTtcblxuXG4gICAgY2hvb3NlQ2FrZXNbMl0udGV4dENvbnRlbnQgPSAnQ2F0YWx5Y2l0YyAtIFJzLiA5MDAnXG4gICAgbGV0IG15Q2F0YWx5Y3RpYyA9IG5ldyBJbWFnZSgpO1xuICAgIG15Q2F0YWx5Y3RpYy5zcmMgPSBDYXRhbHljdGljO1xuICAgIGNob29zZUNha2VzWzJdLmFwcGVuZENoaWxkKG15Q2F0YWx5Y3RpYyk7XG5cblxuICAgIGNob29zZUNha2VzWzNdLnRleHRDb250ZW50ID0gJ0NhcmFtZWxsbyAtIFJzLiA5NTAnXG4gICAgbGV0IG15Q2FyYW1lbGxvID0gbmV3IEltYWdlKCk7XG4gICAgbXlDYXJhbWVsbG8uc3JjID0gQ2FyYW1lbGxvO1xuICAgIGNob29zZUNha2VzWzNdLmFwcGVuZENoaWxkKG15Q2FyYW1lbGxvKTtcblxufVxuXG5leHBvcnR7YWRkTWVudURpdn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=