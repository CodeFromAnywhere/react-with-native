# Fs orm

fs-orm (`OperationClassification` node-cjs)

ORM that lets you create a database with models that are stored on the file system in multiple formats that are easy to understand and well structured.




# Api reference

## 🔹 CustomQueryConfig

NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.

Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.



> NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.<br /><br />Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## 🔹 CustomQueryConfig

NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.

Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| operationName (optional) | string |  |



## 🔹 Include

Properties: 

 | Name | Type | Description |
|---|---|---|
| referenceKey (optional) | string |  |
| items (optional) | array |  |
| include (optional) | object |  |



## getDatabaseFiles()

This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method.
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)


| Input      |    |    |
| ---------- | -- | -- |
| modelName | string |  |,| mergedConfig | `MergedQueryConfig` |  |
| **Output** |    |    |



## 🔹 DbQueryResult

TODO: return the inserted id or other reference

Result of any query except `get`. Will not always provide all parameters (depends on the type of query you do)



> TODO: return the inserted id or other reference<br /><br />Result of any query except `get`. Will not always provide all parameters (depends on the type of query you do)

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccesful (optional) | boolean |  |
| message (optional) | string |  |
| isNewFile (optional) | boolean |  |
| amountInserted (optional) | number |  |
| amountUpdated (optional) | number |  |
| amountRemoved (optional) | number |  |



## 🔹 DbQueryResult

TODO: return the inserted id or other reference

Result of any query except `get`. Will not always provide all parameters (depends on the type of query you do)





Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccesful (optional) | boolean |  |
| message (optional) | string |  |
| isNewFile (optional) | boolean |  |
| amountInserted (optional) | number |  |
| amountUpdated (optional) | number |  |
| amountRemoved (optional) | number |  |
| allRemoved (optional) | boolean |  |



## 📄 getDatabaseFiles (exported const)

This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method.
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)


## createDb()

Create your database by passing your models as a generic and some optional configuration


| Input      |    |    |
| ---------- | -- | -- |
| dbConfig (optional) | `DbConfig<>` |  |
| **Output** | { getDbFileLocationPath: {  }, <br />get: {  }, <br />getByFile: {  }, <br />set: {  }, <br />remove: {  }, <br />update: {  }, <br />clear: {  }, <br />upsert: {  }, <br /> }   |    |



## getDefaultLocationPattern()

DB main storage convention


| Input      |    |    |
| ---------- | -- | -- |
| dbStorageMethod | `DbStorageMethod` |  |,| modelName | string |  |
| **Output** | string   |    |



## mergeConfigs()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## upsert()

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the id or slug)
- otherwise inserts

NB: this function works for any storage method except for key value markdown


| Input      |    |    |
| ---------- | -- | -- |
| storedData | `Storing<AugmentedAnyModelType>`[] | The items that were already there |,| storingItems | {  } | The items that need to be overwritten or inserted |,| onlyInsert (optional) | boolean | If true, the upserting will fail if there are occuring items with equal slugs/ids |
| **Output** |    |    |



## 🔹 MergedQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| dbStorageMethod  | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |
| manualProjectRoot  | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath (optional) | string | if specified, only this location will be used |
| operationRelativePath (optional) | string | if specified, only this location will be used (also need an `operationName`) |



## 🔹 MergedQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| dbStorageMethod  | string |  |
| manualProjectRoot  | string |  |
| projectRoot  | string |  |
| operationName (optional) | string |  |
| operationRelativePath (optional) | string |  |
| projectRelativePath (optional) | string |  |



## 🔹 QueryConfig

QueryConfig is set on 4 levels, which have increasing priority

- hardcoded in `fs-orm`
- when calling `createDb`, setting `defaultQueryConfig`
- when calling `createDb`, setting `modelQueryConfig`
- when running a query

Not all options are available when running a query.



> QueryConfig is set on 4 levels, which have increasing priority<br /><br />- hardcoded in `fs-orm`<br />- when calling `createDb`, setting `defaultQueryConfig`<br />- when calling `createDb`, setting `modelQueryConfig`<br />- when running a query<br /><br />Not all options are available when running a query.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath (optional) | string | if specified, only this location will be used |
| operationRelativePath (optional) | string | if specified, only this location will be used (also need an `operationName`) |
| dbStorageMethod (optional) | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |



## 🔹 QueryConfig

