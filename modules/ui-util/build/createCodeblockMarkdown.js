"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createCodeblockMarkdown=void 0;
/**
 * small util function to create a markdown for a string.
 */
var createCodeblockMarkdown=function(e,
/**
 * Extension that should be used for color highlighting the text
 *
 * Set to `null` if you don't want to specify a language
 *
 * defaults to "ts"
 */
o){return void 0===o&&(o="ts"),"\n  ```".concat(null===o?"":o||"ts","\n  ").concat(e,"\n  ```\n  ")};exports.createCodeblockMarkdown=createCodeblockMarkdown;
//# sourceMappingURL=createCodeblockMarkdown.js.map