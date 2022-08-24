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
var react_datetime_1 = __importDefault(require("react-datetime"));
var react_1 = require("react");
var react_with_native_ui_1 = require("react-with-native-ui");
var DatetimeInput = function (_a) {
    var extra = _a.extra, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["extra", "value", "onChange"]);
    var newExtra = __assign(__assign({}, extra), { type: "dateTime" });
    var _b = (0, react_1.useState)(new Date()), date = _b[0], setDate = _b[1];
    //return <TextInput {...props} extra={newExtra} />;
    var handleChange = function (date) {
        console.warn("A date has been picked: ", date);
        setDate(date);
        onChange(date);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: 
        // @ts-ignore
        (0, jsx_runtime_1.jsx)(react_datetime_1.default, __assign({}, props, { value: value ? new Date(value) : new Date(), initialValue: date, onChange: function (value) {
                handleChange(new Date(value));
            }, className: react_with_native_ui_1.UI.dateInput })) }));
};
exports.DatetimeInput = DatetimeInput;
exports.DatetimeInput.defaultInitialValue = new Date();
//# sourceMappingURL=Datetime.js.map