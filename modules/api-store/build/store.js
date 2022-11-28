"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.StoreProvider = exports.apiStoreInitialValues = void 0;
var react_with_native_store_1 = require("react-with-native-store");
exports.apiStoreInitialValues = { "api.authToken": "" };
/**
 * This is only needed if api storage is ALL you need.
 */
exports.StoreProvider = (_a = (0, react_with_native_store_1.createStore)(exports.apiStoreInitialValues), _a.StoreProvider), exports.useStore = _a.useStore;
//# sourceMappingURL=store.js.map