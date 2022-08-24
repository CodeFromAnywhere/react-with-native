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
exports.TreeMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var store_1 = __importDefault(require("../../store"));
var useExploreProjectQuery_1 = require("../../hooks/useExploreProjectQuery");
var js_util_1 = require("js-util");
var search_1 = require("search");
var FancyLoader_1 = require("../FancyLoader");
var useUrl_1 = require("../../hooks/useUrl");
var getFolderExplorationElement_1 = require("./getFolderExplorationElement");
/** how to filter a recursive object with children of its own type?
 *
 * 1. if the object has children,
 */
var TreeMenu = function () {
    var _a = (0, react_1.useState)(""), searchInput = _a[0], setSearchInput = _a[1];
    var _b = (0, store_1.default)("search"), search = _b[0], setSearch = _b[1];
    var project = (0, useExploreProjectQuery_1.useExploreProjectQuery)();
    var _c = (0, react_1.useState)(false), searchLoading = _c[0], setSearchLoading = _c[1];
    var _d = (0, react_1.useState)([]), searchedFolderExploration = _d[0], setSearchedFolderExploration = _d[1];
    var path = (0, useUrl_1.useUrl)("path")[0];
    var _e = (0, store_1.default)("expandedPaths"), expandedPaths = _e[0], setExpandedPaths = _e[1];
    /**
     * always if the querypath is different, make sure that the path specified in the query is also expanded
     *
     * NB: functions, interfaces, variables can't be expanded. And it's fine because their relativepath is the same as the file they're defined in
     */
    (0, react_1.useEffect)(function () {
        if (!path)
            return;
        var queryExpandedPaths = path
            // remove initial slash
            .split("/")
            .map(function (_, index, pieces) {
            var pieceUntilHere = pieces.slice(0, index + 1).join("/");
            return pieceUntilHere;
        })
            .slice(1);
        setExpandedPaths(__spreadArray(__spreadArray([], expandedPaths, true), queryExpandedPaths, true).filter(js_util_1.onlyUnique));
    }, [path]);
    (0, react_1.useEffect)(function () {
        if (project.isLoading) {
            setSearchedFolderExploration([]);
        }
        var dataArray = project.data && Array.isArray(project.data)
            ? __spreadArray([], project.data.slice(0), true) : [];
        if (search.length === 0) {
            setSearchedFolderExploration(project.data && Array.isArray(project.data)
                ? __spreadArray([], project.data.slice(0), true) : []);
        }
        setSearchLoading(true);
        var searched = (0, search_1.searchRecursiveObjectArray)(dataArray, function (item) {
            return item.relativeProjectPath.includes(search);
        });
        setSearchedFolderExploration(searched);
        setSearchLoading(false);
    }, [project.dataUpdatedAt, search, project.isLoading]);
    var menu = searchedFolderExploration.map(getFolderExplorationElement_1.getFolderExplorationElement);
    var isLoading = project.isLoading || searchLoading;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ className: "flex flex-row items-center justify-center p-2" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Form, __assign({ className: "w-full", onSubmit: function (e) {
                            e.preventDefault();
                            setSearch(searchInput);
                        } }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { type: "text", placeholder: "Search...", className: "bg-gray-50 dark:bg-gray-600 w-full text-sm border outline-none border-gray-50 dark:border-gray-700 focus:border-blue-300 rounded-xs", value: searchInput, onChange: function (event) { return setSearchInput(event.target.value); }, native: {
                                onChangeText: function (text) { return setSearchInput(text); },
                                onSubmitEditing: function () { return setSearch(searchInput); },
                            } }) })), isLoading ? (0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, {}) : null] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Ul, __assign({ className: "w-full" }, { children: menu }))] }));
};
exports.TreeMenu = TreeMenu;
//# sourceMappingURL=TreeMenu.js.map