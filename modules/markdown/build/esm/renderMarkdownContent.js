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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { AssetView } from "asset-view";
import { useSelectionPromptsMenu } from "prompt-components";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { getFolderJs, isPathRelative } from "fs-util-js";
import { Div, P } from "react-with-native";
import { useLastSelection } from "share";
import { Tooltip } from "tooltip";
import { HtmlHeader } from "./HtmlHeader.js";
import { Parameter } from "./Parameter.js";
import { getYoutubeId } from "./getYoutubeId.js";
import { makeArray, notEmpty } from "js-util";
/**
Renders a markdown string (without frontmatter)

TODO:

- **Show selection prompt-results** In `renderMarkdownContent`, augment the alineas with the `ContextualPromptResult`. Would be great to see the results when hovering over the selected thing, or maybe showing it with a button, or inline, even.

 */
export var renderMarkdownContent = function (content, config) {
    var contextSelection = useLastSelection();
    var _a = useSelectionPromptsMenu(config.selectionPrompts || [], {
        contextContent: content,
        context_projectRelativeFilePath: config.projectRelativeMarkdownFilePath,
        contextSelection: contextSelection,
    }), openContextMenuProps = _a.openContextMenuProps, renderContextMenu = _a.renderContextMenu;
    if (!content)
        return React.createElement(Div, null, "No content");
    var markdownRender = (React.createElement(ReactMarkdown, { className: (config === null || config === void 0 ? void 0 : config.big) ? "max-w-lg" : undefined, rehypePlugins: [rehypeHighlight, remarkGfm, rehypeRaw], components: {
            h1: HtmlHeader,
            h2: HtmlHeader,
            h3: HtmlHeader,
            h4: HtmlHeader,
            h5: HtmlHeader,
            h6: HtmlHeader,
            img: function (_a) {
                var src = _a.src, alt = _a.alt;
                if (!src)
                    return React.createElement(Div, null, "Bad asset src");
                var isRelative = isPathRelative(src);
                if (isRelative && !config.projectRelativeMarkdownFilePath) {
                    // We can't show the asset in this scenario
                    return (React.createElement(P, null,
                        "![$",
                        alt,
                        "]($",
                        src,
                        ")"));
                }
                var url = isRelative ? undefined : src;
                var relativePath = isRelative ? src : undefined;
                var asset = { alt: alt, relativePath: relativePath, absoluteUrl: url };
                return (React.createElement(AssetView, { asset: asset, projectRelativeReferencingFilePath: config.projectRelativeMarkdownFilePath, hideDownloadLink: true, className: "w-96" }));
            },
            //Fix newlines with `<br>`
            br: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("br", __assign({}, props)));
            },
            details: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("details", __assign({ className: "group border border-gray-600 rounded-lg" }, props)));
            },
            summary: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("summary", __assign({ className: "bg-gray-200 dark:bg-gray-700 p-2 rounded-lg group-open:rounded-b-none group-open:border group-open:border-b-gray-600 select-none" }, props)));
            },
            td: function (_a) {
                var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                return (
                // @ts-ignore
                React.createElement("td", __assign({ className: "border-spacing-1 border-t border-r last:border-r-0 border-gray-600 dark:border-gray-100 p-2" }, props), children === null || children === void 0 ? void 0 : children.map(function (child) {
                    return child === "<br />" ? React.createElement("br", null) : child;
                })));
            },
            th: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("th", __assign({ className: "" }, props)));
            },
            table: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("div", { className: "inline-block rounded-lg border shadow-2xl" },
                    React.createElement("table", __assign({ className: "" }, props))));
            },
            tbody: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("tbody", __assign({ className: "border-gray-600 dark:border-gray-100" }, props)));
            },
            tr: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (
                // @ts-ignore
                React.createElement("tr", __assign({ className: "dark:even:bg-black even:bg-gray-400 even:bg-opacity-30" }, props)));
            },
            ol: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (React.createElement("ol", __assign({ className: "list-decimal mx-3 p-2" }, props)));
            },
            ul: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (React.createElement("ul", __assign({ style: { listStyleType: "circle" }, className: "mx-3 p-2" }, props)));
            },
            p: function (_a) {
                var _b;
                var node = _a.node, props = __rest(_a, ["node"]);
                // TODO: make this work for components as well, now only works if the children of p is raw text...
                var text = makeArray(props.children)
                    .map(function (x) {
                    if (typeof x === "string" || typeof x === "number") {
                        return String(x);
                    }
                    return undefined;
                })
                    .filter(notEmpty)
                    .join("");
                var selectionResultsThisParagraph = (_b = config.selectionContextualPromptResults) === null || _b === void 0 ? void 0 : _b.filter(function (x) {
                    return x.selectionString ? text.includes(x.selectionString) : false;
                });
                return (React.createElement(React.Fragment, null,
                    React.createElement("p", __assign({ style: {
                            marginTop: 15,
                            marginBottom: 15,
                            whiteSpace: "pre-line",
                        } }, props)), selectionResultsThisParagraph === null || selectionResultsThisParagraph === void 0 ? void 0 :
                    selectionResultsThisParagraph.map(function (result) {
                        return (React.createElement(Div, { key: "result-".concat(result.id) },
                            result.contextualPromptSlug,
                            ": ",
                            result.resultText,
                            " ",
                            "(selection: ",
                            result.selectionString,
                            ")"));
                    })));
            },
            li: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return React.createElement("li", __assign({ className: "" }, props));
            },
            code: function (_a) {
                var _b;
                var node = _a.node, children = _a.children, props = __rest(_a, ["node", "children"]);
                // NB: There's a big problem with this because all code elements get put in a `<pre>` element. I don't think this is easy to remove, but we can look in the issues. we can also look in google for how to improve it with css because i couldn't figure it out myself
                var word = children[0];
                var wordString = typeof word === "string" ? word : undefined;
                var foundWord = wordString
                    ? (_b = config === null || config === void 0 ? void 0 : config.augmentedWordObject) === null || _b === void 0 ? void 0 : _b[wordString]
                    : undefined;
                return foundWord &&
                    foundWord.spoiler &&
                    foundWord.spoiler.length > 0 ? (React.createElement(Tooltip, { placement: "left", tooltip: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "font-semibold px-3 mb-0 border-b border-solid border-gray-100 rounded-t-lg" }, foundWord.word),
                        React.createElement("div", { className: "px-3" }, renderMarkdownContent(foundWord.spoiler, {
                            projectRelativeBaseFolderPath: getFolderJs(foundWord.projectRelativeMarkdownSourcePath),
                            projectRelativeMarkdownFilePath: foundWord.projectRelativeMarkdownSourcePath,
                        }))) },
                    React.createElement("a", __assign({ href: "/".concat(foundWord === null || foundWord === void 0 ? void 0 : foundWord.queryPath), style: { color: "darkred" } }, props), children))) : (wordString === null || wordString === void 0 ? void 0 : wordString.startsWith(".")) ? (React.createElement(Parameter, { text: wordString })) : (React.createElement("code", __assign({ className: "dark:bg-gray-700" }, props, { style: {
                        color: "darkcyan",
                        // NB: the below doesn't work!
                        wordBreak: "break-all",
                        wordWrap: "break-word",
                    } }), children));
            },
            a: function (_a) {
                var node = _a.node, href = _a.href, props = __rest(_a, ["node", "href"]);
                var youtubeId = getYoutubeId(href);
                if (youtubeId) {
                    return (React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/".concat(youtubeId), title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }));
                }
                return (React.createElement("a", __assign({ className: "dark:text-blue-200 text-blue-500", href: href }, props)));
            },
        } }, content));
    if (config.disableSelectionContextMenu)
        return markdownRender;
    // console.log("Need to render:", content);
    return (React.createElement("div", __assign({}, openContextMenuProps),
        renderContextMenu(),
        markdownRender));
};
