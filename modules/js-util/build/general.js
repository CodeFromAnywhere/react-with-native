#!/usr/bin/env node
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
exports.notEmpty = exports.sumAllKeys = exports.sumObjectParameters = exports.getObjectFromParamsString = exports.getSubsetFromObject = exports.takeFirst = exports.makeArray = exports.onlyUnique2 = exports.onlyUnique = exports.isAllTrue = exports.groupByKey = exports.createEnum = exports.apply = exports.sum = exports.noEmptyString = void 0;
var mergeObjectsArray_1 = require("./mergeObjectsArray");
var noEmptyString = function (input) {
    if (input === "")
        return undefined;
    return input;
};
exports.noEmptyString = noEmptyString;
var sum = function (items) {
    var total = items.reduce(function (total, num) {
        if (typeof num !== "number") {
            console.log("WTF", num);
        }
        return total + num;
    }, 0);
    return total;
};
exports.sum = sum;
// sum([1, 2, 3]);
/**
 * function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.
 */
var apply = function (functions, value) {
    return functions.reduce(function (val, fn) {
        return fn(val);
    }, value);
};
exports.apply = apply;
/**
 * creates an enum object from a readonly const array so you don't have to
 * ------
 * const taskNames = ["a","b","c"] as const;
 * type TaskNames = typeof taskNames[number];
 * const enummm = createEnum(taskNames);
 * (value of enummm: { a: "a", b: "b", c: "c" })
 */
var createEnum = function (array) {
    return array.reduce(function (previous, current) {
        var _a;
        return __assign(__assign({}, previous), (_a = {}, _a[current] = current, _a));
    }, {});
};
exports.createEnum = createEnum;
/**
 * key should be of type string!
 *
 * input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
 * groupByKey(input, "path")
 * ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}
 */
var groupByKey = function (array, key) {
    return array.reduce(function (all, item) {
        var newAll = all;
        var keyToUse = item[key];
        var already = newAll[keyToUse];
        if (!already) {
            // create a new parameter in the group-object
            newAll[item[key]] = [item];
        }
        else {
            // push to existing group-object parameter
            newAll[item[key]].push(item);
        }
        return newAll;
    }, {});
};
exports.groupByKey = groupByKey;
/**
 * checks if all items in an array are true
 */
var isAllTrue = function (array) {
    return !array.find(function (x) { return !x; });
};
exports.isAllTrue = isAllTrue;
/**
 * DEPRECATED: should refactor everything to use onlyUnique2 and call it onlyUnique again
 *
 * to be used as a filter. removes duplicates
 */
function onlyUnique(value, index, self) {
    return self.findIndex(function (v) { return v === value; }) === index;
}
exports.onlyUnique = onlyUnique;
/**
 * function that returns a filter function that can be used as a filter for any array. removes duplicates.
 *
 * optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well
 *
 *
 */
var onlyUnique2 = function (isEqualFn) {
    return function (value, index, self) {
        return (self.findIndex(function (v) { return (isEqualFn ? isEqualFn(v, value) : v === value); }) ===
            index);
    };
};
exports.onlyUnique2 = onlyUnique2;
/**
 * if something is not an array, returns it as the first element of an array
 *
 * if the input is undefined, an empty array will be returned.
 *
 * NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.
 */
var makeArray = function () {
    var arrayOrNotArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrayOrNotArray[_i] = arguments[_i];
    }
    return arrayOrNotArray
        .map(function (arrayOrNot) {
        var array = arrayOrNot
            ? Array.isArray(arrayOrNot)
                ? arrayOrNot
                : [arrayOrNot]
            : [];
        return array;
    })
        .flat();
};
exports.makeArray = makeArray;
/**
 * takes any type T or an array of T and returns T or the first of the array (which is T)
 */
var takeFirst = function (arrayOrNot) {
    return (0, exports.makeArray)(arrayOrNot)[0];
};
exports.takeFirst = takeFirst;
/**
 * takes an object and a subset of its keys and returns a subset of that object
 *
 * input: { x: "a", y: "b", z: "c" } and ["x"]
 *
 * output: { x: "a" }
 */
var getSubsetFromObject = function (object, keys) {
    var subsetObject = keys.reduce(function (obj, key) {
        var _a;
        return __assign(__assign({}, obj), (_a = {}, _a[key] = object[key], _a));
    }, {});
    return subsetObject;
};
exports.getSubsetFromObject = getSubsetFromObject;
/**
 * useful for cli's that only take strings. This creates an object from a string
 *
 * input: "x:a, y:b, z:c"
 * output: { x: "a", y: "b", z: "c" }
 *
 * TODO: would be nice if we can validate this string immediately using a JSON SCHEMA
 */
var getObjectFromParamsString = function (paramsString) {
    return (0, mergeObjectsArray_1.mergeObjectsArray)(paramsString
        .split(",")
        .map(function (x) { return x.trim().split(":"); })
        .map(function (pair) {
        var _a;
        return pair[0] && pair[1] ? (_a = {}, _a[pair[0].trim()] = pair[1], _a) : null;
    })
        .filter(notEmpty));
};
exports.getObjectFromParamsString = getObjectFromParamsString;
/** sums all parameters in two objects together */
var sumObjectParameters = function (object1, object2) {
    var objectKeys = Object.keys(object1);
    var summedObject = (0, mergeObjectsArray_1.mergeObjectsArray)(objectKeys.map(function (key) {
        var _a;
        var summedObjectPart = (_a = {}, _a[key] = object1[key] + object2[key], _a);
        return summedObjectPart;
    }));
    // NB: too bad we still need `as TObject` here. I would love to learn how to prevent that
    return summedObject;
};
exports.sumObjectParameters = sumObjectParameters;
/**
 * sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined
 */
var sumAllKeys = function (objectArray, keys) {
    var sumObject = objectArray.reduce(function (total, item) {
        // NB: not needed normally, but there seems to be some corrupt data here and there
        if (!item)
            return total;
        var newTotal = (0, mergeObjectsArray_1.mergeObjectsArray)(keys.map(function (key) {
            var _a;
            var value1 = total ? total[key] || 0 : 0;
            var value2 = (item === null || item === void 0 ? void 0 : item[key]) || 0;
            var sum = (!total || total[key] === undefined) && item[key] === undefined
                ? undefined
                : value1 + value2;
            return _a = {}, _a[key] = sum, _a;
        }));
        return newTotal;
    }, null);
    return sumObject;
};
exports.sumAllKeys = sumAllKeys;
/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */
function notEmpty(value) {
    return value !== null && value !== undefined;
}
exports.notEmpty = notEmpty;
//# sourceMappingURL=general.js.map