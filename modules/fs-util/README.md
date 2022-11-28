# Fs util

fs-util (`OperationClassification` cjs)

General purpose wrapper around `node:fs` and `node:path` that should be used instead of those, because it removes some of its painpoints, removes unneeded stuff, and adds some other useful functions.




# Api reference

## 📄 path (exported const)

## 📄 fs (exported const)

NB: for some reason some of the graceful-fs functions aren't complete. For example, I can't seem to copy folders with cp from graceful-fs (cp)

For that one I added cpAsync.


## getLastFolder()

removes everything after the last slash to get folder path

input: /Users/king/Documents/some/folder/xyz
output: xyz

input: /Users/king/Documents/some/folder/xyz.txt
output: folder


| Input      |    |    |
| ---------- | -- | -- |
| pathString | string |  |
| **Output** |    |    |



## 📄 getLastFolder (exported const)

removes everything after the last slash to get folder path

input: /Users/king/Documents/some/folder/xyz
output: xyz

input: /Users/king/Documents/some/folder/xyz.txt
output: folder


## writeJsonToFile()

write json to a file

makes the dir and file if they don't exist


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## writeStringToFile()

write string to a file

makes the dir and file if they don't exist


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 writeJsonToFile (exported const)

write json to a file

makes the dir and file if they don't exist


## 📄 writeStringToFile (exported const)

write string to a file

makes the dir and file if they don't exist


## canRead()

File is readable to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getFolder()

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)


| Input      |    |    |
| ---------- | -- | -- |
| pathString | string |  |
| **Output** |    |    |



## 📄 canRead (exported const)

File is readable to the calling process


## 📄 getFolder (exported const)

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)


## 🔹 Path

unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.








## canReadSync()

File is readable to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## copyAllRelativeFiles()

copy a bunch of relative files from one root folder to another


| Input      |    |    |
| ---------- | -- | -- |
| relativeFilePaths | string[] |  |,| absoluteSourceRoot | string |  |,| absoluteDestinationRoot | string |  |,| force (optional) | boolean | Overwrite existing file or directory |
| **Output** |    |    |



## getAllFoldersUntilFolder()

NB: I already have this somewhere else but couldn't find it!

If the path is /a/random/path

The result of this function will be:

['/a', '/a/random', '/a/random/path']


| Input      |    |    |
| ---------- | -- | -- |
| folderPath | string |  |
| **Output** | string[]   |    |



## removeAllExcept()

Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself

NB: make this work with subdirectories!


| Input      |    |    |
| ---------- | -- | -- |
| folderPath | string |  |,| config (optional) | { ignore?: string[], <br />typeToRemove?: file / folder, <br /> } |  |
| **Output** |    |    |



## 📄 canReadSync (exported const)

File is readable to the calling process


## 📄 copyAllRelativeFiles (exported const)

copy a bunch of relative files from one root folder to another


## 📄 getAllFoldersUntilFolder (exported const)

NB: I already have this somewhere else but couldn't find it!

If the path is /a/random/path

The result of this function will be:

['/a', '/a/random', '/a/random/path']


## 📄 removeAllExcept (exported const)

Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself

NB: make this work with subdirectories!


## canSee()

File is visible to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## canWriteSync()

File is writable to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getFileName()

removes everything before the last slash to get file name


| Input      |    |    |
| ---------- | -- | -- |
| pathString | string |  |
| **Output** | `String`   |    |



## getFirstAvailableFilename()

| Input      |    |    |
| ---------- | -- | -- |
| absoluteFilePath | string |  |
| **Output** | `String`   |    |



## getOneFolderUpPath()

Takes a folder path and returns a path that is one folder up


| Input      |    |    |
| ---------- | -- | -- |
| folderPath | string |  |
| **Output** |    |    |



## renameAndCreate()

| Input      |    |    |
| ---------- | -- | -- |
| oldPath | string |  |,| newPath | string |  |
| **Output** |    |    |



