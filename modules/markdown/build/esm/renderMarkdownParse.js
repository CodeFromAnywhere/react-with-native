import * as React from "react";
import { Div } from "react-with-native";
import { renderFrontmatter } from "./renderFrontMatter.js";
import { renderMarkdownContent } from "./renderMarkdownContent.js";
import { useOpenHashDetails } from "./useOpenHashDetails.js";
/**
 * renders the MardkownParse interface (including frontmatter)
 */
export var renderMarkdownParse = function (markdownParse, config) {
    // NB: not sure if this is the best way, there may be mulitiple markdown parses....
    useOpenHashDetails();
    return (React.createElement(Div, null,
        renderFrontmatter(markdownParse.parameters, { renderSpacer: true }),
        renderMarkdownContent(markdownParse.raw, config)));
};
