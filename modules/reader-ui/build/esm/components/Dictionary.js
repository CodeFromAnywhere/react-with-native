import * as React from "react";
import { ClickableIcon } from "clickable-icon";
import { getFolderJs } from "fs-util-js";
import { renderMarkdownContent } from "markdown";
import { Div, P } from "react-with-native";
import { isDev } from "server-api-url";
import { useStore } from "../store";
export var AugmentedWordComponent = function (props) {
    var augmentedWord = props.augmentedWord, augmentedWordObject = props.augmentedWordObject;
    var projectRelativeBaseFolderPath = getFolderJs(augmentedWord.projectRelativeMarkdownSourcePath);
    var projectRelativeMarkdownFilePath = augmentedWord.projectRelativeMarkdownSourcePath;
    return (React.createElement(Div, { className: "border border-gray-500 rounded-md m-2 p-2" },
        React.createElement(P, { className: "font-bold" }, augmentedWord.word),
        augmentedWord.spoiler ? (React.createElement(P, null, renderMarkdownContent(augmentedWord.spoiler, {
            isDev: isDev,
            isStatic: false,
            projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath,
            projectRelativeBaseFolderPath: projectRelativeBaseFolderPath,
            augmentedWordObject: augmentedWordObject,
        }))) : null));
};
export var Dictionary = function (props) {
    var _a = useStore("menu.isMobileMenuEnabled"), _ = _a[0], setIsMobileMenuEnabled = _a[1];
    var augmentedWordObject = props.augmentedWordObject, word = props.word;
    var augmentedWord = word ? augmentedWordObject[word] : undefined;
    return (React.createElement(React.Fragment, null,
        React.createElement(Div, { className: "lg:hidden" },
            React.createElement(Div, { className: "flex flex-row justify-between px-4" },
                React.createElement(Div, null),
                React.createElement(ClickableIcon, { emoji: "\u20DB", onClick: function () {
                        setIsMobileMenuEnabled(true);
                    } }))),
        React.createElement(Div, { className: "p-4" },
            augmentedWord ? (React.createElement(Div, { className: "bg-blue-200 p-4 border border-blue-800 rounded-xl mb-20" },
                React.createElement(AugmentedWordComponent, { augmentedWordObject: augmentedWordObject, augmentedWord: augmentedWord }))) : null,
            React.createElement(P, { className: "text-3xl" }, "Dictionary"),
            Object.keys(augmentedWordObject).map(function (word, index) {
                var augmentedWord = augmentedWordObject[word];
                if (!augmentedWord)
                    return null;
                return (React.createElement(AugmentedWordComponent, { key: "aug".concat(index), augmentedWordObject: augmentedWordObject, augmentedWord: augmentedWord }));
            }))));
};
