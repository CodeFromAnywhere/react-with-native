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
exports.reduceQueryPathsRecursively = void 0;
var reduceQueryPathsRecursively = function (queryPaths, initialValue) {
    var nestedPathObject = queryPaths.reduce(function (nestedPathObject, queryPath) {
        var _a, _b;
        var parts = queryPath.split("/");
        var firstPart = parts[0];
        // Base case 1: if we already have it, skip it
        if (Object.keys(nestedPathObject).includes(firstPart)) {
            return nestedPathObject;
        }
        var queryPathsHere = queryPaths
            .filter(function (p) { return p.startsWith("".concat(firstPart, "/")); })
            .map(function (p) { return p.substring(firstPart.length + 1); });
        // Base case 2: if it's a leaf (last item), and it has NO children, return it with value null
        if (parts.length === 1 && queryPathsHere.length === 0) {
            return __assign(__assign({}, nestedPathObject), (_a = {}, _a[firstPart] = null, _a));
        }
        // Recursion case: find all queryPaths starting with the same branch
        var newNestedPathObject = __assign(__assign({}, nestedPathObject), (_b = {}, _b[firstPart] = (0, exports.reduceQueryPathsRecursively)(queryPathsHere, {}), _b));
        return newNestedPathObject;
    }, initialValue);
    return nestedPathObject;
};
exports.reduceQueryPathsRecursively = reduceQueryPathsRecursively;
//# sourceMappingURL=reduceQueryPathsRecursively.js.map