QueryConfig is set on 4 levels, which have increasing priority

- hardcoded in `fs-orm`
- when calling `createDb`, setting `defaultQueryConfig`
- when calling `createDb`, setting `modelQueryConfig`
- when running a query

Not all options are available when running a query.





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| operationName (optional) | string |  |
| dbStorageMethod (optional) | string |  |
| operationRelativePath (optional) | string |  |
| projectRelativePath (optional) | string |  |



## 🔹 UpsertQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| removeUntouched (optional) | boolean | Special config for upsert. If you set this to true, all items in the databasefiles that were altered that you didn't specify in the items, will be removed. |
| onlyInsert (optional) | boolean | If true, the query will fail if the slug or id already exists (normally this means upsert will update that value)<br /><br />NB: not supported for keyValueMarkdown |
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## 🔹 UpsertQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| removeUntouched (optional) | boolean |  |
| onlyInsert (optional) | boolean |  |
| manualProjectRoot (optional) | string |  |
| operationName (optional) | string |  |



## 📄 createDb (exported const)

Create your database by passing your models as a generic and some optional configuration


## 📄 getDefaultLocationPattern (exported const)

DB main storage convention


## 📄 mergeConfigs (exported const)

## 📄 upsert (exported const)

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the id or slug)
- otherwise inserts

NB: this function works for any storage method except for key value markdown

# Tests

<details><summary>Show test information(3)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 categoryStackCalculated (unexported const)

## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (69)</summary>
    
  # addDefaultValues()

Adds timestamps, id, and a slug IF these things are not already present

NB: slugs will be slugified here!
NB: if there is a name present, slug will be added here!

NB: for kvmd storage, id will be set to a kebab-case of the name

NB: does not add the ModelLocation parameters


| Input      |    |    |
| ---------- | -- | -- |
| bareItem | `Creation<AugmentedAnyModelType>` |  |,| isKvmdStorage (optional) | boolean |  |
| **Output** |    |    |



## alterAny()

low level function that alters data from any storage method at a certain location

comprises all dbStorageMethods


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## alterCsv()

Alters a csv


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## alterJsonMultiple()

Alters a json multiple file


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## alterJsonSingle()

Alters a json single file


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## alterKeyValueMarkdown()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## alterMarkdown()

Alters a markdown file


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## augmentItemWithReferencedDataRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| item | `AugmentedAnyModelType` |  |,| includeArray | `Include`[] |  |,| includeData | `IncludeDataObject` | Final includeData object to take items from |
| **Output** |    |    |



## calculateOperationsObject()

relative

Needed in case of manual project root, otherwise use SDK!

Returns project relative operation base paths


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot | string |  |
| **Output** |    |    |



## findParent()

this location matches any category that equals the categorystack


| Input      |    |    |
| ---------- | -- | -- |
| arrayItem | `Storing<KeyValueMarkdownModelType>` |  |,| newCategoryStack | `CategoryStack` |  |
| **Output** | {  }   |    |



## getAugmentedData()

Gets the stored data from any file with any storage method, and augments the modelLocation onto it...

Also augments the `name`, `slug` and `categoryStackCalculated` onto this if the `dbStorageMethod` is `markdown` or `jsonSingle` and if `operationRelativePath` is not set


| Input      |    |    |
| ---------- | -- | -- |
| dbFileLocation | `DbFileLocation` |  |,| dbStorageMethod | `DbStorageMethod` |  |
| **Output** |    |    |



## getDatabaseRootFolder()

Tries to get the root folder where the database folder can be found.

If an operationName is specified, this will be the operation base path
If not, this will be the project root.


| Input      |    |    |
| ---------- | -- | -- |
| operationName (optional) | string |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## getDbFileLocation()

Used by `groupByFile`, which is used for `set` (and thus, also `update`) and `upsert`: determines the new file location.

Applies the convention to get the db-file-location of an item

Based on the merged config:

- if `operationRelativePath` is specified, gets a filePath in the operation
- if `projectRelativePath` is specified, gets a filepath in the project
- otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)

Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.

NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...


| Input      |    |    |
| ---------- | -- | -- |
| storedItem | `Storing<AugmentedAnyModelType>` | The ModelLocation properties in the item are completely ignored.

Only the ID, slug and categoryStackCalculated are used to determine the exact file the item should be stored in.

