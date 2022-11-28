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
t,r){void 0===t&&(t=[]);var n=null==r?void 0:r.target,s=null==r?void 0:r.getHref;
// base case
if(e)return Object.keys(e).map((function(o){var u=t.concat(o),c=u.join("/"),d=(0,exports.nestedPathObjectToNestedMenuRecursive)(e[o],u,r),i=s?s(c):c;return{
// NB: if there is no path, the title  of the page should be "home"
title:0===o.length?"Home":o,href:i,target:n,children:d}}))};exports.nestedPathObjectToNestedMenuRecursive=nestedPathObjectToNestedMenuRecursive;
//# sourceMappingURL=nestedPathObjectToNestedMenu.js.map