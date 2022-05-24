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
var jsx_runtime_1 = require("react/jsx-runtime");
var util_1 = require("./util");
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
                console.log("select change", { value: value, newValue: newValue });
                onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
            }, className: className, value: String(value === null || value === void 0 ? void 0 : value.value) }, { children: options.map(function (option, index) {
                return ((0, jsx_runtime_1.jsx)("option", __assign({ value: String(option.value) }, { children: option.label }), index));
            }) })) })));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map