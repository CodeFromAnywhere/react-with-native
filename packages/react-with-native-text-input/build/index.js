"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInputType = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_form_1 = require("react-with-native-form");
var react_with_native_1 = require("react-with-native");
var TextInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, extra = _a.extra, config = _a.config, errors = _a.errors;
    config = config || {};
    var hasError = errors && errors.length > 0;
    var inputClassWithError = "".concat(react_with_native_form_1.inputClass).concat(hasError
        ? config.errorClassName
            ? config.errorClassName
            : " border border-red-400"
        : "");
    var onChangeText = function (value) { return onChange(value); };
    var placeholder = extra === null || extra === void 0 ? void 0 : extra.placeholder;
    var maxLength = extra === null || extra === void 0 ? void 0 : extra.maxLength;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Input, { type: (extra === null || extra === void 0 ? void 0 : extra.type) ? extra.type : (extra === null || extra === void 0 ? void 0 : extra.isPassword) ? "password" : undefined, className: inputClassWithError, value: value, onChange: function (event) { return onChangeText(event.target.value); }, placeholder: placeholder, maxLength: extra === null || extra === void 0 ? void 0 : extra.maxLength, autoComplete: extra === null || extra === void 0 ? void 0 : extra.autoComplete, required: extra === null || extra === void 0 ? void 0 : extra.required, disabled: extra === null || extra === void 0 ? void 0 : extra.disabled, native: {
            value: value,
            onChangeText: onChangeText,
            placeholder: placeholder,
            maxLength: maxLength,
            secureTextEntry: extra === null || extra === void 0 ? void 0 : extra.isPassword,
        } }, void 0));
};
TextInput.defaultInitialValue = "";
var TextInputType = /** @class */ (function () {
    function TextInputType() {
    }
    return TextInputType;
}());
exports.TextInputType = TextInputType;
exports.default = TextInput;
//# sourceMappingURL=index.js.map