/// <reference types="node" />
/// <reference types="node" />
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
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-api.d.ts.map