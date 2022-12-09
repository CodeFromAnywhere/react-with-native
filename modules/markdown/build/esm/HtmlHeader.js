import * as React from "react";
import { getImplicitId } from "markdown-parse-js";
import { Div } from "react-with-native";
export var HtmlHeader = function (_a) {
    var level = _a.level, children = _a.children;
    var levelSize = level === 1
        ? "text-3xl"
        : level === 2
            ? "text-2xl"
            : level === 3
                ? "text-xl"
                : level === 4
                    ? "text-lg"
                    : level === 5
                        ? "text-md"
                        : level === 6
                            ? "text-sm"
                            : "text-xs";
    // {...props
    return (React.createElement(Div, { id: getImplicitId(String(children)), className: levelSize }, children));
};
