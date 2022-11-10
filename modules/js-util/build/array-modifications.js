"use strict";
/**
 Insert an array or item inside of an array before a certain index
 
 Example:

 ```ts

 const testArray = [1, 2, 3, 4, 5];
 const result = insertAt(testArray, [99, 100], 2);
 console.log({ testArray, result });

 ```
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
exports.putIndexAtIndex = exports.findLastIndex = exports.removeIndexFromArray = exports.insertAt = void 0;
var insertAt = function (array, items, 
/**
 *
 */
beforeIndex) {
    var itemsArray = Array.isArray(items) ? items : [items];
    // NB: slice makes copies
    var before = array.slice(0, beforeIndex);
    var after = array.slice(beforeIndex);
    return __spreadArray(__spreadArray(__spreadArray([], __read(before), false), __read(itemsArray), false), __read(after), false);
};
exports.insertAt = insertAt;
/**
 removes an index from an array

 example:
 
 ```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```
 */
var removeIndexFromArray = function (array, index) {
    var before = array.slice(0, index);
    var after = array.slice(index + 1);
    return __spreadArray(__spreadArray([], __read(before), false), __read(after), false);
};
exports.removeIndexFromArray = removeIndexFromArray;
/**
 * finds the last index of an array where a certain filter holds true
 */
var findLastIndex = function (array, findFn) {
    var _a;
    var lastIndex = (_a = array
        .map(function (item, index) { return ({ item: item, index: index }); })
        .filter(function (_a) {
        var item = _a.item;
        return findFn(item);
    })
        .pop()) === null || _a === void 0 ? void 0 : _a.index;
    return lastIndex;
};
exports.findLastIndex = findLastIndex;
/**
 * Takes an item from an index of an array and put it somewhere at another index
 */
var putIndexAtIndex = function (array, index, toIndex) {
    var item = array[index];
    var arrayWithoutIndex = (0, exports.removeIndexFromArray)(array, index);
    var changedArray = (0, exports.insertAt)(arrayWithoutIndex, item, toIndex);
    return changedArray;
};
exports.putIndexAtIndex = putIndexAtIndex;
//# sourceMappingURL=array-modifications.js.map