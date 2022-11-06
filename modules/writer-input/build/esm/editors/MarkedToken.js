import * as React from "react";
import { getRealSrc } from "markdown";
import { trimAround } from "../util/word-trimming";
import { getSubtext } from "./getSubtext";
import { MarkedParagraph } from "./MarkedParagraph";
import { SpannedSentence } from "./SpannedSentence";
import { MarkedText } from "./MarkedText";
import { testContentEditableRenderComponent } from "./testContentEditableRenderComponent";
export var MAX_COMPLETIONS_AMOUNT = 100;
export var depthFontSizes = {
    1: 40,
    2: 32,
    3: 24,
    4: 18,
    5: 16,
    6: 14,
    7: 12,
};
export var metaClickableClassName = "context-writer-meta-clickable";
/**
 * Function that can be used to iterate over the marked parse and style every token, recursively
 *
 * NB: this returns a regular react component, and should, for setting it as InnerHTML, be parsed with the `ReactDOMServer`
 */
export var MarkedToken = function (props) {
    var item = props.item, markdownFileConfig = props.markdownFileConfig, subtextConfig = props.subtextConfig, subwordConfig = props.subwordConfig, testModeEnabled = props.testModeEnabled;
    if (item.type === "heading") {
        var fontSize = depthFontSizes[item.depth];
        var headingContent = item.tokens && item.tokens.length > 1 ? ("".concat("#".repeat(item.depth), " ").concat(item.tokens.map(function (token) { return (React.createElement(MarkedToken, { item: token, subtextConfig: subtextConfig, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, testModeEnabled: testModeEnabled })); }))) : (React.createElement(SpannedSentence, { sentence: item.raw, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig }));
        return (React.createElement(React.Fragment, null,
            React.createElement("p", null,
                React.createElement("strong", { style: { color: "blue", fontSize: fontSize } }, headingContent)),
            getSubtext(item.text, subtextConfig),
            React.createElement("br", null)));
    }
    if (item.type === "space") {
        // 1 newline splits into two parts here, 5 newlines are 6 parts, so if we omit the first one, we get an array with the length of the amount of newlines
        var newlines = item.raw.split("\n").slice(1);
        return (React.createElement(React.Fragment, null, newlines.map(function () { return (React.createElement("br", null)); })));
    }
    if (item.type === "blockquote") {
        // > ....
        return (React.createElement("p", null,
            React.createElement("strong", { style: { color: "blue" } }, ">"),
            React.createElement(SpannedSentence, { sentence: item.text, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig })));
    }
    if (item.type === "paragraph") {
        // Paragraph always has tokens?
        if (testModeEnabled) {
            testContentEditableRenderComponent(MarkedParagraph, item);
        }
        return (React.createElement(MarkedParagraph, { markedToken: item, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig }));
    }
    if (item.type === "text") {
        if (testModeEnabled) {
            testContentEditableRenderComponent(MarkedText, item);
        }
        return (React.createElement(MarkedText, { markedToken: item, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig }));
    }
    if (item.type === "list") {
        return (React.createElement(React.Fragment, null, item.items.map(function (token) { return (React.createElement(MarkedToken, { item: token, subtextConfig: subtextConfig, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, testModeEnabled: testModeEnabled })); })));
    }
    if (item.type === "list_item") {
        var beforeText = item.raw.split(item.text)[0];
        var text = (React.createElement(MarkedText, { markedToken: item, subwordConfig: subwordConfig, subtextConfig: subtextConfig, markdownFileConfig: markdownFileConfig }));
        return (React.createElement(React.Fragment, null,
            React.createElement("b", { style: { color: "blue" } }, beforeText),
            " ",
            text,
            React.createElement("br", null)));
    }
    if (item.type === "escape") {
        return (React.createElement("b", { style: { color: "red" } },
            React.createElement(MarkedText, { markedToken: item, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig })));
    }
    if (item.type === "strong") {
        return (React.createElement("b", { style: { color: "blue" } },
            React.createElement(MarkedText, { markedToken: item, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig })));
    }
    if (item.type === "em") {
        return (React.createElement("i", { style: { color: "blue" } },
            React.createElement(MarkedText, { markedToken: item, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig })));
    }
    if (item.type === "image") {
        var realSrc = getRealSrc(item.href, markdownFileConfig);
        return (React.createElement("div", { "data-href": realSrc, className: metaClickableClassName, "data-html": "true", "data-tip": "<img src='${realSrc}' width=200 /><br>'Cmd+Click' to open" }, item.raw));
    }
    if (item.type === "link") {
        return (React.createElement("div", { "data-href": item.href, className: metaClickableClassName, "data-html": "true", "data-tip": "'Cmd+Click' to open" }, item.raw));
    }
    if (item.type === "html") {
        return (React.createElement("span", { style: { color: "green" } }, item.raw
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll("\n", "<br />")));
    }
    if (item.type === "codespan") {
        // Need to add tooltip here for augmented words
        var trimmedWord = trimAround(item.raw, 1);
        return (React.createElement("span", { style: { color: "orange" } },
            "\\`",
            trimmedWord.split(" ").map(function (word) {
                var _a;
                var augmentedWord = (_a = markdownFileConfig.augmentedWordObject) === null || _a === void 0 ? void 0 : _a[word];
                return (React.createElement("span", { "data-tip": augmentedWord && augmentedWord.spoiler
                        ? augmentedWord.spoiler
                        : undefined }, word));
            }),
            "\\`"));
    }
    if (item.type === "code") {
        return (React.createElement("span", { style: { color: "orange" } },
            React.createElement(MarkedText, { markedToken: item, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig })));
    }
    if (item.type === "table") {
        return (React.createElement("span", { style: { color: "pink" } },
            React.createElement(MarkedText, { markedToken: item, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig, subwordConfig: subwordConfig })));
    }
    console.log("unhandled: ".concat(item.type), item);
    return React.createElement(React.Fragment, null);
};
