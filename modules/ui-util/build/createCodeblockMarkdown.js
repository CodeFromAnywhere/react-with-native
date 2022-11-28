"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCodeblockMarkdown = void 0;
/**
 * small util function to create a markdown for a string.
 */
var createCodeblockMarkdown = function (text, 
/**
 * Extension that should be used for color highlighting the text
 *
 * Set to `null` if you don't want to specify a language
 *
 * defaults to "ts"
 */
language) {
    if (language === void 0) { language = "ts"; }
    return "\n  ```".concat(language === null ? "" : language || "ts", "\n  ").concat(text, "\n  ```\n  ");
};
exports.createCodeblockMarkdown = createCodeblockMarkdown;
//# sourceMappingURL=createCodeblockMarkdown.js.map