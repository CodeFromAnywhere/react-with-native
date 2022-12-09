import * as React from "react";
import { queries } from "api";
import { Div } from "react-with-native";
import { renderMarkdownContent } from "markdown";
export var ContextualPromptResultsTab = function (props) {
    var _a, _b;
    var projectRelativeFilePath = props.projectRelativeFilePath;
    var contextualPromptResultsQuery = queries.useGetContextualPromptResults(projectRelativeFilePath);
    return (React.createElement(Div, null, (_b = (_a = contextualPromptResultsQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.map(function (item) {
        return (React.createElement(Div, null,
            React.createElement("b", null, "prompt"),
            renderMarkdownContent(item.prompt || "No content", {
                projectRelativeBaseFolderPath: "",
                projectRelativeMarkdownFilePath: "",
            }),
            React.createElement("b", null, "results"),
            renderMarkdownContent(item.resultText || "No content", {
                projectRelativeBaseFolderPath: "",
                projectRelativeMarkdownFilePath: "",
            })));
    })));
};
