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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreProvider = exports.useStore = void 0;
var nested_menu_1 = require("nested-menu");
var react_with_native_store_1 = require("react-with-native-store");
exports.useStore = (_a = (0, react_with_native_store_1.createStore)(__assign({}, nested_menu_1.nestedMenuStoreInitialValues)), _a.useStore), exports.StoreProvider = _a.StoreProvider;
//# sourceMappingURL=store.js.map