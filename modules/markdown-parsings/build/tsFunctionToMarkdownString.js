"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tsFunctionToMarkdownString=exports.isUpperCase=void 0;var js_util_1=require("js-util"),getJsonSchemaSummary_1=require("./getJsonSchemaSummary"),getTypeDescriptorRecursive_1=require("./getTypeDescriptorRecursive"),simplifiedSchemaToMarkdownString_1=require("./simplifiedSchemaToMarkdownString"),isUpperCase=function(e){return e.toUpperCase()===e};exports.isUpperCase=isUpperCase;
/**
 TsFunction:
 - name and operation
 - size
 - description (doc-comment)
 - input, output
 */
var tsFunctionToMarkdownString=function(e){var t,i,n,r,o=e.operationRelativeTypescriptFilePath.endsWith(".tsx")&&(0,exports.isUpperCase)(e.name.charAt(0)),a="# ".concat(o?"`<".concat(e.name," />`"):"".concat(e.name,"()")),c=("".concat((null===(t=e.codeSize)||void 0===t?void 0:t.lines)?"".concat(e.codeSize.lines," LOC, "):"","Max. indexation depth: ").concat(e.maxIndentationDepth,", ").concat((null===(i=e.cumulativeCodeSize)||void 0===i?void 0:i.lines)?"".concat(null===(n=e.cumulativeCodeSize)||void 0===n?void 0:n.lines," Cumulative LOC"):""),e.returnType.simplifiedSchema&&(0,simplifiedSchemaToMarkdownString_1.simplifiedSchemaToMarkdownString)(e.returnType.simplifiedSchema,"Returns",!0,2),e.parameters&&e.parameters.length>0?e.parameters.map((function(e){var t=(0,getJsonSchemaSummary_1.getJsonSchemaSummary)(e.schema,!0);return"| ".concat(e.name).concat(e.required?"":" (optional)"," | ").concat((null==t?void 0:t.typeDescriptor)||""," | ").concat((null==t?void 0:t.description)||""," |")})):"| - | | |"),s=e.returnType.typeDefinition?(0,getTypeDescriptorRecursive_1.getTypeDescriptorRecursive)(e.returnType.typeDefinition,!0):"",p="| **Output** | ".concat(s,"   | ").concat((null===(r=e.returnType.typeDefinition)||void 0===r?void 0:r.description)||"","   |"),u="\n| Input      |    |    |\n| ---------- | -- | -- |\n".concat(c,"\n").concat(p,"\n");return[a,
// infoString, // TODO: Maybe make it optional.
e.description,
// returnTypeString,
u].filter(js_util_1.notEmpty).join("\n\n")};exports.tsFunctionToMarkdownString=tsFunctionToMarkdownString;
//# sourceMappingURL=tsFunctionToMarkdownString.js.map