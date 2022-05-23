"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaInputType = exports.TextAreaInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var TextAreaInput = function (_a) {
    var value = _a.value, extra = _a.extra, config = _a.config, onChange = _a.onChange, errors = _a.errors;
    var hasError = errors && errors.length > 0;
    //
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.TextArea, { rows: extra === null || extra === void 0 ? void 0 : extra.rows, maxLength: extra === null || extra === void 0 ? void 0 : extra.maxLength, className: (config === null || config === void 0 ? void 0 : config.replaceClassName) ||
            "block w-full px-4 py-3 text-gray-500 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ".concat(hasError ? (config === null || config === void 0 ? void 0 : config.errorClassName) || "border-red-600" : "", " ").concat(config === null || config === void 0 ? void 0 : config.extraClassName), value: value, onChange: function (event) {
            onChange(event.target.value);
        } }));
};
exports.TextAreaInput = TextAreaInput;
exports.TextAreaInput.defaultInitialValue = "";
var TextAreaInputType = /** @class */ (function () {
    function TextAreaInputType() {
    }
    return TextAreaInputType;
}());
exports.TextAreaInputType = TextAreaInputType;
exports.default = exports.TextAreaInput;
//# sourceMappingURL=index.js.map