NB: storedItem MUST have a slug or ID, but this should probably be generated before this funciton |,| operationName | null | Should be the operationName from the modellocation of the actual item.

If it is given, this will take priority over the merged query config. |,| mergedConfig | `MergedQueryConfig` |  |,| modelName | string |  |
| **Output** |    |    |



## getDbStorageMethodExtension()

| Input      |    |    |
| ---------- | -- | -- |
| dbStorageMethod | `DbStorageMethod` |  |
| **Output** | `String`   |    |



## getItemModelLocation()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getLength()

Safely gets the length of something


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getLocationPattern()

Returns the pattern or an exact relative path that the file(s) should be stored at.

If a pattern contains a star at the place of the filename, it will search the folder recursively for all files with the extension in the pattern.

Returning relative path has no preceding slash


| Input      |    |    |
| ---------- | -- | -- |
| dbStorageMethod | `DbStorageMethod` |  |,| modelName | string |  |,| mergedConfig | `MergedQueryConfig` |  |
| **Output** | string   |    |



## getMergedConfigOperationPath()

NB: returns 3 things:
- false: no operation path
- undefined: operation path undefined
- path: the specific operation path


| Input      |    |    |
| ---------- | -- | -- |
| mergedConfig | `MergedQueryConfig` |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## getParentSlug()

get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)

can be undefined if the item has no parent


| Input      |    |    |
| ---------- | -- | -- |
| item | `Storing<KeyValueMarkdownModelType>` |  |
| **Output** | string   |    |



## getRootFolders()

Gets all root folders where db folders can be located inside of

NB: Before november '22, this function is quite slow if it needs to find all operation folders becuase this takes at least 60ms.


| Input      |    |    |
| ---------- | -- | -- |
| config | { manualProjectRoot?: string, <br />projectRoot: string, <br />mergedConfig: `MergedQueryConfig`, <br />operationPath: {  }, <br /> } |  |
| **Output** |    |    |



## getWildcardDbFileLocations__OLD()

If it all seems good, I can delete this. This is the old method of looking just in the folder itself, it's replaced by looking in all subfolders as well, recursively.


| Input      |    |    |
| ---------- | -- | -- |
| options | { modelName: string, <br />parsedPath: `path.ParsedPath`, <br />operationName: string, <br />projectRoot: string, <br />rootFolder: `RootDbFolder`, <br /> } |  |
| **Output** |    |    |



## getWildcardDbFileLocations()

| Input      |    |    |
| ---------- | -- | -- |
| options | { modelName: string, <br />parsedPath: `path.ParsedPath`, <br />operationName: string, <br />projectRoot: string, <br />rootFolder: `RootDbFolder`, <br /> } |  |
| **Output** |    |    |



## groupByFile()

Used for `set` and `upsert`. Groups creation items into an object where keys are file paths and values are items that need to be stored


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## makeStoringItem()

Three things need to happen in order to store an item

1) keys that can be inferred from the file path are omitted
2) referenced data is omitted
3) calculated data is omitted


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## removeKeyValueMarkdown()

Takes stored data and a slug to remove


| Input      |    |    |
| ---------- | -- | -- |
| storedData | `Storing<KeyValueMarkdownModelType>`[] |  |,| slug | string | slug to remove |
| **Output** |    |    |



## removeMultiple()

Function that lets you remove items from one specific file, for any storage method


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## upsertItems()

upsert an item into storage in any storage method


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## upsertKeyValueMarkdown()

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function

- otherwise inserts, at the right category, in the right place in the array

BEWARE:

- the categoryStackCalculated must be existing in the markdownfile.
- you cannot insert a header, always insert an item with `isHeaderCalculated:false`


| Input      |    |    |
| ---------- | -- | -- |
| storedData | `Storing<KeyValueMarkdownModelType>`[] |  |,| storingItem | `Storing<KeyValueMarkdownModelType>` |  |
| **Output** |    |    |



## waitForLockfile()

| Input      |    |    |
| ---------- | -- | -- |
| lockfilePath | string |  |
| **Output** |    |    |



## 🔹 AnyModelObject

## 🔹 AnyModelObject

## 🔹 IncludeConfig

All possible ways to include items from references into a get query



> All possible ways to include items from references into a get query




## 🔹 IncludeDataObject

## 🔹 IncludeConfig

All possible ways to include items from references into a get query








## 🔹 IncludeDataObject

