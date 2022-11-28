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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = exports.createUseStore = exports.createStoreProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
var storage_1 = require("./storage");
//local variables
var debug = false;
var contexts = {};
var getKey = function (key, baseKey) {
    return baseKey ? "".concat(baseKey, ".").concat(key) : key;
};
var contextKey = function (key) { return "".concat(key, "Context"); };
var StoreContextProvider = function (_a) {
    var DynamicContext = _a.DynamicContext, children = _a.children, config = _a.config, storeKey = _a.storeKey;
    var _b = (0, react_1.useState)(false), hydrated = _b[0], setHydrated = _b[1];
    var _c = (0, react_1.useState)(config === null || config === void 0 ? void 0 : config.initialValues[storeKey]), store = _c[0], setStore = _c[1]; //null or some object or string or whatever
    var baseKey = config === null || config === void 0 ? void 0 : config.baseKey;
    // On mount, get the current value from storage
    (0, react_1.useEffect)(function () {
        var fullKey = getKey(storeKey, baseKey);
        (0, storage_1.getItem)(fullKey).then(function (value) {
            if (debug) {
                console.log("Hydrated store for ".concat(fullKey, ":"), value);
            }
            setStore(value);
            setHydrated(true);
        });
    }, []);
    var initialValues = config === null || config === void 0 ? void 0 : config.initialValues;
    var useStoreHook = function (key) {
        var fullKey = getKey(key, baseKey);
        var defaultValue = initialValues[key];
        // @ts-ignore
        var value = store !== undefined
            ? store
            : defaultValue !== undefined
                ? defaultValue
                : null;
        var dispatch = function (value) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //should do a deep equal here, and only set the store and item if the value actually has changed
                        //@ts-ignore
                        setStore(value);
                        return [4 /*yield*/, (0, storage_1.setItem)(fullKey, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        return [value, dispatch, { hydrated: hydrated }];
    };
    return ((0, jsx_runtime_1.jsx)(DynamicContext.Provider, __assign({ value: useStoreHook }, { children: children })));
};
/**
 * Function to create the StoreProvider
 *
 * NB: this function uses a local variable on the main scope of javascript in order to create the Context components dynamically. Beware!
 */
var createStoreProvider = function (config) {
    if (config.debug) {
        debug = config.debug;
    }
    if (debug) {
        console.log("Create StoreProvider");
    }
    var keys = Object.keys(config.initialValues);
    var newContext = keys.reduce(function (acc, key) {
        var _a;
        var Context = React.createContext(null);
        return __assign(__assign({}, acc), (_a = {}, _a[contextKey(key)] = Context, _a));
    }, {});
    contexts = __assign(__assign({}, contexts), newContext);
    // console.log({ keys, contexts });
    var MainProvider = function (_a) {
        var children = _a.children;
        return keys.reduce(function (acc, key) {
            var context = contexts[contextKey(key)];
            // console.log({ context });
            return ((0, jsx_runtime_1.jsx)(StoreContextProvider, __assign({ config: config, storeKey: key, DynamicContext: context }, { children: acc })));
        }, children);
    };
    return function (_a) {
        var children = _a.children;
        return (0, jsx_runtime_1.jsx)(MainProvider, { children: children });
    };
};
exports.createStoreProvider = createStoreProvider;
var getContext = function (key) { return contexts[contextKey(key)]; };
/**
 * Function to create a hook for accessing the store
 */
var createUseStore = function (initialValues) {
    if (debug) {
        console.log("Create useStore");
    }
    var useStore = function (key) {
        if (!Object.keys(initialValues).includes(key)) {
            throw new Error("Using undefined key in useStore: ".concat(key));
        }
        var context = getContext(key);
        if (!context) {
            throw new Error("Failed loading the context with key: ".concat(key, ". Did you wrap your component/app with a StoreProvider?"));
        }
        var useStoreHook = React.useContext(context);
        var useStoreHookType = typeof useStoreHook;
        if (useStoreHookType !== "function") {
            console.error("useStoreHookType for ".concat(key, " is ").concat(useStoreHookType, "... wtf?"));
        }
        return useStoreHook === null || useStoreHook === void 0 ? void 0 : useStoreHook(key);
    };
    return useStore;
};
exports.createUseStore = createUseStore;
/**

One function is all you need to make a new store!

Example:


```ts

import { createStore } from "react-with-native-store";
import { TypeA, TypeB } from "your-types";

export const writerInitialValues: {
  itemA: TypeA;
  itemB: TypeB;
} = {
  itemA: "",
  itemB: {},
};
export const { useStore, StoreProvider } = createStore(writerInitialValues);


```

Simple as pie 🍰

 */
var createStore = function (initialValues) { return ({
    StoreProvider: (0, exports.createStoreProvider)({ initialValues: initialValues }),
    useStore: (0, exports.createUseStore)(initialValues),
}); };
exports.createStore = createStore;
//# sourceMappingURL=general.js.map