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
exports.ModelComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var react_with_native_router_1 = require("react-with-native-router");
var react_with_native_table_1 = require("react-with-native-table");
var js_util_1 = require("js-util");
var api_1 = require("../api");
var convert_case_1 = require("convert-case");
var schema_util_1 = require("schema-util");
var renderLabeledButton_1 = require("../components/renderLabeledButton");
var store_1 = __importDefault(require("../store"));
var react_with_native_alert_1 = require("react-with-native-alert");
var schema_util_2 = require("schema-util");
var FancyLoader_1 = require("./FancyLoader");
/**
 


In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


 */
var ModelComponent = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var model = _a.model, modelName = _a.modelName, refresh = _a.refresh, highlight = _a.highlight, loading = _a.loading;
    var authToken = (0, store_1.default)("authToken")[0];
    var _h = (0, react_1.useState)(false), showModelKeys = _h[0], setShowModelKeys = _h[1];
    var alert = (0, react_with_native_alert_1.useAlert)();
    var router = (0, react_with_native_router_1.useRouter)();
    var properties = (0, schema_util_1.getProperties)((_b = model === null || model === void 0 ? void 0 : model.index) === null || _b === void 0 ? void 0 : _b.type.typeDefinition);
    var withOrWithoutModelKeys = function (column) {
        return showModelKeys ||
            ![
                "id",
                "createdAt",
                "updatedAt",
                "createdFirstAt",
                "deletedAt",
                "slug",
                "language",
            ].includes(String(column.objectParameterKey));
    };
    var columns = properties
        .map(function (property) {
        var referenceParameterInfo = (0, schema_util_2.getReferenceParameterInfo)(property.name);
        var presentationType = referenceParameterInfo.isReferenceSingleParameter
            ? "referenceSingle"
            : referenceParameterInfo.isReferenceMultipleParameter
                ? "referenceMultiple"
                : "text";
        var name = referenceParameterInfo.isReferenceMultipleParameter ||
            referenceParameterInfo.isReferenceSingleParameter
            ? referenceParameterInfo.interfaceName
            : (0, convert_case_1.humanCase)(property.name);
        var column = {
            name: name,
            objectParameterKey: property.name,
            presentationType: presentationType,
        };
        return column;
    })
        .filter(js_util_1.notEmpty)
        .filter(withOrWithoutModelKeys);
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flew-row justify-between pb-4" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: ((_c = model === null || model === void 0 ? void 0 : model.index) === null || _c === void 0 ? void 0 : _c.name) || "Couldn't find index" })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: (_d = model === null || model === void 0 ? void 0 : model.index) === null || _d === void 0 ? void 0 : _d.description })] }), (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [(0, renderLabeledButton_1.renderLabeledButton)({
                                onClick: function () { return router.push("/upsert?model=".concat(modelName)); },
                                title: "New",
                                emoji: "➕",
                            }), (0, renderLabeledButton_1.renderLabeledButton)({
                                onClick: function () { return refresh(); },
                                title: "Reload",
                                emoji: loading ? undefined : "🔄",
                                component: loading ? function () { return (0, jsx_runtime_1.jsx)(FancyLoader_1.FancyLoader, { medium: true }); } : undefined,
                            }), (0, renderLabeledButton_1.renderLabeledButton)({
                                onClick: function () { return setShowModelKeys(!showModelKeys); },
                                title: "Show all",
                                emoji: showModelKeys ? "🔓" : "🔒",
                            })] }))] })), ((_e = model === null || model === void 0 ? void 0 : model.data) === null || _e === void 0 ? void 0 : _e.length) === 0
                ? "No entries"
                : "".concat((_f = model === null || model === void 0 ? void 0 : model.data) === null || _f === void 0 ? void 0 : _f.length, " entries found"), ((_g = model === null || model === void 0 ? void 0 : model.data) === null || _g === void 0 ? void 0 : _g.length) === 0 ? null : ((0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: model === null || model === void 0 ? void 0 : model.data, shouldHighlightItem: function (item) {
                    return !!((highlight.id && item.id === highlight.id) ||
                        (highlight.slug && item.slug === highlight.slug) ||
                        (highlight.index && item.index === highlight.index));
                }, columns: columns, renderExtraColumns: function (item) {
                    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [(0, renderLabeledButton_1.renderLabeledButton)({
                                onClick: function () {
                                    return router.push("/upsert?model=".concat(modelName, "&id=").concat(item.id));
                                },
                                title: "Update",
                                emoji: "✏️",
                                size: "small",
                            }), (0, renderLabeledButton_1.renderLabeledButton)({
                                size: "small",
                                onClick: function () {
                                    alert === null || alert === void 0 ? void 0 : alert("Are you sure?", "Do you want to delete this one?", [
                                        {
                                            text: "Yes",
                                            style: "destructive",
                                            onPress: function () {
                                                (0, api_1.api)("function/delete-db-model", "POST", {
                                                    authToken: authToken,
                                                    arguments: {
                                                        interfaceName: modelName,
                                                        id: item.id,
                                                    },
                                                }).then(function (result) {
                                                    refresh();
                                                });
                                            },
                                        },
                                        { text: "Cancel", style: "cancel" },
                                    ]);
                                },
                                title: "Delete",
                                emoji: "❌",
                            })] })));
                }, extraColumnsAtStart: true }))] }));
};
exports.ModelComponent = ModelComponent;
//# sourceMappingURL=ModelComponent.js.map