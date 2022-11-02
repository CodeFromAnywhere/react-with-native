# Fs orm

fs-orm (node operation)

ORM that lets you create a database with models that are stored on the file system in multiple formats that are easy to understand and well structured.




# Outline

## Docs

- [1 making a model](#1-making-a-model)
- [README](#readme)
- [Changelog](#changelog)
- [Clear](#clear)
- [Get](#get)
- [Getting started](#getting-started)
- [Limitations](#limitations)
- [Model types and storage methods](#model-types-and-storage-methods)
- [Remove](#remove)
- [Set](#set)
- [Update](#update)
- [Upsert](#upsert)

## Functions

- [addDefaultValues](#addDefaultValues)
- [alterAny](#alterAny)
- [alterCsv](#alterCsv)
- [alterJsonMultiple](#alterJsonMultiple)
- [alterJsonSingle](#alterJsonSingle)
- [alterKeyValueMarkdown](#alterKeyValueMarkdown)
- [alterMarkdown](#alterMarkdown)
- [augmentItemWithReferencedDataRecursively](#augmentItemWithReferencedDataRecursively)
- [calculateOperationsObject](#calculateOperationsObject)
- [createDb](#createDb)
- [findParent](#findParent)
- [getAugmentedData](#getAugmentedData)
- [getDatabaseFiles](#getDatabaseFiles)
- [getDatabaseRootFolder](#getDatabaseRootFolder)
- [getDbFileLocation](#getDbFileLocation)
- [getDbStorageMethodExtension](#getDbStorageMethodExtension)
- [getItemModelLocation](#getItemModelLocation)
- [getLength](#getLength)
- [getLocationPattern](#getLocationPattern)
- [getMergedConfigOperationPath](#getMergedConfigOperationPath)
- [getParentSlug](#getParentSlug)
- [getRootFolders](#getRootFolders)
- [getWildcardDbFileLocations__OLD](#getWildcardDbFileLocations__OLD)
- [getWildcardDbFileLocations](#getWildcardDbFileLocations)
- [groupByFile](#groupByFile)
- [makeStoringItem](#makeStoringItem)
- [mergeConfigs](#mergeConfigs)
- [removeKeyValueMarkdown](#removeKeyValueMarkdown)
- [removeMultiple](#removeMultiple)
- [test](#test)
- [upsertItems](#upsertItems)
- [upsertKeyValueMarkdown](#upsertKeyValueMarkdown)
- [upsert](#upsert)

## Interfaces

- [AnyModelObject](#anymodelobject)
- [AnyModelType](#anymodeltype)
- [AnyModelObject](#anymodelobject)
- [AnyModelType](#anymodeltype)
- [AugmentedAnyModelType](#augmentedanymodeltype)
- [AugmentedAnyModelType](#augmentedanymodeltype)
- [CategoryStack](#categorystack)
- [CategoryStack](#categorystack)
- [CustomQueryConfig](#customqueryconfig)
- [CustomQueryConfig](#customqueryconfig)
- [DbFileLocation](#dbfilelocation)
- [DbQueryResult](#dbqueryresult)
- [DbStorageMethod](#dbstoragemethod)
- [DbFileLocation](#dbfilelocation)
- [DbQueryResult](#dbqueryresult)
- [DbStorageMethod](#dbstoragemethod)
- [Frontmatter](#frontmatter)
- [IncludeConfig](#includeconfig)
- [IncludeDataObject](#includedataobject)
- [Include](#include)
- [IncludeConfig](#includeconfig)
- [IncludeDataObject](#includedataobject)
- [KeyValueMarkdownModelType](#keyvaluemarkdownmodeltype)
- [KeyValueMarkdownModelType](#keyvaluemarkdownmodeltype)
- [MergedQueryConfig](#mergedqueryconfig)
- [MergedQueryConfig](#mergedqueryconfig)
- [ModelLocation](#modellocation)
- [ModelLocation](#modellocation)
- [QueryConfig](#queryconfig)
- [QueryConfig](#queryconfig)
- [RootDbFolder](#rootdbfolder)
- [RootDbFolder](#rootdbfolder)
- [UpsertKeyValueMarkdownItem](#upsertkeyvaluemarkdownitem)
- [UpsertQueryConfig](#upsertqueryconfig)
- [UpsertKeyValueMarkdownItem](#upsertkeyvaluemarkdownitem)
- [UpsertQueryConfig](#upsertqueryconfig)

## Variables

- [addDefaultValues](#adddefaultvalues)
- [alterAny](#alterany)
- [alterCsv](#altercsv)
- [alterJsonMultiple](#alterjsonmultiple)
- [alterJsonSingle](#alterjsonsingle)
- [alterKeyValueMarkdown](#alterkeyvaluemarkdown)
- [alterMarkdown](#altermarkdown)
- [augmentItemWithReferencedDataRecursively](#augmentitemwithreferenceddatarecursively)
- [calculateOperationsObject](#calculateoperationsobject)
- [categoryStackCalculated](#categorystackcalculated)
- [createDb](#createdb)
- [findParent](#findparent)
- [getAugmentedData](#getaugmenteddata)
- [getDatabaseFiles](#getdatabasefiles)
- [getDatabaseRootFolder](#getdatabaserootfolder)
- [getDbFileLocation](#getdbfilelocation)
- [getDbStorageMethodExtension](#getdbstoragemethodextension)
- [getItemModelLocation](#getitemmodellocation)
- [getLength](#getlength)
- [getLocationPattern](#getlocationpattern)
- [getMergedConfigOperationPath](#getmergedconfigoperationpath)
- [getParentSlug](#getparentslug)
- [getRootFolders](#getrootfolders)
- [getWildcardDbFileLocations__OLD](#getwildcarddbfilelocations-old)
- [getWildcardDbFileLocations](#getwildcarddbfilelocations)
- [groupByFile](#groupbyfile)
- [makeStoringItem](#makestoringitem)
- [maxConcurrency](#maxconcurrency)
- [mergeConfigs](#mergeconfigs)
- [removeKeyValueMarkdown](#removekeyvaluemarkdown)
- [removeMultiple](#removemultiple)
- [test](#test)
- [upsertItems](#upsertitems)
- [upsertKeyValueMarkdown](#upsertkeyvaluemarkdown)
- [upsert](#upsert)



# Docs

## 1 making a model

In order to add a new model to your typebase, you need to add it to your `sdk-db`.

`sdk-db` collects all your models. In turn, the `database` operation will collect all models from `sdk-db` to create your database access functions.

In order to create a new model, all you need to do, is create a new type interface inside of a js-only operation that is exported, and extends one of the model-types that are defined in `model-types`.

Please note, that your operation must not contain any node.js code, because then you can't use this type interface on the frontend anymore.


### Example

```ts
import { SlugModelType } from "model-types";

export interface Todo extends SlugModelType {
  status: "todo" | "doing" | "done";
  markdown: string;
}
```

The above model extends the `SlugModelType`, which means the items of this model will also contain a `slug` and a `name`, on top of the `DefaultModelType`s and the properties speficied above.

> slug: A slug is a simplified version of the `name`, which removes complex characters and replaces every space with a dash. Besides this, upper-case characters become lower-case. For more info, see the `slugify` function.


### Adding the new model to your database functions

Before the model can be accessed, you first need to update your database functions. This can be done by updating your `sdk-db`. You can either do this manually yourself, or you can use the `generate-sdk-operations` operation of `typerepo`.

To regenerate the db, please run `generateDbSdk` or `generateSdkOperations`.

To do it manually, simply import your model into `sdk-db.ts`, add it to `DbModels`, `dbModelKeys` and `dbModelConfig`.

After you rebuilt `sdk-db`, please `Restart TS Server` in your VSCode and after a few seconds you can start using your new database model.

> Restart TS Server: Restart ts server is a command in VSCode that will restart your Typescript server. This will reload all typescript definitions and ensure that you have the newest version of all types and interfaces across your monorepo.


## README

Welcome to Typebase. Typebase is an ORM (Object Relational Mapping) that lets you create a database with models that are stored on the file system in multiple formats, that are easy to understand and well structured.

> Object Relational Mapping: A mapping from stored data to set of functions that can access that stored data in a specific programming language.

Typebase is very well integrated with Typescript, which makes it very easy to create new models that are typesafe.

> typesafe: the types of requested data are given without accessing the information itself. This makes it much harder to make mistakes in your code, because you know the shape of your data that you are going to request.


## Changelog

### September 30, 2022

✅ Make it possible to have nested folders in `db/[model]` folders in case of markdown.

✅ Ensure slugs are slugified, so it doesn't break in windows.

✅ Make `MarkdownModelType` have a slug and name by default, which are calculated from the filename, and should not be in the frontmatter. If they are not set by the user during creation through the db it should generate a random ID.

✅ Fix `upsert`. It should not create files in `[operation]/db` with empty arrays! It should also delete them if it notices the array is empty when updating.

✅ Fix that set is only setting items in files that already existed. Should also set new items in new files. This also broke update (files were removed if filename needed to be changed)

✅ Ensure the location for nested folders in db models doesn't change when editing, and the location is found back with `CategoryStack` on the markdown-model type.

- ✅ edit model types to add `categoryStack` to different models
- ✅ `get` should add `categoryStack` for `jsonSingle` and `markdown`
- ✅ `set` and `upsert` should use `categoryStack` to determine the location for `jsonSingle` and `markdown`
- ✅ Test all of the above!


## Clear

With clear, you can clear the whole model. All items in the model will be removed.


### Example

```ts
const clearResult = await db.clear("Todos");
```


## Get

In order to get your data from a model, you should use the `db.get` function.


### Example

```ts
import { db } from "database";
import { Todo } from "todo-type";

export const getTodos = async (): Promise<{
  success: boolean;
  todos?: Todo;
}> => {
  const todos = await db.get("Todo");

  return {
    success: true,
    todos,
  };
};
```

This will get all your todos. But you might wonder, how do we add relational data? And how do we find a single item? Or how do we filter? Let's see...


#### Finding and filtering

Finding and filtering can simply be done after getting an array of all your items in your model. You can simply use regular `Array.filter` and `Array.find` for that.

For example:

```ts
const todos = await db.get("Todo");
const onlyDone = todos.filter((todo) => todo.status === "done");
```


#### Including relational data

Let's say your todo belongs to a user, like this:

```ts
import { DefaultModelType, SlugModelType } from "model-types";

export interface User extends DefaultModelType {
  name: string;
  age: number;
}

export interface Todo extends SlugModelType {
  userId?: string;
  user?: User;
  status: "todo" | "doing" | "done";
  markdown: string;
}
```

If we then want to find the user that the todo belongs to, and include it in the result, we can do something like this:

```ts
const todos = await db.get("Todo", { include: { referenceKey: "userId" } });

// `todos` will now include the user on the `user` property in every item.
```


#### More

There are much more options for getting, but for that, simply intorspect the function itself with IntelliSense (or read the code).


## Getting started

To get started with `fs-orm`, please have a look at the `db` package. This package shows you how to initiate a database object.

It is using a package `sdk-db` which you can create yourself (or generate, based on the models found in your monorepo)

From there, it's very easy to use fs-orm. For example, if you want to get all the `Todo` values, simply use something like this

```ts
const todos = await db.get("Todo");
```

Check the `createDb` function to see the exact type definition of all the function on the db-object. Otherwise you can just use Intellisense for it, you can easily understand everything that way.


## Limitations

Typebase has some limitations, compared to other databases like MySQL or PostGres.


### performance and scalability

The performance and scalability is not great. It is not the main usecase of typebase to have giant databases with models with millions of rows.


### concurrency

Currently, Typebase doesn't support concurrency, but it is easy to add so we'll do that in the future.


## Model types and storage methods

Typebase makes it possible to create different model-types which can have different storage methods.

More information about the different model-types can be found here:

- `DefaultModelType` (uses `DbStorageMethod` `jsonMultiple` by default)
- `SlugModelType` (uses `DbStorageMethod` `jsonMultiple` by default)
- `KeyValueMarkdownModelType` (uses `DbStorageMethod` `keyValueMarkdown` by default)
- `MarkdownModelType` (uses `DbStorageMethod` `markdown` by default)
- `CsvModelType` (uses `DbStorageMethod` `csv` by default)
- `TsIndexModelType` (uses `DbStorageMethod` `jsonMultiple` by default)

More information about the different storage methods can be found here: `DbStorageMethod`.

Every model type has a default `DbStorageMethod` but can be overwritten using the `modelQueryConfig`.


## Remove

Remove helps you to remove items from a model. The difference from `clear` is that you can specify a filter on what to remove. This is the second argument of the `remove` function.


### Example

```ts
// this will remove all the todos that are "done"
const removeResult = await db.remove("Todo", (todo) => todo.status === "done");
```


## Set

Set helps you to completely remove all items and replace them with a new set of values.


### Example

```ts
import { Creation } from "model-types";
import { Todo } from "todo-type";

const replaceAllTodos = async () => {
  const data: Creation<Todo>[] = [
    {
      name: "typebase",
      status: "doing",
      markdown: "Need to learn about typebase",
    },
    {
      name: "typerepo", //Please note, `name` is required in `SlugModelType`.
      status: "todo",
      markdown: "Need to learn about typerepo",
    },
  ];
  const setResults = await db.set("Todo", data);

  const todos = await db.get("Todo");
  // this will only contain the todos above, but they will be augmented with the default model data like `id`, `createdAt`, etc.
};
```

Please note that you don't need to specify the full `Todo` here, because when creation some items, the `set` function will augment your items with other items like `id` and `createdAt`. That's why we need the `Creation` interface, and wrap it around your type.


## Update

`db.update` lets you update items in your database, given a filter and map.


### Example

```ts
const filterFunction = (todo: Todo): boolean => todo.status === "doing";

const mapFn = (todo: Todo): Todo => {
  const newTodo = { ...todo, status: "done" };
  return newTodo;
};

const updatedResult = await db.get("Todo", filterFunction, mapFunction);
```


## Upsert

Upsert is a special one.

It can either insert or update items in your database.


### Example

```ts
import { Creation } from "model-types";
import { Todo } from "todo-type";

const upsertTodos = async () => {
  // the upsert function can take a single item or multiple items (in an array)
  const items: Creation<Todo> | Creation<Todo>[] = [
    { name: "typenet", status: "todo", markdown: "Learn about typenet" },
    // because we don't have an item with this name in our database yet, it will be inserted
    { name: "typerepo", status: "done", markdown: "Learn about typerepo" },
    // because we already have an item with this name in our database, it will be updated
  ];

  const upsertResult = await db.upsert("Todo", items);
};
```


# Functions

## addDefaultValues

Adds timestamps, id, and a slug IF these things are not already present

NB: slugs will be slugified here!
NB: if there is a name present, slug will be added here!

NB: for kvmd storage, id will be set to a kebab-case of the name

NB: does not add the ModelLocation parameters




### Parameters (2)

#### Parameter 2: isKvmdStorage (optional): boolean

## alterAny

low level function that alters data from any storage method at a certain location

comprises all dbStorageMethods




## alterCsv

Alters a csv




## alterJsonMultiple

Alters a json single file




## alterJsonSingle

Alters a json single file




## alterKeyValueMarkdown

## alterMarkdown

Alters a markdown file




## augmentItemWithReferencedDataRecursively

### Parameters (3)

#### Parameter 1: item: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



#### Parameter 2: includeArray: array

## calculateOperationsObject

Needed in case of manual project root, otherwise use SDK!

Returns project relative operation base paths




### Parameters (1)

#### Parameter 1: manualProjectRoot: string

## createDb

Create your database by passing your models as a generic and some optional configuration


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| getDbFileLocationPath  | object |  |
| get  | object |  |
| getByFile  | object |  |
| set  | object |  |
| remove  | object |  |
| update  | object |  |
| clear  | object |  |
| upsert  | object |  |



### Parameters (1)

## findParent

this location matches any category that equals the categorystack


### Returns: object

### Parameters (2)

#### Parameter 2: newCategoryStack: array

- null: string






## getAugmentedData

Gets the stored data from any file with any storage method, and augments the modelLocation onto it...

Also augments the `name`, `slug` and `categoryStackCalculated` onto this if the `dbStorageMethod` is `markdown` or `jsonSingle` and if `operationRelativePath` is not set




### Parameters (2)

#### Parameter 1: dbFileLocation: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



#### Parameter 2: dbStorageMethod: string(Enum: jsonMultiple | jsonSingle | markdown | keyValueMarkdown | csv)

## getDatabaseFiles

This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method.
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)




### Parameters (2)

#### Parameter 1: modelName: string

## getDatabaseRootFolder

Tries to get the root folder where the database folder can be found.

If an operationName is specified, this will be the operation base path
If not, this will be the project root.




### Parameters (2)

#### Parameter 1: operationName (optional): string

#### Parameter 2: manualProjectRoot (optional): string

## getDbFileLocation

Used by `groupByFile`, which is used for `set` (and thus, also `update`) and `upsert`: determines the new file location.

Applies the convention to get the db-file-location of an item

Based on the merged config:

- if `operationRelativePath` is specified, gets a filePath in the operation
- if `projectRelativePath` is specified, gets a filepath in the project
- otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)

Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.

NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...




### Parameters (4)

#### Parameter 2: operationName: null

#### Parameter 4: modelName: string

## getDbStorageMethodExtension

### Parameters (1)

#### Parameter 1: dbStorageMethod: string(Enum: jsonMultiple | jsonSingle | markdown | keyValueMarkdown | csv)

## getItemModelLocation

### Returns: object

## getLength

Safely gets the length of something




## getLocationPattern

Returns the pattern or an exact relative path that the file(s) should be stored at.

If a pattern contains a star at the place of the filename, it will search the folder recursively for all files with the extension in the pattern.

Returning relative path has no preceding slash


### Returns: string

### Parameters (3)

#### Parameter 1: dbStorageMethod: string(Enum: jsonMultiple | jsonSingle | markdown | keyValueMarkdown | csv)

#### Parameter 2: modelName: string

## getMergedConfigOperationPath

### Parameters (2)

#### Parameter 2: manualProjectRoot (optional): string

## getParentSlug

get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)

can be undefined if the item has no parent


### Returns: string

### Parameters (1)

## getRootFolders

### Parameters (1)

#### Parameter 1: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| projectRoot  | string |  |
| operationPath  | object |  |



## getWildcardDbFileLocations__OLD

If it all seems good, I can delete this. This is the old method of looking just in the folder itself, it's replaced by looking in all subfolders as well, recursively.




### Parameters (1)

#### Parameter 1: options: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| modelName  | string |  |
| operationName  | string |  |
| projectRoot  | string |  |



## getWildcardDbFileLocations

### Parameters (1)

#### Parameter 1: options: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| modelName  | string |  |
| operationName  | string |  |
| projectRoot  | string |  |



## groupByFile

Used for `set` and `upsert`. Groups creation items into an object where keys are file paths and values are items that need to be stored




## makeStoringItem

## mergeConfigs

## removeKeyValueMarkdown

Takes stored data and a slug to remove




### Parameters (2)

#### Parameter 1: storedData: array

#### Parameter 2: slug: string

## removeMultiple

Function that lets you remove items from one specific file, for any storage method




## test

## upsertItems

upsert an item into storage in any storage method




## upsertKeyValueMarkdown

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function

- otherwise inserts, at the right category, in the right place in the array

BEWARE:

- the categoryStackCalculated must be existing in the markdownfile.
- you cannot insert a header, always insert an item with `isHeaderCalculated:false`




### Parameters (2)

#### Parameter 1: storedData: array

## upsert

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the id or slug)
- otherwise inserts

NB: this function works for any storage method except for key value markdown




### Parameters (3)

#### Parameter 1: storedData: array

#### Parameter 2: storingItems: object

#### Parameter 3: onlyInsert (optional): boolean

# Interfaces

## AnyModelObject

## AnyModelType

Parameters that every model will always have.

NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.

NB: RelationTypes are also not always included for the same reason



> Parameters that every model will always have.<br /><br />NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.<br /><br />NB: RelationTypes are also not always included for the same reason

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## AnyModelObject

## AnyModelType

Parameters that every model will always have.

NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.

NB: RelationTypes are also not always included for the same reason





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |



## AugmentedAnyModelType

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.<br /><br /># Background Info<br /><br />azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.<br /><br />the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.<br /><br />the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter<br /><br />An Id with 12 characters would provide 3.22e21 combinations.<br /><br />What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.<br /><br />Why make an id short? I don't know if there's an important reason.<br /><br />All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.<br /><br />An id would look like this:<br /><br />``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```<br /><br />Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this. |



## AugmentedAnyModelType

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |



## CategoryStack

- null: string






## CategoryStack

- null: string






## CustomQueryConfig

NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.

Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.



> NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.<br /><br />Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## CustomQueryConfig

NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.

Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| operationName (optional) | string |  |



## DbFileLocation

Object used to hand over all information about the location of a db-file in a structured way



> Object used to hand over all information about the location of a db-file in a structured way

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## DbQueryResult

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



## DbStorageMethod

The following strategies are available to store the data.

- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`

- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`

- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`

- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`

- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`


### Definitions:

- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`
- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used



> The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used




## DbFileLocation

Object used to hand over all information about the location of a db-file in a structured way





Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## DbQueryResult

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



## DbStorageMethod

The following strategies are available to store the data.

- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`

- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`

- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`

- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`

- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`


### Definitions:

- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`
- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used








## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes








## IncludeConfig

All possible ways to include items from references into a get query



> All possible ways to include items from references into a get query




## IncludeDataObject

## Include

Properties: 

 | Name | Type | Description |
|---|---|---|
| referenceKey (optional) | string |  |
| items (optional) | array |  |
| include (optional) | object |  |



## IncludeConfig

All possible ways to include items from references into a get query








## IncludeDataObject

## KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug



> handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | same as slug<br /><br />used for compatibility with some general purpose functions<br /><br />NB: uniqueness is hard to enforce! |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean | Calculated value indicating whether or not the item has children |



## KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean |  |



## MergedQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| dbStorageMethod  | string | The following strategies are available to store the data.<br /><br />- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`<br /><br />- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`<br /><br />- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`<br /><br />- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`<br /><br />- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`<br /><br />## Definitions:<br /><br />- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`<br />- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used |
| manualProjectRoot  | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath (optional) | string | if specified, only this location will be used |
| operationRelativePath (optional) | string | if specified, only this location will be used (also need an `operationName`) |



## MergedQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| dbStorageMethod  | string |  |
| manualProjectRoot  | string |  |
| operationName (optional) | string |  |
| projectRelativePath (optional) | string |  |
| operationRelativePath (optional) | string |  |



## ModelLocation

Parameters that tell you about the location an instance of a model. Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.



> Parameters that tell you about the location an instance of a model. Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## ModelLocation

Parameters that tell you about the location an instance of a model. Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## QueryConfig

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



## QueryConfig

QueryConfig is set on 4 levels, which have increasing priority

- hardcoded in `fs-orm`
- when calling `createDb`, setting `defaultQueryConfig`
- when calling `createDb`, setting `modelQueryConfig`
- when running a query

Not all options are available when running a query.





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName (optional) | string |  |
| projectRelativePath (optional) | string |  |
| operationRelativePath (optional) | string |  |
| dbStorageMethod (optional) | string |  |
| manualProjectRoot (optional) | string |  |



## RootDbFolder

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string | is an operation Base path in case of operationName is not null |
| operationName  | string |  |



## RootDbFolder

Properties: 

 | Name | Type | Description |
|---|---|---|
| basePath  | string |  |
| operationName  | string |  |



## UpsertKeyValueMarkdownItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| item  | object | handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted<br /><br />all you need to specify in the kvmd is the key and the value, separated by ":"<br /><br />NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug |



## UpsertQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| removeUntouched (optional) | boolean | Special config for upsert. If you set this to true, all items in the databasefiles that were altered that you didn't specify in the items, will be removed. |
| onlyInsert (optional) | boolean | If true, the query will fail if the slug or id already exists (normally this means upsert will update that value)<br /><br />NB: not supported for keyValueMarkdown |
| manualProjectRoot (optional) | string | if specified, this will be used as the root path to find your data in<br /><br />if not specified, uses the db folder in your project root and in any operation<br /><br />NB: If you set this, the model interfaces of your current project are applied on another project! Make sure they are the same there before you run such queries. |
| operationName (optional) | string | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |



## UpsertKeyValueMarkdownItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| item  | object |  |



## UpsertQueryConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| removeUntouched (optional) | boolean |  |
| onlyInsert (optional) | boolean |  |
| manualProjectRoot (optional) | string |  |
| operationName (optional) | string |  |


# Variables

## addDefaultValues (exported const)

Adds timestamps, id, and a slug IF these things are not already present

NB: slugs will be slugified here!
NB: if there is a name present, slug will be added here!

NB: for kvmd storage, id will be set to a kebab-case of the name

NB: does not add the ModelLocation parameters


## alterAny (exported const)

low level function that alters data from any storage method at a certain location

comprises all dbStorageMethods


## alterCsv (exported const)

Alters a csv


## alterJsonMultiple (exported const)

Alters a json single file


## alterJsonSingle (exported const)

Alters a json single file


## alterKeyValueMarkdown (exported const)

## alterMarkdown (exported const)

Alters a markdown file


## augmentItemWithReferencedDataRecursively (exported const)

## calculateOperationsObject (exported const)

Needed in case of manual project root, otherwise use SDK!

Returns project relative operation base paths


## categoryStackCalculated (unexported const)

## createDb (exported const)

Create your database by passing your models as a generic and some optional configuration


## findParent (exported const)

this location matches any category that equals the categorystack


## getAugmentedData (exported const)

Gets the stored data from any file with any storage method, and augments the modelLocation onto it...

Also augments the `name`, `slug` and `categoryStackCalculated` onto this if the `dbStorageMethod` is `markdown` or `jsonSingle` and if `operationRelativePath` is not set


## getDatabaseFiles (exported const)

This function gets the files that the data can be stored, by convention, based on the model and the config

Only returns the file paths that actually exist.

CONVENTION:

When searching for data, `fs-orm` will look in:
- `db/` in your project root
- `db/` in any operation

In these folders, `fs-orm` will search for files based on your storage method.
@see DbStorageMethod for more info

Returns not only the file paths, but also where they were found (`operationName, projectRelativePath, operationRelativePath`)


## getDatabaseRootFolder (exported const)

Tries to get the root folder where the database folder can be found.

If an operationName is specified, this will be the operation base path
If not, this will be the project root.


## getDbFileLocation (exported const)

Used by `groupByFile`, which is used for `set` (and thus, also `update`) and `upsert`: determines the new file location.

Applies the convention to get the db-file-location of an item

Based on the merged config:

- if `operationRelativePath` is specified, gets a filePath in the operation
- if `projectRelativePath` is specified, gets a filepath in the project
- otherwise gets the pattern and replaces "*" with the slug (or id if slug is not available)

Besides the absolute path, the operationName, projectRelativePath and operationRelativePath are also supplied.

NB: currently, the item's `operationName`, `operationRelativePath` or `projectRelativePath` is not taken into account. It will simply look at the convention to see where it should be saved, and apply the MergedQueryConfig...


## getDbStorageMethodExtension (exported const)

## getItemModelLocation (exported const)

## getLength (exported const)

Safely gets the length of something


## getLocationPattern (exported const)

Returns the pattern or an exact relative path that the file(s) should be stored at.

If a pattern contains a star at the place of the filename, it will search the folder recursively for all files with the extension in the pattern.

Returning relative path has no preceding slash


## getMergedConfigOperationPath (exported const)

## getParentSlug (exported const)

get a parent slug without the parent_xxxSlug reference (uses the categoryStackCalculated)

can be undefined if the item has no parent


## getRootFolders (exported const)

## getWildcardDbFileLocations__OLD (exported const)

If it all seems good, I can delete this. This is the old method of looking just in the folder itself, it's replaced by looking in all subfolders as well, recursively.


## getWildcardDbFileLocations (exported const)

## groupByFile (exported const)

Used for `set` and `upsert`. Groups creation items into an object where keys are file paths and values are items that need to be stored


## makeStoringItem (exported const)

## maxConcurrency (unexported const)

## mergeConfigs (exported const)

## removeKeyValueMarkdown (exported const)

Takes stored data and a slug to remove


## removeMultiple (exported const)

Function that lets you remove items from one specific file, for any storage method


## test (unexported const)

## upsertItems (exported const)

upsert an item into storage in any storage method


## upsertKeyValueMarkdown (exported const)

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the slug). this works almost the same as the regular upsert function

- otherwise inserts, at the right category, in the right place in the array

BEWARE:

- the categoryStackCalculated must be existing in the markdownfile.
- you cannot insert a header, always insert an item with `isHeaderCalculated:false`


## upsert (exported const)

Takes stored data and an item

- updates the data and sets some rows to "item" if the item is found (through the id or slug)
- otherwise inserts

NB: this function works for any storage method except for key value markdown

