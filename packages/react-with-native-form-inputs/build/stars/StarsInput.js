"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarsInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_stars_1 = __importDefault(require("react-stars"));
var StarsInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, extra = _a.extra, config = _a.config;
    config = config || {};
    // later, this can be extrahered into a react-with-native-stars component, because now this will only work on web
    return ((0, jsx_runtime_1.jsx)(react_stars_1.default, { className: "m-3", count: 5, value: typeof value === "number" ? value : 0, onChange: onChange, half: false, size: 24, color2: "#ffd700" }));
};
exports.StarsInput = StarsInput;
exports.StarsInput.defaultInitialValue = null;
//# sourceMappingURL=StarsInput.js.map