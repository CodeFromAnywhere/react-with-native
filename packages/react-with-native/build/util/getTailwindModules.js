"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTailwindModules = void 0;
var getTailwindModules = function (options) {
    var _a, _b;
    var packages = ((_a = options.packages) === null || _a === void 0 ? void 0 : _a.map(function (module) {
        return "../../packages/".concat(module, "/src/**/*.{ts,tsx,js,jsx}");
    })) || [];
    var modules = ((_b = options.modules) === null || _b === void 0 ? void 0 : _b.map(function (module) {
        return options.isWorkspace
            ? "../../node_modules/".concat(module, "/{src,build,dist}/**/*.{ts,tsx,js,jsx}")
            : "./node_modules/".concat(module, "/{src,build,dist}/**/*.{ts,tsx,js,jsx}");
    })) || [];
    return packages === null || packages === void 0 ? void 0 : packages.concat(modules);
};
exports.getTailwindModules = getTailwindModules;
//# sourceMappingURL=getTailwindModules.js.map