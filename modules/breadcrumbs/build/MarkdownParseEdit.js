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
exports.MarkdownParseEdit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var editors_1 = require("./editors");
var MarkdownParseEdit = function (_a) {
    var markdownParse = _a.markdownParse;
    var _b = (0, react_1.useState)(markdownParse.raw), text = _b[0], setText = _b[1];
    var _c = (0, react_1.useState)(null), context = _c[0], setContext = _c[1];
    (0, react_1.useEffect)(function () {
        setText(markdownParse.raw);
    }, [markdownParse.raw]);
    var editableRef = (0, react_1.useRef)();
    console.log({ context: context });
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ ref: editableRef, className: "flex flex-col flex-1" }, { children: (0, jsx_runtime_1.jsx)(editors_1.ContextTextArea, { value: text, onChange: function (value) { return setText(value); }, withContext: function (context) { return setContext(context); }, className: "p-2 bg-transparent w-full h-full" }) })));
};
exports.MarkdownParseEdit = MarkdownParseEdit;
//# sourceMappingURL=MarkdownParseEdit.js.map