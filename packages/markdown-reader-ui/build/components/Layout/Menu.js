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
exports.Menu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var k_types_1 = require("k-types");
var store_1 = __importDefault(require("../../store"));
var useExploreProjectQuery_1 = require("../../hooks/useExploreProjectQuery");
var js_util_1 = require("js-util");
var search_1 = require("search");
var FancyLoader_1 = require("../FancyLoader");
var typeIcons_1 = require("../../util/typeIcons");
/**
 *
 */
var getFolderExplorationElement = function (folderExploration) {
    var router = (0, react_with_native_router_1.useRouter)();
    var _a = (0, store_1.default)("openPages"), openPages = _a[0], setOpenPages = _a[1];
    var _b = (0, js_util_1.mapValuesSync)(router.query, function (value) {
        return (0, js_util_1.takeFirst)(value);
    }), type = _b.type, path = _b.path, name = _b.name;
    // TODO: this is not unique!
    var uniqueId = folderExploration.relativeProjectPath;
    var isSelected = type === folderExploration.type &&
        name === folderExploration.name &&
        path === folderExploration.relativeProjectPath;
    var keyName = "".concat(folderExploration.relativeProjectPath, "/").concat(folderExploration.name, "/").concat(folderExploration.type);
    return ((0, jsx_runtime_1.jsx)(MenuItem, { title: folderExploration.name, type: folderExploration.type, onDoubleClick: function () {
            var openPage = {
                id: (0, k_types_1.generateId)(),
                page: "explore",
                query: {
                    path: folderExploration.relativeProjectPath,
                    name: folderExploration.name,
                    type: folderExploration.type,
                },
                lastOpenedAt: Date.now(),
            };
            var hasOpenPage = !!openPages.find(function (x) {
                return x.page === "explore" &&
                    x.query.path === folderExploration.relativeProjectPath &&
                    x.query.name === folderExploration.name &&
                    x.query.type === folderExploration.type;
            });
            if (!hasOpenPage) {
                setOpenPages(openPages.concat(openPage));
            }
        }, link: "explore?type=".concat(folderExploration.type, "&path=").concat(folderExploration.relativeProjectPath, "&name=").concat(folderExploration.name), isSelected: isSelected, children: folderExploration.children, id: uniqueId, canExpand: !!folderExploration.children }, keyName));
};
var MenuItem = function (_a) {
    var link = _a.link, title = _a.title, isSelected = _a.isSelected, type = _a.type, id = _a.id, children = _a.children, onDoubleClick = _a.onDoubleClick, canExpand = _a.canExpand;
    var _b = (0, store_1.default)("expandedPaths"), expandedPaths = _b[0], setExpandedPaths = _b[1];
    var search = (0, store_1.default)("search")[0];
    var searchLoading = (0, store_1.default)("searchLoading")[0];
    var router = (0, react_with_native_router_1.useRouter)();
    var typeIcon = type ? typeIcons_1.typeIcons[type] : "";
    var childrenElements = children && Array.isArray(children)
        ? children.map(getFolderExplorationElement).filter(js_util_1.notEmpty)
        : [];
    var isExpanded = canExpand && expandedPaths.includes(id);
    var isSearchCompleted = search.length > 0 && !searchLoading;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Span, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Button, __assign({ className: "".concat(isSelected ? "bg-gray-200 " : "", "py-1 pr-2 hover:bg-gray-200  w-full flex flex-row items-center"), textClassName: "text-xs", onDoubleClick: onDoubleClick, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(isExpanded && isSelected)) return [3 /*break*/, 1];
                                if (canExpand)
                                    setExpandedPaths(expandedPaths.filter(function (x) { return x !== id; }));
                                return [3 /*break*/, 4];
                            case 1:
                                if (!(canExpand && !isExpanded)) return [3 /*break*/, 3];
                                return [4 /*yield*/, setExpandedPaths(expandedPaths.concat(id))];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3:
                                router.push(link);
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); } }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ textClassName: "text-md" }, { children: [typeIcon, "\u00A0"] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Span, __assign({ textClassName: "line-clamp-1 truncate text-ellipsis ".concat(isSelected ? "text-blue-500" : "", " hover:text-blue-800 ") }, { children: title }))] })), childrenElements.length > 0 && (isExpanded || isSearchCompleted) ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ style: { marginLeft: 10 } }, { children: childrenElements }))) : null] }));
};
/** how to filter a recursive object with children of its own type?
 *
 * 1. if the object has children,
 */
var Menu = function () {
    var _a = (0, react_1.useState)(""), searchInput = _a[0], setSearchInput = _a[1];
    var _b = (0, store_1.default)("search"), search = _b[0], setSearch = _b[1];
    var project = (0, useExploreProjectQuery_1.useExploreProjectQuery)();
    var _c = (0, react_1.useState)(false), searchLoading = _c[0], setSearchLoading = _c[1];
    var _d = (0, react_1.useState)([]), searchedFolderExploration = _d[0], setSearchedFolderExploration = _d[1];
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
    var menu = searchedFolderExploration.map(getFolderExplorationElement);
    var isLoading = project.isLoading || searchLoading;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Span, __assign({ className: "flex flex-row items-center justify-center p-2" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Form, __assign({ className: "w-full", onSubmit: function (e) {
                            e.preventDefault();
                            setSearch(searchInput);
                        } }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Input, { type: "text", placeholder: "Search...", className: "bg-gray-50 dark:bg-gray-600 w-full text-sm border outline-none border-gray-50 dark:border-gray-700 focus:border-blue-300 rounded-xs", value: searchInput, onChange: function (event) { return setSearchInput(event.target.value); }, native: {
                                onChangeText: function (text) { return setSearchInput(text); },
                                onSubmitEditing: function () { return setSearch(searchInput); },
                            } }) })), isLoading ? (0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, {}) : null] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Ul, __assign({ className: "w-full" }, { children: menu }))] }));
};
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map