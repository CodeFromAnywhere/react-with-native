# Fs util

fs-util (js operation)

General purpose wrapper around `node:fs` and `node:path` that should be used instead of those, because it removes some of its painpoints, removes unneeded stuff, and adds some other useful functions.




# Outline

## Functions

- [canAccessSync](#canAccessSync)
- [canAccess](#canAccess)
- [canExecuteSync](#canExecuteSync)
- [canExecute](#canExecute)
- [canReadSync](#canReadSync)
- [canRead](#canRead)
- [canSeeSync](#canSeeSync)
- [canSee](#canSee)
- [canWriteSync](#canWriteSync)
- [canWrite](#canWrite)
- [copyAllRelativeFiles](#copyAllRelativeFiles)
- [findAllMd](#findAllMd)
- [findFileNameCaseInsensitive](#findFileNameCaseInsensitive)
- [findFilesRecursively](#findFilesRecursively)
- [findSensibleFiles](#findSensibleFiles)
- [getAllFoldersUntilFolder](#getAllFoldersUntilFolder)
- [getFileName](#getFileName)
- [getFirstAvailableFilename](#getFirstAvailableFilename)
- [getFolder](#getFolder)
- [getLastFolder](#getLastFolder)
- [getOneFolderUpPath](#getOneFolderUpPath)
- [getPathCombinations](#getPathCombinations)
- [importFromFiles](#importFromFiles)
- [isArrayGuard](#isArrayGuard)
- [oneUp](#oneUp)
- [parseMd](#parseMd)
- [removeAllExcept](#removeAllExcept)
- [renameAndCreate](#renameAndCreate)
- [writeJsonToFile](#writeJsonToFile)
- [writeStringToFile](#writeStringToFile)
- [writeToFiles](#writeToFiles)

## Interfaces

- [Dir](#dir)
- [Dirent](#dirent)
- [FolderPath](#folderpath)
- [FolderPath](#folderpath)
- [Fs](#fs)
- [MarkdownContent](#markdowncontent)
- [Markdown](#markdown)
- [MarkdownContent](#markdowncontent)
- [PathLike](#pathlike)
- [Path](#path)
- [PathLike](#pathlike)
- [Stats](#stats)
- [UnixTimestamp](#unixtimestamp)
- [UnixTimestamp](#unixtimestamp)

## Variables

- [access](#access)
- [appendFile](#appendfile)
- [canAccessSync](#canaccesssync)
- [canAccess](#canaccess)
- [canExecuteSync](#canexecutesync)
- [canExecute](#canexecute)
- [canReadSync](#canreadsync)
- [canRead](#canread)
- [canSeeSync](#canseesync)
- [canSee](#cansee)
- [canWriteSync](#canwritesync)
- [canWrite](#canwrite)
- [chmod](#chmod)
- [chown](#chown)
- [copyAllRelativeFiles](#copyallrelativefiles)
- [copyFile](#copyfile)
- [cp](#cp)
- [findAllMd](#findallmd)
- [findFileNameCaseInsensitive](#findfilenamecaseinsensitive)
- [findFilesRecursively](#findfilesrecursively)
- [findFiles](#findfiles)
- [findSensibleFiles](#findsensiblefiles)
- [fsPromises](#fspromises)
- [fs](#fs)
- [getAllFoldersUntilFolder](#getallfoldersuntilfolder)
- [getFileName](#getfilename)
- [getFirstAvailableFilename](#getfirstavailablefilename)
- [getFolder](#getfolder)
- [getLastFolder](#getlastfolder)
- [getOneFolderUpPath](#getonefolderuppath)
- [getPathCombinations](#getpathcombinations)
- [gracefulFsConstants](#gracefulfsconstants)
- [gracefulFsPromises](#gracefulfspromises)
- [importFromFiles](#importfromfiles)
- [isArrayGuard](#isarrayguard)
- [mergeObjectsArray](#mergeobjectsarray)
- [mkdir](#mkdir)
- [oneUp](#oneup)
- [parseMd](#parsemd)
- [path](#path)
- [readFileSync](#readfilesync)
- [readFile](#readfile)
- [readdirSync](#readdirsync)
- [readdir](#readdir)
- [realpath](#realpath)
- [removeAllExcept](#removeallexcept)
- [renameAndCreate](#renameandcreate)
- [rename](#rename)
- [rm](#rm)
- [stat](#stat)
- [watch](#watch)
- [writeFileSync](#writefilesync)
- [writeFile](#writefile)
- [writeJsonToFile](#writejsontofile)
- [writeStringToFile](#writestringtofile)
- [writeToFiles](#writetofiles)



# Functions

## canAccessSync

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


### Returns: object

## canAccess

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).




## canExecuteSync

File is executable to the calling process


### Returns: object

## canExecute

File is executable to the calling process




## canReadSync

File is readable to the calling process


### Returns: object

## canRead

File is readable to the calling process




## canSeeSync

File is visible to the calling process




## canSee

File is visible to the calling process




## canWriteSync

File is writable to the calling process


### Returns: object

## canWrite

File is writable to the calling process




## copyAllRelativeFiles

copy a bunch of relative files from one root folder to another




### Parameters (4)

#### Parameter 1: relativeFilePaths: array

- null: string






#### Parameter 2: absoluteSourceRoot: string

#### Parameter 3: absoluteDestinationRoot: string

#### Parameter 4: force (optional): boolean

## findAllMd

DEPRECATED: `k-explore` can be used




## findFileNameCaseInsensitive

returns a path of a fileName




### Parameters (2)

#### Parameter 1: folderPath: string

#### Parameter 2: fileName: string

## findFilesRecursively

DEPRECATED: in favour of `explore` from "k-explore"


### Returns: array

- null: object






## findSensibleFiles

DEPRECATED:

this is sensible-specific


### Returns: array

- null: object






## getAllFoldersUntilFolder

NB: I already have this somewhere else but couldn't find it!

If the path is /a/random/path

The result of this function will be:

['/a', '/a/random', '/a/random/path']


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: folderPath: string

## getFileName

removes everything before the last slash to get file name




### Parameters (1)

#### Parameter 1: pathString: string

## getFirstAvailableFilename

### Parameters (1)

#### Parameter 1: absoluteFilePath: string

## getFolder

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)




### Parameters (1)

#### Parameter 1: pathString: string

## getLastFolder

removes everything after the last slash to get folder path

input: /Users/king/Documents/some/folder/xyz
output: xyz

input: /Users/king/Documents/some/folder/xyz.txt
output: folder




### Parameters (1)

#### Parameter 1: pathString: string

## getOneFolderUpPath

Takes a folder path and returns a path that is one folder up




### Parameters (1)

#### Parameter 1: folderPath: string

## getPathCombinations

gets combinations for paths

input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: chunksSegments: array

- null: object






## importFromFiles

DEPRECATED:

works fine but this requires us to know exactly what we want from the file, so it requires a very clear convention.
better would be to introspect the code and just require whatever's there
returns T[] where every T is one of:
- the default export (importStrategy "default")
- the export with the name of the extension
- an object with a subset of exports


### Returns: array

- null: object






## isArrayGuard

DEPRECATED




## oneUp

Finds the number at the end of a filename and increases it
If there is no number yet, concatenates '1' to a string

E.g.

- `hello-world` becomes `hello-world1`
- `hello36` becomes `hello37`




### Parameters (1)

#### Parameter 1: filename: string

## parseMd

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md




### Parameters (1)

## removeAllExcept

Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself

NB: make this work with subdirectories!




### Parameters (2)

#### Parameter 1: folderPath: string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| ignore (optional) | array |  |
| typeToRemove (optional) | string |  |



## renameAndCreate

### Parameters (2)

#### Parameter 1: oldPath: string

#### Parameter 2: newPath: string

## writeJsonToFile

write json to a file

makes the dir and file if they don't exist




## writeStringToFile

write string to a file

makes the dir and file if they don't exist




## writeToFiles

writes all values in an object to the file that should be specified as key of that value



# Interfaces

## Dir

A class representing a directory stream.

Created by  {@link  opendir } ,  {@link  opendirSync } , or `fsPromises.opendir()`.

```js import { opendir } from 'fs/promises';

try {   const dir = await opendir('./');   for await (const dirent of dir)     console.log(dirent.name); } catch (err) {   console.error(err); } ```

When using the async iterator, the `fs.Dir` object will be automatically closed after the iterator exits.





Properties: 

 | Name | Type | Description |
|---|---|---|
| path  | string |  |



## Dirent

A representation of a directory entry, which can be a file or a subdirectory within the directory, as returned by reading from an `fs.Dir`. The directory entry is a combination of the file name and file type pairs.

Additionally, when  {@link  readdir }  or  {@link  readdirSync }  is called with the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings or `Buffer` s.





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |



## FolderPath

DEPRECATED: just use ParsedPath



> DEPRECATED: just use ParsedPath

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeFolder (optional) | string |  |
| path  | string | unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything. |



## FolderPath

DEPRECATED: just use ParsedPath





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeFolder (optional) | string |  |
| path  | string |  |



## Fs

all handy Fs types





Properties: 

 | Name | Type | Description |
|---|---|---|
| PathLike  | object |  |
| Stats  | object |  |
| Dir  | object |  |
| Dirent  | object |  |



## MarkdownContent

## Markdown

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName  | string |  |
| params  | object |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| modifiedAt  | number |  |
| openedAt  | number |  |
| content  | string |  |



## MarkdownContent

## PathLike

Valid types for path values in "fs".



> Valid types for path values in "fs".




## Path

unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.








## PathLike

Valid types for path values in "fs".








## Stats

A `fs.Stats` object provides information about a file.

Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.

```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```

`bigint` version:

```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```





Properties: 

 | Name | Type | Description |
|---|---|---|
| dev  | number |  |
| ino  | number |  |
| mode  | number |  |
| nlink  | number |  |
| uid  | number |  |
| gid  | number |  |
| rdev  | number |  |
| size  | number |  |
| blksize  | number |  |
| blocks  | number |  |
| atimeMs  | number |  |
| mtimeMs  | number |  |
| ctimeMs  | number |  |
| birthtimeMs  | number |  |
| atime  | string |  |
| mtime  | string |  |
| ctime  | string |  |
| birthtime  | string |  |



## UnixTimestamp

## UnixTimestamp

# Variables

## access (unexported const)

## appendFile (unexported const)

## canAccessSync (exported const)

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


## canAccess (exported const)

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


## canExecuteSync (exported const)

File is executable to the calling process


## canExecute (exported const)

File is executable to the calling process


## canReadSync (exported const)

File is readable to the calling process


## canRead (exported const)

File is readable to the calling process


## canSeeSync (exported const)

File is visible to the calling process


## canSee (exported const)

File is visible to the calling process


## canWriteSync (exported const)

File is writable to the calling process


## canWrite (exported const)

File is writable to the calling process


## chmod (unexported const)

## chown (unexported const)

## copyAllRelativeFiles (exported const)

copy a bunch of relative files from one root folder to another


## copyFile (unexported const)

## cp (unexported const)

## findAllMd (exported const)

DEPRECATED: `k-explore` can be used


## findFileNameCaseInsensitive (exported const)

returns a path of a fileName


## findFilesRecursively (exported const)

DEPRECATED: in favour of `explore` from "k-explore"


## findFiles (exported const)

DEPRECATED:

SHOULD BE REPLACED

this is sensible-specific


## findSensibleFiles (exported const)

DEPRECATED:

this is sensible-specific


## fsPromises (unexported const)

## fs (exported const)

NB: for some reason some of the graceful-fs functions aren't complete. For example, I can't seem to copy folders with cp from graceful-fs (cp)

For that one I added cpAsync.


## getAllFoldersUntilFolder (exported const)

NB: I already have this somewhere else but couldn't find it!

If the path is /a/random/path

The result of this function will be:

['/a', '/a/random', '/a/random/path']


## getFileName (exported const)

removes everything before the last slash to get file name


## getFirstAvailableFilename (exported const)

## getFolder (exported const)

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)


## getLastFolder (exported const)

removes everything after the last slash to get folder path

input: /Users/king/Documents/some/folder/xyz
output: xyz

input: /Users/king/Documents/some/folder/xyz.txt
output: folder


## getOneFolderUpPath (exported const)

Takes a folder path and returns a path that is one folder up


## getPathCombinations (exported const)

gets combinations for paths

input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]


## gracefulFsConstants (unexported const)

## gracefulFsPromises (unexported const)

## importFromFiles (exported const)

DEPRECATED:

works fine but this requires us to know exactly what we want from the file, so it requires a very clear convention.
better would be to introspect the code and just require whatever's there
returns T[] where every T is one of:
- the default export (importStrategy "default")
- the export with the name of the extension
- an object with a subset of exports


## isArrayGuard (exported const)

DEPRECATED


## mergeObjectsArray (exported const)

DEPRECATED: in favor of mergeObjectsArray from "js-util"


## mkdir (unexported const)

## oneUp (exported const)

Finds the number at the end of a filename and increases it
If there is no number yet, concatenates '1' to a string

E.g.

- `hello-world` becomes `hello-world1`
- `hello36` becomes `hello37`


## parseMd (exported const)

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md


## path (exported const)

## readFileSync (unexported const)

## readFile (unexported const)

## readdirSync (unexported const)

## readdir (unexported const)

## realpath (unexported const)

## removeAllExcept (exported const)

Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself

NB: make this work with subdirectories!


## renameAndCreate (exported const)

## rename (unexported const)

## rm (unexported const)

## stat (unexported const)

## watch (unexported const)

## writeFileSync (unexported const)

## writeFile (unexported const)

## writeJsonToFile (exported const)

write json to a file

makes the dir and file if they don't exist


## writeStringToFile (exported const)

write string to a file

makes the dir and file if they don't exist


## writeToFiles (exported const)

writes all values in an object to the file that should be specified as key of that value

