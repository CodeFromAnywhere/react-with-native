"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Alert_1 = require("./Alert");
var react_2 = require("@headlessui/react");
var react_3 = require("react");
var react_with_native_1 = require("react-with-native");
var AlertProvider = function (_a) {
    var children = _a.children;
    // console.log("normal alertprovider");
    var _b = (0, react_1.useState)([]), alertState = _b[0], setAlertState = _b[1];
    var firstAlert = alertState[0];
    // console.log({ firstAlert, alertState });
    var alert = function (title, message, buttons, options) {
        var newState = { title: title, message: message, buttons: buttons, options: options };
        var newAlertState = alertState.concat([newState]);
        // console.log("push alert state", { newState, alertState, newAlertState });
        setAlertState(newAlertState);
    };
    var renderAlert = function (firstAlert) {
        if (!firstAlert) {
            // console.log("HMMMM");
            return null;
        }
        // console.log("Should render alert");
        var title = firstAlert.title, buttons = firstAlert.buttons, message = firstAlert.message, options = firstAlert.options;
        var value = undefined; //TODO: make it possible to fill in value here (prompt-alert)
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "absolute w-screen h-screen inset-0" }, { children: (0, jsx_runtime_1.jsx)(react_2.Transition, __assign({ appear: true, show: true, as: react_3.Fragment }, { children: (0, jsx_runtime_1.jsx)(react_2.Dialog, __assign({ as: "div", className: "fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm", onClose: function () {
                        var _a;
                        if ((options === null || options === void 0 ? void 0 : options.cancelable) === false)
                            return;
                        (_a = options === null || options === void 0 ? void 0 : options.onDismiss) === null || _a === void 0 ? void 0 : _a.call(options);
                        setAlertState(alertState.slice(1));
                    } }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "min-h-screen px-4 text-center" }, { children: [(0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_3.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0, jsx_runtime_1.jsx)(react_2.Dialog.Overlay, { className: "fixed inset-0" }) })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "inline-block h-screen align-middle", "aria-hidden": "true" }, { children: "\u200B" })), (0, jsx_runtime_1.jsx)(react_2.Transition.Child, __assign({ as: react_3.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl" }, { children: [title ? ((0, jsx_runtime_1.jsx)(react_2.Dialog.Title, __assign({ as: "h3", className: "text-lg font-medium leading-6 text-gray-900" }, { children: title }))) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "py-6" }, { children: message })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row gap-4" }, { children: buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) {
                                                var buttonColor = button.style === "cancel"
                                                    ? "bg-gray-300 hover:bg-gray-400"
                                                    : button.style === "destructive"
                                                        ? "bg-red-500 hover:bg-red-600"
                                                        : "bg-blue-500 hover:bg-blue-600";
                                                return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ onClick: function () {
                                                        var _a;
                                                        (_a = button.onPress) === null || _a === void 0 ? void 0 : _a.call(button, value);
                                                        setAlertState(alertState.slice(1));
                                                    }, className: "cursor-pointer py-2 ".concat(buttonColor, " rounded-md flex flex-1 items-center justify-center") }, { children: button.text }), "button".concat(index)));
                                            }) }))] })) }))] })) })) })) })));
    };
    return ((0, jsx_runtime_1.jsxs)(Alert_1.AlertContext.Provider, __assign({ value: alert }, { children: [renderAlert(firstAlert), children] })));
};
exports.AlertProvider = AlertProvider;
//# sourceMappingURL=AlertProvider.js.map