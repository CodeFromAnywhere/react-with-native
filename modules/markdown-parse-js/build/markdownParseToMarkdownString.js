"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=exports.markdownParseToMarkdownString=void 0;var make_test_1=require("make-test"),exampleContents_1=require("./exampleContents"),frontmatterParseToString_1=require("./frontmatterParseToString"),markdownParseToMarkdownString=function(e){var r=(0,frontmatterParseToString_1.frontmatterParseToString)(e.parameters);return"".concat(r).concat(e.raw)};exports.markdownParseToMarkdownString=markdownParseToMarkdownString,exports.test=(0,make_test_1.makeTest)((function(){return(0,exports.markdownParseToMarkdownString)({parameters:{a:1,b:2,c:!0,d:"string"},raw:exampleContents_1.exampleMarkdownFileContents})}),(
// NB: simplified check, because only the parameters need to be added
function(e){return e.length>exampleContents_1.exampleMarkdownFileContents.length}));
//# sourceMappingURL=markdownParseToMarkdownString.js.map