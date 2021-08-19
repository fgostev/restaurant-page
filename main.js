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
    img.src = '../src/imgs/queretaro.jpeg';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDZE87O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw2Q0FBUTtBQUMvQzs7QUFFQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3RCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNsQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7O1VDL0N2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1A7QUFDQTtBQUNNOztBQUV2QztBQUNBOztBQUVBO0FBQ0Esd0RBQVE7QUFDUixpREFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwrQkFBK0IsNkNBQVE7QUFDdkMsK0JBQStCLDZDQUFRO0FBQ3ZDLGtDQUFrQyxnREFBVztBQUM3QyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnRmluZCB1cyBhdDonXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5hbHQgPSAnYXJjb3MnO1xuICAgIGltZy5zcmMgPSAnLi4vc3JjL2ltZ3MvcXVlcmV0YXJvLmpwZWcnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGltZyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxuZnVuY3Rpb24gbG9hZEhvbWUoKXsgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0xhIE5vZ2FkZXJpYSEnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhyKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmEuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIkJlc3QgQ2hpbGkgTm9nYWRhcyBpbiB0b3duLiBDYW4ndCBtaXNzIHRoZW0hXCJcbiAgICBtYWluLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgIGNvbnN0IG9yZGVyTm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG9yZGVyTm93LmlkID0gJ29yZGVyTm93JztcbiAgICBvcmRlck5vdy50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xuICAgIG9yZGVyTm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChvcmRlck5vdyk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgY29uc3QgbGlua0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChsaW5rTGlzdCk7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZUxpbmsuaWQgPSAnaG9tZSc7XG4gICAgbWVudUxpbmsuaWQgPSAnbWVudSc7XG4gICAgY29udGFjdExpbmsuaWQgPSAnY29udGFjdCc7XG4gICAgaG9tZUxpbmsuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIjaG9tZVwiPkhvbWU8L2E+JztcbiAgICBtZW51TGluay5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNtZW51XCI+TWVudTwvYT4nO1xuICAgIGNvbnRhY3RMaW5rLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI2NvbnRhY3VzXCI+Q29udGFjdCB1czwvYT4nO1xuICAgIGxpbmtMaXN0LmFwcGVuZChob21lTGluaywgbWVudUxpbmssIGNvbnRhY3RMaW5rKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCl7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBjcmVhdGVNYWluQ29udGVudCgpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDsiLCJcbmZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9XG4gICAgWyAgICAgIFxuICAgICAgICB7IHRpdGxlOiAnTm9nYWRhIGRlIFB1ZWJsYScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdOb2dhZGEgZnJvbSB0aGUgYmlydGggcGxhY2Ugb2YgdGhlIGRpc2gnLFxuICAgICAgICAgIHByaWNlOiAnMTgwIE1YTidcbiAgICAgICAgfSxcbiAgICAgICAgeyB0aXRsZTogJ05vZ2FkYSBkZSBUZW1wb3JhZGEnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2Vhc29uYWwgZm9vZCBmb3IgdGhlIGhvbGlkYXknLFxuICAgICAgICAgIHByaWNlOiAnMjIwIE1YTidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnTm9nYSBDb24gSHVldm8nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVHJhZGl0aW9uYWwgbm9nYWRhIHdpdGggYW4gZWdnJyxcbiAgICAgICAgICBwcmljZTogJzEyNSBNWE4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSG9yY2hhdGEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246J1RyYWRpdGlvbmFsIHJpY2UgbWFkZSBkcmluaycsXG4gICAgICAgICAgICBwcmljZTogJzI1IE1YTidcbiAgICAgICAgfVxuICAgIF1cbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdCA9ICdpdGVtJztcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QgPSAnZGVzY3JpcHRpb24nO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2VcbiAgICAgICAgcHJpY2UuY2xhc3NMaXN0ID0gJ3ByaWNlJztcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coJ01lbnUhJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vaW5pdGlhbFBhZ2UuanMnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5zdGFydFBhZ2UoKTtcbm5hdmlnYXRpb25CYXIoKTtcblxuZnVuY3Rpb24gc3RhcnRQYWdlKCl7XG5wYWdlTG9hZCgpO1xubG9hZEhvbWUoKTtcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGlvbkJhcigpe1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuXG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250YWN0KTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9