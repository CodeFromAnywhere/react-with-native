"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownModelTypeToMarkdownString = void 0;
const matter_types_1 = require("matter-types");
const markdownModelTypeToMarkdownString = (markdownModelType) => {
    const { createdAt, createdFirstAt, deletedAt, id, markdown, name, slug, updatedAt } = markdownModelType, parameters = __rest(markdownModelType, ["createdAt", "createdFirstAt", "deletedAt", "id", "markdown", "name", "slug", "updatedAt"]);
    const x = (0, matter_types_1.frontmatterParseToString)(Object.assign({ createdAt,
        createdFirstAt,
        deletedAt,
        id,
        name,
        slug,
        updatedAt }, parameters));
    return ``;
};
exports.markdownModelTypeToMarkdownString = markdownModelTypeToMarkdownString;
//# sourceMappingURL=markdownModelType.js.map