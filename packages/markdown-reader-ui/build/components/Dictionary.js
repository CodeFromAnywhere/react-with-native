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
exports.Dictionary = exports.AugmentedWordComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clickable_icon_1 = require("clickable-icon");
var fs_util_js_1 = require("fs-util-js");
var markdown_parse_transpile_ui_1 = require("markdown-parse-transpile-ui");
var react_with_native_1 = require("react-with-native");
var server_api_url_1 = require("server-api-url");
var store_1 = require("../store");
var AugmentedWordComponent = function (props) {
    var augmentedWord = props.augmentedWord, augmentedWordObject = props.augmentedWordObject;
    var projectRelativeBaseFolderPath = (0, fs_util_js_1.getFolderJs)(augmentedWord.projectRelativeMarkdownSourcePath);
    var projectRelativeMarkdownFilePath = augmentedWord.projectRelativeMarkdownSourcePath;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "border border-gray-500 rounded-md m-2 p-2" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: augmentedWord.word })), augmentedWord.spoiler ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: (0, markdown_parse_transpile_ui_1.renderMarkdownContent)(augmentedWord.spoiler, {
                    isDev: server_api_url_1.isDev,
                    isStatic: false,
                    projectRelativeMarkdownFilePath: projectRelativeMarkdownFilePath,
                    projectRelativeBaseFolderPath: projectRelativeBaseFolderPath,
                    augmentedWordObject: augmentedWordObject,
                }) })) : null] })));
};
exports.AugmentedWordComponent = AugmentedWordComponent;
var Dictionary = function (props) {
    var _a = (0, store_1.useStore)("menu.isMobileMenuEnabled"), isMobileMenuEnabled = _a[0], setIsMobileMenuEnabled = _a[1];
    var augmentedWordObject = props.augmentedWordObject, word = props.word;
    var augmentedWord = word ? augmentedWordObject[word] : undefined;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "lg:hidden" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between px-4" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, {}), (0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u20DB", onClick: function () {
                                setIsMobileMenuEnabled(true);
                            } })] })) })), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "p-4" }, { children: [augmentedWord ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "bg-blue-200 p-4 border border-blue-800 rounded-xl mb-20" }, { children: (0, jsx_runtime_1.jsx)(exports.AugmentedWordComponent, { augmentedWordObject: augmentedWordObject, augmentedWord: augmentedWord }) }))) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: "Dictionary" })), Object.keys(augmentedWordObject).map(function (word, index) {
                        var augmentedWord = augmentedWordObject[word];
                        if (!augmentedWord)
                            return null;
                        return ((0, jsx_runtime_1.jsx)(exports.AugmentedWordComponent, { augmentedWordObject: augmentedWordObject, augmentedWord: augmentedWord }, "aug".concat(index)));
                    })] }))] }));
};
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map