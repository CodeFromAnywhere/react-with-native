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
exports.getKvmdItemsRecursively = void 0;
var js_util_1 = require("js-util");
var make_test_1 = require("make-test");
var markdown_parse_js_1 = require("markdown-parse-js");
var example_1 = require("./example");
var parseKvmdLine_1 = require("./parseKvmdLine");
/**
 * recursively dives into the Chunk to get all kvmd items
 *
 * NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name
 */
var getKvmdItemsRecursively = function (chunk, categoryStackCalculatedUntilNow) {
    var _a;
    // NB: copy
    var categoryStackCalculated = categoryStackCalculatedUntilNow
        ? __spreadArray([], categoryStackCalculatedUntilNow, true) : [];
    var allKvmdItems = [];
    // If this chunk has a title (this is a header)
    if (chunk.title) {
        var headerParsedKvmdLine = (0, parseKvmdLine_1.parseKvmdLine)(chunk.title);
        // NB: titles with an empty key are ignored
        if (headerParsedKvmdLine) {
            // NB: also add the title as a model item
            var headerKvmdItem = __assign(__assign({}, headerParsedKvmdLine), { isHeaderCalculated: true, 
                // NB: copy!
                categoryStackCalculated: __spreadArray([], categoryStackCalculated, true) });
            allKvmdItems.push(headerKvmdItem);
            // NB: the slug of the title is added to the categoryStackCalculated, but only AFTER adding the kvmd item of the title
            categoryStackCalculated.push(headerParsedKvmdLine.slug);
        }
    }
    var childKvmdItems = ((_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(function (childChunk) {
        return (0, exports.getKvmdItemsRecursively)(childChunk, categoryStackCalculated);
    }).flat()) || [];
    allKvmdItems = allKvmdItems.concat(childKvmdItems);
    var lineKvmdItems = (chunk.content || "")
        // NB: we are splitting on newlines here because content can still contain newlines.
        .split("\n")
        .map(function (line) {
        var parsedKvmdLine = (0, parseKvmdLine_1.parseKvmdLine)(line);
        if (!parsedKvmdLine)
            return;
        var contentKvmdItem = __assign(__assign({}, parsedKvmdLine), { isHeaderCalculated: false, categoryStackCalculated: categoryStackCalculated });
        return contentKvmdItem;
    })
        .filter(js_util_1.notEmpty);
    allKvmdItems = allKvmdItems.concat(lineKvmdItems);
    return allKvmdItems;
};
exports.getKvmdItemsRecursively = getKvmdItemsRecursively;
var test = (0, make_test_1.makeTest)(function () {
    var content = (0, markdown_parse_js_1.mdToJsonParse)(example_1.exampleKvMdString).content;
    if (!content) {
        return;
    }
    return (0, exports.getKvmdItemsRecursively)(content[2]);
});
//# sourceMappingURL=getKvmdItemsRecursively.js.map