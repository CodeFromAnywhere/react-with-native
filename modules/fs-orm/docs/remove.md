Remove helps you to remove items from a model. The difference from `clear` is that you can specify a filter on what to remove. This is the second argument of the `remove` function.

# Example

```ts
// this will remove all the todos that are "done"
const removeResult = await db.remove("Todo", (todo) => todo.status === "done");
```
