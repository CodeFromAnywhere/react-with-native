import { TsComment } from "./TsComment";
import { TsInterface } from "./TsInterface";
import { TypeInfo } from "./TypeInfo";
import { TsFunction } from "./TsFunction";
import { IndexId } from "./IndexId";
/**
 * TODO:
 *
 * Any interface/type
 * - should be able to have default values
 * - should be able to have validation functions
 * - should be able to have casting functions
 * - some parameters should be hidden upon creation
 * - some should be hidden on updating
 * - some should even be hidden when listing
 *
 * This is mainly for the admin panel, but it could be integrated on the db level as well.
 * The problem is that this behavior may be app-specific, so this becomes rather opinionated if we do it on the OS level
 * Come up with an exact requirement and implementation plan.
 *
 * There are many more functionalities possible here to speed up development, not only for admin use-case.
 */
/**
 * ---
 * isDbModel: false
 * ---
 *
 * Typescript file metadata (all indexes from typescript files, together)
 */
export declare type TypescriptIndex = {
    tsBuildErrors: TsBuildError[];
    tsLintWarnings: TsLintWarning[];
    tsFunctions: TsFunction[];
    tsVariables: TsVariable[];
    tsInterfaces: TsInterface[];
    tsComments: TsComment[];
    tsImports: TsImport[];
    tsExports: TsExport[];
};
export declare type IndexModels = {
    TsBuildError: TsBuildError;
    TsLintWarning: TsLintWarning;
    TsFunction: TsFunction;
    TsVariable: TsVariable;
    TsInterface: TsInterface;
    TsComment: TsComment;
    TsImport: TsImport;
    TsExport: TsExport;
};
/**
 * All type interfaces that are used to index stuff, which are added to the database
 *
 * NB: Maybe we could simply get this from the database? Haha, not sure if that's handy, because this is used to generate the database xD
 */
export declare const indexDbModels: readonly ["TsBuildError", "TsLintWarning", "TsExport", "TsImport", "TsComment", "TsInterface", "TsFunction", "TsVariable", "File"];
export declare const indexDbModelFolders: string[];
export interface TsBuildError extends IndexId {
    line?: number;
    character?: number;
    message: string;
}
export interface TsLintWarning extends IndexId {
    line: number;
    character: number;
    message: string;
}
/**
 */
export interface TsExport extends IndexId {
    /**
     * surrounding comments and comments inside of the import
     */
    comments: TsComment[];
    type: "value" | "type" | undefined;
    /**
     * used for duplicate export names
     */
    alias?: string;
    /**
     * only for type exports. tells you whether or not the type has one or more generic parameter(s)
     */
    hasGeneric?: boolean;
}
/**
 * node: node core packages like fs and path
 *
 * react: react standard packages like react, react-native, expo, react-dom, etc.
 *
 * package: packages from npm that are not classified as operations
 *
 * operation: operations from our monorepo
 *
 * internal: imports from other places in the same operation
 *
 * NB: don't confuse this with OperationClassification
 */
export declare type ImportClassification = "node" | "react" | "package" | "operation" | "internal";
/**
 */
export interface TsImport extends IndexId {
    /**
     * surrounding comments and comments inside of the import
     */
    comments: TsComment[];
    module: string;
    /**
     * TODO: not sure, but I believe alias should be defined at the import, not at the export, right?
     */
    alias?: string;
    classification: ImportClassification;
    /**
     * sometimes the import statement module referenced cannot be found, in that case it cannot be known whether the import should contain a type or value, so it will be undefined.
     */
    type: "value" | "type" | undefined;
    /**
     * only for type exports. tells you whether or not the type has one or more generic parameter(s)
     */
    hasGeneric?: boolean;
    isAbsolute: boolean;
    isModuleResolved: boolean;
    isModuleFromMonorepo: boolean;
}
/**
 */
export interface TsVariable extends IndexId {
    value: string;
    classification: "const" | "var" | "let";
    type: TypeInfo;
    /**
     * surrounding comments and comments inside of the variable
     */
    comments: TsComment[];
}
//# sourceMappingURL=TypescriptIndex.d.ts.map