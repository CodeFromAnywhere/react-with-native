"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var datetimepicker_1 = __importDefault(require("@react-native-community/datetimepicker"));
// CSS Modules, react-datepicker-cssmodules.css
var DateInput = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(datetimepicker_1.default, { mode: "time", value: value || new Date(), onChange: function (event, time) { return onChange(time); } }));
};
exports.DateInput = DateInput;
exports.DateInput.defaultInitialValue = new Date();
exports.default = exports.DateInput;
//# sourceMappingURL=TimeInput.native.js.map