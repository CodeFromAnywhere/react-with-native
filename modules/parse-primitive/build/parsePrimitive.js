"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parsePrimitive=exports.parsePrimitiveBoolean=exports.parsePrimitiveString=exports.parsePrimitiveArray=void 0;var parsePrimitiveArray=function(r){return r.split(",").map((function(r){return r.trim()}))};exports.parsePrimitiveArray=parsePrimitiveArray;var parsePrimitiveString=function(r){return r.startsWith('"')&&r.endsWith('"')?r.substring(1,r.length-1):" "===r.charAt(0)?r.slice(1):r};exports.parsePrimitiveString=parsePrimitiveString;var parsePrimitiveBoolean=function(r){return"true"===r.trim()||"false"!==r.trim()&&void 0};exports.parsePrimitiveBoolean=parsePrimitiveBoolean;
/**
 * parses a string into the value it should be
 *
 * if you provide a `simplifiedSchema`, that will be used to parse according to the shape of the schema
 */
var parsePrimitive=function(r,i){if(i){if("boolean"===i.type)return(0,exports.parsePrimitiveBoolean)(r)||!1;if("null"===i.type)return null;if("number"===i.type)return isNaN(Number(r))?void 0:Number(r);if("string"===i.type)return(0,exports.parsePrimitiveString)(r);if("array"===i.type)return(0,exports.parsePrimitiveArray)(r)}
// NB: failsafes
if(void 0!==r){if(null===r)return null;var e=(0,exports.parsePrimitiveBoolean)(r);if(void 0!==e)return e;if("true"===r)return!0;if("false"===r)return!1;if("null"===r)return null;if("undefined"!==r)
// NB: an empty string will count as 0 in the next statement
return""===r?"":isNaN(Number(r))?(0,exports.parsePrimitiveString)(r):Number(r)}};exports.parsePrimitive=parsePrimitive;
//# sourceMappingURL=parsePrimitive.js.map