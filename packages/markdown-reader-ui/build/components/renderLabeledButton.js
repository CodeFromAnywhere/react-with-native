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
exports.renderLabeledButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var renderLabeledButton = function (button) {
    var size = button.size === "small" ? 12 : 24;
    var heightClass = button.size === "small" ? "h-4" : "h-7";
    var textSizeClass = button.size === "small" ? "text-xs" : "text-xl";
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Button, __assign({ className: "flex flex-col items-center", onClick: button.onClick }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-10 ".concat(button.isActive ? "bg-blue-900 rounded-full" : "") }, { children: button.icon ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: button.icon, width: size, height: size })) : button.emoji ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "".concat(textSizeClass, " hover:scale-110") }, { children: button.emoji }))) : button.component ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: heightClass }, { children: button.component() }))) : null })), button.size === "small" ? null : ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-xs" }, { children: button.title })))] })));
};
exports.renderLabeledButton = renderLabeledButton;
//# sourceMappingURL=renderLabeledButton.js.map