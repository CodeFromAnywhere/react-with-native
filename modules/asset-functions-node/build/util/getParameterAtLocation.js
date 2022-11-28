"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParameterAtLocation = void 0;
var getParameterAtLocation = function (object, location) {
    var firstParameter = object[location[0]];
    if (location.length === 1)
        return firstParameter;
    return (0, exports.getParameterAtLocation)(firstParameter, location.slice(1));
};
exports.getParameterAtLocation = getParameterAtLocation;
//# sourceMappingURL=getParameterAtLocation.js.map