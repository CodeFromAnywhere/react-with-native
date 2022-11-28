"use strict";var __awaiter=this&&this.__awaiter||function(e,r,n,t){return new(n||(n=Promise))((function(o,a){function i(e){try{l(t.next(e))}catch(e){a(e)}}function u(e){try{l(t.throw(e))}catch(e){a(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,u)}l((t=t.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],t=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.projectToMarkdown=exports.bundleToMarkdown=exports.bundleFolderWithMarkdown=exports.propertyToTableRow=void 0;var js_util_1=require("js-util"),merge_1=require("./parsing/merge"),k_explore_1=require("k-explore"),read_markdown_file_1=require("read-markdown-file"),convert_case_1=require("convert-case"),propertyToTableRow=function(e){var r,n=e.required?"":"(optional)",t=(null===(r=e.schema.description)||void 0===r?void 0:r.replaceAll("\n","<br />"))||"";
// TODO: stack deeper objects and make sure to also print tables for those
return"| ".concat(e.name," ").concat(n," | ").concat(e.schema.type," | ").concat(t," |")};exports.propertyToTableRow=propertyToTableRow;
/**
 * finds all md files in a folder and creates a single MarkdownParse
 *
 * handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way
 *
 * NB: it recursively structures the files and folders with headings
 */
var bundleFolderWithMarkdown=function(e,
/**
 * filename to include in the final MarkdownParse
 */
r){return __awaiter(void 0,void 0,void 0,(function(){var n,t,o,a,i;return __generator(this,(function(u){switch(u.label){case 0:return[4/*yield*/,(0,k_explore_1.explore)({basePath:e,extension:"md"})];case 1:return n=u.sent().map((function(e){return e.path})),[4/*yield*/,Promise.all(n.map((function(e){return(0,read_markdown_file_1.readMarkdownFile)(e)})))];case 2:return t=u.sent().filter(js_util_1.notEmpty),o=(0,merge_1.mergeMarkdownParse)(t,r),a=t.map((function(e){return e.fileName})).filter(js_util_1.notEmpty),i=a.length>0?"## Docs\n\n".concat(a.map((function(e){return"- [".concat((0,convert_case_1.humanCase)(e),"](#").concat(e,")")})).join("\n"),"\n\n"):"",[2/*return*/,{markdownParse:o,outline:i}]}}))}))};exports.bundleFolderWithMarkdown=bundleFolderWithMarkdown;
/**
 *
 * creates a summary for a whole bundle
 *
 * NB: Related to `bundleToBookMd`
 */
var bundleToMarkdown=function(e){e.bundleConfigId,e.includeModules
/**
       - explain operation config itself, e.g. which apps there are and an outline of the packages and modules
    
       - extract all needed operations from bundle config (with or without modules) and use operationToMd for those
      
       - extract docs and readmes from bundle config and bundle those
      */;return""};exports.bundleToMarkdown=bundleToMarkdown;
/**
 * summarizes the whole OS project into a markdown string
 */
var projectToMarkdown=function(e){e.includeTodo;
/**
    
     - the folder structure should be the outline
     - hierarchically delve into folders with all its content (md and operations)
  
     */return""};exports.projectToMarkdown=projectToMarkdown;
//# sourceMappingURL=bundlings.js.map