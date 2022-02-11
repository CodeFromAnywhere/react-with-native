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
import * as React from "react";
import { Image as RNImage } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
var Image = function (_a) {
    var native = _a.native, className = _a.className;
    var tailwind = useTailwind();
    native = native; //TODO: How can I make the native prop required, if you render a native component?
    var tailwindStyle = className ? tailwind(trimClassName(className)) : {};
    return React.createElement(RNImage, __assign({ style: [tailwindStyle] }, native));
};
export default Image;
//# sourceMappingURL=Image.native.js.map