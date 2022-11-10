"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMappedObject = void 0;
var mergeObjectsArray_1 = require("./mergeObjectsArray");
/**
 * Creates a `MappedObject` of an array of any type. `MappedObject`s are great for increasing efficiency to get an item from an array. Especially useful when finds are needed on a specific key match for huge arrays. Instead of finding on the array you can simply get the right property from this object.
 *
 * NB: Don't use this inside of render functions, it's a very slow function, the whole idea is that this makes it faster, so just do it once!
 */
var createMappedObject = function (array, 
/**
 * key to make the map from. Must be unique or it could be overwritten. must be a string
 */
mapKey) {
    var mappedObject = (0, mergeObjectsArray_1.mergeObjectsArray)(array.map(function (item) {
        var _a;
        var key = item[mapKey];
        return _a = {},
            _a[key] = item,
            _a;
    }));
    return mappedObject;
};
exports.createMappedObject = createMappedObject;
//# sourceMappingURL=createMappedObject.js.map