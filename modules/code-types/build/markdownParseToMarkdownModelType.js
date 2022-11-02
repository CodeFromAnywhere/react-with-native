"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.markdownParseToMarkdownModelType=exports.parseMarkdownModelTimestamp=exports.tryParseDate=void 0;const model_types_1=require("model-types"),convert_case_1=require("convert-case"),tryParseDate=e=>{try{return new Date(e).valueOf()}catch(e){}};exports.tryParseDate=tryParseDate;
/**
 * First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent
 *
 * If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system
 *
 * If that doesn't succeed, sometimes we'll set it to  the current timestamp
 */
const parseMarkdownModelTimestamp=(e,r,t)=>{const a=e[t],o=r[t],s="number"!=typeof a||isNaN(a)?"string"==typeof a?(0,exports.tryParseDate)(a):void 0:a,d="deletedAt"===t||"openedAt"===t?0:Date.now();return void 0!==s?s:void 0!==o?o:d};exports.parseMarkdownModelTimestamp=parseMarkdownModelTimestamp;
/**
 * makes a markdownModelType from a markdownParse.
 */
const markdownParseToMarkdownModelType=e=>{if(!e)return null;const{parameters:r,raw:t,fileName:a}=e,o=r.name?String(r.name):a,s=(0,convert_case_1.kebabCase)(o),d=r.id?String(r.id):(0,model_types_1.generateId)(),n=(0,exports.parseMarkdownModelTimestamp)(r,e,"createdAt"),p=(0,exports.parseMarkdownModelTimestamp)(r,e,"createdFirstAt"),m=(0,exports.parseMarkdownModelTimestamp)(r,e,"updatedAt"),i=(0,exports.parseMarkdownModelTimestamp)(r,e,"deletedAt"),M=(0,exports.parseMarkdownModelTimestamp)(r,e,"openedAt");return Object.assign(Object.assign({},r),{id:d,createdAt:n,createdFirstAt:p,deletedAt:i,updatedAt:m,openedAt:M,markdown:t,name:o,slug:s})};exports.markdownParseToMarkdownModelType=markdownParseToMarkdownModelType;
//# sourceMappingURL=markdownParseToMarkdownModelType.js.map