"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAnyJson = void 0;
var renderMarkdownParse_1 = require("../components/renderMarkdownParse");
var json_to_md_1 = require("json-to-md");
var renderAnyJson = function (json, name) {
    if (!json)
        return null;
    return (0, renderMarkdownParse_1.renderMarkdownContent)((0, json_to_md_1.jsonToMdString)(json, { name: name, indentationAmount: 0 }));
};
exports.renderAnyJson = renderAnyJson;
//# sourceMappingURL=renderAnyJson.js.map