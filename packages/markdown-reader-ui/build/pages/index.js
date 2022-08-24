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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var markdown_parse_js_1 = require("markdown-parse-js");
var Layout_1 = require("../components/Layout");
var markdown_parse_ui_1 = require("markdown-parse-ui");
var react_with_native_router_1 = require("react-with-native-router");
var getQueryPath_1 = require("../util/getQueryPath");
var Page = function (props) {
    var router = (0, react_with_native_router_1.useRouter)();
    var queryPath = (0, getQueryPath_1.getQueryPath)(router.query);
    return ((0, jsx_runtime_1.jsx)(Layout_1.Layout, __assign({ queryPaths: props.queryPaths }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "pb-4 px-4 w-full", scroll: true }, { children: props.markdownString ? ((0, markdown_parse_ui_1.renderMarkdownParse)((0, markdown_parse_js_1.mdToJsonParse)(props.markdownString))) : ((0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: ["Markdown not found (", queryPath, ")"] })) })) })));
};
Page.options = {};
exports.default = Page;
//# sourceMappingURL=index.js.map