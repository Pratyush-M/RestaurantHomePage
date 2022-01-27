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

    let line = document.createElement('hr')
    document.body.appendChild(line)
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE1BQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudGhvbWVwYWdlLy4vc3JjL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGFkZE5hdigpIHtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdlN0eWxlJyk7XG4gICAgbGV0IG5hdk5hbWVzID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCBVcycgXVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPDM7IGkrKykge1xuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdzcGFuU3R5bGVzJylcbiAgICBuYXYuYXBwZW5kQ2hpbGQoc3BhbilcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbmF2TmFtZXNbaV1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZEhlYWRpbmcgKCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdEZWxlY3RpY2EnO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluZSlcbiAgICBcbn1cblxuZnVuY3Rpb24gbmF2RXZlbnRMaXN0ZW5lciAoKSB7XG4gICAgbGV0IG5hdk5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ25hdicpWzBdLmNoaWxkTm9kZXNcbiAgICBjb25zb2xlLmxvZyhuYXZOb2Rlc1sxXS50ZXh0Q29udGVudClcbn1cbiBcblxuZXhwb3J0IHthZGROYXYsIGFkZEhlYWRpbmd9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9