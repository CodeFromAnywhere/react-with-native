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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudTable = exports.ModelComponent = exports.getDataParameterNames = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("api");
var convert_case_1 = require("convert-case");
var fancy_loader_1 = require("fancy-loader");
var fs_util_js_1 = require("fs-util-js");
var js_util_1 = require("js-util");
var labeled_button_1 = require("labeled-button");
var markdown_1 = require("markdown");
var asset_view_1 = require("asset-view");
var name_conventions_1 = require("name-conventions");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var react_with_native_alert_1 = require("react-with-native-alert");
var react_with_native_router_1 = require("react-with-native-router");
var react_with_native_table_1 = require("react-with-native-table");
var schema_util_1 = require("schema-util");
var SpaceCard_1 = require("./card/SpaceCard");
var useGetDbModelQuery_1 = require("./useGetDbModelQuery");
var deleteDbModel = api_1.api.deleteDbModel;
var getDataParameterNames = function (properties) {
    var dataParameterNames = properties
        .map(function (property) {
        var dataParameterName = (0, schema_util_1.getReferenceParameterInfo)(property.name).dataParameterName;
        return dataParameterName;
    })
        .filter(js_util_1.notEmpty);
    return dataParameterNames;
};
exports.getDataParameterNames = getDataParameterNames;
/**
 
In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows

 */
