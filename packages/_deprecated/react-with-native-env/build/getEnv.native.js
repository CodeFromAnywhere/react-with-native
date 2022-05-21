"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
var expo_constants_1 = __importDefault(require("expo-constants"));
var getEnv = function (key) {
    var _a, _b;
    return (_b = (_a = expo_constants_1.default.manifest) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b[key];
};
exports.getEnv = getEnv;
//# sourceMappingURL=getEnv.native.js.map