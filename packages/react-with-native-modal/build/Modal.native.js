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
var react_native_1 = require("react-native");
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
    var _a = (0, react_1.useContext)(exports.ModalContext), modalContent = _a.modalContent, title = _a.title, handleModal = _a.handleModal, showModal = _a.showModal;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, __assign({ visible: showModal, transparent: true, animationType: "slide" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex-1 w-full justify-center items-center" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "p-2 bg-white border border-gray-200 rounded-lg shadow-lg" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.H2, __assign({ className: "text-2xl font-semibold p-2" }, { children: title })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, { children: modalContent }), (0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ className: "flex items-center justify-end p-5 border-t border-gray-200 border-solid rounded-b", onClick: function () { return handleModal(null); } }, { children: "Close" }))] })) })) })));
}
exports.default = Modal;
//# sourceMappingURL=Modal.native.js.map