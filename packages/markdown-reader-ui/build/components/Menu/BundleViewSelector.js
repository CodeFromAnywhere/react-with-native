"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleViewSelector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var react_with_native_select_1 = require("react-with-native-select");
var useGetDbModelQuery_1 = require("../../hooks/useGetDbModelQuery");
var store_1 = __importDefault(require("../../store"));
var BundleViewSelector = function () {
    var _a, _b;
    // @ts-ignore
    var bundleConfigs = (0, useGetDbModelQuery_1.useGetDbModelQuery)("BundleConfig");
    var _c = (0, store_1.default)("selectedBundleId"), selectedBundleId = _c[0], setSelectedBundleId = _c[1];
    var bundleSelectors = ((_b = (_a = bundleConfigs.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.map(
    // @ts-ignore
    function (bundleConfig, index) {
        return {
            label: bundleConfig.name,
            value: bundleConfig.id,
        };
    })) || [];
    var defaultOption = { label: "View all", value: null };
    var value = (selectedBundleId &&
        bundleSelectors.find(function (x) { return x.value === selectedBundleId; })) ||
        defaultOption;
    var allOptions = __spreadArray([defaultOption], bundleSelectors, true);
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(react_with_native_select_1.Select, { options: allOptions, title: "hmm", selectFirstOption: true, value: value, onChange: function (value) {
                var v = value === null ? null : value === null || value === void 0 ? void 0 : value.value;
                if (v !== undefined) {
                    setSelectedBundleId(v);
                }
            } }) }));
};
exports.BundleViewSelector = BundleViewSelector;
//# sourceMappingURL=BundleViewSelector.js.map