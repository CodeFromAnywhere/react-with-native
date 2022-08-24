# Fs orm

fs-orm (node operation)

ORM that works with JSON and FS

Size: 671 LOC, 1927 data characters, 470 text characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: log, kebabCase, explore, exploreOperationFolders, getPathCombinations, fs, getOperationPath, getPathsWithOperations, getProjectRoot, getRootPath, kebabCase, makeArray, mergeObjectParameters, notEmpty, path, readJsonFile, readCsvFile, readMarkdownFile, kvMdStringToJson, log, getRootPath, DbStorageMethod, kebabCase, path, fs, readJsonFile, readCsvFile, csvItemToString, markdownParseToMarkdownString, readMarkdownFile, kvmdParseToMarkdownString, readKvmdFile, DbStorageMethod, MarkdownParse, KeyValueMarkdownParse, DbStorageMethod

# Outline

## Docs

- [Getting started](#getting-started)

## Functions

- [getDatabaseFiles](#getDatabaseFiles)
- [getPossibleModelFiles](#getPossibleModelFiles)
- [makeGet](#makeGet)
- [setFromValue](#setFromValue)



# Docs

## Getting started

To get started with fs-orm, please have a look at the `db` package. This package shows you how to initiate a database object.

It is using a package `sdk-db` which you can create yourself (or generate, based on the models found in your monorepo)

From there, it's very easy to use fs-orm. For example, if you want to get all the `Todo` values, simply use something like this

```ts
const todos = await db.get("Todo");
```


# Functions

## getDatabaseFiles

Max. indexation depth: 7, 

this function gets the files that the data can be stored, by convention, based on the model and the config

## Returns: unknown

## getPossibleModelFiles

Max. indexation depth: 2, 

gets all fileNames that should be only used for this model, by convention

### Returns: array

- null: string





### Arguments

#### modelName: string







## makeGet

Max. indexation depth: 6, 



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## setFromValue

Max. indexation depth: 5, 

used for set and push

used by update, remove, upsert indirectly (through 'set')

## Returns: unknown

