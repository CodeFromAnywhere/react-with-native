"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOutline=exports.printNestedTitles=exports.getTitlesRecursively=void 0;
/**
 * helper function to get a nested array of the titles and its subtitles
 */
var getTitlesRecursively=function(e){var t,i=null===(t=e.children)||void 0===t?void 0:t.map(exports.getTitlesRecursively),r=[];return e.title&&r.push(e.title),(null==i?void 0:i.length)&&r.push(i),r};exports.getTitlesRecursively=getTitlesRecursively;
/**
 * helper function (recursive) that prints nested titles with .. as prefix and a newline after every title
 *
 * TODO: allow for numbering titles
 */
var printNestedTitles=function(e,t){var i=t||0,r="..".repeat(i);return null==e?void 0:e.map((function(e){return Array.isArray(e)?(0,exports.printNestedTitles)(e,i+1):"".concat(r).concat(e,"\n")})).join("\n")};exports.printNestedTitles=printNestedTitles;
/**
 * low-level function that gets the outline for MarkdownParse
 *
 * NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.
 */
var getOutline=function(e){var t,i=null===(t=e.content)||void 0===t?void 0:t.map(exports.getTitlesRecursively).flat();return(0,exports.printNestedTitles)(i)};exports.getOutline=getOutline;
//# sourceMappingURL=outline.js.map