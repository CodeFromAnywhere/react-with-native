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
exports.TsFunctionComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var IndexInstanceContainer_1 = require("./IndexInstanceContainer");
var api_1 = require("../api");
var renderLabeledButton_1 = require("./renderLabeledButton");
var comment_util_1 = require("comment-util");
var renderMarkdownParse_1 = require("./renderMarkdownParse");
var renderSchema_1 = require("./TsInterface/renderSchema");
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var SimplifiedSchemaFormDebug_1 = require("./SimplifiedSchemaFormDebug");
var store_1 = __importDefault(require("../store"));
var vscodeOpen_1 = require("../api/vscodeOpen");
var convert_case_1 = require("convert-case");
var FancyLoader_1 = require("./FancyLoader");
var createCodeblockMarkdown_1 = require("../util/createCodeblockMarkdown");
var BigButton_1 = require("./BigButton");
var FunctionForm = function (_a) {
    var parameters = _a.parameters, functionName = _a.functionName, id = _a.id, isDebug = _a.isDebug, submitText = _a.submitText;
    var _b = (0, react_1.useState)(), result = _b[0], setResult = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(undefined), values = _d[0], setValues = _d[1];
    var authToken = (0, store_1.default)("authToken")[0];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [parameters ? ((0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SimplifiedSchemaForm, { id: id, parameters: parameters, values: values, onChange: function (x) { return setValues(x); }, referencedModelData: {}, isDebug: isDebug })) : null, loading ? ((0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, { big: true })) : ((0, jsx_runtime_1.jsx)(BigButton_1.BigButton, { isLoading: loading, onClick: function () {
                    var body = {
                        authToken: authToken,
                        arguments: values,
                    };
                    setLoading(true);
                    (0, api_1.api)("function/".concat((0, convert_case_1.kebabCase)(functionName)), "POST", body)
                        .then(function (result) {
                        setResult(result);
                        setLoading(false);
                    })
                        .catch(function (e) {
                        setResult(e);
                        setLoading(false);
                    });
                }, title: submitText })), result ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: "Result:" })), (0, renderMarkdownParse_1.renderMarkdownContent)((0, createCodeblockMarkdown_1.createCodeblockMarkdown)(JSON.stringify(result, null, 2), "json"))] })) : null, isDebug ? ((0, jsx_runtime_1.jsx)(SimplifiedSchemaFormDebug_1.SimplifiedSchemaFormDebug, { parameters: parameters, values: values })) : null] }));
};
var renderLinkToFile = function (relativeFilePath, authToken) {
    return (0, renderLabeledButton_1.renderLabeledButton)({
        onClick: function () { return (0, vscodeOpen_1.vscodeOpen)([relativeFilePath], authToken); },
        title: relativeFilePath.split("/").pop(),
    });
};
var TsFunctionComponent = function (_a) {
    var parameters = _a.parameters, rawText = _a.rawText, commentsInside = _a.commentsInside, returnType = _a.returnType, maxIndentationDepth = _a.maxIndentationDepth, name = _a.name, dependantFiles = _a.dependantFiles, description = _a.description, 
    // id stuff
    id = _a.id, operationFolderName = _a.operationFolderName, relativeFilePathFromSrc = _a.relativeFilePathFromSrc, slug = _a.slug, relativeOperationBasePathFromProjectRoot = _a.relativeOperationBasePathFromProjectRoot, srcFileId = _a.srcFileId, operationName = _a.operationName, relativePathFromProjectRoot = _a.relativePathFromProjectRoot, 
    //size stuff
    size = _a.size, codeSize = _a.codeSize, commentSize = _a.commentSize, cumulativeCodeSize = _a.cumulativeCodeSize, cumulativeCommentSize = _a.cumulativeCommentSize, cumulativeSize = _a.cumulativeSize;
    var authToken = (0, store_1.default)("authToken")[0];
    var _b = (0, react_1.useState)(false), debug = _b[0], setDebug = _b[1];
    var title = "\uD83C\uDF7A ".concat(name, " \u27A1 ").concat(returnType.rawType);
    var submitText = "Submit ".concat(name, " (returns ").concat(returnType.rawType, ")");
    return ((0, jsx_runtime_1.jsx)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ buttons: [
            {
                onClick: function () {
                    setDebug(!debug);
                },
                title: "Debug",
                emoji: "🧐",
            },
            {
                onClick: function () { return (0, vscodeOpen_1.vscodeOpen)([relativePathFromProjectRoot], authToken); },
                emoji: "💻",
                title: "Code",
            },
        ], title: title }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [description
                            ? (0, renderMarkdownParse_1.renderMarkdownContent)((0, comment_util_1.stripComment)(description))
                            : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: parameters && parameters.length > 0 ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Ol, __assign({ className: "list-inside list-disc" }, { children: parameters === null || parameters === void 0 ? void 0 : parameters.map(function (x) { return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Li, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ textClassName: "font-bold" }, { children: [x.name, x.required ? "?" : "", ":"] })), (0, renderSchema_1.renderSchema)(x.schema)] })); }) }))) : ("No input") }) }))] }), (0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: ["Max indentation depth:", " ", maxIndentationDepth < 3 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ textClassName: "text-green-500" }, { children: [maxIndentationDepth, " \uD83D\uDD25"] }))) : maxIndentationDepth < 6 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ textClassName: "text-orange-500" }, { children: [maxIndentationDepth, " \uD83E\uDD75"] }))) : ((0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ textClassName: "text-red-500" }, { children: [maxIndentationDepth, " \uD83D\uDCA3"] })))] }), dependantFiles && dependantFiles.length > 0 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: "Used here:" }), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: [(0, renderLabeledButton_1.renderLabeledButton)({
                                    title: "Open all",
                                    emoji: "🦾",
                                    onClick: function () { return (0, vscodeOpen_1.vscodeOpen)(dependantFiles, authToken); },
                                }), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "ml-3" }, { children: dependantFiles === null || dependantFiles === void 0 ? void 0 : dependantFiles.map(function (f) { return renderLinkToFile(f, authToken); }) }))] }))] })) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: "Only used internally, it seems" })), (0, jsx_runtime_1.jsx)(FunctionForm, { submitText: submitText, isDebug: debug, id: id, functionName: name, parameters: parameters })] }) })));
};
exports.TsFunctionComponent = TsFunctionComponent;
//# sourceMappingURL=TsFunctionComponent.js.map