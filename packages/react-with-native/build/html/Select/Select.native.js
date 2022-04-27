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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var Select = function (_a) {
    var native = _a.native, options = _a.options, className = _a.className;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    var style = (native || {}).style;
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    return ((0, jsx_runtime_1.jsx)(react_native_1.Picker, __assign({ style: [{ fontWeight: "bold" }, tailwindStyle, style] }, { children: (options || []).map(function (option) {
            (0, jsx_runtime_1.jsx)(react_native_1.Picker.Item, { value: String(option.value), label: String(option.label) });
        }) })));
};
exports.default = Select;
//# sourceMappingURL=Select.native.js.map