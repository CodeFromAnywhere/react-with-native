"use strict";
exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 7751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z8": () => (/* reexport */ components_namespaceObject),
  "iY": () => (/* reexport */ src_pages_namespaceObject),
  "g3": () => (/* reexport */ StoreProvider)
});

// UNUSED EXPORTS: api, initialValues, useStore

// NAMESPACE OBJECT: ../../packages/ui/src/pages.ts
var src_pages_namespaceObject = {};
__webpack_require__.r(src_pages_namespaceObject);
__webpack_require__.d(src_pages_namespaceObject, {
  "form": () => (pages_form),
  "index": () => (pages),
  "utilities": () => (utilities)
});

// NAMESPACE OBJECT: ../../packages/ui/src/components.ts
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "v": () => (components_Menu)
});

// EXTERNAL MODULE: external "sensible-core"
var external_sensible_core_ = __webpack_require__(7023);
;// CONCATENATED MODULE: ../../packages/ui/env.json
const env_namespaceObject = JSON.parse('{"isDev":true,"runLocalServer":true,"remoteServer":"","localServer":"http://localhost:4000"}');
;// CONCATENATED MODULE: ../../packages/ui/src/util/isDev.tsx
// this works in next.js, but does it also work in react and other frontend web frameworks?
const isDev = "production" === "development";

;// CONCATENATED MODULE: ../../packages/ui/src/api.ts



const { localServer , remoteServer , runLocalServer  } = env_namespaceObject;
const apiUrl = isDev && runLocalServer ? localServer : remoteServer;
const api = (0,external_sensible_core_.makeApi)({
    apiUrl
});

// EXTERNAL MODULE: ../../packages/react-with-native-store/build/index.js
var build = __webpack_require__(5914);
;// CONCATENATED MODULE: ../../packages/ui/src/store.ts

const initialValues = {
    name: null,
    email: null
};
const StoreProvider = (0,build.createStoreProvider)({
    initialValues,
    baseKey: "test"
});
const useStore = (0,build.createUseStore)(initialValues);
/* harmony default export */ const store = (useStore);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../packages/react-with-native/build/index.js
var react_with_native_build = __webpack_require__(9734);
;// CONCATENATED MODULE: ../../packages/ui/src/pages/index.tsx



const HomePage = ()=>{
    const [name, setName] = store("name");
    const [email, setEmail] = store("email");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_with_native_build.Div, {
        className: "p-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.P, {
                children: "Hello World!"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_with_native_build.Div, {
                className: "bg-gray-100 rounded-xl p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.P, {
                        children: "Your name:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Input, {
                        value: name || "",
                        onChange: (e)=>setName(e.target.value)
                        ,
                        className: "bg-blue-100 rounded-xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_with_native_build.P, {
                        children: [
                            "Your email: ",
                            email
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Input, {
                        value: email || "",
                        onChange: (e)=>setEmail(e.target.value)
                        ,
                        className: "bg-blue-100 rounded-xl"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (HomePage);

// EXTERNAL MODULE: ../../packages/react-with-native-form/build/index.js
var react_with_native_form_build = __webpack_require__(9935);
var react_with_native_form_build_default = /*#__PURE__*/__webpack_require__.n(react_with_native_form_build);
// EXTERNAL MODULE: ../../packages/react-with-native-form-inputs/build/index.js
var react_with_native_form_inputs_build = __webpack_require__(9235);
;// CONCATENATED MODULE: ../../packages/ui/src/components/Form.tsx


const Form_text = {
    component: react_with_native_form_inputs_build.TextInput
};
const Form_password = {
    component: react_with_native_form_inputs_build.PasswordInput
};
const plugins = {
    text: Form_text,
    password: Form_password
};
const makeField = (type, config)=>(0,react_with_native_form_build.makeInputField)(type, config)
;
const Form = (props)=>(0,react_with_native_form_build.setConfig)((react_with_native_form_build_default()), {
        plugins
    })(props)
;

;// CONCATENATED MODULE: ../../packages/ui/src/pages/form.tsx



const fields = [
    makeField("text", {
        field: "username",
        title: "Username",
        hasError: (value)=>value.length === 0 ? "Please fill in a username" : false
    }),
    makeField("password", {
        field: "password",
        title: "Password",
        hasError: (value)=>value.length === 0 ? "Please fill in a password" : false
    }), 
];
// Now your form can be rendered like this
// Make sure to provide the generic based on the inputs type interfaces
// otherwise your form won't be typesafe!
const FormPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Div, {
        className: "p-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Form, {
            title: "Login",
            fields: fields,
            onSubmit: (values, resolve, reject)=>{
                //do something with those values
                const message = `Form submitted. Hello, ${values.username}`;
                resolve(message);
            }
        })
    });
};
/* harmony default export */ const pages_form = (FormPage);

// EXTERNAL MODULE: ../../packages/react-with-native-notification/build/index.js
var react_with_native_notification_build = __webpack_require__(1574);
// EXTERNAL MODULE: ../../packages/react-with-native-alert/build/index.js
var react_with_native_alert_build = __webpack_require__(5702);
;// CONCATENATED MODULE: ../../packages/ui/src/pages/utilities.tsx




const utilities_HomePage = ()=>{
    const alert = (0,react_with_native_alert_build.useAlert)();
    console.log({
        alert
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_with_native_build.Div, {
        className: "p-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.P, {
                children: "Utilities"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_with_native_build.Div, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Button, {
                        onClick: ()=>(0,react_with_native_notification_build/* toast */.Am)({
                                title: "Yes yes",
                                body: "This is a toast"
                            })
                        ,
                        className: "bg-black text-white p-2 rounded-xl",
                        children: "Get a notification"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Button, {
                        onClick: ()=>alert?.("Hello world!")
                        ,
                        className: "bg-black text-white p-2 rounded-xl",
                        children: "Get an alert"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const utilities = (utilities_HomePage);

;// CONCATENATED MODULE: ../../packages/ui/src/pages.ts





// EXTERNAL MODULE: ../../packages/react-with-native-router/build/index.js
var react_with_native_router_build = __webpack_require__(8631);
;// CONCATENATED MODULE: ../../packages/ui/src/components/Menu.tsx




const Menu = ({ menu  })=>{
    const router = (0,react_with_native_router_build.useRouter)();
    if (!menu) {
        menu = Object.keys(src_pages_namespaceObject);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Ul, {
        children: menu.map((page)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Li, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_with_native_build.Button, {
                    className: "hover:text-blue-800",
                    onClick: ()=>router.push(page === "index" ? "/" : page)
                    ,
                    children: page.charAt(0).toUpperCase().concat(page.slice(1))
                })
            });
        })
    });
};
/* harmony default export */ const components_Menu = (Menu);

;// CONCATENATED MODULE: ../../packages/ui/src/components.ts



;// CONCATENATED MODULE: ../../packages/ui/src/index.ts







/***/ }),

/***/ 8190:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAlert = exports.AlertContext = void 0;
var React = __importStar(__webpack_require__(6689));
exports.AlertContext = React.createContext(null);
var useAlert = function () {
    var alert = React.useContext(exports.AlertContext);
    return alert;
};
exports.useAlert = useAlert;
//# sourceMappingURL=Alert.js.map

/***/ }),

