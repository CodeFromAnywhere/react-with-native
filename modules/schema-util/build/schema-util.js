"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProperties = exports.getSchema = exports.getSchemaItems = void 0;
var js_util_1 = require("js-util");
//==========
/**
 * Since `JSONSchema7`'s property `items` is fairly hard to use, this function gets that property in an easier to use way.
 */
var getSchemaItems = function (schema) {
    var schemas = (0, js_util_1.makeArray)(schema === null || schema === void 0 ? void 0 : schema.items).map(exports.getSchema).filter(js_util_1.notEmpty);
    return schemas;
};
exports.getSchemaItems = getSchemaItems;
/**
 * parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it
 */
var getSchema = function (maybeSchema) {
    return typeof maybeSchema !== "object" ? undefined : maybeSchema;
};
exports.getSchema = getSchema;
/**
 * Gets all the properties of a schema
 */
var getProperties = function (schema) {
    if (!schema)
        return [];
    var propertyKeys = schema.properties ? Object.keys(schema.properties) : [];
    var properties = propertyKeys
        .map(function (key) {
        var _a, _b;
        var propertySchema = (0, exports.getSchema)((_a = schema.properties) === null || _a === void 0 ? void 0 : _a[key]);
        return propertySchema
            ? {
                name: key,
                schema: propertySchema,
                required: ((_b = schema.required) === null || _b === void 0 ? void 0 : _b.includes(key)) || false,
            }
            : null;
    })
        .filter(js_util_1.notEmpty);
    return properties;
};
exports.getProperties = getProperties;
//# sourceMappingURL=schema-util.js.map