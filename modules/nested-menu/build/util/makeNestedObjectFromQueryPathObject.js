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
exports.makeNestedObjectFromQueryPathObject = void 0;
var makeNestedObjectFromQueryPathObject = function (objectArray, initialValue) {
    // copy queryPath into chunk
    var reducableObjectArray = objectArray.map(function (x) { return (__assign(__assign({}, x), { __chunk: x.__chunk || x.queryPath })); });
    var nestedPathObject = reducableObjectArray.reduce(function (previous, current) {
        var _a, _b;
        var parts = current.__chunk.split("/");
        var firstPart = parts[0];
        // Base case 1: if we already have it, skip it
        if (Object.keys(previous).includes(firstPart)) {
            return previous;
        }
        var queryPathsHere = reducableObjectArray
            .filter(function (p) { return p.__chunk.startsWith("".concat(firstPart, "/")); })
            .map(function (p) {
            return __assign(__assign({}, p), { __chunk: p.__chunk.substring(firstPart.length + 1) });
        });
        // Base case 2: if it's a leaf (last item), and it has NO children, return it with its own value
        if (parts.length === 1 && queryPathsHere.length === 0) {
            var leaf = __assign(__assign({}, previous), (_a = {}, _a[firstPart] = current, _a));
            return leaf;
        }
        // Recursion case: find all queryPaths starting with the same branch
        var newNestedPathObject = __assign(__assign({}, previous), (_b = {}, _b[firstPart] = (0, exports.makeNestedObjectFromQueryPathObject)(queryPathsHere, {}), _b));
        return newNestedPathObject;
    }, initialValue);
    return nestedPathObject;
};
exports.makeNestedObjectFromQueryPathObject = makeNestedObjectFromQueryPathObject;
//# sourceMappingURL=makeNestedObjectFromQueryPathObject.js.map