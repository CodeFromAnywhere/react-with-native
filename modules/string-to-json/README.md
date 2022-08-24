# String to json

string-to-json (node operation)

Size: 120 LOC, 2125 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: mergeObjectsArray

# Outline

## Functions

- [objectStringToJson](#objectStringToJson)
- [parseIfJson](#parseIfJson)
- [parsePrimitiveJson](#parsePrimitiveJson)
- [stringToJson](#stringToJson)



# Functions

## objectStringToJson

Max. indexation depth: 2, 

takes an object string and parses it to JSON

Instead of requiring objects to be in JSON format, they can be in the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }

NB: you can have objects in parameters of objects by surrounding the same syntax with `{` and `}`

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



### Arguments

#### string: string







## parseIfJson

Max. indexation depth: 2, 

if it's a string with a parsable JSON inside, parse it and return the object/array

## Returns: unknown

### Arguments

#### string: string







## parsePrimitiveJson

Max. indexation depth: 2, 

parses a string to a string, number, boolean, null or undefined.

optionally you can chooose to force a type...

TODO: figure out how I can do this without ts-ignores

## Returns: unknown

### Arguments

#### value: string







## stringToJson

Max. indexation depth: 2, 

takes any string, and parses it to JSON

if you provide (nested) objects, make sure to use the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }

## Returns: unknown

### Arguments

#### value: string







#### isObject (optional): boolean







