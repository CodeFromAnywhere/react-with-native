# Parse primitive

parse-primitive (js operation)



# Outline

## Functions

- [parsePrimitiveArray](#parsePrimitiveArray)
- [parsePrimitiveBoolean](#parsePrimitiveBoolean)
- [parsePrimitiveString](#parsePrimitiveString)
- [parsePrimitive](#parsePrimitive)

## Interfaces

- [PrimitiveResult](#primitiveresult)
- [SimplifiedSchema](#simplifiedschema)

## Variables

- [parsePrimitiveArray](#parseprimitivearray)
- [parsePrimitiveBoolean](#parseprimitiveboolean)
- [parsePrimitiveString](#parseprimitivestring)
- [parsePrimitive](#parseprimitive)



# Functions

## parsePrimitiveArray

### Parameters (1)

#### Parameter 1: string: string

## parsePrimitiveBoolean

### Returns: boolean

### Parameters (1)

#### Parameter 1: string: string

## parsePrimitiveString

### Parameters (1)

#### Parameter 1: string: string

## parsePrimitive

parses a string into the value it should be

if you provide a `simplifiedSchema`, that will be used to parse according to the shape of the schema


### Returns: string(Enum: ul | trin | umbe | als | ru | tring[)

### Parameters (2)

#### Parameter 1: string: string

#### Parameter 2: simplifiedSchema (optional): object

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


# Interfaces

## PrimitiveResult

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

## parsePrimitiveArray (exported const)

## parsePrimitiveBoolean (exported const)

## parsePrimitiveString (exported const)

## parsePrimitive (exported const)

parses a string into the value it should be

if you provide a `simplifiedSchema`, that will be used to parse according to the shape of the schema

