"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FancyLoader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_1 = require("react-with-native");
var FancyLoader = function (_a) {
    var big = _a.big, medium = _a.medium;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, { className: "rounded-full ".concat(big ? "w-12 h-12" : medium ? "w-7 h-7" : "w-4 h-4", " border-b-orange-400 border-l-blue-400 border-t-red-400 border-r-green-400 ").concat(big ? "border-4" : medium ? "border-2" : "border", " animate-spin") }));
};
exports.FancyLoader = FancyLoader;
//# sourceMappingURL=FancyLoader.js.map