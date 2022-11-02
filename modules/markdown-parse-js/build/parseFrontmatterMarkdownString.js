"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.parseFrontmatterMarkdownString=void 0;var js_util_1=require("js-util"),make_test_1=require("make-test"),parse_primitive_1=require("parse-primitive"),exampleContents_1=require("./exampleContents"),parseFrontmatterMarkdownString=function(e,t){var r=e.split("\n"),n=r.findIndex((function(e){return"---"===e}));
//console.log({ frontmatterStartIndex });
if(-1===n)return{raw:e,parameters:{},content:[]};var i=r.slice(n+1).findIndex((function(e){return"---"===e}))+n+1,o=r.slice(n+1,i);return{parameters:(0,js_util_1.mergeObjectsArray)(o.map((function(e){var r,n,i,o,a,s=!(null==t?void 0:t.noFinal),l=null===(n=e.split(":")[0])||void 0===n?void 0:n.trim(),p=e.split(":")[1],u=s?null==p?void 0:p.trim():p,m=null===(a=null===(o=null===(i=null==t?void 0:t.frontmatterSchema)||void 0===i?void 0:i.properties)||void 0===o?void 0:o.find((function(e){return e.name===l})))||void 0===a?void 0:a.schema;
// console.dir(
//   {
//     frontmatterSchema: config?.frontmatterSchema,
//     key,
//     typeFromSchema,
//   },
//   { depth: 999 }
// );
return(r={})[l]=(0,parse_primitive_1.parsePrimitive)(u,m),r}))),raw:r.slice(i+1).join("\n"),content:[]}};exports.parseFrontmatterMarkdownString=parseFrontmatterMarkdownString,exports.test=(0,make_test_1.makeTest)((function(){return(0,exports.parseFrontmatterMarkdownString)(exampleContents_1.exampleMarkdownFileContents)}));
//# sourceMappingURL=parseFrontmatterMarkdownString.js.map