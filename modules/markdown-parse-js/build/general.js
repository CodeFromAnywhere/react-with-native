#!/usr/bin/env node
"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.mdContentParseRecursively=exports.parseMdToChunks=exports.removeHeaderPrefix=void 0;var make_test_1=require("make-test"),removeHeaderPrefix=function(e){return e.split("").reduce((function(e,t){var r=e.isHeaderPrefix&&"#"===t;return{string:r?"":e.string.concat(t),isHeaderPrefix:r}}),{string:"",isHeaderPrefix:!0}).string.trim()};
/**
 * removes header prefix (##### etc) and trims whats behind that
 */exports.removeHeaderPrefix=removeHeaderPrefix;var testRemoveHeaderPrefix=(0,make_test_1.makeTest)((function(){return(0,exports.removeHeaderPrefix)("#### Header")}),(function(e){return"Header"===e})),parseMdToChunks=function(e,t){
// NB: we need something... filter out empty chunks!
return e.split("\n").reduce((function(e,r){
// NB: please note the space at the end, it's very important for this to work
var n=0!==t?"".concat("#".repeat(t)," "):null;if(n&&r.startsWith(n))
// Seems to be a header!
// NB: new header of this level detected, new chunk begins
return e.concat([{level:t,title:(0,exports.removeHeaderPrefix)(r)}]);
// line is part of previous chunk, just add it to it
// NB: since the initial value contains something, we can assert it not being empty
var s=e.pop(),a=s.content?"".concat(s.content,"\n"):"",o="".concat(a).concat(r);return e.concat([__assign(__assign({},s),{content:o})])}),
// NB: by default it's a paragraph without header
[{level:0}]).filter((function(e){return e.content||e.title||e.children}))};
/**
 * should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.
 */exports.parseMdToChunks=parseMdToChunks;
var exampleMarkdownFileContents="# Header 1\n\nParagraph 1\n\n# Header 2\n\n## Header 2.1\n\nParagraph 2\n\n## Header 2.2\n\nParagraph 3\nParagraph 4\n\nParagraph 5 (with empty line above)\n",testParseMdToChunks=(0,make_test_1.makeTest)((function(){return(0,exports.parseMdToChunks)(exampleMarkdownFileContents,1)}
// (result) => {
//   return (
//     JSON.stringify(result) ===
//     JSON.stringify([
//       {
//         level: 1,
//         title: "Header 1",
//         content: "Paragraph 1\n",
//       },
//       {
//         level: 1,
//         title: "Header 2",
//         content:
//           "## Header 2.1\n" +
//           "\n" +
//           "Paragraph 2\n" +
//           "\n" +
//           "## Header 2.2\n" +
//           "\n" +
//           "Paragraph 3\n" +
//           "Paragraph 4\n" +
//           "\n" +
//           "Paragraph 5 (with empty line above)\n",
//       },
//     ])
//   );
// }
)),mdContentParseRecursively=function(e,t){return(0,exports.parseMdToChunks)(e,t).map((function(e){
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
var t=e.content&&[1,2,3,4,5,6].includes(e.level)?(0,exports.mdContentParseRecursively)(e.content,e.level+1):void 0,r=t?void 0:e.content;
// NB: here we are splitting content with multiple lines into lines only for level 0 chunks
return r?[__assign(__assign({},e),{content:r})]:[__assign(__assign({},e),{children:t,content:void 0})]})).flat()};
// fs.readFileSync(
//   path.resolve(__dirname, "../assets/example.md"),
//   "utf8"
// );

exports.mdContentParseRecursively=mdContentParseRecursively;
var testMdContentParseRecursively=(0,make_test_1.makeTest)((function(){return(0,exports.mdContentParseRecursively)(exampleMarkdownFileContents,1)}
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
/**
 * creates a parsed object notation of any markdown
 */
// adding them all together
exports.test=[testMdContentParseRecursively,testParseMdToChunks,testRemoveHeaderPrefix];
//# sourceMappingURL=general.js.map