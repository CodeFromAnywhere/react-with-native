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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_menu_1 = require("@szhsin/react-menu");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var SelectMenu = function (_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, children = _a.children, className = _a.className;
    var _b = (0, react_menu_1.useMenuState)(), toggleMenu = _b.toggleMenu, menuProps = __rest(_b, ["toggleMenu"]);
    var _c = (0, react_1.useState)({ x: 0, y: 0 }), anchorPoint = _c[0], setAnchorPoint = _c[1];
    var _d = (0, react_1.useState)(), id = _d[0], setId = _d[1];
    var onClick = function (e, id) {
        if (e) {
            e.preventDefault();
            setAnchorPoint({ x: e.clientX, y: e.clientY });
        }
        setId(id);
        toggleMenu(true);
    };
    if (typeof document === "undefined") {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: children({ onClick: onClick, value: value, className: className }) })));
};
exports.default = SelectMenu;
//# sourceMappingURL=SelectMenu.js.map