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
import * as React from "react";
import { Pressable as ReactNativePressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { wrapInTextIfNeeded } from "../../util/util";
import { trimClassName } from "../../util/trimClassName";
var Pressable = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, children = _a.children, onClick = _a.onClick;
    var tailwind = useTailwind();
    var _b = native || {}, style = _b.style, nativeWithoutStyle = __rest(_b, ["style"]);
    var tailwindStyle = className ? tailwind(trimClassName(className)) : {};
    return (React.createElement(ReactNativePressable, __assign({ style: typeof style === "function" ? style : [tailwindStyle, style], onPress: onClick }, nativeWithoutStyle), wrapInTextIfNeeded(children, textClassName)));
};
export default Pressable;
//# sourceMappingURL=Pressable.native.js.map