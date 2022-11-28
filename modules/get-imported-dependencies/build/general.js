#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImportedDependencies = exports.getPackage = exports.isAbsoluteImport = void 0;
const ts_morph_util_1 = require("ts-morph-util");
/**
 * if it doesn't start with a dot it must be an absolute import so most likely a package that needs to be installed
 */
const isAbsoluteImport = (moduleString) => !moduleString.startsWith(".");
exports.isAbsoluteImport = isAbsoluteImport;
/**
 * only the first part
 */
const getPackage = (absoluteModuleString) => absoluteModuleString.split("/")[0];
exports.getPackage = getPackage;
/**
 * DEPRECATED: should use generated index files with imports instead!
 *
 * gets all imported packages (dependencies) in a project
 * doesn't take into account the fact that someone can set up a rule for absolute imports within the package.
 * this assumes that any absolute package comes from node_modules.
 */
const getImportedDependencies = ({ operationFolderPath, }) => {
    const project = (0, ts_morph_util_1.getTsMorphProject)(operationFolderPath);
    if (!project)
        return;
    const sourceFiles = project.getSourceFiles("src/*");
    const importModuleStrings = sourceFiles.reduce((imports, sourceFile) => {
        const allImports = sourceFile.getImportDeclarations();
        const absoluteImports = allImports.map((i) => i.getModuleSpecifier().getLiteralText());
        return imports.concat(absoluteImports);
    }, []);
    const packages = importModuleStrings.filter(exports.isAbsoluteImport).map(exports.getPackage);
    return packages;
};
exports.getImportedDependencies = getImportedDependencies;
//# sourceMappingURL=general.js.map