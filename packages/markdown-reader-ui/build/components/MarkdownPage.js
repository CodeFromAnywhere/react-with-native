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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var IndexInstanceContainer_1 = require("./IndexInstanceContainer");
var key_value_markdown_js_1 = require("key-value-markdown-js");
var renderMarkdownParse_1 = require("./renderMarkdownParse");
var BreadCrumbs_1 = require("./Layout/BreadCrumbs");
var FancyLoader_1 = require("./FancyLoader");
var renderClickableButton_1 = require("./renderClickableButton");
var store_1 = __importDefault(require("../store"));
var vscodeOpen_1 = require("../api/vscodeOpen");
var js_util_1 = require("js-util");
var MarkdownParseEdit = function (_a) {
    var markdownParse = _a.markdownParse;
    var editableRef = (0, react_1.useRef)();
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ ref: editableRef, className: "p-4 w-full h-full" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.TextArea, __assign({ className: "w-full h-full min-h-[60vh]" }, { children: markdownParse.raw })) })));
};
var MarkdownParsePresentation = function (_a) {
    var markdownParagraphs = _a.markdownParagraphs;
    console.log({ markdownParagraphs: markdownParagraphs });
    var _b = (0, react_1.useState)(0), slide = _b[0], setSlide = _b[1];
    var paragraph = markdownParagraphs[slide];
    if (!paragraph)
        return (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: "No slides" });
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
    var navigation = ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row gap-3" }, { children: navigationIcons.map(renderClickableButton_1.renderClickableIcon) })));
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-col flex-1" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-1 flex-col" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-col justify-center items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-4xl" }, { children: paragraph.categoryStack[paragraph.categoryStack.length - 1] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: (0, BreadCrumbs_1.renderBreadCrumbs)(paragraph.categoryStack) }))] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-1 flex-col items-center justify-center overflow-y-auto" }, { children: (0, renderMarkdownParse_1.renderMarkdownContent)(paragraph.paragraph, { big: true }) }))] })), navigation] })));
};
var MarkdownPage = function (_a) {
    var name = _a.name, path = _a.path, reload = _a.reload, markdownParse = _a.markdownParse, loading = _a.loading;
    var authToken = (0, store_1.default)("authToken")[0];
    var _b = (0, react_1.useState)("view"), view = _b[0], setView = _b[1];
    /**
      Create a React UI in the admin panel that can show this as a slide presentation.
      
      It's very simple! Every headline is a single slide
  
      Ideally, the presentation topic should be apart, and the title should be apart, but this is to be inferred from the categoryStack...
  
   */
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ buttons: [
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
                            (0, vscodeOpen_1.vscodeOpen)((0, js_util_1.makeArray)(path), authToken);
                        },
                        emoji: "💻",
                        title: "Code",
                    },
                    {
                        onClick: reload,
                        component: loading ? function () { return (0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, {}); } : undefined,
                        emoji: loading ? undefined : "↻",
                        title: loading ? "Loading" : "Reload",
                    },
                ], title: "\uD83D\uDCD2 ".concat(name) }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, {}) })), view === "view" ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mx-2" }, { children: (0, renderMarkdownParse_1.renderMarkdownParse)(markdownParse) }))) : null, view === "presentation" ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mx-2 flex flex-1 min-h-[80vh]" }, { children: markdownParse.content ? ((0, jsx_runtime_1.jsx)(MarkdownParsePresentation, { markdownParagraphs: (0, key_value_markdown_js_1.flattenMarkdownChunks)(markdownParse.content).filter(function (x) { return x.paragraph !== ""; }) })) : ("Couldn't find any content") }))) : null, view === "edit" ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mx-2" }, { children: (0, jsx_runtime_1.jsx)(MarkdownParseEdit, { markdownParse: markdownParse }) }))) : null] }));
};
exports.MarkdownPage = MarkdownPage;
//# sourceMappingURL=MarkdownPage.js.map