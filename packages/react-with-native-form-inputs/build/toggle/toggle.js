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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleInputType = exports.ToggleInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var ToggleInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, extra = _a.extra, config = _a.config, uniqueFieldId = _a.uniqueFieldId, errors = _a.errors;
    config = config || {};
    var defaultClass = "";
    var hasError = errors && errors.length > 0;
    var errorClass = hasError
        ? config.errorClassName
            ? config.errorClassName
            : " border border-red-400"
        : "";
    var classWithError = config.replaceClassName
        ? "".concat(config.replaceClassName, " ").concat(errorClass)
        : "".concat(defaultClass, " ").concat(config.extraClassName, " ").concat(errorClass);
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Toggle, { id: uniqueFieldId, 
                // class not working with border on checkbox
                className: classWithError, checked: value, onChange: function (value) { return onChange(value); } }), (extra === null || extra === void 0 ? void 0 : extra.label) ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Label, __assign({ className: "pl-3 select-none ".concat(hasError ? "text-red-500" : ""), htmlFor: uniqueFieldId }, { children: extra.label }))) : null] })));
};
exports.ToggleInput = ToggleInput;
exports.ToggleInput.defaultInitialValue = false;
var ToggleInputType = /** @class */ (function () {
    function ToggleInputType() {
    }
    return ToggleInputType;
}());
exports.ToggleInputType = ToggleInputType;
//# sourceMappingURL=toggle.js.map