/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadContact(){
    const mainContent = document.getElementById('main');
    mainContent.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Find us at:'
    mainContent.appendChild(h1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome(){   
    const main = document.getElementById('main');
    main.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Bienvenidos a La Nogaderia!';
    main.appendChild(h1);
    const orderNow = document.createElement('a');
    orderNow.href = '#menu';
    orderNow.textContent = 'Order now!';
    main.appendChild(orderNow);
    const para = document.createElement('p');
    para.id = 'description';
    para.textContent = "Best Chili Nogadas in town. Can't miss them!"
    main.appendChild(para);
    const img = document.createElement('img');
    img.alt = 'nogada';
    img.src = '../imgs/Chile_nogada.png';
    main.appendChild(img);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/initialPage.js":
/*!****************************!*\
  !*** ./src/initialPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader(){
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    header.appendChild(nav);
    const linkList = document.createElement('ul');
    nav.appendChild(linkList);
    const homeLink = document.createElement('li');
    const menuLink = document.createElement('li');
    const contactLink = document.createElement('li');
    homeLink.id = 'home';
    menuLink.id = 'menu';
    contactLink.id = 'contact';
    homeLink.innerHTML = '<a href="#home">Home</a>';
    menuLink.innerHTML = '<a href="#menu">Menu</a>';
    contactLink.innerHTML = '<a href="#contacus">Contact us</a>';
    linkList.append(homeLink, menuLink, contactLink);

    return header;
}

function createMainContent(){
    const main = document.createElement('div');
    main.id = 'main';
    return main;
}

function pageLoad(){
    const contentDiv = document.getElementById('content');
    const mainContent = createMainContent();
    const header = createHeader();
    contentDiv.appendChild(header);
    contentDiv.appendChild(mainContent);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function loadMenu(){
    const mainContent = document.getElementById('main');
    mainContent.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    mainContent.appendChild(h1);

    const menuItems =
    [      
        { title: 'Nogada de Puebla',
          price: 180
        },
        { title: 'Nogada de Temporada',
          price: 220
        },
        {
          title: 'Noga Con Huevo',
          price: 125 
        },
        {
            title: 'Horchata',
            price: 55
        }
    ]
    menuItems.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item.title + " " + item.price;
        mainContent.appendChild(p);
    })

    console.log('Menu!');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPage.js */ "./src/initialPage.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





startPage();
navigationBar();

function startPage(){
(0,_initialPage_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();
}

function navigationBar(){
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');


home.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_1__.default);
menu.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_2__.default);
contact.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_3__.default);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDUjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDcEJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ2xDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDbEN2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1A7QUFDQTtBQUNNOztBQUV2QztBQUNBOztBQUVBO0FBQ0Esd0RBQVE7QUFDUixpREFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwrQkFBK0IsNkNBQVE7QUFDdkMsK0JBQStCLDZDQUFRO0FBQ3ZDLGtDQUFrQyxnREFBVztBQUM3QyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnRmluZCB1cyBhdDonXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJmdW5jdGlvbiBsb2FkSG9tZSgpeyAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnQmllbnZlbmlkb3MgYSBMYSBOb2dhZGVyaWEhJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGgxKTtcbiAgICBjb25zdCBvcmRlck5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBvcmRlck5vdy5ocmVmID0gJyNtZW51JztcbiAgICBvcmRlck5vdy50ZXh0Q29udGVudCA9ICdPcmRlciBub3chJztcbiAgICBtYWluLmFwcGVuZENoaWxkKG9yZGVyTm93KTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIkJlc3QgQ2hpbGkgTm9nYWRhcyBpbiB0b3duLiBDYW4ndCBtaXNzIHRoZW0hXCJcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5hbHQgPSAnbm9nYWRhJztcbiAgICBpbWcuc3JjID0gJy4uL2ltZ3MvQ2hpbGVfbm9nYWRhLnBuZyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb25zdCBsaW5rTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtMaXN0KTtcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lTGluay5pZCA9ICdob21lJztcbiAgICBtZW51TGluay5pZCA9ICdtZW51JztcbiAgICBjb250YWN0TGluay5pZCA9ICdjb250YWN0JztcbiAgICBob21lTGluay5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNob21lXCI+SG9tZTwvYT4nO1xuICAgIG1lbnVMaW5rLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI21lbnVcIj5NZW51PC9hPic7XG4gICAgY29udGFjdExpbmsuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjY29udGFjdXNcIj5Db250YWN0IHVzPC9hPic7XG4gICAgbGlua0xpc3QuYXBwZW5kKGhvbWVMaW5rLCBtZW51TGluaywgY29udGFjdExpbmspO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gcGFnZUxvYWQoKXtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGNyZWF0ZU1haW5Db250ZW50KCk7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyIsIlxuZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID1cbiAgICBbICAgICAgXG4gICAgICAgIHsgdGl0bGU6ICdOb2dhZGEgZGUgUHVlYmxhJyxcbiAgICAgICAgICBwcmljZTogMTgwXG4gICAgICAgIH0sXG4gICAgICAgIHsgdGl0bGU6ICdOb2dhZGEgZGUgVGVtcG9yYWRhJyxcbiAgICAgICAgICBwcmljZTogMjIwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ05vZ2EgQ29uIEh1ZXZvJyxcbiAgICAgICAgICBwcmljZTogMTI1IFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvcmNoYXRhJyxcbiAgICAgICAgICAgIHByaWNlOiA1NVxuICAgICAgICB9XG4gICAgXVxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gaXRlbS50aXRsZSArIFwiIFwiICsgaXRlbS5wcmljZTtcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocCk7XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKCdNZW51IScpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL2luaXRpYWxQYWdlLmpzJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuc3RhcnRQYWdlKCk7XG5uYXZpZ2F0aW9uQmFyKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0UGFnZSgpe1xucGFnZUxvYWQoKTtcbmxvYWRIb21lKCk7XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRpb25CYXIoKXtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcblxuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdCk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==