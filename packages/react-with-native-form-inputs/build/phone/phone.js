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
exports.PhoneInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var text_1 = require("../text/text");
var PhoneInput = function (_a) {
    var extra = _a.extra, props = __rest(_a, ["extra"]);
    var newExtra = __assign(__assign({}, extra), { type: "phone" });
    return (0, jsx_runtime_1.jsx)(text_1.TextInput, __assign({}, props, { extra: newExtra }));
};
exports.PhoneInput = PhoneInput;
exports.PhoneInput.defaultInitialValue = "";
//# sourceMappingURL=phone.js.map