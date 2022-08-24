export declare type CustomUrlConfig = {
    type: "string" | "number" | "boolean";
    isArray?: boolean;
    allowUndefined?: boolean;
};
/**
 * ---
 * isStory: true
 * ---

Hook to store simple data in the URL

I spent the last 4 hours on this: I think it's pretty useful. It's a hook that makes it possible to use your URL as a state store. It works with arrays and single values of strings, booleans and numbers. It's a drop in replacement of useStore or useState. The advantage is that the user can share the URL which will also share their state. Usage in a component looks like this:

```ts
const [name, setName] = useUrl("name");
```

I was looking for ways to make the api more straightforward, especially the stuff in useUrl seems a bit messy. However, I couldn't find any way to make it better. Any tips are welcome!

TODO: make it work in react-native as well, either via a wrapper around useStore or via using the react-navigation param-store

## Example usage

```ts
import {useCustomUrl}from "use-url";

export const useUrl = <T extends keyof typeof queryStore>(queryKey: T) => {

   const queryStore = {
    "type-index-type": useCustomUrl<string | undefined>("type-index-type", {
      type: "string",
    }),

    "has-comment-types": useCustomUrl<string[]>("has-comment-types", {
      type: "string",
      isArray: true,
    }),
    "interface-is-db-model": useCustomUrl<boolean>("interface-is-db-model", {
      type: "boolean",
    }),
    path: useCustomUrl<string | undefined>("path", { type: "string" }),
    name: useCustomUrl<string | undefined>("name", { type: "string" }),
    type: useCustomUrl<string | undefined>("type", { type: "string" }),
  };

  return queryStore[queryKey];
};
```

 */
export declare const useCustomUrl: <T extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: CustomUrlConfig) => [T, (newValue: T | undefined) => Promise<boolean>];
//# sourceMappingURL=useCustomUrl.d.ts.map