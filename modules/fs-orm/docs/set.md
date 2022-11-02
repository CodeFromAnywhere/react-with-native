Set helps you to completely remove all items and replace them with a new set of values.

# Example

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
