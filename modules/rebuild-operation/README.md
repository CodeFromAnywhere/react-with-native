# Rebuild operation

rebuild-operation (`OperationClassification` node-cjs)

Operation that makes it possible to rebuild an operation (re-index, re-build, etc.)




# Docs

<details><summary>README.md</summary>
    
  Please use `rebuidOperation [operation-name]` and `rebuildAllOperations` to rebuild your operations after you changed things in case you were not running the `k-dev` `dev`-command.

They can be found in the bin: `npx [function-name]`

  </details>

<details><summary>operation-build-steps.md</summary>
    
  Rebuilding an operation consists of these steps


### Install

Installing is done using `yarn --offline`
If installing fails, it's because packages are missing. Usually this can be solved by using `yarn` with internet.
If installing fails, the script should exit. Also out of `nodemon` **(TODO)**


### Create imports/exports index

This indexes the imports and exports. We can detect here if the imports can be resolved.

Incorrect dependency: a dependency has no `build` folder OR a dependency has no (or empty) `index` file.
When this happens, we can rebuildOperation for that dependency and wait for that to succeed before we continue.

If a dependency is not exporting the thing we need (anymore) or we did something else wrong ourselves, the mistake needs to be fixed on our end. However, this cannot be detected in this step, it will be detected when creating the build errors index.

Be warned. If there is a circular dependency, it could become an infinite loop. For that we are passing a `stack` history as an argument to `rebuildOperation` and make sure it doesn't try to `rebuildOperation` for something in the stack.


### Create build errors index

This uses `ts-morph` to find build-errors and puts them in `index/build-errors`.
If there are build-errors, we shouldn't continue.


### Create other indexes

This creates other indexes in the `index/` folder.
If this fails for any reason, we can't continue and it should be waited for until something changed.


### Lint operation

There are many things we are assuming now, but if we lint it, we can just provide errors whenever something is not up to par with our standards. We probably need our files indexed for some lints, so this would be the best stage to lint.


### Create index ts file

This accumulates all exports from other files and re-exports it as the main entry, but ignores test and cli files.


### Create build folder

It can still fail if the above step fails, but normally shouldn't.


### Create `operation-index.json`

If everything succeded, we can store the `updatedAt` time into our `operation-index.json` here

  </details>

# Api reference

## rebuildOperation()

This function rebuilds an operation and re-indexes (part of) its files.


| Input      |    |    |
| ---------- | -- | -- |
| config | { updatedAt?: number, <br />typerepoManualProjectRoot?: string, <br />operationManualProjectRoot?: string, <br />operationBasePath: string, <br />filePaths?: string[], <br />noUnresolvedRebuilding?: boolean, <br />force?: boolean, <br />debug?: boolean, <br />noExit?: boolean, <br />stack?: string[], <br /> } |  |
| **Output** |    |    |



## 📄 rebuildOperation (exported const)

This function rebuilds an operation and re-indexes (part of) its files.


## yarnBuild()

Builds and minifies the src


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |,| config (optional) | { rmFirst?: boolean, <br />skipMinify?: boolean, <br /> } |  |
| **Output** |    |    |



## 📄 yarnBuild (exported const)

Builds and minifies the src


## clearTsDatabase()

Clears all typescript indexation models, and removes all indexation from the oprations

TODO: test first, not sure about the Operation one


| Input      |    |    |
| ---------- | -- | -- |
| operationName (optional) | string |  |
| **Output** |    |    |



## getAllDbModels()

| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |,| operationName (optional) | string |  |
| **Output** |    |    |



## 📄 clearTsDatabase (exported const)

Clears all typescript indexation models, and removes all indexation from the oprations

TODO: test first, not sure about the Operation one


## 📄 getAllDbModels (exported const)

# CLI

<details><summary>Show CLI information (6)</summary>
    
  # rebuildOperationCli()

`rebuildOperation` CLI syntax:

`rebuildOperation [...operations]`

Operations can be a list of differnt operation names you want to rebuild. It's also possible to specify a relative path instead of an operation name.

for example:

`rebuildOperation ./packages/operation-x` would rebuild `operation-x` in your packages folder

another handy one is `rebuildOperation .` because it will rebuild the operation in your current folder.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 isRebuildingProcessUpdated (unexported const)

## 📄 [isUpdatedString] (unexported const)

## 📄 manualProjectRoot (unexported const)

## 📄 [operationName] (unexported const)

## 📄 rebuildOperationCli (unexported const)

`rebuildOperation` CLI syntax:

`rebuildOperation [...operations]`

Operations can be a list of differnt operation names you want to rebuild. It's also possible to specify a relative path instead of an operation name.

for example:

`rebuildOperation ./packages/operation-x` would rebuild `operation-x` in your packages folder

