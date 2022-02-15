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
var SelectDropdown_1 = __importDefault(require("./SelectDropdown"));
var SelectDrawer_1 = __importDefault(require("./SelectDrawer"));
var SelectMenu_1 = __importDefault(require("./SelectMenu"));
var util_1 = require("./util");
/**
 * renders either a SelectDropdown or SelectDrawer, based on screensize
 */
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, value = _a.value, title = _a.title, className = _a.className, containerClassName = _a.containerClassName, children = _a.children, hasReset = _a.hasReset, selectFirstOption = _a.selectFirstOption, id = _a.id;
    var realValue = (0, util_1.getRealValue)({ value: value, selectFirstOption: selectFirstOption, options: options, title: title });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden lg:flex ".concat(containerClassName) }, { children: children ? ((0, jsx_runtime_1.jsx)(SelectMenu_1.default, __assign({ value: realValue, onChange: onChange, options: options }, { children: children }), void 0)) : ((0, jsx_runtime_1.jsx)(SelectDropdown_1.default, { value: realValue, onChange: onChange, options: options, className: className || "w-60" }, void 0)) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "lg:hidden ".concat(containerClassName) }, { children: (0, jsx_runtime_1.jsx)(SelectDrawer_1.default, __assign({ onChange: onChange, options: options, value: realValue, title: title, className: className, hasReset: hasReset, id: id }, { children: children }), void 0) }), void 0)] }, void 0));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map