import { AnyModelType } from "model-types";
export declare enum ImportsNotUsedAsValues {
    Remove = 0,
    Preserve = 1,
    Error = 2
}
export declare enum JsxEmit {
    None = 0,
    Preserve = 1,
    React = 2,
    ReactNative = 3,
    ReactJSX = 4,
    ReactJSXDev = 5
}
export declare enum ModuleKind {
    None = 0,
    CommonJS = 1,
    AMD = 2,
    UMD = 3,
    System = 4,
    ES2015 = 5,
    ES2020 = 6,
    ES2022 = 7,
    ESNext = 99,
    Node16 = 100,
    NodeNext = 199
}
export declare enum ModuleResolutionKind {
    Classic = 1,
    NodeJs = 2,
    Node16 = 3,
    NodeNext = 99
}
export declare enum ModuleDetectionKind {
    /**
     * Files with imports, exports and/or import.meta are considered modules
     */
    Legacy = 1,
    /**
     * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
     */
    Auto = 2,
    /**
     * Consider all non-declaration files modules, regardless of present syntax
     */
    Force = 3
}
export declare enum NewLineKind {
    CarriageReturnLineFeed = 0,
    LineFeed = 1
}
/**
 * Type of objects whose values are all of the same type.
 * The `in` and `for-in` operators can *not* be safely used,
 * since `Object.prototype` may be modified by outside code.
 */
interface MapLike<T> {
    [index: string]: T;
}
export declare enum ScriptTarget {
    ES3 = 0,
    ES5 = 1,
    ES2015 = 2,
    ES2016 = 3,
    ES2017 = 4,
    ES2018 = 5,
    ES2019 = 6,
    ES2020 = 7,
    ES2021 = 8,
    ES2022 = 9,
    ESNext = 99,
    JSON = 100,
    Latest = 99
}
export interface CompilerOptions {
    allowJs?: boolean;
    allowSyntheticDefaultImports?: boolean;
    allowUmdGlobalAccess?: boolean;
    allowUnreachableCode?: boolean;
    allowUnusedLabels?: boolean;
    alwaysStrict?: boolean;
    baseUrl?: string;
    charset?: string;
    checkJs?: boolean;
    declaration?: boolean;
    declarationMap?: boolean;
    emitDeclarationOnly?: boolean;
    declarationDir?: string;
    disableSizeLimit?: boolean;
    disableSourceOfProjectReferenceRedirect?: boolean;
    disableSolutionSearching?: boolean;
    disableReferencedProjectLoad?: boolean;
    downlevelIteration?: boolean;
    emitBOM?: boolean;
    emitDecoratorMetadata?: boolean;
    exactOptionalPropertyTypes?: boolean;
    experimentalDecorators?: boolean;
    forceConsistentCasingInFileNames?: boolean;
    importHelpers?: boolean;
    importsNotUsedAsValues?: ImportsNotUsedAsValues;
    inlineSourceMap?: boolean;
    inlineSources?: boolean;
    isolatedModules?: boolean;
    jsx?: JsxEmit;
    keyofStringsOnly?: boolean;
    lib?: string[];
    locale?: string;
    mapRoot?: string;
    maxNodeModuleJsDepth?: number;
    module?: ModuleKind;
    moduleResolution?: ModuleResolutionKind;
    moduleSuffixes?: string[];
    moduleDetection?: ModuleDetectionKind;
    newLine?: NewLineKind;
    noEmit?: boolean;
    noEmitHelpers?: boolean;
    noEmitOnError?: boolean;
    noErrorTruncation?: boolean;
    noFallthroughCasesInSwitch?: boolean;
    noImplicitAny?: boolean;
    noImplicitReturns?: boolean;
    noImplicitThis?: boolean;
    noStrictGenericChecks?: boolean;
    noUnusedLocals?: boolean;
    noUnusedParameters?: boolean;
    noImplicitUseStrict?: boolean;
    noPropertyAccessFromIndexSignature?: boolean;
    assumeChangesOnlyAffectDirectDependencies?: boolean;
    noLib?: boolean;
    noResolve?: boolean;
    noUncheckedIndexedAccess?: boolean;
    out?: string;
    outDir?: string;
    outFile?: string;
    paths?: MapLike<string[]>;
    preserveConstEnums?: boolean;
    noImplicitOverride?: boolean;
    preserveSymlinks?: boolean;
    preserveValueImports?: boolean;
    project?: string;
    reactNamespace?: string;
    jsxFactory?: string;
    jsxFragmentFactory?: string;
    jsxImportSource?: string;
    composite?: boolean;
    incremental?: boolean;
    tsBuildInfoFile?: string;
    removeComments?: boolean;
    rootDir?: string;
    rootDirs?: string[];
    skipLibCheck?: boolean;
    skipDefaultLibCheck?: boolean;
    sourceMap?: boolean;
    sourceRoot?: string;
    strict?: boolean;
    strictFunctionTypes?: boolean;
    strictBindCallApply?: boolean;
    strictNullChecks?: boolean;
    strictPropertyInitialization?: boolean;
    stripInternal?: boolean;
    suppressExcessPropertyErrors?: boolean;
    suppressImplicitAnyIndexErrors?: boolean;
    target?: ScriptTarget;
    traceResolution?: boolean;
    useUnknownInCatchVariables?: boolean;
    resolveJsonModule?: boolean;
    types?: string[];
    /** Paths used to compute primary types search locations */
    typeRoots?: string[];
    esModuleInterop?: boolean;
    useDefineForClassFields?: boolean;
    [option: string]: any | undefined;
}
/**
 *
 * ---
 * dbStorageMethod: jsonSingle
 * operationRelativePath: tsconfig.json
 * ---
 *
 * would be nice if we have a type interface for this, just like package.json
 * for now just type the stuff we need
 */
export interface TsConfig extends AnyModelType {
    include?: string[];
    exclude?: string[];
    compilerOptions: CompilerOptions;
}
export {};
//# sourceMappingURL=TsConfig.d.ts.map