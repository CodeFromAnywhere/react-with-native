import * as React from "react";
import { Picker } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
var Select = function (_a) {
    var native = _a.native, options = _a.options, className = _a.className;
    var tailwind = useTailwind();
    var style = (native || {}).style;
    var tailwindStyle = className ? tailwind(trimClassName(className)) : {};
    return (React.createElement(Picker, { style: [{ fontWeight: "bold" }, tailwindStyle, style] }, (options || []).map(function (option) {
        React.createElement(Picker.Item, { value: String(option.value), label: String(option.label) });
    })));
};
export default Select;
//# sourceMappingURL=Select.native.js.map