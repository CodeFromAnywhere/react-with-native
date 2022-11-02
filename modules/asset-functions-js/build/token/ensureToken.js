"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ensureToken=void 0;var addToken_1=require("./addToken"),removeTokenIfPresent_1=require("./removeTokenIfPresent"),ensureToken=function(e,
/**
 * if given, is used for generating new token
 *
 * if already present, token is used from the name instead of this one
 */
n,o){var r=(0,removeTokenIfPresent_1.removeTokenIfPresent)(e,o),t=r.nameWithoutToken,k=r.token;return(0,addToken_1.addToken)(t,k||n,o)};exports.ensureToken=ensureToken;
//# sourceMappingURL=ensureToken.js.map