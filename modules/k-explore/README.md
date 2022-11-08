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

