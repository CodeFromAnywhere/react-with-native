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
exports.SelectMultipleInputType = exports.SelectMultipleInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_ui_1 = __importDefault(require("react-with-native-ui"));
var react_with_native_select_1 = __importDefault(require("react-with-native-select"));
var react_with_native_1 = require("react-with-native");
var SelectMultipleInput = function (_a) {
    var value = _a.value, extra = _a.extra, onChange = _a.onChange, uniqueFieldId = _a.uniqueFieldId;
    //console.log({ value, extraOptions: extra.options });
    var optionsLeft = [{ label: "Choose a value", value: "" }]
        .concat(extra.options)
        .filter(function (x) { return !value.includes(x); });
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: [value.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ onClick: function () {
                    var newValue = value.filter(function (x) { return x.value !== item.value; });
                    onChange(newValue);
                }, className: "mr-3 px-3 py-2 rounded-md border border-gray-400" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: [item.label, " ", (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ textClassName: "text-red-500" }, { children: "(x)" }))] }) }), "selected".concat(uniqueFieldId).concat(index))); }), optionsLeft.length > 1 ? ((0, jsx_runtime_1.jsx)(react_with_native_select_1.default, { className: react_with_native_ui_1.default.selectInput, title: extra.title || "", options: optionsLeft, onChange: function (selected) {
                    console.log({ selected: selected });
                    if (selected) {
                        var newValue = value;
                        newValue.push(selected);
                        console.log({ value: value, newValue: newValue });
                        onChange(newValue);
                    }
                } })) : null] })));
};
exports.SelectMultipleInput = SelectMultipleInput;
exports.SelectMultipleInput.defaultInitialValue = [];
var SelectMultipleInputType = /** @class */ (function () {
    function SelectMultipleInputType() {
    }
    return SelectMultipleInputType;
}());
exports.SelectMultipleInputType = SelectMultipleInputType;
exports.default = exports.SelectMultipleInput;
//# sourceMappingURL=index.js.map