# String to json

string-to-json (js operation)

Parser functions to parse strings (that can be inputted in the command-line) into objects (that can be read in functions)




# Outline

## Functions

- [objectStringToJson](#objectStringToJson)
- [parseIfJson](#parseIfJson)
- [parsePrimitiveJson](#parsePrimitiveJson)
- [stringToJson](#stringToJson)

## Interfaces

- [JSONValue](#jsonvalue)

## Variables

- [objectStringToJson](#objectstringtojson)
- [parseIfJson](#parseifjson)
- [parsePrimitiveJson](#parseprimitivejson)
- [stringToJson](#stringtojson)
- [test](#test)



# Functions

## objectStringToJson

takes an object string and parses it to JSON

Instead of requiring objects to be in JSON format, they can be in the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }

NB: you can have objects in parameters of objects by surrounding the same syntax with `{` and `}`


### Returns: object

### Parameters (1)

#### Parameter 1: string: string

## parseIfJson

if it's a string with a parsable JSON inside, parse it and return the object/array




### Parameters (1)

#### Parameter 1: string: string

## parsePrimitiveJson

parses a string to a string, number, boolean, null or undefined.

optionally you can chooose to force a type...

TODO: figure out how I can do this without ts-ignores


### Returns: string(Enum: ul | trin | umbe | als | ru)

### Parameters (1)

#### Parameter 1: value: string

## stringToJson

takes any string, and parses it to JSON

if you provide (nested) objects, make sure to use the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }




### Parameters (2)

#### Parameter 1: value: string

#### Parameter 2: isObject (optional): boolean

# Interfaces

## JSONValue

# Variables

## objectStringToJson (exported const)

takes an object string and parses it to JSON

Instead of requiring objects to be in JSON format, they can be in the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }

NB: you can have objects in parameters of objects by surrounding the same syntax with `{` and `}`


## parseIfJson (exported const)

if it's a string with a parsable JSON inside, parse it and return the object/array


## parsePrimitiveJson (exported const)

parses a string to a string, number, boolean, null or undefined.

optionally you can chooose to force a type...

TODO: figure out how I can do this without ts-ignores


## stringToJson (exported const)

takes any string, and parses it to JSON

if you provide (nested) objects, make sure to use the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }


## test (unexported const)

