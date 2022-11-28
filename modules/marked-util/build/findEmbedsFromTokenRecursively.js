"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEmbedsFromTokenRecursively = void 0;
var asset_functions_js_1 = require("asset-functions-js");
var findEmbedsFromTokenRecursively = function (token) {
    if (token.type === "image") {
        return [
            {
                src: token.href,
                alt: token.title,
                type: (0, asset_functions_js_1.getTypeFromUrlOrPath)(token.href),
            },
        ];
    }
    if (token.type === "table") {
        var header = token.header
            .map(function (token) {
            var result = token.tokens.map(exports.findEmbedsFromTokenRecursively).flat();
            return result;
        })
            .flat();
        var rows = token.rows
            .map(function (row) {
            var result = row
                .map(function (token) {
                var result = token.tokens
                    .map(exports.findEmbedsFromTokenRecursively)
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
            var result = token.tokens.map(exports.findEmbedsFromTokenRecursively).flat();
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
        var result = token.tokens.map(exports.findEmbedsFromTokenRecursively).flat();
        return result;
    }
    return [];
};
exports.findEmbedsFromTokenRecursively = findEmbedsFromTokenRecursively;
//# sourceMappingURL=findEmbedsFromTokenRecursively.js.map