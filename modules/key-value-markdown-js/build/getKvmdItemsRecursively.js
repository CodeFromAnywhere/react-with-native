"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var a,s=0,i=r.length;s<i;s++)!a&&s in r||(a||(a=Array.prototype.slice.call(r,0,s)),a[s]=r[s]);return e.concat(a||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getKvmdItemsRecursively=void 0;var js_util_1=require("js-util"),make_test_1=require("make-test"),markdown_parse_js_1=require("markdown-parse-js"),example_1=require("./example"),parseKvmdLine_1=require("./parseKvmdLine"),getKvmdItemsRecursively=function(e,r){var t,a=r?__spreadArray([],r,!0):[],s=[];
// NB: copy
// If this chunk has a title (this is a header)
if(e.title){var i=(0,parseKvmdLine_1.parseKvmdLine)(e.title);
// NB: titles with an empty key are ignored
if(i){
// NB: also add the title as a model item
var n=__assign(__assign({},i),{isHeaderCalculated:!0,
// NB: copy!
categoryStackCalculated:__spreadArray([],a,!0)});s.push(n),
// NB: the slug of the title is added to the categoryStackCalculated, but only AFTER adding the kvmd item of the title
a.push(i.slug)}}var _=(null===(t=e.children)||void 0===t?void 0:t.map((function(e){return(0,exports.getKvmdItemsRecursively)(e,a)})).flat())||[];s=s.concat(_);var l=(e.content||"").split("\n").map((function(e){var r=(0,parseKvmdLine_1.parseKvmdLine)(e);if(r)return __assign(__assign({},r),{isHeaderCalculated:!1,categoryStackCalculated:a})})).filter(js_util_1.notEmpty);return s=s.concat(l)};exports.getKvmdItemsRecursively=getKvmdItemsRecursively;var test=(0,make_test_1.makeTest)((function(){var e=(0,markdown_parse_js_1.mdToJsonParse)(example_1.exampleKvMdString).content;if(e)return(0,exports.getKvmdItemsRecursively)(e[2])}));
//# sourceMappingURL=getKvmdItemsRecursively.js.map