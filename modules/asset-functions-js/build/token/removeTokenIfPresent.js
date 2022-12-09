"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTokenIfPresent = void 0;
var tokenPrefix_1 = require("./tokenPrefix");
var removeTokenIfPresent = function (name, attachTokenToFilename) {
    if (!attachTokenToFilename) {
        return { nameWithoutToken: name, token: undefined };
    }
    var _a = name.split(tokenPrefix_1.tokenPrefix), nameWithoutToken = _a[0], token = _a[1];
    return { nameWithoutToken: nameWithoutToken, token: token };
};
exports.removeTokenIfPresent = removeTokenIfPresent;
//# sourceMappingURL=removeTokenIfPresent.js.map