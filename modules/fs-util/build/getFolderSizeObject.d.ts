import { ChildObject } from "recursive-types";
/**
 * returns an object with all sizes of all folders and files, recursively
 */
export declare const getFolderSizeObject: {
    (absoluteFolderPath: string, minimumReportSizeMb?: number, ignoreGenerated?: boolean): Promise<ChildObject<{
        size: number;
        name: string;
    }>[]>;
    isPublic: boolean;
};
//# sourceMappingURL=getFolderSizeObject.d.ts.map