"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSimpleJsonString = void 0;
/**
 * stringifies simple json things if the json is one of them, otherwise returns undefined
 */
var getSimpleJsonString = function (json) {
    if ([
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol",
        "undefined",
        // "function", // I don't think function is that simple, is it?
    ].includes(typeof json) ||
        json === null) {
        return String(json);
    }
};
exports.getSimpleJsonString = getSimpleJsonString;
//# sourceMappingURL=util.js.map