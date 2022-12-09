"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenMarkdownChunks=void 0;var getParagraphsRecursively_1=require("./getParagraphsRecursively"),flattenMarkdownChunks=function(e){return e.map((function(e){return(0,getParagraphsRecursively_1.getParagraphsRecursively)(e)})).flat()};
/**
 * Flatten markdown content into an array of paragraphs
 */exports.flattenMarkdownChunks=flattenMarkdownChunks;
//# sourceMappingURL=flattenMarkdownChunks.js.map