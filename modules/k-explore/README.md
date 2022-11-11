# K explore

k-explore (`OperationClassification` node)

exploration functions for exploring files within King OS

Currently has a thin dependency on `get-path`, but this can probably be removed to make this operation more general purpose (and work outside of King OS too)




# Api reference

## explore()

This is the safe and friendly version of `findFilesRecursively`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 explore (exported const)

This is the safe and friendly version of `findFilesRecursively`


## exploreOperationFolders()

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { basePath?: {  }, <br /> } |  |
| **Output** |    |    |



## 📄 exploreOperationFolders (exported const)

find all active operations (folders having `package.json` but also `tsconfig.json`)

returns folder path array


## findAllTodoFolderPaths()

| Input      |    |    |
| ---------- | -- | -- |
| basePath | string |  |,| ignoreOperations (optional) | boolean |  |
| **Output** |    |    |



## 📄 findAllTodoFolderPaths (exported const)

## pathArrayIsOperation()

Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation

Handy for `cancelRecursionOn` in `explore`


| Input      |    |    |
| ---------- | -- | -- |
| pathArray | string[] |  |
| **Output** | {  }   |    |



## 📄 pathArrayIsOperation (exported const)

Checks if pathArray contains a package.json and a tsconfig.json and thus should be an operation

Handy for `cancelRecursionOn` in `explore`


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



## findAllDocsFolderPaths()

Returns absolute paths for all docs folders (not the files inside)


| Input      |    |    |
| ---------- | -- | -- |
| ignoreOperations (optional) | boolean | Don't look for docs folders inside of operation folders |
| **Output** |    |    |



## findAllPackages()

| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { basePath?: {  }, <br /> } |  |
| **Output** |    |    |



## 📄 determineFileType (exported const)

returns the file type or null if it's unknown


## 📄 exploreGitRepoFolders (exported const)

find all active git folders (folders having `.git`)


## 📄 findAllDocsFolderPaths (exported const)

Returns absolute paths for all docs folders (not the files inside)


## 📄 findAllPackages (exported const)

# CLI

<details><summary>Show CLI information (4)</summary>
    
  # getArgument()




| Input      |    |    |
| ---------- | -- | -- |
| number | number |  |
| **Output** |    |    |



## 📄 arg1 (unexported const)

## 📄 arg2 (unexported const)

## 📄 getArgument (unexported const)

  </details>

# Tests

<details><summary>Show test information(3)</summary>
    
  # benchmark()




| Input      |    |    |
| ---------- | -- | -- |
| amount (optional) | number |  |
| **Output** |    |    |



## 📄 benchmark (unexported const)

## 📄 test (exported const)

  </details>

# Internal

<details><summary>Show internal (11)</summary>
    
  # exploreMultiple()

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## explorePreset()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
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



## findFilesRecursively()

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 exploreMultiple (exported const)

DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now


## 📄 explorePreset (exported const)

## 📄 findAllDotGitFolders (exported const)

## 📄 findAllFoldersWithName (exported const)

## 📄 findFilesRecursively (exported const)

Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...


## 📄 test (exported const)

  </details>

