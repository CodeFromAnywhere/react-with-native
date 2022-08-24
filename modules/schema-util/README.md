# Schema util

schema-util (node operation)

It's hard to work with them if you don't know what means what. In this operation I'll summarize everything and give examples.

Size: 395 LOC, 2291 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: JSONSchema7Definition, JSONSchema7, JSONSchema7
- From Operations: SimplifiedSchema, referenceParameterNames, referencePluralParameterNames, lowerCaseArray, pascalCase, makeArray, notEmpty, TsInterface, SimplifiedSchema, log, notEmpty, SimplifiedSchema, SimplifiedSchemaProperty, SimplifiedSchemaItem

# Outline

## Functions

- [getReferencableModels](#getReferencableModels)
- [getReferenceParameterInfo](#getReferenceParameterInfo)
- [makeSingular](#makeSingular)
- [getSchemaItems](#getSchemaItems)
- [getSchema](#getSchema)
- [getRefLink](#getRefLink)
- [getProperties](#getProperties)
- [simplifiedSchemaToTypeDefinitionString](#simplifiedSchemaToTypeDefinitionString)
- [simplifySchema](#simplifySchema)



# Functions

## getReferencableModels

Max. indexation depth: 3, 

based on the object properties in SimplifiedSchema, returns the model names that can be referenced

### Returns: array

- null: object





### Arguments

#### simplifiedSchema (optional): object



```md
JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form
```


Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |


## getReferenceParameterInfo

Max. indexation depth: 2, 

Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:

- descriptorName with the suffixing underscore is optional
- referenceKey can be slug, index, or id (or there plural variants)
- modelName should refer to a database model

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |


### Arguments

#### parameterName: string







## makeSingular

Max. indexation depth: 2, 

makes a word singular (only english)

e.g.:
- indexes becomes index
- words becomes word

NB: not well tested

## Returns: unknown

### Arguments

#### word: string







## getSchemaItems

Max. indexation depth: 1, 

==========

## Returns: unknown

### Arguments

#### schema (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |


## getSchema

Max. indexation depth: 1, 

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



### Arguments

#### maybeSchema (optional): object



```md
JSON Schema v7
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## getRefLink

Max. indexation depth: 1, 

gets the $ref from a schema and parses the interface name from it

## Returns: unknown

### Arguments

#### ref (optional): string







## getProperties

Max. indexation depth: 6, 

Gets all the properties of a schema

### Returns: array

- null: object





### Arguments

#### schema (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |


## simplifiedSchemaToTypeDefinitionString

Max. indexation depth: 4, 

Converts a simplifiedSchema definition back into a type interface string

With this, types can be generated in different ways

## Returns: unknown

### Arguments

#### simplifiedSchema (optional): object



```md
JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form
```


Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |


## simplifySchema

Max. indexation depth: 5, 

return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema

## Returns: unknown

### Arguments

#### name: string



```md
The name of the type interface, (this could be used as $ref).
```




#### schema: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string | Meta schema<br /><br />Recommended values:<br />- 'http://json-schema.org/schema#'<br />- 'http://json-schema.org/hyper-schema#'<br />- 'http://json-schema.org/draft-07/schema#'<br />- 'http://json-schema.org/draft-07/hyper-schema#' |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object | Primitive type |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object | JSON Schema v7 |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object | JSON Schema v7 |
| dependencies (optional) | object |  |
| propertyNames (optional) | object | JSON Schema v7 |
| if (optional) | object | JSON Schema v7 |
| then (optional) | object | JSON Schema v7 |
| else (optional) | object | JSON Schema v7 |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object | JSON Schema v7 |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object | Primitive type |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object | Primitive type |


#### possibleRefs: array

- null: object

```md
The array of other schemas found when crawling file this schema was found in. this also includes all refs to other type interfaces in all schemas in that file
```




#### rootStack: array

- null: string

```md
This function is recursive. If we find any reference to another schema, we will add the name of the current schema to the rootStack and explore that schema.
```




