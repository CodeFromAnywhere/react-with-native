"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.frontmatterParseToString = exports.quotedOrNot = exports.getFrontmatterValueString = exports.stringifyNewlines = void 0;
var make_test_1 = require("make-test");
var js_util_1 = require("js-util");
var stringifyNewlines = function (string) {
    return string.replaceAll("\n", "\\n");
};
exports.stringifyNewlines = stringifyNewlines;
var getFrontmatterValueString = function (value) {
    if (value === undefined)
        return null;
    if (value === null)
        return "null";
    if (typeof value === "number")
        return String(value);
    if (typeof value === "boolean")
        return String(value);
    if (typeof value === "boolean")
        return String(value);
    if (Array.isArray(value))
        return value.map(exports.quotedOrNot).map(exports.stringifyNewlines).join(", ");
    if (typeof value === "string")
        return (0, exports.stringifyNewlines)((0, exports.quotedOrNot)(value));
    // NB: according to current support this should never happen
    if (typeof value === "object")
        return "\"".concat(JSON.stringify(value), "\"");
    return null;
};
exports.getFrontmatterValueString = getFrontmatterValueString;
/**
 * For now, simply quote a string if it contains commas
 *
 * There are probably more edgecases that need to be fixed here
 */
var quotedOrNot = function (string) {
    var returnString = (string === null || string === void 0 ? void 0 : string.includes(",")) ? "\"".concat(string, "\"") : string;
    return returnString;
};
exports.quotedOrNot = quotedOrNot;
/**
 * Parses frontmatter object into a frontmatter string
 *
 * - includes a newline at the end
 * - string[] becomes a comma separated string
 * - parse xxxAt values into human readable dates
 */
var frontmatterParseToString = function (frontmatter) {
    var keys = Object.keys(frontmatter);
    var keyValueLines = keys
        .map(function (key) {
        var value = frontmatter[key];
        var valueString = (0, exports.getFrontmatterValueString)(value);
        if (valueString === null) {
            return null;
        }
        if (key.endsWith("At")) {
            valueString =
                valueString.length > 0 ? new Date(valueString).toDateString() : "";
        }
        var parsedFrontmatterLine = "".concat(key, ": ").concat(valueString);
        return parsedFrontmatterLine;
    })
        .filter(js_util_1.notEmpty);
    return keyValueLines.length === 0
        ? ""
        : "---\n".concat(keyValueLines.join("\n"), "\n---\n");
};
exports.frontmatterParseToString = frontmatterParseToString;
exports.test = [
    (0, make_test_1.makeTest)(function () {
        return (0, exports.frontmatterParseToString)({ a: 1, b: 2, c: true, d: "string" });
    }, function (result) { return result === "---\na: 1\nb: 2\nc: true\nd: string\n---\n"; }),
    (0, make_test_1.makeTest)(function () {
        return (0, exports.frontmatterParseToString)({});
    }, function (result) { return result === ""; }),
];
//# sourceMappingURL=frontmatterParseToString.js.map