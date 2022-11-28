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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestifyQueryPathObjectRecursive = void 0;
var nestifyQueryPathObjectRecursive = function (queryPathObjects, level) {
    console.log({ level: level });
    var nestedPathObject = queryPathObjects.reduce(function (previous, current, currentIndex, queryPathObjects) {
        var queryPathRemainder = current.queryPathRemainder || current.queryPath;
        var parts = queryPathRemainder.split("/");
        var firstPart = parts.find(function (x) { return x.length !== 0; });
        var hasFirstPartAlready = !!previous.find(function (x) { return x.queryPathChunk === firstPart; });
        if (hasFirstPartAlready) {
            // Base case 1: if we already have it, skip it, go to the next
            return previous;
        }
        var children = queryPathObjects
            // not myself!
            .filter(function (x) { return x.queryPath !== current.queryPath; })
            .filter(function (x) {
            var queryPath = x.queryPathRemainder || x.queryPath;
            var isMatch = queryPath.startsWith(firstPart + "/");
            return isMatch;
        })
            .map(function (x) {
            // everything after the first part
            var queryPathRemainder = x.queryPath.split(firstPart)[1];
            return __assign(__assign({}, x), { queryPathRemainder: queryPathRemainder });
        });
        var newNestedQueryPathObject = __assign(__assign({}, current), { 
            // queryPath: folderQueryPath,
            children: children.length === 0
                ? undefined
                : __spreadArray([
                    current
                ], (0, exports.nestifyQueryPathObjectRecursive)(children, (level || 0) + 1), true), queryPathChunk: firstPart });
        // add the new one to the array
        return __spreadArray(__spreadArray([], previous, true), [newNestedQueryPathObject], false);
    }, []);
    return nestedPathObject;
};
exports.nestifyQueryPathObjectRecursive = nestifyQueryPathObjectRecursive;
//# sourceMappingURL=nestifyQueryPathObjectRecursive.js.map