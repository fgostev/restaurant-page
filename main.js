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
    const img = document.createElement('img');
    img.alt = 'arcos';
    img.src = '../imgs/queretaro.jpeg';
    mainContent.appendChild(img);
    const contact = document.createElement('p');

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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");


function loadHome(){   
    const main = document.getElementById('main');
    main.textContent = '';
    const h1 = document.createElement('h1');
    h1.textContent = 'La Nogaderia!';
    main.appendChild(h1);
    const hr = document.createElement('hr');
    main.appendChild(hr);
    const para = document.createElement('p');
    para.id = 'description';
    para.textContent = "Best Chili Nogadas in town. Can't miss them!"
    main.appendChild(para);
    const orderNow = document.createElement('a');
    orderNow.id = 'orderNow';
    orderNow.textContent = 'Order Now';
    orderNow.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_0__.default)
    main.appendChild(orderNow);

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
          description: 'Nogada from the birth place of the dish',
          price: '180 MXN'
        },
        { title: 'Nogada de Temporada',
          description: 'Seasonal food for the holiday',
          price: '220 MXN'
        },
        {
          title: 'Noga Con Huevo',
          description: 'Traditional nogada with an egg',
          price: '125 MXN'
        },
        {
            title: 'Horchata',
            description:'Traditional rice made drink',
            price: '25 MXN'
        }
    ]
    menuItems.forEach(item => {
        const title = document.createElement('p');
        const description = document.createElement('p');
        const price = document.createElement('p');
        title.textContent = item.title
        title.classList = 'item';
        description.textContent = item.description;
        description.classList = 'description';
        price.textContent = item.price
        price.classList = 'price';
        mainContent.appendChild(title);
        mainContent.appendChild(description);
        mainContent.appendChild(price);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDZE87O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw2Q0FBUTtBQUMvQzs7QUFFQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3RCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNsQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDL0N2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1A7QUFDQTtBQUNNOztBQUV2QztBQUNBOztBQUVBO0FBQ0Esd0RBQVE7QUFDUixpREFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwrQkFBK0IsNkNBQVE7QUFDdkMsK0JBQStCLDZDQUFRO0FBQ3ZDLGtDQUFrQyxnREFBVztBQUM3QyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnRmluZCB1cyBhdDonXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5hbHQgPSAnYXJjb3MnO1xuICAgIGltZy5zcmMgPSAnLi4vaW1ncy9xdWVyZXRhcm8uanBlZyc7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpeyAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTGEgTm9nYWRlcmlhISc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoMSk7XG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaHIpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiQmVzdCBDaGlsaSBOb2dhZGFzIGluIHRvd24uIENhbid0IG1pc3MgdGhlbSFcIlxuICAgIG1haW4uYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgY29uc3Qgb3JkZXJOb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgb3JkZXJOb3cuaWQgPSAnb3JkZXJOb3cnO1xuICAgIG9yZGVyTm93LnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XG4gICAgb3JkZXJOb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG9yZGVyTm93KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb25zdCBsaW5rTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGxpbmtMaXN0KTtcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lTGluay5pZCA9ICdob21lJztcbiAgICBtZW51TGluay5pZCA9ICdtZW51JztcbiAgICBjb250YWN0TGluay5pZCA9ICdjb250YWN0JztcbiAgICBob21lTGluay5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNob21lXCI+SG9tZTwvYT4nO1xuICAgIG1lbnVMaW5rLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI21lbnVcIj5NZW51PC9hPic7XG4gICAgY29udGFjdExpbmsuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjY29udGFjdXNcIj5Db250YWN0IHVzPC9hPic7XG4gICAgbGlua0xpc3QuYXBwZW5kKGhvbWVMaW5rLCBtZW51TGluaywgY29udGFjdExpbmspO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gcGFnZUxvYWQoKXtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGNyZWF0ZU1haW5Db250ZW50KCk7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyIsIlxuZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID1cbiAgICBbICAgICAgXG4gICAgICAgIHsgdGl0bGU6ICdOb2dhZGEgZGUgUHVlYmxhJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ05vZ2FkYSBmcm9tIHRoZSBiaXJ0aCBwbGFjZSBvZiB0aGUgZGlzaCcsXG4gICAgICAgICAgcHJpY2U6ICcxODAgTVhOJ1xuICAgICAgICB9LFxuICAgICAgICB7IHRpdGxlOiAnTm9nYWRhIGRlIFRlbXBvcmFkYScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTZWFzb25hbCBmb29kIGZvciB0aGUgaG9saWRheScsXG4gICAgICAgICAgcHJpY2U6ICcyMjAgTVhOJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdOb2dhIENvbiBIdWV2bycsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdUcmFkaXRpb25hbCBub2dhZGEgd2l0aCBhbiBlZ2cnLFxuICAgICAgICAgIHByaWNlOiAnMTI1IE1YTidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdIb3JjaGF0YScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjonVHJhZGl0aW9uYWwgcmljZSBtYWRlIGRyaW5rJyxcbiAgICAgICAgICAgIHByaWNlOiAnMjUgTVhOJ1xuICAgICAgICB9XG4gICAgXVxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGVcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0ID0gJ2l0ZW0nO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdCA9ICdkZXNjcmlwdGlvbic7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZVxuICAgICAgICBwcmljZS5jbGFzc0xpc3QgPSAncHJpY2UnO1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZygnTWVudSEnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9pbml0aWFsUGFnZS5qcyc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbnN0YXJ0UGFnZSgpO1xubmF2aWdhdGlvbkJhcigpO1xuXG5mdW5jdGlvbiBzdGFydFBhZ2UoKXtcbnBhZ2VMb2FkKCk7XG5sb2FkSG9tZSgpO1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0aW9uQmFyKCl7XG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5cblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRhY3QpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=