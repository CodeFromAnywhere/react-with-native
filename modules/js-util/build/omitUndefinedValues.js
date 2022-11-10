"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitUndefinedValues = void 0;
var omitUndefinedValues = function (object) {
    Object.keys(object).map(function (key) {
        var value = object[key];
        if (value === undefined) {
            delete object[key];
        }
    });
    return object;
};
exports.omitUndefinedValues = omitUndefinedValues;
//# sourceMappingURL=omitUndefinedValues.js.map