import { Operation, PackageInfoObject, TsImport } from "code-types";
import { Creation } from "model-types";
/**
 * parses the absolute import name into the actual package name
 *
 * - removes internal navigation in the package (everything after the package name)
 * - assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
 * - removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`
 */
export declare const getPackageNameFromAbsoluteImport: (absoluteImportName: string) => string | undefined;
/**
 * returns true if the absolute import is built in into node
 */
export declare const isAbsoluteImportBuiltin: (absoluteImportName: string) => boolean;
/**
 * returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency
 */
export declare const isImportFromOptionalFile: (tsImport: Creation<TsImport>) => boolean;
/**
 * Calculates new packageJson dependencies object based on imports found in the whole operation.
 *
 * For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)
 *
 * Generated packages are not added to dependencies. Instead a config is added saying this operation only works within a monorepo since it has generated operation deps that are not on the npm registry
 *
 * For external modules, uses the version that was already present in dependencies, or uses "*"
 *
 * Also keeps the dependencies that were already there, nothing is removed.
 *
 *
 */
export declare const calculatePackageJsonDependencies: (dependencies: PackageInfoObject | undefined, imports: Creation<TsImport>[], operations: Operation[], operationName: string) => {
    newDependencies: PackageInfoObject;
    hasGeneratedDependenciesIndexed: boolean;
};
//# sourceMappingURL=calculatePackageJsonDependencies.d.ts.map