"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProperties=exports.getRefLink=exports.getSchema=exports.getSchemaItems=exports.makeSingular=void 0;var js_util_1=require("js-util"),makeSingular=function(e){return"es"===e.slice(-2)?e.slice(0,e.length-2):"s"===e.slice(-1)?e.slice(0,e.length-1):e};
/**
 * makes a word singular (only english)
 *
 * e.g.:
 * - indexes becomes index
 * - words becomes word
 *
 * NB: not well tested
 */exports.makeSingular=makeSingular;
//==========
var getSchemaItems=function(e){return(0,js_util_1.makeArray)(null==e?void 0:e.items).map(exports.getSchema).filter(js_util_1.notEmpty)};exports.getSchemaItems=getSchemaItems;
/**
 * parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it
 */
var getSchema=function(e){return"object"!=typeof e?void 0:e};exports.getSchema=getSchema;
/**
 * gets the $ref from a schema and parses the interface name from it
 */
var getRefLink=function(e){return null==e?void 0:e.split("/").pop()};exports.getRefLink=getRefLink;
/**
 * Gets all the properties of a schema
 */
var getProperties=function(e){return e?(e.properties?Object.keys(e.properties):[]).map((function(t){var r,i,s=(0,exports.getSchema)(null===(r=e.properties)||void 0===r?void 0:r[t]);return s?{name:t,schema:s,required:(null===(i=e.required)||void 0===i?void 0:i.includes(t))||!1}:null})).filter(js_util_1.notEmpty):[]};exports.getProperties=getProperties;
//# sourceMappingURL=schema-util.js.map