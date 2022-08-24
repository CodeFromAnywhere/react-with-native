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
exports.TypeDefinition = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var util_1 = require("./util");
/**
 * renders a type definition interface
 */
var TypeDefinition = function (_a) {
    var title = _a.title, schema = _a.schema, model = _a.model;
    var reference = schema === null || schema === void 0 ? void 0 : schema.$ref;
    var refLink = (0, util_1.getRefLink)(reference);
    var properties = schema === null || schema === void 0 ? void 0 : schema.properties;
    var required = schema === null || schema === void 0 ? void 0 : schema.required;
    var refElement = refLink ? ((0, jsx_runtime_1.jsx)("span", __assign({ className: "cursor-pointer", onClick: function () {
            console.log("TODO");
        } }, { children: refLink }))) : null;
    var propertyKeys = properties ? Object.keys(properties) : [];
    var typeColor = "text-lime-500";
    var propertyColor = "text-blue-500";
    var isObject = (schema === null || schema === void 0 ? void 0 : schema.type) === "object";
    return ((0, jsx_runtime_1.jsxs)("span", { children: [title ? ((0, jsx_runtime_1.jsxs)("span", { children: ["type ", (0, jsx_runtime_1.jsx)("span", __assign({ className: typeColor }, { children: title })), " ="] })) : null, isObject ? ((0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("span", { children: "{" }), propertyKeys.map(function (key) {
                        var propertyDefinition = (0, util_1.getSchema)(properties === null || properties === void 0 ? void 0 : properties[key]);
                        var isRequired = required === null || required === void 0 ? void 0 : required.includes(key);
                        var refLink = (0, util_1.getRefLink)(propertyDefinition === null || propertyDefinition === void 0 ? void 0 : propertyDefinition.$ref);
                        var title = (0, util_1.getTypeDefinitionString)({
                            name: refLink || "",
                            model: model,
                            schema: schema,
                        });
                        var refElement = refLink ? ((0, jsx_runtime_1.jsx)("span", __assign({ className: "cursor-pointer", onClick: function () {
                                console.log("COMING SOON");
                            }, title: title }, { children: refLink }))) : null;
                        var type = (0, util_1.getType)(propertyDefinition, model);
                        return ((0, jsx_runtime_1.jsxs)("span", __assign({ className: "text-xs" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: propertyColor }, { children: key })), isRequired ? "" : "?", ":", " ", (0, jsx_runtime_1.jsx)("span", __assign({ className: typeColor }, { children: refElement || type })), "; "] }), key));
                    }), (0, jsx_runtime_1.jsx)("span", { children: "}" })] })) : refLink ? ((0, jsx_runtime_1.jsx)("span", __assign({ className: typeColor }, { children: refElement }))) : ((0, util_1.getType)(schema, model))] }));
};
exports.TypeDefinition = TypeDefinition;
exports.default = exports.TypeDefinition;
//# sourceMappingURL=TypeDefinition.js.map