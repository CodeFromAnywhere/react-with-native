"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCodespansFromTokenRecursively = void 0;
var findCodespansFromTokenRecursively = function (token) {
    if (token.type === "codespan") {
        return [token.text];
    }
    if (token.type === "paragraph") {
        var result = token.tokens.map(exports.findCodespansFromTokenRecursively).flat();
        return result;
    }
    return [];
};
exports.findCodespansFromTokenRecursively = findCodespansFromTokenRecursively;
//# sourceMappingURL=findCodespansFromTokenRecursively.js.map