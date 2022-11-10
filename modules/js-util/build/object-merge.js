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
exports.mergeObjects = exports.mergeObjectParameters = void 0;
var omitUndefinedValues_1 = require("./omitUndefinedValues");
/**
 * merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.
 *
 * In short: merges two objects, for every parameter, use the default as a fallback
 *
 * DEPRECATED: in favor of mergeObjects
 */
var mergeObjectParameters = function (config, defaults) {
    var parameters = Object.keys(__assign(__assign({}, config), defaults));
    var mergedConfig = parameters.reduce(function (getConfig, p) {
        var _a;
        return (__assign(__assign({}, getConfig), (_a = {}, _a[p] = (config === null || config === void 0 ? void 0 : config[p]) || (defaults === null || defaults === void 0 ? void 0 : defaults[p]), _a)));
    }, {});
    return mergedConfig;
};
exports.mergeObjectParameters = mergeObjectParameters;
/**
 * merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.
 *
 * Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely
 *
 * Please note that you can provide partial objects as well, as long as you are sure that the final object is full, the type interface is correct.
 *
 * Please note that if a latter object has a key which holds "undefined", it will NOT overwrite it. Anything else WILL
 */
var mergeObjects = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (objects.length === 0)
        return;
    var firstObject = objects[0];
    var mergedObject = objects.reduce(function (previous, current) {
        if (!current)
            return previous;
        var currentWithoutUndefined = (0, omitUndefinedValues_1.omitUndefinedValues)(current);
        var newObject = !previous
            ? current
            : __assign(__assign({}, previous), currentWithoutUndefined);
        return newObject;
        // NB: we cannot guarantee this based on the input!
    }, firstObject);
    return mergedObject;
};
exports.mergeObjects = mergeObjects;
//# sourceMappingURL=object-merge.js.map