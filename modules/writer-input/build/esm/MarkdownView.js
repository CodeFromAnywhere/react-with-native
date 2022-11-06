import * as React from "react";
import { Div } from "react-with-native";
import { renderMarkdownParse, } from "markdown/build/esm";
import { MarkdownParsePresentation } from "./MarkdownParsePresentation";
export var MarkdownView = function (props) {
    var markdownParse = props.markdownParse, markdownParseRenderConfig = props.markdownParseRenderConfig, view = props.view;
    var projectRelativeBaseFolderPath = markdownParseRenderConfig.projectRelativeBaseFolderPath, projectRelativeMarkdownFilePath = markdownParseRenderConfig.projectRelativeMarkdownFilePath, augmentedWordObject = markdownParseRenderConfig.augmentedWordObject;
    return (React.createElement(React.Fragment, null,
        view === "view" ? (React.createElement(Div, { className: "mx-2" }, renderMarkdownParse(markdownParse, markdownParseRenderConfig))) : null,
        view === "presentation" ? (React.createElement(Div, { className: "mx-2 flex flex-1 min-h-[80vh]" }, markdownParse.content ? (React.createElement(MarkdownParsePresentation, { markdownParse: markdownParse, augmentedWordObject: augmentedWordObject, projectRelativeBaseFolderPath: projectRelativeBaseFolderPath, projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath })) : ("Couldn't find any content"))) : null));
};
