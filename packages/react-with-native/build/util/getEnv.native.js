import Constants from "expo-constants";
export var getEnv = function (key) {
    var _a, _b;
    return (_b = (_a = Constants.manifest) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b[key];
};
//# sourceMappingURL=getEnv.native.js.map