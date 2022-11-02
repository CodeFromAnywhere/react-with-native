# Schema util

schema-util (js operation)



# Outline

## Functions

- [findFirstCommentTypes](#findFirstCommentTypes)
- [getPossibleReferenceParameterNames](#getPossibleReferenceParameterNames)
- [getProperties](#getProperties)
- [getRefLink](#getRefLink)
- [getReferencableModels](#getReferencableModels)
- [getReferenceParameterInfo](#getReferenceParameterInfo)
- [getSchemaItems](#getSchemaItems)
- [getSchema](#getSchema)
- [simplifiedSchemaToTypeDefinitionString](#simplifiedSchemaToTypeDefinitionString)
- [simplifySchema](#simplifySchema)

## Interfaces

- [JSONSchema7](#jsonschema7)
- [JSONSchema7Definition](#jsonschema7definition)
- [ReferenceParameterInfo](#referenceparameterinfo)
- [Schema](#schema)
- [SchemaItem](#schemaitem)
- [SchemaProperty](#schemaproperty)
- [SimplifiedSchema](#simplifiedschema)

## Variables

- [findFirstCommentTypes](#findfirstcommenttypes)
- [getPossibleReferenceParameterNames](#getpossiblereferenceparameternames)
- [getProperties](#getproperties)
- [getRefLink](#getreflink)
- [getReferencableModels](#getreferencablemodels)
- [getReferenceParameterInfo](#getreferenceparameterinfo)
- [getSchemaItems](#getschemaitems)
- [getSchema](#getschema)
- [simplifiedSchemaToTypeDefinitionString](#simplifiedschematotypedefinitionstring)
- [simplifySchema](#simplifyschema)



# Functions

## findFirstCommentTypes

Tries to find tie first appearing special comment line and parses it and returns it as part of the `CommentTypeObject`


### Returns: object

### Parameters (1)

#### Parameter 1: strippedFullComment (optional): string

## getPossibleReferenceParameterNames

returns the reference parameterNames...


e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: parameterName: string

## getProperties

Gets all the properties of a schema


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: schema (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object |  |
| dependencies (optional) | object |  |
| propertyNames (optional) | object |  |
| if (optional) | object |  |
| then (optional) | object |  |
| else (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |



## getRefLink

gets the $ref from a schema and parses the interface name from it




### Parameters (1)

#### Parameter 1: ref (optional): string

## getReferencableModels

based on the object properties in SimplifiedSchema, returns the model names that can be referenced


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: simplifiedSchema (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |



## getReferenceParameterInfo

Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:

- descriptorName with the suffixing underscore is optional
- referenceKey can be slug, index, or id (or there plural variants)
- modelName should refer to a database model


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameterName  | string |  |
| dataParameterName (optional) | string |  |
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |



### Parameters (1)

#### Parameter 1: parameterName: string

## getSchemaItems

==========




### Parameters (1)

#### Parameter 1: schema (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object |  |
| dependencies (optional) | object |  |
| propertyNames (optional) | object |  |
| if (optional) | object |  |
| then (optional) | object |  |
| else (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |



## getSchema

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it


### Returns: object

### Parameters (1)

#### Parameter 1: maybeSchema (optional): object

## simplifiedSchemaToTypeDefinitionString

Converts a simplifiedSchema definition back into a type interface string

With this, types can be generated in different ways




### Parameters (1)

#### Parameter 1: simplifiedSchema (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |



## simplifySchema

Return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema.

A SimplifiedSchema is a data structure that allows you to easily define type interfaces that need to build out forms.


## Todo

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


### Returns: object

### Parameters (4)

#### Parameter 1: name: string

#### Parameter 2: schema: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| dependencies (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |



#### Parameter 3: possibleRefs: array

- null: object






#### Parameter 4: rootStack: array

- null: string





# Interfaces

## JSONSchema7

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object |  |
| dependencies (optional) | object |  |
| propertyNames (optional) | object |  |
| if (optional) | object |  |
| then (optional) | object |  |
| else (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object |  |



## JSONSchema7Definition

JSON Schema v7








## ReferenceParameterInfo

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameterName  | string |  |
| dataParameterName (optional) | string |  |
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |



## Schema

schema type interface we use in TsInterface

NB: don't export because this would make this type exist twice.





Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object |  |
| dependencies (optional) | object |  |
| propertyNames (optional) | object |  |
| if (optional) | object |  |
| then (optional) | object |  |
| else (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object |  |



## SchemaItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |



## SchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |
| required  | boolean |  |



## SimplifiedSchema

JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form





Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |
| type  | string |  |
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |


# Variables

## findFirstCommentTypes (exported const)

Tries to find tie first appearing special comment line and parses it and returns it as part of the `CommentTypeObject`


## getPossibleReferenceParameterNames (exported const)

returns the reference parameterNames...


e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```


## getProperties (exported const)

Gets all the properties of a schema


## getRefLink (exported const)

gets the $ref from a schema and parses the interface name from it


## getReferencableModels (exported const)

based on the object properties in SimplifiedSchema, returns the model names that can be referenced


## getReferenceParameterInfo (exported const)

Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:

- descriptorName with the suffixing underscore is optional
- referenceKey can be slug, index, or id (or there plural variants)
- modelName should refer to a database model


## getSchemaItems (exported const)

## getSchema (exported const)

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it


## simplifiedSchemaToTypeDefinitionString (exported const)

Converts a simplifiedSchema definition back into a type interface string

With this, types can be generated in different ways


## simplifySchema (exported const)

Return a SimplifiedSchema by giving the JSONSchema7 schema, its name and a list of possible references in the JSONSchema.

A SimplifiedSchema is a data structure that allows you to easily define type interfaces that need to build out forms.


## Todo

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

