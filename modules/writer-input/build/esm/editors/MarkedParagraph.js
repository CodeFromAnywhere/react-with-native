import * as React from "react";
import { getSubtext } from "./getSubtext";
import { MarkedToken } from "./MarkedToken";
export var MarkedParagraph = function (props) {
    var markdownFileConfig = props.markdownFileConfig, markedToken = props.markedToken, subtextConfig = props.subtextConfig, subwordConfig = props.subwordConfig, testModeEnabled = props.testModeEnabled;
    var endsWithNewline = markedToken.raw.endsWith("\n");
    var paragraphText = markedToken.tokens.map(function (token) { return (React.createElement(MarkedToken, { item: token, subtextConfig: subtextConfig, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, testModeEnabled: testModeEnabled })); });
    var paragraphSubtextHtmlString = getSubtext(markedToken.raw, subtextConfig);
    return (React.createElement("div", null,
        paragraphText,
        paragraphSubtextHtmlString,
        endsWithNewline ? React.createElement("br", null) : null));
};
MarkedParagraph.exampleInputs = [
// "sentence 1 is a sentence\n sentence two is a sentence\nsentence 3 is a sentence",
// "second example\n",
// "third example\ngot another sentence\nand anotha one",
];
MarkedParagraph.toMarkdownString = function (element) {
    /**
     * NB: obviously this won't work with subtexts enabled!
     */
    return element.innerText;
};
