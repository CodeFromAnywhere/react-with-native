"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_datepicker_1 = __importDefault(require("react-datepicker"));
var react_with_native_ui_1 = require("react-with-native-ui");
// CSS Modules, react-datepicker-cssmodules.css
var DateInput = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(react_datepicker_1.default, { selected: value, onChange: function (date) {
            console.log("date", date);
            onChange(date);
        }, dateFormat: "dd-MM-yyyy", className: react_with_native_ui_1.UI.dateInput }));
};
exports.DateInput = DateInput;
exports.DateInput.defaultInitialValue = null;
//# sourceMappingURL=DateInput.js.map