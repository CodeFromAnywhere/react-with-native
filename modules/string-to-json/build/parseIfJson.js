"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIfJson = void 0;
/**
 * if it's a string with a parsable JSON inside, parse it and return the object/array
 */
var parseIfJson = function (string) {
    try {
        return JSON.parse(string);
    }
    catch (e) {
        return string;
    }
};
exports.parseIfJson = parseIfJson;
//# sourceMappingURL=parseIfJson.js.map