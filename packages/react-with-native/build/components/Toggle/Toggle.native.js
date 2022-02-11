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
import { Switch } from "react-native";
var Toggle = function (_a) {
    var native = _a.native, checked = _a.checked, onChange = _a.onChange;
    return (React.createElement(Switch, __assign({ value: checked, onValueChange: function (value) { return onChange(value); } }, native)));
};
export default Toggle;
//# sourceMappingURL=Toggle.native.js.map