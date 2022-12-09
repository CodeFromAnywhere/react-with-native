"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToken = void 0;
var model_types_1 = require("model-types");
var tokenPrefix_1 = require("./tokenPrefix");
/**
 * If previousToken is not present, will be generated randomly
 */
var addToken = function (name, 
/**
 * if given, uses this token, otherwise generates a new random token
 */
previousToken, attachTokenToFilename) {
    if (!attachTokenToFilename)
        return name;
    var newRandomToken = (0, model_types_1.generateRandomString)(32);
    return "".concat(name).concat(tokenPrefix_1.tokenPrefix).concat(previousToken || newRandomToken);
};
exports.addToken = addToken;
//# sourceMappingURL=addToken.js.map