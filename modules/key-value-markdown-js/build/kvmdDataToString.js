"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kvmdDataToString = void 0;
/**
 * parses KeyValueMarkdownModelType into a string which can be part of a new markdown file
 *
 * NB: we need to know the previous line as well because the header we need to print depends on it
 *
 */
var kvmdDataToString = function (kvmdData, previous) {
    // headers only need a newline before it if it's not the first item (so there is a previous)
    var newlineIfHeader = kvmdData.isHeaderCalculated && !!previous ? "\n" : "";
    var level = kvmdData.isHeaderCalculated
        ? kvmdData.categoryStackCalculated.length + 1
        : 0;
    var headerPrefix = kvmdData.isHeaderCalculated
        ? "#".repeat(level).concat(" ")
        : "";
    var isFirstItem = !kvmdData.isHeaderCalculated && (previous === null || previous === void 0 ? void 0 : previous.isHeaderCalculated);
    var itemPrefix = isFirstItem ? "\n" : "";
    var line = "".concat(newlineIfHeader).concat(headerPrefix).concat(itemPrefix).concat(kvmdData.name ? "".concat(kvmdData.name, ": ") : "").concat(kvmdData.value || "").concat(kvmdData.comment ? " <!-- ".concat(kvmdData.comment, " -->") : "", "\n");
    return line;
};
exports.kvmdDataToString = kvmdDataToString;
//# sourceMappingURL=kvmdDataToString.js.map