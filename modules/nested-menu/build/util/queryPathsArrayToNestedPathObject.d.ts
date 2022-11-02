export declare type NestedObject<T = null> = {
    [key: string]: NestedObject | T;
};
/**
 A different way to represent a path array in a nested object of folders
 
 {
  "folderName": {
    "file1": null,
    "file2": null
  },
  "folderName2": {
    "file1": null,
    "file2": null
  }
 }
 
 */
export interface NestedPathObject extends NestedObject<null> {
}
export declare const reduceQueryPathsRecursively: (queryPaths: string[], initialValue: NestedPathObject) => NestedPathObject;
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