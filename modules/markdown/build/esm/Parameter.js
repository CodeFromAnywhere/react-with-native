import * as React from "react";
import { Span } from "react-with-native";
/**
 * In markdown, if you wish to refer to a parameter, you can backtick it and put a "." in front. You can also add a value to it if you wish, by adding the ":" and the value afterwards.
 */
export var Parameter = function (props) {
    var text = props.text;
    if (!text)
        return null;
    var _a = text
        .slice(1)
        .split(":")
        .map(function (x) { return x.trim(); }), parameter = _a[0], value = _a[1];
    return (React.createElement(Span, { className: "rounded-md bg-purple-400 dark:bg-purple-800 px-1" },
        parameter ? React.createElement(Span, null, parameter) : null,
        value ? React.createElement(Span, { className: "bg-white bg-opacity-50" }, value) : null));
};
