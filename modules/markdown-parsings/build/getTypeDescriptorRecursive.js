"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTypeDescriptorRecursive=void 0;var schema_util_1=require("schema-util"),noNewlines_1=require("./util/noNewlines"),getTypeDescriptorRecursive=function(e,
/**
 * If true, references will be links, otherwise, just the name of the referred interface
 */
r){var t=(0,schema_util_1.getRefLink)(e.$ref),n=Array.isArray(e.type)?e.type[0]:e.type;
// console.log({ $ref: schema.$ref, refLink });
if(t)return r?"`".concat(t,"`"):t;//(#${getImplicitId(refLink)})
if(e.enum){var i="".concat(e.enum.map(String).join(" / "));return"number"===n?"".concat(i," (number)"):i}if("boolean"===n)return"boolean";if("string"===n)return"string";if("number"===n||"integer"===n)return"number";if("null"===n)return"null";if("array"===n){var c=(0,schema_util_1.getSchemaItems)(e),o=c.map((function(e){return(0,exports.getTypeDescriptorRecursive)(e,!0)})).join(" | ");return"".concat(c.length>1?"(".concat(o,")"):o,"[]")}
//   NB: only type object is left now
var u=(0,schema_util_1.getProperties)(e),s=(0,schema_util_1.getSchema)(e.additionalProperties),a=s?"[key: string]: ".concat((0,exports.getTypeDescriptorRecursive)(s,r)):"",p=u.map((function(e){return"".concat(e.name).concat((null==e?void 0:e.required)?":":"?:"," ").concat((0,exports.getTypeDescriptorRecursive)(e.schema,r))})).concat(a);return r?(0,noNewlines_1.noNewlines)("{ ".concat(p.join(", \n")," }")):p.join(", ")};exports.getTypeDescriptorRecursive=getTypeDescriptorRecursive;
//# sourceMappingURL=getTypeDescriptorRecursive.js.map