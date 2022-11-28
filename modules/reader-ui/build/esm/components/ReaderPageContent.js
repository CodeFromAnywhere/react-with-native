import { ClickableIcon } from "clickable-icon";
import { humanCase } from "convert-case";
import { getFolderJs } from "fs-util-js";
import { renderMarkdownContent } from "markdown";
import { mdToJsonParse } from "markdown-parse-js";
import { getQueryPath } from "markdown-reader-functions-js";
import { ALink } from "next-a-link";
import * as React from "react";
import { useState } from "react";
import { Div, P } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { isDev } from "server-api-url";
import { MarkdownView } from "writer-input";
import { useStore } from "../store";
import { ReaderPageHeader } from "./ReaderPageHeader";
/**
 * This is rendering a `WebMarkdownFile` and optionally navigation.
 */
export var ReaderPageContent = function (props) {
    var router = useRouter();
    var queryPath = getQueryPath(router.query);
    var _a = useStore("menu.isMobileMenuEnabled"), _ = _a[0], setIsMobileMenuEnabled = _a[1];
    var augmentedWordObject = props.augmentedWordObject, children = props.children, description = props.description, markdownFile = props.markdownFile, nextQueryPath = props.nextQueryPath, previousQueryPath = props.previousQueryPath, projectRelativeMarkdownPath = props.projectRelativeMarkdownPath, title = props.title;
    var _b = useState("view"), view = _b[0], setView = _b[1];
    var renderBottomNavigation = function () {
        return (React.createElement(Div, { className: "flex flex-row w-full justify-between" },
            previousQueryPath ? (React.createElement(ALink, { href: "".concat(previousQueryPath) },
                React.createElement(Div, { className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" },
                    React.createElement(P, { className: "font-bold text-xl" }, previousQueryPath.split("/").pop()),
                    React.createElement(P, { className: "font-bold text-6xl" }, "\u2B05")))) : (React.createElement(Div, null)),
            nextQueryPath ? (React.createElement(ALink, { href: "".concat(nextQueryPath) },
                React.createElement(Div, { className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" },
                    React.createElement(P, { className: "font-bold text-xl" }, nextQueryPath.split("/").pop()),
                    React.createElement(P, { className: "font-bold text-6xl" }, "\u27A1")))) : (React.createElement(Div, null))));
    };
    var markdownParse = (markdownFile === null || markdownFile === void 0 ? void 0 : markdownFile.markdown)
        ? mdToJsonParse(markdownFile === null || markdownFile === void 0 ? void 0 : markdownFile.markdown)
        : null;
    var renderMarkdownView = function () {
        var projectRelativeMarkdownFilePath = projectRelativeMarkdownPath;
        var projectRelativeBaseFolderPath = projectRelativeMarkdownPath
            ? getFolderJs(projectRelativeMarkdownPath)
            : undefined;
        if (!markdownParse ||
            projectRelativeBaseFolderPath === undefined ||
            projectRelativeMarkdownFilePath === undefined ||
            projectRelativeMarkdownFilePath === null) {
            return null;
        }
        var markdownParseRenderConfig = {
            augmentedWordObject: augmentedWordObject,
            projectRelativeBaseFolderPath: projectRelativeBaseFolderPath,
            projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath,
            isDev: isDev,
            isStatic: true,
        };
        return (React.createElement(MarkdownView, { markdownParse: markdownParse, markdownParseRenderConfig: markdownParseRenderConfig, view: view }));
    };
    var renderPage = function () {
        var _a;
        var hasNoMainTitle = ((_a = markdownParse === null || markdownParse === void 0 ? void 0 : markdownParse.content) === null || _a === void 0 ? void 0 : _a.filter(function (x) { return !!x.title && x.level === 1; }).length) !== 1;
        // console.log({ hasNoMainTitle, f: props.markdownFile?.name });
        return (React.createElement(Div, null,
            React.createElement(Div, { className: "flex flex-row justify-between" },
                queryPath.length > 1 ? (React.createElement(ClickableIcon, { emoji: "\u2B05", onClick: function () {
                        var parts = queryPath.split("/");
                        parts.pop();
                        var oneFolderUp = parts.join("/");
                        router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
                    } })) : null,
                React.createElement(Div, { className: "flex flex-row" },
                    React.createElement(Div, { className: "lg:hidden" },
                        React.createElement(ClickableIcon, { emoji: "\u20DB", onClick: function () {
                                setIsMobileMenuEnabled(true);
                            } })),
                    React.createElement(ClickableIcon, { emoji: "\uD83D\uDC41", onClick: function () {
                            setView(view === "presentation" ? "view" : "presentation");
                        } }))),
            hasNoMainTitle && (markdownFile === null || markdownFile === void 0 ? void 0 : markdownFile.name) ? (React.createElement(P, { className: "text-3xl" }, humanCase(markdownFile.name))) : null,
            renderMarkdownView(),
            previousQueryPath || nextQueryPath ? renderBottomNavigation() : null));
    };
    var renderNav = function () {
        return (React.createElement(Div, null,
            React.createElement(Div, { className: "flex flex-row items-center" },
                React.createElement(ClickableIcon, { emoji: "\u2B05", onClick: function () {
                        var parts = queryPath.split("/");
                        parts.pop();
                        var oneFolderUp = parts.join("/");
                        router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
                    } }),
                React.createElement(P, { className: "text-xl lg:text-4xl w-full" },
                    "\u00A0\u00A0",
                    title),
                React.createElement(Div, { className: "lg:hidden" },
                    React.createElement(ClickableIcon, { emoji: "\u20DB", onClick: function () {
                            setIsMobileMenuEnabled(true);
                        } }))),
            description && projectRelativeMarkdownPath ? (React.createElement(Div, null, renderMarkdownContent(description, {
                projectRelativeMarkdownFilePath: projectRelativeMarkdownPath,
                augmentedWordObject: augmentedWordObject,
                projectRelativeBaseFolderPath: getFolderJs(projectRelativeMarkdownPath),
            }))) : null,
            React.createElement(Div, { className: "flex flex-row flex-wrap" }, children === null || children === void 0 ? void 0 : children.map(function (child, index) {
                return (React.createElement(ALink, { key: "child".concat(child.projectRelativeMarkdownPath, "-").concat(index), href: "".concat(queryPath, "/").concat(child.folderName) },
                    React.createElement(Div, { className: "w-60 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" },
                        React.createElement(P, { className: "font-bold text-xl" }, child.title),
                        child.firstParagraph && child.projectRelativeMarkdownPath ? (React.createElement(Div, null, renderMarkdownContent(child.firstParagraph, {
                            projectRelativeBaseFolderPath: getFolderJs(child.projectRelativeMarkdownPath),
                            projectRelativeMarkdownFilePath: child.projectRelativeMarkdownPath,
                            augmentedWordObject: augmentedWordObject,
                        }))) : null)));
            }))));
    };
    // console.log({ markdownFile });
    return (React.createElement(Div, null,
        (markdownFile === null || markdownFile === void 0 ? void 0 : markdownFile.headerImage) ||
            (markdownFile === null || markdownFile === void 0 ? void 0 : markdownFile.headerTitle) ||
            (markdownFile === null || markdownFile === void 0 ? void 0 : markdownFile.header_markdownCallToActionSlugs) ? (React.createElement(ReaderPageHeader, { markdownFile: markdownFile, projectRelativeMarkdownPath: projectRelativeMarkdownPath })) : null,
        React.createElement(Div, { className: "pb-4 px-4" }, props.children ? renderNav() : renderPage())));
};
