"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = exports.api = exports.apiWithConfig = exports.untypedApiFunction = exports.AUTH_TOKEN_STORAGE_KEY = void 0;
var convert_case_1 = require("convert-case");
var react_query_1 = require("react-query");
var server_api_url_1 = require("server-api-url");
var react_with_native_store_1 = require("react-with-native-store");
var js_util_1 = require("js-util");
var sdk_api_keys_1 = require("sdk-api-keys");
/**
 *
 */
exports.AUTH_TOKEN_STORAGE_KEY = "api.authToken";
/**
 * Used for calling the actual api for a function with some config
 *
 * NB: this is not a typed function as we are just overwriting it so we don't need any inference on this
 */
var untypedApiFunction = function (fnName, config) {
    var parameters = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        parameters[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var storageAuthToken, authToken, realApiUrl, fullUrl, abortController_1, id, response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, react_with_native_store_1.getItem)(exports.AUTH_TOKEN_STORAGE_KEY)];
                case 1:
                    storageAuthToken = _a.sent();
                    authToken = config.authToken || storageAuthToken;
                    realApiUrl = config.apiUrl || server_api_url_1.apiUrl;
                    fullUrl = "".concat(realApiUrl, "/function/").concat(fnName);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    abortController_1 = new AbortController();
                    id = setTimeout(function () { return abortController_1.abort(); }, config.timeout || 10000);
                    return [4 /*yield*/, fetch(fullUrl, {
                            method: "POST",
                            signal: config.timeout ? abortController_1.signal : undefined,
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ config: { authToken: authToken }, parameters: parameters }),
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (response) {
                            return response;
                        })
                            .catch(function (error) {
                            if (!config.timeout) {
                                console.warn(error);
                            }
                            return {
                                isSuccessful: false,
                                isNotConnected: true,
                                message: "The API didn't resolve: " + error, //error + error.status +
                            };
                        })];
                case 3:
                    response = _a.sent();
                    clearTimeout(id);
                    return [2 /*return*/, response];
                case 4:
                    e_1 = _a.sent();
                    return [2 /*return*/, {
                            isSuccessful: false,
                            isNotConnected: true,
                            message: "The API didn't resolve: " + e_1,
                        }];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.untypedApiFunction = untypedApiFunction;
/**
 * This object contains a api function for every function in the backend
 *
 * The difference from `api` is that it allows you to also insert custom api configurations
 */
exports.apiWithConfig = (0, js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map(function (fnName) {
    var _a;
    var apiWithConfigFunction = function (config) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return exports.untypedApiFunction.apply(void 0, __spreadArray([fnName, config], parameters, false));
    };
    var objectPart = (_a = {}, _a[fnName] = apiWithConfigFunction, _a);
    return objectPart;
}));
/**
 * This object contains an api function for every function in the backend
 *
 *
 * NB: only use this if you can access localStorage of the browser or the app. This means this won't work in node or in getStaticProps functions or so
 */
exports.api = (0, js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys.map(function (fnName) {
    var _a;
    var config = { apiUrl: server_api_url_1.apiUrl };
    var apiWithConfigFunction = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        return exports.untypedApiFunction.apply(void 0, __spreadArray([fnName, config], parameters, false));
    };
    var objectPart = (_a = {}, _a[fnName] = apiWithConfigFunction, _a);
    return objectPart;
}));
/**

This object contains a react-query `useQuery` hook for every api function

 */
exports.queries = (0, js_util_1.mergeObjectsArray)(sdk_api_keys_1.functionApiKeys
    .map(function (fnName) { return fnName; })
    .map(function (fnName) {
    var _a;
    var apiFn = exports.api[fnName];
    var useQueryFunction = function () {
        var parameters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameters[_i] = arguments[_i];
        }
        var queryResult = (0, react_query_1.useQuery)(__spreadArray([fnName], parameters, true), 
        // @ts-ignore
        function () { return apiFn.apply(void 0, parameters); }, { enabled: true, refetchOnWindowFocus: "always" });
        return queryResult;
    };
    var hookName = (0, convert_case_1.camelCase)("use-".concat(fnName));
    var objectPart = (_a = {}, _a[hookName] = useQueryFunction, _a);
    return objectPart;
}));
//# sourceMappingURL=api.js.map