/***/ 2821:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AlertProvider = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_1 = __webpack_require__(6689);
var Alert_1 = __webpack_require__(8190);
var react_2 = __webpack_require__(8610);
var react_3 = __webpack_require__(6689);
var react_with_native_1 = __webpack_require__(9734);
var AlertProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState([]), alertState = _b[0], setAlertState = _b[1];
    var firstAlert = alertState[0];
    // console.log({ firstAlert, alertState });
    var alert = function (title, message, buttons, options) {
        var newState = { title: title, message: message, buttons: buttons, options: options };
        var newAlertState = alertState.concat([newState]);
        // console.log("push alert state", { newState, alertState, newAlertState });
        setAlertState(newAlertState);
    };
    var renderAlert = function (firstAlert) {
        if (!firstAlert) {
            console.log("HMMMM");
            return null;
        }
        console.log("Should render alert");
        var title = firstAlert.title, buttons = firstAlert.buttons, message = firstAlert.message, options = firstAlert.options;
        var value = undefined; //TODO: make it possible to fill in value here (prompt-alert)
        return (jsx_runtime_1.jsxs("div", __assign({ className: "absolute w-screen h-screen inset-0" }, { children: ["TEST", jsx_runtime_1.jsx(react_2.Transition, __assign({ appear: true, show: true, as: react_3.Fragment }, { children: jsx_runtime_1.jsx(react_2.Dialog, __assign({ as: "div", className: "fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm", onClose: function () {
                            var _a;
                            if ((options === null || options === void 0 ? void 0 : options.cancelable) === false)
                                return;
                            (_a = options === null || options === void 0 ? void 0 : options.onDismiss) === null || _a === void 0 ? void 0 : _a.call(options);
                            setAlertState(alertState.slice(1));
                        } }, { children: jsx_runtime_1.jsxs("div", __assign({ className: "min-h-screen px-4 text-center" }, { children: [jsx_runtime_1.jsx(react_2.Transition.Child, __assign({ as: react_3.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: jsx_runtime_1.jsx(react_2.Dialog.Overlay, { className: "fixed inset-0" }, void 0) }), void 0), jsx_runtime_1.jsx("span", __assign({ className: "inline-block h-screen align-middle", "aria-hidden": "true" }, { children: "\u200B" }), void 0), jsx_runtime_1.jsx(react_2.Transition.Child, __assign({ as: react_3.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" }, { children: jsx_runtime_1.jsxs(react_with_native_1.Div, __assign({ className: "inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl" }, { children: [title ? (jsx_runtime_1.jsx(react_2.Dialog.Title, __assign({ as: "h3", className: "text-lg font-medium leading-6 text-gray-900" }, { children: title }), void 0)) : null, jsx_runtime_1.jsx(react_with_native_1.P, __assign({ className: "py-6" }, { children: message }), void 0), jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ className: "flex flex-row gap-4" }, { children: buttons === null || buttons === void 0 ? void 0 : buttons.map(function (button, index) {
                                                    var buttonColor = button.style === "cancel"
                                                        ? "bg-gray-300 hover:bg-gray-400"
                                                        : button.style === "destructive"
                                                            ? "bg-red-500 hover:bg-red-600"
                                                            : "bg-blue-500 hover:bg-blue-600";
                                                    return (jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ onClick: function () {
                                                            var _a;
                                                            (_a = button.onPress) === null || _a === void 0 ? void 0 : _a.call(button, value);
                                                            setAlertState(alertState.slice(1));
                                                        }, className: "cursor-pointer py-2 " + buttonColor + " rounded-md flex flex-1 items-center justify-center" }, { children: button.text }), "button" + index));
                                                }) }), void 0)] }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0)] }), void 0));
    };
    return (jsx_runtime_1.jsxs(Alert_1.AlertContext.Provider, __assign({ value: alert }, { children: [renderAlert(firstAlert), children] }), void 0));
};
exports.AlertProvider = AlertProvider;
//# sourceMappingURL=AlertProvider.js.map

/***/ }),

/***/ 5702:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8190), exports);
__exportStar(__webpack_require__(2821), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6854:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_datepicker_1 = __importDefault(__webpack_require__(8743));
var react_with_native_form_1 = __webpack_require__(9935);
// CSS Modules, react-datepicker-cssmodules.css
var DateInput = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(react_datepicker_1.default, { selected: value, onChange: function (date) {
            console.log("date", date);
            onChange(date);
        }, dateFormat: "dd-MM-yyyy", className: react_with_native_form_1.inputClass }));
};
exports.DateInput = DateInput;
exports.DateInput.defaultInitialValue = null;
exports["default"] = exports.DateInput;
//# sourceMappingURL=DateInput.js.map

/***/ }),

/***/ 4035:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DateInput_1 = __importDefault(__webpack_require__(6854));
__exportStar(__webpack_require__(1453), exports);
exports["default"] = DateInput_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1453:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateInputType = void 0;
var DateInputType = /** @class */ (function () {
    function DateInputType() {
    }
    return DateInputType;
}());
exports.DateInputType = DateInputType;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 5865:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatetimeInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_datetime_1 = __importDefault(__webpack_require__(611));
var react_1 = __webpack_require__(6689);
var DatetimeInput = function (_a) {
    var extra = _a.extra, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["extra", "value", "onChange"]);
    var newExtra = __assign(__assign({}, extra), { type: "dateTime" });
    var _b = (0, react_1.useState)(new Date()), date = _b[0], setDate = _b[1];
    //return <TextInput {...props} extra={newExtra} />;
    var handleChange = function (date) {
        console.warn("A date has been picked: ", date);
        setDate(date);
        onChange(date);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: 
        // @ts-ignore
        (0, jsx_runtime_1.jsx)(react_datetime_1.default, __assign({}, props, { value: value ? new Date(value) : new Date(), initialValue: date, onChange: function (value) {
                handleChange(new Date(value));
            } })) }));
};
exports.DatetimeInput = DatetimeInput;
exports.DatetimeInput.defaultInitialValue = new Date();
exports["default"] = exports.DatetimeInput;
//# sourceMappingURL=Datetime.js.map

/***/ }),

/***/ 1569:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Datetime_1 = __importDefault(__webpack_require__(5865));
exports["default"] = Datetime_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1260:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileInputType = exports.FileInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_1 = __webpack_require__(6689);
var react_dropzone_1 = __webpack_require__(6358);
var react_with_native_1 = __webpack_require__(9734);
// import Icon from "./icon.svg";
var FileInput = function (_a) {
    var extra = _a.extra, onChange = _a.onChange;
    var _b = (0, react_dropzone_1.useDropzone)({}), getRootProps = _b.getRootProps, getInputProps = _b.getInputProps, acceptedFiles = _b.acceptedFiles;
    (0, react_1.useEffect)(function () {
        onChange(acceptedFiles);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acceptedFiles]);
    var files = acceptedFiles.map(function (file) { return ((0, jsx_runtime_1.jsx)(react_with_native_1.Li, __assign({ className: "text-sm" }, { children: file.path }), file.path)); });
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md" }, getRootProps(), { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "space-y-1 text-center" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex text-sm text-center text-gray-600" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Label, { htmlFor: "file-upload", className: "relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" }), (0, jsx_runtime_1.jsx)(react_with_native_1.Input, __assign({ id: "file-upload", type: "file" }, getInputProps()))] })), (0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-xs text-gray-500" }, { children: "PNG, JPG, GIF en PDF tot 15MB" })), acceptedFiles.length > 0 ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Aside, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Ul, { children: files }) })) : null] })) })));
};
exports.FileInput = FileInput;
exports.FileInput.defaultInitialValue = [];
var FileInputType = /** @class */ (function () {
    function FileInputType() {
    }
    return FileInputType;
}());
exports.FileInputType = FileInputType;
exports["default"] = exports.FileInput;
//# sourceMappingURL=FileInput.js.map

/***/ }),

