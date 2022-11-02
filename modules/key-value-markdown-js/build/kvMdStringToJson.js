#!/usr/bin/env node
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
exports.test = exports.kvMdStringToJson = void 0;
var make_test_1 = require("make-test");
var markdown_parse_js_1 = require("markdown-parse-js");
var example_1 = require("./example");
var getParagraphsRecursively_1 = require("./getParagraphsRecursively");
var parseLine_1 = require("./parseLine");
/**
 * parses a key value md string (with support for headings and frontmatter)
 */
var kvMdStringToJson = function (kvMdString, relativeFilePath) {
    var _a = (0, markdown_parse_js_1.mdToJsonParse)(kvMdString), parameters = _a.parameters, content = _a.content;
    if (!content) {
        console.log("NO CONTENT FOUND");
        return { parameters: {}, data: [] };
    }
    var paragraphs = content
        .map(function (chunk) { return (0, getParagraphsRecursively_1.getParagraphsRecursively)(chunk); })
        .flat();
    var flatLines = paragraphs
        .map(function (paragraph) {
        var lines = paragraph.paragraph.split("\n");
        return lines.map(function (line) {
            return { categoryStack: paragraph.categoryStack, line: line };
        });
    })
        .flat();
    var data = flatLines
        .map(function (_a, index) {
        var line = _a.line, categoryStack = _a.categoryStack;
        var indexRelative = index;
        var id = relativeFilePath
            ? "".concat(relativeFilePath).concat(index)
            : String(index);
        var keyValueMarkdownModelType = __assign({ categoryStack: categoryStack, index: index, indexRelative: indexRelative, id: id }, (0, parseLine_1.parseLine)(line));
        return keyValueMarkdownModelType;
    })
        .filter(
    // empty data should be removed
    function (kvMarkdownData) {
        return !!(kvMarkdownData.comment ||
            kvMarkdownData.name ||
            kvMarkdownData.value);
    });
    return { parameters: parameters, data: data };
};
exports.kvMdStringToJson = kvMdStringToJson;
exports.test = (0, make_test_1.makeTest)(function () { return (0, exports.kvMdStringToJson)(example_1.exampleKvMdString); }, function (result) {
    return (JSON.stringify(result) === JSON.stringify(example_1.exampleKeyValueMarkdownParse));
});
//# sourceMappingURL=kvMdStringToJson.js.map