"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParagraphsRecursively = void 0;
var make_test_1 = require("make-test");
var markdown_parse_js_1 = require("markdown-parse-js");
var example_1 = require("./example");
/**
 * recursively dives into the Chunk to get all paragraphs inside
 */
var getParagraphsRecursively = function (chunk, categoryStackCalculatedUntilNow) {
    var _a;
    var categoryStackCalculated = categoryStackCalculatedUntilNow || [];
    if (chunk.title) {
        categoryStackCalculated.push(chunk.title);
    }
    var childParagraphs = ((_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(function (childChunk) {
        return (0, exports.getParagraphsRecursively)(childChunk, categoryStackCalculated);
    }).flat()) || [];
    var thisParagraph = {
        paragraph: chunk.content || "",
        categoryStackCalculated: categoryStackCalculated,
    };
    return __spreadArray([thisParagraph], childParagraphs, true);
};
exports.getParagraphsRecursively = getParagraphsRecursively;
var test = (0, make_test_1.makeTest)(function () {
    var content = (0, markdown_parse_js_1.mdToJsonParse)(example_1.exampleKvMdString).content;
    if (!content) {
        return;
    }
    return (0, exports.getParagraphsRecursively)(content[2]);
});
//# sourceMappingURL=getParagraphsRecursively.js.map