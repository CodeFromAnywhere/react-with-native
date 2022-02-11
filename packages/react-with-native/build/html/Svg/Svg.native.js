import * as React from "react";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
var Svg = function (_a) {
    var src = _a.src, width = _a.width, height = _a.height, className = _a.className, style = _a.style;
    var tailwind = useTailwind();
    var tailwindStyle = className ? tailwind(trimClassName(className)) : {};
    var Icon = src;
    return React.createElement(Icon, { width: width, height: height, style: [style, tailwindStyle] });
};
export default Svg;
//# sourceMappingURL=Svg.native.js.map