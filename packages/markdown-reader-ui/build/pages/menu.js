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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var TreeMenu_1 = require("../components/Menu/TreeMenu");
var DbMenu_1 = require("../components/Menu/DbMenu");
var store_1 = __importDefault(require("../store"));
var renderLabeledButton_1 = require("../components/renderLabeledButton");
var convert_case_1 = require("convert-case");
var react_with_native_router_1 = require("react-with-native-router");
var BundleViewSelector_1 = require("../components/Menu/BundleViewSelector");
var Page = function () {
    var _a = (0, store_1.default)("menu"), menu = _a[0], setMenu = _a[1];
    var _b = (0, store_1.default)("authToken"), authToken = _b[0], setAuthToken = _b[1];
    var router = (0, react_with_native_router_1.useRouter)();
    var menusMenu = [
        { menu: "tree", icon: "🌳" },
        { menu: "database", icon: "📦" },
    ];
    /**
     * TODO: Need to get this from somewhere
     */
    var isSensibleProject = false;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "pb-4 w-full", scroll: true }, { children: [!isSensibleProject ? (0, jsx_runtime_1.jsx)(BundleViewSelector_1.BundleViewSelector, {}) : null, (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: menusMenu.map(function (item) {
                            return (0, renderLabeledButton_1.renderLabeledButton)({
                                title: (0, convert_case_1.humanCase)(item.menu),
                                onClick: function () { return setMenu(item.menu); },
                                emoji: item.icon,
                                isActive: item.menu === menu,
                            });
                        }) })), (0, renderLabeledButton_1.renderLabeledButton)(authToken.length === 0
                        ? {
                            title: "Login",
                            emoji: "🔒",
                            onClick: function () { return router.push("login"); },
                        }
                        : {
                            title: "Lougout",
                            emoji: "🚫",
                            onClick: function () {
                                setAuthToken("");
                                router.reload();
                            },
                        })] })), menu === "tree" ? (0, jsx_runtime_1.jsx)(TreeMenu_1.TreeMenu, {}) : menu === "database" ? (0, jsx_runtime_1.jsx)(DbMenu_1.DbMenu, {}) : null] })));
};
Page.options = {
    hideFromMenu: true,
};
exports.default = Page;
//# sourceMappingURL=menu.js.map