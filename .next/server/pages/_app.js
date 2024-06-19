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

/***/ "./components/AppContextFolder/AppContext.tsx":
/*!****************************************************!*\
  !*** ./components/AppContextFolder/AppContext.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLDJCQUFhRCxvREFBYUEsQ0FBQztBQUVqQyxpRUFBZUMsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnNpdGUvLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3g/ZWRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHQ7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppContextFolder/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var _components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppContextFolder/AppContext */ \"./components/AppContextFolder/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const timerCookie = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const windowSizeTrackerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const [sharedState, setSharedState] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        portfolio: {\n            NavBar: {\n                IntervalEvent: null,\n                scrolling: null,\n                scrollSizeY: null\n            },\n            Scrolling: {\n                IntervalEvent: null\n            }\n        },\n        userdata: {\n            timerCookieRef: timerCookie,\n            windowSizeTracker: windowSizeTrackerRef,\n            mousePositionTracker: mousePositionRef\n        },\n        typing: {\n            keyboardEvent: null,\n            eventInputLostFocus: null\n        },\n        finishedLoading: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            sharedState,\n            setSharedState\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mianm\\\\OneDrive\\\\Desktop\\\\code\\\\pak\\\\pages\\\\_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mianm\\\\OneDrive\\\\Desktop\\\\code\\\\pak\\\\pages\\\\_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mianm\\\\OneDrive\\\\Desktop\\\\code\\\\pak\\\\pages\\\\_app.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3FCO0FBQ2U7QUFDMUI7QUFFekMsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxjQUFjTCw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNTSx1QkFBdUJOLDZDQUFNQSxDQUFDO0lBQ3BDLE1BQU1PLG1CQUFtQlAsNkNBQU1BLENBQUM7SUFDaEMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO1FBQzdDUyxXQUFXO1lBQ1RDLFFBQVE7Z0JBQ05DLGVBQWU7Z0JBQ2ZDLFdBQVc7Z0JBQ1hDLGFBQWE7WUFDZjtZQUNBQyxXQUFVO2dCQUNSSCxlQUFjO1lBQ2hCO1FBQ0Y7UUFDQUksVUFBVTtZQUNSQyxnQkFBZ0JaO1lBQ2hCYSxtQkFBbUJaO1lBQ25CYSxzQkFBc0JaO1FBQ3hCO1FBQ0FhLFFBQVE7WUFDTkMsZUFBZTtZQUNmQyxxQkFBcUI7UUFDdkI7UUFDQUMsaUJBQWlCO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUN4Qix3RkFBbUI7UUFBQzBCLE9BQU87WUFBRWpCO1lBQWFDO1FBQWU7OzBCQUN4RCw4REFBQ047Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ04sOERBQVNBOzs7Ozs7Ozs7OztBQUdoQjtBQUVBLGlFQUFlSSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gJ0B2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0JztcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwQ29udGV4dEZvbGRlci9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IHRpbWVyQ29va2llID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdpbmRvd1NpemVUcmFja2VyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG1vdXNlUG9zaXRpb25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3NoYXJlZFN0YXRlLCBzZXRTaGFyZWRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBwb3J0Zm9saW86IHtcclxuICAgICAgTmF2QmFyOiB7XHJcbiAgICAgICAgSW50ZXJ2YWxFdmVudDogbnVsbCxcclxuICAgICAgICBzY3JvbGxpbmc6IG51bGwsXHJcbiAgICAgICAgc2Nyb2xsU2l6ZVk6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIFNjcm9sbGluZzp7XHJcbiAgICAgICAgSW50ZXJ2YWxFdmVudDpudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyZGF0YToge1xyXG4gICAgICB0aW1lckNvb2tpZVJlZjogdGltZXJDb29raWUsXHJcbiAgICAgIHdpbmRvd1NpemVUcmFja2VyOiB3aW5kb3dTaXplVHJhY2tlclJlZixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYWNrZXI6IG1vdXNlUG9zaXRpb25SZWYsXHJcbiAgICB9LFxyXG4gICAgdHlwaW5nOiB7XHJcbiAgICAgIGtleWJvYXJkRXZlbnQ6IG51bGwsXHJcbiAgICAgIGV2ZW50SW5wdXRMb3N0Rm9jdXM6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmluaXNoZWRMb2FkaW5nOiBmYWxzZSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2hhcmVkU3RhdGUsIHNldFNoYXJlZFN0YXRlIH19PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxBbmFseXRpY3MgLz5cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkFuYWx5dGljcyIsIkFwcENvbnRleHQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGltZXJDb29raWUiLCJ3aW5kb3dTaXplVHJhY2tlclJlZiIsIm1vdXNlUG9zaXRpb25SZWYiLCJzaGFyZWRTdGF0ZSIsInNldFNoYXJlZFN0YXRlIiwicG9ydGZvbGlvIiwiTmF2QmFyIiwiSW50ZXJ2YWxFdmVudCIsInNjcm9sbGluZyIsInNjcm9sbFNpemVZIiwiU2Nyb2xsaW5nIiwidXNlcmRhdGEiLCJ0aW1lckNvb2tpZVJlZiIsIndpbmRvd1NpemVUcmFja2VyIiwibW91c2VQb3NpdGlvblRyYWNrZXIiLCJ0eXBpbmciLCJrZXlib2FyZEV2ZW50IiwiZXZlbnRJbnB1dExvc3RGb2N1cyIsImZpbmlzaGVkTG9hZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
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

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();