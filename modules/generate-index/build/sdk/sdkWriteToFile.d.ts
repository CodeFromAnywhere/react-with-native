import { TsExport } from "code-types";
import { GenerateSdkConfig } from "../types";
export declare const getSdkOutputPath: (config?: GenerateSdkConfig) => Promise<string | undefined>;
/**
 * don't add the exports from the sdk and packages dependent on sdk, because that would create circular dependencies
 *
 * also, sdk-ui seems to give some strange warning (SyntaxError: Cannot use import statement outside a module)... maybe because it points directly to the typescript instead of the build? for now we can hardcode remove it, but it's best to check the package.json: does main lead to src or build? ts or js? */
export declare const exportHasNoSdkDependants: (x: TsExport, sdkDependants: string[]) => boolean;
/**
 * 1) don't do default exports, because they are discouraged and should also be named
 * 2) don't do sdk exports because they are a special type that is generated here
 */
export declare const noSpecialExports: (x: TsExport) => boolean;
/**
 * es-6 ui cannot be in the sdk because it leads directly to typescript files, untranspiled, unbuilt. We can't have that.
 */
export declare const onlyNodeAndJsOperations: (x: TsExport, operationClassification: string) => Promise<boolean>;
/**
 * generates sdk for all operations
 *
 * TODO: this should be ran every time a file is saved, but it should be fast enough for that..
 *
 * TODO: BUG: sdk-endpoints zat in sdk weer en ook de ding dependent daarop... hoezo?
 *
remove react stuff

Make this function in a way that it doesn't block anything. It could remove the old sdks after the new ones are created (in different folder name). This way the sdk generation script can run automatically in the background, so you don't need to think about it. Ensure that it doesn't have duplicate names though when installing! `package.json` should be template until finish

Also think about how the performance of this can be improved. There are probably many ways.
 */
export declare const sdkWriteToFile: (config?: GenerateSdkConfig) => Promise<void>;
//# sourceMappingURL=sdkWriteToFile.d.ts.map