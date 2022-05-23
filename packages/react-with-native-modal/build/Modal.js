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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalProvider = exports.useModal = exports.ModalContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
exports.ModalContext = React.createContext({
    handleModal: function () { return null; },
    modalContent: null,
    showModal: false,
});
var Provider = exports.ModalContext.Provider;
var useModal = function () { return (0, react_1.useContext)(exports.ModalContext); };
exports.useModal = useModal;
var useModalState = function () {
    var _a = (0, react_1.useState)(false), showModal = _a[0], setShowModal = _a[1];
    var _b = (0, react_1.useState)(null), modalContent = _b[0], setModalContent = _b[1];
    var _c = (0, react_1.useState)(""), title = _c[0], setTitle = _c[1];
    var handleModal = function (content, title) {
        if (content === void 0) { content = null; }
        setShowModal(!showModal);
        if (content) {
            setModalContent(content);
        }
        if (title) {
            setTitle(title);
        }
    };
    return { showModal: showModal, handleModal: handleModal, modalContent: modalContent, title: title };
};
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useModalState(), showModal = _b.showModal, handleModal = _b.handleModal, modalContent = _b.modalContent, title = _b.title;
    return ((0, jsx_runtime_1.jsxs)(Provider, __assign({ value: { showModal: showModal, handleModal: handleModal, modalContent: modalContent, title: title } }, { children: [(0, jsx_runtime_1.jsx)(Modal, {}), children] })));
};
exports.ModalProvider = ModalProvider;
function Modal() {
    var _a = (0, react_1.useState)(false), inside = _a[0], setInside = _a[1];
    var _b = (0, react_1.useContext)(exports.ModalContext), modalContent = _b.modalContent, title = _b.title, handleModal = _b.handleModal, showModal = _b.showModal;
    if (showModal) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ onClick: function () { return !inside && handleModal(null); }, className: "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ onMouseEnter: function () { return setInside(true); }, onMouseLeave: function () { return setInside(false); }, className: "relative w-auto max-w-3xl mx-auto my-6 lg:w-10/12 lg:h-10/12" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex items-start justify-between p-5 border-b border-gray-200 border-solid rounded-t" }, { children: [(0, jsx_runtime_1.jsx)("h3", __assign({ className: "text-3xl font-semibold" }, { children: title })), (0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ className: "float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none", onClick: function () { return handleModal(null); } }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ className: "block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none" }, { children: "x" })) }))] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "relative flex-auto p-6" }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ className: "my-4 text-lg leading-relaxed text-gray-500" }, { children: modalContent })) })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex items-center justify-end p-6 border-t border-gray-200 border-solid" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ className: "px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none", onClick: function () { return handleModal(null); } }, { children: "Close..." })) }))] })) })) })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { className: "fixed inset-0 z-40 bg-black opacity-50" })] }));
    }
    else
        return null;
}
exports.default = Modal;
//# sourceMappingURL=Modal.js.map