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
    return React.createElement("div", { style: sizeStyle, className: className });
};
exports.default = ActivityIndicator;
//# sourceMappingURL=ActivityIndicator.js.map