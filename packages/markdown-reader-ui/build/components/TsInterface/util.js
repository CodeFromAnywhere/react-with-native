"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeDefinitionString = exports.getType = exports.getArrayType = exports.getOneArrayType = exports.getFirstEnum = exports.getRefLink = exports.getSchema = exports.getSchemaItems = void 0;
var js_util_1 = require("js-util");
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
 * gets the $ref from a schema and parses the interface name from it
 */
var getRefLink = function (ref) {
    return ref === null || ref === void 0 ? void 0 : ref.split("/").pop();
};
exports.getRefLink = getRefLink;
/**
 * gets the first enum of a property of a definition
 *
 * (DONT KNOW WHY)
 */
var getFirstEnum = function (schema, key) {
    var _a, _b;
    var propertyKey = (_a = schema === null || schema === void 0 ? void 0 : schema.properties) === null || _a === void 0 ? void 0 : _a[key];
    if (typeof propertyKey !== "object") {
        return;
    }
    var firstEnum = (_b = propertyKey.enum) === null || _b === void 0 ? void 0 : _b[0];
    return firstEnum;
};
exports.getFirstEnum = getFirstEnum;
/**
 * TODO: Can probably omit this function as it's just passing to another function
 */
var getOneArrayType = function (_a) {
    var schema = _a.schema, model = _a.model;
    return (0, exports.getTypeDefinitionString)({ name: "", schema: schema, model: model });
};
exports.getOneArrayType = getOneArrayType;
/**
 * gets array type from
 */
var getArrayType = function (_a) {
    var items = _a.items, model = _a.model;
    return "".concat(items
        ? items.map(function (schema) {
            return (0, exports.getOneArrayType)({
                schema: schema,
                model: model,
            });
        })
        : "", "[]");
};
exports.getArrayType = getArrayType;
/**
 * gets a type string from a schema
 */
var getType = function (schema, model) {
    var _a;
    var items = (0, exports.getSchemaItems)(schema);
    if (!(schema === null || schema === void 0 ? void 0 : schema.type)) {
        return "";
    }
    var type = ((_a = schema.enum) === null || _a === void 0 ? void 0 : _a.length)
        ? schema.enum.map(function (x) { return "\"".concat(x, "\""); }).join(" | ")
        : schema.type === "array"
            ? (0, exports.getArrayType)({ model: model, items: items })
            : Array.isArray(schema.type)
                ? schema.type.join(",")
                : schema.type;
    return type;
};
exports.getType = getType;
/**
 * makes a string of a type interface
 */
var getTypeDefinitionString = function (_a) {
    var name = _a.name, schema = _a.schema, model = _a.model;
    var propertyKeys = (schema === null || schema === void 0 ? void 0 : schema.properties) ? Object.keys(schema.properties) : [];
    return (schema === null || schema === void 0 ? void 0 : schema.type) === "object"
        ? "interface ".concat(name, " {\n\t").concat(propertyKeys
            .map(function (key) {
            var _a;
            var propertyDefinition = (0, exports.getSchema)((_a = schema === null || schema === void 0 ? void 0 : schema.properties) === null || _a === void 0 ? void 0 : _a[key]);
            return "".concat(key, ": ").concat((0, exports.getType)(propertyDefinition, model));
        })
            .join("\n\t"), "\n}")
        : (0, exports.getType)(schema, model);
};
exports.getTypeDefinitionString = getTypeDefinitionString;
//# sourceMappingURL=util.js.map