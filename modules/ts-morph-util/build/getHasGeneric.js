"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHasGeneric = void 0;
/**
 * returns a boolean indicating whether an interface or type has one or more generic arguments
 */
var getHasGeneric = function (type) {
    return type.getTypeParameters().length > 0;
};
exports.getHasGeneric = getHasGeneric;
//# sourceMappingURL=getHasGeneric.js.map