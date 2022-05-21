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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var DropdownButton_1 = __importDefault(require("./DropdownButton"));
var styles_1 = require("@mui/material/styles");
var Box_1 = __importDefault(require("@mui/material/Box"));
var colors_1 = require("@mui/material/colors");
var SelectedIcon_1 = __importDefault(require("./SelectedIcon"));
var react_with_native_1 = require("react-with-native");
var StyledBox = (0, styles_1.styled)(Box_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: theme.palette.mode === "light" ? "#fff" : colors_1.grey[800],
    });
});
var SelectDrawer = function (_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, title = _a.title, children = _a.children, className = _a.className, hasReset = _a.hasReset, id = _a.id;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(), customId = _c[0], setCustomId = _c[1];
    function switchOpen() {
        setOpen(!open);
    }
    function reset() {
        onChange === null || onChange === void 0 ? void 0 : onChange(null);
        switchOpen();
    }
    var valueNoOption = !options.filter(function (x) { return x.value === value.value; })[0];
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [children ? (children({
                onClick: function (e, id) {
                    switchOpen();
                    setCustomId(id);
                },
                value: value,
                className: className,
            })) : ((0, jsx_runtime_1.jsx)(DropdownButton_1.default, { onClick: switchOpen, label: value.label })), (0, jsx_runtime_1.jsx)(material_1.SwipeableDrawer, __assign({ anchor: "bottom", open: open, onClose: switchOpen, onOpen: switchOpen, sx: { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }, { children: (0, jsx_runtime_1.jsxs)(StyledBox, __assign({ sx: {
                        padding: 2,
                        marginBottom: 20,
                    }, role: "presentation" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "grid grid-cols-4 mb-10" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ disabled: valueNoOption, className: "text-left ".concat(valueNoOption ? "disabled:opacity-50" : "text-primary"), onClick: reset }, { children: hasReset ? "Reset" : null })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "col-span-2 font-bold text-center" }, { children: title })), (0, jsx_runtime_1.jsx)(react_with_native_1.Button, __assign({ className: "text-right text-primary", onClick: switchOpen }, { children: "Ready" }))] })), (0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-col" }, { children: options.map(function (option, index) {
                                // TODO do a shallow diff compare, or add id to Item for example.
                                var isSelected = option.value === value.value;
                                return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ onClick: function (e) {
                                        var _a;
                                        (_a = option.onClick) === null || _a === void 0 ? void 0 : _a.call(option, customId ? customId : id);
                                        onChange === null || onChange === void 0 ? void 0 : onChange(option);
                                        switchOpen();
                                    }, className: "flex items-center mb-2" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.Label, __assign({ className: "flex-1 min-w-0 text-t-primary" }, { children: option.label })), (0, jsx_runtime_1.jsx)(SelectedIcon_1.default, { selected: isSelected })] }), index));
                            }) }))] })) }))] }));
};
exports.default = SelectDrawer;
//# sourceMappingURL=SelectDrawer.js.map