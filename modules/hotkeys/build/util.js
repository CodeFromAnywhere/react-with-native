"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAltO = exports.isAltW = exports.isAltN = exports.isCtrlP = exports.isCtrlS = exports.isCtrlBacktick = exports.isCtrlSpace = exports.isAltB = void 0;
/**
 * ⎇ B
 */
var isAltB = function (keyboardEvent) {
    var altKey = keyboardEvent.altKey, code = keyboardEvent.code;
    return altKey && code === "KeyB";
};
exports.isAltB = isAltB;
/**
 * ^ `
 */
var isCtrlSpace = function (keyboardEvent) {
    var code = keyboardEvent.code, ctrlKey = keyboardEvent.ctrlKey;
    return ctrlKey && code === "Space";
};
exports.isCtrlSpace = isCtrlSpace;
/**
 * ^ `
 */
var isCtrlBacktick = function (keyboardEvent) {
    var ctrlKey = keyboardEvent.ctrlKey, code = keyboardEvent.code;
    return ctrlKey && code === "Backquote";
};
exports.isCtrlBacktick = isCtrlBacktick;
/**
 * ^ S
 */
var isCtrlS = function (keyboardEvent) {
    var ctrlKey = keyboardEvent.ctrlKey, code = keyboardEvent.code;
    return ctrlKey && code === "KeyS";
};
exports.isCtrlS = isCtrlS;
/**
 * ^ P
 */
var isCtrlP = function (keyboardEvent) {
    var ctrlKey = keyboardEvent.ctrlKey, code = keyboardEvent.code;
    return ctrlKey && code === "KeyP";
};
exports.isCtrlP = isCtrlP;
var isAltN = function (keyboardEvent) {
    var altKey = keyboardEvent.altKey, code = keyboardEvent.code;
    return altKey && code === "KeyN";
};
exports.isAltN = isAltN;
var isAltW = function (keyboardEvent) {
    var altKey = keyboardEvent.altKey, code = keyboardEvent.code;
    return altKey && code === "KeyW";
};
exports.isAltW = isAltW;
var isAltO = function (keyboardEvent) {
    var altKey = keyboardEvent.altKey, code = keyboardEvent.code;
    return altKey && code === "KeyO";
};
exports.isAltO = isAltO;
//# sourceMappingURL=util.js.map