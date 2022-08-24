#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var n in r=arguments[t])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.kvMdStringToJson=void 0;var make_test_1=require("make-test"),markdown_parse_js_1=require("markdown-parse-js"),example_1=require("./example"),getParagraphsRecursively_1=require("./getParagraphsRecursively"),parseLine_1=require("./parseLine"),kvMdStringToJson=function(e,r){var t=(0,markdown_parse_js_1.mdToJsonParse)(e),a=t.parameters,n=t.content;if(!n)return console.log("NO CONTENT FOUND"),{parameters:{},data:[]};var s=n.map((function(e){return(0,getParagraphsRecursively_1.getParagraphsRecursively)(e)})).flat().map((function(e){return e.paragraph.split("\n").map((function(r){return{categoryStack:e.categoryStack,line:r}}))})).flat().map((function(e,t){var a=e.line,n=e.categoryStack,s=t,i=r?"".concat(r).concat(t):String(t);return __assign({categoryStack:n,index:t,relativeIndex:s,id:i},(0,parseLine_1.parseLine)(a))})).filter((
// empty data should be removed
function(e){return!!(e.comment||e.name||e.value)}));return{parameters:a,data:s}};exports.kvMdStringToJson=kvMdStringToJson,exports.test=(0,make_test_1.makeTest)((function(){return(0,exports.kvMdStringToJson)(example_1.exampleKvMdString)}),(function(e){return JSON.stringify(e)===JSON.stringify(example_1.exampleKeyValueMarkdownParse)}));
//# sourceMappingURL=kvMdStringToJson.js.map