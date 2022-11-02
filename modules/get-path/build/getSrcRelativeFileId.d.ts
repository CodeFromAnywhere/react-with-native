/**
 * returns a file id (path without extension) relative to the src folder of an operation
 *
 * e.g. "general" for src/general.ts
 *
 * NB: assumes all src is in the src folder
 *
 * NB: removes "/" in the beginning, if found
 */
export declare const getSrcRelativeFileId: (operationRelativePath: string) => string;
//# sourceMappingURL=getSrcRelativeFileId.d.ts.map