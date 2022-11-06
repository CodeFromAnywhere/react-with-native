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
exports.BigButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var FancyLoader_1 = require("./FancyLoader");
var BigButton = function (button) {
    var colors = button.stylePreset === "cancel"
        ? "bg-red-800 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-400"
        : "bg-blue-800 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-400";
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "cursor-pointer ".concat(colors, " p-3 rounded-md border-2 border-black"), onClick: button.onClick }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row gap-6" }, { children: [button.isLoading ? ((0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, {})) : button.icon ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: button.icon, width: 24, height: 24 })) : button.emoji ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-xl hover:scale-110" }, { children: button.emoji }))) : button.component ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "h-7" }, { children: button.component() }))) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-xs text-white" }, { children: button.title }))] })) })));
};
exports.BigButton = BigButton;
//# sourceMappingURL=BigButton.js.map