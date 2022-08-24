/**
 * A different way to represent a path array in a nested object of folders
 */
export declare type NestedPathObject = {
    [key: string]: NestedPathObject | null;
};
export declare const reduceQueryPathsRecursively: (queryPaths: string[], initialValue: NestedPathObject) => NestedPathObject;
/**
 * Handy function to transform an array of querypaths into a nested menu, assuming you want to create a new sub-menu for every path
 */
export declare const queryPathsArrayToNestedPathObject: (queryPaths: string[]) => NestedPathObject;
//# sourceMappingURL=queryPathsArrayToNestedPathObject.d.ts.map