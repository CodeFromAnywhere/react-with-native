"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceLastOccurence = exports.reverseString = void 0;
var reverseString = function (string) {
    return string.split("").reverse().join("");
};
exports.reverseString = reverseString;
/**
 * Replaces the last occerence of something in a string by something else
 *
 * Example:
 *
 * ```ts
 * const result = replaceLastOccurence("theBestSlugSlugSlug", "Slug", "Slack");
 * console.log(result); // returns theBestSlugSlugSlack
 * ```
 *
 * NB: this is not the most efficient method, as it reverses the string by making it an array, twice. It can probably be done more efficiently by using `String.lastIndexOf`
 */
var replaceLastOccurence = function (string, searchValue, replaceValue) {
    var _a = __read([
        string,
        searchValue,
        replaceValue,
    ].map(exports.reverseString), 3), reversedString = _a[0], reversedSearchValue = _a[1], reversedReplaceValue = _a[2];
    var replacedReversedString = reversedString.replace(reversedSearchValue, reversedReplaceValue);
    var replacedString = (0, exports.reverseString)(replacedReversedString);
    return replacedString;
};
exports.replaceLastOccurence = replaceLastOccurence;
//# sourceMappingURL=replaceLastOccurence.js.map