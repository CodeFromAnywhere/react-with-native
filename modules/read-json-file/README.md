# Read json file

read-json-file (node operation)

Size: 61 LOC, 2125 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: canRead, fs, Path, canReadSync

# Outline

## Functions

- [readJsonFile](#readJsonFile)
- [readJsonFileSync](#readJsonFileSync)
- [tryParseJson](#tryParseJson)



# Functions

## readJsonFile

Max. indexation depth: 1, 

Reads and parses JSON file

make sure to specify what type the file contains as a generic!

## Returns: unknown

### Arguments

#### filePath (optional): string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## readJsonFileSync

Max. indexation depth: 1, 

Reads and parses JSON file

make sure to specify what type the file contains as a generic!

### Returns: string(Enum: ul | ) 







### Arguments

#### filePath: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## tryParseJson

Max. indexation depth: 3, 

if text isn't json, returns null

### Returns: string(Enum: ul | ) 







### Arguments

#### text: string







#### logParseError (optional): boolean







