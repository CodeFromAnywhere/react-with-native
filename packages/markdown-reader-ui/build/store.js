"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.StoreProvider = exports.initialValues = void 0;
var react_with_native_store_1 = require("react-with-native-store");
exports.initialValues = {
    search: "",
    selectedBundleId: null,
    authToken: "",
    menu: "tree",
    expandedPaths: [],
    searchLoading: false,
    showMenu: true,
    showTerminal: true,
    focusWindow: "content",
    openPages: [],
    selectionHistory: [],
};
exports.StoreProvider = (0, react_with_native_store_1.createStoreProvider)({
    initialValues: exports.initialValues,
    baseKey: "test3",
});
exports.useStore = (0, react_with_native_store_1.createUseStore)(exports.initialValues);
exports.default = exports.useStore;
//# sourceMappingURL=store.js.map