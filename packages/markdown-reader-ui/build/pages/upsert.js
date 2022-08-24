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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var react_with_native_router_1 = require("react-with-native-router");
var js_util_1 = require("js-util");
var api_1 = require("../api");
var common_types_1 = require("common-types");
var convert_case_1 = require("convert-case");
var IndexInstanceContainer_1 = require("../components/IndexInstanceContainer");
var SimplifiedSchemaFormDebug_1 = require("../components/SimplifiedSchemaFormDebug");
var store_1 = __importDefault(require("../store"));
var useGetDbModelQuery_1 = require("../hooks/useGetDbModelQuery");
var BigButton_1 = require("../components/BigButton");
var useUrl_1 = require("../hooks/useUrl");
var schema_util_1 = require("schema-util");
var react_with_native_alert_1 = require("react-with-native-alert");
/**
TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`
*/
var UpsertForm = function (_a) {
    var _b;
    var instance = _a.instance, simplifiedSchema = _a.simplifiedSchema, isDebug = _a.isDebug;
    var authToken = (0, store_1.default)("authToken")[0];
    var modelQuery = (0, useUrl_1.useUrl)("model")[0];
    var router = (0, react_with_native_router_1.useRouter)();
    var alert = (0, react_with_native_alert_1.useAlert)();
    var id = (0, react_1.useState)((0, common_types_1.generateId)())[0];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(instance), body = _d[0], setBody = _d[1];
    var _e = (0, react_1.useState)(), result = _e[0], setResult = _e[1];
    var _f = (0, react_1.useState)({}), referencedModelData = _f[0], setReferencedModelData = _f[1];
    var _g = (0, react_1.useState)(false), referencedModelDataIsLoading = _g[0], setReferencedModelDataIsLoading = _g[1];
    var model = (0, useGetDbModelQuery_1.useGetDbModelQuery)(modelQuery);
    var referencableModelNames = (_b = (0, schema_util_1.getReferencableModels)(simplifiedSchema)) === null || _b === void 0 ? void 0 : _b.map(function (x) { return x.interfaceName; });
    (0, react_1.useEffect)(function () {
        if (referencableModelNames === null || referencableModelNames === void 0 ? void 0 : referencableModelNames.length) {
            setReferencedModelDataIsLoading(true);
            //api(endpoint, "POST", { authToken, parameters: [modelName] })
            var newReferencedModelDataPromises = referencableModelNames.map(function (modelName) { return __awaiter(void 0, void 0, void 0, function () {
                var config, apiResult;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            config = { limit: 100 };
                            return [4 /*yield*/, (0, api_1.api)("function/get-db-model", "POST", { authToken: authToken, arguments: { interfaceName: modelName, config: config } })];
                        case 1:
                            apiResult = _b.sent();
                            return [2 /*return*/, (_a = {},
                                    _a[modelName] = apiResult.data,
                                    _a)];
                    }
                });
            }); });
            Promise.all(newReferencedModelDataPromises).then(function (result) {
                var merged = (0, js_util_1.mergeObjectsArray)(result);
                setReferencedModelDataIsLoading(false);
                setReferencedModelData(merged);
            });
        }
    }, [referencableModelNames === null || referencableModelNames === void 0 ? void 0 : referencableModelNames.length]);
    var parameters = [{ name: "", required: true, simplifiedSchema: simplifiedSchema }];
    var values = [body];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SimplifiedSchemaForm, { id: id, isDbModel: true, parameters: parameters, values: values, onChange: function (values) { return setBody(values[0]); }, referencedModelData: referencedModelData, referencedModelDataIsLoading: referencedModelDataIsLoading, isDebug: isDebug }), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-around" }, { children: [(0, jsx_runtime_1.jsx)(BigButton_1.BigButton, { isLoading: loading, onClick: function () {
                            if (!modelQuery)
                                return;
                            setLoading(true);
                            (0, api_1.api)("function/upsert-db-model", "POST", {
                                arguments: {
                                    interfaceName: modelQuery,
                                    data: { item: body, isPartial: false },
                                },
                                authToken: authToken,
                            })
                                .then(function (result) {
                                var typedResult = result;
                                if (!typedResult.success) {
                                    alert === null || alert === void 0 ? void 0 : alert("Error", typedResult.response);
                                    setLoading(false);
                                }
                                else {
                                    // If the upsert fails for some reason, this should be made clear
                                    model.refetch().then(function () {
                                        setLoading(false);
                                        router.back();
                                    });
                                }
                            })
                                .catch(function (e) {
                                setLoading(false);
                                setResult(e);
                            });
                        }, title: "Submit" }), (0, jsx_runtime_1.jsx)(BigButton_1.BigButton, { stylePreset: "cancel", onClick: function () {
                            router.back();
                        }, title: "Cancel" })] })), result ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: JSON.stringify(result) }) : null, isDebug ? ((0, jsx_runtime_1.jsx)(SimplifiedSchemaFormDebug_1.SimplifiedSchemaFormDebug, { parameters: parameters, values: values })) : null] }));
};
var Page = function () {
    var _a, _b, _c, _d, _e, _f, _g;
    var router = (0, react_with_native_router_1.useRouter)();
    var modelQuery = (0, useUrl_1.useUrl)("model")[0];
    var query = (0, js_util_1.mapValuesSync)(router.query, function (value) { return (0, js_util_1.takeFirst)(value); });
    var _h = (0, react_1.useState)(false), debug = _h[0], setDebug = _h[1];
    var model = (0, useGetDbModelQuery_1.useGetDbModelQuery)(modelQuery);
    var instance = (_b = (_a = model === null || model === void 0 ? void 0 : model.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.find(function (x) { return x.id === query.id; });
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ scroll: true, className: "py-4 px-8 lg:px-20" }, { children: (0, jsx_runtime_1.jsx)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ buttons: [
                {
                    onClick: function () {
                        setDebug(!debug);
                    },
                    title: "Debug",
                    emoji: "🧐",
                },
            ], title: (0, convert_case_1.humanCase)(query.model || "") }, { children: ((_e = (_d = (_c = model === null || model === void 0 ? void 0 : model.data) === null || _c === void 0 ? void 0 : _c.index) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.simplifiedSchema) && ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(UpsertForm, { simplifiedSchema: (_g = (_f = model.data) === null || _f === void 0 ? void 0 : _f.index.type) === null || _g === void 0 ? void 0 : _g.simplifiedSchema, instance: instance, isDebug: debug }) })) })) })));
};
Page.options = {};
exports.default = Page;
//# sourceMappingURL=upsert.js.map