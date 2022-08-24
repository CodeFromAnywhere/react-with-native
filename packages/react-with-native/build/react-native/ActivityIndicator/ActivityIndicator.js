"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityIndicator = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ActivityIndicator = function (props) {
    var sizeClass = typeof props.size === "number"
        ? ""
        : props.size === "large"
            ? "w-16 h-16"
            : "w-6 h-6";
    var sizeStyle = typeof props.size === "number"
        ? { width: props.size, height: props.size }
        : undefined;
    var borderClass = props.color === "white"
        ? "border-white dark:border-gray-900"
        : "border-gray-900 dark:border-white";
    var className = "".concat(sizeClass, " border-b-2 ").concat(borderClass, " rounded-full animate-spin ").concat(props.className || "");
    return (0, jsx_runtime_1.jsx)("div", { style: sizeStyle, className: className });
};
exports.ActivityIndicator = ActivityIndicator;
//# sourceMappingURL=ActivityIndicator.js.map