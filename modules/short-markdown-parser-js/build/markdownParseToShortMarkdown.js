"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shortMarkdownToMarkdownParse=exports.markdownParseToShortMarkdown=void 0;var findAudioWithViewsArray_1=require("./findAudioWithViewsArray"),markdownParseToShortMarkdown=function(r){var o,n,t;if(r.content)return{
// Can add this option later
backgroundMusicTrack:[],audioWithViewsArray:((null===(t=null===(n=null===(o=r.content)||void 0===o?void 0:o[0])||void 0===n?void 0:n.children)||void 0===t?void 0:t.map((function(r){var o,n;return{title:r.title,paragraph:r.content||(null===(n=null===(o=r.children)||void 0===o?void 0:o[0])||void 0===n?void 0:n.content)||"No content"}})))||[]).map((function(r,o){return(0,findAudioWithViewsArray_1.findAudioWithViewsArray)(r.paragraph,o,r.title)})).flat().filter((function(r){return r.audioPath||r.viewEmbeds.length>0}))};
// TODO: Make a nested function for this that actually works... -.-
};exports.markdownParseToShortMarkdown=markdownParseToShortMarkdown;var shortMarkdownToMarkdownParse=function(){
// not even sure this is needed, let's first do the other one
};exports.shortMarkdownToMarkdownParse=shortMarkdownToMarkdownParse;
//# sourceMappingURL=markdownParseToShortMarkdown.js.map