"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getParentSlug=void 0;
/**
 * get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)
 *
 * can be undefined if the item has no parent
 */
var getParentSlug=function(e){return e.categoryStackCalculated[e.categoryStackCalculated.length-1]};exports.getParentSlug=getParentSlug;
//# sourceMappingURL=getParentSlug.js.map