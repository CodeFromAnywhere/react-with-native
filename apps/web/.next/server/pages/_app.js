(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(5332);
;// CONCATENATED MODULE: external "@badrap/bar-of-progress"
const bar_of_progress_namespaceObject = require("@badrap/bar-of-progress");
var bar_of_progress_default = /*#__PURE__*/__webpack_require__.n(bar_of_progress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 11 modules
var src = __webpack_require__(7751);
// EXTERNAL MODULE: ../../packages/react-with-native/build/index.js
var build = __webpack_require__(9734);
// EXTERNAL MODULE: ../../packages/react-with-native-notification/build/index.js
var react_with_native_notification_build = __webpack_require__(1574);
// EXTERNAL MODULE: ../../packages/react-with-native-alert/build/index.js
var react_with_native_alert_build = __webpack_require__(5702);
;// CONCATENATED MODULE: ./src/pages/_app.tsx












const progress = new (bar_of_progress_default())();
//Binding events.
router_default().events.on("routeChangeStart", progress.start);
router_default().events.on("routeChangeComplete", progress.finish);
router_default().events.on("routeChangeError", progress.finish);
const queryClient = new external_react_query_namespaceObject.QueryClient();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_query_namespaceObject.QueryClientProvider, {
        client: queryClient,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_notification_build/* ToastContainer */.Ix, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_alert_build.AlertProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(src/* StoreProvider */.g3, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(build.Div, {
                        className: "flex flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(build.Div, {
                                className: "bg-gray-300 p-4 h-screen w-40",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(build.P, {
                                        className: "font-bold",
                                        children: "Menu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(src/* Components.Menu */.z8.v, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5332:
/***/ (() => {



/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 7646:
/***/ ((module) => {

"use strict";
module.exports = require("fast-deep-equal/react");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 2233:
/***/ ((module) => {

"use strict";
module.exports = require("rc-time-picker");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ 611:
/***/ ((module) => {

"use strict";
module.exports = require("react-datetime");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6358:
/***/ ((module) => {

"use strict";
module.exports = require("react-dropzone");

/***/ }),

/***/ 9169:
/***/ ((module) => {

"use strict";
module.exports = require("react-stars");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7023:
/***/ ((module) => {

"use strict";
module.exports = require("sensible-core");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [255,751], () => (__webpack_exec__(9741)));
module.exports = __webpack_exports__;

})();