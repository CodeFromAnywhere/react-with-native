# K explore

k-explore (node operation)

exploration functions for exploring files within King OS

Currently has a thin dependency on `get-path`, but this can probably be removed to make this operation more general purpose (and work outside of King OS too)




# Outline

## Functions

- [benchmark](#benchmark)
- [determineFileType](#determineFileType)
- [exploreGitRepoFolders](#exploreGitRepoFolders)
- [exploreMultiple](#exploreMultiple)
- [exploreOperationFolders](#exploreOperationFolders)
- [explorePreset](#explorePreset)
- [explore](#explore)
- [findAllDocsFolderPaths](#findAllDocsFolderPaths)
- [findAllDotGitFolders](#findAllDotGitFolders)
- [findAllFoldersWithName](#findAllFoldersWithName)
- [findAllPackages](#findAllPackages)
- [findAllTodoFolderPaths](#findAllTodoFolderPaths)
- [findFilesRecursively](#findFilesRecursively)
- [getArgument](#getArgument)
- [getContents](#getContents)
- [getOutline](#getOutline)
- [isMatch](#isMatch)
- [isSearchContentExtension](#isSearchContentExtension)
- [pathArrayIsOperation](#pathArrayIsOperation)

## Variables

- [arg1](#arg1)
- [arg2](#arg2)
- [benchmark](#benchmark)
- [determineFileType](#determinefiletype)
- [exploreGitRepoFolders](#exploregitrepofolders)
- [exploreMultiple](#exploremultiple)
- [exploreOperationFolders](#exploreoperationfolders)
- [explorePreset](#explorepreset)
- [explore](#explore)
- [findAllDocsFolderPaths](#findalldocsfolderpaths)
- [findAllDotGitFolders](#findalldotgitfolders)
- [findAllFoldersWithName](#findallfolderswithname)
- [findAllPackages](#findallpackages)
- [findAllTodoFolderPaths](#findalltodofolderpaths)
- [findFilesRecursively](#findfilesrecursively)
- [getArgument](#getargument)
- [getContents](#getcontents)
- [getOutline](#getoutline)
- [isMatch](#ismatch)
- [isSearchContentExtension](#issearchcontentextension)
- [pathArrayIsOperation](#patharrayisoperation)
- [test](#test)



# Functions

## benchmark

### Parameters (1)

#### Parameter 1: amount (optional): number

## determineFileType

returns the file type or null if it's unknown




## exploreGitRepoFolders

find all active git folders (folders having `.git`)




## exploreMultiple

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now




## exploreOperationFolders

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath (optional) | object |  |



## explorePreset

## explore

this is the safe and friendly version of findFilesRecursively: it




## findAllDocsFolderPaths

### Parameters (1)

#### Parameter 1: ignoreOperations (optional): boolean

## findAllDotGitFolders

## findAllFoldersWithName

### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string |  |
| folderName  | string |  |
| ignoreOperations (optional) | boolean |  |



## findAllPackages

### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath (optional) | object |  |



## findAllTodoFolderPaths

### Parameters (2)

#### Parameter 1: basePath: string

#### Parameter 2: ignoreOperations (optional): boolean

## findFilesRecursively

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...




## getArgument

### Parameters (1)

#### Parameter 1: number: number

## getContents

gets needed contents of file path, based on the extension

returns a markdownparse if it's markdown, a json parse for json, or a file content string for anything else




## getOutline

## isMatch

## isSearchContentExtension

type checker for a string to be an extension that can be searched for


### Returns: object

## pathArrayIsOperation

Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation

Handy for `cancelRecursionOn` in `explore`


### Returns: object

### Parameters (1)

#### Parameter 1: pathArray: array

- null: string





# Variables

## arg1 (unexported const)

## arg2 (unexported const)

## benchmark (unexported const)

## determineFileType (exported const)

returns the file type or null if it's unknown


## exploreGitRepoFolders (exported const)

find all active git folders (folders having `.git`)


## exploreMultiple (exported const)

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now


## exploreOperationFolders (exported const)

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array


## explorePreset (exported const)

## explore (exported const)

this is the safe and friendly version of findFilesRecursively: it


## findAllDocsFolderPaths (exported const)

## findAllDotGitFolders (exported const)

## findAllFoldersWithName (exported const)

## findAllPackages (exported const)

## findAllTodoFolderPaths (exported const)

## findFilesRecursively (exported const)

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...


## getArgument (unexported const)

## getContents (unexported const)

gets needed contents of file path, based on the extension

returns a markdownparse if it's markdown, a json parse for json, or a file content string for anything else


## getOutline (unexported const)

## isMatch (unexported const)

## isSearchContentExtension (unexported const)

type checker for a string to be an extension that can be searched for


## pathArrayIsOperation (exported const)

Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation

Handy for `cancelRecursionOn` in `explore`


## test (exported const)

