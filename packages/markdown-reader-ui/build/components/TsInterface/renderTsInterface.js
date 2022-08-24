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
exports.renderTsInterface = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var IndexInstanceContainer_1 = require("../IndexInstanceContainer");
// @ts-ignore
var GoFileCode_svg_1 = __importDefault(require("../../../assets/GoFileCode.svg"));
// @ts-ignore
var FiDatabase_svg_1 = __importDefault(require("../../../assets/FiDatabase.svg"));
var typeIcons_1 = require("../../util/typeIcons");
var react_with_native_router_1 = require("react-with-native-router");
var renderMarkdownParse_1 = require("../renderMarkdownParse");
var createCodeblockMarkdown_1 = require("../../util/createCodeblockMarkdown");
var renderSchema_1 = require("./renderSchema");
var api_1 = require("../../api");
var renderTsInterface = function (_a) {
    var 
    // the main info
    rawText = _a.rawText, extensions = _a.extensions, _b = _a.type, isArray = _b.isArray, isEnum = _b.isEnum, isEnumLiteral = _b.isEnumLiteral, isObject = _b.isObject, isPrimitive = _b.isPrimitive, rawType = _b.rawType, typeCoverage = _b.typeCoverage, typeDefinition = _b.typeDefinition, isDbModel = _a.isDbModel, defaultDbStorageMethod = _a.defaultDbStorageMethod, 
    //   name
    name = _a.name, slug = _a.slug, 
    //   location
    operationFolderName = _a.operationFolderName, relativePathFromProjectRoot = _a.relativePathFromProjectRoot, relativeFilePathFromSrc = _a.relativeFilePathFromSrc, operationName = _a.operationName, 
    //   comments
    commentsInside = _a.commentsInside, description = _a.description;
    // Should show all functions that use this interface, and link to them
    var router = (0, react_with_native_router_1.useRouter)();
    var interfaceButtons = [
        {
            title: "Open Code",
            icon: GoFileCode_svg_1.default,
            onClick: function () {
                (0, api_1.api)("vscode-open", "GET", { path: relativePathFromProjectRoot });
            },
        },
    ];
    if (isDbModel) {
        interfaceButtons.push({
            icon: FiDatabase_svg_1.default,
            title: "Show data",
            onClick: function () { return router.push("db?model=".concat(name)); },
        });
    }
    return ((0, jsx_runtime_1.jsxs)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ title: "".concat(typeIcons_1.typeIcons.interface, " ").concat(name), buttons: interfaceButtons }, { children: [rawText ? (0, renderMarkdownParse_1.renderMarkdownContent)((0, createCodeblockMarkdown_1.createCodeblockMarkdown)(rawText)) : null, !rawText ? (0, renderSchema_1.renderSchema)(typeDefinition) : null] })));
};
exports.renderTsInterface = renderTsInterface;
//# sourceMappingURL=renderTsInterface.js.map