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
var react_native_1 = require("react-native");
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var Select = function (_a) {
    var native = _a.native, options = _a.options, className = _a.className;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    var style = (native || {}).style;
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    return (React.createElement(react_native_1.Picker, { style: [{ fontWeight: "bold" }, tailwindStyle, style] }, (options || []).map(function (option) {
        React.createElement(react_native_1.Picker.Item, { value: String(option.value), label: String(option.label) });
    })));
};
exports.default = Select;
//# sourceMappingURL=Select.native.js.map