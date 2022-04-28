"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterClassName = void 0;
var filterClassName = function (className) {
    var classNames = className.split(" ");
    var trimmedClassName = classNames
        .filter(function (c) { return !(c === "" || c.startsWith("focus:") || c.startsWith("shadow-")); })
        .join(" ");
    // console.log("trimClassName", { className, classNames, trimmedClassName });
    return trimmedClassName;
};
exports.filterClassName = filterClassName;
//# sourceMappingURL=filterClassName.native.js.map