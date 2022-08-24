"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCodeblockMarkdown = void 0;
/**
 * small util function to create a markdown for a typescript string
 */
var createCodeblockMarkdown = function (codeString, language) {
    return "\n  ```".concat(language || "ts", "\n  ").concat(codeString, "\n  ```\n  ");
};
exports.createCodeblockMarkdown = createCodeblockMarkdown;
//# sourceMappingURL=createCodeblockMarkdown.js.map