"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHotkey = void 0;
var useHotkeys_1 = require("./useHotkeys");
/**
 * hook that creates an eventlistener for keydown and cleans it up when needed
 */
var useHotkey = function (
/**
 * callback that needs to launch on any keyboard event
 */
isRightKey, 
/**
 * function to be executed when hotkey occurs
 */
callback, 
/**
 * when the callback needs to be reloaded
 */
dependencies) {
    var fullCallback = function (keyboardEvent) {
        if (isRightKey(keyboardEvent)) {
            callback();
        }
    };
    return (0, useHotkeys_1.useHotkeys)(dependencies, fullCallback);
};
exports.useHotkey = useHotkey;
//# sourceMappingURL=useHotkey.js.map