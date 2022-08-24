"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.nestedPathObjectToNestedMenuRecursive=void 0;
/**
 * Transform a nested path object into a nested menu (MenuType), recursively
 */
var nestedPathObjectToNestedMenuRecursive=function(
/**
 * your nested path object that you want to create a menu for
 */
e,
/**
 * used for recursion to get the final url (defaults to empty array)
 */
t){if(void 0===t&&(t=[]),e)return Object.keys(e).map((function(s){var n=t.concat(s);return{title:s,href:n.join("/"),children:(0,exports.nestedPathObjectToNestedMenuRecursive)(e[s],n),showChildren:!0}}))};exports.nestedPathObjectToNestedMenuRecursive=nestedPathObjectToNestedMenuRecursive;
//# sourceMappingURL=nestedPathObjectToNestedMenu.js.map