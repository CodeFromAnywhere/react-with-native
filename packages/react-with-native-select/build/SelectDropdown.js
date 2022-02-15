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
/* This example requires Tailwind CSS v2.0+ */
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var SelectedIcon_1 = __importDefault(require("./SelectedIcon"));
var react_with_native_1 = require("react-with-native");
var AiFillCaretDown_svg_1 = __importDefault(require("./assets/AiFillCaretDown.svg"));
var AiFillCaretUp_svg_1 = __importDefault(require("./assets/AiFillCaretUp.svg"));
var react_with_native_2 = require("react-with-native");
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(" ");
}
var renderOption = function (_a) {
    var item = _a.item, selected = _a.selected, active = _a.active, isHeader = _a.isHeader, isOpen = _a.isOpen;
    var Icon = item === null || item === void 0 ? void 0 : item.icon;
    return ((0, jsx_runtime_1.jsxs)(react_with_native_2.Div, __assign({ className: "flex justify-between" }, { children: [(0, jsx_runtime_1.jsxs)(react_with_native_2.Div, __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_2.Span, __assign({ className: classNames(selected || active ? "font-semibold text-pink" : "font-normal", "ml-3 block truncate") }, { children: item === null || item === void 0 ? void 0 : item.label }), void 0), Icon && (0, jsx_runtime_1.jsx)(Icon, {}, void 0)] }), void 0), isHeader ? ((0, jsx_runtime_1.jsx)(react_with_native_2.Div, __assign({ className: "flex items-center justify-center w-6 h-6" }, { children: isOpen ? (0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: AiFillCaretUp_svg_1.default }, void 0) : (0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: AiFillCaretDown_svg_1.default }, void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(SelectedIcon_1.default, { selected: selected }, void 0))] }), void 0));
};
function SelectDropDown(_a) {
    var title = _a.title, value = _a.value, onChange = _a.onChange, options = _a.options, className = _a.className, children = _a.children;
    var onChangeFn = onChange ? onChange : function () { return null; };
    console.log("we've the newest");
    return ((0, jsx_runtime_1.jsx)(react_2.Listbox, __assign({ value: value, onChange: onChangeFn }, { children: function (_a) {
            var open = _a.open;
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [title && ((0, jsx_runtime_1.jsx)(react_2.Listbox.Label, __assign({ className: "block text-sm font-medium text-gray-700" }, { children: title }), void 0)), (0, jsx_runtime_1.jsxs)(react_with_native_2.Div, __assign({ className: "relative mt-1 ".concat(className) }, { children: [(0, jsx_runtime_1.jsx)(react_2.Listbox.Button, __assign({ className: "relative z-0 w-full py-2 pl-3 pr-3 text-left bg-white border border-gray-300 rounded-sm shadow-sm cursor-default focus:outline-none focus:ring-1 sm:text-sm" }, { children: renderOption({
                                    item: value,
                                    isHeader: true,
                                    isOpen: open,
                                }) }), void 0), (0, jsx_runtime_1.jsx)(react_2.Transition, __assign({ show: open, as: react_1.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0, jsx_runtime_1.jsx)(react_2.Listbox.Options, __assign({ className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-sm shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, { children: options.map(function (option, index) { return ((0, jsx_runtime_1.jsx)(react_2.Listbox.Option, __assign({ className: function (_a) {
                                            var active = _a.active;
                                            return classNames("text-gray-900", "cursor-pointer select-none relative py-2 pl-3 pr-3");
                                        }, value: option }, { children: function (_a) {
                                            var selected = _a.selected, active = _a.active;
                                            return renderOption({ item: option, active: active, selected: selected });
                                        } }), "option".concat(index))); }) }), void 0) }), void 0)] }), void 0)] }, void 0));
        } }), void 0));
}
exports.default = SelectDropDown;
//# sourceMappingURL=SelectDropdown.js.map