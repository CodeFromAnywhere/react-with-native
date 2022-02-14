import Portal from "./Portal";
import { Dialog as HeadlessUiDialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Div, P } from "react-with-native";
export var Alert = function (_a) {
    var _b = _a.props, title = _b[0], message = _b[1], buttons = _b[2], options = _b[3];
    return (React.createElement("div", { id: "__alertprovider" },
        React.createElement(Transition, { appear: true, show: true, as: Fragment },
            React.createElement(HeadlessUiDialog, { as: "div", className: "fixed inset-0 z-10 overflow-y-auto", onClose: function () { return null; } },
                React.createElement("div", { className: "min-h-screen px-4 text-center" },
                    React.createElement(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                        React.createElement(HeadlessUiDialog.Overlay, { className: "fixed inset-0" })),
                    React.createElement("span", { className: "inline-block h-screen align-middle", "aria-hidden": "true" }, "\u200B"),
                    React.createElement(Transition.Child, { as: Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                        React.createElement(Div, { className: "inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl" },
                            title ? (React.createElement(HeadlessUiDialog.Title, { as: "h3", className: "text-lg font-medium leading-6 text-gray-900" }, title)) : null,
                            React.createElement(P, null, message), buttons === null || buttons === void 0 ? void 0 :
                            buttons.map(function (button) {
                                return React.createElement(Div, null, button.text);
                            }))))))));
};
export var alert = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (React.createElement(Portal, null,
        React.createElement(Alert, { props: args })));
};
export default alert;
//# sourceMappingURL=Alert.js.map