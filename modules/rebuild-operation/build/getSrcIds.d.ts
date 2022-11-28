/**
 * gets identifiers of ts and tsx files, which are the relative path to a file without the extension
 *
 * in order for them to be unique, we assume here that there's never a file with the ts extension when there's also a tsx file in the same folder with the same name. This would create duplicate ids.
 */
export declare const getSrcIds: (operationFolderPath: string) => Promise<string[]>;
//# sourceMappingURL=getSrcIds.d.ts.map