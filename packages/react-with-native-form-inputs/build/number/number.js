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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberInputType = exports.NumberInput = exports.castToNumber = exports.isNumber = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var text_1 = require("../text/text");
var isNumber = function (numberString) {
    if (numberString === null ||
        numberString === undefined ||
        numberString === "")
        return false;
    if (isNaN(Number(numberString)))
        return false;
    return true;
};
exports.isNumber = isNumber;
var castToNumber = function (numberString) {
    if (numberString === null)
        return null;
    if (numberString === undefined)
        return undefined;
    if (numberString === "")
        return undefined;
    var number = Number(numberString);
    if (isNaN(number))
        return undefined;
    return number;
};
exports.castToNumber = castToNumber;
var NumberInput = function (_a) {
    var extra = _a.extra, onChange = _a.onChange, value = _a.value, props = __rest(_a, ["extra", "onChange", "value"]);
    var stringifiedValue = value === null || value === undefined ? "" : String(value);
    var _b = (0, react_1.useState)(stringifiedValue), numberStringValue = _b[0], setNumberStringValue = _b[1];
    var newExtra = __assign({ type: "text" }, extra);
    return ((0, jsx_runtime_1.jsx)(text_1.TextInput, __assign({}, props, { value: numberStringValue, onChange: function (value) {
            setNumberStringValue(value);
            if ((0, exports.isNumber)(value)) {
                var casted = (0, exports.castToNumber)(value);
                onChange(casted);
            }
        }, extra: newExtra })));
};
exports.NumberInput = NumberInput;
var NumberInputType = /** @class */ (function () {
    function NumberInputType() {
    }
    return NumberInputType;
}());
exports.NumberInputType = NumberInputType;
exports.NumberInput.defaultInitialValue = null;
//# sourceMappingURL=number.js.map