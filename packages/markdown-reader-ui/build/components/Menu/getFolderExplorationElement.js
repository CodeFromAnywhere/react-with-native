"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFolderExplorationElement = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_router_1 = require("react-with-native-router");
var common_types_1 = require("common-types");
var store_1 = __importDefault(require("../../store"));
var js_util_1 = require("js-util");
var MenuItem_1 = require("./MenuItem");
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
    return ((0, jsx_runtime_1.jsx)(MenuItem_1.MenuItem, { title: folderExploration.name, type: folderExploration.type, onDoubleClick: function () {
            var openPage = {
                id: (0, common_types_1.generateId)(),
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
exports.getFolderExplorationElement = getFolderExplorationElement;
//# sourceMappingURL=getFolderExplorationElement.js.map