another handy one is `rebuildOperation .` because it will rebuild the operation in your current folder.
  </details>

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (20)</summary>
    
  # executeCommandQuietUnlessFail()

Executes a command without showing the result, unless the command fails, then it will log the output.,


| Input      |    |    |
| ---------- | -- | -- |
| config | { command: string, <br />cwd?: string, <br />description?: string, <br /> } |  |
| **Output** | {  }   |    |



## exitIfProcessDependenciesChanged()

exits the process if our own dependencies change


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## generateJsonSchemas()

generates schemas for db models

Is done every time you run `rebuildOperation` and `generateSdkOperations`

TODO: there are some problems with references that cannot be found with references to generic types... This can probably be solved, but it's not going to be easy!

IDEA:

1) find all referencing definitions in the main schema
2) find those in all other interfaces
3) recursively find references in those as well
4) if you can't find the reference, remove the reference and replace type to "any" (add WARNING to description "reference not found")

This will result in a valid schema that has no unresolved references

TODO: apply Storage<X> to db-models

TODO: apply Array<X> to db-models with json-multiple

TODO: apply special config conventions (MergedDbConfig) like tsconfig.json and package.json

TODO: Make a validator that validates the whole database to this schema.


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |,| operationName (optional) | string | If given, does it just for a single operation |
| **Output** |    |    |



## getFileIds()

gets all identifiers of files, which are the relative path to a file without the extension


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationFolderPath,
  pathSuffix,
  extension,
} | { operationFolderPath: string, <br />extension?: {  }, <br />pathSuffix: string, <br /> } |  |
| **Output** |    |    |



## getIndexFileIds()

gets identifiers of ts and tsx files, which are the relative path to a file without the extension


| Input      |    |    |
| ---------- | -- | -- |
| operationFolderPath | string |  |
| **Output** |    |    |



## getSrcIds()

gets identifiers of ts and tsx files, which are the relative path to a file without the extension

in order for them to be unique, we assume here that there's never a file with the ts extension when there's also a tsx file in the same folder with the same name. This would create duplicate ids.


| Input      |    |    |
| ---------- | -- | -- |
| operationFolderPath | string |  |
| **Output** |    |    |



## isOperationBuildNeeded()

returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |
| **Output** |    |    |



## isSdkOperation()

| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |
| **Output** | {  }   |    |



## rebuildAllOperations()

Rebuilds all operations that are needed to be rebuilt


| Input      |    |    |
| ---------- | -- | -- |
| isRebuildingProcessUpdated (optional) | boolean | If true, you are indicating that the rebuilding process has changed and all operations should be rebuilt after this date. |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## shouldSkip()

if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped


| Input      |    |    |
| ---------- | -- | -- |
| config | { operationBasePath: string, <br />debug?: boolean, <br />force?: boolean, <br />operationManualProjectRoot?: string, <br />rebuildUpdatedAt?: number, <br /> } |  |
| **Output** |    |    |



## 📄 executeCommandQuietUnlessFail (exported const)

Executes a command without showing the result, unless the command fails, then it will log the output.,


## 📄 exitIfProcessDependenciesChanged (exported const)

exits the process if our own dependencies change


## 📄 generateJsonSchemas (exported const)

generates schemas for db models

Is done every time you run `rebuildOperation` and `generateSdkOperations`

TODO: there are some problems with references that cannot be found with references to generic types... This can probably be solved, but it's not going to be easy!

IDEA:

1) find all referencing definitions in the main schema
2) find those in all other interfaces
3) recursively find references in those as well
4) if you can't find the reference, remove the reference and replace type to "any" (add WARNING to description "reference not found")

This will result in a valid schema that has no unresolved references

TODO: apply Storage<X> to db-models

TODO: apply Array<X> to db-models with json-multiple

TODO: apply special config conventions (MergedDbConfig) like tsconfig.json and package.json

TODO: Make a validator that validates the whole database to this schema.


## 📄 getFileIds (exported const)

gets all identifiers of files, which are the relative path to a file without the extension


## 📄 getIndexFileIds (exported const)

gets identifiers of ts and tsx files, which are the relative path to a file without the extension


## 📄 getSrcIds (exported const)

gets identifiers of ts and tsx files, which are the relative path to a file without the extension

in order for them to be unique, we assume here that there's never a file with the ts extension when there's also a tsx file in the same folder with the same name. This would create duplicate ids.


## 📄 isOperationBuildNeeded (exported const)

returns a boolean indicating whether or not the operation should be able to be built, based on the OperationClassification


## 📄 isSdkOperation (exported const)

## 📄 rebuildAllOperations (exported const)

Rebuilds all operations that are needed to be rebuilt


## 📄 shouldSkip (exported const)

if you don't force it, there's an operation index, there's an index folder, the src has not been touched since hte last indexation, and there's a buildfolder (if needed), then the rebuildOperation can be skipped
  </details>

