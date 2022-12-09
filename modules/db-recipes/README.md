# Db recipes

db-recipes (`OperationClassification` node-cjs)

Useful library of functions that wrap the `fs-orm` database.

TODO: should probably be split up further to differentiate between db-ui functions and a more general purpose library




# Api reference

## cacheLookup()

Wrapper function to cache any function and invalidate it, in some way

caching
automatic cache invalidation if data sources are updated
optimistic caching after cache invalidation


| Input      |    |    |
| ---------- | -- | -- |
| functionName | string |  |,| parameters (optional) | {  }[] |  |
| **Output** | { hasValidCache: boolean, <br />result: {  }, <br /> }   |    |



## validateInput()

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { isValid: boolean, <br />errors?: { fieldStack: string[], <br />error: string, <br /> }[], <br /> }   |    |



## validateResult()

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { isValid: boolean, <br />errors?: { fieldStack: string[], <br />error: string, <br /> }[], <br /> }   |    |



## 📄 cacheLookup (exported const)

Wrapper function to cache any function and invalidate it, in some way

caching
automatic cache invalidation if data sources are updated
optimistic caching after cache invalidation


## 📄 validateInput (exported const)

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.


## 📄 validateResult (exported const)

wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.

# Tests

<details><summary>Show test information(7)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## testFn()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## wrapFunction()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 main (unexported const)

## 📄 testFnWrapped (unexported const)

## 📄 testFn (unexported const)

## 📄 wrapFunction (exported const)

  </details>

# Internal

<details><summary>Show internal (29)</summary>
    
  # calculateOperatingSystemBundle()

This function should calculate a giant bundle for the whole operating system. This should include everything, public.

Used to show the whole os as a bundle.


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## deleteDbModel()

deletes an instance of an db data interface from the db in a typesafe way


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getDatabaseMenu()

Finds all relevant Db models to show in the menu

- for a bundleId, it gets all models from the bundleSummary
- for a bundled project (bundled) gets all models from the packages
- for the main project, gets all models from sdk-db directly

TODO: NB: the first and the second are not the same, so this needs to be cleaned up.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { bundleId?: string, <br /> } |  |
| **Output** |    |    |



## getDbModelMetadata()

| Input      |    |    |
| ---------- | -- | -- |
| modelName (optional) | string |  |
| **Output** |    |    |



## getDbModelNames()

| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { bundleId?: string, <br /> } |  |
| **Output** |    |    |



## getDbModel()

gets all instances of an db data interface from the db in a typesafe way


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getFunctionIndex()

finds function indexation from database

TODO: this should be used!


| Input      |    |    |
| ---------- | -- | -- |
| {
  functionName,
} | { functionName: string, <br /> } |  |
| **Output** |    |    |



## getNestedDatabaseMenu()

TODO: support search for bundles (but this can be augmented word based)


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { noOperationPath?: boolean, <br />noOperationName?: boolean, <br />noSrcRelativeFolder?: boolean, <br />noPrefix?: boolean, <br /> } |  |
| **Output** |    |    |



## getReferencableModelData()

Get referencableModelData for a single DbModel.

NB: this does not get the items that can be referenced in that model!

For getting all required `ReferencableModelData` for the prop in `SimplifiedSchemaForm`, use `useGetReferencableModelData`.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## hasDbRecipes()

Simple function to test whether or not the DbRecipes endpoints are available. If it returns true through the api, the other ones are also available.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## makeSrcRelativeFolder()

gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)


| Input      |    |    |
| ---------- | -- | -- |
| operationRelativeTypescriptFilePath | string |  |
| **Output** | string   |    |



## tsInterfaceToDbMenu()

| Input      |    |    |
| ---------- | -- | -- |
| tsInterface | `TsInterface` |  |,| type | string |  |
| **Output** | { name: string, <br />operationName: string, <br />type: string, <br />srcRelativeFolder?: string, <br /> }   |    |



## upsertDbModel()

upserts an instance of an db data interface from the db in a typesafe way


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## wrapFunction()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 🔹 CacheLookupResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| hasValidCache  | boolean |  |
| result (optional) | object |  |



## 📄 calculateOperatingSystemBundle (exported const)

This function should calculate a giant bundle for the whole operating system. This should include everything, public.

Used to show the whole os as a bundle.


## 📄 deleteDbModel (exported const)

deletes an instance of an db data interface from the db in a typesafe way


## 📄 getDatabaseMenu (exported const)

Finds all relevant Db models to show in the menu

- for a bundleId, it gets all models from the bundleSummary
- for a bundled project (bundled) gets all models from the packages
- for the main project, gets all models from sdk-db directly

TODO: NB: the first and the second are not the same, so this needs to be cleaned up.


## 📄 getDbModelMetadata (exported const)

## 📄 getDbModelNames (exported const)

## 📄 getDbModel (exported const)

gets all instances of an db data interface from the db in a typesafe way


## 📄 getFunctionIndex (exported const)

finds function indexation from database

TODO: this should be used!


## 📄 getNestedDatabaseMenu (exported const)

TODO: support search for bundles (but this can be augmented word based)


## 📄 getReferencableModelData (exported const)

Get referencableModelData for a single DbModel.

NB: this does not get the items that can be referenced in that model!

For getting all required `ReferencableModelData` for the prop in `SimplifiedSchemaForm`, use `useGetReferencableModelData`.


## 📄 hasDbRecipes (exported const)

Simple function to test whether or not the DbRecipes endpoints are available. If it returns true through the api, the other ones are also available.


## 📄 makeSrcRelativeFolder (exported const)

gets a src relative folder path (so maybe "" for a file `src/util.ts` or "util" for a file `src/util/thing.ts`)


## 📄 tsInterfaceToDbMenu (exported const)

## 📄 upsertDbModel (exported const)

upserts an instance of an db data interface from the db in a typesafe way


## 📄 wrapFunction (exported const)

  </details>

