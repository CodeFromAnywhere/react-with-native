import { Dataset, TsInterface } from "code-types";
export declare const getDbModelMetadata: (modelName: string | undefined) => Promise<{
    tsInterface?: TsInterface | undefined;
    datasets?: Dataset[] | undefined;
    projectRelativeStorageFilePath?: string | undefined;
}>;
//# sourceMappingURL=getDbModelMetadata.d.ts.map