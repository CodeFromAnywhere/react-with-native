"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.kvmdParseToMarkdownString=void 0;var markdown_parse_js_1=require("markdown-parse-js"),kvmdDataToString_1=require("./kvmdDataToString"),make_test_1=require("make-test"),example_1=require("./example"),kvmdParseToMarkdownString=function(e){var r=(0,markdown_parse_js_1.frontmatterParseToString)(e.parameters),a=e.data.map((function(r,a){var t=e.data[a-1];return(0,kvmdDataToString_1.kvmdDataToString)(r,t)})).join("");
// console.log({ data: keyValueMarkdownParse.data });
// NB: TODO: I don't know if we need to sort stuff at all, it should stay in the right order!
//const sortedData = keyValueMarkdownParse.data
//.sort((a, b) =>
//  JSON.stringify(a.categoryStack) < JSON.stringify(b.categoryStack) ? -1 : 1
//);
//console.log({ sortedData });
//2 go over every row, and parse it back into the line. if the row holds a new categorystack, make sure to parse that header as well
// console.log({ frontmatterString, result });
return"".concat(r).concat(a)};exports.kvmdParseToMarkdownString=kvmdParseToMarkdownString,exports.test=(0,make_test_1.makeTest)((function(){return(0,exports.kvmdParseToMarkdownString)(example_1.exampleKeyValueMarkdownParse)}),(function(e){return e===example_1.exampleKvMdString}));
//# sourceMappingURL=kvmdModelDataToMarkdownString.js.map