"use strict";
/**
 * TODO: find a way to return the correct type interface
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObjectsArray = void 0;
var mergeObjectsArray = function (objectsArray) {
    var result = objectsArray.reduce(function (previous, current) {
        return __assign(__assign({}, previous), current);
    }, {});
    return result;
};
exports.mergeObjectsArray = mergeObjectsArray;
//# sourceMappingURL=mergeObjectsArray.js.map