import { GetConfig } from "./types";
/**
 * this function gets the files that the data can be stored, by convention, based on the model and the config
 */
export declare const getDatabaseFiles: (modelName: string, config: Partial<GetConfig>, getProjectRelativePaths?: boolean) => Promise<string[]>;
//# sourceMappingURL=getDatabaseFiles.d.ts.map