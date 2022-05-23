"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInputType = exports.TextInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_ui_1 = __importDefault(require("react-with-native-ui"));
var react_with_native_1 = require("react-with-native");
var TextInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, extra = _a.extra, config = _a.config, errors = _a.errors;
    config = config || {};
    var hasError = errors && errors.length > 0;
    var inputClassWithError = "".concat(react_with_native_ui_1.default.textInput).concat(hasError
        ? config.errorClassName
            ? config.errorClassName
            : " border border-red-400"
        : "");
    var onChangeText = function (value) { return onChange(value); };
    var placeholder = extra === null || extra === void 0 ? void 0 : extra.placeholder;
    var maxLength = extra === null || extra === void 0 ? void 0 : extra.maxLength;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Input, { type: (extra === null || extra === void 0 ? void 0 : extra.type) ? extra.type : (extra === null || extra === void 0 ? void 0 : extra.isPassword) ? "password" : undefined, className: inputClassWithError, style: { padding: 5, marginTop: 5, marginBottom: 5 }, value: value, onChange: function (event) { return onChangeText(event.target.value); }, placeholder: placeholder, maxLength: extra === null || extra === void 0 ? void 0 : extra.maxLength, autoComplete: extra === null || extra === void 0 ? void 0 : extra.autoComplete, required: extra === null || extra === void 0 ? void 0 : extra.required, disabled: extra === null || extra === void 0 ? void 0 : extra.disabled, native: {
            value: value,
            onChangeText: onChangeText,
            placeholder: placeholder,
            maxLength: maxLength,
            secureTextEntry: extra === null || extra === void 0 ? void 0 : extra.isPassword,
        } }));
};
exports.TextInput = TextInput;
exports.TextInput.defaultInitialValue = "";
var TextInputType = /** @class */ (function () {
    function TextInputType() {
    }
    return TextInputType;
}());
exports.TextInputType = TextInputType;
exports.default = exports.TextInput;
//# sourceMappingURL=index.js.map