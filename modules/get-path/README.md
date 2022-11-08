# Get path

get-path (js operation)

Useful functions to get paths within King OS.

Depends on `sdk-operations`, which makes it only work inside of a typerepo.




# Api reference

## getProjectRoot()

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point


| Input      |    |    |
| ---------- | -- | -- |
| fullSourcePath (optional) | string |  |
| **Output** | string   |    |



## 📄 getProjectRoot (exported const)

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point


## findOperationBasePath()

| Input      |    |    |
| ---------- | -- | -- |
| startPath | string |  |
| **Output** | string   |    |



## getOperationPath()

Gets a path of any operation in the project

TODO: IDEA: maybe auto-generate key-value JSON where keys are the package-names of all operations and values are paths of their locations in the file system. we can easily generate this ourselves, but maybe it's also easy to use the npm yarn workspace for this, although it may not be available in all circumstances, so better not rely on it. The advantage of this would be that this function becomes sync and is much more efficient. The disadvantage is that every time you move something or add something new, this indexation has to happen, otherwise it fails.


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string | specify the operation folder name |,| config (optional) | { manualProjectRoot?: string, <br />notUseSdk?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 findOperationBasePath (exported const)

## 📄 getOperationPath (exported const)

## makeRelative()

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string | absolute path of a file or folder without a slash at the end |,| baseFolderPath | string | folder path without a slash at the end |
| **Output** | `String`   |    |



## 📄 makeRelative (exported const)

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning


## getPathsWithOperations()

returns an array of all (absolute) paths containing operations

for a sensible project, that means /apps and /packages

for the OS project, that means /operations/tools and /operations/niches


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br /> } |  |
| **Output** | string[]   |    |



## 📄 getPathsWithOperations (exported const)

returns an array of all (absolute) paths containing operations

for a sensible project, that means /apps and /packages

for the OS project, that means /operations/tools and /operations/niches


## getRootPath()

Gets project path, or a folder in the root that is convention


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## 📄 getRootPath (exported const)

## getOperationClassification()

Returns OperationClassification if it's an operation, or undefined if it's not

NB: don't confuse this with ProjectType or ImportClassification


| Input      |    |    |
| ---------- | -- | -- |
| folderPath | string |  |
| **Output** |    |    |



## 📄 getOperationClassification (exported const)

Returns OperationClassification if it's an operation, or undefined if it's not

NB: don't confuse this with ProjectType or ImportClassification


## getSrcRelativeFileId()

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found


| Input      |    |    |
| ---------- | -- | -- |
| operationRelativePath | string |  |
| **Output** |    |    |



## isSensibleProject()

| Input      |    |    |
| ---------- | -- | -- |
| folderPath (optional) | string |  |
| **Output** | {  }   |    |



## 📄 getSrcRelativeFileId (exported const)

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found


## 📄 isSensibleProject (exported const)

## getOperationRelativePath()

something like src/xxx/xxx/x.ts (no slash at start)


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |,| operationBasePath | string |  |
| **Output** |    |    |



## 📄 getOperationRelativePath (exported const)

something like src/xxx/xxx/x.ts (no slash at start)


## getOperationPathParse()

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## getPathParse()

gets all kinds of information that can be inferred from any path (file or folder).


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** | { relativePathFromProjectRoot: string, <br /> }   |    |



## 📄 getOperationPathParse (exported const)

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson


## 📄 getPathParse (exported const)

gets all kinds of information that can be inferred from any path (file or folder).


## getRelativeLinkPath()

returns a relative link between two files


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFromFilePath | string |  |,| absoluteToFilePath | string |  |,| debug (optional) | boolean |  |
| **Output** | `String`   |    |



## getRelativePath()

gets the relative path from a specified root

will start with "/"


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |,| relativeFrom | string |  |
| **Output** |    |    |



## isOperation()

Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json


| Input      |    |    |
| ---------- | -- | -- |
| absoluteFolderPath | string |  |
| **Output** | {  }   |    |



## 📄 getRelativeLinkPath (exported const)

returns a relative link between two files


## 📄 getRelativePath (exported const)

gets the relative path from a specified root

will start with "/"


## 📄 isOperation (exported const)

Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json