/***/ 1847:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var FileInput_1 = __importDefault(__webpack_require__(1260));
exports["default"] = FileInput_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9235:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4035), exports);
__exportStar(__webpack_require__(1569), exports);
__exportStar(__webpack_require__(1847), exports);
__exportStar(__webpack_require__(7233), exports);
__exportStar(__webpack_require__(3008), exports);
__exportStar(__webpack_require__(4046), exports);
__exportStar(__webpack_require__(9810), exports);
__exportStar(__webpack_require__(3788), exports);
__exportStar(__webpack_require__(2346), exports);
__exportStar(__webpack_require__(3405), exports);
__exportStar(__webpack_require__(693), exports);
__exportStar(__webpack_require__(6562), exports);
__exportStar(__webpack_require__(2202), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1067:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_1 = __webpack_require__(6689);
var MapInput = function (_a) {
    var _b, _c, _d;
    var value = _a.value, onChange = _a.onChange, extra = _a.extra, config = _a.config;
    //amsterdam
    var mapRef = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(""), search = _e[0], setSearch = _e[1];
    var _f = (0, react_1.useState)([]), suggestions = _f[0], setSuggestions = _f[1];
    var _g = (0, react_1.useState)({
        width: "100%",
        height: 300,
        latitude: value === null || value === void 0 ? void 0 : value.latitude,
        longitude: value === null || value === void 0 ? void 0 : value.longitude,
        zoom: value === null || value === void 0 ? void 0 : value.zoom,
    }), viewport = _g[0], setViewport = _g[1];
    // Teach Autosuggest how to calculate suggestions for any given input value.
    var getSuggestions = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var inputValue, url, suggestions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputValue = value.trim().toLowerCase();
                    if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) {
                        return [2 /*return*/, []];
                    }
                    url = "https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(inputValue, ".json?access_token=").concat(config === null || config === void 0 ? void 0 : config.mapboxKey, "&limit=4");
                    return [4 /*yield*/, fetch(url, {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                // "User-Agent": "*",
                            },
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (response) {
                            return response;
                        })
                            .catch(function (error) {
                            console.error(error);
                        })];
                case 1:
                    suggestions = _a.sent();
                    return [2 /*return*/, (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0 ? [] : (suggestions === null || suggestions === void 0 ? void 0 : suggestions.features) || []];
            }
        });
    }); };
    // const debouncedGetSuggestions = useMemo(
    //   () => debounce(getSuggestions, 2000, { trailing: true }),
    //   []
    // );
    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    var getSuggestionValue = function (suggestion) { return suggestion.place_name; };
    // Use your imagination to render suggestions.
    var renderSuggestion = function (suggestion) {
        var text = suggestion.place_name;
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "bg-white hover:bg-gray-200 p-4" }, { children: (text === null || text === void 0 ? void 0 : text.length) > 30 ? text.slice(0, 28) + ".." : text })));
    };
    var inputProps = {
        placeholder: "Find your place",
        value: search,
        onChange: function (e, _a) {
            var newValue = _a.newValue;
            return setSearch(newValue);
        },
    };
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    var onSuggestionsFetchRequested = function (_a) {
        var value = _a.value;
        return __awaiter(void 0, void 0, void 0, function () {
            var newSuggestions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getSuggestions(value)];
                    case 1:
                        newSuggestions = _b.sent();
                        if (newSuggestions) {
                            setSuggestions(newSuggestions);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Autosuggest will call this function every time you need to clear suggestions.
    var onSuggestionsClearRequested = function () {
        setSuggestions([]);
    };
    var selectSuggestion = function (_, suggestion) {
        var latitude = suggestion.suggestion.center[1];
        var longitude = suggestion.suggestion.center[0];
        console.log("sugg", suggestion.suggestion);
        var zoom = 14;
        if (suggestion.suggestion.bbox) {
            var latDiff = suggestion.suggestion.bbox[3] - suggestion.suggestion.bbox[1];
            var lngDiff = suggestion.suggestion.bbox[2] - suggestion.suggestion.bbox[0];
            var avgDiff = (latDiff + lngDiff) / 2;
            zoom = Math.round(Math.log(2500 / avgDiff));
        }
        var nextViewport = {
            width: "100%",
            height: 300,
            latitude: latitude,
            longitude: longitude,
            zoom: zoom,
        };
        //@ts-ignore
        setViewport(nextViewport);
        onChange({
            latitude: nextViewport.latitude,
            longitude: nextViewport.longitude,
            zoom: nextViewport === null || nextViewport === void 0 ? void 0 : nextViewport.zoom,
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "w-full bg-white border rounded-lg" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full bg-white" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "m-3" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Latitude:" }), " ", (_b = value === null || value === void 0 ? void 0 : value.latitude) === null || _b === void 0 ? void 0 : _b.toFixed(4)] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Longitude:" }), " ", (_c = value === null || value === void 0 ? void 0 : value.longitude) === null || _c === void 0 ? void 0 : _c.toFixed(4)] }), (extra === null || extra === void 0 ? void 0 : extra.showZoom) && ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Zoom:" }), " ", (_d = value === null || value === void 0 ? void 0 : value.zoom) === null || _d === void 0 ? void 0 : _d.toFixed(1)] }))] }))] })));
};
exports.MapInput = MapInput;
var defaultLatidue = 52.377956;
var defaultLongitude = 4.89707;
var defaultZoom = 11;
exports.MapInput.defaultInitialValue = {
    latitude: defaultLatidue,
    longitude: defaultLongitude,
    zoom: defaultZoom,
};
exports["default"] = exports.MapInput;
//# sourceMappingURL=MapInput.js.map

/***/ }),

