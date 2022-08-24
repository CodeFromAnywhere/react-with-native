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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatetimeInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_modal_datetime_picker_1 = __importDefault(require("react-native-modal-datetime-picker"));
var react_native_1 = require("react-native");
var react_1 = require("react");
var DatetimeInput = function (_a) {
    var extra = _a.extra, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["extra", "value", "onChange"]);
    var _b = (0, react_1.useState)(false), isDatePickerVisible = _b[0], setDatePickerVisibility = _b[1];
    var _c = (0, react_1.useState)(new Date()), date = _c[0], setDate = _c[1];
    var newExtra = __assign(__assign({}, extra), { type: "dateTime" });
    // isDatePickerVisible,
    // handleConfirm,
    // hideDatePicker,
    var showDatePicker = function () {
        setDatePickerVisibility(true);
    };
    var hideDatePicker = function () {
        setDatePickerVisibility(false);
    };
    var handleConfirm = function (date) {
        console.warn("A date has been picked: ", date);
        setDate(date);
        onChange(date);
        hideDatePicker();
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_modal_datetime_picker_1.default, { isVisible: isDatePickerVisible, mode: "datetime", onConfirm: handleConfirm, onCancel: hideDatePicker }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: date && date.toDateString() + " " + date.toLocaleTimeString() }), (0, jsx_runtime_1.jsx)(react_native_1.Button, { title: "Pick a different Date", onPress: showDatePicker })] }));
};
exports.DatetimeInput = DatetimeInput;
exports.DatetimeInput.defaultInitialValue = new Date();
//# sourceMappingURL=Datetime.native.js.map