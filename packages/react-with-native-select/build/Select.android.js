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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var util_1 = require("./util");
var react_native_actionsheet_1 = __importDefault(require("react-native-actionsheet"));
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, value = _a.value, title = _a.title, className = _a.className, children = _a.children, selectFirstOption = _a.selectFirstOption, ios = _a.ios;
    var realValue = (0, util_1.getRealValue)({ value: value, selectFirstOption: selectFirstOption, options: options, title: title });
    var refActionSheet = (0, react_1.useRef)(null);
    var onClick = function () {
        //show ActionSheet
        if (refActionSheet.current) {
            refActionSheet.current.show();
        }
    };
    var buttonTitle = (value === null || value === void 0 ? void 0 : value.label) || title || "Select a value";
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: className }, { children: children ? (children({ onClick: onClick, className: className, value: realValue })) : ((0, jsx_runtime_1.jsxs)(react_with_native_1.Button, __assign({ onClick: onClick }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Text, { children: buttonTitle }), (0, jsx_runtime_1.jsx)(react_native_actionsheet_1.default, { ref: refActionSheet, title: buttonTitle, options: __spreadArray(__spreadArray([], options.map(function (o) { return o.label; }), true), ["Cancel"], false), 
                    //position in options array that contains the label we will use
                    //for a "cancelling" the select menu (aka ActionSheet)
                    cancelButtonIndex: options.length, 
                    //position in options array that contains the label we will use
                    //for a destructive button: for example, "remove" (to remove an option from the list)
                    //this button will have a red tint.
                    destructiveButtonIndex: -1, onPress: function (index) {
                        var selected = options[index];
                        onChange === null || onChange === void 0 ? void 0 : onChange(selected);
                    } })] }))) })));
};
exports.default = Select;
//# sourceMappingURL=Select.android.js.map