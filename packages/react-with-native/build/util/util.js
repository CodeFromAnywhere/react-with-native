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
exports.joinClassNames = exports.wrapInTextIfNeeded = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Text_1 = require("../react-native/Text/Text");
// NB: figure out a way to do the styles of the text right.
var wrapInTextIfNeeded = function (children, textClassName) {
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(Text_1.Text, __assign({ className: textClassName }, { children: children }))) : (children);
};
exports.wrapInTextIfNeeded = wrapInTextIfNeeded;
var joinClassNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (x) { return !!x; }).join(" ");
};
exports.joinClassNames = joinClassNames;
//# sourceMappingURL=util.js.map