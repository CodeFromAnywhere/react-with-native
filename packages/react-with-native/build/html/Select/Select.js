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
exports.Select = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Select = function (_a) {
    var native = _a.native, options = _a.options, customOptionSelector = _a.customOptionSelector, props = __rest(_a, ["native", "options", "customOptionSelector"]);
    // default option selector
    var defaultOptionSelector = (options || []).map(function (option) {
        (0, jsx_runtime_1.jsx)("option", __assign({ value: option.value }, { children: option.label }));
    });
    // return component with custom option selector or default
    return ((0, jsx_runtime_1.jsx)("select", __assign({}, props, { children: customOptionSelector ? customOptionSelector : defaultOptionSelector })));
};
exports.Select = Select;
//# sourceMappingURL=Select.js.map