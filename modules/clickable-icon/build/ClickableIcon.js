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
exports.ClickableIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
/**
 * Renders a simple clickable icon with some styling
 *
 * Icon can be either an icon (Svg src) or emoji (string)
 */
var ClickableIcon = function (button) {
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ className: "flex flex-col items-center", onClick: button.disabled ? undefined : button.onClick }, { children: button.icon ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: button.icon, width: 24, height: 24, className: button.disabled ? "text-gray-500" : "text-black" })) : button.emoji ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-xl ".concat(button.disabled ? "opacity-50" : "hover:scale-110") }, { children: button.emoji }))) : null })));
};
exports.ClickableIcon = ClickableIcon;
//# sourceMappingURL=ClickableIcon.js.map