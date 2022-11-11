"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shouldExposeMarkdownFile=void 0;
/**
 * markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.
 */
var shouldExposeMarkdownFile=function(e){return!Boolean(e.isDraft)&&"private"!==e.privacy};exports.shouldExposeMarkdownFile=shouldExposeMarkdownFile;
//# sourceMappingURL=shouldExposeMarkdownFile.js.map