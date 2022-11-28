"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.objectToFrontmatter=void 0;var name_conventions_1=require("name-conventions"),js_util_1=require("js-util"),general_1=require("./general"),objectToFrontmatter=function(e,t){if(!t.properties||!t.properties.length)return{};var r=t.properties.map((function(t){var r,n,a,i,o,u,s,m,p=e[t.name],l=(0,name_conventions_1.getAssetInputType)(t.name);if(("object"===t.schema.type||"array"===t.schema.type)&&(null==l?void 0:l.type)){
// it's a backendAsset
var f=p;if(!f||"object"!=typeof f)
// must be an array or object, otherwise it's set to nothing
return;var c=(0,js_util_1.makeArray)(f);return(r={})[t.name]=c.map((function(e){return"![".concat(e.alt||"","](").concat(e.relativePath||"",")")})).join(", "),r}if("number"===t.schema.type&&t.name.endsWith("At")){if("number"!=typeof p||!p&&0!==p)
// we can only process numbers
return;
// it's a date, convert to date
var y=new Date(p).toDateString();return(n={})[t.name]=y,n}if("boolean"===t.schema.type)return!0===p?((a={})[t.name]="true",a):!1===p?((i={})[t.name]="false",i):void 0;if("number"===t.schema.type){if("number"!=typeof p||!p&&0!==p)
// we can only process numbers
return;return(o={})[t.name]=String(p),o}if("null"===t.schema.type){if(null!==p)return;return(u={})[t.name]="null",u}if("string"===t.schema.type){if("string"!=typeof p)return;return(s={})[t.name]=(0,general_1.quotedOrNot)((0,general_1.stringifyNewlines)(p)),s}if("array"===t.schema.type){
// turn into comma separated
if(!Array.isArray(p))return;
// Let's only support string[] for now!
//   const type = property.schema.items?.map(x=>x.schema)?.[0]
var _=p.map((function(e){if("string"==typeof e)return(0,general_1.quotedOrNot)((0,general_1.stringifyNewlines)(e))})).filter(js_util_1.notEmpty).join(", ");return(m={})[t.name]=_,m}t.schema.type})).filter(js_util_1.notEmpty);return(0,js_util_1.mergeObjectsArray)(r)};exports.objectToFrontmatter=objectToFrontmatter;
//# sourceMappingURL=objectToFrontmatter.js.map