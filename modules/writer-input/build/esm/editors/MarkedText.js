import * as React from "react";
import { SpannedSentence } from "./SpannedSentence";
export var MarkedText = function (props) {
    var subwordConfig = props.subwordConfig, markdownFileConfig = props.markdownFileConfig, subtextConfig = props.subtextConfig, markedToken = props.markedToken, testModeEnabled = props.testModeEnabled;
    var sentences = markedToken.raw.split("\n");
    return (React.createElement("div", null, sentences.map(function (sentence) { return (React.createElement("div", null,
        React.createElement(SpannedSentence, { sentence: sentence, subwordConfig: subwordConfig, markdownFileConfig: markdownFileConfig, subtextConfig: subtextConfig, testModeEnabled: testModeEnabled }))); })));
};
MarkedText.toMarkdownString = function (element) {
    /**
     * TODO: later do stuff with this here
     */
    Array.from(element.childNodes).map(function () { });
    return element.innerText;
};
MarkedText.exampleInputs = [
// "sentence 1 is a sentence\n sentence two is a sentence\nsentence 3 is a sentence",
// "second example\n",
// "third example\ngot another sentence\nand anotha one",
];
