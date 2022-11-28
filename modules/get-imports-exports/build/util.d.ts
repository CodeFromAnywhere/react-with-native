#!/usr/bin/env node
import { SourceFile, Symbol, TypeAliasDeclaration, InterfaceDeclaration, ImportSpecifier } from "ts-morph";
import { TsExport, TsImport } from "code-types";
import { Creation } from "model-types";
export declare type TypeSpecifier = {
    type: "type" | "value";
    /**
     * In case it's a type, this tells you whether or not the import type has a generic
     */
    hasGeneric?: boolean;
};
export declare type ImportsAndExports = {
    imports: Creation<TsImport>[];
    exports: Creation<TsExport>[];
};
export declare type NamedImport = {
    type: "type" | "value" | undefined;
    name: string;
    slug: string;
    hasGeneric?: boolean;
};
export declare const getSymbolTypeDeclarations: (symbol: Symbol) => (TypeAliasDeclaration | InterfaceDeclaration)[];
export declare const getExportSpecifierNames: (symbol: Symbol) => string[];
/**
 * get the ImportSpecifier(s) of with a certain name.
 */
export declare const getImportSpecifiersWithNames: (sourceFile: SourceFile, names: string[]) => ImportSpecifier[];
/**
 * gets type of a symbol and if the type has a generic, without recursing.
 */
export declare const getDefaultSymbolType: (symbol: Symbol, debug?: boolean) => TypeSpecifier;
/**
 * gets type of exportSymbols. recurses if it's an exportsymbol
 *
 * TODO: NB: exports that come from a destructured initialiser aren't found! fix it
 */
export declare const getExportSymbolTypeRecursive: (symbol: Symbol, sourceFile: SourceFile, debug?: boolean) => TypeSpecifier | undefined;
/**
 * Recursive function that gets the type specifier from an import specifier
 */
export declare const getTypeFromImportSpecifierRecursive: (importSpecifier: ImportSpecifier, debug?: boolean, fileStack?: string[]) => TypeSpecifier | undefined;
export declare const isAbsoluteImport: (moduleString: string | undefined) => boolean;
//# sourceMappingURL=util.d.ts.map