"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.kvmdParseToMarkdownString=void 0;var frontmatter_util_1=require("frontmatter-util"),kvmdDataToString_1=require("./kvmdDataToString"),make_test_1=require("make-test"),example_1=require("./example"),kvmdParseToMarkdownString=function(r){var e=(0,frontmatter_util_1.frontmatterParseToString)(r.parameters),t=r.data.map((function(e,t){var a=r.data[t-1];return(0,kvmdDataToString_1.kvmdDataToString)(e,a)})).join("");
//2 go over every row, and parse it back into the line
return"".concat(e).concat(t)};exports.kvmdParseToMarkdownString=kvmdParseToMarkdownString;var test=(0,make_test_1.makeTest)((function(){return(0,exports.kvmdParseToMarkdownString)(example_1.exampleKeyValueMarkdownParse)}),(function(r){
// console.log("RESULT", result, "EXAMPLE", exampleKvMdString);
return r===example_1.exampleKvMdString}));
//# sourceMappingURL=kvmdParseToMarkdownString.js.map