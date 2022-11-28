"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = exports.toast = void 0;
var react_toastify_1 = require("react-toastify");
var react_toastify_2 = require("react-toastify");
/**
 * title is only shown on native
 */
var toast = function (message, options) {
    (0, react_toastify_1.toast)(message.body, options);
};
exports.toast = toast;
exports.ToastContainer = react_toastify_2.ToastContainer;
//# sourceMappingURL=Notification.js.map