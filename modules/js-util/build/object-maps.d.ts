/**
 * Map an object asynchronously and return the same object with the mapped result in its values
 *
 * Example usage:
 *
 *
```ts

  const srcFileContentObject = {
    "index.ts": indexString,
    "public-local.ts": publicLocalTypescriptFileString,
    "public.ts": publicTypescriptFileString,
  };

  const srcFileWriteSuccessObject = await objectMapAsync(srcFileContentObject, async (operationRelativeTypescriptFilePath,content)=>{

    try {
      await fs.writeFile(
        path.join(operationBasePath, "src", operationRelativeTypescriptFilePath),
        content,
        "utf8"
      );

      return true;
    
    } catch {
      return false;
    }

  });

```

 */
export declare const objectMapAsync: <TObject extends {
    [key: string]: any;
}, TResultValue, TResultObject extends { [key in keyof TObject]: TResultValue; }>(object: TObject, mapFn: (key: Extract<keyof TObject, string>, value: TObject[keyof TObject]) => Promise<TResultValue>) => Promise<TResultObject>;
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * Example usage:
 *
 * ```ts
 *
const result = objectMapSync({ hello: "world", isTrue: true }, (key,value) => {
  return `${value}123`;
});
```
 */
export declare const objectMapSync: <TObject extends {
    [key: string]: any;
}, TMapResult, TResultObject extends { [key in keyof TObject]: TMapResult; }>(object: TObject, mapFn: (key: keyof TObject, value: TObject[keyof TObject]) => TMapResult) => TResultObject;
/**
 * not sure if this is the best way, but it does save some lines of code!
 *
 * maps over an object's values with a map function
 *
 * DEPRECATED in favour of objectMapSync and objectMapAsync
 */
export declare const objectValuesMap: <T extends {
    [key: string]: T[string];
}, U extends unknown>(object: T, mapFn: (key: string, value: T[string]) => U) => {
    [key: string]: U;
};
/**
 * maps over all values in an object and replaces them using a mapfn
 *
 * sync
 */
export declare const mapValuesSync: <T, U>(object: {
    [key: string]: T;
}, mapFn: (value: T) => U) => {
    [x: string]: U;
};
/**
 * maps over all keys in an object and replaces them using a mapfn
 */
export declare const mapKeys: (object: {
    [key: string]: any;
}, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
    [x: string]: any;
}>;
//# sourceMappingURL=object-maps.d.ts.map