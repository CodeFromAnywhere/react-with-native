import * as React from "react";
import Text from "../react-native/Text/Text";
// NB: figure out a way to do the styles of the text right.
export var wrapInTextIfNeeded = function (children, textClassName) {
    return typeof children === "string" ? (React.createElement(Text, { className: textClassName }, children)) : (children);
};
export var joinClassNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (x) { return !!x; }).join(" ");
};
//# sourceMappingURL=util.js.map