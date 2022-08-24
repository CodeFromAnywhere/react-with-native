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
exports.test = exports.kvmdDataMap = exports.kvMdStringToJson = exports.parseLine = exports.flattenMarkdownChunks = void 0;
var make_test_1 = require("make-test");
var md_to_json_parse_1 = require("md-to-json-parse");
var flattenMarkdownChunks = function (markdownChunks) {
    var flatMarkdownChunks = markdownChunks
        .map(function (chunk) { return getParagraphsRecursively(chunk); })
        .flat();
    return flatMarkdownChunks;
};
exports.flattenMarkdownChunks = flattenMarkdownChunks;
/**
 * recursively dives into the Chunk to get all paragraphs inside
 */
var getParagraphsRecursively = function (chunk, categoryStackUntilNow) {
    var _a;
    var categoryStack = chunk.title
        ? (categoryStackUntilNow || []).concat([chunk.title])
        : categoryStackUntilNow || [];
    var paragraphs = ((_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(function (chunk) { return getParagraphsRecursively(chunk, categoryStack); }).flat()) || [];
    return __spreadArray([{ paragraph: chunk.content || "", categoryStack: categoryStack }], paragraphs, true);
};
/**
 * parses a kv md line with data into a key, value, and comment (if available)
 */
var parseLine = function (string) {
    var _a;
    var htmlCommentRegex = /<!--[\s\S]*?-->/g;
    var lineWithoutComment = string.replace(htmlCommentRegex, "");
    var commentMatch = (_a = string.match(htmlCommentRegex)) === null || _a === void 0 ? void 0 : _a[0];
    var comment = commentMatch
        ? commentMatch.replace("<!--", "").replace("-->", "").trim()
        : undefined;
    var _b = lineWithoutComment
        .split(":")
        .map(function (x) { return x.trim(); }), keyString = _b[0], valueString = _b[1];
    var key = (keyString === null || keyString === void 0 ? void 0 : keyString.length) ? keyString : undefined;
    var value = (valueString === null || valueString === void 0 ? void 0 : valueString.length) ? valueString : undefined;
    return { key: key, value: value, comment: comment };
};
exports.parseLine = parseLine;
/**
 * parses a key value md string (with support for headings and frontmatter)
 */
var kvMdStringToJson = function (kvMdString) {
    var _a = (0, md_to_json_parse_1.mdToJsonParse)(kvMdString), parameters = _a.parameters, content = _a.content;
    if (!content) {
        console.log("NO CONTENT FOUND");
        return { parameters: {}, data: [] };
    }
    var flatLines = content
        .map(function (chunk) { return getParagraphsRecursively(chunk); })
        .flat();
    var data = flatLines
        .map(function (_a) {
        var paragraph = _a.paragraph, categoryStack = _a.categoryStack;
        return (__assign({ categoryStack: categoryStack }, (0, exports.parseLine)(paragraph)));
    })
        .filter(
    // empty data should be removed
    function (kvMarkdownData) {
        return kvMarkdownData.comment || kvMarkdownData.key || kvMarkdownData.value;
    });
    return { parameters: parameters, data: data };
};
exports.kvMdStringToJson = kvMdStringToJson;
/**
 * mapper function to give a kvmd data object other parameters.
 *
 * NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.
 */
var kvmdDataMap = function (data, _a) {
    var keyName = _a.keyName, valueName = _a.valueName, categoryStackName = _a.categoryStackName, commentName = _a.commentName;
    var newDataObject = data.map(function (item) {
        var _a;
        var newData = (_a = {},
            _a[keyName || "key"] = item.key,
            _a[valueName || "value"] = item.value,
            _a[commentName || "comment"] = item.comment,
            _a[categoryStackName || "categoryStack"] = item.categoryStack,
            _a);
        return newData;
    });
    return newDataObject;
};
exports.kvmdDataMap = kvmdDataMap;
var exampleKvMdString = "# category 1\n\nkey1: value1\nKey 2: Value 2 <!-- Comment... -->\n\n# category 2\n\nkey1: value1\nKey 2: Value 2 <!-- Comment... -->\n\n# category 3\n\n## subcat\n\nkey: value\nkey: value\n\n## subcat 2\n\nkey: value\nkey: value\nkey: value\nkey: value\n\n# last cat\n\nkey: value\nkey: value\n";
var exampleLine = "key: value <!-- comment -->";
exports.test = [
    (0, make_test_1.makeTest)(function () {
        var content = (0, md_to_json_parse_1.mdToJsonParse)(exampleKvMdString).content;
        return content;
    }
    // (result) =>
    //   JSON.stringify(result) ===
    //   JSON.stringify([
    //     {
    //       level: 1,
    //       title: "category 1",
    //       content: undefined,
    //       children: [
    //         { level: 0, content: "key1: value1" },
    //         { level: 0, content: "Key 2: Value 2 <!-- Comment... -->" },
    //         { level: 0, content: "" },
    //       ],
    //     },
    //     {
    //       level: 1,
    //       title: "category 2",
    //       content: undefined,
    //       children: [
    //         { level: 0, content: "key1: value1" },
    //         { level: 0, content: "Key 2: Value 2 <!-- Comment... -->" },
    //         { level: 0, content: "" },
    //       ],
    //     },
    //     {
    //       level: 1,
    //       title: "category 3",
    //       content: undefined,
    //       children: [
    //         {
    //           level: 2,
    //           title: "subcat",
    //           content: undefined,
    //           children: [
    //             { level: 0, content: "key: value" },
    //             { level: 0, content: "key: value" },
    //             { level: 0, content: "" },
    //           ],
    //         },
    //         {
    //           level: 2,
    //           title: "subcat 2",
    //           content: undefined,
    //           children: [
    //             { level: 0, content: "key: value" },
    //             { level: 0, content: "key: value" },
    //             { level: 0, content: "key: value" },
    //             { level: 0, content: "key: value" },
    //             { level: 0, content: "" },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       level: 1,
    //       title: "last cat",
    //       content: undefined,
    //       children: [
    //         { level: 0, content: "key: value" },
    //         { level: 0, content: "key: value" },
    //         { level: 0, content: "" },
    //       ],
    //     },
    //   ])
    ),
    (0, make_test_1.makeTest)(function () {
        var content = (0, md_to_json_parse_1.mdToJsonParse)(exampleKvMdString).content;
        if (!content) {
            return;
        }
        return getParagraphsRecursively(content[2]);
    }
    // (result) =>
    //   JSON.stringify(result) ===
    //   JSON.stringify([
    //     { paragraph: "", categoryStack: ["category 3"] },
    //     { paragraph: "", categoryStack: ["category 3", "subcat"] },
    //     {
    //       paragraph: "key: value",
    //       categoryStack: ["category 3", "subcat"],
    //     },
    //     {
    //       paragraph: "key: value",
    //       categoryStack: ["category 3", "subcat"],
    //     },
    //     { paragraph: "", categoryStack: ["category 3", "subcat"] },
    //     { paragraph: "", categoryStack: ["category 3", "subcat 2"] },
    //     {
    //       paragraph: "key: value",
    //       categoryStack: ["category 3", "subcat 2"],
    //     },
    //     {
    //       paragraph: "key: value",
    //       categoryStack: ["category 3", "subcat 2"],
    //     },
    //     {
    //       paragraph: "key: value",
    //       categoryStack: ["category 3", "subcat 2"],
    //     },
    //     {
    //       paragraph: "key: value",
    //       categoryStack: ["category 3", "subcat 2"],
    //     },
    //     { paragraph: "", categoryStack: ["category 3", "subcat 2"] },
    //   ])
    ),
    (0, make_test_1.makeTest)(function () { return (0, exports.parseLine)(exampleLine); }, function (line) {
        return JSON.stringify({ key: "key", value: "value", comment: "comment" }) ===
            JSON.stringify(line);
    }),
    (0, make_test_1.makeTest)(function () { return (0, exports.kvMdStringToJson)(exampleKvMdString); }
    // TODO: This is broken. fix later
    // (result) =>
    //   JSON.stringify(result) ===
    //   JSON.stringify({
    //     parameters: {},
    //     data: [
    //       {
    //         categoryStack: ["category 1"],
    //         key: "key1",
    //         value: "value1",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["category 1"],
    //         key: "Key 2",
    //         value: "Value 2",
    //         comment: "Comment...",
    //       },
    //       {
    //         categoryStack: ["category 2"],
    //         key: "key1",
    //         value: "value1",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["category 2"],
    //         key: "Key 2",
    //         value: "Value 2",
    //         comment: "Comment...",
    //       },
    //       {
    //         categoryStack: ["category 3", "subcat"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["category 3", "subcat"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["category 3", "subcat 2"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["category 3", "subcat 2"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["category 3", "subcat 2"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["category 3", "subcat 2"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["last cat"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //       {
    //         categoryStack: ["last cat"],
    //         key: "key",
    //         value: "value",
    //         comment: undefined,
    //       },
    //     ],
    //   })
    ),
];
//# sourceMappingURL=general.js.map