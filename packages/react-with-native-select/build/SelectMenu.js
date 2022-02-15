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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = __importStar(require("react-dom"));
var react_menu_1 = require("@szhsin/react-menu");
require("@szhsin/react-menu/dist/index.css");
require("@szhsin/react-menu/dist/transitions/slide.css");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var SelectMenu = function (_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, children = _a.children, className = _a.className;
    var _b = (0, react_menu_1.useMenuState)(), toggleMenu = _b.toggleMenu, menuProps = __rest(_b, ["toggleMenu"]);
    var _c = (0, react_1.useState)({ x: 0, y: 0 }), anchorPoint = _c[0], setAnchorPoint = _c[1];
    var _d = (0, react_1.useState)(), id = _d[0], setId = _d[1];
    var onClick = function (e, id) {
        if (e) {
            e.preventDefault();
            setAnchorPoint({ x: e.clientX, y: e.clientY });
        }
        setId(id);
        toggleMenu(true);
    };
    if (typeof document === "undefined") {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-full" }, { children: [ReactDOM.createPortal((0, jsx_runtime_1.jsx)(react_menu_1.ControlledMenu, __assign({}, menuProps, { anchorPoint: anchorPoint, onClose: function () { return toggleMenu(false); } }, { children: options.map(function (option, index) {
                    var Icon = option.icon;
                    return ((0, jsx_runtime_1.jsxs)(react_menu_1.MenuItem, __assign({ onClick: function (e) {
                            var _a;
                            (_a = option.onClick) === null || _a === void 0 ? void 0 : _a.call(option, id);
                            onChange === null || onChange === void 0 ? void 0 : onChange(option);
                        }, className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "w-6 mr-4" }, { children: Icon && (0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: Icon, className: "w-6 h-6 text-black" }, void 0) }), void 0), option.label] }), "menu".concat(index)));
                }) }), void 0), document.getElementById("contextmenu")), children({ onClick: onClick, value: value, className: className })] }), void 0));
};
exports.default = SelectMenu;
//# sourceMappingURL=SelectMenu.js.map