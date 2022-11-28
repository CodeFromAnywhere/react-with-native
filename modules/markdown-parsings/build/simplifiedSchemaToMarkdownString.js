"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.simplifiedSchemaToMarkdownString=void 0;var js_util_1=require("js-util"),markdown_parse_js_1=require("markdown-parse-js"),makePropertiesTable_1=require("./util/makePropertiesTable"),noNewlines_1=require("./util/noNewlines"),simplifiedSchemaToMarkdownString=function(e,
/**
 * if not given, no title is printed
 */
i,r,
/** the headers level, defaults to 1 */
n){if(!e)return"";var t=e.circularRefName?"[".concat(e.circularRefName,"](#").concat((0,markdown_parse_js_1.getImplicitId)(e.circularRefName),")"):"",a=e.enum?"(Enum: ".concat(e.enum.map(String).join(" | "),") "):"",o="".concat(r?"":" (optional)"),c=i?i.replaceAll("\n",""):void 0,s="".concat(e.type).concat(a).concat(t);return[i?"".concat("#".repeat(n||1)," ").concat(c).concat(o,": ").concat(s):void 0,e.items?e.items.map((function(e){return"- ".concat(e.name,": ").concat(e.schema.type)})).join("\n"):"",e.description?"> ".concat((0,noNewlines_1.noNewlines)(e.description)):"",(0,makePropertiesTable_1.makePropertiesTable)(e.properties)].filter(js_util_1.notEmpty).join("\n\n")};exports.simplifiedSchemaToMarkdownString=simplifiedSchemaToMarkdownString;
//# sourceMappingURL=simplifiedSchemaToMarkdownString.js.map