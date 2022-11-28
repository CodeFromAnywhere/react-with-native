#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToJson = exports.parsePrimitiveJson = void 0;
var objectStringToJson_1 = require("./objectStringToJson");
/**
 * parses a string to a string, number, boolean, null or undefined.
 *
 * optionally you can chooose to force a type...
 *
 * TODO: figure out how I can do this without ts-ignores
 */
var parsePrimitiveJson = function (value, forceType) {
    if (value === "null" && !forceType) {
        // @ts-ignore
        return null;
    }
    else if (value === "undefined" && !forceType) {
        // @ts-ignore
        return undefined;
    }
    else if (value === "true" && (!forceType || forceType === "boolean")) {
        // @ts-ignore
        return true;
    }
    else if (value === "false" && (!forceType || forceType === "boolean")) {
        // @ts-ignore
        return false;
    }
    else if (!isNaN(Number(value)) && (!forceType || forceType === "number")) {
        // NB: do this after true and false, because they also cast to numbers
        // @ts-ignore
        return Number(value);
    }
    else {
        // all that's left is a string
        // @ts-ignore
        return value;
    }
};
exports.parsePrimitiveJson = parsePrimitiveJson;
/**
 * takes any string, and parses it to JSON
 *
 * if you provide (nested) objects, make sure to use the following format:
 *
 * key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }
 */
var stringToJson = function (value, isObject) {
    var seemsObject = value.startsWith("{") && value.endsWith("}");
    if (seemsObject || isObject) {
        // Objects
        // NB: remove first and last character
        var objectString = seemsObject ? value.slice(1, value.length - 2) : value;
        return (0, objectStringToJson_1.objectStringToJson)(objectString);
    }
    else if (value.startsWith("[") && value.endsWith("]")) {
        // Arrays
        // NB: remove first and last character
        var arrayString = value.slice(1, value.length - 2);
        var chunkStrings = arrayString.split(",");
        var chunks = chunkStrings.map(function (string) { return (0, exports.stringToJson)(string); });
        return chunks;
    }
    else {
        return (0, exports.parsePrimitiveJson)(value);
    }
};
exports.stringToJson = stringToJson;
var test = (0, exports.parsePrimitiveJson)("true", "number");
//# sourceMappingURL=stringToJson.js.map