"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectStringToJson = void 0;
var stringToJson_1 = require("./stringToJson");
var js_util_1 = require("js-util");
/**
 * takes an object string and parses it to JSON
 *
 * Instead of requiring objects to be in JSON format, they can be in the following format:
 *
 * key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }
 *
 * NB: you can have objects in parameters of objects by surrounding the same syntax with `{` and `}`
 */
var objectStringToJson = function (string) {
    var chunks = string.split(",").map(function (x) { return x.trim(); });
    var keyValues = chunks.map(function (chunk) {
        var _a;
        var _b = chunk.split(":").map(function (x) { return x.trim(); }), key = _b[0], value = _b[1];
        return _a = {}, _a[key] = (0, stringToJson_1.stringToJson)(value), _a;
    });
    var mergedObject = (0, js_util_1.mergeObjectsArray)(keyValues);
    return mergedObject;
};
exports.objectStringToJson = objectStringToJson;
//# sourceMappingURL=objectStringToJson.js.map