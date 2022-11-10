/// <reference types="node" />
/// <reference types="node" />
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
    getAugmentedWordObject: (manualProjectRoot?: string | undefined) => Promise<import("js-util").MappedObject<import("markdown-reader-types").AugmentedWord> | undefined>;
    getAugmentedWords: (manualProjectRoot?: string | undefined) => Promise<import("markdown-reader-types").AugmentedWord[]>;
    getBundleAugmentedWords: () => Promise<import("markdown-reader-types").AugmentedWord[]>;
    csvItemArrayToCsvString: <T extends import("csv-util").CsvItemType>(csvModelData: T[]) => string;
    tryParseCsv: <T_1 extends import("csv-util").CsvItemType>(csvString: string) => T_1[] | null;
    generateCsvInstance: () => import("model-types").Creation<import("database").CsvTestModel>;
    generateJsonSingleInstance: () => import("model-types").Creation<import("database").DefaultTestModel>;
    generateKvmdInstance: () => import("model-types").Creation<import("database").KvmdTestModel>;
    generateMarkdownInstance: () => import("model-types").Creation<import("database").MarkdownTestModel>;
    generateSlugTestModel: () => import("model-types").Creation<import("database").SlugTestModel>;
    getMergedQueryConfig: (modelName: string | number | symbol, customQueryConfig?: import("fs-orm").CustomQueryConfig | undefined) => import("fs-orm").MergedQueryConfig;
    randomName: () => string;
    runModelEndToEndTest: (modelName: keyof import("database").TestModels, generateInstance: () => import("model-types").Creation<import("model-types").AnyModelType>) => Promise<boolean>;
    testOperationModels: () => Promise<boolean>;
    addDefaultValues: (bareItem: import("model-types").Creation<import("model-types").AugmentedAnyModelType>, isKvmdStorage?: boolean | undefined) => import("model-types").AugmentedAnyModelType;
    alterAny: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterCsv: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterJsonMultiple: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterJsonSingle: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterKeyValueMarkdown: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    alterMarkdown: (dbFileLocation: import("model-types").DbFileLocation, alterFn: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[]) => {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    } & import("fs-orm").DbQueryResult) => Promise<import("fs-orm").DbQueryResult>;
    augmentItemWithReferencedDataRecursively: (item: import("model-types").AugmentedAnyModelType, includeArray: import("fs-orm").Include[], includeData: import("fs-orm").IncludeDataObject) => import("model-types").AugmentedAnyModelType;
    calculateOperationsObject: (manualProjectRoot: string) => Promise<{
        [x: string]: string;
    }>;
    createDb: <TModels extends import("fs-orm").AnyModelObject>(dbConfig?: import("fs-orm").DbConfig<TModels> | undefined) => import("fs-orm").Db<TModels>;
    findParent: (arrayItem: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>, newCategoryStack: import("model-types").CategoryStack) => boolean;
    getAugmentedData: <T_2>(dbFileLocation: import("model-types").DbFileLocation, dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => Promise<T_2[] | null>;
    getDatabaseFiles: (modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => Promise<import("model-types").DbFileLocation[]>;
    getDatabaseRootFolder: (operationName: string | null | undefined, manualProjectRoot?: string | undefined) => Promise<string | undefined>;
    getDbFileLocation: (storedItem: import("model-types").Storing<import("model-types").AugmentedAnyModelType>, operationName: string | null, mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("model-types").DbFileLocation | undefined>;
    getDbStorageMethodExtension: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => string;
    getDefaultLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string) => string | undefined;
    getItemModelLocation: <T_3 extends {
        [key: string]: any;
    }>(item: T_3) => import("model-types").ModelLocation;
    getLength: (array: any[]) => number;
    getLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => string | undefined;
    getMergedConfigOperationPath: (mergedConfig: import("fs-orm").MergedQueryConfig, manualProjectRoot?: string | undefined) => Promise<string | false | undefined>;
    getParentSlug: (item: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => string | undefined;
    getRootFolders: (config: {
        manualProjectRoot?: string | undefined;
        projectRoot: string;
        mergedConfig: import("fs-orm").MergedQueryConfig;
        operationPath: string | false;
    }) => Promise<import("fs-orm").RootDbFolder[]>;
    getWildcardDbFileLocations__OLD: (options: {
        modelName: string;
        parsedPath: import("path").ParsedPath;
        operationName: string | null;
        projectRoot: string;
        rootFolder: import("fs-orm").RootDbFolder;
    }) => Promise<import("model-types").DbFileLocation[]>;
    getWildcardDbFileLocations: (options: {
        modelName: string;
        parsedPath: import("path").ParsedPath;
        operationName: string | null;
        projectRoot: string;
        rootFolder: import("fs-orm").RootDbFolder;
    }) => Promise<import("model-types").DbFileLocation[]>;
    groupByFile: <T_4 extends {
        [key: string]: any;
    }>(creationItems: import("model-types").Creation<T_4>[], mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("fs-orm").ItemPerFileObject<T_4>>;
    makeStoringItem: <T_5 extends {
        [key: string]: any;
    }>(item: T_5) => import("model-types").Storing<T_5>;
    mergeConfigs: <TModels_1 extends import("fs-orm").AnyModelObject>(modelName: Extract<keyof TModels_1, string>, dbConfig?: import("fs-orm").DbConfig<TModels_1> | undefined, config?: import("fs-orm").CustomQueryConfig | import("fs-orm").GetQueryConfig<TModels_1[keyof TModels_1]> | undefined) => import("fs-orm").MergedQueryConfig;
    removeKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], slug: string) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    removeMultiple: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, removeWhere: (content: import("model-types").AugmentedAnyModelType) => boolean) => Promise<import("fs-orm").DbQueryResult>;
    upsertItems: <TModels_2 extends import("fs-orm").AnyModelObject = any, TModelName extends string = any>(dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", dbFileLocation: import("model-types").DbFileLocation, storingItems: import("model-types").Storing<TModels_2[TModelName]> | import("model-types").Storing<TModels_2[TModelName]>[], onlyInsert?: boolean | undefined) => Promise<import("fs-orm").DbQueryResult>;
    upsertKeyValueMarkdown: (storedData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[], storingItem: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    };
    upsert: (storedData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[], storingItems: import("model-types").Storing<import("model-types").AugmentedAnyModelType> | import("model-types").Storing<import("model-types").AugmentedAnyModelType>[], onlyInsert?: boolean | undefined) => import("fs-orm").DbQueryResult & {
        newStoredData: import("model-types").Storing<import("model-types").AugmentedAnyModelType>[];
    };
    getExtension: (fileNameOrPath: string) => string;
    getFolderJs: <T_6 extends string | undefined>(filePath: T_6) => T_6;
    getSubExtension: (fileName: string) => string | undefined;
    isPathRelative: (path: string) => boolean;
    removeTrailingSlash: (p: string) => string;
    withoutExtension: (fileName: string) => string;
    determineFileType: (filePath: string) => import("filename-conventions").FileType | null;
    exploreGitRepoFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    exploreMultiple: (searchConfigs: import("k-explore").SearchConfig[]) => Promise<import("code-types").TextJson[]>;
    exploreOperationFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    explorePreset: (preset: "markdown" | "packages" | "todo" | "docs" | "src" | "git", config?: import("k-explore").BaseConfig) => Promise<import("code-types").TextJson[]>;
    explore: ({ basePath, searchLevel, debug, ...other }: import("k-explore").SearchConfig) => Promise<import("code-types").TextJson[]>;
    findAllDocsFolderPaths: (ignoreOperations?: boolean | undefined) => Promise<string[]>;
    findAllDotGitFolders: (config: import("k-explore").BaseConfig) => Promise<import("code-types").TextJson[]>;
    findAllFoldersWithName: (config: {
        basePath: string;
        folderName: string;
        ignoreOperations?: boolean | undefined;
    }) => Promise<string[]>;
    findAllPackages: (config?: {
        basePath: string | string[] | undefined;
    } | undefined) => Promise<import("code-types").TextJson[]>;
    findAllTodoFolderPaths: (basePath: string, ignoreOperations?: boolean | undefined) => Promise<string[]>;
    pathArrayIsOperation: (pathArray: string[]) => boolean;
    copyStaticAssets: (markdownReaderPages: import("markdown-reader-types").MarkdownReaderPage[], config?: {
        operationName?: string | undefined;
    } | undefined) => Promise<boolean | undefined>;
    getAllMarkdownReaderPages: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<import("markdown-reader-types").MarkdownReaderPage[] | undefined>;
    getFolderExplorationInfo: (nestedPathObject: import("nested-menu").NestedPathObject, queryPath: string, projectRoot: string) => Promise<{
        title: string | undefined;
        description: string | null;
        descriptionProjectRelativeMarkdownPath: string | null;
        children: {
            projectRelativeMarkdownPath: string | null;
            title: string;
            firstParagraph: string | null;
            folderName: string;
        }[];
    }>;
    getMarkdownModelPages: (projectRoot: string) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    getMarkdownPageInfo: (projectRoot: string, nestedPathObject: import("nested-menu").NestedPathObject, queryPath: string, contentPage: import("markdown-reader-types").MarkdownReaderPage) => Promise<{
        markdownFile: import("code-types").WebMarkdownFile | null;
        nextQueryPath: string | null;
        previousQueryPath: string | null;
        projectRelativeMarkdownPath: string | null;
    }>;
    getMarkdownReaderPages: (config: {
        projectRoot: string;
        basePaths: string[];
        mapQueryPath?: ((queryPath: string) => string) | undefined;
    }) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    getMarkdownReaderQueryPaths: (config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => Promise<string[] | undefined>;
    getOperationPages: (projectRoot: string, bundleMarkdownReaderConfig?: import("bundle-types").BundleMarkdownReaderConfig | undefined) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    getPublicMarkdownFilePaths: (baseFolderPath: string, includeFoldersWithResults?: boolean | undefined) => Promise<{
        path: string;
        isFolder: boolean;
    }[]>;
    getTodoPages: (projectRoot: string) => Promise<import("markdown-reader-types").MarkdownReaderPage[]>;
    markdownReaderGetStaticPaths: import("next").GetStaticPaths<import("querystring").ParsedUrlQuery>;
    markdownReaderGetStaticProps: (context: import("next").GetStaticPropsContext<import("querystring").ParsedUrlQuery, import("next").PreviewData>) => Promise<{
        props: import("markdown-reader-types").MarkdownReaderPageProps;
    }>;
    removeExtensionsFromPath: (relativePath: string) => string;
    removeNumberPrefix: (fileOrFolderName: string) => string;
    shouldExposeMarkdownFile: (parameters: import("matter-types").Frontmatter) => boolean;
    getQueryPath: (parsedUrlQuery: import("next/dist/server/request-meta").NextParsedUrlQuery | undefined) => string;
    readCsvFileSync: <T_7 extends import("csv-util").CsvItemType>(filePath: string) => T_7[] | null;
    readCsvFile: <T_8 extends import("csv-util").CsvItemType>(filePath: string | undefined) => Promise<T_8[] | null>;
    readJsonFileSync: <T_9>(filePath: string) => T_9 | null;
    readJsonFile: <T_10>(filePath: string | undefined) => Promise<T_10 | null>;
    readKvmdFile: (filePath: string, dbFileLocation: import("model-types").DbFileLocation) => Promise<import("model-types").KeyValueMarkdownParse | null>;
    readMarkdownFileToModel: (absoluteFilePath: string) => Promise<import("code-types").WebMarkdownFile | null>;
    readMarkdownFile: (filePath: string) => Promise<import("code-types").MarkdownParse | null>;
    writeToAssets: (filePath: string, data: any, assetsFileName?: string | undefined) => Promise<boolean | undefined>;
    useCustomUrlStore: <T_11 extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T_11, (newValue: T_11 | undefined) => Promise<boolean>];
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
    importFromFiles: <T_12>({ files, importStrategy, list, guard, }: {
        files: string[];
        importStrategy?: "default" | "fileName" | "list" | undefined;
        list?: string[] | undefined;
        guard?: ((moduleExports: any) => boolean) | undefined;
    }) => T_12[];
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
    writeJsonToFile: <T_13>(p: string, data: T_13) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [filePath: string]: any;
    }) => Promise<void>;
    findFolderWhereMatch: <T_14>(fullSourcePath: string, matchFunction: (folderPath: string) => T_14) => {
        folderPath: string;
        matchResult: T_14;
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
    getRootPath: (name?: "text" | "assets" | "backups" | "bundled" | "cloned" | "distributions" | "operations" | "db" | undefined, config?: {
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
    apply: <T_15>(functions: ((input: T_15) => T_15)[], value: T_15) => T_15;
    createEnum: <T_16 extends readonly string[]>(array: T_16) => { [K in T_16[number]]: K; };
    createMappedObject: <T_17 extends {
        [key: string]: any;
    }>(array: T_17[], mapKey: keyof T_17) => import("js-util").MappedObject<T_17>;
    findLastIndex: <T_18>(array: T_18[], findFn: (item: T_18) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_19 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_19;
    getSubsetFromObject: <T_20>(object: {
        [key: string]: T_20;
    }, keys: string[]) => {
        [key: string]: T_20;
    };
    groupByKey: <T_21 extends {
        [key: string]: any;
    }>(array: T_21[], key: keyof T_21) => {
        [key: string]: T_21[];
    };
    insertAt: <T_22>(array: T_22[], items: T_22 | T_22[], beforeIndex: number) => T_22[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_23>(...arrayOrNotArray: (T_23 | T_23[] | undefined)[]) => T_23[];
    mapAsync: <T_24, U>(array: T_24[], callback: (value: T_24, index: number, array: T_24[]) => Promise<U>) => Promise<Awaited<U>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_25, U_1>(array: T_25[], mapFn: (item: T_25, index: number, array: T_25[]) => Promise<U_1>, limit?: number | undefined) => Promise<U_1[]>;
    mapValuesSync: <T_26, U_2>(object: {
        [key: string]: T_26;
    }, mapFn: (value: T_26) => U_2) => {
        [x: string]: U_2;
    };
    mergeObjectParameters: <T_27>(config: T_27 | undefined, defaults: T_27 | undefined) => Partial<T_27>;
    mergeObjectsArray: <T_28 extends {
        [key: string]: any;
    }>(objectsArray: T_28[]) => T_28;
    mergeObjects: <T_29 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_29> | undefined)[]) => T_29 | undefined;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_30 extends {
        [key: string]: T_30[string];
    }, U_3 extends unknown>(object: T_30, mapFn: (key: string, value: T_30[string]) => U_3) => {
        [key: string]: U_3;
    };
    omitUndefinedValues: <T_31 extends {
        [key: string]: any;
    }>(object: T_31) => T_31;
    onlyUnique2: <U_4>(isEqualFn?: ((a: U_4, b: U_4) => boolean) | undefined) => <T_32 extends U_4>(value: T_32, index: number, self: T_32[]) => boolean;
    onlyUnique: typeof onlyUnique;
    removeIndexFromArray: <T_33>(array: T_33[], index: number) => T_33[];
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_34 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_34[], keys: (keyof T_34)[]) => T_34;
    sumObjectParameters: <TObject_3 extends {
        [key: string]: number;
    }>(object1: TObject_3, object2: TObject_3) => TObject_3;
    sum: (items: number[]) => number;
    takeFirst: <T_35>(arrayOrNot: T_35 | T_35[]) => T_35;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    flattenMarkdownChunks: (markdownChunks: import("code-types").MarkdownChunk[]) => import("code-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("code-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("code-types").MarkdownParagraph[];
    kvmdDataMap: <T_36 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_36[];
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
    tryParseJson: <T_37>(text: string, logParseError?: boolean | undefined) => T_37 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk.d.ts.map