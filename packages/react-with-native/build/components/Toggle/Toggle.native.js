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
exports.Toggle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var Toggle = function (_a) {
    var native = _a.native, checked = _a.checked, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Switch, __assign({ value: checked, onValueChange: function (value) { return onChange(value); } }, native)));
};
exports.Toggle = Toggle;
//# sourceMappingURL=Toggle.native.js.map