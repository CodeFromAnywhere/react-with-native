"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.printNestedTitles=exports.getTitlesRecursively=void 0;
/**
 * helper function to get a nested array of the titles and its subtitles
 */
var getTitlesRecursively=function(e){var t,r=null===(t=e.children)||void 0===t?void 0:t.map(exports.getTitlesRecursively),i=[];return e.title&&i.push(e.title),(null==r?void 0:r.length)&&i.push(r),i};exports.getTitlesRecursively=getTitlesRecursively;
/**
 * helper function (recursive) that prints nested titles with .. as prefix and a newline after every title
 *
 * TODO: allow for numbering titles
 */
var printNestedTitles=function(e,t){var r=t||0,i="..".repeat(r);return null==e?void 0:e.map((function(e){return Array.isArray(e)?(0,exports.printNestedTitles)(e,r+1):"".concat(i).concat(e,"\n")})).join("\n")};exports.printNestedTitles=printNestedTitles;
//# sourceMappingURL=title-parsings.js.map