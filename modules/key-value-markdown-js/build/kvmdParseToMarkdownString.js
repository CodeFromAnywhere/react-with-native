"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.kvmdParseToMarkdownString=void 0;var matter_types_1=require("matter-types"),kvmdDataToString_1=require("./kvmdDataToString"),make_test_1=require("make-test"),example_1=require("./example"),kvmdParseToMarkdownString=function(e){var r=(0,matter_types_1.frontmatterParseToString)(e.parameters),t=e.data.map((function(r,t){var a=e.data[t-1];return(0,kvmdDataToString_1.kvmdDataToString)(r,a)})).join("");
//2 go over every row, and parse it back into the line
return"".concat(r).concat(t)};exports.kvmdParseToMarkdownString=kvmdParseToMarkdownString;var test=(0,make_test_1.makeTest)((function(){return(0,exports.kvmdParseToMarkdownString)(example_1.exampleKeyValueMarkdownParse)}),(function(e){
// console.log("RESULT", result, "EXAMPLE", exampleKvMdString);
return e===example_1.exampleKvMdString}));
//# sourceMappingURL=kvmdParseToMarkdownString.js.map