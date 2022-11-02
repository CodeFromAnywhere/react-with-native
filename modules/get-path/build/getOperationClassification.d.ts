import { OperationClassification, PackageJson } from "code-types";
export declare const getAllPackageJsonDependencies: (p: PackageJson) => string[];
export declare const hasDependency: (packageJson: PackageJson, dependency: string) => boolean;
/**
 * Returns OperationClassification if it's an operation, or undefined if it's not
 *
 * NB: don't confuse this with ProjectType or ImportClassification
 */
export declare const getOperationClassification: (folderPath: string) => OperationClassification | undefined;
//# sourceMappingURL=getOperationClassification.d.ts.map