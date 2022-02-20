"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnv = void 0;
//this does only work with next projects
var config_1 = __importDefault(require("next/config"));
var getEnv = function (key) {
    var _a, _b;
    var publicRuntimeConfig = (0, config_1.default)().publicRuntimeConfig;
    var publicKey = "NEXT_PUBLIC_".concat(key);
    //trying 3 different methods
    var publicEnv = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a[publicKey];
    var realEnv = (_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b[key];
    var publicRuntimeEnv = publicRuntimeConfig[key];
    var unvalidatedEnv = publicEnv || realEnv || publicRuntimeEnv;
    return unvalidatedEnv;
};
exports.getEnv = getEnv;
//# sourceMappingURL=getEnv.js.map