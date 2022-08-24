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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var store_1 = __importDefault(require("../store"));
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var BigButton_1 = require("../components/BigButton");
var api_1 = require("../api");
var react_with_native_router_1 = require("react-with-native-router");
var react_with_native_alert_1 = require("react-with-native-alert");
var useGetDbModelQuery_1 = require("../hooks/useGetDbModelQuery");
var Page = function () {
    var _a, _b;
    var _c = (0, react_1.useState)(["", ""]), values = _c[0], setValues = _c[1];
    var _d = (0, store_1.default)("authToken"), authToken = _d[0], setAuthToken = _d[1];
    var router = (0, react_with_native_router_1.useRouter)();
    var alert = (0, react_with_native_alert_1.useAlert)();
    var _e = (0, react_1.useState)(false), loading = _e[0], setLoading = _e[1];
    // @ts-ignore
    var bundleConfigs = (0, useGetDbModelQuery_1.useGetDbModelQuery)("BundleConfig");
    var selectedBundleId = (0, store_1.default)("selectedBundleId")[0];
    var currentBundleConfig = (_b = (_a = bundleConfigs.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.find(function (x) { return x.id === selectedBundleId; });
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "pb-4 px-4 w-full", scroll: true }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: [(currentBundleConfig === null || currentBundleConfig === void 0 ? void 0 : currentBundleConfig.name) || "Admin", " Login"] })), (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SimplifiedSchemaForm, { id: "login", values: values, onChange: function (values) { return setValues(values); }, parameters: [
                    {
                        name: "email",
                        required: true,
                        simplifiedSchema: { type: "string" },
                    },
                    {
                        name: "password",
                        required: true,
                        simplifiedSchema: { type: "string" },
                    },
                ], title: "Login", referencedModelData: {} }), (0, jsx_runtime_1.jsx)(BigButton_1.BigButton, { isLoading: loading, onClick: function () {
                    setLoading(true);
                    var newAuthToken = values[1];
                    (0, api_1.api)("function/explore-project", "POST", {
                        authToken: newAuthToken,
                    }).then(function (result) {
                        if (!result.unauthorized) {
                            setAuthToken(newAuthToken);
                            router.push("/");
                        }
                        else {
                            setValues(["", ""]);
                            alert === null || alert === void 0 ? void 0 : alert("Credentials Incorrect", "These credentials do not seem to be correct, please try again");
                        }
                    });
                }, title: "Login" })] })));
};
Page.options = {
    hideFromMenu: true,
};
exports.default = Page;
//# sourceMappingURL=login.js.map