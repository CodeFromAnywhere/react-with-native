# Fs util

fs-util (js operation)

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



## 📄 writeJsonToFile (exported const)

write json to a file

makes the dir and file if they don't exist


## canRead()

File is readable to the calling process


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



## 🔹 Path

unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.








## 📄 canRead (exported const)

File is readable to the calling process


## 📄 writeStringToFile (exported const)

write string to a file

makes the dir and file if they don't exist


## getFolder()

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)


| Input      |    |    |
| ---------- | -- | -- |
| pathString | string |  |
| **Output** |    |    |



## 📄 getFolder (exported const)

if the path exists:
- if the pathString is a folder, that is returned.
- if the pathstring is not a folder, returns the pathstring without the file suffix

if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)


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



## findAllMd()

DEPRECATED: `k-explore` can be used


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



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



## importFromFiles()

DEPRECATED:

works fine but this requires us to know exactly what we want from the file, so it requires a very clear convention.
better would be to introspect the code and just require whatever's there
returns T[] where every T is one of:
- the default export (importStrategy "default")
- the export with the name of the extension
- an object with a subset of exports


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## isArrayGuard()

DEPRECATED


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## parseMd()

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md


| Input      |    |    |
| ---------- | -- | -- |
| mdFilePath | `Path` | path to a md file |
| **Output** |    |    |



## renameAndCreate()

| Input      |    |    |
| ---------- | -- | -- |
| oldPath | string |  |,| newPath | string |  |
| **Output** |    |    |



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



## 📄 canSee (exported const)

File is visible to the calling process


## 📄 canWriteSync (exported const)

File is writable to the calling process


## 📄 findAllMd (exported const)

DEPRECATED: `k-explore` can be used


## 📄 getFileName (exported const)

removes everything before the last slash to get file name


## 📄 getFirstAvailableFilename (exported const)

## 📄 getOneFolderUpPath (exported const)

Takes a folder path and returns a path that is one folder up


## 📄 importFromFiles (exported const)

DEPRECATED:

works fine but this requires us to know exactly what we want from the file, so it requires a very clear convention.
better would be to introspect the code and just require whatever's there
returns T[] where every T is one of:
- the default export (importStrategy "default")
- the export with the name of the extension
- an object with a subset of exports


## 📄 isArrayGuard (exported const)

DEPRECATED


## 📄 mergeObjectsArray (exported const)

DEPRECATED: in favor of mergeObjectsArray from "js-util"


## 📄 parseMd (exported const)

DEPRECATED: just use `md-to-json-parse`

parse a md file to all the needed info
@param mdFilePath path to a md file
@returns Md


## 📄 renameAndCreate (exported const)

