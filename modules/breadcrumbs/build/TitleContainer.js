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
exports.TitleContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var labeled_button_1 = require("labeled-button");
var react_with_native_1 = require("react-with-native");
/** container for any index instance that needs to be rendered in the explore page */
var TitleContainer = function (_a) {
    var title = _a.title, children = _a.children, buttons = _a.buttons;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "p-2 m-2 border rounded-xl border-gray-500" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: title })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row gap-3" }, { children: buttons.map(labeled_button_1.LabeledButton) }))] })), children] })));
};
exports.TitleContainer = TitleContainer;
//# sourceMappingURL=TitleContainer.js.map