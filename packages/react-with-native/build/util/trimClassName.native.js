"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimClassName = void 0;
var trimClassName = function (className) {
    var classNames = className.split(" ");
    var trimmedClassName = classNames
        .filter(function (c) { return !(c === "" || c.startsWith("focus:") || c.startsWith("shadow-")); })
        .join(" ");
    // console.log("trimClassName", { className, classNames, trimmedClassName });
    return trimmedClassName;
};
exports.trimClassName = trimClassName;
//# sourceMappingURL=trimClassName.native.js.map