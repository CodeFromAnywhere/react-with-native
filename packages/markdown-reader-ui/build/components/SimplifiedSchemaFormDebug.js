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
exports.SimplifiedSchemaFormDebug = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var createCodeblockMarkdown_1 = require("../util/createCodeblockMarkdown");
var renderMarkdownParse_1 = require("./renderMarkdownParse");
var SimplifiedSchemaFormDebug = function (_a) {
    var parameters = _a.parameters, values = _a.values;
    var _b = (0, react_1.useState)(false), showParams = _b[0], setShowParams = _b[1];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: "values" }), (0, renderMarkdownParse_1.renderMarkdownContent)((0, createCodeblockMarkdown_1.createCodeblockMarkdown)(JSON.stringify(values, null, 2), "json")), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "hover:underline cursor-pointer", onClick: function () { return setShowParams(!showParams); } }, { children: "params (toggle)" })), " ", showParams
                ? (0, renderMarkdownParse_1.renderMarkdownContent)((0, createCodeblockMarkdown_1.createCodeblockMarkdown)(JSON.stringify(parameters, null, 2), "json"))
                : null] }));
};
exports.SimplifiedSchemaFormDebug = SimplifiedSchemaFormDebug;
//# sourceMappingURL=SimplifiedSchemaFormDebug.js.map