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



# Functions

## objectStringToJson()

takes an object string and parses it to JSON

Instead of requiring objects to be in JSON format, they can be in the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }

NB: you can have objects in parameters of objects by surrounding the same syntax with `{` and `}`


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** | {  }   |    |



## parseIfJson()

if it's a string with a parsable JSON inside, parse it and return the object/array


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |



## parsePrimitiveJson()

parses a string to a string, number, boolean, null or undefined.

optionally you can chooose to force a type...

TODO: figure out how I can do this without ts-ignores


| Input      |    |    |
| ---------- | -- | -- |
| value | string |  |
| **Output** | ul / trin / umbe / als / ru   |    |



## stringToJson()

takes any string, and parses it to JSON

if you provide (nested) objects, make sure to use the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }


| Input      |    |    |
| ---------- | -- | -- |
| value | string |  |,| isObject (optional) | boolean |  |
| **Output** |    |    |


# Interfaces

## 🔷 JSONValue

# Variables

## 📄 objectStringToJson (exported const)

takes an object string and parses it to JSON

Instead of requiring objects to be in JSON format, they can be in the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }

NB: you can have objects in parameters of objects by surrounding the same syntax with `{` and `}`


## 📄 parseIfJson (exported const)

if it's a string with a parsable JSON inside, parse it and return the object/array


## 📄 parsePrimitiveJson (exported const)

parses a string to a string, number, boolean, null or undefined.

optionally you can chooose to force a type...

TODO: figure out how I can do this without ts-ignores


## 📄 stringToJson (exported const)

takes any string, and parses it to JSON

if you provide (nested) objects, make sure to use the following format:

key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }

