"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.quotedOrNot=exports.getFrontmatterValueString=exports.stringifyNewlines=void 0;var stringifyNewlines=function(t){return t.replaceAll("\n","\\n")};exports.stringifyNewlines=stringifyNewlines;var getFrontmatterValueString=function(t){return void 0===t?null:null===t?"null":"number"==typeof t||"boolean"==typeof t||"boolean"==typeof t?String(t):Array.isArray(t)?t.map(exports.quotedOrNot).map(exports.stringifyNewlines).join(", "):"string"==typeof t?(0,exports.stringifyNewlines)((0,exports.quotedOrNot)(t)):
// NB: according to current support this should never happen
"object"==typeof t?'"'.concat(JSON.stringify(t),'"'):null};exports.getFrontmatterValueString=getFrontmatterValueString;
/**
 * For now, simply quote a string if it contains commas
 *
 * There are probably more edgecases that need to be fixed here
 */
var quotedOrNot=function(t){return(null==t?void 0:t.includes(","))?'"'.concat(t,'"'):t};exports.quotedOrNot=quotedOrNot;
//# sourceMappingURL=general.js.map