"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseIfJson=void 0;
/**
 * if it's a string with a parsable JSON inside, parse it and return the object/array
 */
var parseIfJson=function(e){try{return JSON.parse(e)}catch(r){return e}};exports.parseIfJson=parseIfJson;
//# sourceMappingURL=parseIfJson.js.map