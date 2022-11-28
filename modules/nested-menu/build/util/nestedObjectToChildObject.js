"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestedObjectToChildObject = void 0;
/**
 * if T is an object, provide __check as one of its properties, to make it possible to check that it's a leaf. This property will be omitted in the ChildObject array
 */
var nestedObjectToChildObject = function (
/**
 * if T is an object, provide __check to check that it's a leaf
 */
nestedObject, 
/**
 * Map the folder to T. You can omit queryPath, it will be overwritten
 */
mapFolderToT, stack) {
    if (stack === void 0) { stack = []; }
    var keys = Object.keys(nestedObject);
    var children = keys.map(function (key) {
        var t = mapFolderToT(nestedObject, key);
        var value = nestedObject[key];
        var isLeaf = typeof value !== "object" || !!value.__check;
        if (isLeaf) {
            var __check = value.__check, valueWithoutCheck = __rest(value, ["__check"]);
            return valueWithoutCheck;
        }
        var newStack = stack.concat(key);
        var queryPath = newStack.join("/");
        return __assign(__assign({}, t), { queryPath: queryPath, children: (0, exports.nestedObjectToChildObject)(value, mapFolderToT, newStack) });
    });
    return children;
};
exports.nestedObjectToChildObject = nestedObjectToChildObject;
//# sourceMappingURL=nestedObjectToChildObject.js.map