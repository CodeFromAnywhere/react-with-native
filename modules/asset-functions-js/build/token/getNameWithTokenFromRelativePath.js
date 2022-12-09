"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameWithTokenFromRelativePath = void 0;
var getNameFromRelativePath_1 = require("../getNameFromRelativePath");
var ensureToken_1 = require("./ensureToken");
/**
 * first gets the name from the relativePath
 *
 * then ensures the token is attached (if not already there)
 */
var getNameWithTokenFromRelativePath = function (relativePath, attachTokenToFilename, newToken) {
    var name = (0, getNameFromRelativePath_1.getNameFromRelativePath)(relativePath);
    if (!attachTokenToFilename)
        return name;
    return (0, ensureToken_1.ensureToken)(name, newToken, attachTokenToFilename);
};
exports.getNameWithTokenFromRelativePath = getNameWithTokenFromRelativePath;
//# sourceMappingURL=getNameWithTokenFromRelativePath.js.map