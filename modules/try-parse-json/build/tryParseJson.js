"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tryParseJson = void 0;
var removeCommentsRegex = /\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g;
/**
 * if text isn't json, returns null
 */
var tryParseJson = function (text, logParseError) {
    try {
        var jsonStringWithoutComments = text.replace(removeCommentsRegex, function (m, g) { return (g ? "" : m); });
        return JSON.parse(jsonStringWithoutComments);
    }
    catch (parseError) {
        if (logParseError)
            console.log("JSON Parse error:", parseError);
        return null;
    }
};
exports.tryParseJson = tryParseJson;
//# sourceMappingURL=tryParseJson.js.map