/***/ 7233:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var MapInput_1 = __importDefault(__webpack_require__(1067));
__exportStar(__webpack_require__(1650), exports);
exports["default"] = MapInput_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1650:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapInputType = void 0;
var MapInputType = /** @class */ (function () {
    function MapInputType() {
    }
    return MapInputType;
}());
exports.MapInputType = MapInputType;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 3008:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberInputType = exports.NumberInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var text_1 = __importDefault(__webpack_require__(3405));
var NumberInput = function (_a) {
    var extra = _a.extra, onChange = _a.onChange, value = _a.value, props = __rest(_a, ["extra", "onChange", "value"]);
    var newExtra = __assign(__assign({}, extra), { type: "number" });
    return ((0, jsx_runtime_1.jsx)(text_1.default, __assign({}, props, { value: String(value), onChange: function (value) {
            onChange(Number(value));
        }, extra: newExtra })));
};
exports.NumberInput = NumberInput;
var NumberInputType = /** @class */ (function () {
    function NumberInputType() {
    }
    return NumberInputType;
}());
exports.NumberInputType = NumberInputType;
exports.NumberInput.defaultInitialValue = null;
exports["default"] = exports.NumberInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4046:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var text_1 = __importDefault(__webpack_require__(3405));
var PasswordInput = function (_a) {
    var extra = _a.extra, props = __rest(_a, ["extra"]);
    var newExtra = __assign(__assign({}, extra), { isPassword: true });
    return (0, jsx_runtime_1.jsx)(text_1.default, __assign({}, props, { extra: newExtra }));
};
exports.PasswordInput = PasswordInput;
exports.PasswordInput.defaultInitialValue = "";
exports["default"] = exports.PasswordInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9810:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhoneInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var text_1 = __importDefault(__webpack_require__(3405));
var PhoneInput = function (_a) {
    var extra = _a.extra, props = __rest(_a, ["extra"]);
    var newExtra = __assign(__assign({}, extra), { type: "phone" });
    return (0, jsx_runtime_1.jsx)(text_1.default, __assign({}, props, { extra: newExtra }));
};
exports.PhoneInput = PhoneInput;
exports.PhoneInput.defaultInitialValue = "";
exports["default"] = exports.PhoneInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3788:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectInputType = exports.SelectInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_with_native_select_1 = __importDefault(__webpack_require__(5061));
var SelectInput = function (_a) {
    var value = _a.value, extra = _a.extra, onChange = _a.onChange;
    //console.log({ value, extraOptions: extra.options });
    return ((0, jsx_runtime_1.jsx)(react_with_native_select_1.default, { className: "w-full", title: extra.title || "", options: extra.options, value: value, onChange: function (value) {
            if (value) {
                onChange(value);
            }
        } }));
};
exports.SelectInput = SelectInput;
exports.SelectInput.defaultInitialValue = null;
var SelectInputType = /** @class */ (function () {
    function SelectInputType() {
    }
    return SelectInputType;
}());
exports.SelectInputType = SelectInputType;
exports["default"] = exports.SelectInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2346:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarsInputType = exports.StarsInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_stars_1 = __importDefault(__webpack_require__(9169));
var StarsInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, extra = _a.extra, config = _a.config;
    config = config || {};
    // later, this can be extrahered into a react-with-native-stars component, because now this will only work on web
    return ((0, jsx_runtime_1.jsx)(react_stars_1.default, { className: "m-3", count: 5, value: typeof value === "number" ? value : 0, onChange: onChange, half: false, size: 24, color2: "#ffd700" }));
};
exports.StarsInput = StarsInput;
exports.StarsInput.defaultInitialValue = null;
var StarsInputType = /** @class */ (function () {
    function StarsInputType() {
    }
    return StarsInputType;
}());
exports.StarsInputType = StarsInputType;
exports["default"] = exports.StarsInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3405:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextInputType = exports.TextInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_with_native_form_1 = __webpack_require__(9935);
var react_with_native_1 = __webpack_require__(9734);
var TextInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, extra = _a.extra, config = _a.config, errors = _a.errors;
    config = config || {};
    var hasError = errors && errors.length > 0;
    var inputClassWithError = "".concat(react_with_native_form_1.inputClass).concat(hasError
        ? config.errorClassName
            ? config.errorClassName
            : " border border-red-400"
        : "");
    var onChangeText = function (value) { return onChange(value); };
    var placeholder = extra === null || extra === void 0 ? void 0 : extra.placeholder;
    var maxLength = extra === null || extra === void 0 ? void 0 : extra.maxLength;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Input, { type: (extra === null || extra === void 0 ? void 0 : extra.type) ? extra.type : (extra === null || extra === void 0 ? void 0 : extra.isPassword) ? "password" : undefined, className: inputClassWithError, style: { padding: 5, marginTop: 5, marginBottom: 5 }, value: value, onChange: function (event) { return onChangeText(event.target.value); }, placeholder: placeholder, maxLength: extra === null || extra === void 0 ? void 0 : extra.maxLength, autoComplete: extra === null || extra === void 0 ? void 0 : extra.autoComplete, required: extra === null || extra === void 0 ? void 0 : extra.required, disabled: extra === null || extra === void 0 ? void 0 : extra.disabled, native: {
            value: value,
            onChangeText: onChangeText,
            placeholder: placeholder,
            maxLength: maxLength,
            secureTextEntry: extra === null || extra === void 0 ? void 0 : extra.isPassword,
        } }));
};
exports.TextInput = TextInput;
exports.TextInput.defaultInitialValue = "";
var TextInputType = /** @class */ (function () {
    function TextInputType() {
    }
    return TextInputType;
}());
exports.TextInputType = TextInputType;
exports["default"] = exports.TextInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextAreaInputType = exports.TextAreaInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_with_native_1 = __webpack_require__(9734);
var TextAreaInput = function (_a) {
    var value = _a.value, extra = _a.extra, config = _a.config, onChange = _a.onChange, errors = _a.errors;
    var hasError = errors && errors.length > 0;
    //
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.TextArea, { rows: extra === null || extra === void 0 ? void 0 : extra.rows, maxLength: extra === null || extra === void 0 ? void 0 : extra.maxLength, className: (config === null || config === void 0 ? void 0 : config.replaceClassName) ||
            "block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ".concat(hasError ? (config === null || config === void 0 ? void 0 : config.errorClassName) || "border-red-600" : "", " ").concat(config === null || config === void 0 ? void 0 : config.extraClassName), value: value, onChange: function (event) {
            onChange(event.target.value);
        } }));
};
exports.TextAreaInput = TextAreaInput;
exports.TextAreaInput.defaultInitialValue = "";
var TextAreaInputType = /** @class */ (function () {
    function TextAreaInputType() {
    }
    return TextAreaInputType;
}());
exports.TextAreaInputType = TextAreaInputType;
exports["default"] = exports.TextAreaInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 344:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeInput = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var rc_time_picker_1 = __importDefault(__webpack_require__(2233));
var react_with_native_form_1 = __webpack_require__(9935);
var moment_1 = __importDefault(__webpack_require__(2245));
// CSS Modules, react-datepicker-cssmodules.css
var TimeInput = function (_a) {
    var extra = _a.extra, value = _a.value, onChange = _a.onChange;
    return ((0, jsx_runtime_1.jsx)(rc_time_picker_1.default, { onChange: function (time) { return onChange(time); }, value: (0, moment_1.default)(value), showSecond: false, format: "h:mm a", use12Hours: true, className: react_with_native_form_1.inputClass }));
};
exports.TimeInput = TimeInput;
exports.TimeInput.defaultInitialValue = new Date();
exports["default"] = exports.TimeInput;
//# sourceMappingURL=TimeInput.js.map

/***/ }),

