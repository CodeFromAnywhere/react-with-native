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
exports.useExpanded = void 0;
var store_1 = require("./store");
var useExpanded = function (queryPath) {
    if (queryPath === void 0) { queryPath = ""; }
    var _a = (0, store_1.useStore)("menu.expanded"), expanded = _a[0], setExpanded = _a[1], hydrated = _a[2].hydrated;
    var isExpanded = expanded[queryPath] !== undefined ? expanded[queryPath] : false;
    // console.log({ queryPath, isExpanded });
    var setIsExpanded = function () {
        var _a;
        return setExpanded(__assign(__assign({}, expanded), (_a = {}, _a[queryPath] = true, _a)));
    };
    var setNotExpanded = function () {
        var _a;
        return setExpanded(__assign(__assign({}, expanded), (_a = {}, _a[queryPath] = false, _a)));
    };
    var toggleExpanded = function () {
        var _a;
        return setExpanded(__assign(__assign({}, expanded), (_a = {}, _a[queryPath] = !isExpanded, _a)));
    };
    var tuple = [isExpanded, toggleExpanded, setIsExpanded, setNotExpanded, { hydrated: hydrated }];
    return tuple;
};
exports.useExpanded = useExpanded;
//# sourceMappingURL=useExpanded.js.map