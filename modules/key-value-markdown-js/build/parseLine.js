"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.parseLine = void 0;
var convert_case_1 = require("convert-case");
var make_test_1 = require("make-test");
var example_1 = require("./example");
/**
 * parses a kv md line with data into a key, value, and comment (if available)
 */
var parseLine = function (string, modelLocation) {
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
    return __assign({ name: keyString, value: value, comment: comment, slug: (0, convert_case_1.kebabCase)(keyString) }, modelLocation);
};
exports.parseLine = parseLine;
exports.test = (0, make_test_1.makeTest)(function () {
    return (0, exports.parseLine)(example_1.exampleLine, {
        operationName: null,
        projectRelativePath: "test",
    });
}, function (line) {
    return JSON.stringify({
        name: "key",
        value: "value",
        comment: "comment",
        slug: "key",
    }) === JSON.stringify(line);
});
//# sourceMappingURL=parseLine.js.map