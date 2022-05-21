"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectInputType = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_select_1 = __importDefault(require("react-with-native-select"));
var SelectInput = function (_a) {
    var value = _a.value, extra = _a.extra, onChange = _a.onChange;
    //console.log({ value, extraOptions: extra.options });
    return ((0, jsx_runtime_1.jsx)(react_with_native_select_1.default, { className: "w-full", title: extra.title || "", options: extra.options, value: value, onChange: function (value) {
            if (value) {
                onChange(value);
            }
        } }, void 0));
};
SelectInput.defaultInitialValue = null;
var SelectInputType = /** @class */ (function () {
    function SelectInputType() {
    }
    return SelectInputType;
}());
exports.SelectInputType = SelectInputType;
exports.default = SelectInput;
//# sourceMappingURL=index.js.map