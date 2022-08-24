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
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var tailwind_rn_1 = require("tailwind-rn");
var trimClassName_1 = require("../../util/trimClassName");
var util_1 = require("../../util/util");
var Button = function (_a) {
    var native = _a.native, textClassName = _a.textClassName, className = _a.className, children = _a.children, onClick = _a.onClick, style = _a.style;
    native = native;
    var tailwind = (0, tailwind_rn_1.useTailwind)();
    var _b = native || {}, nativeStyle = _b.style, onPress = _b.onPress, otherNative = __rest(_b, ["style", "onPress"]);
    var tailwindStyle = className ? tailwind((0, trimClassName_1.trimClassName)(className)) : {};
    //NB: figure out how I make it work without casting to any because it would need an event which we dont have in rn
    var onPressHandler = onPress ? onPress : function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); };
    return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ style: [tailwindStyle, style, nativeStyle], onPress: onPressHandler }, otherNative, { children: (0, util_1.wrapInTextIfNeeded)(children, textClassName) })));
};
exports.Button = Button;
//# sourceMappingURL=Button.native.js.map