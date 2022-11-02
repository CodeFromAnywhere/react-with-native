#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.mdContentParseRecursively=void 0;var make_test_1=require("make-test"),exampleContents_1=require("./exampleContents"),parseMdToChunks_1=require("./parseMdToChunks"),mdContentParseRecursively=function(e,t){return(0,parseMdToChunks_1.parseMdToChunks)(e,t).map((function(e){
// NB: chunk is a paragraph
if(0===e.level&&!e.title&&e.content)
// const lines = chunk.content.split("\n");
// // For every line, copy the chunk...
// const chunks = lines?.map((line) => ({
//   ...chunk,
//   content: line,
// }));
// return chunks;
return[e];
// NB: h6 is highest level
var t=e.content&&[1,2,3,4,5,6].includes(e.level)?(0,exports.mdContentParseRecursively)(e.content,e.level+1):void 0,n=t?void 0:e.content;
// NB: here we are splitting content with multiple lines into lines only for level 0 chunks
return n?[__assign(__assign({},e),{content:n})]:[__assign(__assign({},e),{children:t,content:void 0})]})).flat()};exports.mdContentParseRecursively=mdContentParseRecursively;var test=(0,make_test_1.makeTest)((function(){return(0,exports.mdContentParseRecursively)(exampleContents_1.exampleMarkdownFileContents,1)}
// (result) => {
//   return (
//     JSON.stringify(result) ===
//     JSON.stringify([
//       {
//         level: 1,
//         title: "Header 1",
//         content: undefined,
//         children: [
//           { level: 0, content: "Paragraph 1" },
//           { level: 0, content: "" },
//         ],
//       },
//       {
//         level: 1,
//         title: "Header 2",
//         content: undefined,
//         children: [
//           {
//             level: 2,
//             title: "Header 2.1",
//             content: undefined,
//             children: [
//               { level: 0, content: "Paragraph 2" },
//               { level: 0, content: "" },
//             ],
//           },
//           {
//             level: 2,
//             title: "Header 2.2",
//             content: undefined,
//             children: [
//               { level: 0, content: "Paragraph 3" },
//               { level: 0, content: "Paragraph 4" },
//               { level: 0, content: "" },
//               {
//                 level: 0,
//                 content: "Paragraph 5 (with empty line above)",
//               },
//               { level: 0, content: "" },
//             ],
//           },
//         ],
//       },
//     ])
//   );
// }
));
//# sourceMappingURL=mdContentParseRecursively.js.map