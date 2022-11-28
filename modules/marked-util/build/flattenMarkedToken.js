"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenMarkedToken = void 0;
var flattenMarkedToken = function (token, findFunction) {
    if (findFunction(token)) {
        return [token];
    }
    if (token.type === "table") {
        var header = token.header
            .map(function (token) {
            var result = token.tokens
                .map(function (x) { return (0, exports.flattenMarkedToken)(x, findFunction); })
                .flat();
            return result;
        })
            .flat();
        var rows = token.rows
            .map(function (row) {
            var result = row
                .map(function (token) {
                var result = token.tokens
                    .map(function (x) { return (0, exports.flattenMarkedToken)(x, findFunction); })
                    .flat();
                return result;
            })
                .flat();
            return result;
        })
            .flat();
        return [header, rows].flat();
    }
    if (token.type === "list") {
        var result = token.items
            .map(function (token) {
            var result = token.tokens
                .map(function (x) { return (0, exports.flattenMarkedToken)(x, findFunction); })
                .flat();
            return result;
        })
            .flat();
        return result;
    }
    if (token.type === "del" ||
        token.type === "em" ||
        token.type === "heading" ||
        token.type === "link" ||
        token.type === "paragraph" ||
        token.type === "strong") {
        var result = token.tokens
            .map(function (x) { return (0, exports.flattenMarkedToken)(x, findFunction); })
            .flat();
        return result;
    }
    return [];
};
exports.flattenMarkedToken = flattenMarkedToken;
//# sourceMappingURL=flattenMarkedToken.js.map