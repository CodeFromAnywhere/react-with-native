"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstCommentTypes = void 0;
var code_types_1 = require("code-types");
var js_util_1 = require("js-util");
/**
 * Tries to find tie first appearing special comment line and parses it and returns it as part of the `CommentTypeObject`
 */
var findFirstCommentTypes = function (strippedFullComment) {
    var lines = strippedFullComment.split("\n");
    var specialCommentTypesObject = code_types_1.commentTypes
        .map(function (commentType) {
        var _a;
        var matchingPart = "".concat(commentType.toUpperCase(), ":");
        var matchingLine = lines.find(function (line) {
            var trimmedLine = line.trimStart();
            var isMatch = trimmedLine.startsWith(matchingPart);
            return isMatch;
        });
        if (!matchingLine)
            return;
        var strippedMatchingLine = matchingLine.trimStart();
        var specialCommentWithoutPrefix = strippedMatchingLine.slice(matchingPart.length);
        return _a = {},
            _a[commentType] = specialCommentWithoutPrefix,
            _a;
    })
        .filter(js_util_1.notEmpty);
    var fullObject = (0, js_util_1.mergeObjectsArray)(specialCommentTypesObject);
    return fullObject;
};
exports.findFirstCommentTypes = findFirstCommentTypes;
//# sourceMappingURL=findFirstCommentTypes.js.map