"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenMarkedTokenRecursive=void 0;
/**
 * Recursively flatten a marked token and return something if a find function is met
 */
var flattenMarkedTokenRecursive=function(e,t){if(t(e))return[e];if("table"===e.type){var r=e.header.map((function(e){return e.tokens.map((function(e){return(0,exports.flattenMarkedTokenRecursive)(e,t)})).flat()})).flat(),n=e.rows.map((function(e){var r=e.map((function(e){return e.tokens.map((function(e){return(0,exports.flattenMarkedTokenRecursive)(e,t)})).flat()})).flat();return r})).flat();return[r,n].flat()}if("list"===e.type){var a=e.items.map((function(e){return e.tokens.map((function(e){return(0,exports.flattenMarkedTokenRecursive)(e,t)})).flat()})).flat();return a}return"del"===e.type||"em"===e.type||"heading"===e.type||"link"===e.type||"paragraph"===e.type||"strong"===e.type?a=e.tokens.map((function(e){return(0,exports.flattenMarkedTokenRecursive)(e,t)})).flat():[]};exports.flattenMarkedTokenRecursive=flattenMarkedTokenRecursive;
//# sourceMappingURL=flattenMarkedTokenRecursive.js.map