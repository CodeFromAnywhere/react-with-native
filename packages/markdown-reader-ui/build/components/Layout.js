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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var nested_menu_1 = require("nested-menu");
var Layout = function (_a) {
    var queryPaths = _a.queryPaths, children = _a.children;
    var nestedPathObject = (0, nested_menu_1.queryPathsArrayToNestedPathObject)(queryPaths);
    var pathsMenu = (0, nested_menu_1.nestedPathObjectToNestedMenuRecursive)(nestedPathObject);
    var homeMenu = { title: "Home", href: "/" };
    var menu = pathsMenu ? __spreadArray([homeMenu], pathsMenu, true) : [homeMenu];
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "h-screen grid grid-rows-6" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "row-span-6 grid grid-cols-5" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "\n        col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white", textClassName: "dark:text-white" }, { children: children })), (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "border-l col-span-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400" }, { children: menu ? (0, jsx_runtime_1.jsx)(nested_menu_1.NestedMenu, { menu: menu }) : "Menu couldn't be found" }))] })) })));
};
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map