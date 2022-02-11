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
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Li, Div, Label, P, Input, Aside, Ul } from "react-with-native";
import Icon from "./icon.svg";
var FileInput = function (_a) {
    var extra = _a.extra, onChange = _a.onChange;
    var _b = useDropzone({
        accept: extra.allowedFileTypes,
    }), getRootProps = _b.getRootProps, getInputProps = _b.getInputProps, acceptedFiles = _b.acceptedFiles;
    useEffect(function () {
        onChange(acceptedFiles);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acceptedFiles]);
    var files = acceptedFiles.map(function (file) { return (React.createElement(Li, { key: file.path, className: "text-sm" }, file.path)); });
    return (React.createElement(Div, __assign({ className: "flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md" }, getRootProps()),
        React.createElement(Div, { className: "space-y-1 text-center" },
            React.createElement(Icon, null),
            React.createElement(Div, { className: "flex text-sm text-center text-gray-600" },
                React.createElement(Label, { htmlFor: "file-upload", className: "relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" }),
                React.createElement(Input, __assign({ id: "file-upload", type: "file" }, getInputProps()))),
            React.createElement(P, { className: "text-xs text-gray-500" }, "PNG, JPG, GIF en PDF tot 15MB"),
            acceptedFiles.length > 0 ? (React.createElement(Aside, null,
                React.createElement(Ul, null, files))) : null)));
};
FileInput.defaultInitialValue = [];
var FileInputType = /** @class */ (function () {
    function FileInputType() {
    }
    return FileInputType;
}());
export { FileInputType };
export default FileInput;
//# sourceMappingURL=FileInput.js.map