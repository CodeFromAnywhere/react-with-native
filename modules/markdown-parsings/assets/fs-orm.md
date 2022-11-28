# Fs orm

fs-orm (node operation)

ORM that lets you create a database with models that are stored on the file system in multiple formats that are easy to understand and well structured.




## Docs

- [1 making a model](#1-making-a-model)
- [README](#readme)
- [Clear](#clear)
- [Get](#get)
- [Getting started](#getting-started)
- [Limitations](#limitations)
- [Model types and storage methods](#model-types-and-storage-methods)
- [Remove](#remove)
- [Set](#set)
- [Update](#update)
- [Upsert](#upsert)



# Docs

## Making a model

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



## 🔹 Include

Properties: 

 | Name | Type | Description |
|---|---|---|
| referenceKey (optional) | string |  |
| items (optional) | array |  |
| include (optional) | object |  |



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
| operationName (optional) | string |  |
| projectRelativePath (optional) | string |  |
| operationRelativePath (optional) | string |  |



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
| operationName (optional) | string |  |
| projectRelativePath (optional) | string |  |
| operationRelativePath (optional) | string |  |
| dbStorageMethod (optional) | string |  |
| manualProjectRoot (optional) | string |  |



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

