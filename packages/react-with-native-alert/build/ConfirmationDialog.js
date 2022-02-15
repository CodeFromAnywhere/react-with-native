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
import React from "react";
import Button from "../components/Button";
export var ConfirmationDialogContext = React.createContext({});
export var ConfirmationDialog = function (_a) {
    var open = _a.open, title = _a.title, message = _a.message, onConfirm = _a.onConfirm, confirmText = _a.confirmText, onDismiss = _a.onDismiss;
    //
    return open ? (React.createElement("div", { className: "fixed z-50 flex justify-center items-center top-0 bottom-0 left-0 right-0 scrollbar-hide" },
        React.createElement("div", { className: "z-50 px-4 w-96 shadow-2xl py-10 flex flex-col justify-around items-center bg-white rounded-xl" },
            React.createElement("div", null,
                React.createElement("p", null,
                    React.createElement("strong", null, title))),
            React.createElement("div", { className: "py-10" },
                React.createElement("p", null, message)),
            React.createElement("div", { className: "flex w-full px-10" },
                React.createElement(Button, { title: confirmText || "Ok", onClick: onConfirm, color: "red", extraClassName: "mr-4 w-full" }),
                React.createElement(Button, { title: "Cancel", onClick: onDismiss, color: "green", extraClassName: "ml-4 w-full" }))),
        React.createElement("div", { className: "fixed z-40 flex top-0 left-0 right-0 bottom-0 backdrop-blur-sm flex-1 bg-gray-300 bg-opacity-60", onClick: onDismiss }, "\u00A0"))) : null;
};
export var ConfirmationDialogProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), dialogOpen = _b[0], setDialogOpen = _b[1];
    var _c = React.useState({}), dialogConfig = _c[0], setDialogConfig = _c[1];
    var openDialog = function (_a) {
        var title = _a.title, message = _a.message, actionCallback = _a.actionCallback, confirmText = _a.confirmText;
        setDialogOpen(true);
        setDialogConfig({ title: title, message: message, actionCallback: actionCallback, confirmText: confirmText });
        document.body.classList.add("stop-scrolling");
    };
    var resetDialog = function () {
        setDialogOpen(false);
        setDialogConfig({});
        document.body.classList.remove("stop-scrolling");
    };
    var onConfirm = function () {
        var _a;
        resetDialog();
        (_a = dialogConfig.actionCallback) === null || _a === void 0 ? void 0 : _a.call(dialogConfig, true);
    };
    var onDismiss = function () {
        var _a;
        resetDialog();
        (_a = dialogConfig.actionCallback) === null || _a === void 0 ? void 0 : _a.call(dialogConfig, false);
    };
    return (React.createElement(ConfirmationDialogContext.Provider, { value: { openDialog: openDialog } },
        children,
        React.createElement(ConfirmationDialog, { open: dialogOpen, title: dialogConfig.title, message: dialogConfig.message, onConfirm: onConfirm, onDismiss: onDismiss, confirmText: dialogConfig.confirmText })));
};
export var useConfirmationDialog = function () {
    var openDialog = React.useContext(ConfirmationDialogContext).openDialog;
    var getConfirmation = function (options) {
        return new Promise(function (res) {
            openDialog === null || openDialog === void 0 ? void 0 : openDialog(__assign({ actionCallback: res }, options));
        });
    };
    return { getConfirmation: getConfirmation };
};
//# sourceMappingURL=ConfirmationDialog.js.map