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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var AiFillCaretDown_svg_1 = __importDefault(require("../assets/AiFillCaretDown.svg"));
function DropdownButton(_a) {
    var onClick = _a.onClick, label = _a.label;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ onClick: onClick, className: "flex w-full px-4 py-4 mt-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex-1" }, { children: label }), void 0), (0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: AiFillCaretDown_svg_1.default, className: "w-5 h-5 ml-2 -mr-1" }, void 0)] }), void 0));
}
exports.default = DropdownButton;
//# sourceMappingURL=DropdownButton.js.map