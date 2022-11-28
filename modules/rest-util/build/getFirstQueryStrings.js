"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFirstQueryStrings=void 0;
/**
 * Query keys can be string or string[] or undefined.
 *
 * This function takes only the first string if it's an array...
 */
var getFirstQueryStrings=function(r){return Object.keys(r).map((function(t){var e=r[t];return Array.isArray(e)?e[0]:e}))};exports.getFirstQueryStrings=getFirstQueryStrings;
//# sourceMappingURL=getFirstQueryStrings.js.map