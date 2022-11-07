# K explore

k-explore (node operation)

exploration functions for exploring files within King OS

Currently has a thin dependency on `get-path`, but this can probably be removed to make this operation more general purpose (and work outside of King OS too)




# Outline

## Functions

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
- [pathArrayIsOperation](#pathArrayIsOperation)

## Variables

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
- [pathArrayIsOperation](#patharrayisoperation)
- [test](#test)



# Functions

## determineFileType()

returns the file type or null if it's unknown


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## exploreGitRepoFolders()

find all active git folders (folders having `.git`)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## exploreMultiple()

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## exploreOperationFolders()

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { basePath?: {  }, <br /> } |  |
| **Output** |    |    |



## explorePreset()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## explore()

this is the safe and friendly version of findFilesRecursively: it


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## findAllDocsFolderPaths()

| Input      |    |    |
| ---------- | -- | -- |
| ignoreOperations (optional) | boolean |  |
| **Output** |    |    |



## findAllDotGitFolders()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## findAllFoldersWithName()

| Input      |    |    |
| ---------- | -- | -- |
| config | { basePath: string, <br />folderName: string, <br />ignoreOperations?: boolean, <br /> } |  |
| **Output** |    |    |



## findAllPackages()

| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { basePath?: {  }, <br /> } |  |
| **Output** |    |    |



## findAllTodoFolderPaths()

| Input      |    |    |
| ---------- | -- | -- |
| basePath | string |  |,| ignoreOperations (optional) | boolean |  |
| **Output** |    |    |



## findFilesRecursively()

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## pathArrayIsOperation()

Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation

Handy for `cancelRecursionOn` in `explore`


| Input      |    |    |
| ---------- | -- | -- |
| pathArray | string[] |  |
| **Output** | {  }   |    |


# Variables

## 📄 determineFileType (exported const)

returns the file type or null if it's unknown


## 📄 exploreGitRepoFolders (exported const)

find all active git folders (folders having `.git`)


## 📄 exploreMultiple (exported const)

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now


## 📄 exploreOperationFolders (exported const)

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array


## 📄 explorePreset (exported const)

## 📄 explore (exported const)

this is the safe and friendly version of findFilesRecursively: it


## 📄 findAllDocsFolderPaths (exported const)

## 📄 findAllDotGitFolders (exported const)

## 📄 findAllFoldersWithName (exported const)

## 📄 findAllPackages (exported const)

## 📄 findAllTodoFolderPaths (exported const)

## 📄 findFilesRecursively (exported const)

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...


## 📄 pathArrayIsOperation (exported const)

Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation

Handy for `cancelRecursionOn` in `explore`


## 📄 test (exported const)

