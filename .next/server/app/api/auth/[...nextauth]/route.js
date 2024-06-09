"use strict";
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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_dekhv_OneDrive_main2_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\dekhv\\\\OneDrive\\\\Рабочий стол\\\\main2\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_dekhv_OneDrive_main2_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNkZWtodiU1Q09uZURyaXZlJTVDJUQwJUEwJUQwJUIwJUQwJUIxJUQwJUJFJUQxJTg3JUQwJUI4JUQwJUI5JTIwJUQxJTgxJUQxJTgyJUQwJUJFJUQwJUJCJTVDbWFpbjIlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2Rla2h2JTVDT25lRHJpdmUlNUMlRDAlQTAlRDAlQjAlRDAlQjElRDAlQkUlRDElODclRDAlQjglRDAlQjklMjAlRDElODElRDElODIlRDAlQkUlRDAlQkIlNUNtYWluMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUMyRDtBQUMxSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmMtc3RvcmUvPzBlNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGRla2h2XFxcXE9uZURyaXZlXFxcXNCg0LDQsdC+0YfQuNC5INGB0YLQvtC7XFxcXG1haW4yXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxkZWtodlxcXFxPbmVEcml2ZVxcXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcXFxtYWluMlxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDUTtBQUV4QyxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0Msa0RBQVdBO0FBRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmMtc3RvcmUvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCJcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUfTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/auth.tsx":
/*!******************************!*\
  !*** ./src/helpers/auth.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   verifyPassword: () => (/* binding */ verifyPassword)\n/* harmony export */ });\nfunction verifyPassword(plainPassword, hashedPassword) {\n    return plainPassword === hashedPassword;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9hdXRoLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sU0FBU0EsZUFBZUMsYUFBcUIsRUFBRUMsY0FBc0I7SUFDMUUsT0FBT0Qsa0JBQWtCQztBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FuYy1zdG9yZS8uL3NyYy9oZWxwZXJzL2F1dGgudHN4PzNhM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5UGFzc3dvcmQocGxhaW5QYXNzd29yZDogc3RyaW5nLCBoYXNoZWRQYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHBsYWluUGFzc3dvcmQgPT09IGhhc2hlZFBhc3N3b3JkO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlQYXNzd29yZCIsInBsYWluUGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/auth.tsx\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/auth */ \"(rsc)/./src/helpers/auth.tsx\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_2__.prismaClient),\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials)=>{\n                const { email, password } = credentials;\n                var re = /\\S+@\\S+\\.\\S+/;\n                if (re.test(email) === false) {\n                    throw new Error(\"1\");\n                }\n                let user = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prismaClient.user.findUnique({\n                    where: {\n                        email: email\n                    }\n                });\n                if (!user) {\n                    user = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prismaClient.user.create({\n                        data: {\n                            email: email,\n                            password: password\n                        }\n                    });\n                }\n                const isValidPassword = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_3__.verifyPassword)(password, user.password);\n                if (isValidPassword === false) {\n                    throw new Error(\"2\");\n                }\n                console.log(user);\n                return user;\n            }\n        })\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDYTtBQUUxQjtBQUNRO0FBRXpDLE1BQU1JLGNBQStCO0lBQzFDQyxTQUFTTCxtRUFBYUEsQ0FBQ0UsaURBQVlBO0lBQ25DSSxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxXQUFXO1FBQ1RULDJFQUFtQkEsQ0FBQztZQUNsQlUsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBRSxXQUFXLE9BQU9MO2dCQUNoQixNQUFNLEVBQUVDLEtBQUssRUFBRUcsUUFBUSxFQUFFLEdBQUdKO2dCQUU1QixJQUFJTSxLQUFLO2dCQUNULElBQUlBLEdBQUdDLElBQUksQ0FBQ04sV0FBVyxPQUFPO29CQUM1QixNQUFNLElBQUlPLE1BQU07Z0JBQ2xCO2dCQUVBLElBQUlDLE9BQU8sTUFBTW5CLGlEQUFZQSxDQUFDbUIsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQzVDQyxPQUFPO3dCQUFFVixPQUFPQTtvQkFBTTtnQkFDeEI7Z0JBRUEsSUFBSSxDQUFDUSxNQUFNO29CQUNUQSxPQUFPLE1BQU1uQixpREFBWUEsQ0FBQ21CLElBQUksQ0FBQ0csTUFBTSxDQUFDO3dCQUNwQ0MsTUFBTTs0QkFDSlosT0FBT0E7NEJBQ1BHLFVBQVVBO3dCQUNaO29CQUNGO2dCQUNGO2dCQUVBLE1BQU1VLGtCQUFrQixNQUFNdkIsNkRBQWNBLENBQUNhLFVBQVVLLEtBQUtMLFFBQVE7Z0JBQ3BFLElBQUlVLG9CQUFvQixPQUFPO29CQUM3QixNQUFNLElBQUlOLE1BQU07Z0JBQ2xCO2dCQUNBTyxRQUFRQyxHQUFHLENBQUNQO2dCQUNaLE9BQU9BO1lBQ1Q7UUFDRjtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FuYy1zdG9yZS8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgeyBwcmlzbWFDbGllbnQgfSBmcm9tIFwiLi9wcmlzbWFcIjtcbmltcG9ydCB7IHZlcmlmeVBhc3N3b3JkIH0gZnJvbSBcIkAvaGVscGVycy9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYUNsaWVudCksXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJ1xuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCJcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNyZWRlbnRpYWxzIGFzIHsgZW1haWw6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9O1xuICAgICAgICBcbiAgICAgICAgdmFyIHJlID0gL1xcUytAXFxTK1xcLlxcUysvO1xuICAgICAgICBpZiAocmUudGVzdChlbWFpbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VyID0gYXdhaXQgcHJpc21hQ2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGVtYWlsIH0sIFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWFDbGllbnQudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSBhd2FpdCB2ZXJpZnlQYXNzd29yZChwYXNzd29yZCwgdXNlci5wYXNzd29yZCEpO1xuICAgICAgICBpZiAoaXNWYWxpZFBhc3N3b3JkID09PSBmYWxzZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIjJcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXVxufTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYUNsaWVudCIsInZlcmlmeVBhc3N3b3JkIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicGFnZXMiLCJzaWduSW4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmUiLCJ0ZXN0IiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiY3JlYXRlIiwiZGF0YSIsImlzVmFsaWRQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prismaClient: () => (/* binding */ prismaClient)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst prismaClient = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFNOUMsSUFBSUM7QUFDSixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BQU07SUFDTCxJQUFJLENBQUNDLE9BQU9DLFlBQVksRUFBRTtRQUN4QkQsT0FBT0MsWUFBWSxHQUFHLElBQUlKLHdEQUFZQTtJQUN4QztJQUVBQyxTQUFTRSxPQUFPQyxZQUFZO0FBQzlCO0FBRU8sTUFBTUMsZUFBZUosT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuYy1zdG9yZS8uL3NyYy9saWIvcHJpc21hLnRzPzAxZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50O1xufVxuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLmNhY2hlZFByaXNtYSkge1xuICAgIGdsb2JhbC5jYWNoZWRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIH1cbiAgXG4gIHByaXNtYSA9IGdsb2JhbC5jYWNoZWRQcmlzbWE7XG59XG5cbmV4cG9ydCBjb25zdCBwcmlzbWFDbGllbnQgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCIsImNhY2hlZFByaXNtYSIsInByaXNtYUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cdekhv%5COneDrive%5C%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB%5Cmain2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();