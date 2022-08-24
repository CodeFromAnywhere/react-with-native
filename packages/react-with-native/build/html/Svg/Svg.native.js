"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Svg = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var Svg = function (_a) {
    var src = _a.src, width = _a.width, height = _a.height, className = _a.className, style = _a.style;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    var Icon = src;
    return (0, jsx_runtime_1.jsx)(Icon, { width: width, height: height, style: [style, tailwindStyle] });
};
exports.Svg = Svg;
//# sourceMappingURL=Svg.native.js.map