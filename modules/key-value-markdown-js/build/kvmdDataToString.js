"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.kvmdDataToString=void 0;var js_util_1=require("js-util"),kvmdDataToString=function(t,n){var e=t.categoryStack.findIndex((function(t,e){return(null==n?void 0:n.categoryStack[e])!==t})),c=(-1===e?[]:t.categoryStack.map((function(t,n){
// NB: if the headers are the same, don't show them
if(!(n<e))
// NB: if the header starts being different from previous, header, show everything after that
return{level:n+1,title:t}})).filter(js_util_1.notEmpty)).map((function(t){return"\n".concat("#".repeat(t.level)," ").concat(t.title,"\n")})),a="".concat(t.name?"".concat(t.name,": "):"").concat(t.value||"").concat(t.comment?" \x3c!-- ".concat(t.comment," --\x3e"):"","\n"),o=c.length>0?"\n":"";
// NB: No mismatch means they are the same
return"".concat(c.join("")).concat(o).concat(a)};
/**
 * parses KeyValueMarkdownModelType into a string which can be part of a new markdown file
 *
 * NB: we need to know the previous line as well because the header we need to print depends on it
 *
 */exports.kvmdDataToString=kvmdDataToString;
//# sourceMappingURL=kvmdDataToString.js.map