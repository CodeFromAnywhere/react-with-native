import { TsConfig, TsBuildError, PackageJson } from "code-types";
import { Creation } from "model-types";
/**
 * uses official typescript compiler to check all given files for compilation errors
 */
export declare function getTypescriptErrorsFromFiles({ filePaths, debug, }: {
    basePath: string;
    filePaths: string[];
    compilerOptions: TsConfig["compilerOptions"];
    packageJson: PackageJson;
    debug?: boolean;
}): Creation<TsBuildError>[];
//# sourceMappingURL=getTypescriptErrorsFromFiles.d.ts.map