import { OperationClassification, PackageJSON } from "k-types";
export declare const getAllPackageJsonDependencies: (p: PackageJSON) => string[];
export declare const hasDependency: (packageJson: PackageJSON, dependency: string) => boolean;
/**
 * returns OperationClassification if it's an operation, or undefined if it's not
 */
export declare const getOperationClassification: (folderPath: string) => OperationClassification | undefined;
//# sourceMappingURL=getOperationClassification.d.ts.map