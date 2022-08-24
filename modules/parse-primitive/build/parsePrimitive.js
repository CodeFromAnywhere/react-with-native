"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parsePrimitive=void 0;var parsePrimitive=function(e){
// NB: failsafes
if(void 0!==e){if(null===e)return null;if("true"===e)return!0;if("false"===e)return!1;if("null"===e)return null;if("undefined"!==e)
// NB: an empty string will count as 0 in the next statement
return""===e?"":isNaN(Number(e))?e.startsWith('"')&&e.endsWith('"')?e.substring(1,e.length-1):e:Number(e)}};exports.parsePrimitive=parsePrimitive;
//# sourceMappingURL=parsePrimitive.js.map