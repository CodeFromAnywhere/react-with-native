import { makeArray } from "js-util";
import { useRouter } from "react-with-native-router";
import { parsePrimitiveJson } from "string-to-json";
import { getQueryPart } from "rest-util";

export type CustomUrlStoreConfig = {
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
import {useCustomUrlStore}from "use-url-store";

export const useUrl = <T extends keyof typeof queryStore>(queryKey: T) => {

   const queryStore = {
    "type-index-type": useCustomUrlStore<string | undefined>("type-index-type", {
      type: "string",
    }),

    "has-comment-types": useCustomUrlStore<string[]>("has-comment-types", {
      type: "string",
      isArray: true,
    }),
    "interface-is-db-model": useCustomUrlStore<boolean>("interface-is-db-model", {
      type: "boolean",
    }),
    path: useCustomUrlStore<string | undefined>("path", { type: "string" }),
    name: useCustomUrlStore<string | undefined>("name", { type: "string" }),
    type: useCustomUrlStore<string | undefined>("type", { type: "string" }),
  };

  return queryStore[queryKey];
};
```

 */
export const useCustomUrlStore = <
  T extends
    | string
    | number
    | boolean
    | string[]
    | boolean[]
    | number[]
    | undefined
>(
  queryKey: string,
  config: CustomUrlStoreConfig
): [T, (newValue: T | undefined) => Promise<boolean>] => {
  const router = useRouter();
  const queryValue = makeArray(router.query[queryKey]);
  const parsed = queryValue.map((v) => parsePrimitiveJson(v, config.type));

  const defaultValue =
    config.type === "boolean"
      ? false
      : config.type === "number"
      ? 0
      : config.type === "string"
      ? ""
      : undefined;

  const value = (
    queryValue.length === 0
      ? config.isArray
        ? []
        : undefined
      : config.isArray
      ? parsed
      : parsed[0]
      ? parsed[0]
      : config.allowUndefined
      ? undefined
      : defaultValue
  ) as T;

  const setter = async (newValue: T | undefined) => {
    const stringified =
      newValue === undefined
        ? undefined
        : Array.isArray(newValue)
        ? newValue.map((v) => String(v))
        : [String(newValue)];
    const queryPart =
      stringified === undefined ? "" : getQueryPart(stringified, queryKey);

    const previousQueryFiltered = { ...router.query };
    delete previousQueryFiltered[queryKey];

    const keysNow = Object.keys(router.query);
    const allKeys = keysNow.includes(queryKey)
      ? keysNow
      : keysNow.concat(queryKey);

    const newQueryString = allKeys.reduce((queryString, key) => {
      const prefix = queryString === "" ? "?" : "&";

      if (key === queryKey) {
        return queryString.concat(prefix + queryPart);
      }

      if (router.query[key]) {
        const queryPart = getQueryPart(makeArray(router.query[key]), key);
        return queryString.concat(prefix + queryPart);
      }

      return queryString;
    }, "");

    const pushed = await router.push(
      `${router.pathname}${newQueryString}`,
      undefined,
      {
        shallow: true,
      }
    );
    return pushed;
  };

  return [value, setter];
};
