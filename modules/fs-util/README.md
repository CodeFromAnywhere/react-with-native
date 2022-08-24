# Fs util

fs-util (js operation)

Size: 618 LOC, 2256 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: readdirSync, constants, rmSync, existsSync, accessSync, cpSync, cp, PathLike, Dir, Dirent, Stats, promisify, parse, basename, delimiter, dirname, extname, format, isAbsolute, join, normalize, resolve, sep
- From Operations: mergeObjectsArray, makeArray, notEmpty

# Outline

## Functions

- [importFromFiles](#importFromFiles)
- [findSensibleFiles](#findSensibleFiles)
- [isArrayGuard](#isArrayGuard)
- [findAllMd](#findAllMd)
- [findFilesRecursively](#findFilesRecursively)
- [writeToFiles](#writeToFiles)
- [canAccess](#canAccess)
- [canAccessSync](#canAccessSync)
- [canSee](#canSee)
- [canRead](#canRead)
- [canWrite](#canWrite)
- [canExecute](#canExecute)
- [canSeeSync](#canSeeSync)
- [canReadSync](#canReadSync)
- [canWriteSync](#canWriteSync)
- [canExecuteSync](#canExecuteSync)
- [getPathCombinations](#getPathCombinations)
- [writeJsonToFile](#writeJsonToFile)
- [removeTrailingSlash](#removeTrailingSlash)
- [getSubExtension](#getSubExtension)
- [getLastFolder](#getLastFolder)
- [getFolder](#getFolder)
- [getFileName](#getFileName)
- [withoutExtension](#withoutExtension)
- [getExtension](#getExtension)
- [findFileNameCaseInsensitive](#findFileNameCaseInsensitive)
- [parseMd](#parseMd)
- [removeAllExcept](#removeAllExcept)



# Functions

## importFromFiles

Max. indexation depth: 8, 

DEPRECATED:

works fine but this requires us to know exactly what we want from the file, so it requires a very clear convention.
better would be to introspect the code and just require whatever's there
returns T[] where every T is one of:
- the default export (importStrategy "default")
- the export with the name of the extension
- an object with a subset of exports

### Returns: array

- null: object





## findSensibleFiles

Max. indexation depth: 3, 

DEPRECATED:

this is sensible-specific

### Returns: array

- null: object





## isArrayGuard

Max. indexation depth: 1, 

DEPRECATED

## Returns: unknown

## findAllMd

Max. indexation depth: 2, 

DEPRECATED: `k-explore` can be used

## Returns: unknown

## findFilesRecursively

Max. indexation depth: 5, 

DEPRECATED: in favour of `explore` from "k-explore"

### Returns: array

- null: object





## writeToFiles

Max. indexation depth: 2, 

writes all values in an object to the file that should be specified as key of that value

## Returns: unknown

### Arguments

#### fileObject: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## canAccess

Max. indexation depth: 2, 

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).

## Returns: unknown

### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



#### mode: number







## canAccessSync

Max. indexation depth: 2, 

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).

### Returns: boolean







### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



#### mode: number







## canSee

Max. indexation depth: 0, 

File is visible to the calling process

## Returns: unknown

### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## canRead

Max. indexation depth: 0, 

File is readable to the calling process

## Returns: unknown

### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## canWrite

Max. indexation depth: 0, 

File is writable to the calling process

## Returns: unknown

### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## canExecute

Max. indexation depth: 1, 

File is executable to the calling process

## Returns: unknown

### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## canSeeSync

Max. indexation depth: 1, 

File is visible to the calling process

## Returns: unknown

### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## canReadSync

Max. indexation depth: 0, 

File is readable to the calling process

### Returns: boolean







### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## canWriteSync

Max. indexation depth: 1, 

File is writable to the calling process

### Returns: boolean







### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## canExecuteSync

Max. indexation depth: 1, 

File is executable to the calling process

### Returns: boolean







### Arguments

#### p: object



```md
Valid types for path values in "fs".
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## getPathCombinations

Max. indexation depth: 5, 

gets combinations for paths

input: [["operation1","operation2"], "index/value-export", ["index.ts","test.ts","cli.ts"]]
output: ["operation1/index/value-export/index.ts","operation2/index/value-export/index.ts","operation1/index/value-export/test.ts","operation2/index/value-export/test.ts","operation1/index/value-export/cli.ts","operation2/index/value-export/cli.ts"]

### Returns: array

- null: string





### Arguments

#### chunksSegments: array

- null: object





## writeJsonToFile

Max. indexation depth: 2, 

write json to a file

makes the dir and file if they don't exist

## Returns: unknown

### Arguments

#### p: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## removeTrailingSlash

Max. indexation depth: 1, 



## Returns: unknown

### Arguments

#### p: string







## getSubExtension

Max. indexation depth: 1, 



### Returns: string







### Arguments

#### fileName: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## getLastFolder

Max. indexation depth: 1, 

removes everything after the last slash to get folder path

input: /Users/king/Documents/some/folder/xyz
output: xyz

input: /Users/king/Documents/some/folder/xyz.txt
output: folder

## Returns: unknown

### Arguments

#### pathString: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## getFolder

Max. indexation depth: 2, 

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)

## Returns: unknown

### Arguments

#### pathString: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## getFileName

Max. indexation depth: 1, 

removes everything before the last slash to get folder path

### Returns: string







### Arguments

#### pathString: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## withoutExtension

Max. indexation depth: 1, 

removes extension from the filename

## Returns: unknown

### Arguments

#### fileName: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## getExtension

Max. indexation depth: 1, 

returns the extension of the filename or path

NB: not sure, but could be nice to replace this with path.extname(pathString)

## Returns: unknown

### Arguments

#### fileNameOrPath: string







## findFileNameCaseInsensitive

Max. indexation depth: 4, 

returns a path of a fileName

## Returns: unknown

### Arguments

#### folderPath: string







#### fileName: string



```md
fileName with extension
```




## parseMd

Max. indexation depth: 2, 

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md

## Returns: unknown

### Arguments

#### mdFilePath: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## removeAllExcept

Max. indexation depth: 3, 

Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself

NB: make this work with subdirectories!

## Returns: unknown

### Arguments

#### folderPath: string







#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| ignore (optional) | array | array of relative folder paths and file paths that should not be removed (include the extensions!) |
| typeToRemove (optional) | string |  |


