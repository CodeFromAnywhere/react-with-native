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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alert = exports.Alert = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Portal_1 = __importDefault(require("./Portal"));
var react_1 = require("@headlessui/react");
var react_2 = require("react");
var react_with_native_1 = require("react-with-native");
var Alert = function (_a) {
    var _b = _a.props, title = _b[0], message = _b[1], buttons = _b[2], options = _b[3];
    return (jsx_runtime_1.jsx("div", __assign({ id: "__alertprovider" }, { children: jsx_runtime_1.jsx(react_1.Transition, __assign({ appear: true, show: true, as: react_2.Fragment }, { children: jsx_runtime_1.jsx(react_1.Dialog, __assign({ as: "div", className: "fixed inset-0 z-10 overflow-y-auto", onClose: function () { return null; } }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "min-h-screen px-4 text-center" }, { children: [jsx_runtime_1.jsx(react_1.Transition.Child, __assign({ as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: jsx_runtime_1.jsx(react_1.Dialog.Overlay, { className: "fixed inset-0" }, void 0) }), void 0), jsx_runtime_1.jsx("span", __assign({ className: "inline-block h-screen align-middle", "aria-hidden": "true" }, { children: "\u200B" }), void 0), jsx_runtime_1.jsx(react_1.Transition.Child, __assign({ as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" }, { children: jsx_runtime_1.jsxs(react_with_native_1.Div, __assign({ className: "inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl" }, { children: [title ? (jsx_runtime_1.jsx(react_1.Dialog.Title, __assign({ as: "h3", className: "text-lg font-medium leading-6 text-gray-900" }, { children: title }), void 0)) : null, jsx_runtime_1.jsx(react_with_native_1.P, { children: message }, void 0), buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button) {
                                        return jsx_runtime_1.jsx(react_with_native_1.Div, { children: button.text }, void 0);
                                    })] }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0));
};
exports.Alert = Alert;
var alert = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (jsx_runtime_1.jsx(Portal_1.default, { children: jsx_runtime_1.jsx(exports.Alert, { props: args }, void 0) }, void 0));
};
exports.alert = alert;
exports.default = exports.alert;
//# sourceMappingURL=Alert.js.map