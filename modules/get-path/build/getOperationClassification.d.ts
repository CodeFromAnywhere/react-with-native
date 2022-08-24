import { OperationClassification, PackageJSON } from "code-types";
export declare const getAllPackageJsonDependencies: (p: PackageJSON) => string[];
export declare const hasDependency: (packageJson: PackageJSON, dependency: string) => boolean;
/**
 * returns OperationClassification if it's an operation, or undefined if it's not
 *
 * NB: don't confuse this with ProjectType or ImportClassification
 */
export declare const getOperationClassification: (folderPath: string) => OperationClassification | undefined;
//# sourceMappingURL=getOperationClassification.d.ts.map