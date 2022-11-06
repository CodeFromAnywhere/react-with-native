import * as React from "react";
import { LabeledButton } from "labeled-button";
import { Div, P } from "react-with-native";
/** container for any index instance that needs to be rendered in the explore page */
export var TitleContainer = function (_a) {
    var title = _a.title, children = _a.children, buttons = _a.buttons;
    return (React.createElement(Div, { className: "p-2 m-2 border rounded-xl border-gray-500" },
        React.createElement(Div, { className: "flex flex-row justify-between items-center" },
            title ? React.createElement(P, { className: "text-3xl" }, title) : React.createElement(Div, null),
            React.createElement(Div, { className: "flex flex-row gap-3" }, buttons.filter(function (x) { return x.isEnabled !== false; }).map(LabeledButton))),
        children));
};
