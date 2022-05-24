"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimClassName = void 0;
var trimClassName = function (className) {
    var classNames = className.split(" ");
    var trimmedClassName = classNames
        .filter(function (c) {
        return !((c === "" ||
            c.startsWith("focus:") ||
            c.startsWith("hover:") ||
            c.startsWith("shadow-") ||
            c.startsWith("cursor-") ||
            c === "block" ||
            c === "h-screen" ||
            c === "w-screen" ||
            c === "undefined" ||
            c === "select-none") // block crashes android
        );
    })
        .join(" ");
    // console.log("trimClassName", { className, classNames, trimmedClassName });
    return trimmedClassName;
};
exports.trimClassName = trimClassName;
//# sourceMappingURL=trimClassName.native.js.map