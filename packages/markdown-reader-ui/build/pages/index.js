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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var markdown_parse_js_1 = require("markdown-parse-js");
var convert_case_1 = require("convert-case");
var markdown_parse_transpile_ui_1 = require("markdown-parse-transpile-ui");
var dynamic_1 = __importDefault(require("next/dynamic"));
var ReactTooltip = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require("react-tooltip")); }); }, { ssr: false });
var react_1 = require("react");
var next_a_link_1 = require("next-a-link");
var clickable_icon_1 = require("clickable-icon");
var react_with_native_router_1 = require("react-with-native-router");
var fs_util_js_1 = require("fs-util-js");
var Layout_1 = require("../components/Layout");
var server_api_url_1 = require("server-api-url");
var markdown_reader_functions_js_1 = require("markdown-reader-functions-js");
var Dictionary_1 = require("../components/Dictionary");
var store_1 = require("../store");
var Page = function (props) {
    var _a, _b, _c;
    var _d = (0, react_1.useState)(false), isMounted = _d[0], setIsMounted = _d[1]; // Need this for the react-tooltip
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    var router = (0, react_with_native_router_1.useRouter)();
    var queryPath = (0, markdown_reader_functions_js_1.getQueryPath)(router.query);
    var _e = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _e[0], setIsMobileMenuEnabled = _e[1];
    var augmentedWordObject = props.augmentedWordObject, projectRelativeMarkdownPath = props.projectRelativeMarkdownPath;
    var renderBottomNavigation = function () {
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row w-full justify-between" }, { children: [props.previousQueryPath ? ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "".concat(props.previousQueryPath) }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-xl" }, { children: props.previousQueryPath.split("/").pop() })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-6xl" }, { children: "\u2B05" }))] })) }))) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {})), props.nextQueryPath ? ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "".concat(props.nextQueryPath) }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-60 h-40 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-xl" }, { children: props.nextQueryPath.split("/").pop() })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-6xl" }, { children: "\u27A1" }))] })) }))) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {}))] })));
    };
    var renderPage = function () {
        var _a, _b, _c, _d, _e;
        var markdownParse = ((_a = props.markdownFile) === null || _a === void 0 ? void 0 : _a.markdown)
            ? (0, markdown_parse_js_1.mdToJsonParse)((_b = props.markdownFile) === null || _b === void 0 ? void 0 : _b.markdown)
            : null;
        var hasNoMainTitle = ((_c = markdownParse === null || markdownParse === void 0 ? void 0 : markdownParse.content) === null || _c === void 0 ? void 0 : _c.filter(function (x) { return !!x.title && x.level === 1; }).length) !== 1;
        console.log({ hasNoMainTitle: hasNoMainTitle, f: (_d = props.markdownFile) === null || _d === void 0 ? void 0 : _d.name });
        var projectRelativeMarkdownFilePath = projectRelativeMarkdownPath;
        var projectRelativeBaseFolderPath = projectRelativeMarkdownPath
            ? (0, fs_util_js_1.getFolderJs)(projectRelativeMarkdownPath)
            : undefined;
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between" }, { children: [queryPath.length > 1 ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2B05", onClick: function () {
                                var parts = queryPath.split("/");
                                parts.pop();
                                var oneFolderUp = parts.join("/");
                                router.push(oneFolderUp.length === 0 ? "/" : oneFolderUp);
                            } })) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u20DB", onClick: function () {
                                    setIsMobileMenuEnabled(true);
                                } }) }))] })), hasNoMainTitle && ((_e = props.markdownFile) === null || _e === void 0 ? void 0 : _e.name) ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: (0, convert_case_1.humanCase)(props.markdownFile.name) })) : null, markdownParse &&
                    projectRelativeBaseFolderPath &&
                    projectRelativeMarkdownFilePath
                    ? (0, markdown_parse_transpile_ui_1.renderMarkdownParse)(markdownParse, {
                        augmentedWordObject: augmentedWordObject,
                        projectRelativeBaseFolderPath: projectRelativeBaseFolderPath,
                        projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath,
                        isDev: server_api_url_1.isDev,
                        isStatic: true,
                    })
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
                            } }), (0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ className: "text-xl lg:text-4xl w-full" }, { children: ["\u00A0\u00A0", props.title] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u20DB", onClick: function () {
                                    setIsMobileMenuEnabled(true);
                                } }) }))] })), props.description && props.projectRelativeMarkdownPath ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, markdown_parse_transpile_ui_1.renderMarkdownContent)(props.description, {
                        projectRelativeMarkdownFilePath: props.projectRelativeMarkdownPath,
                        augmentedWordObject: augmentedWordObject,
                        projectRelativeBaseFolderPath: (0, fs_util_js_1.getFolderJs)(props.projectRelativeMarkdownPath),
                    }) })) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: (_a = props.children) === null || _a === void 0 ? void 0 : _a.map(function (child, index) {
                        return ((0, jsx_runtime_1.jsx)(next_a_link_1.ALink, __assign({ href: "".concat(queryPath, "/").concat(child.folderName) }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-60 border-2 border-black rounded-3xl m-4 p-4 flex flex-col justify-center items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold text-xl" }, { children: child.title })), child.firstParagraph && child.projectRelativeMarkdownPath ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, markdown_parse_transpile_ui_1.renderMarkdownContent)(child.firstParagraph, {
                                            projectRelativeBaseFolderPath: (0, fs_util_js_1.getFolderJs)(child.projectRelativeMarkdownPath),
                                            projectRelativeMarkdownFilePath: child.projectRelativeMarkdownPath,
                                            augmentedWordObject: augmentedWordObject,
                                        }) })) : null] })) }), "child".concat(child.projectRelativeMarkdownPath, "-").concat(index)));
                    }) }))] }));
    };
    var word = Array.isArray((_a = router.query) === null || _a === void 0 ? void 0 : _a.word)
        ? (_c = (_b = router.query) === null || _b === void 0 ? void 0 : _b.word) === null || _c === void 0 ? void 0 : _c[0]
        : router.query.word;
    return ((0, jsx_runtime_1.jsxs)(Layout_1.Layout, __assign({ publicBundleConfig: props.publicBundleConfig, augmentedWordObject: props.augmentedWordObject, pages: props.pages }, { children: [isMounted && ((0, jsx_runtime_1.jsx)(ReactTooltip, { multiline: true, className: "w-80", effect: "solid" }, "wtf")), queryPath === "dictionary" && props.augmentedWordObject ? ((0, jsx_runtime_1.jsx)(Dictionary_1.Dictionary, { augmentedWordObject: props.augmentedWordObject, word: word })) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "pb-4 px-4 w-full", scroll: true }, { children: props.children ? renderNav() : renderPage() })))] })));
};
Page.options = {};
exports.default = Page;
//# sourceMappingURL=index.js.map