/***/ 6562:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var TimeInput_1 = __importDefault(__webpack_require__(344));
__exportStar(__webpack_require__(5260), exports);
exports["default"] = TimeInput_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5260:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeInputType = void 0;
var TimeInputType = /** @class */ (function () {
    function TimeInputType() {
    }
    return TimeInputType;
}());
exports.TimeInputType = TimeInputType;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 2202:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToggleInputType = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_with_native_1 = __webpack_require__(9734);
var ToggleInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, extra = _a.extra, config = _a.config, uniqueFieldId = _a.uniqueFieldId, errors = _a.errors;
    config = config || {};
    var defaultClass = "";
    var hasError = errors && errors.length > 0;
    var errorClass = hasError
        ? config.errorClassName
            ? config.errorClassName
            : " border border-red-400"
        : "";
    var classWithError = config.replaceClassName
        ? "".concat(config.replaceClassName, " ").concat(errorClass)
        : "".concat(defaultClass, " ").concat(config.extraClassName, " ").concat(errorClass);
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Toggle, { id: uniqueFieldId, 
                // class not working with border on checkbox
                className: classWithError, checked: value, onChange: function (value) { return onChange(value); } }), (extra === null || extra === void 0 ? void 0 : extra.label) ? ((0, jsx_runtime_1.jsx)(react_with_native_1.Label, __assign({ className: "pl-3 select-none ".concat(hasError ? "text-red-500" : ""), htmlFor: uniqueFieldId }, { children: extra.label }))) : null] })));
};
ToggleInput.defaultInitialValue = false;
var ToggleInputType = /** @class */ (function () {
    function ToggleInputType() {
    }
    return ToggleInputType;
}());
exports.ToggleInputType = ToggleInputType;
exports["default"] = ToggleInput;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9935:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setConfig = exports.errorOnField = exports.isObject = exports.Input = exports.DefaultInputContainer = exports.inputClass = exports.inputClassWithoutWidth = exports.makeInputField = exports.notEmpty = exports.deepEqual = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var react_1 = __webpack_require__(6689);
var react_with_native_1 = __webpack_require__(9734);
var react_2 = __importDefault(__webpack_require__(7646));
exports.deepEqual = react_2.default;
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
    var isDeepEqual = react_2.default(simpleArr1, simpleArr2);
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
exports.inputClass = "w-full " + exports.inputClassWithoutWidth;
var DefaultInputContainer = function (_a) {
    var children = _a.children, startSection = _a.startSection, sectionTitle = _a.sectionTitle, title = _a.title, description = _a.description, error = _a.error, errorClassName = _a.errorClassName;
    return (jsx_runtime_1.jsxs(react_with_native_1.Div, { children: [startSection ? (jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ style: {
                    display: "flex",
                    height: 40,
                    justifyContent: "center",
                    paddingLeft: 10,
                } }, { children: sectionTitle ? (jsx_runtime_1.jsx(react_with_native_1.P, { children: jsx_runtime_1.jsx(react_with_native_1.Strong, { children: sectionTitle }, void 0) }, void 0)) : (jsx_runtime_1.jsx(react_with_native_1.Div, { style: { height: 40 } }, void 0)) }), void 0)) : null, jsx_runtime_1.jsxs(react_with_native_1.Div, __assign({ className: "pt-0 mb-6", style: { marginBottom: 10 } }, { children: [title ? jsx_runtime_1.jsx(react_with_native_1.Label, __assign({ className: "mb-2 text-sm font-bold" }, { children: title }), void 0) : null, description && (jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ className: "flex mx-3 mb-2 items-start " }, { children: jsx_runtime_1.jsx(react_with_native_1.P, __assign({ className: "text-gray-500 italic" }, { children: description }), void 0) }), void 0)), error ? (jsx_runtime_1.jsx(react_with_native_1.P, __assign({ className: errorClassName || "mr-3 mb-2 text-red-500" }, { children: error || "Invalid value" }), void 0)) : null, jsx_runtime_1.jsx(react_with_native_1.Div, { children: children }, void 0)] }), void 0)] }, void 0));
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
    return (jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ ref: reference }, { children: jsx_runtime_1.jsx(InputContainer, __assign({}, {
            description: description,
            sectionTitle: sectionTitle,
            startSection: startSection,
            title: title,
            next: next,
            isLast: isLast,
            id: uniqueFieldId,
            type: type,
            error: !plugin.hideContainerError &&
                ((_b = errors === null || errors === void 0 ? void 0 : errors.find(exports.errorOnField(fieldName))) === null || _b === void 0 ? void 0 : _b.message),
            extra: extra,
            config: config,
            errorClassName: errorClassName,
        }, { children: jsx_runtime_1.jsx(InputComponent, __assign({}, {
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
    return title ? (jsx_runtime_1.jsxs(react_with_native_1.Div, __assign({ className: "flex items-center mb-10 " }, { children: [backButton && (jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ onClick: backButton, className: "p-4 cursor-pointer" }, { children: "back" }), void 0)), jsx_runtime_1.jsx(react_with_native_1.H2, __assign({ className: "text-2xl font-bold" }, { children: title }), void 0)] }), void 0)) : null;
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
    //sometimes use defaultValues (deprecated)
    var _b, _c;
    var fields = _a.fields, defaultValues = _a.defaultValues, initialValues = _a.initialValues, onSubmit = _a.onSubmit, withSubmitProps = _a.withSubmitProps, noSubmit = _a.noSubmit, submitButtonText = _a.submitButtonText, submitButtonColor = _a.submitButtonColor, title = _a.title, backButton = _a.backButton, plugins = _a.plugins, renderSubmitComponent = _a.renderSubmitComponent, renderInputContainer = _a.renderInputContainer, stickySubmit = _a.stickySubmit, renderTitle = _a.renderTitle, submitClassName = _a.submitClassName, errorClassName = _a.errorClassName, successClassName = _a.successClassName;
    initialValues = initialValues ? initialValues : defaultValues;
    if (!plugins) {
        throw new Error("No plugins given");
    }
    //Generate unique id for the form
    var id = react_1.useState("Form" + String(Math.round(Math.random() * 1000000)))[0];
    var _d = react_1.useState([]), fieldsWithReferences = _d[0], setFieldsWithReferences = _d[1];
    // need to have because we want to see when it's changed
    var _e = react_1.useState([]), fieldsWithoutReferences = _e[0], setFieldsWithoutReferences = _e[1];
    react_1.useEffect(function () {
        var fieldsWithoutReferencesLocal = fields.map(function (f) { return f(); });
        if (
        // fieldsWithoutReferences.length === 0 && //NB: why was this here? caused the fields not to refresh
        !sameFieldArray(fieldsWithoutReferencesLocal, fieldsWithoutReferences)) {
            setFieldsWithReferences(fieldsWithoutReferencesLocal.map(function (fieldWithoutReference) {
                return __assign(__assign({}, fieldWithoutReference), { reference: react_1.createRef() });
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
    var _f = react_1.useState(initialState), state = _f[0], setState = _f[1];
    //used to check if the initialValues have changed
    var _g = react_1.useState(), initialValuesState = _g[0], setInitialValuesState = _g[1];
    react_1.useEffect(function () {
        if (!initialValuesState || !react_2.default(initialState, initialValuesState)) {
            // console.log("initialValues have changed");
            setState(initialState);
            setInitialValuesState(initialState);
        }
    }, [initialState]);
    var _h = react_1.useState(false), loading = _h[0], setLoading = _h[1];
    var _j = react_1.useState([]), errors = _j[0], setErrors = _j[1];
    var _k = react_1.useState(), success = _k[0], setSuccess = _k[1];
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
                            .find(function (x) { return propertyPath === x || propertyPath.startsWith(x + "."); })
                            ? propertyPath
                            : GLOBAL_PROPERTY_PATH,
                    });
                });
            //this only happens when there are no frontend errors, so it's safe to replace errors
            setErrors(newErrors_1);
            //scroll to the first field that contains an error
            var firstNotReadyField = fieldsWithReferences.filter(function (x) { return newErrors_1.find(exports.errorOnField(x.field)) !== undefined; })[0];
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
            return __spreadArray(__spreadArray([], all), errors);
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
    react_1.useEffect(function () {
        //console.log({ withSubmitProps: submitProps });
        withSubmitProps === null || withSubmitProps === void 0 ? void 0 : withSubmitProps(submitProps);
    }, [loading, available, submitButtonText, submitButtonColor, firstErrorRef]);
    var Title = renderTitle || DefaultTitle;
    var Submit = function () {
        return noSubmit ? null : renderSubmitComponent ? (renderSubmitComponent(submitProps)) : (jsx_runtime_1.jsxs(react_with_native_1.Button, __assign({ disabled: loading, className: (available
                ? "" + (submitButtonColor ? submitButtonColor : "bg-green-500")
                : "bg-gray-300") + "  flex justify-center flex-row w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", onClick: function () { return onClickSubmit(state); }, 
            //......Extra
            style: {
                backgroundColor: "#4ade80",
                color: "white",
                width: "100%",
                marginTop: 5,
                marginBottom: 5,
                display: "flex",
                justifyContent: "center",
                borderRadius: 10,
                alignItems: "center",
                borderColor: "white",
                padding: 8,
            } }, { children: [loading ? (jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ className: "mr-2" }, { children: jsx_runtime_1.jsx(react_with_native_1.ActivityIndicator, {}, void 0) }), void 0)) : null, jsx_runtime_1.jsx(react_with_native_1.Label, __assign({ style: { color: "white", fontWeight: "bold" } }, { children: submitButtonText || "Save" }), void 0)] }), void 0));
    };
    var globalError = errors === null || errors === void 0 ? void 0 : errors.find(function (x) { return x.propertyPath === GLOBAL_PROPERTY_PATH; });
    return (jsx_runtime_1.jsxs(react_with_native_1.Form, __assign({ className: "w-full", onSubmit: function (e) {
            e.preventDefault();
            onClickSubmit(state);
        } }, { children: [jsx_runtime_1.jsxs(react_with_native_1.Div, __assign({ className: "w-full" }, { children: [jsx_runtime_1.jsx(Title, { title: title, backButton: backButton }, void 0), success ? jsx_runtime_1.jsx(react_with_native_1.P, __assign({ className: successClassName }, { children: success }), void 0) : null, globalError ? (jsx_runtime_1.jsx(react_with_native_1.P, __assign({ className: errorClassName || "text-red-600" }, { children: globalError.message }), void 0)) : null, fieldsWithReferences.map(function (field, index) {
                        var _a, _b;
                        // Take the first plugin if the plugin isn't defined.
                        var plugin = getPlugin(field.type, plugins);
                        if (!plugin) {
                            return (jsx_runtime_1.jsxs(react_with_native_1.P, { children: ["Plugin not found (", field.field, ", ", field.type, ")"] }, void 0));
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
                            var fieldErrors = errors.filter(exports.errorOnField(field.field));
                            //check if field still has error(s)
                            var newFieldErrors = (_b = field.hasError) === null || _b === void 0 ? void 0 : _b.call(field, newValue, newFullState);
                            var newFieldErrorsAmount = typeof newFieldErrors === "string"
                                ? 1
                                : Array.isArray(newFieldErrors)
                                    ? newFieldErrors.length
                                    : 0;
                            if (fieldErrors.length > 0 &&
                                newFieldErrorsAmount !== fieldErrors.length) {
                                var newErrors = errors.filter(function (error) { return !exports.errorOnField(field.field)(error); });
                                var newFieldErrorsArray = typeof newFieldErrors === "string"
                                    ? [{ message: newFieldErrors, propertyPath: field.field }]
                                    : Array.isArray(newFieldErrors)
                                        ? newFieldErrors
                                        : [];
                                setErrors(__spreadArray(__spreadArray([], newErrors), newFieldErrorsArray));
                            }
                            setState(newFullState);
                            //NB: make sure to add the new state to the submitprops
                            withSubmitProps === null || withSubmitProps === void 0 ? void 0 : withSubmitProps(__assign(__assign({}, submitProps), { state: newFullState, onSubmit: function () { return onClickSubmit(newFullState); } }));
                        }; };
                        var uniqueFieldId = (id || "") + "." + field.field;
                        var inputErrors = errors.filter(function (e) {
                            return e.propertyPath === field.field ||
                                e.propertyPath.startsWith(field.field + ".");
                        });
                        return ((_b = field.shouldHide) === null || _b === void 0 ? void 0 : _b.call(field, state)) ? null : (jsx_runtime_1.jsx(exports.Input, { fieldName: field.field, renderInputContainer: renderInputContainer, uniqueFieldId: uniqueFieldId, config: plugin.config, plugin: plugin.component, extra: field.extra, reference: field.reference, next: next, type: field.type, title: field.titleFromState ? field.titleFromState(state) : field.title, value: state[field.field], onChange: onChange(state), isLast: index === (fields === null || fields === void 0 ? void 0 : fields.length) - 1, startSection: field.startSection, sectionTitle: field.sectionTitle, description: field.description, errors: inputErrors }, "field-" + field.field));
                    })] }), void 0), Submit ? (jsx_runtime_1.jsx(react_with_native_1.Div, __assign({ className: (stickySubmit ? "sticky bottom-0" : "") + " " + (submitClassName || "mb-2 py-2") }, { children: jsx_runtime_1.jsx(Submit, {}, void 0) }), void 0)) : null] }), void 0));
};
var setConfig = function (DataForm, config) {
    return function (props) {
        return jsx_runtime_1.jsx(DataForm, __assign({}, config, props), void 0);
    };
};
exports.setConfig = setConfig;
exports["default"] = DataForm;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToastContainer = exports.toast = void 0;
var react_toastify_1 = __webpack_require__(6287);
var react_toastify_2 = __webpack_require__(6287);
Object.defineProperty(exports, "ToastContainer", ({ enumerable: true, get: function () { return react_toastify_2.ToastContainer; } }));
/**
 * title is only shown on native
 */
var toast = function (message, options) {
    react_toastify_1.toast(message.body, options);
};
exports.toast = toast;
//# sourceMappingURL=Notification.js.map

/***/ }),

