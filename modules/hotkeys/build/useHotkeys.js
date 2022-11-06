"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHotkeys = void 0;
var react_1 = require("react");
/**
 * hook that creates an eventlistener for keydown and cleans it up when needed
 */
var useHotkeys = function (
/**
 * when the callback needs to be reloaded
 */
dependencies, 
/**
 * callback that needs to launch on any keyboard event
 */
callback) {
    return (0, react_1.useEffect)(function () {
        if (typeof window === "undefined")
            return;
        window.addEventListener("keydown", callback);
        return function () { return window.removeEventListener("keydown", callback); };
    }, dependencies);
};
exports.useHotkeys = useHotkeys;
//# sourceMappingURL=useHotkeys.js.map