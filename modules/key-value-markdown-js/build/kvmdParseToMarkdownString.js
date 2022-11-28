"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kvmdParseToMarkdownString = void 0;
var matter_types_1 = require("matter-types");
var kvmdDataToString_1 = require("./kvmdDataToString");
var make_test_1 = require("make-test");
var example_1 = require("./example");
/**
 * parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file
 */
var kvmdParseToMarkdownString = function (keyValueMarkdownParse) {
    var frontmatterString = (0, matter_types_1.frontmatterParseToString)(keyValueMarkdownParse.parameters);
    //2 go over every row, and parse it back into the line
    var result = keyValueMarkdownParse.data
        .map(function (kvmdData, index) {
        var previous = keyValueMarkdownParse.data[index - 1];
        var string = (0, kvmdDataToString_1.kvmdDataToString)(kvmdData, previous);
        return string;
    })
        .join("");
    return "".concat(frontmatterString).concat(result);
};
exports.kvmdParseToMarkdownString = kvmdParseToMarkdownString;
var test = (0, make_test_1.makeTest)(function () {
    return (0, exports.kvmdParseToMarkdownString)(example_1.exampleKeyValueMarkdownParse);
}, function (result) {
    // console.log("RESULT", result, "EXAMPLE", exampleKvMdString);
    return result === example_1.exampleKvMdString;
});
//# sourceMappingURL=kvmdParseToMarkdownString.js.map