In order to add a new model to your typebase, you need to add it to your `sdk-db`.

`sdk-db` collects all your models. In turn, the `database` operation will collect all models from `sdk-db` to create your database access functions.

In order to create a new model, all you need to do, is create a new type interface inside of a js-only operation that is exported, and extends one of the model-types that are defined in `model-types`.

Please note, that your operation must not contain any node.js code, because then you can't use this type interface on the frontend anymore.

# Example

```ts
import { SlugModelType } from "model-types";

export interface Todo extends SlugModelType {
  status: "todo" | "doing" | "done";
  markdown: string;
}
```

The above model extends the `SlugModelType`, which means the items of this model will also contain a `slug` and a `name`, on top of the `DefaultModelType`s and the properties speficied above.

> slug: A slug is a simplified version of the `name`, which removes complex characters and replaces every space with a dash. Besides this, upper-case characters become lower-case. For more info, see the `slugify` function.

# Adding the new model to your database functions

Before the model can be accessed, you first need to update your database functions. This can be done by updating your `sdk-db`. You can either do this manually yourself, or you can use the `generate-sdk-operations` operation of `typerepo`.

To regenerate the db, please run `generateDbSdk` or `generateSdkOperations`.

To do it manually, simply import your model into `sdk-db.ts`, add it to `DbModels`, `dbModelKeys` and `dbModelConfig`.

After you rebuilt `sdk-db`, please `Restart TS Server` in your VSCode and after a few seconds you can start using your new database model.

> Restart TS Server: Restart ts server is a command in VSCode that will restart your Typescript server. This will reload all typescript definitions and ensure that you have the newest version of all types and interfaces across your monorepo.
