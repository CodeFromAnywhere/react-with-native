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
import { Linking, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { wrapInTextIfNeeded } from "../../util/util";
var A = function (_a) {
    var native = _a.native, children = _a.children, href = _a.href, className = _a.className, textClassName = _a.textClassName;
    var tailwind = useTailwind();
    var _b = native || {}, style = _b.style, nativeWithoutStyle = __rest(_b, ["style"]);
    var tailwindStyle = className ? tailwind(trimClassName(className)) : {};
    return (React.createElement(Pressable, __assign({ style: [style, tailwindStyle], onPress: function () { return href && Linking.openURL(href); } }, nativeWithoutStyle), wrapInTextIfNeeded(children, textClassName)));
};
export default A;
//# sourceMappingURL=A.native.js.map