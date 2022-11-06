/**
 * make a subtext text based on the text of a complete paragraph (may contain single newlines and other markdown stuff, but never double newlines)
 *
 * Returns either the subtext string or a HTML string with a container around the subtext, depending on if you provide `withContainer`
 */
export var getSubtext = function (
/**
 * Raw markdown string
 */
markdownString, subtextConfig) {
    var _a;
    if (!subtextConfig.isEnabled)
        return;
    var allSubtext = "".concat((_a = subtextConfig.translations) === null || _a === void 0 ? void 0 : _a.join(","), " and the text is '").concat(markdownString, "'. Let's hook it into translate, and hook up all stuff!");
    return allSubtext;
};
