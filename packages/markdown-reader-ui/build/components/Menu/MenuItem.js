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
exports.MenuItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var store_1 = __importDefault(require("../../store"));
var typeIcons_1 = require("../../util/typeIcons");
var js_util_1 = require("js-util");
var getFolderExplorationElement_1 = require("./getFolderExplorationElement");
var MenuItem = function (_a) {
    var link = _a.link, title = _a.title, isSelected = _a.isSelected, type = _a.type, id = _a.id, children = _a.children, onDoubleClick = _a.onDoubleClick, canExpand = _a.canExpand;
    var _b = (0, store_1.default)("expandedPaths"), expandedPaths = _b[0], setExpandedPaths = _b[1];
    var search = (0, store_1.default)("search")[0];
    var searchLoading = (0, store_1.default)("searchLoading")[0];
    var router = (0, react_with_native_router_1.useRouter)();
    var typeIcon = type ? typeIcons_1.typeIcons[type] : "";
    var childrenElements = children && Array.isArray(children)
        ? children.map(getFolderExplorationElement_1.getFolderExplorationElement).filter(js_util_1.notEmpty)
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
exports.MenuItem = MenuItem;
//# sourceMappingURL=MenuItem.js.map