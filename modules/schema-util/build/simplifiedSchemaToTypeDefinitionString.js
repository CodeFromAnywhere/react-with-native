"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifiedSchemaToTypeDefinitionString = void 0;
/**
 * Converts a simplifiedSchema definition back into a type interface string
 *
 * With this, types can be generated in different ways
 */
var simplifiedSchemaToTypeDefinitionString = function (simplifiedSchema) {
    if (!simplifiedSchema)
        return "";
    if (simplifiedSchema.enum && simplifiedSchema.enum.length > 0) {
        // NB: TODO: This is probably not satisfactory for all enums! Needs testing
        var enumString = simplifiedSchema.enum.map(function (x) { return String(x); }).join(" | ");
        return enumString;
    }
    if (simplifiedSchema.type === "boolean")
        return "boolean";
    if (simplifiedSchema.type === "null")
        return "null";
    if (simplifiedSchema.type === "number")
        return "number";
    if (simplifiedSchema.type === "string")
        return "string";
    if (simplifiedSchema.type === "array" &&
        simplifiedSchema.items &&
        simplifiedSchema.items.length >= 1) {
        var parts = simplifiedSchema.items
            .map(function (x) { return (0, exports.simplifiedSchemaToTypeDefinitionString)(x.schema); })
            .join(" | ");
        var partsString = simplifiedSchema.items && simplifiedSchema.items.length >= 2
            ? "(".concat(parts, ")[]")
            : "".concat(parts, "[]");
        return partsString;
    }
    if (simplifiedSchema.type === "object" && simplifiedSchema.properties) {
        var objectParts = simplifiedSchema.properties.map(function (prop) {
            var descriptionString = prop.schema.description
                ? "/** ".concat(prop.schema.description, " */\n")
                : "";
            var punctuationString = "".concat(prop.required ? "" : "?", ": ");
            var propertyString = "".concat(descriptionString).concat(prop.name).concat(punctuationString).concat((0, exports.simplifiedSchemaToTypeDefinitionString)(prop.schema), ";");
            return propertyString;
        });
        var objectString = "{\n".concat(objectParts.join("\n"), "\n};\n");
        return objectString;
    }
    // NB: Should never be the case, we have handled all types
    return "";
};
exports.simplifiedSchemaToTypeDefinitionString = simplifiedSchemaToTypeDefinitionString;
//# sourceMappingURL=simplifiedSchemaToTypeDefinitionString.js.map