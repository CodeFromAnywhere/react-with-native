"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownParseParagraphs=void 0;var getChunkParagraphsRecursively_1=require("./getChunkParagraphsRecursively"),getMarkdownParseParagraphs=function(r){var a;return(null===(a=r.content)||void 0===a?void 0:a.map(getChunkParagraphsRecursively_1.getChunkParagraphsRecursively).flat())||[]};
/**
 * Gets all paragraphs (recursively) from a `MarkdownParse`
 */exports.getMarkdownParseParagraphs=getMarkdownParseParagraphs;
//# sourceMappingURL=getMarkdownParseParagraphs.js.map