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
exports.renderTsVariable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
// @ts-ignore
var GoFileCode_svg_1 = __importDefault(require("../../assets/GoFileCode.svg"));
var api_1 = require("../api");
var IndexInstanceContainer_1 = require("./IndexInstanceContainer");
var react_with_native_1 = require("react-with-native");
var TsCommentComponent_1 = require("./TsCommentComponent");
var renderMarkdownParse_1 = require("./renderMarkdownParse");
var createCodeblockMarkdown_1 = require("../util/createCodeblockMarkdown");
/**
 * renders a TsVariable interface nicely
 *
 */
var renderTsVariable = function (tsVariable) {
    if (!tsVariable)
        return null;
    var classification = tsVariable.classification, comments = tsVariable.comments, id = tsVariable.id, name = tsVariable.name, operationFolderName = tsVariable.operationFolderName, relativeFilePathFromSrc = tsVariable.relativeFilePathFromSrc, relativeOperationBasePathFromProjectRoot = tsVariable.relativeOperationBasePathFromProjectRoot, relativePathFromProjectRoot = tsVariable.relativePathFromProjectRoot, slug = tsVariable.slug, srcFileId = tsVariable.srcFileId, type = tsVariable.type, value = tsVariable.value, operationName = tsVariable.operationName;
    var tsString = "".concat(classification, " ").concat(name, ": ").concat(type.rawType, " = ").concat(value, ";");
    return ((0, jsx_runtime_1.jsx)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ buttons: [
            {
                onClick: function () {
                    (0, api_1.api)("vscode-open", "GET", {
                        path: relativePathFromProjectRoot,
                        line: 0,
                    });
                },
                icon: GoFileCode_svg_1.default,
                title: "Open Code",
            },
        ], title: "\uD83C\uDF79 ".concat(operationName, " (").concat(srcFileId, ")") }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderMarkdownParse_1.renderMarkdownContent)((0, createCodeblockMarkdown_1.createCodeblockMarkdown)(tsString)), comments.map(function (comment) { return ((0, jsx_runtime_1.jsx)(TsCommentComponent_1.TsCommentComponent, __assign({}, comment))); })] }) })));
};
exports.renderTsVariable = renderTsVariable;
//# sourceMappingURL=renderTsVariable.js.map