"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var rc_time_picker_1 = __importDefault(require("rc-time-picker"));
var src_1 = require("../../react-with-native-form/src");
var moment_1 = __importDefault(require("moment"));
require("rc-time-picker/assets/index.css");
// CSS Modules, react-datepicker-cssmodules.css
var TimeInput = function (_a) {
    var extra = _a.extra, value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(rc_time_picker_1.default, { onChange: function (time) { return onChange(time); }, value: (0, moment_1.default)(value), showSecond: false, format: "h:mm a", use12Hours: true, className: src_1.inputClass }));
};
TimeInput.defaultInitialValue = new Date();
exports.default = TimeInput;
//# sourceMappingURL=TimeInput.js.map