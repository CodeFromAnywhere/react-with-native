"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRefLink = void 0;
/**
 * gets the $ref from a schema and parses the interface name from it
 */
var getRefLink = function (ref) {
    var _a;
    var refLink = (_a = ref === null || ref === void 0 ? void 0 : ref.split("/").pop()) === null || _a === void 0 ? void 0 : _a.replaceAll("%3C", "<").replaceAll("%3E", ">");
    return refLink;
};
exports.getRefLink = getRefLink;
//# sourceMappingURL=getRefLink.js.map