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
import { nestedMenuStoreInitialValues } from "nested-menu";
import { createStore } from "react-with-native-store";
export var useStore = (_a = createStore(__assign({}, nestedMenuStoreInitialValues)), _a.useStore), StoreProvider = _a.StoreProvider;
