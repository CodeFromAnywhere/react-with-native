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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var tailwind_rn_1 = require("tailwind-rn");
var react_with_native_1 = require("react-with-native");
var Image = function (_a) {
    var native = _a.native, className = _a.className;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    native = native; //TODO: How can I make the native prop required, if you render a native component?
    var tailwindStyle = className ? tailwind((0, react_with_native_1.trimClassName)(className)) : {};
    return (0, jsx_runtime_1.jsx)(react_native_1.Image, __assign({ style: [tailwindStyle] }, native), void 0);
};
exports.default = Image;
//# sourceMappingURL=Image.native.js.map