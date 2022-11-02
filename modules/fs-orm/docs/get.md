In order to get your data from a model, you should use the `db.get` function.

# Example

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

## Finding and filtering

Finding and filtering can simply be done after getting an array of all your items in your model. You can simply use regular `Array.filter` and `Array.find` for that.

For example:

```ts
const todos = await db.get("Todo");
const onlyDone = todos.filter((todo) => todo.status === "done");
```

## Including relational data

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

## More

There are much more options for getting, but for that, simply intorspect the function itself with IntelliSense (or read the code).