/***/ 1574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.Ix = exports.Am = void 0;
var Notification_1 = __webpack_require__(7381);
Object.defineProperty(exports, "Am", ({ enumerable: true, get: function () { return Notification_1.toast; } }));
Object.defineProperty(exports, "Ix", ({ enumerable: true, get: function () { return Notification_1.ToastContainer; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8631:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRouter = exports.useNavigation = void 0;
var useRouter_1 = __importDefault(__webpack_require__(2010));
exports.useRouter = useRouter_1.default;
var useNavigation_1 = __importDefault(__webpack_require__(1026));
exports.useNavigation = useNavigation_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1026:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var router_1 = __webpack_require__(1853);
function useNavigation() {
    var router = router_1.useRouter();
    return {
        addListener: function () { },
        canGoBack: function () { return true; },
        dispatch: function () { },
        getParent: function () { },
        getState: function () { },
        goBack: function () {
            router.back();
        },
        isFocused: function () { },
        removeListener: function () { },
        reset: function () { },
        setOptions: function () { },
        setParams: function () { },
        navigate: function (screen, params) {
            router.push(screen, { query: params });
        },
    };
}
exports["default"] = useNavigation;
//# sourceMappingURL=useNavigation.js.map

/***/ }),

/***/ 2010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var router_1 = __webpack_require__(1853);
exports["default"] = router_1.useRouter;
//# sourceMappingURL=useRouter.js.map

/***/ }),

/***/ 136:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(8738);
/**
 * renders either a SelectDropdown or SelectDrawer, based on screensize
 */
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, value = _a.value, title = _a.title, containerClassName = _a.containerClassName, selectFirstOption = _a.selectFirstOption, 
    //unused atm
    children = _a.children, className = _a.className, ios = _a.ios;
    var realValue = (0, util_1.getRealValue)({ value: value, selectFirstOption: selectFirstOption, options: options, title: title });
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: containerClassName }, { children: (0, jsx_runtime_1.jsx)("select", __assign({ onChange: function (e) {
                var value = e.target.value;
                var newValue = options.find(function (x) { return x.value === value; }) || null;
                onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
            } }, { children: options.map(function (option, index) {
                var isSelected = (realValue === null || realValue === void 0 ? void 0 : realValue.value) === option.value;
                return ((0, jsx_runtime_1.jsx)("option", __assign({ selected: isSelected }, { children: option.label }), index));
            }) })) })));
};
exports["default"] = Select;
//# sourceMappingURL=Select.js.map

/***/ }),

