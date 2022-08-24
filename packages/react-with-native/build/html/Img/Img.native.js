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
exports.Image = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var Image = function (_a) {
    var native = _a.native, className = _a.className, style = _a.style, src = _a.src;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    native = native; //TODO: How can I make the native prop required, if you render a native component?
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    if (typeof src === "number")
        return (0, jsx_runtime_1.jsx)(react_native_1.Image, __assign({ style: [tailwindStyle, style] }, native, { source: src }));
    return ((0, jsx_runtime_1.jsx)(react_native_1.Image, __assign({ style: [tailwindStyle, style] }, native, { source: { uri: src } })));
};
exports.Image = Image;
//# sourceMappingURL=Img.native.js.map