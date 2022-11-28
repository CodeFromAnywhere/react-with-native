import * as React from "react";
import { renderMarkdownContent } from "./renderMarkdownContent.js";
import { createCodeblockMarkdown } from "ui-util";
import { Div } from "react-with-native";
import { useState } from "react";
import { ClickableIcon } from "clickable-icon";
export var defaultExpandedMode = "scroll";
export var defaultMinimalMode = "preview";
/**
 * Renders a markdown codeblock with a text as content and an optional extension
 *
 */
export var MarkdownCodeblock = function (props) {
    var text = props.text, extension = props.extension, expandedMode = props.expandedMode, isInitiallyExpanded = props.isInitiallyExpanded, minimalMode = props.minimalMode, isModeStatic = props.isModeStatic;
    var _a = useState(isInitiallyExpanded), isExpanded = _a[0], setIsExpanded = _a[1];
    var mode = isExpanded
        ? expandedMode || defaultExpandedMode
        : minimalMode || defaultMinimalMode;
    var realText = mode === "preview"
        ? text.length > 200
            ? text.slice(0, 198) + ".."
            : text
        : text;
    var nothingToExpand = mode === "preview" && text === realText;
    return (React.createElement(Div, { className: "w-full" },
        isModeStatic ? null : nothingToExpand ? null : (React.createElement(Div, null,
            React.createElement(ClickableIcon, { onClick: function () {
                    setIsExpanded(!isExpanded);
                }, emoji: isExpanded ? "➖ Minimise" : "➕ Expand" }))),
        React.createElement(Div, { className: mode === "scroll"
                ? "overflow-y-auto max-h-[60vh] max-w-[60vw]"
                : mode === "preview"
                    ? "opacity-25 bg-black"
                    : undefined }, renderMarkdownContent(createCodeblockMarkdown(realText, extension || null), 
        // The config below is not needed since all that is renderedd is a codeblock, which doesn't need to render links etc.
        {
            projectRelativeBaseFolderPath: "",
            projectRelativeMarkdownFilePath: "",
        }))));
};
