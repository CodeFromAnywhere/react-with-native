#!/usr/bin/env node
/**
 * if it doesn't start with a dot it must be an absolute import so most likely a package that needs to be installed
 */
export declare const isAbsoluteImport: (moduleString: string) => boolean;
/**
 * only the first part
 */
export declare const getPackage: (absoluteModuleString: string) => string;
/**
 * DEPRECATED: should use generated index files with imports instead!
 *
 * gets all imported packages (dependencies) in a project
 * doesn't take into account the fact that someone can set up a rule for absolute imports within the package.
 * this assumes that any absolute package comes from node_modules.
 */
export declare const getImportedDependencies: ({ operationFolderPath, }: {
    operationFolderPath: string;
}) => string[] | undefined;
//# sourceMappingURL=general.d.ts.map