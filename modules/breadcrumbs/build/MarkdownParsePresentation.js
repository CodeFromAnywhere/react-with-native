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
exports.MarkdownParsePresentation = void 0;
var react_1 = require("react");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_2 = require("react");
var react_with_native_1 = require("react-with-native");
var markdown_parse_transpile_ui_1 = require("markdown-parse-transpile-ui");
var BreadCrumbs_1 = require("./BreadCrumbs");
var clickable_icon_1 = require("clickable-icon");
var MarkdownParsePresentation = function (_a) {
    var markdownParagraphs = _a.markdownParagraphs;
    var _b = (0, react_2.useState)(0), slide = _b[0], setSlide = _b[1];
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
    var navigation = ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row gap-3" }, { children: navigationIcons.map(function (item, index) { return ((0, react_1.createElement)(clickable_icon_1.ClickableIcon, __assign({}, item, { key: "icon".concat(index) }))); }) })));
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-col flex-1" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-1 flex-col" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-col justify-center items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-4xl" }, { children: paragraph.categoryStackCalculated[paragraph.categoryStackCalculated.length - 1] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: (0, BreadCrumbs_1.renderBreadCrumbs)(paragraph.categoryStackCalculated) }))] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-1 flex-col items-center justify-center overflow-y-auto" }, { children: (0, markdown_parse_transpile_ui_1.renderMarkdownContent)(paragraph.paragraph, { big: true }) }))] })), navigation] })));
};
exports.MarkdownParsePresentation = MarkdownParsePresentation;
//# sourceMappingURL=MarkdownParsePresentation.js.map