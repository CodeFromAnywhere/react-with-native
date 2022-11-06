import * as React from "react";
import { Div } from "react-with-native";
import { renderMarkdownChunk } from "./renderMarkdownChunk.js";
import { renderFrontmatter } from "./renderFrontMatter.js";
/**
 * renders the MardkownParse interface (including frontmatter)
 */
export var renderMarkdownParse = function (markdownParse, config) {
    var _a;
    return (React.createElement(Div, null,
        renderFrontmatter(markdownParse.parameters, { renderSpacer: true }), (_a = markdownParse.content) === null || _a === void 0 ? void 0 :
        _a.map(function (chunk) {
            return renderMarkdownChunk(chunk, config);
        })));
};
