"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var react_with_native_1 = require("react-with-native");
var js_util_1 = require("js-util");
var js_util_2 = require("js-util");
var react_with_native_router_1 = require("react-with-native-router");
var NestedMenuItem_1 = require("./NestedMenuItem");
var store_1 = require("./store");
/**
 * General purpose nested menu component
 *
 * Please make sure that you also wrap your app with `MenuStoreProvider`, or this will crash...!
 */
var NestedMenu = function (props) {
    var router = (0, react_with_native_router_1.useRouter)();
    var _a = (0, store_1.useStore)("menu.expanded"), expanded = _a[0], setExpanded = _a[1], hydrated = _a[2].hydrated;
    var expandCompleteUrlInMenu = function () {
        var parts = (0, js_util_1.trimSlashes)(router.asPath).split("/");
        var cummulativeParts = parts
            .map(function (part, index, array) {
            if (part === "")
                return;
            return array.slice(0, index + 1).join("/");
        })
            .filter(js_util_2.notEmpty);
        var cumulativePartsExpandedObject = (0, js_util_2.mergeObjectsArray)(cummulativeParts.map(function (url) {
            var _a;
            return (_a = {}, _a[url] = true, _a);
        }));
        setExpanded(__assign(__assign({}, expanded), cumulativePartsExpandedObject));
    };
    (0, react_2.useEffect)(function () {
        expandCompleteUrlInMenu();
    }, [router.asPath]);
    var menu = props.menu, headersClickable = props.headersClickable;
    var menuItems = menu === null || menu === void 0 ? void 0 : menu.map(function (menuItem, index) {
        return ((0, react_1.createElement)(NestedMenuItem_1.NestedMenuItem, __assign({}, menuItem, { headersClickable: headersClickable, key: "menu".concat(index) })));
    });
    return (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: menuItems }));
};
exports.NestedMenu = NestedMenu;
//# sourceMappingURL=NestedMenu.js.map