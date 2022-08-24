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
exports.SearchForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var store_1 = __importDefault(require("../../store"));
var FancyLoader_1 = require("../FancyLoader");
var SearchForm = function (_a) {
    var isLoading = _a.isLoading;
    var _b = (0, store_1.default)("search"), search = _b[0], setSearch = _b[1];
    var _c = (0, react_1.useState)(""), searchInput = _c[0], setSearchInput = _c[1];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ className: "flex flex-row items-center justify-center p-2" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Form, __assign({ className: "w-full", onSubmit: function (e) {
                    e.preventDefault();
                    setSearch(searchInput);
                } }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { type: "text", placeholder: "Search...", className: "bg-gray-50 dark:bg-gray-600 w-full text-sm border outline-none border-gray-50 dark:border-gray-700 focus:border-blue-300 rounded-xs", value: searchInput, onChange: function (event) { return setSearchInput(event.target.value); }, native: {
                        onChangeText: function (text) { return setSearchInput(text); },
                        onSubmitEditing: function () { return setSearch(searchInput); },
                    } }) })), isLoading ? (0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, {}) : null] })));
};
exports.SearchForm = SearchForm;
//# sourceMappingURL=SearchForm.js.map