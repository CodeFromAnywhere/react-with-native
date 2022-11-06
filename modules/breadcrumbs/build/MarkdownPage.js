"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var TitleContainer_1 = require("./TitleContainer");
var key_value_markdown_js_1 = require("key-value-markdown-js");
var markdown_parse_transpile_ui_1 = require("markdown-parse-transpile-ui");
var fancy_loader_1 = require("fancy-loader");
var api_1 = require("api");
var MarkdownParsePresentation_1 = require("./MarkdownParsePresentation");
var MarkdownParseEdit_1 = require("./MarkdownParseEdit");
var vscodeOpen = api_1.api.vscodeOpen;
var MarkdownPage = function (props) {
    var name = props.name, path = props.path, reload = props.reload, markdownParse = props.markdownParse, loading = props.loading, markdownViewStore = props.markdownViewStore;
    var view = markdownViewStore[0], setView = markdownViewStore[1];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-col flex-1" }, { children: [(0, jsx_runtime_1.jsx)(TitleContainer_1.TitleContainer, __assign({ buttons: [
                    {
                        onClick: function () { return setView("view"); },
                        emoji: "👁",
                        title: "View",
                        isActive: view === "view",
                    },
                    {
                        onClick: function () {
                            // TODO; ALSO MAKE FULLSCREEN HERE
                            setView("presentation");
                        },
                        emoji: "📽",
                        title: "Present",
                        isActive: view === "presentation",
                    },
                    {
                        onClick: function () { return setView("edit"); },
                        emoji: "✏️",
                        title: "Edit",
                        isActive: view === "edit",
                    },
                    {
                        onClick: function () {
                            vscodeOpen({ files: [{ projectRelativePath: path }] });
                        },
                        emoji: "💻",
                        title: "Code",
                    },
                    {
                        onClick: reload,
                        component: loading ? function () { return (0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, {}); } : undefined,
                        emoji: loading ? undefined : "↻",
                        title: loading ? "Loading" : "Reload",
                    },
                ], title: "\uD83D\uDCD2 ".concat(name) }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, {}) })), view === "view" ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mx-2" }, { children: (0, markdown_parse_transpile_ui_1.renderMarkdownParse)(markdownParse) }))) : null, view === "presentation" ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mx-2 flex flex-1 min-h-[80vh]" }, { children: markdownParse.content ? ((0, jsx_runtime_1.jsx)(MarkdownParsePresentation_1.MarkdownParsePresentation, { markdownParagraphs: (0, key_value_markdown_js_1.flattenMarkdownChunks)(markdownParse.content).filter(function (x) { return x.paragraph !== ""; }) })) : ("Couldn't find any content") }))) : null, view === "edit" ? ((0, jsx_runtime_1.jsx)(MarkdownParseEdit_1.MarkdownParseEdit, { markdownParse: markdownParse })) : null] })));
};
exports.MarkdownPage = MarkdownPage;
//# sourceMappingURL=MarkdownPage.js.map