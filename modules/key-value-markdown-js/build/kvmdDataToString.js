"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.kvmdDataToString=void 0;
/**
 * parses KeyValueMarkdownModelType into a string which can be part of a new markdown file
 *
 * NB: we need to know the previous line as well because the header we need to print depends on it
 *
 */
var kvmdDataToString=function(a,e){
// headers only need a newline before it if it's not the first item (so there is a previous)
var t=a.isHeaderCalculated&&e?"\n":"",c=a.isHeaderCalculated?a.categoryStackCalculated.length+1:0,n=a.isHeaderCalculated?"#".repeat(c).concat(" "):"",o=!a.isHeaderCalculated&&(null==e?void 0:e.isHeaderCalculated)?"\n":"";return"".concat(t).concat(n).concat(o).concat(a.name?"".concat(a.name,": "):"").concat(a.value||"").concat(a.comment?" \x3c!-- ".concat(a.comment," --\x3e"):"","\n")};exports.kvmdDataToString=kvmdDataToString;
//# sourceMappingURL=kvmdDataToString.js.map