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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var react_with_native_table_1 = require("react-with-native-table");
var code_types_1 = require("code-types");
var api_1 = require("../api");
var TsCommentComponent_1 = require("../components/TsCommentComponent");
// @ts-ignore
var GoFileCode_svg_1 = __importDefault(require("../../assets/GoFileCode.svg"));
var renderMarkdownParse_1 = require("../components/renderMarkdownParse");
var FancyLoader_1 = require("../components/FancyLoader");
var TsInterfaceComponent_1 = require("../components/TsInterface/TsInterfaceComponent");
var IndexInstanceContainer_1 = require("../components/IndexInstanceContainer");
var convert_case_1 = require("convert-case");
var useUrl_1 = require("../hooks/useUrl");
var TsFunctionComponent_1 = require("../components/TsFunctionComponent");
var FolderSummaryComponent_1 = require("../components/FolderSummaryComponent");
var TsVariableComponent_1 = require("../components/TsVariableComponent");
var MarkdownPage_1 = require("../components/MarkdownPage");
var vscodeOpen_1 = require("../api/vscodeOpen");
var store_1 = __importDefault(require("../store"));
var humanReadableDate = function (unixTime, showTime) {
    var date = new Date(unixTime);
    return "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate()).concat(showTime ? " ".concat(date.getHours(), ":").concat(date.getMinutes()) : "");
};
var renderPathMetaData = function (pathMetaData) {
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: ["Created: ", humanReadableDate(pathMetaData.createdAt)] }), (0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: ["Last Updated: ", humanReadableDate(pathMetaData.updatedAt, true)] }), pathMetaData.mainComment ? ((0, jsx_runtime_1.jsx)(TsCommentComponent_1.TsCommentComponent, __assign({}, pathMetaData.mainComment))) : null, (0, jsx_runtime_1.jsx)(FolderSummaryComponent_1.FolderSummaryComponent, __assign({}, pathMetaData.sizes))] }));
};
/**
 * makes an select item for a key
 */
