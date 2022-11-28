"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseKvmdLine = void 0;
var convert_case_1 = require("convert-case");
var make_test_1 = require("make-test");
var example_1 = require("./example");
/**
 * parses a kv md line with data into a key, value, and comment (if available)
 *
 * if the key is an empty string, the line will return undefined
 */
var parseKvmdLine = function (string) {
    var _a;
    var htmlCommentRegex = /<!--[\s\S]*?-->/g;
    var lineWithoutComment = string.replace(htmlCommentRegex, "");
    var commentMatch = (_a = string.match(htmlCommentRegex)) === null || _a === void 0 ? void 0 : _a[0];
    var comment = commentMatch
        ? commentMatch.replace("<!--", "").replace("-->", "").trim()
        : null;
    var _b = lineWithoutComment
        .split(":")
        .map(function (x) { return x.trim(); }), keyString = _b[0], valueString = _b[1];
    var value = (valueString === null || valueString === void 0 ? void 0 : valueString.length) ? valueString : undefined;
    var slug = (0, convert_case_1.kebabCase)(keyString);
    if (keyString.length === 0)
        return;
    return {
        id: slug,
        name: keyString,
        value: value,
        comment: comment,
        slug: slug,
    };
};
exports.parseKvmdLine = parseKvmdLine;
var test = (0, make_test_1.makeTest)(function () { return (0, exports.parseKvmdLine)(example_1.exampleLine); }, function (line) {
    return JSON.stringify({
        name: "key",
        value: "value",
        comment: "comment",
        slug: "key",
    }) === JSON.stringify(line);
});
//# sourceMappingURL=parseKvmdLine.js.map