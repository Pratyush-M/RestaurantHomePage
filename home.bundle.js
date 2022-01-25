"use strict";
(self["webpackChunkrestauranthomepage"] = self["webpackChunkrestauranthomepage"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHeading": () => (/* binding */ addHeading),
/* harmony export */   "addPara": () => (/* binding */ addPara),
/* harmony export */   "addDiv": () => (/* binding */ addDiv)
/* harmony export */ });


function addDiv() {
let newDiv = document.createElement('div');
newDiv.setAttribute('id', 'content');
document.body.appendChild(newDiv);
}



function addHeading () {
    let header = document.createElement('h1');
    let mainDiv = document.getElementById('content')
    header.textContent = 'Delectica';
    header.classList.add('heading')
    return mainDiv.appendChild(header)
    
}

function addPara() {
let mainDiv = document.getElementById('content')
let para = document.createElement('p')
para.textContent = 'At Delectica we prepare gourmet cakes with the finest ingredients.';
mainDiv.appendChild(para)
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50aG9tZXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZnVuY3Rpb24gYWRkRGl2KCkge1xubGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmV3RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdEaXYpO1xufVxuXG5cblxuZnVuY3Rpb24gYWRkSGVhZGluZyAoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0RlbGVjdGljYSc7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKVxuICAgIHJldHVybiBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBcbn1cblxuZnVuY3Rpb24gYWRkUGFyYSgpIHtcbmxldCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxubGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnBhcmEudGV4dENvbnRlbnQgPSAnQXQgRGVsZWN0aWNhIHdlIHByZXBhcmUgZ291cm1ldCBjYWtlcyB3aXRoIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMuJztcbm1haW5EaXYuYXBwZW5kQ2hpbGQocGFyYSlcbn1cblxuZXhwb3J0IHthZGRIZWFkaW5nLCBhZGRQYXJhLCBhZGREaXZ9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9