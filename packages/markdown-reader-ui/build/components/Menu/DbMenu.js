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
exports.DbMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var useDbMenuQuery_1 = require("../../hooks/useDbMenuQuery");
var MenuItem_1 = require("./MenuItem");
var SearchForm_1 = require("./SearchForm");
var DbMenu = function () {
    var _a;
    var menu = (0, useDbMenuQuery_1.useDbMenuQuery)();
    var isLoading = menu.isLoading;
    var menuItems = (_a = menu.data) === null || _a === void 0 ? void 0 : _a.map(function (modelInfo, index) {
        var key = "menu".concat(index);
        var isSelected = false;
        return ((0, jsx_runtime_1.jsx)(MenuItem_1.MenuItem, { id: key, canExpand: false, isSelected: isSelected, link: "db?model=".concat(modelInfo.slug), title: "".concat(modelInfo.name, " (").concat(modelInfo.rows, ")") }, key));
    });
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(SearchForm_1.SearchForm, { isLoading: isLoading }), (0, jsx_runtime_1.jsx)(react_with_native_1.Ul, __assign({ className: "w-full" }, { children: menuItems }))] }));
};
exports.DbMenu = DbMenu;
//# sourceMappingURL=DbMenu.js.map