# Explore project

explore-project (`OperationClassification` node-cjs)

`explore-project` explores the whole OS or project, so information about the project can be shown in a UI or used in another way




# Api reference

## getProjectRelativePaths()

get file paths within your project


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { type?: `RelativePathType`, <br />earliestUpdatedAt?: number, <br />filterDraft?: boolean, <br />filterPrivate?: boolean, <br />filterGenerated?: boolean, <br />sort?: string, <br /> } |  |
| **Output** |    |    |



## 📄 getProjectRelativePaths (exported const)

get file paths within your project


## getFrontmattersMappedObject()

| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |,| markdownPaths (optional) | string[] |  |
| **Output** |    |    |



## getTodoPaths()

| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | `TodoPagesConfig` |  |
| **Output** |    |    |



## 📄 getFrontmattersMappedObject (exported const)

## 📄 getTodoPaths (exported const)

# Tests

<details><summary>Show test information(2)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (unexported const)

  </details>

# Internal

<details><summary>Show internal (17)</summary>
    
  # exploreOperation()

for every package.json it finds, it explores the root, src, and docs.
- in src, index is ignored
- in docs, only md is found
- in the root, only md is found
- for every file in src, it shows and finds all functions, interfaces and variables, through the indexation from it


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |
| **Output** |    |    |



## exploreProject()

TODO: still needs to be cleaned up. It's a huge function now with many useful components. Split it up!

- explores all files and folders until it finds a package.json.

all items in the explore tree are clickable in the ui, and lead to different pages
-  a folder leads to a summary of what the folder holds
-  a operation leads to a summary of the operation
-  a ts file leads to all functions, variables, and interfaces in that file
-  a function, variable, or interface leads to specific pages for those things. the data, if available, is attached to the interfaces.
- a md file leads to the editing user interface (with context) of that file
- a json file leads to a CRUD for it...


### Performance

In the end the data it generates should stay up to date, so it's important this exploration happens fast enough. The data involved is simply walking the filesystem once (a small subset of it) and opening some index files (fun)


### Ideas for later

LATER: some more things that would be useful:

- watching all files that are also explored for changes using some watcher
- if something changes, recalculating that part and pushing it to the UI, making the thing going over the line small so it'll be super fast, even over slow internet.

however, this is premature optimisation. on my m1, locally, it's probably fine to just recalculate every second ^^ and send a couple megabytes over the line.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { bundleId?: string, <br /> } |  |
| **Output** |    |    |



## getExplorationType()

gets the exploration type from an absolute type


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |,| operationFolders | string[] |  |
| **Output** | function / folder / operation / operationFolder / markdown / typescript / interface / variable   |    |



## getFileWithExtension()

| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** | `String`   |    |



## getFolderExplorationDetails()

| Input      |    |    |
| ---------- | -- | -- |
| config | { hasCommentTypes?: `CommentType`[], <br />interfaceIsDbModel?: boolean, <br />path: string, <br />type: folder / operation / operationFolder / markdown / typescript / function / interface / variable, <br />name: string, <br />sort?: string, <br />typeIndexType?: TsBuildError / TsLintWarning / TsFunction / TsVariable / TsInterface / TsComment / TsImport / TsExport / null, <br /> } |  |
| **Output** |    |    |



## getInstanceNames()

returns the paths of instances in a file, like functions, variables or interfaces


| Input      |    |    |
| ---------- | -- | -- |
| array | {  }[] |  |,| relativePathFromProjectRoot | string |  |
| **Output** | string[]   |    |



## getTodoPages()

`getTodoPages(): WebPage[]` function:

- use getProjectRelativePaths, map the result to a queryPath + file
- [operation-name]/[todo-relative-file-id] for operations
- [folder-name]/[todo-relative-file-id] for todos within folders


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | `TodoPagesConfig` |  |
| **Output** |    |    |



## hasSameProjectPath()

function that returns a filter function that can check if some object (that extends an TsIndexModelType) has the same relative file path from the project root


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string |  |
| **Output** | {  }   |    |



## 🔹 RelativePathType

## 📄 exploreOperation (exported const)

for every package.json it finds, it explores the root, src, and docs.
- in src, index is ignored
- in docs, only md is found
- in the root, only md is found
- for every file in src, it shows and finds all functions, interfaces and variables, through the indexation from it


## 📄 exploreProject (exported const)

TODO: still needs to be cleaned up. It's a huge function now with many useful components. Split it up!

- explores all files and folders until it finds a package.json.

all items in the explore tree are clickable in the ui, and lead to different pages
-  a folder leads to a summary of what the folder holds
-  a operation leads to a summary of the operation
-  a ts file leads to all functions, variables, and interfaces in that file
-  a function, variable, or interface leads to specific pages for those things. the data, if available, is attached to the interfaces.
- a md file leads to the editing user interface (with context) of that file
- a json file leads to a CRUD for it...


### Performance

In the end the data it generates should stay up to date, so it's important this exploration happens fast enough. The data involved is simply walking the filesystem once (a small subset of it) and opening some index files (fun)


### Ideas for later

LATER: some more things that would be useful:

- watching all files that are also explored for changes using some watcher
- if something changes, recalculating that part and pushing it to the UI, making the thing going over the line small so it'll be super fast, even over slow internet.

however, this is premature optimisation. on my m1, locally, it's probably fine to just recalculate every second ^^ and send a couple megabytes over the line.


## 📄 getExplorationType (exported const)

gets the exploration type from an absolute type


## 📄 getFileWithExtension (exported const)

## 📄 getFolderExplorationDetails (exported const)

## 📄 getInstanceNames (exported const)

returns the paths of instances in a file, like functions, variables or interfaces


## 📄 getTodoPages (exported const)

`getTodoPages(): WebPage[]` function:

- use getProjectRelativePaths, map the result to a queryPath + file
- [operation-name]/[todo-relative-file-id] for operations
- [folder-name]/[todo-relative-file-id] for todos within folders


## 📄 hasSameProjectPath (exported const)

function that returns a filter function that can check if some object (that extends an TsIndexModelType) has the same relative file path from the project root
  </details>

