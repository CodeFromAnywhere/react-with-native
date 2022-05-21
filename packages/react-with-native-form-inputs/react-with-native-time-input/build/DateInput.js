"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_datepicker_1 = __importDefault(require("react-datepicker"));
var react_with_native_form_1 = require("react-with-native-form");
// CSS Modules, react-datepicker-cssmodules.css
var DateInput = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(react_datepicker_1.default, { selected: value, onChange: function (date) {
            console.log("date", date);
            onChange(date);
        }, dateFormat: "dd-MM-yyyy", className: react_with_native_form_1.inputClass }, void 0));
};
DateInput.defaultInitialValue = null;
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map