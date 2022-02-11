export var trimClassName = function (className) {
    var classNames = className.split(" ");
    var trimmedClassName = classNames
        .filter(function (c) { return !(c === "" || c.startsWith("focus:") || c.startsWith("shadow-")); })
        .join(" ");
    // console.log("trimClassName", { className, classNames, trimmedClassName });
    return trimmedClassName;
};
//# sourceMappingURL=trimClassName.native.js.map