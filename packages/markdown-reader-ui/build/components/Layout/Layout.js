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
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var pages_1 = require("../../pages");
// import { ToastContainer } from "react-with-native-notification";
var react_with_native_alert_1 = require("react-with-native-alert");
var BreadCrumbs_1 = require("./BreadCrumbs");
var useHotKey_1 = require("../../hooks/useHotKey");
var OpenPages_1 = require("./OpenPages");
var store_1 = require("../../store");
var sendEventToWindow = function (code, window) {
    console.log("Sending ".concat(code, " to ").concat(window, " (to be implemented)"));
};
var Terminal = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "col-span-1 bg-gray-50 dark:bg-gray-900", textClassName: "dark:text-gray-50" }, { children: children })));
};
var Layout = function (_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var _b = (0, store_1.useStore)("focusWindow"), focusWindow = _b[0], setFocusWindow = _b[1];
    var _c = (0, store_1.useStore)("showMenu"), showMenu = _c[0], setShowMenu = _c[1];
    var _d = (0, store_1.useStore)("showTerminal"), showTerminal = _d[0], setShowTerminal = _d[1];
    var alert = (0, react_with_native_alert_1.useAlert)();
    // LAYOUT HOTKEYS
    (0, useHotKey_1.useHotKey)([showMenu, showTerminal, focusWindow], function (keyboardEvent) {
        var altKey = keyboardEvent.altKey, metaKey = keyboardEvent.metaKey, shiftKey = keyboardEvent.shiftKey, ctrlKey = keyboardEvent.ctrlKey, key = keyboardEvent.key, code = keyboardEvent.code;
        // console.log({ ctrlKey, altKey, metaKey, code, key });
        // `up/down` should go up/down in the active terminal (with a ctrl,shift,alt,meta you can change the active terminal or just use the contenteditable)
        if (code === "ArrowUp" || code === "ArrowDown") {
            var newFocusWindow = metaKey
                ? "cli-terminal"
                : altKey
                    ? "cursor-hover-terminal"
                    : shiftKey
                        ? "selection-terminal"
                        : null;
            if (newFocusWindow) {
                setFocusWindow(newFocusWindow);
            }
            sendEventToWindow(code, newFocusWindow || focusWindow);
        }
        // Toggle Menu
        if (altKey && code === "KeyB") {
            setShowMenu(!showMenu);
        }
        // Ctrl + ` : toggle terminal
        if (ctrlKey && code === "Backquote") {
            setShowTerminal(!showTerminal);
        }
        // split view toggle
        if (altKey && key === "Backslash") {
            alert === null || alert === void 0 ? void 0 : alert("Spit view toggle (to be implemented)");
        }
        // files search
        if (altKey && code === "KeyP") {
            setShowMenu(true);
        }
        // global search
        if ((altKey && code === "Space") ||
            (altKey && code === "KeyF" && shiftKey)) {
            setShowMenu(true);
        }
        // search on the page
        if (altKey && code === "KeyF" && !shiftKey) {
            alert === null || alert === void 0 ? void 0 : alert("search on the page");
        }
    });
    // EDITOR HOTKEYS
    (0, useHotKey_1.useHotKey)([], function (_a) {
        var code = _a.code, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey, shiftKey = _a.shiftKey, key = _a.key;
        if (code === "Escape") {
            // go out of intellisense
            alert === null || alert === void 0 ? void 0 : alert("ESCAPE");
        }
        if (ctrlKey && code === "Space") {
            // intellisense on
            alert === null || alert === void 0 ? void 0 : alert("intellisense on");
        }
        if (altKey && code === "KeyZ") {
            if (shiftKey) {
                alert === null || alert === void 0 ? void 0 : alert("redo");
            }
            else {
                alert === null || alert === void 0 ? void 0 : alert("undo");
            }
        }
        if (focusWindow === "content") {
            if (metaKey && key === "b") {
                alert === null || alert === void 0 ? void 0 : alert("bold");
            }
            if (metaKey && key === "i") {
                alert === null || alert === void 0 ? void 0 : alert("italic");
            }
        }
    });
    var terminals = ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full gap-x-0.5 h-40 bg-gray-200 dark:bg-gray-600 row-span-1 grid grid-cols-4 border-t-2 dark:border-gray-600 border-gray-200 " }, { children: [(0, jsx_runtime_1.jsx)(Terminal, { children: "selection: ..." }), (0, jsx_runtime_1.jsx)(Terminal, { children: "cursor/hover: ..." }), (0, jsx_runtime_1.jsx)(Terminal, { children: "cli: ..." }), (0, jsx_runtime_1.jsx)(Terminal, { children: "speech, eyes: ..." })] })) }));
    var menu = ((0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ className: "border-l col-span-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400" }, { children: (0, jsx_runtime_1.jsx)(pages_1.pagesObject.menu, {}) })));
    var mainPage = ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "".concat(showMenu ? "col-span-4" : "col-span-5", " overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white"), textClassName: "dark:text-white" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "sticky top-0" }, { children: [(0, jsx_runtime_1.jsx)(OpenPages_1.OpenPages, {}), (0, jsx_runtime_1.jsx)(BreadCrumbs_1.BreadCrumbs, {})] })), (0, jsx_runtime_1.jsx)(Component, __assign({}, pageProps))] })));
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "h-screen grid grid-rows-6" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "row-span-6 grid grid-cols-5" }, { children: [mainPage, showMenu ? menu : null] })), showTerminal ? terminals : null] })));
};
exports.Layout = Layout;
//# sourceMappingURL=Layout.js.map