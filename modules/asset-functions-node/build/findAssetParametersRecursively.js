"use strict";
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
exports.findAssetParametersRecursively = void 0;
var js_util_1 = require("js-util");
var name_conventions_1 = require("name-conventions");
/**
 * Recursively finds all asset parameters in an object (for example in a database model item)
 */
var findAssetParametersRecursively = function (object, stack) {
    if (!object)
        return [];
    var result = Object.keys(object)
        .map(function (objectProperty) {
        var value = object[objectProperty];
        var assetInputType = (0, name_conventions_1.getAssetInputType)(objectProperty);
        if (assetInputType) {
            return [
                {
                    assetInputType: assetInputType,
                    parameterName: objectProperty,
                    stack: stack,
                },
            ];
        }
        if (typeof value === "object") {
            var newStack = stack ? __spreadArray(__spreadArray([], stack, true), [objectProperty], false) : [objectProperty];
            return (0, exports.findAssetParametersRecursively)(value, newStack);
        }
    })
        .filter(js_util_1.notEmpty)
        .flat();
    return result;
};
exports.findAssetParametersRecursively = findAssetParametersRecursively;
//# sourceMappingURL=findAssetParametersRecursively.js.map