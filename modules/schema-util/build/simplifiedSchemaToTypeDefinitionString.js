"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.simplifiedSchemaToTypeDefinitionString=void 0;
/**
 * Converts a simplifiedSchema definition back into a type interface string
 *
 * With this, types can be generated in different ways
 */
var simplifiedSchemaToTypeDefinitionString=function(e){if(!e)return"";if(e.enum&&e.enum.length>0)return e.enum.map((function(e){return String(e)})).join(" | ");if("boolean"===e.type)return"boolean";if("null"===e.type)return"null";if("number"===e.type)return"number";if("string"===e.type)return"string";if("array"===e.type&&e.items&&e.items.length>=1){var i=e.items.map((function(e){return(0,exports.simplifiedSchemaToTypeDefinitionString)(e.schema)})).join(" | ");return e.items&&e.items.length>=2?"(".concat(i,")[]"):"".concat(i,"[]")}if("object"===e.type&&e.properties){var n=e.properties.map((function(e){var i=e.schema.description?"/** ".concat(e.schema.description," */\n"):"",n="".concat(e.required?"":"?",": ");return"".concat(i).concat(e.name).concat(n).concat((0,exports.simplifiedSchemaToTypeDefinitionString)(e.schema),";")}));return"{\n".concat(n.join("\n"),"\n};\n")}
// NB: Should never be the case, we have handled all types
return""};exports.simplifiedSchemaToTypeDefinitionString=simplifiedSchemaToTypeDefinitionString;
//# sourceMappingURL=simplifiedSchemaToTypeDefinitionString.js.map