"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleLine = exports.exampleKeyValueMarkdownParse = exports.exampleKvMdString = void 0;
exports.exampleKvMdString = "---\na: 1\nb: 2\nc: true\nd: null\ne: hello world\nf: 888\n---\n\n# category 1\n\nkey1: value1\nKey 2: Value 2 <!-- Comment... -->\n\n# category 2\n\nkey1: value1\nKey 2: Value 2 <!-- Comment... -->\n\n# category 3\n\n## subcat\n\nkey: value\nkey: value\n\n## subcat 2\n\nkey: value\nkey: value\nkey: value\nkey: value\n\n# last cat\n\nkey: value\nkey: value\n";
exports.exampleKeyValueMarkdownParse = {
    parameters: { a: 1, b: 2, c: true, d: null, e: "hello world", f: 888 },
    data: [],
};
exports.exampleLine = "key: value <!-- comment -->";
//# sourceMappingURL=example.js.map