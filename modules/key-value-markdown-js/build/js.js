"use strict";var __spreadArray=this&&this.__spreadArray||function(e,r,a){if(a||2===arguments.length)for(var t,n=0,o=r.length;n<o;n++)!t&&n in r||(t||(t=Array.prototype.slice.call(r,0,n)),t[n]=r[n]);return e.concat(t||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseLine=exports.kvmdDataMap=exports.getParagraphsRecursively=exports.flattenMarkdownChunks=void 0;var flattenMarkdownChunks=function(e){return e.map((function(e){return(0,exports.getParagraphsRecursively)(e)})).flat()};exports.flattenMarkdownChunks=flattenMarkdownChunks;
/**
 * recursively dives into the Chunk to get all paragraphs inside
 */
var getParagraphsRecursively=function(e,r){var a,t=e.title?(r||[]).concat([e.title]):r||[],n=(null===(a=e.children)||void 0===a?void 0:a.map((function(e){return(0,exports.getParagraphsRecursively)(e,t)})).flat())||[];return __spreadArray([{paragraph:e.content||"",categoryStack:t}],n,!0)};exports.getParagraphsRecursively=getParagraphsRecursively;
/**
 * mapper function to give a kvmd data object other parameters.
 *
 * NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.
 */
var kvmdDataMap=function(e,r){var a=r.keyName,t=r.valueName,n=r.categoryStackName,o=r.commentName,c=e.map((function(e){var r;return(r={})[a||"key"]=e.key,r[t||"value"]=e.value,r[o||"comment"]=e.comment,r[n||"categoryStack"]=e.categoryStack,r}));return c};exports.kvmdDataMap=kvmdDataMap;
/**
 * parses a kv md line with data into a key, value, and comment (if available)
 */
var parseLine=function(e){var r,a=/<!--[\s\S]*?-->/g,t=e.replace(a,""),n=null===(r=e.match(a))||void 0===r?void 0:r[0],o=n?n.replace("\x3c!--","").replace("--\x3e","").trim():void 0,c=t.split(":").map((function(e){return e.trim()})),i=c[0],l=c[1];return{key:(null==i?void 0:i.length)?i:void 0,value:(null==l?void 0:l.length)?l:void 0,comment:o}};exports.parseLine=parseLine;
//# sourceMappingURL=js.js.map