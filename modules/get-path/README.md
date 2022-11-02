# Get path

get-path (js operation)

Useful functions to get paths within King OS.

Depends on `sdk-operations`, which makes it only work inside of a typerepo.




# Outline

## Functions

- [findFolderWhereMatch](#findFolderWhereMatch)
- [findOperationBasePathWithClassification](#findOperationBasePathWithClassification)
- [findOperationBasePath](#findOperationBasePath)
- [getAllPackageJsonDependencies](#getAllPackageJsonDependencies)
- [getCommonAncestor](#getCommonAncestor)
- [getOperationClassification](#getOperationClassification)
- [getOperationPathParse](#getOperationPathParse)
- [getOperationPath](#getOperationPath)
- [getOperationRelativePath](#getOperationRelativePath)
- [getPathParse](#getPathParse)
- [getPathsWithOperations](#getPathsWithOperations)
- [getProjectRoot](#getProjectRoot)
- [getRelativeLinkPath](#getRelativeLinkPath)
- [getRelativePath](#getRelativePath)
- [getRootPath](#getRootPath)
- [getSrcRelativeFileId](#getSrcRelativeFileId)
- [hasDependency](#hasDependency)
- [hasProjectRootFile](#hasProjectRootFile)
- [isOperation](#isOperation)
- [isSensibleProject](#isSensibleProject)
- [isWorkspaceRoot](#isWorkspaceRoot)
- [makeRelative](#makeRelative)
- [test](#test)

## Interfaces

- [OperationClassification](#operationclassification)
- [PackageJson](#packagejson)

## Variables

- [findFolderWhereMatch](#findfolderwherematch)
- [findOperationBasePathWithClassification](#findoperationbasepathwithclassification)
- [findOperationBasePath](#findoperationbasepath)
- [getAllPackageJsonDependencies](#getallpackagejsondependencies)
- [getCommonAncestor](#getcommonancestor)
- [getOperationClassification](#getoperationclassification)
- [getOperationPathParse](#getoperationpathparse)
- [getOperationPath](#getoperationpath)
- [getOperationRelativePath](#getoperationrelativepath)
- [getPathParse](#getpathparse)
- [getPathsWithOperations](#getpathswithoperations)
- [getProjectRoot](#getprojectroot)
- [getRelativeLinkPath](#getrelativelinkpath)
- [getRelativePath](#getrelativepath)
- [getRootPath](#getrootpath)
- [getSrcRelativeFileId](#getsrcrelativefileid)
- [hasDependency](#hasdependency)
- [hasProjectRootFile](#hasprojectrootfile)
- [isOperation](#isoperation)
- [isSensibleProject](#issensibleproject)
- [isWorkspaceRoot](#isworkspaceroot)
- [makeRelative](#makerelative)
- [osRootFoldersConst](#osrootfoldersconst)
- [osRootFolders](#osrootfolders)
- [projectRootFoldersConst](#projectrootfoldersconst)
- [projectRootFolders](#projectrootfolders)
- [test](#test)



# Functions

## findFolderWhereMatch

recursive. goes up a folder until it finds a package.json


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| folderPath  | string |  |
| matchResult  | object |  |



## findOperationBasePathWithClassification

recursive. goes up until it finds a folder that's an operation

because it had to read the package.json anyway, it's returning the operation classification as well


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| folderPath  | string |  |
| classification  | object |  |



### Parameters (1)

#### Parameter 1: startPath: string

## findOperationBasePath

### Returns: string

### Parameters (1)

#### Parameter 1: startPath: string

## getAllPackageJsonDependencies

### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: p: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string |  |



## getCommonAncestor

Finds the common ancestor for two absolute pahts




### Parameters (2)

#### Parameter 1: path1: string

#### Parameter 2: path2: string

## getOperationClassification

Returns OperationClassification if it's an operation, or undefined if it's not

NB: don't confuse this with ProjectType or ImportClassification




### Parameters (1)

#### Parameter 1: folderPath: string

## getOperationPathParse

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson




### Parameters (1)

#### Parameter 1: absolutePath: string

## getOperationPath

Gets a path of any operation in the project

TODO: IDEA: maybe auto-generate key-value JSON where keys are the package-names of all operations and values are paths of their locations in the file system. we can easily generate this ourselves, but maybe it's also easy to use the npm yarn workspace for this, although it may not be available in all circumstances, so better not rely on it. The advantage of this would be that this function becomes sync and is much more efficient. The disadvantage is that every time you move something or add something new, this indexation has to happen, otherwise it fails.




### Parameters (2)

#### Parameter 1: operationName: string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| notUseSdk (optional) | boolean |  |



## getOperationRelativePath

something like src/xxx/xxx/x.ts (no slash at start)




### Parameters (2)

#### Parameter 1: absolutePath: string

#### Parameter 2: operationBasePath: string

## getPathParse

gets all kinds of information that can be inferred from any path (file or folder).


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string |  |



### Parameters (1)

#### Parameter 1: absolutePath: string

## getPathsWithOperations

returns an array of all (absolute) paths containing operations

for a sensible project, that means /apps and /packages

for the OS project, that means /operations/tools and /operations/niches


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |



## getProjectRoot

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point


### Returns: string

### Parameters (1)

#### Parameter 1: fullSourcePath (optional): string

## getRelativeLinkPath

returns a relative link between two files




### Parameters (3)

#### Parameter 1: absoluteFromFilePath: string

#### Parameter 2: absoluteToFilePath: string

#### Parameter 3: debug (optional): boolean

## getRelativePath

gets the relative path from a specified root

will start with "/"




### Parameters (2)

#### Parameter 1: absolutePath: string

#### Parameter 2: relativeFrom: string

## getRootPath

Gets project path, or a folder in the root that is convention


### Returns: string

## getSrcRelativeFileId

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found




### Parameters (1)

#### Parameter 1: operationRelativePath: string

## hasDependency

### Parameters (2)

#### Parameter 1: packageJson: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string |  |



#### Parameter 2: dependency: string

## hasProjectRootFile

### Returns: object

### Parameters (1)

#### Parameter 1: absolutePath: string

## isOperation

Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json


### Returns: object

### Parameters (1)

#### Parameter 1: absoluteFolderPath: string

## isSensibleProject

### Returns: object

### Parameters (1)

#### Parameter 1: folderPath (optional): string

## isWorkspaceRoot

simple sync function to check if a folder is the root of a workspace (not operation but a workspace)


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSensibleProject  | boolean |  |
| isWorkspaceRoot  | boolean |  |



### Parameters (1)

#### Parameter 1: folderPath: string

## makeRelative

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning




### Parameters (2)

#### Parameter 1: absolutePath: string

#### Parameter 2: baseFolderPath: string

## test

# Interfaces

## OperationClassification

## Classification

TODO: think about what the differences are and how we need to change processes to make it all work good


### Possible values

js: only js (no node) (well, ts of course, but it gets built into js)

ts: non-built ts code

node: includes other node packages, operations, core-imports, or globals.

server: exposes something on some port when it is ran and uses node code

web: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...

app: uses react-native and exposes something on some port when it is ran

ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)

ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)








## PackageJson

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string |  |
| sensible (optional) | object |  |
| operation (optional) | object |  |


# Variables

## findFolderWhereMatch (exported const)

recursive. goes up a folder until it finds a package.json


## findOperationBasePathWithClassification (exported const)

recursive. goes up until it finds a folder that's an operation

because it had to read the package.json anyway, it's returning the operation classification as well


## findOperationBasePath (exported const)

## getAllPackageJsonDependencies (exported const)

## getCommonAncestor (exported const)

Finds the common ancestor for two absolute pahts


## getOperationClassification (exported const)

Returns OperationClassification if it's an operation, or undefined if it's not

NB: don't confuse this with ProjectType or ImportClassification


## getOperationPathParse (exported const)

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson


## getOperationPath (exported const)

## getOperationRelativePath (exported const)

something like src/xxx/xxx/x.ts (no slash at start)


## getPathParse (exported const)

gets all kinds of information that can be inferred from any path (file or folder).


## getPathsWithOperations (exported const)

returns an array of all (absolute) paths containing operations

for a sensible project, that means /apps and /packages

for the OS project, that means /operations/tools and /operations/niches


## getProjectRoot (exported const)

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point


## getRelativeLinkPath (exported const)

returns a relative link between two files


## getRelativePath (exported const)

gets the relative path from a specified root

will start with "/"


## getRootPath (exported const)

## getSrcRelativeFileId (exported const)

returns a file id (path without extension) relative to the src folder of an operation

e.g. "general" for src/general.ts

NB: assumes all src is in the src folder

NB: removes "/" in the beginning, if found


## hasDependency (exported const)

## hasProjectRootFile (unexported const)

## isOperation (exported const)

Checks whether or not an absolute path contains an operation. The only check it's doing is that the folder must contain both a package.json as well as a tsconfig.json


## isSensibleProject (exported const)

## isWorkspaceRoot (exported const)

simple sync function to check if a folder is the root of a workspace (not operation but a workspace)


## makeRelative (exported const)

Makes a path relative using proper parsing

Resulting path will apply the paths conventions
- no slash at the end
- no slash at the beginning


## osRootFoldersConst (exported const)

can only be accessed in the OS


## osRootFolders (exported const)

## projectRootFoldersConst (exported const)

can be accessed in projects as well as in the OS


## projectRootFolders (exported const)

## test (unexported const)

