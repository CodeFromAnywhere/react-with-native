import { MergedQueryConfig, RootDbFolder } from "../types";
/**
 * Gets all root folders where db folders can be located inside of
 *
 * NB: Before november '22, this function is quite slow if it needs to find all operation folders becuase this takes at least 60ms.
 */
export declare const getRootFolders: (config: {
    manualProjectRoot?: string | undefined;
    projectRoot: string;
    mergedConfig: MergedQueryConfig;
    operationPath: string | false;
}) => Promise<RootDbFolder[]>;
//# sourceMappingURL=getRootFolders.d.ts.map