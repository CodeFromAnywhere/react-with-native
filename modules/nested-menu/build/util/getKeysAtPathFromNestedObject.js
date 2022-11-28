"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeysAtPathFromNestedObject = void 0;
/**
 * Gets all children keys of a nested object at a certain (nested) location in the nested object
 *
 * `nestedObject` should extend the `NestedObject`.
 *
 * The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.
 */
var getKeysAtPathFromNestedObject = function (//NestedObject<null>
nestedObject, objectPath) {
    var pathParts = objectPath.split("/");
    var objectAtLocation = pathParts.reduce(function (objectSubset, part) {
        // basecase should never happen
        if (!objectSubset)
            return;
        var subset = objectSubset[part];
        return subset;
    }, nestedObject);
    var children = objectAtLocation ? Object.keys(objectAtLocation) : [];
    return children;
};
exports.getKeysAtPathFromNestedObject = getKeysAtPathFromNestedObject;
//# sourceMappingURL=getKeysAtPathFromNestedObject.js.map