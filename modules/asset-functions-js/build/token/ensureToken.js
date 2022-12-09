"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureToken = void 0;
var addToken_1 = require("./addToken");
var removeTokenIfPresent_1 = require("./removeTokenIfPresent");
/**
Remove the token (if present), then add it again
 */
var ensureToken = function (name, 
/**
 * if given, is used for generating new token
 *
 * if already present, token is used from the name instead of this one
 */
newToken, attachTokenToFilename) {
    var _a = (0, removeTokenIfPresent_1.removeTokenIfPresent)(name, attachTokenToFilename), nameWithoutToken = _a.nameWithoutToken, token = _a.token;
    var nameWithToken = (0, addToken_1.addToken)(nameWithoutToken, token || newToken, attachTokenToFilename);
    return nameWithToken;
};
exports.ensureToken = ensureToken;
//# sourceMappingURL=ensureToken.js.map