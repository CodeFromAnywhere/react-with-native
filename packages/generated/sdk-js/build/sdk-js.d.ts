/// <reference types="react" />
/// <reference types="node" />
/// <reference types="node" />
import { useReactMediaRecorder } from "asset-input";
import { BigButton } from "big-button";
import { slugify } from "convert-case";
import { onlyUnique } from "js-util";
import { generatePassword } from "model-types";
import { isEmail } from "model-types";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
export declare const sdk: {
    useCustomUrlStore: <T extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T, (newValue: T | undefined) => Promise<boolean>];
    getGetApiUrl: (apiUrl: string, apiFunctionName: string, query: {
        [name: string]: string | string[] | undefined;
    }) => string;
    untypedApiFunction: (fnName: string, config: import("api-types").ApiConfig, ...parameters: any) => Promise<import("api-types").RealApiReturnType<any>>;
    addToken: (name: string, previousToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    ensureToken: (name: string, newToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    getAssetDirectlyApiUrl: (apiUrl: string, projectRelativeAssetPath: string) => string;
    getExtensionFromAsset: (asset: import("asset-type").Asset) => string | undefined;
    getNameFromRelativePath: (relativePath: string) => string;
    getNameWithTokenFromRelativePath: (relativePath: string, attachTokenToFilename?: boolean | undefined, newToken?: string | undefined) => string;
    getPreferredExtensionFromType: (type: string | undefined) => string | undefined;
    getReferencedAssetApiUrl: (apiUrl: string, projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string, isDownload?: boolean | undefined) => string;
    getTypeFromRelativePath: (relativePath: string) => import("asset-type").AssetType;
    readableSize: (sizeBytes: number) => string;
    removeTokenIfPresent: (name: string, attachTokenToFilename?: boolean | undefined) => {
        nameWithoutToken: string;
        token: string | undefined;
    };
    AssetInput: (props: {
        attachTokenToFilename?: boolean | undefined;
        defaultAssetName: string;
        allowMultiple?: boolean | undefined;
        inputTypes?: import("asset-type").NewAssetType[] | undefined;
        value?: import("asset-type").BackendAsset[] | undefined;
        onChange: (value: import("asset-type").BackendAsset[]) => void;
        projectRelativeReferencingFilePath: string;
    }) => JSX.Element;
    getTypeFromFileBlob: (file: File) => import("asset-type").AssetType;
    makeBackendAsset: (asset: import("asset-type").Asset) => import("asset-type").BackendAsset;
    MediaRecorderComponent: (props: import("asset-input").ReactMediaRecorderRenderProps & {
        type: import("asset-input").MediaRecorderType;
    }) => JSX.Element;
    MediaRecorder: (props: {
        type: import("asset-input").MediaRecorderType;
        withBlob: (blobUrl: string, blob: Blob) => void;
    }) => JSX.Element;
    ReactMediaRecorder: (props: import("asset-input").ReactMediaRecorderProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    SelectMedia: (props: {
        source: import("asset-input").MediaSourceEnum;
    }) => JSX.Element;
    useReactMediaRecorder: typeof useReactMediaRecorder;
    WebcamCapture: (props: {
        withBlob: (blobUrl: string, blob: Blob) => void;
    }) => JSX.Element;
    AssetView: (props: {
        asset: import("asset-type").Asset;
        className?: string | undefined;
        projectRelativeReferencingFilePath: string;
        hideDownloadLink?: boolean | undefined;
    }) => JSX.Element;
    InteractiveAsset: (props: {
        asset: import("asset-type").Asset;
        attachTokenToFilename?: boolean | undefined;
        projectRelativeReferencingFilePath: string;
        remove: () => void;
        onChange: (newAsset: import("asset-type").Asset) => void;
    }) => JSX.Element;
    BigButton: (button: BigButton) => JSX.Element;
    BreadCrumbs: (props: {
        path: string;
    }) => JSX.Element;
    renderBreadCrumbs: (chunks: string[]) => JSX.Element[];
    ClickableIcon: (button: import("clickable-icon").ClickableIconType) => JSX.Element;
    getFunctionExersize: (functionId: string) => Promise<string>;
    markdownParseToMarkdownModelType: (markdownParse: import("code-types").MarkdownParse | null) => import("model-types").Storing<import("model-types").MarkdownModelType> | null;
    parseMarkdownModelTimestamp: (parameters: import("matter-types").Frontmatter, markdownParse: import("code-types").MarkdownParse, parameterName: "createdAt" | "updatedAt" | "deletedAt" | "createdFirstAt" | "openedAt") => number;
    tryParseDate: (dateString: string) => number | undefined;
    camelCase: (text: string) => string;
    capitalCase: (text: string) => string;
    capitaliseFirstLetter: (word: string) => string;
    convertCase: (text: string, target: import("convert-case").Casing) => string;
    getDelimiter: (target: import("convert-case").Casing) => "" | "_" | " " | "-";
    humanCase: (text: string) => string;
    kebabCase: (text: string) => string;
    lowerCaseArray: (text: string) => string[];
    pascalCase: (text: string) => string;
    slugify: typeof slugify;
    snakeCase: (text: string) => string;
    FancyLoader: ({ big, medium, }: {
        big?: boolean | undefined;
        medium?: boolean | undefined;
    }) => JSX.Element;
    getWriterType: (extension: string | undefined) => import("filename-conventions").WriterType;
    hasSubExtension: (srcRelativeFileId: string, subExtensions: string | string[], includeRootName?: boolean | undefined) => boolean;
    isGeneratedOperationName: (operationName: string) => boolean;
    isGeneratedOperation: (operationBasePath: string) => boolean;
    isIndexableFileId: (fileId: string) => boolean;
    canAccessSync: (p: import("fs").PathLike, mode: number) => boolean;
    canAccess: (p: import("fs").PathLike, mode: number) => Promise<boolean>;
    canExecuteSync: (p: import("fs").PathLike) => boolean;
    canExecute: (p: import("fs").PathLike) => Promise<boolean>;
    canReadSync: (p: import("fs").PathLike) => boolean;
    canRead: (p: import("fs").PathLike) => Promise<boolean>;
    canSeeSync: (p: import("fs").PathLike) => Promise<boolean>;
    canSee: (p: import("fs").PathLike) => Promise<boolean>;
    canWriteSync: (p: import("fs").PathLike) => boolean;
    canWrite: (p: import("fs").PathLike) => Promise<boolean>;
    copyAllRelativeFiles: (relativeFilePaths: string[], absoluteSourceRoot: string, absoluteDestinationRoot: string, force?: boolean | undefined) => Promise<boolean>;
    findAllMd: (folderPath: string, onlyInCurrentFolder?: boolean | undefined) => import("fs-util").Markdown[];
    findFileNameCaseInsensitive: (folderPath: string, fileName: string) => Promise<string | undefined>;
    findFilesRecursively: ({ match, basePath, relativePath, onlyInSubFolders, onlyInCurrentFolder, }: {
        match: (fileName: string, extension: string) => boolean;
        basePath: string;
        relativePath?: string | undefined;
        onlyInSubFolders?: boolean | undefined;
        onlyInCurrentFolder?: boolean | undefined;
    }) => import("fs-util").FolderPath[];
    findSensibleFiles: (slug: string, basePath: string) => import("fs-util").FolderPath[];
    getAllFoldersUntilFolder: (folderPath: string) => string[];
    getFileName: (pathString: string) => string;
    getFirstAvailableFilename: (absoluteFilePath: string) => string;
    getFolder: (pathString: string) => string;
    getLastFolder: (pathString: string) => string;
    getOneFolderUpPath: (folderPath: string) => string;
    getPathCombinations: (...chunksSegments: (string | string[])[]) => string[];
    importFromFiles: <T_1>({ files, importStrategy, list, guard, }: {
        files: string[];
        importStrategy?: "default" | "fileName" | "list" | undefined;
        list?: string[] | undefined;
        guard?: ((moduleExports: any) => boolean) | undefined;
    }) => T_1[];
    isArrayGuard: (moduleExports: any) => boolean;
    oneUp: (filename: string) => string;
    parseMd: (mdFilePath: string) => import("fs-util").Markdown;
    removeAllExcept: (folderPath: string, config?: {
        ignore?: string[] | undefined;
        typeToRemove?: "file" | "folder" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    renameAndCreate: (oldPath: string, newPath: string) => Promise<void>;
    writeJsonToFile: <T_2>(p: string, data: T_2) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [filePath: string]: any;
    }) => Promise<void>;
    findFolderWhereMatch: <T_3>(fullSourcePath: string, matchFunction: (folderPath: string) => T_3) => {
        folderPath: string;
        matchResult: T_3;
    } | undefined;
    findOperationBasePathWithClassification: (startPath: string) => {
        folderPath: string;
        classification: "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5" | "ui-esm";
    } | undefined;
    findOperationBasePath: (startPath: string) => string | undefined;
    getAllPackageJsonDependencies: (p: import("code-types").PackageJson) => string[];
    getCommonAncestor: (path1: string, path2: string) => string;
    getOperationClassification: (folderPath: string) => "js" | "ts" | "node" | "server" | "web" | "app" | "ui-es6" | "ui-es5" | "ui-esm" | undefined;
    getOperationPathParse: (absolutePath: string) => import("code-types").OperationPathParse | undefined;
    getOperationPath: (operationName: string, config?: {
        manualProjectRoot?: string | undefined;
        notUseSdk?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    getOperationRelativePath: (absolutePath: string, operationBasePath: string) => string;
    getPathParse: (absolutePath: string) => import("code-types").PathParse | undefined;
    getPathsWithOperations: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string[];
    getProjectRoot: (fullSourcePath?: string | undefined) => string | undefined;
    getRelativeLinkPath: (absoluteFromFilePath: string, absoluteToFilePath: string, debug?: boolean | undefined) => string;
    getRelativePath: (absolutePath: string, relativeFrom: "project-root") => string | undefined;
    getRootPath: (name?: "assets" | "backups" | "bundled" | "cloned" | "distributions" | "operations" | "text" | "db" | undefined, config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string | undefined;
    getSrcRelativeFileId: (operationRelativePath: string) => string;
    hasDependency: (packageJson: import("code-types").PackageJson, dependency: string) => boolean;
    isOperation: (absoluteFolderPath: string) => boolean;
    isSensibleProject: (folderPath?: string | undefined) => boolean;
    isWorkspaceRoot: (folderPath: string) => {
        isSensibleProject: boolean;
        isWorkspaceRoot: boolean;
    } | undefined;
    makeRelative: (absolutePath: string, baseFolderPath: string) => string;
    isAltB: (keyboardEvent: KeyboardEvent) => boolean;
    isAltN: (keyboardEvent: KeyboardEvent) => boolean;
    isAltO: (keyboardEvent: KeyboardEvent) => boolean;
    isAltW: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlBacktick: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlP: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlS: (keyboardEvent: KeyboardEvent) => boolean;
    isCtrlSpace: (keyboardEvent: KeyboardEvent) => boolean;
    useHotkey: (isRightKey: (keyboardEvent: KeyboardEvent) => boolean, callback: () => void, dependencies: any[]) => void;
    useHotkeys: (dependencies: any[], callback: (keyboardEvent: KeyboardEvent) => void) => void;
    apply: <T_4>(functions: ((input: T_4) => T_4)[], value: T_4) => T_4;
    createEnum: <T_5 extends readonly string[]>(array: T_5) => { [K in T_5[number]]: K; };
    createMappedObject: <T_6 extends {
        [key: string]: any;
    }>(array: T_6[], mapKey: keyof T_6) => import("js-util").MappedObject<T_6>;
    findLastIndex: <T_7>(array: T_7[], findFn: (item: T_7) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_8 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_8;
    getSubsetFromObject: <T_9>(object: {
        [key: string]: T_9;
    }, keys: string[]) => {
        [key: string]: T_9;
    };
    groupByKey: <T_10 extends {
        [key: string]: any;
    }>(array: T_10[], key: keyof T_10) => {
        [key: string]: T_10[];
    };
    insertAt: <T_11>(array: T_11[], items: T_11 | T_11[], beforeIndex: number) => T_11[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_12>(...arrayOrNotArray: (T_12 | T_12[] | undefined)[]) => T_12[];
    mapAsync: <T_13, U>(array: T_13[], callback: (value: T_13, index: number, array: T_13[]) => Promise<U>) => Promise<Awaited<U>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_14, U_1>(array: T_14[], mapFn: (item: T_14, index: number, array: T_14[]) => Promise<U_1>, limit?: number | undefined) => Promise<U_1[]>;
    mapValuesSync: <T_15, U_2>(object: {
        [key: string]: T_15;
    }, mapFn: (value: T_15) => U_2) => {
        [x: string]: U_2;
    };
    mergeObjectParameters: <T_16>(config: T_16 | undefined, defaults: T_16 | undefined) => Partial<T_16>;
    mergeObjectsArray: <T_17 extends {
        [key: string]: any;
    }>(objectsArray: T_17[]) => T_17;
    mergeObjects: <T_18 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_18> | undefined)[]) => T_18 | undefined;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_19 extends {
        [key: string]: T_19[string];
    }, U_3 extends unknown>(object: T_19, mapFn: (key: string, value: T_19[string]) => U_3) => {
        [key: string]: U_3;
    };
    omitUndefinedValues: <T_20 extends {
        [key: string]: any;
    }>(object: T_20) => T_20;
    onlyUnique2: <U_4>(isEqualFn?: ((a: U_4, b: U_4) => boolean) | undefined) => <T_21 extends U_4>(value: T_21, index: number, self: T_21[]) => boolean;
    onlyUnique: typeof onlyUnique;
    removeIndexFromArray: <T_22>(array: T_22[], index: number) => T_22[];
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_23 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_23[], keys: (keyof T_23)[]) => T_23;
    sumObjectParameters: <TObject_3 extends {
        [key: string]: number;
    }>(object1: TObject_3, object2: TObject_3) => TObject_3;
    sum: (items: number[]) => number;
    takeFirst: <T_24>(arrayOrNot: T_24 | T_24[]) => T_24;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    flattenMarkdownChunks: (markdownChunks: import("code-types").MarkdownChunk[]) => import("code-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("code-types").MarkdownParagraph[];
    kvmdDataMap: <T_25 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_25[];
    kvmdDataToString: (kvmdData: import("model-types").KeyValueMarkdownModelType, previous: import("model-types").KeyValueMarkdownModelType | undefined) => string;
    kvmdParseToMarkdownString: (keyValueMarkdownParse: import("model-types").KeyValueMarkdownParse) => string;
    markdownStringToKvmdParse: (kvMdString: string, dbFileLocation: import("model-types").DbFileLocation) => import("model-types").KeyValueMarkdownParse;
    parseKvmdLine: (string: string) => import("model-types").KvmdLine | undefined;
    LabeledButton: (button: import("labeled-button").LabeledButtonType, index: number) => JSX.Element;
    getCallerFileName: () => string | undefined;
    log: (message: string, config?: import("log").LogConfig | undefined, data?: any) => void;
    parseTitle: (markdown: string) => {
        title: string;
        rest: string;
    };
    isResultOfInterface: <TResult>(result: TResult, jsonSchema: unknown) => boolean;
    makeTest: <TResult_1>(testFunction: (() => Promise<TResult_1>) | (() => TResult_1), isValid?: ((result: TResult_1) => boolean) | undefined) => () => Promise<boolean>;
    getChunkParagraphsRecursively: (chunk: import("code-types").MarkdownChunk) => string[];
    getImplicitId: (title: string) => string;
    getMarkdownIntro: (markdownParse: import("code-types").MarkdownParse | null) => {
        title: string | undefined;
        firstParagraph: string | null;
    };
    getMarkdownParseParagraphs: (markdownParse: import("code-types").MarkdownParse) => string[];
    getMarkdownReferencePaths: (markdownString: string) => string[];
    getMarkdownReferencesFromParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownReference[];
    markdownParseToMarkdownString: (markdownParse: import("code-types").MarkdownParse) => string;
    mdContentParseRecursively: (markdownString: string, level: number) => import("code-types").MarkdownChunk[];
    mdToJsonParse: (markdownString: string, fileName?: string | undefined, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("code-types").MarkdownParse;
    parseFrontmatterMarkdownString: (markdownWithFrontmatter: string, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("code-types").MarkdownParse;
    parseMarkdownParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownParagraphChunk[];
    parseMdToChunks: (markdownString: string, level: number) => import("code-types").MarkdownChunk[];
    removeHeaderPrefix: (string: string) => string;
    frontmatterParseToString: (frontmatter: import("matter-types").Frontmatter) => string;
    getFrontmatterValueString: (value: import("matter-types").FrontmatterValue) => string | null;
    quotedOrNot: (string: string) => string;
    stringifyNewlines: (string: string) => string;
    generateId: () => string;
    generatePassword: typeof generatePassword;
    generateRandomString: (length: number) => string;
    generateTime: () => number;
    isEmail: typeof isEmail;
    markdownModelTypeToMarkdownString: (markdownModelType: import("model-types").Storing<import("model-types").MarkdownModelType>) => string;
    getAssetInputType: (parameterName: string, valueType?: import("code-types").SimplifiedSchemaType | undefined) => import("name-conventions").AssetInputType | undefined;
    getParameterContentType: (parameterName: string) => void;
    isCalculatedParameter: (parameterName: string) => boolean;
    isGeneratedParameterName: (parameterName: string) => void;
    ALink: ({ children, href, target, rel, linkProps, ...otherAProps }: {
        linkProps?: {
            href: string | import("url").UrlObject;
            as?: string | import("url").UrlObject | undefined;
            replace?: boolean | undefined;
            scroll?: boolean | undefined;
            shallow?: boolean | undefined;
            passHref?: boolean | undefined;
            prefetch?: boolean | undefined;
            locale?: string | false | undefined;
            legacyBehavior?: boolean | undefined;
            onMouseEnter?: ((e: any) => void) | undefined;
            onClick?: ((e: any) => void) | undefined;
        } | undefined;
    } & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
        native?: import("react-native").TextProps | undefined;
        textClassName?: string | undefined;
    }) => JSX.Element;
    parsePrimitiveArray: (string: string) => string[];
    parsePrimitiveBoolean: (string: string) => boolean | undefined;
    parsePrimitiveString: (string: string) => string;
    parsePrimitive: (string: string, simplifiedSchema?: import("code-types").SimplifiedSchema | undefined) => import("parse-primitive").PrimitiveResult;
    isPlural: (parameterName: string) => boolean;
    isSingular: (parameterName: string) => boolean;
    pluralize: (parameterName: string) => string;
    singularize: (parameterName: string) => string;
    bodyFromQueryString: (query?: string | undefined) => {
        [key: string]: string | string[] | undefined;
    } | undefined;
    getFirstQueryStrings: (query: {
        [key: string]: string | string[] | undefined;
    }) => (string | undefined)[];
    getQueryPart: (strings: string[], queryKey: string) => string;
    toQueryString: (query?: any) => string;
    findFirstCommentTypes: (strippedFullComment?: string | undefined) => import("code-types").CommentTypeObject;
    getPossibleReferenceParameterNames: (parameterName: string) => string[];
    getProperties: (schema: import("json-schema").JSONSchema7 | undefined) => import("schema-util").SchemaProperty[];
    getRefLink: (ref?: string | undefined) => string | undefined;
    getReferencableModels: (simplifiedSchema?: import("code-types").SimplifiedSchema | undefined) => import("schema-util").ReferenceParameterInfo[] | undefined;
    getReferenceParameterInfo: (parameterName: string) => import("schema-util").ReferenceParameterInfo;
    getSchemaItems: (schema: import("json-schema").JSONSchema7 | undefined) => import("json-schema").JSONSchema7[];
    getSchema: (maybeSchema: import("json-schema").JSONSchema7Definition | undefined) => import("json-schema").JSONSchema7 | undefined;
    simplifiedSchemaToTypeDefinitionString: (simplifiedSchema?: import("code-types").SimplifiedSchema | undefined) => string;
    simplifySchema: (name: string | null, schema: import("json-schema").JSONSchema7, possibleRefs: {
        name: string;
        schema: import("json-schema").JSONSchema7;
    }[], rootStack: string[]) => import("code-types").SimplifiedSchema | undefined;
    objectStringToJson: (string: string) => {
        [key: string]: import("string-to-json").JSONValue;
    };
    parseIfJson: (string: string) => any;
    parsePrimitiveJson: <TForceType extends "string" | "number" | "boolean">(value: string, forceType?: TForceType | undefined) => TForceType extends "string" ? string | null | undefined : TForceType extends "number" ? number | null | undefined : TForceType extends "boolean" ? boolean | null | undefined : string | number | boolean | null | undefined;
    stringToJson: (value: string, isObject?: boolean | undefined) => import("string-to-json").JSONValue;
    getEncoding: typeof getEncoding;
    isBinary: typeof isBinary;
    isText: typeof isText;
    tryParseJson: <T_26>(text: string, logParseError?: boolean | undefined) => T_26 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-js.d.ts.map