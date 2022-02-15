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
var react_with_native_1 = require("react-with-native");
var SelectedIcon = function (_a) {
    var selected = _a.selected;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex items-center justify-center w-6 h-6 border-2 border-blue-400 rounded-full" }, { children: selected ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Span, { className: "w-4 h-4 bg-blue-400 rounded-full", "aria-hidden": "true" }, void 0)) : null }), void 0));
};
exports.default = SelectedIcon;
//# sourceMappingURL=SelectedIcon.js.map