"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePrimitive = exports.parsePrimitiveBoolean = exports.parsePrimitiveString = exports.parsePrimitiveArray = void 0;
var parsePrimitiveArray = function (string) {
    var result = string.split(",").map(function (x) { return x.trim(); });
    return result;
};
exports.parsePrimitiveArray = parsePrimitiveArray;
var parsePrimitiveString = function (string) {
    if (string.startsWith('"') && string.endsWith('"')) {
        return string.substring(1, string.length - 1);
    }
    if (string.charAt(0) === " ")
        return string.slice(1);
    return string;
};
exports.parsePrimitiveString = parsePrimitiveString;
var parsePrimitiveBoolean = function (string) {
    if (string.trim() === "true")
        return true;
    if (string.trim() === "false")
        return false;
};
exports.parsePrimitiveBoolean = parsePrimitiveBoolean;
/**
 * parses a string into the value it should be
 *
 * if you provide a `simplifiedSchema`, that will be used to parse according to the shape of the schema
 */
var parsePrimitive = function (string, simplifiedSchema) {
    if (simplifiedSchema) {
        if (simplifiedSchema.type === "boolean") {
            var parsedBoolean_1 = (0, exports.parsePrimitiveBoolean)(string);
            return parsedBoolean_1 || false;
        }
        if (simplifiedSchema.type === "null") {
            return null;
        }
        if (simplifiedSchema.type === "number") {
            return !isNaN(Number(string)) ? Number(string) : undefined;
        }
        if (simplifiedSchema.type === "string") {
            return (0, exports.parsePrimitiveString)(string);
        }
        if (simplifiedSchema.type === "array") {
            return (0, exports.parsePrimitiveArray)(string);
        }
    }
    // NB: failsafes
    if (string === undefined)
        return undefined;
    if (string === null)
        return null;
    var parsedBoolean = (0, exports.parsePrimitiveBoolean)(string);
    if (parsedBoolean !== undefined)
        return parsedBoolean;
    if (string === "true")
        return true;
    if (string === "false")
        return false;
    if (string === "null")
        return null;
    if (string === "undefined")
        return undefined;
    // NB: an empty string will count as 0 in the next statement
    if (string === "")
        return "";
    if (!isNaN(Number(string)))
        return Number(string);
    return (0, exports.parsePrimitiveString)(string);
};
exports.parsePrimitive = parsePrimitive;
//# sourceMappingURL=parsePrimitive.js.map