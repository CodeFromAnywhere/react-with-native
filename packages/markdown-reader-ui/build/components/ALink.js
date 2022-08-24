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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALink = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var react_with_native_1 = require("react-with-native");
var ALink = function (_a) {
    var children = _a.children, href = _a.href, target = _a.target, rel = _a.rel, linkProps = _a.linkProps, otherAProps = __rest(_a, ["children", "href", "target", "rel", "linkProps"]);
    return ((0, jsx_runtime_1.jsx)(link_1.default, __assign({}, linkProps, { href: href || "#", passHref: true }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.A, __assign({}, otherAProps, { rel: rel, target: target }, { children: children })) })));
};
exports.ALink = ALink;
//# sourceMappingURL=ALink.js.map