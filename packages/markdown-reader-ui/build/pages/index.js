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
exports.addInternalLinks = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var markdown_parse_js_1 = require("markdown-parse-js");
var Layout_1 = require("../components/Layout");
var markdown_parse_transpile_ui_1 = require("markdown-parse-transpile-ui");
var react_with_native_router_1 = require("react-with-native-router");
var getQueryPath_1 = require("../util/getQueryPath");
var next_a_link_1 = require("next-a-link");
var clickable_icon_1 = require("clickable-icon");
var addInternalLinks = function (markdownString, internalLinks) {
    if (!markdownString)
        return;
    var words = markdownString.split(" ");
    var newWords = words.map(function (word) {
        var found = internalLinks.find(function (x) { return x.internalLinkWord === word; });
        if (!found)
            return word;
        return "[".concat(word, "](/").concat(found.queryPath, ")");
    });
    var newMarkdownString = newWords.join(" ");
    return newMarkdownString;
};
exports.addInternalLinks = addInternalLinks;
var Page = function (props) {
    var _a;
    var router = (0, react_with_native_router_1.useRouter)();
    var queryPath = (0, getQueryPath_1.getQueryPath)(router.query);
    var internalLinks = props.pages.filter(function (x) { return !!x.internalLinkWord; });
    var internallyLinkedMarkdown = (0, exports.addInternalLinks)((_a = props.markdownFile) === null || _a === void 0 ? void 0 : _a.markdown, internalLinks);
    var renderBottomNavigation = function () {
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row w-full justify-between" }, { children: [props.previousQueryPath ? ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "".concat(props.previousQueryPath) }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-xl" }, { children: props.previousQueryPath.split("/").pop() })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-6xl" }, { children: "\u2B05" }))] })) }))) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {})), props.nextQueryPath ? ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "".concat(props.nextQueryPath) }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-xl" }, { children: props.nextQueryPath.split("/").pop() })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-6xl" }, { children: "\u27A1" }))] })) }))) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {}))] })));
    };
    var renderPage = function () {
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [queryPath.length > 1 ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2B05", onClick: function () {
                        var parts = queryPath.split("/");
                        parts.pop();
                        var oneFolderUp = parts.join("/");
                        router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
                    } })) : null, internallyLinkedMarkdown
                    ? (0, markdown_parse_transpile_ui_1.renderMarkdownParse)((0, markdown_parse_js_1.mdToJsonParse)(internallyLinkedMarkdown))
                    : null, props.previousQueryPath || props.nextQueryPath
                    ? renderBottomNavigation()
                    : null] }));
    };
    var renderNav = function () {
        var _a;
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center" }, { children: [(0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2B05", onClick: function () {
                                var parts = queryPath.split("/");
                                parts.pop();
                                var oneFolderUp = parts.join("/");
                                router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
                            } }), (0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ className: "text-4xl" }, { children: ["\u00A0\u00A0", props.title] }))] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: (_a = props.children) === null || _a === void 0 ? void 0 : _a.map(function (child) {
                        return ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "".concat(queryPath, "/").concat(child) }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex justify-center items-center" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-xl" }, { children: child })) })) })));
                    }) }))] }));
    };
    return ((0, jsx_runtime_1.jsx)(Layout_1.Layout, __assign({ pages: props.pages }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "pb-4 px-4 w-full", scroll: true }, { children: props.children ? renderNav() : renderPage() })) })));
};
Page.options = {};
exports.default = Page;
//# sourceMappingURL=index.js.map