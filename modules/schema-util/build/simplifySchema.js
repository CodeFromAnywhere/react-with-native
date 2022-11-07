"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifySchema = void 0;
var log_1 = require("log");
var schema_util_1 = require("./schema-util");
var getRefLink_1 = require("./getRefLink");
var js_util_1 = require("js-util");
var getReferenceParameterInfo_1 = require("./getReferenceParameterInfo");
var findFirstCommentTypes_1 = require("./findFirstCommentTypes");
/**
 Return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema.
 
 A SimplifiedSchema is a data structure that allows you to easily define type interfaces that need to build out forms.

 # Todo
 
Dual types aren't done right yet. I probably don't look at `anyOf` yet, which makes it result in an empty object.

For example, this one is problematic:

INPUT:

```json
{
"schema": {
    "anyOf": [
      {"type": "string"},
      {"type": "array","items": {"type": "string"}}
    ]
  },
```

Output:
```json
{
"simplifiedSchema": {
  "properties": [],
  "type": "object"
},
}
      ```

      To test this one, test `npx rebuildOperation filename-conventions`
 */
var simplifySchema = function (
/** The name of the type interface, (this could be used as $ref). */
name, 
/** The schema that needs to be simplified */
schema, 
/** The array of other schemas found when crawling file this schema was found in. this also includes all refs to other type interfaces in all schemas in that file */
possibleRefs, 
/**
 * This function is recursive. If we find any reference to another schema, we will add the name of the current schema to the rootStack and explore that schema.
 */
rootStack) {
    if (Array.isArray(schema.type)) {
        // let's do this one later
        (0, log_1.log)("I don't support this usecase (type is an array of multiple types)... ".concat(schema.type.join(",")), {
            type: "debug",
        });
    }
    var type = Array.isArray(schema.type) ? schema.type[0] : schema.type;
    var newRootStack = name ? rootStack.concat(name) : rootStack;
    var refName = (0, getRefLink_1.getRefLink)(schema.$ref);
    // NB: we already encountered this ref before, let's avoid infinite recursion here.
    var isCircularRef = !!refName && rootStack.includes(refName);
    if (refName && !isCircularRef) {
        var refSchema = possibleRefs.find(function (r) { return r.name === refName; });
        if (!refSchema) {
            (0, log_1.log)("Strange, ref was not present in the possible refs", {
                type: "debug",
            }, { possibleRefNames: possibleRefs.map(function (x) { return x.name; }), refName: refName });
        }
        var thisDescription = schema.description
            ? "".concat(schema.description, "\n\n")
            : "";
        var mergedSchema = (refSchema === null || refSchema === void 0 ? void 0 : refSchema.schema)
            ? __assign(__assign({}, refSchema.schema), { description: "".concat(thisDescription).concat(refSchema.schema.description || "") }) : undefined;
        return mergedSchema
            ? (0, exports.simplifySchema)(refName, mergedSchema, possibleRefs, newRootStack)
            : undefined;
    }
    var fullComment = schema.description;
    var commentTypeObject = (0, findFirstCommentTypes_1.findFirstCommentTypes)(fullComment);
    // TODO: Add all other `CommentType`s as properties
    var simplifiedPrimitive = __assign({ enum: schema.enum, circularRefName: refName, fullComment: fullComment }, commentTypeObject);
    if (type === "boolean") {
        return __assign(__assign({}, simplifiedPrimitive), { type: "boolean" });
    }
    if (type === "integer" || type === "number") {
        // NB: integers are also numbers
        return __assign(__assign({}, simplifiedPrimitive), { type: "number" });
    }
    if (type === "null") {
        return __assign(__assign({}, simplifiedPrimitive), { type: "null" });
    }
    if (type === "string") {
        return __assign(__assign({}, simplifiedPrimitive), { type: "string" });
    }
    if (type === "array") {
        var items = (0, schema_util_1.getSchemaItems)(schema);
        var simplifiedItems = items
            .map(function (item) {
            var itemName = (0, getRefLink_1.getRefLink)(item.$ref) || null;
            var schema = (0, exports.simplifySchema)(itemName, item, possibleRefs, name ? rootStack.concat(name) : rootStack);
            if (!schema)
                return;
            return {
                schema: schema,
                name: itemName,
            };
        })
            .filter(js_util_1.notEmpty);
        return __assign(__assign({}, simplifiedPrimitive), { items: simplifiedItems, type: "array" });
    }
    // NB: type must be an object here, it's the only possibility left...
    // in case of objects
    var properties = (0, schema_util_1.getProperties)(schema);
    var simplifiedProperties = properties
        .map(function (property) {
        var schema = (0, exports.simplifySchema)(property.name, property.schema, possibleRefs, newRootStack);
        if (!schema)
            return;
        var possibleReferenceParameterNames = (0, getReferenceParameterInfo_1.getPossibleReferenceParameterNames)(property.name);
        var hasReferenceParameter = !!properties.find(function (x) {
            return possibleReferenceParameterNames.includes(x.name);
        });
        // NB: if the property has a model reference, we just need the model reference, not the whole model. This is only for retreiving, it's not present in the database.
        if (hasReferenceParameter)
            return;
        return {
            name: property.name,
            required: property.required,
            schema: schema,
        };
    })
        .filter(js_util_1.notEmpty);
    return __assign(__assign({}, simplifiedPrimitive), { properties: simplifiedProperties, type: "object" });
};
exports.simplifySchema = simplifySchema;
//# sourceMappingURL=simplifySchema.js.map