## 🔹 RootDbFolder

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string | is an operation Base path in case of operationName is not null |
| operationName  | string |  |



## 🔹 RootDbFolder

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string |  |
| operationName  | string |  |



## 🔹 UpsertKeyValueMarkdownItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| item  | object | handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug |



## 🔹 UpsertKeyValueMarkdownItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| item  | object |  |



## 📄 addDefaultValues (exported const)

Adds timestamps, id, and a slug IF these things are not already present

NB: slugs will be slugified here!
NB: if there is a name present, slug will be added here!

NB: for kvmd storage, id will be set to a kebab-case of the name

NB: does not add the ModelLocation parameters


## 📄 alterAny (exported const)

low level function that alters data from any storage method at a certain location

comprises all dbStorageMethods


## 📄 alterCsv (exported const)

Alters a csv


## 📄 alterJsonMultiple (exported const)

Alters a json multiple file


## 📄 alterJsonSingle (exported const)

Alters a json single file


## 📄 alterKeyValueMarkdown (exported const)

## 📄 alterMarkdown (exported const)

Alters a markdown file


## 📄 augmentItemWithReferencedDataRecursively (exported const)

## 📄 calculateOperationsObject (exported const)

Needed in case of manual project root, otherwise use SDK!

Returns project relative operation base paths


## 📄 findParent (exported const)

this location matches any category that equals the categorystack


## 📄 getAugmentedData (exported const)

Gets the stored data from any file with any storage method, and augments the modelLocation onto it...

Also augments the `name`, `slug` and `categoryStackCalculated` onto this if the `dbStorageMethod` is `markdown` or `jsonSingle` and if `operationRelativePath` is not set


## 📄 getDatabaseRootFolder (exported const)

Tries to get the root folder where the database folder can be found.

If an operationName is specified, this will be the operation base path
If not, this will be the project root.


## 📄 getDbFileLocation (exported const)

Used by `groupByFile`, which is used for `set` (and thus, also `update`) and `upsert`: determines the new file location.

Applies the convention to get the db-file-location of an item

Based on the merged config:

- if `operationRelativePath` is specified, gets a filePath in the operation
- if `projectRelativePath` is specified, gets a filepath in the project
- otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)

Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.

NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...


## 📄 getDbStorageMethodExtension (exported const)

## 📄 getItemModelLocation (exported const)

## 📄 getLength (exported const)

Safely gets the length of something


## 📄 getLocationPattern (exported const)

Returns the pattern or an exact relative path that the file(s) should be stored at.

If a pattern contains a star at the place of the filename, it will search the folder recursively for all files with the extension in the pattern.

Returning relative path has no preceding slash


## 📄 getMergedConfigOperationPath (exported const)

NB: returns 3 things:
- false: no operation path
- undefined: operation path undefined
- path: the specific operation path


## 📄 getParentSlug (exported const)

get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)

can be undefined if the item has no parent


## 📄 getRootFolders (exported const)

Gets all root folders where db folders can be located inside of

NB: Before november '22, this function is quite slow if it needs to find all operation folders becuase this takes at least 60ms.


## 📄 getWildcardDbFileLocations__OLD (exported const)

If it all seems good, I can delete this. This is the old method of looking just in the folder itself, it's replaced by looking in all subfolders as well, recursively.


## 📄 getWildcardDbFileLocations (exported const)

## 📄 groupByFile (exported const)

Used for `set` and `upsert`. Groups creation items into an object where keys are file paths and values are items that need to be stored


## 📄 makeStoringItem (exported const)

Three things need to happen in order to store an item

1) keys that can be inferred from the file path are omitted
2) referenced data is omitted
3) calculated data is omitted


## 📄 maxQueryTimeSeconds (exported const)

## 📄 removeKeyValueMarkdown (exported const)

Takes stored data and a slug to remove


## 📄 removeMultiple (exported const)

Function that lets you remove items from one specific file, for any storage method


## 📄 upsertItems (exported const)

upsert an item into storage in any storage method


## 📄 upsertKeyValueMarkdown (exported const)

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function

- otherwise inserts, at the right category, in the right place in the array

BEWARE:

- the categoryStackCalculated must be existing in the markdownfile.
- you cannot insert a header, always insert an item with `isHeaderCalculated:false`


## 📄 waitForLockfile (exported const)

  </details>

