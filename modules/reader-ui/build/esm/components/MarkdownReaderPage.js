import * as React from "react";
import { ClickableIcon } from "clickable-icon";
import { humanCase } from "convert-case";
import { getFolderJs } from "fs-util-js";
import { renderMarkdownContent } from "markdown";
import { mdToJsonParse } from "markdown-parse-js";
import { getQueryPath } from "markdown-reader-functions-js";
import { ALink } from "next-a-link";
import { useState } from "react";
import { Div, P } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { isDev } from "server-api-url";
import { MarkdownView } from "writer-input";
import { Dictionary } from "../components/Dictionary";
import { Layout } from "../components/Layout";
import { useStore } from "../store";
export var MarkdownReaderPage = function (props) {
    var _a, _b, _c, _d, _e;
    var router = useRouter();
    var _f = useState("view"), view = _f[0], setView = _f[1];
    var queryPath = getQueryPath(router.query);
    var _g = useStore("menu.isMobileMenuEnabled"), _ = _g[0], setIsMobileMenuEnabled = _g[1];
    var augmentedWordObject = props.augmentedWordObject, projectRelativeMarkdownPath = props.projectRelativeMarkdownPath;
    var renderBottomNavigation = function () {
        return (React.createElement(Div, { className: "flex flex-row w-full justify-between" },
            props.previousQueryPath ? (React.createElement(ALink, { href: "".concat(props.previousQueryPath) },
                React.createElement(Div, { className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" },
                    React.createElement(P, { className: "font-bold text-xl" }, props.previousQueryPath.split("/").pop()),
                    React.createElement(P, { className: "font-bold text-6xl" }, "\u2B05")))) : (React.createElement(Div, null)),
            props.nextQueryPath ? (React.createElement(ALink, { href: "".concat(props.nextQueryPath) },
                React.createElement(Div, { className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" },
                    React.createElement(P, { className: "font-bold text-xl" }, props.nextQueryPath.split("/").pop()),
                    React.createElement(P, { className: "font-bold text-6xl" }, "\u27A1")))) : (React.createElement(Div, null))));
    };
    var markdownParse = ((_a = props.markdownFile) === null || _a === void 0 ? void 0 : _a.markdown)
        ? mdToJsonParse((_b = props.markdownFile) === null || _b === void 0 ? void 0 : _b.markdown)
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
        var _a, _b;
        console.log("RENDER PAG");
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
            hasNoMainTitle && ((_b = props.markdownFile) === null || _b === void 0 ? void 0 : _b.name) ? (React.createElement(P, { className: "text-3xl" }, humanCase(props.markdownFile.name))) : null,
            renderMarkdownView(),
            props.previousQueryPath || props.nextQueryPath
                ? renderBottomNavigation()
                : null));
    };
    var renderNav = function () {
        var _a;
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
                    props.title),
                React.createElement(Div, { className: "lg:hidden" },
                    React.createElement(ClickableIcon, { emoji: "\u20DB", onClick: function () {
                            setIsMobileMenuEnabled(true);
                        } }))),
            props.description && props.projectRelativeMarkdownPath ? (React.createElement(Div, null, renderMarkdownContent(props.description, {
                projectRelativeMarkdownFilePath: props.projectRelativeMarkdownPath,
                augmentedWordObject: augmentedWordObject,
                projectRelativeBaseFolderPath: getFolderJs(props.projectRelativeMarkdownPath),
            }))) : null,
            React.createElement(Div, { className: "flex flex-row flex-wrap" }, (_a = props.children) === null || _a === void 0 ? void 0 : _a.map(function (child, index) {
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
    var word = Array.isArray((_c = router.query) === null || _c === void 0 ? void 0 : _c.word)
        ? (_e = (_d = router.query) === null || _d === void 0 ? void 0 : _d.word) === null || _e === void 0 ? void 0 : _e[0]
        : router.query.word;
    return (React.createElement(Layout, { publicBundleConfig: props.publicBundleConfig, augmentedWordObject: props.augmentedWordObject, menu: props.menu }, queryPath === "dictionary" && props.augmentedWordObject ? (React.createElement(Dictionary, { augmentedWordObject: props.augmentedWordObject, word: word })) : (React.createElement(Div, { className: "pb-4 px-4" }, props.children ? renderNav() : renderPage()))));
};
