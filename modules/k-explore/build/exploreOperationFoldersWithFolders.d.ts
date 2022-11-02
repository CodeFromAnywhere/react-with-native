import { path } from "fs-util";
import { BaseConfig } from "./explore";
/**
 find all active operations (folders having `package.json` but also `tsconfig.json`)

 also returns folders that those operations were found in
 */
export declare const exploreOperationFoldersWithFolders: (config: BaseConfig) => Promise<{
    path: string;
    isOperation: boolean;
}[]>;
//# sourceMappingURL=exploreOperationFoldersWithFolders.d.ts.map