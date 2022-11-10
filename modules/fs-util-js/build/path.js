"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = void 0;
var join = function () {
    var chunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        chunks[_i] = arguments[_i];
    }
    return chunks.join("/");
};
exports.path = {
    join: join,
};
//# sourceMappingURL=path.js.map