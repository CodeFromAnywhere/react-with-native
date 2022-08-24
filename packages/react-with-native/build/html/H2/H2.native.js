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
exports.H2 = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var H2 = function (_a) {
    var native = _a.native, children = _a.children, className = _a.className;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    var _b = native || {}, style = _b.style, nativeWithoutStyle = __rest(_b, ["style"]);
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: [tailwindStyle, style] }, nativeWithoutStyle, { children: children })));
};
exports.H2 = H2;
//# sourceMappingURL=H2.native.js.map