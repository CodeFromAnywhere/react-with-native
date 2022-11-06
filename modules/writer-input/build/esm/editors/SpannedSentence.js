import * as React from "react";
import { Subword } from "./Subword";
/**
 * Needs to be done for every text that can have potential interactions
 */
export var SpannedSentence = function (props) {
    var sentence = props.sentence, subwordConfig = props.subwordConfig;
    if (!subwordConfig.isEnabled) {
        // NB: if subwords are disabled, we can just return the sentence using a span (not word by word)
        return React.createElement("span", null, sentence);
    }
    var wordSpans = sentence.split(" ").map(function (word) {
        return React.createElement(Subword, { subwordConfig: subwordConfig, word: word });
    });
    return React.createElement(React.Fragment, null, wordSpans);
};
