"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenNestedObject=void 0;
/**
 * Flattens a nested object by returning an object that hasa the nested path as the key and the leaf as the value
 *
 * TODO: Finish, if needed. seems hard!
 */
var flattenNestedObject=function(e,t){Object.keys(e).map((function(s){var c=e[s];t&&t(c)}))};exports.flattenNestedObject=flattenNestedObject;
//# sourceMappingURL=flattenNestedObject.js.map