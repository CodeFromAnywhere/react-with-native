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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var useGetDbModelQuery_1 = require("../hooks/useGetDbModelQuery");
var ModelComponent_1 = require("../components/ModelComponent");
var useUrl_1 = require("../hooks/useUrl");
var Page = function () {
    var modelQuery = (0, useUrl_1.useUrl)("model")[0];
    var slug = (0, useUrl_1.useUrl)("slug")[0];
    var id = (0, useUrl_1.useUrl)("id")[0];
    var index = (0, useUrl_1.useUrl)("index")[0];
    var model = (0, useGetDbModelQuery_1.useGetDbModelQuery)(modelQuery);
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ scroll: true, className: "py-4 px-8 lg:px-20" }, { children: (0, jsx_runtime_1.jsx)(ModelComponent_1.ModelComponent, { loading: (model === null || model === void 0 ? void 0 : model.isLoading) || (model === null || model === void 0 ? void 0 : model.isRefetching), refresh: model.refetch, model: model.data, modelName: modelQuery, highlight: { slug: slug, id: id, index: index } }) })));
};
Page.options = {};
exports.default = Page;
//# sourceMappingURL=db.js.map