var makeItem = function (key) {
    return { value: key, label: (0, convert_case_1.humanCase)(key) };
};
var Page = function () {
    var _a, _b, _c, _d;
    var authToken = (0, store_1.default)("authToken")[0];
    var _e = (0, react_1.useState)(false), showRaw = _e[0], setShowRaw = _e[1];
    // TODO: provide type here
    var _f = (0, react_1.useState)(null), details = _f[0], setDetails = _f[1];
    var _g = (0, react_1.useState)(false), loading = _g[0], setLoading = _g[1];
    var typeIndexOptions = [
        { label: "Select a type index", value: "-" },
    ]
        .concat(code_types_1.indexDbModels.map(function (x) { return ({ value: x, label: (0, convert_case_1.humanCase)(x) }); }))
        .concat({ label: "All", value: "null" });
    var commentTypeOptions = code_types_1.commentTypes.map(function (x) {
        return makeItem(x);
    });
    var _h = (0, useUrl_1.useUrl)("typeIndexType"), typeIndexType = _h[0], setTypeIndexType = _h[1];
    var _j = (0, useUrl_1.useUrl)("hasCommentTypes"), hasCommentTypes = _j[0], setHasCommentTypes = _j[1];
    var _k = (0, useUrl_1.useUrl)("interfaceIsDbModel"), interfaceIsDbModel = _k[0], setInterfaceIsDbModel = _k[1];
    var _l = (0, useUrl_1.useUrl)("name"), name = _l[0], setName = _l[1];
    var _m = (0, useUrl_1.useUrl)("path"), path = _m[0], setPath = _m[1];
    var _o = (0, useUrl_1.useUrl)("type"), type = _o[0], setType = _o[1];
    var loadDetails = function () {
        if (!path || !name || !type) {
            return;
        }
        setLoading(true);
        (0, api_1.api)("function/get-folder-exploration-details", "POST", {
            arguments: {
                config: {
                    path: path,
                    name: name,
                    type: type,
                    hasCommentTypes: hasCommentTypes,
                    interfaceIsDbModel: interfaceIsDbModel,
                    typeIndexType: typeIndexType,
                },
            },
            authToken: authToken,
        }).then(function (result) {
            setDetails(result);
            setLoading(false);
        });
    };
    (0, react_1.useEffect)(function () {
        loadDetails();
    }, [
        path,
        name,
        type,
        interfaceIsDbModel,
        typeIndexType,
        hasCommentTypes.join(","),
    ]);
    var _p = details || {}, index = _p.index, detailsWithoutIndex = __rest(_p, ["index"]);
    var isFileOrFolderType = !!type &&
        ["folder", "operation", "operationFolder", "typescript"].includes(type);
    var renderTypeIndexTypeFilters = function () {
        var renderInterfaceIsDbModelCheckmark = typeIndexType === "TsInterface" || typeIndexType === "null" ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.ToggleInput, { onChange: function (value) {
                    return typeof value !== "function" && setInterfaceIsDbModel(value);
                }, extra: { label: "Only database models" }, fieldName: "isDbModel", uniqueFieldId: "isDbModel", value: interfaceIsDbModel, config: undefined }) })) : null;
        var renderHasCommentTypesSelectors = typeIndexType === "TsComment" || typeIndexType === "null" ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SelectMultipleInput, { config: undefined, extra: {
                    title: "Comment type",
                    options: commentTypeOptions,
                }, fieldName: "hasCommentTypes", uniqueFieldId: "hasCommentTypes", value: hasCommentTypes.map(function (x) { return ({
                    value: x,
                    label: (0, convert_case_1.humanCase)(x),
                }); }), onChange: function (values) {
                    if (typeof values !== "function") {
                        var newValue = values.map(function (x) { return x.value; });
                        setHasCommentTypes(newValue);
                    }
                } }) })) : null;
        var renderTypeIndexSelector = ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mx-2" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.SelectInput, { config: undefined, extra: { options: typeIndexOptions, title: "Select a type index" }, fieldName: "typeIndex", uniqueFieldId: "typeIndex", value: typeIndexType
                    ? makeItem(typeIndexType)
                    : { label: "Select a type index", value: "-" }, onChange: function (x) {
                    return typeof x !== "function" && setTypeIndexType(x ? x.value : "null");
                } }) })));
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [renderTypeIndexSelector, renderHasCommentTypesSelectors, renderInterfaceIsDbModelCheckmark] })));
    };
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ scroll: true, className: "overflow-x-scroll w-full" }, { children: [isFileOrFolderType ? renderTypeIndexTypeFilters() : null, type === "typescript" ? ((0, jsx_runtime_1.jsx)(IndexInstanceContainer_1.IndexInstanceContainer, __assign({ buttons: [
                    {
                        title: "Open Code",
                        icon: GoFileCode_svg_1.default,
                        onClick: function () { return (path ? (0, vscodeOpen_1.vscodeOpen)([path], authToken) : null); },
                    },
                ], title: "[ts] ".concat(name) }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, {}) }))) : null, loading ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-full flex justify-center" }, { children: (0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, { big: true }) }))) : null, (details === null || details === void 0 ? void 0 : details.success) === false ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: details.response }) : null, (details === null || details === void 0 ? void 0 : details.markdown) ? ((0, jsx_runtime_1.jsx)(MarkdownPage_1.MarkdownPage, { loading: loading, reload: loadDetails, markdownParse: details.markdown, path: path, name: name })) : null, (details === null || details === void 0 ? void 0 : details.pathMetaData) ? renderPathMetaData(details.pathMetaData) : null, (_a = details === null || details === void 0 ? void 0 : details.tsVariables) === null || _a === void 0 ? void 0 : _a.map(function (v) { return ((0, jsx_runtime_1.jsx)(TsVariableComponent_1.TsVariableComponent, __assign({}, v))); }), (_b = details === null || details === void 0 ? void 0 : details.tsComments) === null || _b === void 0 ? void 0 : _b.map(function (comment) { return ((0, jsx_runtime_1.jsx)(TsCommentComponent_1.TsCommentComponent, __assign({}, comment))); }), (_c = details === null || details === void 0 ? void 0 : details.tsFunctions) === null || _c === void 0 ? void 0 : _c.map(function (x) { return ((0, jsx_runtime_1.jsx)(TsFunctionComponent_1.TsFunctionComponent, __assign({}, x), "f.".concat(x.id))); }), (_d = details === null || details === void 0 ? void 0 : details.tsInterfaces) === null || _d === void 0 ? void 0 : _d.map(function (i) { return ((0, jsx_runtime_1.jsx)(TsInterfaceComponent_1.TsInterfaceComponent, __assign({}, i))); }), (details === null || details === void 0 ? void 0 : details.operationIndexes) && details.operationIndexes.length > 0 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: "Operation Indexes" })), (0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: details === null || details === void 0 ? void 0 : details.operationIndexes, columns: (0, react_with_native_table_1.getColumns)("OperationIndex", details === null || details === void 0 ? void 0 : details.index, details.operationIndexes) })] })) : null, (details === null || details === void 0 ? void 0 : details.tsBuildErrors) && details.tsBuildErrors.length > 0 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: "Build Errors" })), (0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: details === null || details === void 0 ? void 0 : details.tsBuildErrors, columns: (0, react_with_native_table_1.getColumns)("TsBuildError", details === null || details === void 0 ? void 0 : details.index, details.tsBuildErrors) })] })) : null, (details === null || details === void 0 ? void 0 : details.tsExports) && details.tsExports.length > 0 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: "Exports" })), (0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: details === null || details === void 0 ? void 0 : details.tsExports, columns: (0, react_with_native_table_1.getColumns)("TsExport", details === null || details === void 0 ? void 0 : details.index, details.tsExports) })] })) : null, (details === null || details === void 0 ? void 0 : details.tsImports) && details.tsImports.length > 0 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: "Imports" })), (0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: details === null || details === void 0 ? void 0 : details.tsImports, columns: (0, react_with_native_table_1.getColumns)("TsImport", details === null || details === void 0 ? void 0 : details.index, details.tsImports) })] })) : null, (details === null || details === void 0 ? void 0 : details.tsLintWarnings) && details.tsLintWarnings.length > 0 ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-3xl" }, { children: "Lint Warnings" })), (0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: details === null || details === void 0 ? void 0 : details.tsLintWarnings, columns: (0, react_with_native_table_1.getColumns)("TsLintWarning", details === null || details === void 0 ? void 0 : details.index, details.tsLintWarnings) })] })) : null, details && !details.markdown ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "hover:underline text-xs", onClick: function () { return setShowRaw(!showRaw); } }, { children: "(Show raw JSON response for this page)" })), showRaw
                        ? (0, renderMarkdownParse_1.renderMarkdownContent)("```json\n".concat(JSON.stringify(detailsWithoutIndex, null, 2), "\n```"))
                        : null] })) : null] })));
};
Page.options = {};
exports.default = Page;
//# sourceMappingURL=explore.js.map