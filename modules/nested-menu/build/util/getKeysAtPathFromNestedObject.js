"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getKeysAtPathFromNestedObject=void 0;
/**
 * Gets all children keys of a nested object at a certain (nested) location in the nested object
 *
 * `nestedObject` should extend the `NestedObject`.
 *
 * The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.
 */
var getKeysAtPathFromNestedObject=function(//NestedObject<null>
e,t){var r=t.split("/").reduce((function(e,t){
// basecase should never happen
if(e)return e[t]}),e);return r?Object.keys(r):[]};exports.getKeysAtPathFromNestedObject=getKeysAtPathFromNestedObject;
//# sourceMappingURL=getKeysAtPathFromNestedObject.js.map