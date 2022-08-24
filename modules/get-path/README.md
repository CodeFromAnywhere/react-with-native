---
```: undefined
: undefined
Properties: 
| Name | Type | Description |: undefined
|---|---|---|: undefined
| id (optional) | string |  |: undefined
| path  | string |  |: undefined
| name (optional) | string |  |: undefined
| main (optional) | string |  |: undefined
| source (optional) | string |  |: undefined
| description (optional) | string |  |: undefined
| version (optional) | string |  |: undefined
| private (optional) | boolean |  |: undefined
| author (optional) | object |  |: undefined
| repository  | object |  |: undefined
| homepage (optional) | string |  |: undefined
| dependencies (optional) | object |  |: undefined
| devDependencies (optional) | object |  |: undefined
| peerDependencies (optional) | object |  |: undefined
| bin (optional) | object |  |: undefined
| workspaces (optional) | array |  |: undefined
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js
| sensible (optional) | object | Sensible-global configurations |: undefined
| operation (optional) | object | anything configurable about the operation.<br /><br />This can live in operation.json or as a prop in package.json. |: undefined
## hasDependency: undefined
Max. indexation depth: 1,
## Returns: unknown
### Arguments: undefined
#### packageJson: object
```md: undefined
--- defaultDbStorageMethod: jsonSingle
---
# Get path

get-path (js operation)

Size: 549 LOC, 2187 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: path, fs, log, OperationClassification, path, TypescriptIndex, kebabCase, fs, path, OperationClassification, PackageJSON, tryParseJson, exploreOperationFolders, getLastFolder, log, path, getLastFolder, OperationPathParse, PackageJSON, readJsonFileSync, PathParse, fs, path, log, path, fs, path, PackageJSON, tryParseJson, path, PackageJSON, SensibleConfig, readJsonFileSync

# Outline

## Functions

- [findFolderWhereMatch](#findFolderWhereMatch)
- [findOperationBasePathWithClassification](#findOperationBasePathWithClassification)
- [findOperationBasePath](#findOperationBasePath)
- [getIndexFilePath](#getIndexFilePath)
- [getAllPackageJsonDependencies](#getAllPackageJsonDependencies)
- [hasDependency](#hasDependency)
- [getOperationClassification](#getOperationClassification)
- [getOperationPath](#getOperationPath)
- [getOperationPathParse](#getOperationPathParse)
- [getPathParse](#getPathParse)
- [getPathsWithOperations](#getPathsWithOperations)
- [getProjectRoot](#getProjectRoot)
- [getRelativePath](#getRelativePath)
- [getRootPath](#getRootPath)
- [isProjectRoot](#isProjectRoot)
- [isSensibleProject](#isSensibleProject)



# Functions

```


Properties: 

 | Name | Type | Description |
|---|---|---|
| id (optional) | string |  |
| path  | string |  |
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
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| sensible (optional) | object | Sensible-global configurations |
| operation (optional) | object | anything configurable about the operation.<br /><br />This can live in operation.json or as a prop in package.json. |


#### dependency: string







## getOperationClassification

Max. indexation depth: 2, 

returns OperationClassification if it's an operation, or undefined if it's not

NB: don't confuse this with ProjectType or ImportClassification

### Returns: string(Enum: js | node | server | web | app | ui-es6 | ui-es5) 







### Arguments

#### folderPath: string







## getOperationPath

Max. indexation depth: 3, 

Gets a path of any operation in the project

TODO: IDEA: maybe auto-generate key-value JSON where keys are the package-names of all operations and values are paths of their locations in the file system. we can easily generate this ourselves, but maybe it's also easy to use the npm yarn workspace for this, although it may not be available in all circumstances, so better not rely on it. The advantage of this would be that this function becomes sync and is much more efficient. The disadvantage is that every time you move something or add something new, this indexation has to happen, otherwise it fails.

## Returns: unknown

### Arguments

#### operationName: string



```md
specify the operation folder name
```




#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |


## getOperationPathParse

Max. indexation depth: 2, 

get all operation-related path information that can be inferred from the path

NB: currently it also looks up the operation name from its packagejson

## Returns: unknown

### Arguments

#### absolutePath: string







## getPathParse

Max. indexation depth: 1, 

gets all kinds of information that can be inferred from any path (file or folder).

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string |  |


### Arguments

#### absolutePath: string







## getPathsWithOperations

Max. indexation depth: 3, 

returns an array of all paths containing operations

for a sensible project, that means /apps and /packages

for the OS project, that means /tools and /bundles

### Returns: array

- null: string





### Arguments

#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string | if given, this will be taken as the project root instead of the one that can be found automatically (useful for bundling or working with multiple projects that alter each other) |


## getProjectRoot

Max. indexation depth: 1, 

returns project root folder path

recursive. goes up until it finds a folder that's the project root

if no source path is given, uses the directory name where the function is executed from as a starting point

### Returns: string







### Arguments

#### fullSourcePath (optional): string







## getRelativePath

Max. indexation depth: 2, 

gets the relative path from a specified root

will start with "/"

## Returns: unknown

### Arguments

#### absolutePath: string







#### relativeFrom: string







## getRootPath

Max. indexation depth: 5, 

Gets project path, or a folder in the root that is convention

### Returns: string







### Arguments

#### name (optional): object



```md
if not specified, will return project root path
```


Properties: 

 | Name | Type | Description |
|---|---|---|



#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |


## isProjectRoot

Max. indexation depth: 2, 

simple sync function to check if a folder is the root of a project (not operation but a workspace)

### Returns: boolean







### Arguments

#### folderPath: string







## isSensibleProject

Max. indexation depth: 2, 



### Returns: boolean







### Arguments

#### folderPath (optional): string