/***/ 5061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Select_1 = __importDefault(__webpack_require__(136));
exports["default"] = Select_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8738:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRealValue = void 0;
var getRealValue = function (_a) {
    var value = _a.value, selectFirstOption = _a.selectFirstOption, options = _a.options, title = _a.title;
    return value
        ? value
        : selectFirstOption
            ? options[0]
            : { label: title, value: undefined };
};
exports.getRealValue = getRealValue;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 5914:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createUseStore = exports.createStoreProvider = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var React = __importStar(__webpack_require__(6689));
var react_1 = __webpack_require__(6689);
var storage_1 = __webpack_require__(9911);
//local variables
var debug = false;
var contexts = {};
var getKey = function (key, baseKey) { return baseKey + "." + key; };
var contextKey = function (key) { return key + "Context"; };
var StoreContextProvider = function (_a) {
    var DynamicContext = _a.DynamicContext, children = _a.children, config = _a.config, storeKey = _a.storeKey;
    var _b = react_1.useState(false), hydrated = _b[0], setHydrated = _b[1];
    var _c = react_1.useState(config === null || config === void 0 ? void 0 : config.initialValues[storeKey]), store = _c[0], setStore = _c[1]; //null or some object or string or whatever
    var baseKey = (config === null || config === void 0 ? void 0 : config.baseKey) || "useStore";
    // On mount, get the current value from storage
    react_1.useEffect(function () {
        var fullKey = getKey(storeKey, baseKey);
        storage_1.getItem(fullKey).then(function (value) {
            if (debug) {
                console.log("Hydrated store for " + fullKey + ":", value);
            }
            setStore(value);
            setHydrated(true);
        });
    }, []);
    var initialValues = config === null || config === void 0 ? void 0 : config.initialValues;
    var useStoreHook = function (key) {
        var fullKey = getKey(key, baseKey);
        var defaultValue = initialValues[key];
        // @ts-ignore
        var value = store !== undefined
            ? store
            : defaultValue !== undefined
                ? defaultValue
                : null;
        var dispatch = function (value) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //should do a deep equal here, and only set the store and item if the value actually has changed
                        //@ts-ignore
                        setStore(value);
                        return [4 /*yield*/, storage_1.setItem(fullKey, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        return [value, dispatch, { hydrated: hydrated }];
    };
    return (jsx_runtime_1.jsx(DynamicContext.Provider, __assign({ value: useStoreHook }, { children: children }), void 0));
};
var createStoreProvider = function (config) {
    if (config.debug) {
        debug = config.debug;
    }
    if (debug) {
        console.log("Create StoreProvider");
    }
    var keys = Object.keys(config.initialValues);
    contexts = keys.reduce(function (acc, key) {
        var _a;
        var Context = React.createContext(null);
        return __assign(__assign({}, acc), (_a = {}, _a[contextKey(key)] = Context, _a));
    }, {});
    var MainProvider = function (_a) {
        var children = _a.children;
        return keys.reduce(function (acc, key) {
            var context = contexts[contextKey(key)];
            return (jsx_runtime_1.jsx(StoreContextProvider, __assign({ config: config, storeKey: key, DynamicContext: context }, { children: acc }), void 0));
        }, children);
    };
    return function (_a) {
        var children = _a.children;
        return jsx_runtime_1.jsx(MainProvider, { children: children }, void 0);
    };
};
exports.createStoreProvider = createStoreProvider;
var getContext = function (key) { return contexts[contextKey(key)]; };
var createUseStore = function (initialValues) {
    if (debug) {
        console.log("Create useStore");
    }
    var useStore = function (key) {
        if (!Object.keys(initialValues).includes(key)) {
            throw new Error("Using undefined key in useStore: " + key);
        }
        var context = getContext(key);
        if (!context) {
            throw new Error("Failed loading the context with key: " + key + ". Did you wrap your component/app with a StoreProvider?");
        }
        var useStoreHook = React.useContext(context);
        var useStoreHookType = typeof useStoreHook;
        if (useStoreHookType !== "function") {
            console.error("useStoreHookType for " + key + " is " + useStoreHookType + "... wtf?");
        }
        return useStoreHook(key);
    };
    return useStore;
};
exports.createUseStore = createUseStore;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9911:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setItem = exports.getItem = void 0;
var getItem = function (key) { return __awaiter(void 0, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
        if (typeof window === "undefined") {
            return [2 /*return*/, undefined];
        }
        item = localStorage.getItem(key);
        return [2 /*return*/, item ? JSON.parse(item) : undefined];
    });
}); };
exports.getItem = getItem;
var setItem = function (key, value) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (typeof window === "undefined") {
            return [2 /*return*/];
        }
        localStorage.setItem(key, JSON.stringify(value));
        return [2 /*return*/];
    });
}); };
exports.setItem = setItem;
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 4501:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var React = __importStar(__webpack_require__(6689));
var util_1 = __webpack_require__(4109);
var PureDiv = function (_a, ref) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, scroll = _a.scroll, props = __rest(_a, ["native", "className", "textClassName", "scroll"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({}, props, { ref: ref, className: (0, util_1.joinClassNames)(className, textClassName) })));
};
var ScrollableDiv = React.forwardRef(PureDiv);
exports["default"] = ScrollableDiv;
//# sourceMappingURL=ScrollableDiv.js.map

/***/ }),

/***/ 4364:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var Toggle = function (_a) {
    var native = _a.native, onChange = _a.onChange, checked = _a.checked, props = __rest(_a, ["native", "onChange", "checked"]);
    return ((0, jsx_runtime_1.jsx)("input", __assign({ type: "checkbox", checked: checked, onChange: function (e) { return onChange(e.target.checked); } }, props)));
};
exports["default"] = Toggle;
//# sourceMappingURL=Toggle.js.map

/***/ }),

/***/ 1723:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScrollableDiv = exports.Toggle = void 0;
var Toggle_1 = __importDefault(__webpack_require__(4364));
exports.Toggle = Toggle_1.default;
var ScrollableDiv_1 = __importDefault(__webpack_require__(4501));
exports.ScrollableDiv = ScrollableDiv_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6242:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
var A = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return (0, jsx_runtime_1.jsx)("a", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) }));
};
exports["default"] = A;
//# sourceMappingURL=A.js.map

/***/ }),

/***/ 4805:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var React = __importStar(__webpack_require__(6689));
var util_1 = __webpack_require__(4109);
var PureAside = function (_a, ref) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return ((0, jsx_runtime_1.jsx)("aside", __assign({}, props, { ref: ref, className: (0, util_1.joinClassNames)(className, textClassName) })));
};
// this is needed if you want to pass refs to it sometimes
var Aside = React.forwardRef(PureAside);
exports["default"] = Aside;
//# sourceMappingURL=Aside.js.map

/***/ }),

/***/ 1060:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
var Button = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) })));
};
exports["default"] = Button;
//# sourceMappingURL=Button.js.map

/***/ }),

/***/ 5048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var React = __importStar(__webpack_require__(6689));
var util_1 = __webpack_require__(4109);
var PureDiv = function (_a, ref) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({}, props, { ref: ref, className: (0, util_1.joinClassNames)(className, textClassName) })));
};
var Div = React.forwardRef(PureDiv);
exports["default"] = Div;
//# sourceMappingURL=Div.js.map

/***/ }),

/***/ 1224:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
/**
 * Form is just a html form on web. On react-native, it's a View
 */
var Form = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return ((0, jsx_runtime_1.jsx)("form", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) })));
};
exports["default"] = Form;
//# sourceMappingURL=Form.js.map

/***/ }),

/***/ 6667:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var H2 = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    return (0, jsx_runtime_1.jsx)("h2", __assign({}, props));
};
exports["default"] = H2;
//# sourceMappingURL=H2.js.map

/***/ }),

/***/ 6714:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var I = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    return (0, jsx_runtime_1.jsx)("i", __assign({}, props));
};
exports["default"] = I;
//# sourceMappingURL=I.js.map

/***/ }),

/***/ 529:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Image = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var Image = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    //@ts-ignore
    return (0, jsx_runtime_1.jsx)("img", __assign({}, props));
};
exports.Image = Image;
exports["default"] = exports.Image;
//# sourceMappingURL=Img.js.map

/***/ }),

/***/ 7133:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var Input = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    return (0, jsx_runtime_1.jsx)("input", __assign({}, props));
};
exports["default"] = Input;
//# sourceMappingURL=Input.js.map

/***/ }),

/***/ 150:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var Label = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    return (0, jsx_runtime_1.jsx)("label", __assign({}, props));
};
exports["default"] = Label;
//# sourceMappingURL=Label.js.map

/***/ }),

/***/ 3835:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
var Li = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return (0, jsx_runtime_1.jsx)("li", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) }));
};
exports["default"] = Li;
//# sourceMappingURL=Li.js.map

