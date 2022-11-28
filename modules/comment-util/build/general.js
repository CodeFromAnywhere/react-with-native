#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripComment = exports.trim = exports.stripStar = exports.stripCommentEnd = exports.stripCommentStart = exports.stripSlashes = void 0;
var js_util_1 = require("js-util");
var stripSlashes = function (trimmedLine) {
    return trimmedLine.startsWith("//") ? trimmedLine.substring(2).trim() : trimmedLine;
};
exports.stripSlashes = stripSlashes;
var stripCommentStart = function (trimmedLine) {
    return trimmedLine.startsWith("/**")
        ? trimmedLine.substring(3).trim()
        : trimmedLine.startsWith("/*")
            ? trimmedLine.substring(2).trim()
            : trimmedLine;
};
exports.stripCommentStart = stripCommentStart;
// only strip slahes for single-line comments
var stripCommentEnd = function (trimmedLine) {
    return trimmedLine.endsWith("*/")
        ? trimmedLine.substring(0, trimmedLine.length - 2).trim()
        : trimmedLine;
};
exports.stripCommentEnd = stripCommentEnd;
var stripStar = function (trimmedLine) {
    return trimmedLine.startsWith("*") ? trimmedLine.substring(1).trim() : trimmedLine;
};
exports.stripStar = stripStar;
var trim = function (string) { return string.trim(); };
exports.trim = trim;
/** removes new lines at beginning and end
 *
 * NB: This function uses a small recursion! I don't know if this is very efficient, but shouldn't be too deep!
 *
 * NB: it should be noted that a newline apparently seems to be counting as a single character! Strange.
 */
var trimSurroundingNewlines = function (string) {
    return string.startsWith("\n")
        ? trimSurroundingNewlines(string.substring(1))
        : string.endsWith("\n")
            ? trimSurroundingNewlines(string.substring(0, string.length - 1))
            : string;
};
/**
  parses comments (single line, multiline and doc) and removes the comment syntax

  - removes slashes
  - removes multiline comment prefix
  - removes multiline comment suffix
  - removes doccomment stars

  example input: `// comment`, output: `comment`

  example input:
  ```
  /**
   * some
   * multiline
   * comment *~/
   ```
   output:
   ```
   some
   multiline
   comment
   ```
 */
var stripComment = function (rawCommentString) {
    var lines = rawCommentString.split("\n");
    var strippedComment = lines
        .map(function (line) {
        return (0, js_util_1.apply)([
            exports.trim,
            exports.stripSlashes,
            exports.stripCommentStart,
            exports.stripCommentEnd,
            exports.stripStar,
            exports.trim,
        ], line);
    })
        .join("\n");
    return (0, js_util_1.apply)([trimSurroundingNewlines], strippedComment);
};
exports.stripComment = stripComment;
//# sourceMappingURL=general.js.map