"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addToken=void 0;var model_types_1=require("model-types"),tokenPrefix_1=require("./tokenPrefix"),addToken=function(e,
/**
 * if given, uses this token, otherwise generates a new random token
 */
o,r){if(!r)return e;var t=(0,model_types_1.generateRandomString)(32);return"".concat(e).concat(tokenPrefix_1.tokenPrefix).concat(o||t)};exports.addToken=addToken;
//# sourceMappingURL=addToken.js.map