## 📄 canSee (exported const)

File is visible to the calling process


## 📄 canWriteSync (exported const)

File is writable to the calling process


## 📄 getFileName (exported const)

removes everything before the last slash to get file name


## 📄 getFirstAvailableFilename (exported const)

## 📄 getOneFolderUpPath (exported const)

Takes a folder path and returns a path that is one folder up


## 📄 renameAndCreate (exported const)

# Internal

<details><summary>Show internal (30)</summary>
    
  # canAccessSync()

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## canAccess()

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## canExecuteSync()

File is executable to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## canExecute()

File is executable to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## canSeeSync()

File is visible to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## canWrite()

File is writable to the calling process


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## findFileNameCaseInsensitive()

returns a path of a fileName


| Input      |    |    |
| ---------- | -- | -- |
| folderPath | string |  |,| fileName | string | fileName with extension |
| **Output** |    |    |



## getPathCombinations()

gets combinations for paths

input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]


| Input      |    |    |
| ---------- | -- | -- |
| chunksSegments | {  }[] |  |
| **Output** | string[]   |    |



## oneUp()

Finds the number at the end of a filename and increases it
If there is no number yet, concatenates '1' to a string

E.g.

- `hello-world` becomes `hello-world1`
- `hello36` becomes `hello37`


| Input      |    |    |
| ---------- | -- | -- |
| filename | string |  |
| **Output** | `String`   |    |



## parseMd()

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md


| Input      |    |    |
| ---------- | -- | -- |
| mdFilePath | `Path` | path to a md file |
| **Output** |    |    |



## writeToFiles()

writes all values in an object to the file that should be specified as key of that value


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔹 FolderPath

DEPRECATED: just use ParsedPath



> DEPRECATED: just use ParsedPath

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeFolder (optional) | string |  |
| path  | string | unlike PathLike, this is only a string<br /><br />For now, we don't have a clear convention whether or not this string should be absolute or anything. |



## 🔹 FolderPath

DEPRECATED: just use ParsedPath





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeFolder (optional) | string |  |
| path  | string |  |



## 🔹 Fs

all handy Fs types





Properties: 

 | Name | Type | Description |
|---|---|---|
| PathLike  | object |  |
| Stats  | object |  |
| Dir  | object |  |
| Dirent  | object |  |



## 🔹 MarkdownContent

## 🔹 Markdown

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



## 🔹 MarkdownContent

## 🔹 UnixTimestamp

## 🔹 UnixTimestamp

## 📄 canAccessSync (exported const)

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


## 📄 canAccess (exported const)

uses fs.access to determine if something can be accessed

Check File access constants for possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values (e.g. fs.constants.W_OK | fs.constants.R_OK).


## 📄 canExecuteSync (exported const)

File is executable to the calling process


## 📄 canExecute (exported const)

File is executable to the calling process


## 📄 canSeeSync (exported const)

File is visible to the calling process


## 📄 canWrite (exported const)

File is writable to the calling process


## 📄 findFileNameCaseInsensitive (exported const)

returns a path of a fileName


## 📄 getPathCombinations (exported const)

gets combinations for paths

input: [["operation1","operation2"], "db/value-export", ["index.ts","test.ts","cli.ts"]]
output: ["operation1/db/value-export/index.ts","operation2/db/value-export/index.ts","operation1/db/value-export/test.ts","operation2/db/value-export/test.ts","operation1/db/value-export/cli.ts","operation2/db/value-export/cli.ts"]


## 📄 oneUp (exported const)

Finds the number at the end of a filename and increases it
If there is no number yet, concatenates '1' to a string

E.g.

- `hello-world` becomes `hello-world1`
- `hello36` becomes `hello37`


## 📄 parseMd (exported const)

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md


## 📄 writeToFiles (exported const)

writes all values in an object to the file that should be specified as key of that value
  </details>

