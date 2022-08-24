#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stringToJson=exports.parsePrimitiveJson=void 0;var objectStringToJson_1=require("./objectStringToJson"),parsePrimitiveJson=function(e,r){return"null"!==e||r?"undefined"!==e||r?!("true"!==e||r&&"boolean"!==r)||!!("false"!==e||r&&"boolean"!==r)&&(isNaN(Number(e))||r&&"number"!==r?e:Number(e)):
// @ts-ignore
void 0:null};
/**
 * parses a string to a string, number, boolean, null or undefined.
 *
 * optionally you can chooose to force a type...
 *
 * TODO: figure out how I can do this without ts-ignores
 */exports.parsePrimitiveJson=parsePrimitiveJson;
/**
 * takes any string, and parses it to JSON
 *
 * if you provide (nested) objects, make sure to use the following format:
 *
 * key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }
 */
var stringToJson=function(e,r){var t=e.startsWith("{")&&e.endsWith("}");if(t||r){
// Objects
// NB: remove first and last character
var s=t?e.slice(1,e.length-2):e;return(0,objectStringToJson_1.objectStringToJson)(s)}return e.startsWith("[")&&e.endsWith("]")?e.slice(1,e.length-2).split(",").map((function(e){return(0,exports.stringToJson)(e)})):(0,exports.parsePrimitiveJson)(e)};exports.stringToJson=stringToJson;var test=(0,exports.parsePrimitiveJson)("true","number");
//# sourceMappingURL=stringToJson.js.map