var ModelComponent = function (props) {
    var _a, _b, _c, _d;
    var modelName = props.modelName, highlight = props.highlight;
    var model = (0, useGetDbModelQuery_1.useGetDbModelQuery)(modelName);
    var modelReferences = api_1.queries.useGetReferencableModelData(modelName);
    var isLoading = model.isLoading || model.isRefetching || model.isFetching;
    var alert = (0, react_with_native_alert_1.useAlert)();
    var router = (0, react_with_native_router_1.useRouter)();
    var _e = (0, react_1.useState)("table"), view = _e[0], setView = _e[1];
    var index = (_b = (_a = model.data) === null || _a === void 0 ? void 0 : _a.pages[0].result) === null || _b === void 0 ? void 0 : _b.index;
    var allData = (_c = model === null || model === void 0 ? void 0 : model.data) === null || _c === void 0 ? void 0 : _c.pages.map(function (x) { var _a; return (_a = x.result) === null || _a === void 0 ? void 0 : _a.data; }).flat().filter(js_util_1.notEmpty);
    var count = (0, js_util_1.sum)(((_d = model.data) === null || _d === void 0 ? void 0 : _d.pages.map(function (x) { var _a; return ((_a = x.result) === null || _a === void 0 ? void 0 : _a.data.length) || 0; })) || []);
    var indexDescription = isLoading ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {})) : index ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "font-bold" }, { children: index.name })), (0, markdown_1.renderMarkdownContent)(index.description || "No description", {
                projectRelativeBaseFolderPath: (0, fs_util_js_1.getFolderJs)(index.projectRelativePath),
                projectRelativeMarkdownFilePath: index.projectRelativePath,
            })] })) : ("No index found");
    var headerButtons = ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [(0, jsx_runtime_1.jsx)(labeled_button_1.LabeledButton, { onClick: function () { return router.push("/upsert/".concat(modelName)); }, title: "New", emoji: "\u2795" }), (0, jsx_runtime_1.jsx)(labeled_button_1.LabeledButton, __assign({}, {
                onClick: function () { return model.refetch(); },
                title: "Reload",
                emoji: isLoading ? undefined : "🔄",
                component: isLoading ? function () { return (0, jsx_runtime_1.jsx)(fancy_loader_1.FancyLoader, { medium: true }); } : undefined,
            }))] })));
    var onEndReached = function () {
        var _a, _b;
        var pages = (_a = model.data) === null || _a === void 0 ? void 0 : _a.pages;
        var lastPage = pages ? pages[pages.length - 1] : undefined;
        var hasMore = (_b = lastPage === null || lastPage === void 0 ? void 0 : lastPage.result) === null || _b === void 0 ? void 0 : _b.hasMore;
        if (hasMore && !model.isFetchingNextPage) {
            model.fetchNextPage();
        }
    };
    var deleteItem = function (item) {
        alert === null || alert === void 0 ? void 0 : alert("Are you sure?", "Do you want to delete this one?", [
            {
                text: "Yes",
                style: "destructive",
                onPress: function () {
                    if (item === null || item === void 0 ? void 0 : item.id) {
                        deleteDbModel(modelName, item.id).then(function (result) {
                            model.refetch();
                            modelReferences.refetch();
                        });
                    }
                },
            },
            { text: "Cancel", style: "cancel" },
        ]);
    };
    var deleteAction = {
        action: deleteItem,
        emoji: "❌",
        name: "Delete",
    };
    var updateItem = function (item) {
        return router.push("/upsert/".concat(modelName, "?id=").concat(item === null || item === void 0 ? void 0 : item.id));
    };
    var updateAction = {
        name: "Update",
        emoji: "✏️",
        action: updateItem,
    };
    var actions = [deleteAction, updateAction];
    var renderGrid = function () {
        return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row flex-wrap" }, { children: allData === null || allData === void 0 ? void 0 : allData.map(function (item) {
                var upsertUrl = "/upsert/".concat(modelName, "?id=").concat(item === null || item === void 0 ? void 0 : item.id);
                var imageUrl = (0, asset_view_1.itemGetBackendAssetUrl)({
                    item: item,
                    backendAsset: item.pictureImage,
                });
                return imageUrl && typeof imageUrl === "string" ? ((0, jsx_runtime_1.jsx)(SpaceCard_1.SpaceCard, { ctaText: "More info", href: upsertUrl, imageUrl: imageUrl, darkened: false, secondaryImageUrl: imageUrl, subtitle: "Subtitle", title: "Title" })) : ("no img url");
            }) })));
    };
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "px-8 lg:px-20 py-4" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flew-row justify-between pb-4" }, { children: [indexDescription, headerButtons] })), isLoading
                        ? null
                        : count === 0
                            ? "No entries loaded"
                            : "".concat(count, " entries loaded")] })), Array.isArray(allData) && allData.length > 0
                ? view === "grid"
                    ? renderGrid()
                    : renderTable()
                : null] }));
};
exports.ModelComponent = ModelComponent;
var CrudTable = function (props) {
    var _a;
    var alert = (0, react_with_native_alert_1.useAlert)();
    var tsInterface = props.tsInterface, onEndReached = props.onEndReached, data = props.data, highlight = props.highlight, actions = props.actions;
    var properties = (0, schema_util_1.getProperties)((_a = tsInterface === null || tsInterface === void 0 ? void 0 : tsInterface.type) === null || _a === void 0 ? void 0 : _a.typeDefinition);
    var dataParameterNames = (0, exports.getDataParameterNames)(properties);
    var columns = properties
        // Omit referenced data
        .filter(function (property) { return !dataParameterNames.includes(property.name); })
        .map(function (property) {
        var referenceParameterInfo = (0, schema_util_1.getReferenceParameterInfo)(property.name);
        var descriptor = referenceParameterInfo.descriptor, interfaceName = referenceParameterInfo.interfaceName, isReferenceMultipleParameter = referenceParameterInfo.isReferenceMultipleParameter, isReferenceParameter = referenceParameterInfo.isReferenceParameter, isReferenceSingleParameter = referenceParameterInfo.isReferenceSingleParameter;
        var isBackendAssetParameter = (0, name_conventions_1.getAssetInputType)(property.name);
        var presentationType = isReferenceSingleParameter
            ? "referenceSingle"
            : isReferenceMultipleParameter
                ? "referenceMultiple"
                : isBackendAssetParameter
                    ? "backendAsset"
                    : "text";
        var name = isReferenceParameter && interfaceName
            ? descriptor
                ? (0, convert_case_1.humanCase)("".concat(descriptor, "-").concat(interfaceName))
                : (0, convert_case_1.humanCase)(interfaceName)
            : (0, convert_case_1.humanCase)(property.name);
        var column = {
            name: name,
            objectParameterKey: property.name,
            presentationType: presentationType,
        };
        return column;
    })
        .filter(js_util_1.notEmpty);
    return ((0, jsx_runtime_1.jsx)(react_with_native_table_1.Table, { data: data, onEndReached: onEndReached, shouldHighlightItem: function (item) {
            return !!((highlight.id && item.id === highlight.id) ||
                (highlight.slug && item.slug === highlight.slug));
        }, columns: columns, renderExtraColumns: function (item) {
            return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: item
                    ? actions.map(function (action) {
                        return ((0, jsx_runtime_1.jsx)(labeled_button_1.LabeledButton, { onClick: function () { return action.action(item); }, title: action.name, emoji: action.emoji, size: "small" }));
                    })
                    : null })));
        }, extraColumnsAtStart: true }));
};
exports.CrudTable = CrudTable;
//# sourceMappingURL=ModelComponent.js.map