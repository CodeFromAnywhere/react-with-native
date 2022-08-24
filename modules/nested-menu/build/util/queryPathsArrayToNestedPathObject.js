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
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPathsArrayToNestedPathObject = exports.reduceQueryPathsRecursively = void 0;
var reduceQueryPathsRecursively = function (queryPaths, initialValue) {
    var nestedPathObject = queryPaths.reduce(function (nestedPathObject, queryPath) {
        var _a, _b;
        var parts = queryPath.split("/");
        var firstPart = parts[0];
        // Base case 1: if we already have it, skip it
        if (Object.keys(nestedPathObject).includes(firstPart))
            return nestedPathObject;
        // Base case 2: if it's a leave (last item), return it with value null
        if (parts.length === 1) {
            return __assign(__assign({}, nestedPathObject), (_a = {}, _a[firstPart] = null, _a));
        }
        // Recursion case: find all queryPaths starting with the same branch
        var queryPathsHere = queryPaths
            .filter(function (p) { return p.startsWith("".concat(firstPart, "/")); })
            .map(function (p) { return p.substring(firstPart.length + 1); });
        var newNestedPathObject = __assign(__assign({}, nestedPathObject), (_b = {}, _b[firstPart] = (0, exports.reduceQueryPathsRecursively)(queryPathsHere, {}), _b));
        return newNestedPathObject;
    }, initialValue);
    return nestedPathObject;
};
exports.reduceQueryPathsRecursively = reduceQueryPathsRecursively;
/**
 * Handy function to transform an array of querypaths into a nested menu, assuming you want to create a new sub-menu for every path
 */
var queryPathsArrayToNestedPathObject = function (queryPaths) {
    var nestedPathObject = (0, exports.reduceQueryPathsRecursively)(queryPaths, {});
    return nestedPathObject;
};
exports.queryPathsArrayToNestedPathObject = queryPathsArrayToNestedPathObject;
//# sourceMappingURL=queryPathsArrayToNestedPathObject.js.map