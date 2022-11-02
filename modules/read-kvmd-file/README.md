# Read kvmd file

read-kvmd-file (node operation)



# Outline

## Functions

- [readKvmdFile](#readKvmdFile)
- [test2](#test2)
- [test](#test)

## Interfaces

- [DbFileLocation](#dbfilelocation)
- [Path](#path)

## Variables

- [readKvmdFile](#readkvmdfile)
- [test2](#test2)
- [test](#test)



# Functions

## readKvmdFile

Reads and parses a markdown file




### Parameters (2)

#### Parameter 1: filePath: string

#### Parameter 2: dbFileLocation: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## test2

## test

# Interfaces

## DbFileLocation

Object used to hand over all information about the location of a db-file in a structured way





Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## Path

unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.







# Variables

## readKvmdFile (exported const)

Reads and parses a markdown file


## test2 (unexported const)

## test (unexported const)

