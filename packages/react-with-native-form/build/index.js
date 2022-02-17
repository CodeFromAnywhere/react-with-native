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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = exports.errorOnField = exports.isObject = exports.Input = exports.DefaultInputContainer = exports.inputClass = exports.inputClassWithoutWidth = exports.makeInputField = exports.notEmpty = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var react_2 = __importDefault(require("fast-deep-equal/react"));
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
    var isDeepEqual = (0, react_2.default)(simpleArr1, simpleArr2);
    // console.log({ simpleArr1, simpleArr2, isDeepEqual });
    return isDeepEqual;
};
function notEmpty(value) {
    return value !== null && value !== undefined;
}
exports.notEmpty = notEmpty;
var makeInputField = function (type, config) {
    return function () { return (__assign({ type: type }, config)); };
};
exports.makeInputField = makeInputField;
var GLOBAL_PROPERTY_PATH = "__GLOBAL__";
exports.inputClassWithoutWidth = "text-sm px-3 py-3 text-gray-700 border-gray-300 border rounded-md focus:outline-none";
exports.inputClass = "w-full ".concat(exports.inputClassWithoutWidth);
var DefaultInputContainer = function (_a) {
    var children = _a.children, startSection = _a.startSection, sectionTitle = _a.sectionTitle, title = _a.title, description = _a.description, error = _a.error, errorClassName = _a.errorClassName;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [startSection ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ style: {
                    display: "flex",
                    height: 40,
                    justifyContent: "center",
                    paddingLeft: 10,
                } }, { children: sectionTitle ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Strong, { children: sectionTitle }, void 0) }, void 0)) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { style: { height: 40 } }, void 0)) }), void 0)) : null, (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "pt-0 mb-6" }, { children: [title ? (0, jsx_runtime_1.jsx)(react_with_native_1.Label, __assign({ className: "mb-2 text-sm font-bold" }, { children: title }), void 0) : null, description && ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex mx-3 mb-2 items-start " }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-gray-500 italic" }, { children: description }), void 0) }), void 0)), error ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: errorClassName || "mr-3 mb-2 text-red-500" }, { children: error || "Invalid value" }), void 0)) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: children }, void 0)] }), void 0)] }, void 0));
};
exports.DefaultInputContainer = DefaultInputContainer;
var getPlugin = function (type, plugins) {
    return type
        ? plugins[type]
        : plugins[Object.keys(plugins)[0]];
};
var Input = function (_a) {
    var _b;
    var type = _a.type, plugin = _a.plugin, title = _a.title, onChange = _a.onChange, value = _a.value, isLast = _a.isLast, startSection = _a.startSection, sectionTitle = _a.sectionTitle, next = _a.next, extra = _a.extra, errors = _a.errors, reference = _a.reference, description = _a.description, config = _a.config, uniqueFieldId = _a.uniqueFieldId, renderInputContainer = _a.renderInputContainer, errorClassName = _a.errorClassName, fieldName = _a.fieldName;
    var InputComponent = plugin;
    var InputContainer = renderInputContainer || exports.DefaultInputContainer;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ ref: reference }, { children: (0, jsx_runtime_1.jsx)(InputContainer, __assign({}, {
            description: description,
            sectionTitle: sectionTitle,
            startSection: startSection,
            title: title,
            next: next,
            isLast: isLast,
            id: uniqueFieldId,
            type: type,
            error: !plugin.hideContainerError &&
                ((_b = errors === null || errors === void 0 ? void 0 : errors.find((0, exports.errorOnField)(fieldName))) === null || _b === void 0 ? void 0 : _b.message),
            extra: extra,
            config: config,
            errorClassName: errorClassName,
        }, { children: (0, jsx_runtime_1.jsx)(InputComponent, __assign({}, {
                uniqueFieldId: uniqueFieldId,
                fieldName: fieldName,
                config: config,
                extra: extra,
                onChange: onChange,
                value: value,
                errors: errors,
                errorClassName: errorClassName,
            }), void 0) }), void 0) }), void 0));
};
exports.Input = Input;
var DefaultTitle = function (_a) {
    var title = _a.title, backButton = _a.backButton;
    return title ? ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex items-center mb-10 " }, { children: [backButton && ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ onClick: backButton, className: "p-4 cursor-pointer" }, { children: "back" }), void 0)), (0, jsx_runtime_1.jsx)(react_with_native_1.H2, __assign({ className: "text-2xl font-bold" }, { children: title }), void 0)] }), void 0)) : null;
};
function isObject(object) {
    return object != null && typeof object === "object";
}
exports.isObject = isObject;
var errorOnField = function (fieldName) { return function (error) {
    return error.propertyPath === fieldName ||
        error.propertyPath.startsWith(fieldName + ".");
}; };
exports.errorOnField = errorOnField;
var DataForm = function (_a) {
    var _b, _c;
    var fields = _a.fields, defaultValues = _a.defaultValues, initialValues = _a.initialValues, onSubmit = _a.onSubmit, withSubmitProps = _a.withSubmitProps, noSubmit = _a.noSubmit, submitButtonText = _a.submitButtonText, submitButtonColor = _a.submitButtonColor, title = _a.title, backButton = _a.backButton, plugins = _a.plugins, renderSubmitComponent = _a.renderSubmitComponent, renderInputContainer = _a.renderInputContainer, stickySubmit = _a.stickySubmit, renderTitle = _a.renderTitle, submitClassName = _a.submitClassName, errorClassName = _a.errorClassName, successClassName = _a.successClassName;
    //sometimes use defaultValues (deprecated)
    initialValues = initialValues ? initialValues : defaultValues;
    if (!plugins) {
        throw new Error("No plugins given");
    }
    //Generate unique id for the form
    var id = (0, react_1.useState)("Form".concat(String(Math.round(Math.random() * 1000000))))[0];
    var _d = (0, react_1.useState)([]), fieldsWithReferences = _d[0], setFieldsWithReferences = _d[1];
    // need to have because we want to see when it's changed
    var _e = (0, react_1.useState)([]), fieldsWithoutReferences = _e[0], setFieldsWithoutReferences = _e[1];
    (0, react_1.useEffect)(function () {
        var fieldsWithoutReferencesLocal = fields.map(function (f) { return f(); });
        if (
        // fieldsWithoutReferences.length === 0 && //NB: why was this here? caused the fields not to refresh
        !sameFieldArray(fieldsWithoutReferencesLocal, fieldsWithoutReferences)) {
            setFieldsWithReferences(fieldsWithoutReferencesLocal.map(function (fieldWithoutReference) {
                return __assign(__assign({}, fieldWithoutReference), { reference: (0, react_1.createRef)() });
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
    var _f = (0, react_1.useState)(initialState), state = _f[0], setState = _f[1];
    //used to check if the initialValues have changed
    var _g = (0, react_1.useState)(), initialValuesState = _g[0], setInitialValuesState = _g[1];
    (0, react_1.useEffect)(function () {
        if (!initialValuesState || !(0, react_2.default)(initialState, initialValuesState)) {
            // console.log("initialValues have changed");
            setState(initialState);
            setInitialValuesState(initialState);
        }
    }, [initialState]);
    var _h = (0, react_1.useState)(false), loading = _h[0], setLoading = _h[1];
    var _j = (0, react_1.useState)([]), errors = _j[0], setErrors = _j[1];
    var _k = (0, react_1.useState)(), success = _k[0], setSuccess = _k[1];
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
            var firstNotReadyField = fieldsWithReferences.filter(function (x) { return newErrors_1.find((0, exports.errorOnField)(x.field)) !== undefined; })[0];
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
    (0, react_1.useEffect)(function () {
        //console.log({ withSubmitProps: submitProps });
        withSubmitProps === null || withSubmitProps === void 0 ? void 0 : withSubmitProps(submitProps);
    }, [loading, available, submitButtonText, submitButtonColor, firstErrorRef]);
    var Title = renderTitle || DefaultTitle;
    var Submit = function () {
        return noSubmit ? null : renderSubmitComponent ? (renderSubmitComponent(submitProps)) : ((0, jsx_runtime_1.jsxs)(react_with_native_1.Button, __assign({ disabled: loading, className: "".concat(available
                ? "".concat(submitButtonColor ? submitButtonColor : "bg-green-500")
                : "bg-gray-300", "  inline-flex justify-center flex-row w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"), onClick: function () { return onClickSubmit(state); } }, { children: [loading ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "mr-2" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.ActivityIndicator, {}, void 0) }), void 0)) : null, (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: submitButtonText || "Save" }, void 0)] }), void 0));
    };
    var globalError = errors === null || errors === void 0 ? void 0 : errors.find(function (x) { return x.propertyPath === GLOBAL_PROPERTY_PATH; });
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Form, __assign({ className: "w-full", onSubmit: function (e) {
            e.preventDefault();
            onClickSubmit(state);
        } }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: [(0, jsx_runtime_1.jsx)(Title, { title: title, backButton: backButton }, void 0), success ? (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: successClassName }, { children: success }), void 0) : null, globalError ? ((0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: errorClassName || "text-red-600" }, { children: globalError.message }), void 0)) : null, fieldsWithReferences.map(function (field, index) {
                        var _a, _b;
                        // Take the first plugin if the plugin isn't defined.
                        var plugin = getPlugin(field.type, plugins);
                        if (!plugin) {
                            return ((0, jsx_runtime_1.jsxs)(react_with_native_1.P, { children: ["Plugin not found (", field.field, ", ", field.type, ")"] }, void 0));
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
                            var fieldErrors = errors.filter((0, exports.errorOnField)(field.field));
                            //check if field still has error(s)
                            var newFieldErrors = (_b = field.hasError) === null || _b === void 0 ? void 0 : _b.call(field, newValue, newFullState);
                            var newFieldErrorsAmount = typeof newFieldErrors === "string"
                                ? 1
                                : Array.isArray(newFieldErrors)
                                    ? newFieldErrors.length
                                    : 0;
                            if (fieldErrors.length > 0 &&
                                newFieldErrorsAmount !== fieldErrors.length) {
                                var newErrors = errors.filter(function (error) { return !(0, exports.errorOnField)(field.field)(error); });
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
                        return ((_b = field.shouldHide) === null || _b === void 0 ? void 0 : _b.call(field, state)) ? null : ((0, jsx_runtime_1.jsx)(exports.Input, { fieldName: field.field, renderInputContainer: renderInputContainer, uniqueFieldId: uniqueFieldId, config: plugin.config, plugin: plugin.component, extra: field.extra, reference: field.reference, next: next, type: field.type, title: field.titleFromState ? field.titleFromState(state) : field.title, value: state[field.field], onChange: onChange(state), isLast: index === (fields === null || fields === void 0 ? void 0 : fields.length) - 1, startSection: field.startSection, sectionTitle: field.sectionTitle, description: field.description, errors: inputErrors }, "field-".concat(field.field)));
                    })] }), void 0), Submit ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "".concat(stickySubmit ? "sticky bottom-0" : "", " ").concat(submitClassName || "mb-2 py-2") }, { children: (0, jsx_runtime_1.jsx)(Submit, {}, void 0) }), void 0)) : null] }), void 0));
};
var setConfig = function (DataForm, config) {
    return function (props) { return ((0, jsx_runtime_1.jsx)(DataForm, __assign({}, config, props), void 0)); };
};
exports.setConfig = setConfig;
exports.default = DataForm;
//# sourceMappingURL=index.js.map