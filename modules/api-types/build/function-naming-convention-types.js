"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConventions = exports.getFunctionConventionSuffix = exports.rawFunctionConventionSuffix = exports.contextFunctionConventionSuffix = void 0;
exports.contextFunctionConventionSuffix = "WithContext";
exports.rawFunctionConventionSuffix = "WithContextRaw";
exports.getFunctionConventionSuffix = "GetApi";
/**
 * API conventions:
 *
 * - `xyzGetApi` is only available via GET, the rest is only available with POST.
 * - `xyzWithContext` is taking `FunctionContext` as its first parameter
 * - `xyzWithContextRaw` is taking `FunctionContext` as its first parameter, and is expected to return the raw return type the function returns.
 */
exports.apiConventions = {
    contextFunctionConventionSuffix: exports.contextFunctionConventionSuffix,
    rawFunctionConventionSuffix: exports.rawFunctionConventionSuffix,
    getFunctionConventionSuffix: exports.getFunctionConventionSuffix,
};
//# sourceMappingURL=function-naming-convention-types.js.map