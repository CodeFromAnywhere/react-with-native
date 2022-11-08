# K explore

k-explore (node operation)

exploration functions for exploring files within King OS

Currently has a thin dependency on `get-path`, but this can probably be removed to make this operation more general purpose (and work outside of King OS too)




# Api reference

## explore()

this is the safe and friendly version of findFilesRecursively: it


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 explore (exported const)

this is the safe and friendly version of findFilesRecursively: it


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

| Input      |    |    |
| ---------- | -- | -- |
| ignoreOperations (optional) | boolean |  |
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

## 📄 findAllPackages (exported const)

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

