"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRefLink=exports.getSchema=exports.getSchemaItems=void 0;var js_util_1=require("js-util"),getSchemaItems=function(e){return(0,js_util_1.makeArray)(null==e?void 0:e.items).map(exports.getSchema).filter(js_util_1.notEmpty)};exports.getSchemaItems=getSchemaItems;
/**
 * parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it
 */
var getSchema=function(e){return"object"!=typeof e?void 0:e};exports.getSchema=getSchema;
/**
 * gets the $ref from a schema and parses the interface name from it
 */
var getRefLink=function(e){return null==e?void 0:e.split("/").pop()};exports.getRefLink=getRefLink;
//# sourceMappingURL=schema-util.js.map