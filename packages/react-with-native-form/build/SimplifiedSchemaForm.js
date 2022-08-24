"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplifiedSchemaForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/**
CRITICAL: check why we have the ValueOrGetter type in rwn-form and see if I can simplify that interface without breaking much or with a simple migration strategy

LATER:

Use SimplifiedSchemaForm in admin-ui, using `/function/function-name` to execute any function through a form.

In a form, any parameter with pattern xxxSlug or xxxId should be able to let the user select one of the existing of the referred model. Use the `name` parameter of the data in the referenced model for that.
 */
var react_with_native_form_inputs_1 = require("react-with-native-form-inputs");
var react_with_native_1 = require("react-with-native");
var convert_case_1 = require("convert-case");
/**
 Think about the different steps involved because some may be able to be reused, for example, in interactive-cli forms, chatbot interfaces, siri-like agents... etc.
 */
var SimplifiedSchemaForm = function (_a) {
    //
    var onChange = _a.onChange, parameters = _a.parameters, values = _a.values, referencedModelData = _a.referencedModelData;
    return parameters.map(function (parameter, index) {
        var _a, _b, _c, _d;
        if (!parameter.simplifiedSchema)
            return;
        if (((_a = parameter.simplifiedSchema) === null || _a === void 0 ? void 0 : _a.type) === "array") {
            // create a component where you can add and remove items, where each item that is added should recurse on this form builder
        }
        if (((_b = parameter.simplifiedSchema) === null || _b === void 0 ? void 0 : _b.type) === "object") {
            // for each parameter, recurse this form builder
        }
        if (((_c = parameter.simplifiedSchema) === null || _c === void 0 ? void 0 : _c.type) === "number") {
            var value_1 = values[index];
            var onChangeNumber = function (newNumber) {
                var newValues = values.map(function (x, i) {
                    // NB: only change the index we are on
                    return i === index
                        ? //   NB: ony return undefined for an empty string that's not required
                            !parameter.required && newNumber === null
                                ? undefined
                                : newNumber
                        : x;
                });
                onChange(newValues);
            };
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: (0, convert_case_1.humanCase)(parameter.name) }), (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.NumberInput, { uniqueFieldId: parameter.name, fieldName: parameter.name, onChange: onChangeNumber, value: value_1 || null, extra: {}, config: {} })] }));
        }
        if (((_d = parameter.simplifiedSchema) === null || _d === void 0 ? void 0 : _d.type) === "boolean") {
            var value_2 = values[index];
            var onChangeBoolean = function (newBoolean) {
                var newValues = values.map(function (x, i) {
                    // NB: only change the index we are on
                    return i === index
                        ? // NB: ony return undefined for an empty string that's not required
                            !parameter.required && newBoolean === false
                                ? undefined
                                : newBoolean
                        : x;
                });
                onChange(newValues);
            };
            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: (0, convert_case_1.humanCase)(parameter.name) }), (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.ToggleInput, { uniqueFieldId: parameter.name, fieldName: parameter.name, onChange: onChangeBoolean, value: value_2 || false, extra: {}, config: {} })] }));
        }
        // NB: only string left
        var value = values[index];
        var onChangeText = function (newText) {
            var newValues = values.map(function (x, i) {
                // NB: only change the index we are on
                return i === index
                    ? //   NB: ony return undefined for an empty string that's not required
                        !parameter.required && newText.length === 0
                            ? undefined
                            : newText
                    : x;
            });
            onChange(newValues);
        };
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: (0, convert_case_1.humanCase)(parameter.name) }), (0, jsx_runtime_1.jsx)(react_with_native_form_inputs_1.TextInput, { uniqueFieldId: parameter.name, fieldName: parameter.name, onChange: onChangeText, value: value || "", extra: {}, config: {} })] }));
    });
};
exports.SimplifiedSchemaForm = SimplifiedSchemaForm;
//# sourceMappingURL=SimplifiedSchemaForm.js.map