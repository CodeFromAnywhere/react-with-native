import * as React from "react";
import { Div } from "react-with-native";
import { renderMarkdownTitle } from "./renderMarkdownTitle.js";
import { renderMarkdownContent } from "./renderMarkdownContent.js";
/**
 * renders a MarkdownChunk interface
 */
export var renderMarkdownChunk = function (chunk, config) {
    var _a;
    var title = chunk.title
        ? renderMarkdownTitle(chunk.title, chunk.level)
        : null;
    return (React.createElement(Div, null,
        title,
        chunk.content ? renderMarkdownContent(chunk.content, config) : null, (_a = chunk.children) === null || _a === void 0 ? void 0 :
        _a.map(function (chunk) { return renderMarkdownChunk(chunk, config); })));
};
