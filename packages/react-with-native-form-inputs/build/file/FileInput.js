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
exports.FileInputType = exports.FileInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dropzone_1 = require("react-dropzone");
var react_with_native_1 = require("react-with-native");
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
//# sourceMappingURL=FileInput.js.map