"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hasAllLetters=void 0;
/**
 * all letters of b can be found in a, in order (but other letters in between are allowed)
 */
var hasAllLetters=function(e,t){return 0===e.split("").reduce((function(e,t){return e[0]===t&&e.shift(),e}),t.split("")).length};exports.hasAllLetters=hasAllLetters;
//# sourceMappingURL=hasAllLetters.js.map