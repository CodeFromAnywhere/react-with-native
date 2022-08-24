"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tryParseJson=void 0;var removeCommentsRegex=/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g,tryParseJson=function(e,r){try{var o=e.replace(removeCommentsRegex,(function(e,r){return r?"":e}));return JSON.parse(o)}catch(e){return r&&console.log("JSON Parse error:",e),null}};
/**
 * if text isn't json, returns null
 */exports.tryParseJson=tryParseJson;
//# sourceMappingURL=tryParseJson.js.map