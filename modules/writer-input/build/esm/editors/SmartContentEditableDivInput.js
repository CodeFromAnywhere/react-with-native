import * as React from "react";
import { useEffect } from "react";
import { Div } from "react-with-native";
import { marked } from "marked";
import ReactDOMServer from "react-dom/server";
import { MarkedToken } from "./MarkedToken";
import { useStore } from "../store";
import { ContentEditableDivInput } from "./ContentEditableDivInput";
/**
Returns a html string from a text string that can be rendered in the dom

NB: because we're parsing text from div.innerText, sometimes there are two newlines when there should be one break.

Three newlines means there should be two breaks...
 */
export var parseTextContentToHtmlString = function (text, type, subtextConfig, subwordConfig, markdownParseRenderConfig) {
    if (type === "markdown" && markdownParseRenderConfig) {
        var lexed = marked.lexer(text);
        var html = lexed.map(function (token) { return (React.createElement(MarkedToken, { item: token, subtextConfig: subtextConfig, subwordConfig: subwordConfig, markdownFileConfig: markdownParseRenderConfig, testModeEnabled: true })); });
        var result = React.createElement(React.Fragment, null, html);
        var string = ReactDOMServer.renderToString(result);
        return string;
    }
    return text;
};
/**
 * Uses ContentEditableDivInput, and attaches the Completions to it based on the content type. Also all other data required...
 *
 *
 * NB: TODO: once the autocomplete inside the contentEditable is done, these things should move inside of there. I need a component that has lots of UI/UX but isn't very smart. This will be able to be re-used in many usecases...
 */
export var SmartContentEditableDivInput = function (props) {
    var value = props.value, onChange = props.onChange, markdownParseRenderConfig = props.markdownParseRenderConfig;
    var subtextConfig = useStore("subtextConfig")[0];
    var subwordConfig = useStore("subwordConfig")[0];
    useEffect(function () {
        if (typeof window === "undefined")
            return;
        var getContextMenuInfo = function (ev) {
            //ev.preventDefault();
            console.log("right click at:", ev.clientY, ev.clientX, ev.x, ev.y, "how do we get the word at this position now?", ev.target);
            // should find a way to get the current word. not sure if this is even feasible if we don't change every word into an element... it may be heavier to change every word into an element, but it certainly makes things easier.
        };
        // Add eventListner, with it's cleanup...
        window.addEventListener("contextmenu", getContextMenuInfo);
        return function () { return window.removeEventListener("contextmenu", getContextMenuInfo); };
    }, []);
    // const augmentedWordObjectQuery = useGetAugmentedWordObject();
    // const { data } = useGetAugmentedWords();
    // const augmentedWords = data?.result;
    // const augmentedWordObject = augmentedWordObjectQuery.data?.result;
    return (React.createElement(Div, { className: "flex flex-col flex-1" },
        React.createElement(ContentEditableDivInput, { subtextConfig: subtextConfig, subwordConfig: subwordConfig, value: value, onChange: onChange, markdownParseRenderConfig: markdownParseRenderConfig, parseTextContentToHtmlString: parseTextContentToHtmlString, divProps: {
                style: {
                    padding: 4,
                    margin: 4,
                    width: 400,
                    border: "1px solid black",
                },
            } })));
};
