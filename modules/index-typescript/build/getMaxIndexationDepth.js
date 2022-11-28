"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMaxIndentationDepth=void 0;
/**
 * gets the maximum indentation depth of any piece of code
 *
 * does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.
 *
 * assumes an indentation contains 2 spaces.
 */
var getMaxIndentationDepth=function(t){return t.split("\n").reduce((function(t,e){var n=e.length-e.trimStart().length,r=Math.floor(n/2);return t>r?t:r}),0)};exports.getMaxIndentationDepth=getMaxIndentationDepth;
//# sourceMappingURL=getMaxIndexationDepth.js.map