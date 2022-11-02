"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseMdToChunks=void 0;var make_test_1=require("make-test"),exampleContents_1=require("./exampleContents"),removeHeaderPrefix_1=require("./removeHeaderPrefix"),parseMdToChunks=function(e,t){
// NB: we need something... filter out empty chunks!
return e.split("\n").reduce((function(e,n){
// NB: please note the space at the end, it's very important for this to work
var r=0!==t?"".concat("#".repeat(t)," "):null;if(r&&n.startsWith(r))
// Seems to be a header!
// NB: new header of this level detected, new chunk begins
return e.concat([{level:t,title:(0,removeHeaderPrefix_1.removeHeaderPrefix)(n)}]);
// line is part of previous chunk, just add it to it
// NB: since the initial value contains something, we can assert it not being empty
var s=e.pop(),a=s.content?"".concat(s.content,"\n"):"",o="".concat(a).concat(n);return e.concat([__assign(__assign({},s),{content:o})])}),
// NB: by default it's a paragraph without header
[{level:0}]).filter((function(e){return e.content||e.title||e.children}))};exports.parseMdToChunks=parseMdToChunks;
var test=(0,make_test_1.makeTest)((function(){return(0,exports.parseMdToChunks)(exampleContents_1.exampleMarkdownFileContents,1)}
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
));
//# sourceMappingURL=parseMdToChunks.js.map