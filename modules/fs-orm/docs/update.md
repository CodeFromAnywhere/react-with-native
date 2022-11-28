`db.update` lets you update items in your database, given a filter and map.

# Example

```ts
const filterFunction = (todo: Todo): boolean => todo.status === "doing";

const mapFn = (todo: Todo): Todo => {
  const newTodo = { ...todo, status: "done" };
  return newTodo;
};

const updatedResult = await db.get("Todo", filterFunction, mapFunction);
```

# Advanced: Example with `mergeNestedObject`

`mergeNestedObject` lets you easily update deeply nested objects without having to write out too much code... It works like this:

```ts
const updatedResult = await db.get(
  "SuperDeepModel",
  () => true,
  (old) => mergeNestedObject(old, { a: { b: { c: { d: undefined, e: 1 } } } })
);
```

If you ever have todo many updates in a deeply nested model, you might find this useful!
