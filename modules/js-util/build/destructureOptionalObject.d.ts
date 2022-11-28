/**
Easy way to destructure your object even if it may be `undefined` or `null`.

Have you ever had a function with an optional configuration parameter, but you want to access all its properties? It's a hassle. This function lets you turn `doSomething` into `doSomethingBetter`. Check the code.

```ts


 const doSomething = (config?: { a: string; b: boolean; c: number }) => {
  const a = config?.a;
  const b = config?.b;
  const c = config?.c;

  return "something" + a + b + c;
};

const doSomethingBetter = (config?: { a: string; b: boolean; c: number }) => {
  const { a, b, c } = destructureOptionalObject(config);
  return "something" + a + b + c;
};

```

<!-- It would be great if I could also make examples that not only refer to input/output combos but maybe another function that showcases it's usage... -->

 */
export declare const destructureOptionalObject: <T extends {
    [key: string]: any;
}>(object: T | null | undefined) => Partial<T>;
//# sourceMappingURL=destructureOptionalObject.d.ts.map