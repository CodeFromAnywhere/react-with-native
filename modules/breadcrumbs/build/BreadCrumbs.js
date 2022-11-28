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
exports.BreadCrumbs = exports.renderBreadCrumbs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var renderBreadCrumbs = function (chunks) {
    return chunks === null || chunks === void 0 ? void 0 : chunks.map(function (chunk, index) {
        var isLast = chunks.length - 1 === index;
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center text-xs" }, { children: [chunk, isLast ? null : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "px-2 text-gray-900 dark:text-gray-200" }, { children: "\u25B8" })))] }), "breadcrumb".concat(index)));
    });
};
exports.renderBreadCrumbs = renderBreadCrumbs;
/**
 * Shows where we are in the filesystem
 */
var BreadCrumbs = function (props) {
    var path = props.path;
    var chunks = (path || "").split("/");
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "border-b border-b-gray-300 mb-4 bg-[#FFFFFF] dark:bg-gray-900" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row items-center ml-2" }, { children: (0, exports.renderBreadCrumbs)(chunks) })) })));
};
exports.BreadCrumbs = BreadCrumbs;
//# sourceMappingURL=BreadCrumbs.js.map