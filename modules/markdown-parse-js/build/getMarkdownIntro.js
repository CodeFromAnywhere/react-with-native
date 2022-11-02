"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMarkdownIntro=void 0;
/**
 This function takes a markdown parse and gets the first paragraph and a title from it, if available.

 Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.
 */
var getMarkdownIntro=function(t){var n,o,l,e=null===(n=null==t?void 0:t.content)||void 0===n?void 0:n[0];return{title:null==e?void 0:e.title,firstParagraph:(null==e?void 0:e.title)?(null===(l=null===(o=null==e?void 0:e.children)||void 0===o?void 0:o[0])||void 0===l?void 0:l.content)||null:(null==e?void 0:e.content)||null}};exports.getMarkdownIntro=getMarkdownIntro;
//# sourceMappingURL=getMarkdownIntro.js.map