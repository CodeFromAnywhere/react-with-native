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
exports.MenuWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var Menu_1 = require("./Menu");
var store_1 = require("./store");
var MenuWrapper = function (props) {
    var isLoading = props.isLoading, children = props.children, queryPaths = props.queryPaths, augmentedWords = props.augmentedWords, menuType = props.menuType, menuTypes = props.menuTypes, setMenuType = props.setMenuType;
    var _a = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _a[0], setIsMobileMenuEnabled = _a[1];
    var renderMenu = function () {
        return ((0, jsx_runtime_1.jsx)(Menu_1.Menu, { augmentedWords: augmentedWords, queryPaths: queryPaths, isLoading: isLoading, menuType: menuType, setMenuType: setMenuType, menuTypes: menuTypes, 
            // ????
            message: undefined }));
    };
    /**
     * I run into this problem all the time
     *
     * https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working
     */
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isMobileMenuEnabled ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: renderMenu() }))) : ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "lg:grid lg:grid-cols-[auto_1fr] lg:min-h-0" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white", textClassName: "dark:text-white" }, { children: children })), (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "lg:overflow-y-auto invisible lg:visible border-l bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400" }, { children: renderMenu() }))] }))) }));
};
exports.MenuWrapper = MenuWrapper;
//# sourceMappingURL=MenuWrapper.js.map