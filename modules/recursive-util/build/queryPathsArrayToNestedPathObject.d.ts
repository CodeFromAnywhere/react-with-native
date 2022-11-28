import { NestedPathObject } from "recursive-types";
/**
 Handy function to transform an array of `querypaths` into a nested menu, assuming you want to create a new sub-menu for every path

 May also work for relative filePaths
 
 Input:

 ["hello/world","hello/moon","hello/sun"]

 Output:

 {
  "hello":{
    "moon":null,
    "world":null,
    "sun":null
  }
 }

 */
export declare const queryPathsArrayToNestedPathObject: (queryPaths: string[]) => NestedPathObject;
//# sourceMappingURL=queryPathsArrayToNestedPathObject.d.ts.map