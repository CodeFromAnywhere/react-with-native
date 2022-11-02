/**
 Insert an array or item inside of an array before a certain index
 
 Example:

 ```ts

 const testArray = [1, 2, 3, 4, 5];
 const result = insertAt(testArray, [99, 100], 2);
 console.log({ testArray, result });

 ```
 */
export declare const insertAt: <T>(array: T[], items: T | T[], beforeIndex: number) => T[];
/**
 removes an index from an array

 example:
 
 ```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```
 */
export declare const removeIndexFromArray: <T>(array: T[], index: number) => T[];
/**
 * finds the last index of an array where a certain filter holds true
 */
export declare const findLastIndex: <T>(array: T[], findFn: (item: T) => boolean) => number | undefined;
//# sourceMappingURL=array-modifications.d.ts.map