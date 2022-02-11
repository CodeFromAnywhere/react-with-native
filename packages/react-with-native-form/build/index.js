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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import { useState, createRef, useEffect } from "react";
import { ActivityIndicator, Div, Label, Strong, Form, P, H2, Button, } from "react-with-native";
var isWeb = typeof window !== "undefined" && !!window.scrollTo;
var sameFieldArray = function (arr1, arr2) {
    var simpleArr1 = arr1.map(function (_a) {
        var shouldHide = _a.shouldHide, titleFromState = _a.titleFromState, hasError = _a.hasError, item = __rest(_a, ["shouldHide", "titleFromState", "hasError"]);
        return item;
    });
    var simpleArr2 = arr2.map(function (_a) {
        var shouldHide = _a.shouldHide, titleFromState = _a.titleFromState, hasError = _a.hasError, item = __rest(_a, ["shouldHide", "titleFromState", "hasError"]);
        return item;
    });
    var isDeepEqual = deepEqual(simpleArr1, simpleArr2);
    // console.log({ simpleArr1, simpleArr2, isDeepEqual });
    return isDeepEqual;
};
export function notEmpty(value) {
    return value !== null && value !== undefined;
}
export var makeInputField = function (type, config) {
    return function () { return (__assign({ type: type }, config)); };
};
var GLOBAL_PROPERTY_PATH = "__GLOBAL__";
export var inputClassWithoutWidth = "text-sm px-3 py-3 text-gray-700 border-gray-300 border rounded-md focus:outline-none";
export var inputClass = "w-full ".concat(inputClassWithoutWidth);
export var DefaultInputContainer = function (_a) {
    var children = _a.children, startSection = _a.startSection, sectionTitle = _a.sectionTitle, title = _a.title, description = _a.description, error = _a.error, errorClassName = _a.errorClassName;
    return (React.createElement(Div, null,
        startSection ? (React.createElement(Div, { style: {
                display: "flex",
                height: 40,
                justifyContent: "center",
                paddingLeft: 10,
            } }, sectionTitle ? (React.createElement(P, null,
            React.createElement(Strong, null, sectionTitle))) : (React.createElement(Div, { style: { height: 40 } })))) : null,
        React.createElement(Div, { className: "pt-0 mb-6" },
            title ? React.createElement(Label, { className: "mb-2 text-sm font-bold" }, title) : null,
            description && (React.createElement(Div, { className: "flex mx-3 mb-2 items-start " },
                React.createElement(P, { className: "text-gray-500 italic" }, description))),
            error ? (React.createElement(P, { className: errorClassName || "mr-3 mb-2 text-red-500" }, error || "Invalid value")) : null,
            React.createElement(Div, null, children))));
};
var getPlugin = function (type, plugins) {
    return type
        ? plugins[type]
        : plugins[Object.keys(plugins)[0]];
};
export var Input = function (_a) {
    var _b;
    var type = _a.type, plugin = _a.plugin, title = _a.title, onChange = _a.onChange, value = _a.value, isLast = _a.isLast, startSection = _a.startSection, sectionTitle = _a.sectionTitle, next = _a.next, extra = _a.extra, errors = _a.errors, reference = _a.reference, description = _a.description, config = _a.config, uniqueFieldId = _a.uniqueFieldId, renderInputContainer = _a.renderInputContainer, errorClassName = _a.errorClassName, fieldName = _a.fieldName;
    var InputComponent = plugin;
    var InputContainer = renderInputContainer || DefaultInputContainer;
    return (React.createElement(Div, { ref: reference },
        React.createElement(InputContainer, __assign({}, {
            description: description,
            sectionTitle: sectionTitle,
            startSection: startSection,
            title: title,
            next: next,
            isLast: isLast,
            id: uniqueFieldId,
            type: type,
            error: !plugin.hideContainerError &&
                ((_b = errors === null || errors === void 0 ? void 0 : errors.find(errorOnField(fieldName))) === null || _b === void 0 ? void 0 : _b.message),
            extra: extra,
            config: config,
            errorClassName: errorClassName,
        }),
            React.createElement(InputComponent, __assign({}, {
                uniqueFieldId: uniqueFieldId,
                fieldName: fieldName,
                config: config,
                extra: extra,
                onChange: onChange,
                value: value,
                errors: errors,
                errorClassName: errorClassName,
            })))));
};
var DefaultTitle = function (_a) {
    var title = _a.title, backButton = _a.backButton;
    return title ? (React.createElement(Div, { className: "flex items-center mb-10 " },
        backButton && (React.createElement(Div, { onClick: backButton, className: "p-4 cursor-pointer" }, "back")),
        React.createElement(H2, { className: "text-2xl font-bold" }, title))) : null;
};
export function deepEqual(object1, object2) {
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);
    if ((keys1 === null || keys1 === void 0 ? void 0 : keys1.length) !== (keys2 === null || keys2 === void 0 ? void 0 : keys2.length)) {
        return false;
    }
    for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
        var key = keys1_1[_i];
        var val1 = object1[key];
        var val2 = object2[key];
        var areObjects = isObject(val1) && isObject(val2);
        if ((areObjects && !deepEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)) {
            return false;
        }
    }
    return true;
}
export function isObject(object) {
    return object != null && typeof object === "object";
}
export var errorOnField = function (fieldName) { return function (error) {
    return error.propertyPath === fieldName ||
        error.propertyPath.startsWith(fieldName + ".");
}; };
var DataForm = function (_a) {
    var _b, _c;
    var fields = _a.fields, defaultValues = _a.defaultValues, initialValues = _a.initialValues, onSubmit = _a.onSubmit, withSubmitProps = _a.withSubmitProps, noSubmit = _a.noSubmit, submitButtonText = _a.submitButtonText, submitButtonColor = _a.submitButtonColor, title = _a.title, backButton = _a.backButton, plugins = _a.plugins, renderSubmitComponent = _a.renderSubmitComponent, renderInputContainer = _a.renderInputContainer, stickySubmit = _a.stickySubmit, renderTitle = _a.renderTitle, submitClassName = _a.submitClassName, errorClassName = _a.errorClassName, successClassName = _a.successClassName;
    //sometimes use defaultValues (deprecated)
    initialValues = initialValues ? initialValues : defaultValues;
    if (!plugins) {
        throw new Error("No plugins given");
    }
    //Generate unique id for the form
    var id = useState("Form".concat(String(Math.round(Math.random() * 1000000))))[0];
    var _d = useState([]), fieldsWithReferences = _d[0], setFieldsWithReferences = _d[1];
    // need to have because we want to see when it's changed
    var _e = useState([]), fieldsWithoutReferences = _e[0], setFieldsWithoutReferences = _e[1];
    useEffect(function () {
        var fieldsWithoutReferencesLocal = fields.map(function (f) { return f(); });
        if (
        // fieldsWithoutReferences.length === 0 && //NB: why was this here? caused the fields not to refresh
        !sameFieldArray(fieldsWithoutReferencesLocal, fieldsWithoutReferences)) {
            setFieldsWithReferences(fieldsWithoutReferencesLocal.map(function (fieldWithoutReference) {
                return __assign(__assign({}, fieldWithoutReference), { reference: createRef() });
            }));
            setFieldsWithoutReferences(fieldsWithoutReferencesLocal);
        }
    }, [fields]);
    var initialValuesPartial = fields.reduce(function (all, field) {
        var _a;
        var type = field().type;
        var plugin = getPlugin(type, plugins);
        var defaultInital = plugin.component.defaultInitialValue;
        var initial = field().initialValue;
        var key = field().field;
        var value = initial !== undefined
            ? initial
            : defaultInital !== undefined
                ? defaultInital
                : undefined;
        return __assign(__assign({}, all), (_a = {}, _a[key] = value, _a));
    }, {});
    var initialState = __assign(__assign({}, initialValuesPartial), initialValues);
    var _f = useState(initialState), state = _f[0], setState = _f[1];
    //used to check if the initialValues have changed
    var _g = useState(), initialValuesState = _g[0], setInitialValuesState = _g[1];
    useEffect(function () {
        if (!initialValuesState || !deepEqual(initialState, initialValuesState)) {
            // console.log("initialValues have changed");
            setState(initialState);
            setInitialValuesState(initialState);
        }
    }, [initialState]);
    var _h = useState(false), loading = _h[0], setLoading = _h[1];
    var _j = useState([]), errors = _j[0], setErrors = _j[1];
    var _k = useState(), success = _k[0], setSuccess = _k[1];
    var notReadyFields = fieldsWithReferences.filter(function (x) { var _a, _b; return !((_a = x.shouldHide) === null || _a === void 0 ? void 0 : _a.call(x, state)) && ((_b = x.hasError) === null || _b === void 0 ? void 0 : _b.call(x, state[x.field], state)); });
    var setErrorsReject = function (stringOrErrorArray) {
        var _a, _b, _c, _d;
        if (stringOrErrorArray) {
            //if the rejection provides a string, just return an array with 1 element: that string, on the global property path
            //however, if it's an error array, return that. But make sure that if the propertyPath doesn't exist, it's still rendered globally.
            var newErrors_1 = typeof stringOrErrorArray === "string"
                ? [
                    {
                        propertyPath: GLOBAL_PROPERTY_PATH,
                        message: stringOrErrorArray,
                    },
                ]
                : stringOrErrorArray.map(function (_a) {
                    var propertyPath = _a.propertyPath, message = _a.message;
                    return ({
                        message: message,
                        propertyPath: fields
                            .map(function (f) { return f().field; })
                            .find(function (x) { return propertyPath === x || propertyPath.startsWith("".concat(x, ".")); })
                            ? propertyPath
                            : GLOBAL_PROPERTY_PATH,
                    });
                });
            //this only happens when there are no frontend errors, so it's safe to replace errors
            setErrors(newErrors_1);
            //scroll to the first field that contains an error
            var firstNotReadyField = fieldsWithReferences.filter(function (x) { return newErrors_1.find(errorOnField(x.field)) !== undefined; })[0];
            if (isWeb) {
                var top_1 = (((_c = (_b = (_a = firstNotReadyField === null || firstNotReadyField === void 0 ? void 0 : firstNotReadyField.reference) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect) === null || _c === void 0 ? void 0 : _c.call(_b).top) || 0) +
                    (window.scrollY || 0) -
                    100;
                // console.log("setErrorsReject: scrolling to first error field");
                (_d = window.scrollTo) === null || _d === void 0 ? void 0 : _d.call(window, {
                    top: top_1,
                    behavior: "smooth",
                });
            }
        }
    };
    var firstErrorRef = (_c = (_b = notReadyFields[0]) === null || _b === void 0 ? void 0 : _b.reference) === null || _c === void 0 ? void 0 : _c.current;
    function onClickSubmit(state) {
        var _a;
        var frontendErrorArray = fields.reduce(function (all, field) {
            var _a, _b, _c, _d;
            var shouldNotHide = !((_b = (_a = field()).shouldHide) === null || _b === void 0 ? void 0 : _b.call(_a, state));
            var errorMessage = (_d = (_c = field()).hasError) === null || _d === void 0 ? void 0 : _d.call(_c, state[field().field], state);
            var hasError = shouldNotHide && errorMessage;
            var errors = typeof hasError === "string"
                ? [{ propertyPath: field().field, message: hasError }]
                : Array.isArray(hasError)
                    ? hasError
                    : [];
            return __spreadArray(__spreadArray([], all, true), errors, true);
        }, []);
        setErrors(frontendErrorArray);
        //
        if ((frontendErrorArray === null || frontendErrorArray === void 0 ? void 0 : frontendErrorArray.length) === 0) {
            //no errors
            setLoading(true);
            onSubmit(state, function (successMessage) {
                setSuccess(successMessage);
                setLoading(false);
            }, function (stringOrErrorArray) {
                setErrorsReject(stringOrErrorArray);
                setLoading(false);
            });
        }
        else {
            //scroll to the error
            /// onError("Please fill in all fields correctly");
            if (isWeb) {
                var top_2 = ((firstErrorRef === null || firstErrorRef === void 0 ? void 0 : firstErrorRef.getBoundingClientRect().top) || 0) +
                    window.scrollY -
                    100;
                // console.log("onClickSubmit: scrolling to first error field");
                (_a = window.scrollTo) === null || _a === void 0 ? void 0 : _a.call(window, {
                    top: top_2,
                    behavior: "smooth",
                });
            }
        }
    }
    var available = !loading && notReadyFields.length === 0;
    var submitProps = {
        loading: loading,
        available: available,
        submitButtonText: submitButtonText,
        submitButtonColor: submitButtonColor,
        //should be overwritten on state change
        onSubmit: function () { return onClickSubmit(state); },
        state: state,
    };
    useEffect(function () {
        //console.log({ withSubmitProps: submitProps });
        withSubmitProps === null || withSubmitProps === void 0 ? void 0 : withSubmitProps(submitProps);
    }, [loading, available, submitButtonText, submitButtonColor, firstErrorRef]);
    var Title = renderTitle || DefaultTitle;
    var Submit = function () {
        return noSubmit ? null : renderSubmitComponent ? (renderSubmitComponent(submitProps)) : (React.createElement(Button, { disabled: loading, className: "".concat(available
                ? "".concat(submitButtonColor ? submitButtonColor : "bg-green-500")
                : "bg-gray-300", "  inline-flex justify-center flex-row w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), onClick: function () { return onClickSubmit(state); } },
            loading ? (React.createElement(Div, { className: "mr-2" },
                React.createElement(ActivityIndicator, null))) : null,
            React.createElement(Div, null, submitButtonText || "Save")));
    };
    var globalError = errors === null || errors === void 0 ? void 0 : errors.find(function (x) { return x.propertyPath === GLOBAL_PROPERTY_PATH; });
    return (React.createElement(Form, { className: "w-full", onSubmit: function (e) {
            e.preventDefault();
            onClickSubmit(state);
        } },
        React.createElement(Div, { className: "w-full" },
            React.createElement(Title, { title: title, backButton: backButton }),
            success ? React.createElement(P, { className: successClassName }, success) : null,
            globalError ? (React.createElement(P, { className: errorClassName || "text-red-600" }, globalError.message)) : null,
            fieldsWithReferences.map(function (field, index) {
                var _a, _b;
                // Take the first plugin if the plugin isn't defined.
                var plugin = getPlugin(field.type, plugins);
                if (!plugin) {
                    return (React.createElement(P, null,
                        "Plugin not found (",
                        field.field,
                        ", ",
                        field.type,
                        ")"));
                }
                var next = (_a = fields[index + 1]) === null || _a === void 0 ? void 0 : _a.call(fields);
                var onChange = function (state) { return function (newValueOrGetter) {
                    var _a;
                    var _b;
                    var newValue = typeof newValueOrGetter === "function"
                        ? newValueOrGetter(state[field.field])
                        : newValueOrGetter;
                    var newState = (_a = {}, _a[field.field] = newValue, _a);
                    var newFullState = __assign(__assign({}, state), newState);
                    var fieldErrors = errors.filter(errorOnField(field.field));
                    //check if field still has error(s)
                    var newFieldErrors = (_b = field.hasError) === null || _b === void 0 ? void 0 : _b.call(field, newValue, newFullState);
                    var newFieldErrorsAmount = typeof newFieldErrors === "string"
                        ? 1
                        : Array.isArray(newFieldErrors)
                            ? newFieldErrors.length
                            : 0;
                    if (fieldErrors.length > 0 &&
                        newFieldErrorsAmount !== fieldErrors.length) {
                        var newErrors = errors.filter(function (error) { return !errorOnField(field.field)(error); });
                        var newFieldErrorsArray = typeof newFieldErrors === "string"
                            ? [{ message: newFieldErrors, propertyPath: field.field }]
                            : Array.isArray(newFieldErrors)
                                ? newFieldErrors
                                : [];
                        setErrors(__spreadArray(__spreadArray([], newErrors, true), newFieldErrorsArray, true));
                    }
                    setState(newFullState);
                    //NB: make sure to add the new state to the submitprops
                    withSubmitProps === null || withSubmitProps === void 0 ? void 0 : withSubmitProps(__assign(__assign({}, submitProps), { state: newFullState, onSubmit: function () { return onClickSubmit(newFullState); } }));
                }; };
                var uniqueFieldId = "".concat(id || "", ".").concat(field.field);
                var inputErrors = errors.filter(function (e) {
                    return e.propertyPath === field.field ||
                        e.propertyPath.startsWith("".concat(field.field, "."));
                });
                return ((_b = field.shouldHide) === null || _b === void 0 ? void 0 : _b.call(field, state)) ? null : (React.createElement(Input, { fieldName: field.field, renderInputContainer: renderInputContainer, uniqueFieldId: uniqueFieldId, config: plugin.config, plugin: plugin.component, extra: field.extra, reference: field.reference, next: next, key: "field-".concat(field.field), type: field.type, title: field.titleFromState ? field.titleFromState(state) : field.title, value: state[field.field], onChange: onChange(state), isLast: index === (fields === null || fields === void 0 ? void 0 : fields.length) - 1, startSection: field.startSection, sectionTitle: field.sectionTitle, description: field.description, errors: inputErrors }));
            })),
        Submit ? (React.createElement(Div, { className: "".concat(stickySubmit ? "sticky bottom-0" : "", " ").concat(submitClassName || "mb-2 py-2") },
            React.createElement(Submit, null))) : null));
};
export var setConfig = function (DataForm, config) {
    return function (props) { return (React.createElement(DataForm, __assign({}, config, props))); };
};
export default DataForm;
//# sourceMappingURL=index.js.map