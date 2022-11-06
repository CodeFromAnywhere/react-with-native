"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOperationRelativePath = void 0;
/**
 * something like src/xxx/xxx/x.ts (no slash at start)
 */
var getOperationRelativePath = function (absolutePath, operationBasePath) {
    return absolutePath.slice(operationBasePath.length + 1);
};
exports.getOperationRelativePath = getOperationRelativePath;
//# sourceMappingURL=getOperationRelativePath.js.map