"use strict";
(self["webpackChunkrestauranthomepage"] = self["webpackChunkrestauranthomepage"] || []).push([["navbar"],{

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNav": () => (/* binding */ addNav),
/* harmony export */   "addHeading": () => (/* binding */ addHeading)
/* harmony export */ });

function addNav() {
    let nav = document.createElement('nav')
    document.body.appendChild(nav);
    nav.classList.add('navStyle');
    let navNames = ['Home', 'Menu', 'Contact Us' ]
    for(let i = 0; i <3; i++) {
    let span = document.createElement('span')
    span.classList.add('spanStyles')
    nav.appendChild(span)
    span.textContent = navNames[i]
    }
}

function addHeading () {
    let header = document.createElement('h1');
    let mainDiv = document.getElementById('content')
    header.textContent = 'Delectica';
    header.classList.add('heading')
    document.body.appendChild(header)
    
}

function navEventListener () {
    let navNodes = document.getElementsByTagName('nav')[0].childNodes
    console.log(navNodes[1].textContent)
}
 



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/navbar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRob21lcGFnZS8uL3NyYy9uYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBhZGROYXYoKSB7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXYpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZTdHlsZScpO1xuICAgIGxldCBuYXZOYW1lcyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QgVXMnIF1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwzOyBpKyspIHtcbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnc3BhblN0eWxlcycpXG4gICAgbmF2LmFwcGVuZENoaWxkKHNwYW4pXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG5hdk5hbWVzW2ldXG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRIZWFkaW5nICgpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnRGVsZWN0aWNhJztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgXG59XG5cbmZ1bmN0aW9uIG5hdkV2ZW50TGlzdGVuZXIgKCkge1xuICAgIGxldCBuYXZOb2RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCduYXYnKVswXS5jaGlsZE5vZGVzXG4gICAgY29uc29sZS5sb2cobmF2Tm9kZXNbMV0udGV4dENvbnRlbnQpXG59XG4gXG5cbmV4cG9ydCB7YWRkTmF2LCBhZGRIZWFkaW5nfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==