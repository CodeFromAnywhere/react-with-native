"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTsInterfaceForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var simplified_schema_form_1 = require("simplified-schema-form");
var react_1 = require("react");
/**
 * hook to create a form for a TsInterface
 */
var useTsInterfaceForm = function (
/**
 * NB: Don't change this! The amount of hooks depends on this
 */
tsInterface, 
/**
 * Only works if set on first render
 */
initialValue) {
    var _a = (0, react_1.useState)([initialValue]), values = _a[0], onChange = _a[1];
    var value = values[0];
    var simplifiedSchema = tsInterface.type.simplifiedSchema;
    if (!simplifiedSchema)
        return null;
    var referencableModelData = (0, simplified_schema_form_1.useReferencableModelData)(simplifiedSchema);
    var Component = function () { return ((0, jsx_runtime_1.jsx)(simplified_schema_form_1.SimplifiedSchemaForm, { id: "test", onChange: onChange, values: values, parameters: [
            {
                name: "",
                required: true,
                simplifiedSchema: simplifiedSchema,
            },
        ], referencableModelData: referencableModelData })); };
    return [Component, value];
};
exports.useTsInterfaceForm = useTsInterfaceForm;
//# sourceMappingURL=useTsInterfaceForm.js.map