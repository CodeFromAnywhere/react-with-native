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
exports.useCustomUrlStore = void 0;
var js_util_1 = require("js-util");
var react_with_native_router_1 = require("react-with-native-router");
var string_to_json_1 = require("string-to-json");
var rest_util_1 = require("rest-util");
/**
 * ---
 * isStory: true
 * ---

Hook to store simple data in the URL

I spent the last 4 hours on this: I think it's pretty useful. It's a hook that makes it possible to use your URL as a state store. It works with arrays and single values of strings, booleans and numbers. It's a drop in replacement of useStore or useState. The advantage is that the user can share the URL which will also share their state. Usage in a component looks like this:

```ts
const [name, setName] = useUrl("name");
```

I was looking for ways to make the api more straightforward, especially the stuff in useUrl seems a bit messy. However, I couldn't find any way to make it better. Any tips are welcome!

TODO: make it work in react-native as well, either via a wrapper around useStore or via using the react-navigation param-store

## Example usage

```ts
import {useCustomUrlStore}from "use-url-store";

export const useUrl = <T extends keyof typeof queryStore>(queryKey: T) => {

   const queryStore = {
    "type-index-type": useCustomUrlStore<string | undefined>("type-index-type", {
      type: "string",
    }),

    "has-comment-types": useCustomUrlStore<string[]>("has-comment-types", {
      type: "string",
      isArray: true,
    }),
    "interface-is-db-model": useCustomUrlStore<boolean>("interface-is-db-model", {
      type: "boolean",
    }),
    path: useCustomUrlStore<string | undefined>("path", { type: "string" }),
    name: useCustomUrlStore<string | undefined>("name", { type: "string" }),
    type: useCustomUrlStore<string | undefined>("type", { type: "string" }),
  };

  return queryStore[queryKey];
};
```

 */
var useCustomUrlStore = function (queryKey, config) {
    var router = (0, react_with_native_router_1.useRouter)();
    var queryValue = (0, js_util_1.makeArray)(router.query[queryKey]);
    var parsed = queryValue.map(function (v) { return (0, string_to_json_1.parsePrimitiveJson)(v, config.type); });
    var defaultValue = config.type === "boolean"
        ? false
        : config.type === "number"
            ? 0
            : config.type === "string"
                ? ""
                : undefined;
    var value = (queryValue.length === 0
        ? config.isArray
            ? []
            : undefined
        : config.isArray
            ? parsed
            : parsed[0]
                ? parsed[0]
                : config.allowUndefined
                    ? undefined
                    : defaultValue);
    var setter = function (newValue) { return __awaiter(void 0, void 0, void 0, function () {
        var stringified, queryPart, previousQueryFiltered, keysNow, allKeys, newQueryString, pushed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    stringified = newValue === undefined
                        ? undefined
                        : Array.isArray(newValue)
                            ? newValue.map(function (v) { return String(v); })
                            : [String(newValue)];
                    queryPart = stringified === undefined ? "" : (0, rest_util_1.getQueryPart)(stringified, queryKey);
                    previousQueryFiltered = __assign({}, router.query);
                    delete previousQueryFiltered[queryKey];
                    keysNow = Object.keys(router.query);
                    allKeys = keysNow.includes(queryKey)
                        ? keysNow
                        : keysNow.concat(queryKey);
                    newQueryString = allKeys.reduce(function (queryString, key) {
                        var prefix = queryString === "" ? "?" : "&";
                        if (key === queryKey) {
                            return queryString.concat(prefix + queryPart);
                        }
                        if (router.query[key]) {
                            var queryPart_1 = (0, rest_util_1.getQueryPart)((0, js_util_1.makeArray)(router.query[key]), key);
                            return queryString.concat(prefix + queryPart_1);
                        }
                        return queryString;
                    }, "");
                    return [4 /*yield*/, router.push("".concat(router.pathname).concat(newQueryString), undefined, {
                            shallow: true,
                        })];
                case 1:
                    pushed = _a.sent();
                    return [2 /*return*/, pushed];
            }
        });
    }); };
    return [value, setter];
};
exports.useCustomUrlStore = useCustomUrlStore;
//# sourceMappingURL=use-url-store.js.map