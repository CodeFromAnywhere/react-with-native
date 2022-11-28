import { NestedPartial, O } from "./NestedPartial";
export declare type IsOptional<T> = T extends undefined ? true : false;
/**

Merges an object into an object, ensuring typesafety. The second object needs to be a recursive subset of the first.

LIMITATION: When you set a value to undefined, ensure that it is allowed by the original object, we are not checking for this!

TODO: is it possible to remove this type unsafety? It would be nice to only be able to set it to undefined if that is allowed by T. Not sure if it's possible to check the difference bewteen a key not being present and a key being present and the value being undefined... Look it up!

Example:


```ts

  const testObject: {
    a: string;
    b: number;
    c: { x: string; y: number; z: { a: string; b: number; c: { x: "wow" } } };
  } = {
    a: "lol",
    b: 8,
    c: { x: "lol", y: 88, z: { a: "wow", b: 888, c: { x: "wow" } } },
  };

  const result = mergeNestedObject(testObject, {
    c: { z: { c: { x: undefined }, b: 999 } },
  });

  console.dir({ testObject, result }, { depth: 10 });

  // result will be: { a: 'lol', b: 8, c: { x: 'lol', y: 88, z: { a: 'wow', b: 999, c: { x: undefined } } }
  }

  ```

  It's great, because you can't make any type mistakes, and your code becomes much shorter for altering an object

 */
export declare const mergeNestedObject: <T extends O>(object: T, otherObject: NestedPartial<T> | undefined) => T;
//# sourceMappingURL=mergeNestedObject.d.ts.map