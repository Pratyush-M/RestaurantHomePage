"use strict";
(self["webpackChunkrestauranthomepage"] = self["webpackChunkrestauranthomepage"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addContactDiv": () => (/* binding */ addContactDiv)
/* harmony export */ });
function addContactDiv () {
    let contactDiv = document.createElement('div')
    document.body.appendChild(contactDiv)
    contactDiv.setAttribute('id', 'contactDiv')
    
    let contactHeader = document.createElement('h3')
    contactDiv.appendChild(contactHeader)
    contactHeader.textContent = 'Contact Us:'

    for(let i=0; i<3; i++) {
    let contactPara = document.createElement('p')
    contactDiv.appendChild(contactPara)
    contactPara.setAttribute('name', 'para')
    }

    let paraSelector = document.getElementsByName('para')
    paraSelector[0].textContent = 'Phone - +91 9987676339'
    paraSelector[1].textContent = 'Email - delecticacakes@email.com'
    paraSelector[2].textContent = 'Address - Delectica Cakes \n             Shop No. 8 \n             Padmavati Apartment \n             Borivali(W) \n             Mumbai \n            400092'

    
    
    

}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudGhvbWVwYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkQ29udGFjdERpdiAoKSB7XG4gICAgbGV0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdERpdilcbiAgICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdERpdicpXG4gICAgXG4gICAgbGV0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKVxuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVczonXG5cbiAgICBmb3IobGV0IGk9MDsgaTwzOyBpKyspIHtcbiAgICBsZXQgY29udGFjdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RQYXJhKVxuICAgIGNvbnRhY3RQYXJhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwYXJhJylcbiAgICB9XG5cbiAgICBsZXQgcGFyYVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3BhcmEnKVxuICAgIHBhcmFTZWxlY3RvclswXS50ZXh0Q29udGVudCA9ICdQaG9uZSAtICs5MSA5OTg3Njc2MzM5J1xuICAgIHBhcmFTZWxlY3RvclsxXS50ZXh0Q29udGVudCA9ICdFbWFpbCAtIGRlbGVjdGljYWNha2VzQGVtYWlsLmNvbSdcbiAgICBwYXJhU2VsZWN0b3JbMl0udGV4dENvbnRlbnQgPSAnQWRkcmVzcyAtIERlbGVjdGljYSBDYWtlcyBcXG4gICAgICAgICAgICAgU2hvcCBOby4gOCBcXG4gICAgICAgICAgICAgUGFkbWF2YXRpIEFwYXJ0bWVudCBcXG4gICAgICAgICAgICAgQm9yaXZhbGkoVykgXFxuICAgICAgICAgICAgIE11bWJhaSBcXG4gICAgICAgICAgICA0MDAwOTInXG5cbiAgICBcbiAgICBcbiAgICBcblxufVxuXG5cbmV4cG9ydCB7YWRkQ29udGFjdERpdn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=