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
//renders a native ActionSheet on iOS, a custom actionsheet on Android (using expo-actionsheet)
var react_native_1 = require("react-native");
var react_with_native_1 = require("react-with-native");
var util_1 = require("./util");
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, value = _a.value, title = _a.title, className = _a.className, children = _a.children, selectFirstOption = _a.selectFirstOption, ios = _a.ios;
    var realValue = (0, util_1.getRealValue)({ value: value, selectFirstOption: selectFirstOption, options: options, title: title });
    var onClick = function () {
        react_native_1.ActionSheetIOS.showActionSheetWithOptions(__assign({ options: options.map(function (o) { return o.label; }) }, ios), function (buttonIndex) {
            var _a;
            var selected = options[buttonIndex];
            (_a = selected.onClick) === null || _a === void 0 ? void 0 : _a.call(selected);
            onChange === null || onChange === void 0 ? void 0 : onChange(selected);
        });
    };
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: className }, { children: children === null || children === void 0 ? void 0 : children({ onClick: onClick, className: className, value: realValue }) }), void 0));
};
exports.default = Select;
//# sourceMappingURL=Select.ios.js.map