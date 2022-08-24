"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaToFields = void 0;
var js_util_1 = require("js-util");
var schema_util_1 = require("schema-util");
var convert_case_1 = require("convert-case");
/**
 * Maps a `Schema[]` with some metadata (TsInterface[]) to a form `Field[]`
 *
 * Jeezzz this is going to be hard!
 */
var schemaToFields = function (schema, refs, makeField) {
    var schemas = (0, js_util_1.makeArray)(schema);
    // merge all properties
    var allProperties = schemas
        .map(function (schema) {
        var properties = (0, schema_util_1.getProperties)(schema);
        return properties;
    })
        .filter(js_util_1.notEmpty)
        .flat();
    var fields = allProperties.map(function (prop) {
        // We're assuming people have some fields...
        var field = makeField("text", {
            description: prop.schema.description,
            initialValue: prop.schema.default,
            title: (0, convert_case_1.humanCase)(prop.name),
        });
        return field;
    });
    return fields;
};
exports.schemaToFields = schemaToFields;
//# sourceMappingURL=schemaToFields.js.map