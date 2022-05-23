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
exports.AlertProvider = exports.AlertContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
// import { AlertContext } from "./Alert";
exports.AlertContext = (0, react_1.createContext)(null);
var AlertProvider = function (_a) {
    var children = _a.children;
    var alert = react_native_1.Alert.alert;
    return ((0, jsx_runtime_1.jsx)(exports.AlertContext.Provider, __assign({ value: alert }, { children: children })));
};
exports.AlertProvider = AlertProvider;
//# sourceMappingURL=AlertProvider.native.js.map