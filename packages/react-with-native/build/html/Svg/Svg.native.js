"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var Svg = function (_a) {
    var src = _a.src, width = _a.width, height = _a.height, className = _a.className, style = _a.style;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    var Icon = src;
    return React.createElement(Icon, { width: width, height: height, style: [style, tailwindStyle] });
};
exports.default = Svg;
//# sourceMappingURL=Svg.native.js.map