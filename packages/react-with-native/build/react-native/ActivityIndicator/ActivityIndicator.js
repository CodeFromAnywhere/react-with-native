import * as React from "react";
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
export default ActivityIndicator;
//# sourceMappingURL=ActivityIndicator.js.map