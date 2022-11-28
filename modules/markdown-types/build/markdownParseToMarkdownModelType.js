"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.markdownParseToMarkdownModelType=exports.parseMarkdownModelTimestamp=exports.tryParseDate=void 0;var convert_case_1=require("convert-case"),model_types_1=require("model-types"),tryParseDate=function(e){try{return new Date(e).valueOf()}catch(e){}};exports.tryParseDate=tryParseDate;
/**
 * First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent
 *
 * If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system
 *
 * If that doesn't succeed, sometimes we'll set it to  the current timestamp
 */
var parseMarkdownModelTimestamp=function(e,r,t){var a=e[t],o=r[t],s="number"!=typeof a||isNaN(a)?"string"==typeof a?(0,exports.tryParseDate)(a):void 0:a,n="deletedAt"===t||"openedAt"===t?0:Date.now();return void 0!==s?s:void 0!==o?o:n};exports.parseMarkdownModelTimestamp=parseMarkdownModelTimestamp;
/**
 * makes a markdownModelType from a markdownParse.
 */
var markdownParseToMarkdownModelType=function(e){if(!e)return null;var r=e.parameters,t=e.raw,a=e.fileName,o=r.name?String(r.name):a,s=(0,convert_case_1.kebabCase)(o),n=r.id?String(r.id):(0,model_types_1.generateId)(),d=(0,exports.parseMarkdownModelTimestamp)(r,e,"createdAt"),p=(0,exports.parseMarkdownModelTimestamp)(r,e,"createdFirstAt"),i=(0,exports.parseMarkdownModelTimestamp)(r,e,"updatedAt"),m=(0,exports.parseMarkdownModelTimestamp)(r,e,"deletedAt"),l=(0,exports.parseMarkdownModelTimestamp)(r,e,"openedAt");return __assign(__assign({},r),{id:n,createdAt:d,createdFirstAt:p,deletedAt:m,updatedAt:i,openedAt:l,markdown:t,name:o,slug:s})};exports.markdownParseToMarkdownModelType=markdownParseToMarkdownModelType;
//# sourceMappingURL=markdownParseToMarkdownModelType.js.map