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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFrontMatter = exports.renderMarkdownParse = exports.renderMarkdownContent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var react_markdown_1 = __importDefault(require("react-markdown"));
var rehype_highlight_1 = __importDefault(require("rehype-highlight"));
/**
 * renders a markdown striing (without frontmatter)
 */
var renderMarkdownContent = function (content, config) {
    return ((0, jsx_runtime_1.jsx)(react_markdown_1.default, __assign({ className: (config === null || config === void 0 ? void 0 : config.big) ? "max-w-lg" : undefined, rehypePlugins: [rehype_highlight_1.default], components: {
            ol: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (0, jsx_runtime_1.jsx)("ol", __assign({ className: "list-decimal" }, props));
            },
            ul: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return ((0, jsx_runtime_1.jsx)("ul", __assign({ style: { listStyleType: "circle" }, className: "mx-3 p-2" }, props)));
            },
            p: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return ((0, jsx_runtime_1.jsx)("p", __assign({ style: { marginTop: 15, marginBottom: 15 } }, props)));
            },
            li: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return (0, jsx_runtime_1.jsx)("li", __assign({ className: "" }, props));
            },
            code: function (_a) {
                var node = _a.node, props = __rest(_a, ["node"]);
                return ((0, jsx_runtime_1.jsx)("code", __assign({ className: "dark:bg-gray-700", style: { color: "darkcyan" } }, props)));
            },
        } }, { children: content })));
};
exports.renderMarkdownContent = renderMarkdownContent;
/**
 * renders a markdown title (level should be 1 for h1 and 6 for h6)
 */
var renderMarkdownTitle = function (title, level) {
    var levelSize = level === 1
        ? "text-3xl"
        : level === 2
            ? "text-2xl"
            : level === 3
                ? "text-xl"
                : level === 4
                    ? "text-lg"
                    : level === 5
                        ? "text-md"
                        : level === 6
                            ? "text-sm"
                            : "text-xs";
    return (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: levelSize }, { children: title }));
};
/**
 * renders a MarkdownChunk interface
 */
var renderMarkdownChunk = function (chunk) {
    var _a;
    var title = chunk.title
        ? renderMarkdownTitle(chunk.title, chunk.level)
        : null;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [title, chunk.content ? (0, exports.renderMarkdownContent)(chunk.content) : null, (_a = chunk.children) === null || _a === void 0 ? void 0 : _a.map(renderMarkdownChunk)] }));
};
/**
 * renders the MardkownParse interface (including frontmatter)
 */
var renderMarkdownParse = function (markdownParse) {
    var _a;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, exports.renderFrontMatter)(markdownParse.parameters, { renderSpacer: true }), (_a = markdownParse.content) === null || _a === void 0 ? void 0 : _a.map(renderMarkdownChunk)] }));
};
exports.renderMarkdownParse = renderMarkdownParse;
/**
 * Renders markdown frontmatter parameters (and optionally a spacer)
 */
var renderFrontMatter = function (parameters, config) {
    var frontMatterKeys = Object.keys(parameters);
    return frontMatterKeys.length > 0 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: frontMatterKeys.map(function (key) { return ((0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: [key, ": ", parameters[key]] })); }) }), (config === null || config === void 0 ? void 0 : config.renderSpacer) ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: "------------" }) : null] })) : null;
};
exports.renderFrontMatter = renderFrontMatter;
//# sourceMappingURL=renderMarkdownParse.js.map