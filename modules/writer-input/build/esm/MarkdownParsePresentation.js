var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { useState } from "react";
import { Div, P } from "react-with-native";
import { isDev } from "server-api-url";
import { renderMarkdownContent } from "markdown";
import { renderBreadCrumbs } from "breadcrumbs";
import { ClickableIcon } from "clickable-icon";
import { flattenMarkdownChunks } from "key-value-markdown-js";
export var MarkdownParsePresentation = function (props) {
    var markdownParse = props.markdownParse, augmentedWordObject = props.augmentedWordObject, projectRelativeBaseFolderPath = props.projectRelativeBaseFolderPath, projectRelativeMarkdownFilePath = props.projectRelativeMarkdownFilePath;
    var _a = useState(0), slide = _a[0], setSlide = _a[1];
    if (!markdownParse.content)
        return null;
    var markdownParagraphs = flattenMarkdownChunks(markdownParse.content).filter(function (x) { return x.paragraph !== ""; });
    var paragraph = markdownParagraphs[slide];
    if (!paragraph)
        return React.createElement(P, null, "No slides");
    var navigationIcons = [
        {
            onClick: function () { return setSlide(0); },
            emoji: "⏮",
            disabled: slide === 0,
        },
        {
            onClick: function () { return setSlide(slide - 1); },
            emoji: "⬅",
            disabled: slide === 0,
        },
        {
            onClick: function () { return setSlide(slide + 1); },
            emoji: "➡",
            disabled: slide === markdownParagraphs.length - 1,
        },
        {
            onClick: function () { return setSlide(markdownParagraphs.length - 1); },
            emoji: "⏭",
            disabled: slide === markdownParagraphs.length - 1,
        },
    ];
    var navigation = (React.createElement(Div, { className: "flex flex-row gap-3" }, navigationIcons.map(function (item, index) { return (React.createElement(ClickableIcon, __assign({}, item, { key: "icon".concat(index) }))); })));
    return (React.createElement(Div, { className: "flex flex-col flex-1" },
        React.createElement(Div, { className: "flex flex-1 flex-col" },
            React.createElement(Div, { className: "flex flex-col justify-center items-center" },
                React.createElement(P, { className: "text-4xl" }, paragraph.categoryStackCalculated[paragraph.categoryStackCalculated.length - 1]),
                React.createElement(Div, { className: "flex flex-row flex-wrap" }, renderBreadCrumbs(paragraph.categoryStackCalculated))),
            React.createElement(Div, { className: "flex flex-1 flex-col items-center justify-center overflow-y-auto" }, renderMarkdownContent(paragraph.paragraph, {
                big: true,
                projectRelativeBaseFolderPath: projectRelativeBaseFolderPath,
                projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath,
                augmentedWordObject: augmentedWordObject,
                isDev: isDev,
                isStatic: false,
            }))),
        navigation));
};