/***/ }),

/***/ 4316:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var React = __importStar(__webpack_require__(6689));
var util_1 = __webpack_require__(4109);
var PureNav = function (_a, ref) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return ((0, jsx_runtime_1.jsx)("nav", __assign({}, props, { ref: ref, className: (0, util_1.joinClassNames)(className, textClassName) })));
};
var Nav = React.forwardRef(PureNav);
exports["default"] = Nav;
//# sourceMappingURL=Nav.js.map

/***/ }),

/***/ 1625:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
var Ol = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return (0, jsx_runtime_1.jsx)("ol", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) }));
};
exports["default"] = Ol;
//# sourceMappingURL=Ol.js.map

/***/ }),

/***/ 3060:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var P = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    return (0, jsx_runtime_1.jsx)("p", __assign({}, props));
};
exports["default"] = P;
//# sourceMappingURL=P.js.map

/***/ }),

/***/ 1365:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
var Span = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return ((0, jsx_runtime_1.jsx)("span", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) })));
};
exports["default"] = Span;
//# sourceMappingURL=Span.js.map

/***/ }),

/***/ 4073:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var Strong = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    return (0, jsx_runtime_1.jsx)("strong", __assign({}, props));
};
exports["default"] = Strong;
//# sourceMappingURL=Strong.js.map

/***/ }),

/***/ 8210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var Svg = function (_a) {
    var src = _a.src, width = _a.width, height = _a.height, className = _a.className, style = _a.style;
    var Icon = src;
    return ((0, jsx_runtime_1.jsx)(Icon, { width: width, height: height, className: className, style: style }));
};
exports["default"] = Svg;
//# sourceMappingURL=Svg.js.map

/***/ }),

/***/ 6270:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
var TextArea = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return ((0, jsx_runtime_1.jsx)("textarea", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) })));
};
exports["default"] = TextArea;
//# sourceMappingURL=TextArea.js.map

/***/ }),

/***/ 6877:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
var Ul = function (_a) {
    var native = _a.native, className = _a.className, textClassName = _a.textClassName, props = __rest(_a, ["native", "className", "textClassName"]);
    return (0, jsx_runtime_1.jsx)("ul", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) }));
};
exports["default"] = Ul;
//# sourceMappingURL=Ul.js.map

/***/ }),

/***/ 6527:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Img = exports.Nav = exports.Aside = exports.TextArea = exports.Form = exports.I = exports.Ol = exports.Ul = exports.Li = exports.P = exports.Span = exports.Label = exports.Input = exports.Svg = exports.Button = exports.Strong = exports.H2 = exports.A = exports.Div = void 0;
// elements
var Nav_1 = __importDefault(__webpack_require__(4316));
exports.Nav = Nav_1.default;
var Div_1 = __importDefault(__webpack_require__(5048));
exports.Div = Div_1.default;
var A_1 = __importDefault(__webpack_require__(6242));
exports.A = A_1.default;
var H2_1 = __importDefault(__webpack_require__(6667));
exports.H2 = H2_1.default;
var Strong_1 = __importDefault(__webpack_require__(4073));
exports.Strong = Strong_1.default;
var Button_1 = __importDefault(__webpack_require__(1060));
exports.Button = Button_1.default;
var Svg_1 = __importDefault(__webpack_require__(8210));
exports.Svg = Svg_1.default;
var Input_1 = __importDefault(__webpack_require__(7133));
exports.Input = Input_1.default;
var Img_1 = __importDefault(__webpack_require__(529));
exports.Img = Img_1.default;
var Label_1 = __importDefault(__webpack_require__(150));
exports.Label = Label_1.default;
var Span_1 = __importDefault(__webpack_require__(1365));
exports.Span = Span_1.default;
var P_1 = __importDefault(__webpack_require__(3060));
exports.P = P_1.default;
var Li_1 = __importDefault(__webpack_require__(3835));
exports.Li = Li_1.default;
var Ul_1 = __importDefault(__webpack_require__(6877));
exports.Ul = Ul_1.default;
var Ol_1 = __importDefault(__webpack_require__(1625));
exports.Ol = Ol_1.default;
var Form_1 = __importDefault(__webpack_require__(1224));
exports.Form = Form_1.default;
var TextArea_1 = __importDefault(__webpack_require__(6270));
exports.TextArea = TextArea_1.default;
var Aside_1 = __importDefault(__webpack_require__(4805));
exports.Aside = Aside_1.default;
var I_1 = __importDefault(__webpack_require__(6714));
exports.I = I_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9734:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6527), exports);
__exportStar(__webpack_require__(6380), exports);
__exportStar(__webpack_require__(167), exports);
__exportStar(__webpack_require__(1723), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var ActivityIndicator = function (props) {
    var sizeClass = typeof props.size === "number"
        ? ""
        : props.size === "large"
            ? "w-16 h-16"
            : "w-6 h-6";
    var sizeStyle = typeof props.size === "number"
        ? { width: props.size, height: props.size }
        : undefined;
    var borderClass = props.color === "white"
        ? "border-white dark:border-gray-900"
        : "border-gray-900 dark:border-white";
    var className = "".concat(sizeClass, " border-b-2 ").concat(borderClass, " rounded-full animate-spin ").concat(props.className || "");
    return (0, jsx_runtime_1.jsx)("div", { style: sizeStyle, className: className });
};
exports["default"] = ActivityIndicator;
//# sourceMappingURL=ActivityIndicator.js.map

/***/ }),

/***/ 1298:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var util_1 = __webpack_require__(4109);
/**
 * button on web, pressable on react-native
 */
var Pressable = function (_a) {
    var native = _a.native, textClassName = _a.textClassName, className = _a.className, props = __rest(_a, ["native", "textClassName", "className"]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) })));
};
exports["default"] = Pressable;
//# sourceMappingURL=Pressable.js.map

/***/ }),

/***/ 4546:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsx_runtime_1 = __webpack_require__(997);
var Text = function (_a) {
    var native = _a.native, props = __rest(_a, ["native"]);
    return (0, jsx_runtime_1.jsx)("p", __assign({}, props));
};
exports["default"] = Text;
//# sourceMappingURL=Text.js.map

/***/ }),

/***/ 6380:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityIndicator = exports.Text = exports.Pressable = void 0;
//components
var Pressable_1 = __importDefault(__webpack_require__(1298));
exports.Pressable = Pressable_1.default;
var Text_1 = __importDefault(__webpack_require__(4546));
exports.Text = Text_1.default;
var ActivityIndicator_1 = __importDefault(__webpack_require__(4612));
exports.ActivityIndicator = ActivityIndicator_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 167:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4109), exports);
__exportStar(__webpack_require__(1997), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1997:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.trimClassName = void 0;
/**
 * in react-native not all classNames are supported
 */
var trimClassName = function (className) {
    return className;
};
exports.trimClassName = trimClassName;
//# sourceMappingURL=trimClassName.js.map

/***/ }),

/***/ 4109:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.joinClassNames = exports.wrapInTextIfNeeded = void 0;
var jsx_runtime_1 = __webpack_require__(997);
var Text_1 = __importDefault(__webpack_require__(4546));
// NB: figure out a way to do the styles of the text right.
var wrapInTextIfNeeded = function (children, textClassName) {
    return typeof children === "string" ? ((0, jsx_runtime_1.jsx)(Text_1.default, __assign({ className: textClassName }, { children: children }))) : (children);
};
exports.wrapInTextIfNeeded = wrapInTextIfNeeded;
var joinClassNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (x) { return !!x; }).join(" ");
};
exports.joinClassNames = joinClassNames;
//# sourceMappingURL=util.js.map

/***/ })

};
;