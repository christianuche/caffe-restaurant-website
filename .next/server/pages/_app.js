/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/CartContext.tsx":
/*!*************************************!*\
  !*** ./src/context/CartContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) throw new Error(\"useCart must be used within CartProvider\");\n    return context;\n};\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (item)=>{\n        setCart((prev)=>{\n            const existing = prev.find((i)=>i.id === item.id);\n            if (existing) {\n                return prev.map((i)=>i.id === item.id ? {\n                        ...i,\n                        quantity: i.quantity + 1\n                    } : i);\n            }\n            return [\n                ...prev,\n                {\n                    ...item,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const removeFromCart = (id)=>{\n        setCart((prev)=>prev.filter((i)=>i.id !== id));\n    };\n    const updateQuantity = (id, quantity)=>{\n        if (quantity <= 0) {\n            removeFromCart(id);\n            return;\n        }\n        setCart((prev)=>prev.map((i)=>i.id === id ? {\n                    ...i,\n                    quantity\n                } : i));\n    };\n    const clearCart = ()=>setCart([]);\n    const total = cart.reduce((sum, item)=>sum + item.price * item.quantity, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart,\n            total\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\caffe-restaurant-website\\\\src\\\\context\\\\CartContext.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DYXJ0Q29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1RTtBQXdCdkUsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUE4Qkk7QUFFeEQsTUFBTUMsVUFBVTtJQUNyQixNQUFNQyxVQUFVTCxpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSSxDQUFDRyxTQUFTLE1BQU0sSUFBSUMsTUFBTTtJQUM5QixPQUFPRDtBQUNULEVBQUU7QUFFSyxNQUFNRSxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUEyQjtJQUNoRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQWEsRUFBRTtJQUUvQyxNQUFNVSxZQUFZLENBQUNDO1FBQ2pCRixRQUFRRyxDQUFBQTtZQUNOLE1BQU1DLFdBQVdELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxLQUFLTCxLQUFLSyxFQUFFO1lBQ2hELElBQUlILFVBQVU7Z0JBQ1osT0FBT0QsS0FBS0ssR0FBRyxDQUFDRixDQUFBQSxJQUFLQSxFQUFFQyxFQUFFLEtBQUtMLEtBQUtLLEVBQUUsR0FBRzt3QkFBRSxHQUFHRCxDQUFDO3dCQUFFRyxVQUFVSCxFQUFFRyxRQUFRLEdBQUc7b0JBQUUsSUFBSUg7WUFDL0U7WUFDQSxPQUFPO21CQUFJSDtnQkFBTTtvQkFBRSxHQUFHRCxJQUFJO29CQUFFTyxVQUFVO2dCQUFFO2FBQUU7UUFDNUM7SUFDRjtJQUVBLE1BQU1DLGlCQUFpQixDQUFDSDtRQUN0QlAsUUFBUUcsQ0FBQUEsT0FBUUEsS0FBS1EsTUFBTSxDQUFDTCxDQUFBQSxJQUFLQSxFQUFFQyxFQUFFLEtBQUtBO0lBQzVDO0lBRUEsTUFBTUssaUJBQWlCLENBQUNMLElBQVlFO1FBQ2xDLElBQUlBLFlBQVksR0FBRztZQUNqQkMsZUFBZUg7WUFDZjtRQUNGO1FBQ0FQLFFBQVFHLENBQUFBLE9BQVFBLEtBQUtLLEdBQUcsQ0FBQ0YsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxLQUFLQSxLQUFLO29CQUFFLEdBQUdELENBQUM7b0JBQUVHO2dCQUFTLElBQUlIO0lBQ25FO0lBRUEsTUFBTU8sWUFBWSxJQUFNYixRQUFRLEVBQUU7SUFFbEMsTUFBTWMsUUFBUWYsS0FBS2dCLE1BQU0sQ0FBQyxDQUFDQyxLQUFLZCxPQUFTYyxNQUFNZCxLQUFLZSxLQUFLLEdBQUdmLEtBQUtPLFFBQVEsRUFBRTtJQUUzRSxxQkFDRSw4REFBQ2pCLFlBQVkwQixRQUFRO1FBQUNDLE9BQU87WUFBRXBCO1lBQU1FO1lBQVdTO1lBQWdCRTtZQUFnQkM7WUFBV0M7UUFBTTtrQkFDOUZoQjs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NhZmUtcmVzdGF1cmFudC1jbG9uZS8uL3NyYy9jb250ZXh0L0NhcnRDb250ZXh0LnRzeD9iZWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgTWVudUl0ZW0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2FydEl0ZW0gZXh0ZW5kcyBNZW51SXRlbSB7XHJcbiAgcXVhbnRpdHk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENhcnRDb250ZXh0VHlwZSB7XHJcbiAgY2FydDogQ2FydEl0ZW1bXTtcclxuICBhZGRUb0NhcnQ6IChpdGVtOiBNZW51SXRlbSkgPT4gdm9pZDtcclxuICByZW1vdmVGcm9tQ2FydDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgdXBkYXRlUXVhbnRpdHk6IChpZDogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGNsZWFyQ2FydDogKCkgPT4gdm9pZDtcclxuICB0b3RhbDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q2FydENvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCd1c2VDYXJ0IG11c3QgYmUgdXNlZCB3aXRoaW4gQ2FydFByb3ZpZGVyJyk7XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZTxDYXJ0SXRlbVtdPihbXSk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtOiBNZW51SXRlbSkgPT4ge1xyXG4gICAgc2V0Q2FydChwcmV2ID0+IHtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBwcmV2LmZpbmQoaSA9PiBpLmlkID09PSBpdGVtLmlkKTtcclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYubWFwKGkgPT4gaS5pZCA9PT0gaXRlbS5pZCA/IHsgLi4uaSwgcXVhbnRpdHk6IGkucXVhbnRpdHkgKyAxIH0gOiBpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gWy4uLnByZXYsIHsgLi4uaXRlbSwgcXVhbnRpdHk6IDEgfV07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDYXJ0KHByZXYgPT4gcHJldi5maWx0ZXIoaSA9PiBpLmlkICE9PSBpZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVF1YW50aXR5ID0gKGlkOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChxdWFudGl0eSA8PSAwKSB7XHJcbiAgICAgIHJlbW92ZUZyb21DYXJ0KGlkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0Q2FydChwcmV2ID0+IHByZXYubWFwKGkgPT4gaS5pZCA9PT0gaWQgPyB7IC4uLmksIHF1YW50aXR5IH0gOiBpKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xlYXJDYXJ0ID0gKCkgPT4gc2V0Q2FydChbXSk7XHJcblxyXG4gIGNvbnN0IHRvdGFsID0gY2FydC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHksIDApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNhcnQsIGFkZFRvQ2FydCwgcmVtb3ZlRnJvbUNhcnQsIHVwZGF0ZVF1YW50aXR5LCBjbGVhckNhcnQsIHRvdGFsIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0Q29udGV4dCIsInVuZGVmaW5lZCIsInVzZUNhcnQiLCJjb250ZXh0IiwiRXJyb3IiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0IiwiYWRkVG9DYXJ0IiwiaXRlbSIsInByZXYiLCJleGlzdGluZyIsImZpbmQiLCJpIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsInJlbW92ZUZyb21DYXJ0IiwiZmlsdGVyIiwidXBkYXRlUXVhbnRpdHkiLCJjbGVhckNhcnQiLCJ0b3RhbCIsInJlZHVjZSIsInN1bSIsInByaWNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/CartContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"./src/context/CartContext.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\caffe-restaurant-website\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\caffe-restaurant-website\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUV1QjtBQUV2QyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCw4REFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWZlLXJlc3RhdXJhbnQtY2xvbmUvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IENhcnRQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQ2FydENvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DYXJ0UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();