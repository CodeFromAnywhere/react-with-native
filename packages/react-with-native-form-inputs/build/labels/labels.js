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
exports.LabelsInputType = exports.LabelsInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_ui_1 = require("react-with-native-ui");
var react_with_native_1 = require("react-with-native");
var react_1 = require("react");
var LabelsInput = function (_a) {
    var value = _a.value, extra = _a.extra, onChange = _a.onChange, uniqueFieldId = _a.uniqueFieldId;
    var _b = (0, react_1.useState)(""), textValue = _b[0], setTextValue = _b[1];
    var processText = function (text) {
        if (text.endsWith(",")) {
            var newValue = value;
            var trimmedText = text.slice(0, text.length - 1).trim();
            if (!value.includes(trimmedText)) {
                value.push(trimmedText);
            }
            onChange(newValue);
            setTextValue("");
        }
        else {
            setTextValue(text);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: [value.map(function (text, index) { return ((0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ onClick: function () {
                    var newValue = value.filter(function (x) { return x !== text; });
                    onChange(newValue);
                }, className: "mr-3 px-3 py-2 rounded-md border border-gray-400" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: [text, " ", (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ textClassName: "text-red-500" }, { children: "(x)" }))] }) }), "selected".concat(uniqueFieldId).concat(index))); }), (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { className: "".concat(react_with_native_ui_1.UI.bareInput, " py-3"), onChange: function (_a) {
                    var text = _a.target.value;
                    return processText(text);
                }, value: textValue, native: { onChangeText: processText } })] })));
};
exports.LabelsInput = LabelsInput;
exports.LabelsInput.defaultInitialValue = [];
var LabelsInputType = /** @class */ (function () {
    function LabelsInputType() {
    }
    return LabelsInputType;
}());
exports.LabelsInputType = LabelsInputType;
//# sourceMappingURL=labels.js.map