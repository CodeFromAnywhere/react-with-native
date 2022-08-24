"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var rc_time_picker_1 = __importDefault(require("rc-time-picker"));
var moment_1 = __importDefault(require("moment"));
var react_with_native_ui_1 = require("react-with-native-ui");
// CSS Modules, react-datepicker-cssmodules.css
var TimeInput = function (_a) {
    var extra = _a.extra, value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(rc_time_picker_1.default, { onChange: function (time) { return onChange(time); }, value: (0, moment_1.default)(value), showSecond: false, format: "h:mm a", use12Hours: true, className: react_with_native_ui_1.UI.dateInput }));
};
exports.TimeInput = TimeInput;
exports.TimeInput.defaultInitialValue = new Date();
//# sourceMappingURL=TimeInput.js.map