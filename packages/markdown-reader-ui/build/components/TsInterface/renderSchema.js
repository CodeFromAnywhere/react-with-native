"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSchema = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var TypeDefinition_1 = __importDefault(require("./TypeDefinition"));
/**
 * renders a schema from a TsInterface type
 */
var renderSchema = function (schema) {
    return (0, jsx_runtime_1.jsx)(TypeDefinition_1.default, { schema: schema, model: "", title: "" });
};
exports.renderSchema = renderSchema;
//# sourceMappingURL=renderSchema.js.map