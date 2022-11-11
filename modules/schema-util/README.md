# Schema util

schema-util (`OperationClassification` js)



# Api reference

## getReferenceParameterInfo()

Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:

- descriptorName with the suffixing underscore is optional
- referenceKey can be slug, index, or id (or there plural variants)
- modelName should refer to a database model


| Input      |    |    |
| ---------- | -- | -- |
| parameterName | string |  |
| **Output** | { parameterName: string, <br />dataParameterName?: string, <br />descriptor?: string, <br />keyInModel?: string, <br />interfaceName?: string, <br />isReferenceMultipleParameter: boolean, <br />isReferenceSingleParameter: boolean, <br />isReferenceParameter: boolean, <br /> }   |    |



## 📄 getReferenceParameterInfo (exported const)

Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:

- descriptorName with the suffixing underscore is optional
- referenceKey can be slug, index, or id (or there plural variants)
- modelName should refer to a database model


## getSchema()

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it


| Input      |    |    |
| ---------- | -- | -- |
| maybeSchema (optional) | `JSONSchema7Definition` |  |
| **Output** | {  }   |    |



## 📄 getSchema (exported const)

parses a JSONSchema7Definition to JSONSchema7|undefined so we can use it


## getProperties()

Gets all the properties of a schema


| Input      |    |    |
| ---------- | -- | -- |
| schema (optional) | `Schema` | schema type interface we use in TsInterface

NB: don't export because this would make this type exist twice. |
| **Output** | { name: string, <br />schema: {  }, <br />required: boolean, <br /> }[]   |    |



## getReferencableModels()

based on the object properties in SimplifiedSchema, returns the model names that can be referenced


| Input      |    |    |
| ---------- | -- | -- |
| simplifiedSchema (optional) | `SimplifiedSchema` |  |
| **Output** | { parameterName: string, <br />dataParameterName?: string, <br />descriptor?: string, <br />keyInModel?: string, <br />interfaceName?: string, <br />isReferenceMultipleParameter: boolean, <br />isReferenceSingleParameter: boolean, <br />isReferenceParameter: boolean, <br /> }[]   |    |



## 📄 getProperties (exported const)

Gets all the properties of a schema


## 📄 getReferencableModels (exported const)

based on the object properties in SimplifiedSchema, returns the model names that can be referenced


## getPossibleReferenceParameterNames()

returns the reference parameterNames...


e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```


| Input      |    |    |
| ---------- | -- | -- |
| parameterName | string |  |
| **Output** | string[]   |    |



## getRefLink()

gets the $ref from a schema and parses the interface name from it


| Input      |    |    |
| ---------- | -- | -- |
| ref (optional) | string |  |
| **Output** |    |    |



## getSchemaItems()

==========

Since `JSONSchema7`'s property `items` is fairly hard to use, this function gets that property in an easier to use way.


| Input      |    |    |
| ---------- | -- | -- |
| schema (optional) | `Schema` | schema type interface we use in TsInterface

NB: don't export because this would make this type exist twice. |
| **Output** |    |    |



## simplifySchema()

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


| Input      |    |    |
| ---------- | -- | -- |
| name | string | The name of the type interface, (this could be used as $ref). |,| schema | `JSONSchema7` | The schema that needs to be simplified |,| possibleRefs | { name: string, <br />schema: `JSONSchema7`, <br /> }[] | The array of other schemas found when crawling file this schema was found in. this also includes all refs to other type interfaces in all schemas in that file |,| rootStack | string[] | This function is recursive. If we find any reference to another schema, we will add the name of the current schema to the rootStack and explore that schema. |
| **Output** | {  }   |    |



## 🔹 ReferenceParameterInfo

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



## 🔹 SchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |
| required  | boolean |  |



## 📄 getPossibleReferenceParameterNames (exported const)

returns the reference parameterNames...


e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```


## 📄 getRefLink (exported const)

gets the $ref from a schema and parses the interface name from it


## 📄 getSchemaItems (exported const)

Since `JSONSchema7`'s property `items` is fairly hard to use, this function gets that property in an easier to use way.


## 📄 simplifySchema (exported const)

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

# Internal

<details><summary>Show internal (5)</summary>
    
  # findFirstCommentTypes()

Tries to find tie first appearing special comment line and parses it and returns it as part of the `CommentTypeObject`


| Input      |    |    |
| ---------- | -- | -- |
| strippedFullComment (optional) | string |  |
| **Output** | {  }   |    |



## simplifiedSchemaToTypeDefinitionString()

Converts a simplifiedSchema definition back into a type interface string

With this, types can be generated in different ways


| Input      |    |    |
| ---------- | -- | -- |
| simplifiedSchema (optional) | `SimplifiedSchema` |  |
| **Output** |    |    |



## 🔹 SchemaItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |



## 📄 findFirstCommentTypes (exported const)

Tries to find tie first appearing special comment line and parses it and returns it as part of the `CommentTypeObject`


## 📄 simplifiedSchemaToTypeDefinitionString (exported const)

Converts a simplifiedSchema definition back into a type interface string

With this, types can be generated in different ways
  </details>

