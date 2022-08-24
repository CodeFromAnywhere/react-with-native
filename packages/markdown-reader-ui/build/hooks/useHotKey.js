"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHotKey = void 0;
var react_1 = require("react");
/**
 * hook that creates an eventlistener for keydown and cleans it up when needed
 */
var useHotKey = function (dependencies, callback) {
    return (0, react_1.useEffect)(function () {
        if (typeof window === "undefined")
            return;
        window.addEventListener("keydown", callback);
        return function () { return window.removeEventListener("keydown", callback); };
    }, dependencies);
};
exports.useHotKey = useHotKey;
//# sourceMappingURL=useHotKey.js.map