Upsert is a special one.

It can either insert or update items in your database.

# Example

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
