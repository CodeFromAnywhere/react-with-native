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
exports.TsCommentComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var convert_case_1 = require("convert-case");
var react_with_native_1 = require("react-with-native");
var renderMarkdownParse_1 = require("./renderMarkdownParse");
var IndexInstanceContainer_1 = require("./IndexInstanceContainer");
var createCodeblockMarkdown_1 = require("../util/createCodeblockMarkdown");
var store_1 = __importDefault(require("../store"));
var vscodeOpen_1 = require("../api/vscodeOpen");
var maximumStatementLines = 3;
/**
 * renders a TsComment interface nicely
 *
 * TODO:
 *
 *   relativePathFromProjectRoot,
  firstLine,
  lastLine,
 
 
 ... need to be used to open the file at the right location.


 */
var TsCommentComponent = function (tsComment) {
    if (!tsComment)
        return null;
    var authToken = (0, store_1.default)("authToken")[0];
    var comment = tsComment.comment, parameters = tsComment.parameters, 
    //   comment location
    firstLine = tsComment.firstLine, 
    //
    //  name,
    // operationFolderName,
    operationName = tsComment.operationName, relativeFilePathFromSrc = tsComment.relativeFilePathFromSrc, srcFileId = tsComment.srcFileId, 
    //   relativeOperationFilePath,
    //   slug,
    types = tsComment.types, rawStatement = tsComment.rawStatement, statementName = tsComment.statementName, relativePathFromProjectRoot = tsComment.relativePathFromProjectRoot;
    return ((0, jsx_runtime_1.jsx)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ buttons: [
            {
                onClick: function () {
                    (0, vscodeOpen_1.vscodeOpen)([relativePathFromProjectRoot + ":" + firstLine], authToken);
                },
                emoji: "💻",
                title: "Code",
            },
        ], title: "\uD83D\uDCD2 ".concat(types.length > 0 ? types.map(convert_case_1.humanCase).join(", ") : "Comment", " ").concat(statementName || "", " ").concat(operationName, " (").concat(srcFileId, ")") }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, renderMarkdownParse_1.renderFrontMatter)(parameters), (0, renderMarkdownParse_1.renderMarkdownContent)(comment), !rawStatement ||
                    rawStatement.split("\n").length > maximumStatementLines
                    ? null
                    : (0, renderMarkdownParse_1.renderMarkdownContent)((0, createCodeblockMarkdown_1.createCodeblockMarkdown)(rawStatement))] }) })));
};
exports.TsCommentComponent = TsCommentComponent;
//# sourceMappingURL=TsCommentComponent.js.map