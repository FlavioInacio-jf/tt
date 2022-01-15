"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/SettingsContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/SettingsContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SettingsContext\": function() { return /* binding */ SettingsContext; },\n/* harmony export */   \"SettingsContextProvider\": function() { return /* binding */ SettingsContextProvider; }\n/* harmony export */ });\n/* harmony import */ var _home_inacio_Documents_MeusProjetos_tt_website_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_inacio_Documents_MeusProjetos_tt_website_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_inacio_Documents_MeusProjetos_tt_website_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loader */ \"./src/components/Loader/index.tsx\");\n/* harmony import */ var _hooks_useClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useClient */ \"./src/hooks/useClient.tsx\");\n/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useFetch */ \"./src/hooks/useFetch.ts\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({\n});\nfunction SettingsContextProvider(param) {\n    var children = param.children;\n    var handleShowSettings = function handleShowSettings(value) {\n        setShowSettings(value);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isShowSettings = ref[0], setShowSettings = ref[1];\n    var currentClient = (0,_hooks_useClient__WEBPACK_IMPORTED_MODULE_4__.useClient)().currentClient;\n    var ref1 = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__.useFetch)(\"publishers/\".concat(currentClient === null || currentClient === void 0 ? void 0 : currentClient.id)), publishers = ref1.data, error = ref1.error;\n    if (!publishers || error) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Loader__WEBPACK_IMPORTED_MODULE_3__.Loader, {\n            title: \"Loadind publishers topics\",\n            __source: {\n                fileName: \"/home/inacio/Documents/MeusProjetos/tt/website/src/contexts/SettingsContext.tsx\",\n                lineNumber: 35,\n                columnNumber: 12\n            },\n            __self: this\n        }));\n    }\n    function handleDeletePublisher(id_publisher) {\n        return _handleDeletePublisher.apply(this, arguments);\n    }\n    function _handleDeletePublisher() {\n        _handleDeletePublisher = _asyncToGenerator(_home_inacio_Documents_MeusProjetos_tt_website_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id_publisher) {\n            return _home_inacio_Documents_MeusProjetos_tt_website_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _services_api__WEBPACK_IMPORTED_MODULE_6__.api[\"delete\"](\"publishers/\".concat(id_publisher));\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleDeletePublisher.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SettingsContext.Provider, {\n        value: {\n            isShowSettings: isShowSettings,\n            handleShowSettings: handleShowSettings,\n            publishers: publishers\n        },\n        __source: {\n            fileName: \"/home/inacio/Documents/MeusProjetos/tt/website/src/contexts/SettingsContext.tsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(SettingsContextProvider, \"OxHdxBcia7g8be/Hrj9eRscyy/k=\", false, function() {\n    return [\n        _hooks_useClient__WEBPACK_IMPORTED_MODULE_4__.useClient,\n        _hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__.useFetch\n    ];\n});\n_c = SettingsContextProvider;\nvar _c;\n$RefreshReg$(_c, \"SettingsContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU2V0dGluZ3NDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDYjtBQUNDO0FBQ0Y7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCOUIsR0FBSyxDQUFDTSxlQUFlLGlCQUFHTixvREFBYSxDQUFFLENBQUM7QUFBQSxDQUFDO0FBRXpDLFNBQVNPLHVCQUF1QixDQUFFLEtBQXlDLEVBQUUsQ0FBQztRQUEzQ0MsUUFBUSxHQUFULEtBQXlDLENBQXhDQSxRQUFRO1FBY3ZDQyxrQkFBa0IsR0FBM0IsUUFBUSxDQUFDQSxrQkFBa0IsQ0FBQ0MsS0FBYyxFQUFFLENBQUM7UUFDM0NDLGVBQWUsQ0FBQ0QsS0FBSztJQUN2QixDQUFDOztJQWRELEdBQUssQ0FBdUNULEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQWxEVyxjQUFjLEdBQXNCWCxHQUFlLEtBQW5DVSxlQUFlLEdBQUtWLEdBQWU7SUFDM0QsR0FBSyxDQUFHWSxhQUFhLEdBQUtWLDJEQUFTLEdBQTNCVSxhQUFhO0lBQ3JCLEdBQUssQ0FBK0JULElBQTZELEdBQTdEQSx5REFBUSxDQUFvQixDQUFXLGFBQW9CLE9BQWxCUyxhQUFhLGFBQWJBLGFBQWEsS0FBYkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsYUFBYSxDQUFFQyxFQUFFLElBQWhGQyxVQUFVLEdBQVlYLElBQTZELENBQXpGWSxJQUFJLEVBQWNDLEtBQUssR0FBS2IsSUFBNkQsQ0FBdkVhLEtBQUs7SUFFL0IsRUFBRSxHQUFHRixVQUFVLElBQUlFLEtBQUssRUFBRSxDQUFDO1FBQ3pCLE1BQU0sc0VBQUVmLHNEQUFNO1lBQUNnQixLQUFLLEVBQUMsQ0FBMkI7Ozs7Ozs7O0lBQ2xELENBQUM7YUFFY0MscUJBQXFCLENBQUNDLFlBQW9CO2VBQTFDRCxzQkFBcUI7O2FBQXJCQSxzQkFBcUI7UUFBckJBLHNCQUFxQiw4S0FBcEMsUUFBUSxTQUE2QkMsWUFBb0IsRUFBRSxDQUFDOzs7OzsrQkFDcERmLHdEQUFVLENBQUUsQ0FBVyxhQUFlLE9BQWJlLFlBQVk7Ozs7OztRQUM3QyxDQUFDO2VBRmNELHNCQUFxQjs7SUFRcEMsTUFBTSxzRUFDSGIsZUFBZSxDQUFDZ0IsUUFBUTtRQUFDWixLQUFLLEVBQUUsQ0FBQztZQUFDRSxjQUFjLEVBQWRBLGNBQWM7WUFDZEgsa0JBQWtCLEVBQWxCQSxrQkFBa0I7WUFDbEJNLFVBQVUsRUFBVkEsVUFBVTtRQUNYLENBQUM7Ozs7Ozs7a0JBQ2hDUCxRQUFROztBQUdmLENBQUM7R0ExQmVELHVCQUF1Qjs7UUFHWEosdURBQVM7UUFDQ0MscURBQVE7OztLQUo5QkcsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9TZXR0aW5nc0NvbnRleHQudHN4Pzk0OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgeyB1c2VDbGllbnQgfSBmcm9tIFwiLi4vaG9va3MvdXNlQ2xpZW50XCI7XG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gXCIuLi9ob29rcy91c2VGZXRjaFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuXG5cbnR5cGUgU2V0dGluZ3NDb250ZXh0VHlwZSA9IHtcbiAgaXNTaG93U2V0dGluZ3MgOiBib29sZWFuO1xuICBoYW5kbGVTaG93U2V0dGluZ3MgOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHB1Ymxpc2hlcnM6IFB1Ymxpc2hUeXBlIFtdO1xufVxuXG50eXBlIFNldHRpbmdzQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuIDogUmVhY3ROb2RlO1xufVxudHlwZSBQdWJsaXNoVHlwZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcHVibGlzaDogc3RyaW5nO1xuICB0b3BpYzogc3RyaW5nO1xuICBvb3M6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgaWRfY2xpZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTZXR0aW5nc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0ICh7fSBhcyBTZXR0aW5nc0NvbnRleHRUeXBlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzQ29udGV4dFByb3ZpZGVyICh7Y2hpbGRyZW59IDogU2V0dGluZ3NDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuXG4gIGNvbnN0IFsgaXNTaG93U2V0dGluZ3MsIHNldFNob3dTZXR0aW5ncyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGN1cnJlbnRDbGllbnQgfSA9IHVzZUNsaWVudCgpO1xuICBjb25zdCB7IGRhdGE6IHB1Ymxpc2hlcnMsIGVycm9yIH0gPSB1c2VGZXRjaCA8UHVibGlzaFR5cGUgW10gPihgcHVibGlzaGVycy8ke2N1cnJlbnRDbGllbnQ/LmlkfWApXG5cbiAgaWYgKCFwdWJsaXNoZXJzIHx8IGVycm9yKSB7XG4gICAgcmV0dXJuIDxMb2FkZXIgdGl0bGU9XCJMb2FkaW5kIHB1Ymxpc2hlcnMgdG9waWNzXCIgLz5cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVB1Ymxpc2hlcihpZF9wdWJsaXNoZXI6IHN0cmluZykge1xuICAgIGF3YWl0IGFwaS5kZWxldGUoYHB1Ymxpc2hlcnMvJHtpZF9wdWJsaXNoZXJ9YClcbiAgfVxuICBcbiAgZnVuY3Rpb24gaGFuZGxlU2hvd1NldHRpbmdzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgc2V0U2hvd1NldHRpbmdzKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNldHRpbmdzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc1Nob3dTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVNob3dTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1Ymxpc2hlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TZXR0aW5nc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkxvYWRlciIsInVzZUNsaWVudCIsInVzZUZldGNoIiwiYXBpIiwiU2V0dGluZ3NDb250ZXh0IiwiU2V0dGluZ3NDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImhhbmRsZVNob3dTZXR0aW5ncyIsInZhbHVlIiwic2V0U2hvd1NldHRpbmdzIiwiaXNTaG93U2V0dGluZ3MiLCJjdXJyZW50Q2xpZW50IiwiaWQiLCJwdWJsaXNoZXJzIiwiZGF0YSIsImVycm9yIiwidGl0bGUiLCJoYW5kbGVEZWxldGVQdWJsaXNoZXIiLCJpZF9wdWJsaXNoZXIiLCJkZWxldGUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SettingsContext.tsx\n");

/***/ })

});