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
exports.TouchableOpacity = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var util_1 = require("../../util/util");
/**
 * button on web, pressable on react-native
 */
var TouchableOpacity = function (_a) {
    var native = _a.native, textClassName = _a.textClassName, className = _a.className, props = __rest(_a, ["native", "textClassName", "className"]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({}, props, { className: (0, util_1.joinClassNames)(className, textClassName) })));
};
exports.TouchableOpacity = TouchableOpacity;
//# sourceMappingURL=TouchableOpacity.js.map