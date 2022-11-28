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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownStringToKvmdParse = void 0;
var convert_case_1 = require("convert-case");
var make_test_1 = require("make-test");
var markdown_parse_js_1 = require("markdown-parse-js");
var example_1 = require("./example");
var getKvmdItemsRecursively_1 = require("./getKvmdItemsRecursively");
/**
 * parses a key value md string (with support for headings and frontmatter)
 */
var markdownStringToKvmdParse = function (kvMdString, dbFileLocation) {
    var _a = (0, markdown_parse_js_1.mdToJsonParse)(kvMdString), parameters = _a.parameters, content = _a.content;
    var absolutePath = dbFileLocation.absolutePath, modelName = dbFileLocation.modelName, modelLocation = __rest(dbFileLocation, ["absolutePath", "modelName"]);
    var parentKey = "parent_".concat((0, convert_case_1.camelCase)(modelName), "Slug");
    if (!content) {
        console.log("NO CONTENT FOUND");
        return { parameters: {}, data: [] };
    }
    var kvmdItems = content
        .map(function (chunk) { return (0, getKvmdItemsRecursively_1.getKvmdItemsRecursively)(chunk); })
        .flat();
    var data = kvmdItems.map(function (x) {
        var _a;
        return (__assign(__assign(__assign({}, x), modelLocation), (_a = {}, _a[parentKey] = x.categoryStackCalculated[x.categoryStackCalculated.length - 1], _a)));
    });
    return { parameters: parameters, data: data };
};
exports.markdownStringToKvmdParse = markdownStringToKvmdParse;
var test = (0, make_test_1.makeTest)(function () {
    return (0, exports.markdownStringToKvmdParse)(example_1.exampleKvMdString, {
        modelName: "Test",
        absolutePath: "/ss/ss/s/s/testksjsk.md",
        operationName: null,
        projectRelativePath: "test.md",
    });
}, function (result) {
    return (JSON.stringify(result) === JSON.stringify(example_1.exampleKeyValueMarkdownParse));
});
//# sourceMappingURL=markdownStringToKvmdParse.js.map