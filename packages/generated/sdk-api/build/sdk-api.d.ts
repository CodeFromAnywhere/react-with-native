/// <reference types="node" />
/// <reference types="node" />
import { hasDefinition } from "index-typescript";
import { setKeyAtLocation } from "set-json-key";
import { getTypescriptErrorsFromFiles } from "compile-typescript";
import { slugify } from "convert-case";
import { onlyUnique } from "js-util";
import { generatePassword } from "model-types";
import { isEmail } from "model-types";
import { byteCount } from "path-util";
import { getEncoding } from "text-or-binary";
import { isBinary } from "text-or-binary";
import { isText } from "text-or-binary";
export declare const sdk: {
    controlChatGpt: (prompt: string, headless?: boolean | undefined) => Promise<string>;
    getContextualPromptResults: (config?: {
        prompt_projectRelativePath?: string | undefined;
        promptSlugs?: string[] | undefined;
    } | undefined) => Promise<import("ai-types").ContextualPromptResult[]>;
    getContextualPrompt: (contextualPromptSlug: string | undefined, customPromptContent: string | null, saveNewPromptWithName: string | null) => Promise<(Omit<import("ai-types").ContextualPrompt, import("model-types").OptionalForCreationKeys<import("ai-types").ContextualPrompt>> & Partial<Pick<import("ai-types").ContextualPrompt, import("model-types").OptionalForCreationKeys<import("ai-types").ContextualPrompt>>> & {
        slug: string;
    }) | undefined>;
    getContextualPromptsArray: (scopeProjectRelativePath?: string | undefined) => Promise<{
        databaseResult: import("ai-types").ContextualPrompt[];
        scopeResult?: import("ai-types").ContextualPrompt[] | undefined;
    }>;
    getContextualPrompts: (contextType?: import("filename-conventions").FileType | undefined, scopeProjectRelativePath?: string | undefined) => Promise<import("ai-functions-node").ContextualPromptsObject>;
    getFolderRelativeScopeDbFilePath: (filename?: string | undefined) => string;
    processChatGptPrompt: (config: {
        contextContent: string | null;
        selectionContent: string | null;
        contextualPromptSlug: string | undefined;
        customPromptContent: string | null;
        saveNewPromptWithName: string | null;
        commentContent: string | null;
        isHeadless?: boolean | undefined;
        prompt_projectRelativePath?: string | undefined;
        thread?: string | undefined;
    }) => Promise<{
        isSuccessful: boolean;
        message: string;
        result?: {
            text?: string | undefined;
            assets?: import("asset-type").BackendAsset[] | undefined;
            thread: string;
        } | undefined;
    }>;
    allOperationsRemoveJsSrc: (debug?: boolean | undefined) => Promise<void>;
    allOperationsToMarkdown: () => Promise<void>;
    clearAllTsDatabases: () => Promise<void>;
    codeAll: (search: string) => Promise<void>;
    forAllFiles: ({ filePaths, callback, command, }: import("all").ForAllFilesConfig) => Promise<void>;
    forAllFolders: ({ type, callback, basePath, onlyRoot, command, shell, fileName, folderName, ignore, }: {
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }) => Promise<void>;
    getAllOperationClassifications: () => Promise<void>;
    gitShipAllRepos: ({ basePath, callback, fileName, folderName, shell, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command" | "type">) => Promise<void>;
    mdAllOperations: (debug?: boolean | undefined) => Promise<void>;
    minifyAllOperations: (config?: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command" | "type" | "fileName" | "folderName" | "callback" | "ignore"> | undefined) => Promise<void>;
    publishAllOperations: ({ basePath, callback, fileName, folderName, shell, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command" | "type">) => Promise<void>;
    removeAllFiles: (search: string) => Promise<void>;
    removeAllFolders: (config: {
        basePath: string;
        folderNames: string[];
        ignore?: string | string[] | undefined;
        onlyRoot?: boolean | undefined;
    }) => Promise<boolean>;
    removeAll: ({ basePath, fileName, folderName, type, shell, ignore, onlyRoot, }: Omit<{
        basePath?: string | string[] | undefined;
    } & {
        onlyRoot?: boolean | undefined;
        type?: import("all").DirectoryType | undefined;
        fileName?: string | undefined;
        folderName?: string | undefined;
        callback?: ((folderPath: string, index: number) => void) | undefined;
        command?: string | undefined;
        shell?: boolean | undefined;
        ignore?: string | string[] | undefined;
    }, "command">) => Promise<void>;
    renameAll: ({ filePaths, newFileName, newFilePath, }: {
        filePaths: string[];
        newFileName?: string | undefined;
        newFilePath?: ((oldPath: string) => string) | undefined;
    }) => Promise<void>;
    runScriptEverywhere: (script: string, startIndex?: number | undefined) => Promise<void>;
    setScriptEverywhere: (script: string, value: string) => Promise<void>;
    compressAsset: (absolutePath: string, compressionConfig: import("asset-type").CompressionConfig) => Promise<string>;
    deleteReferencedAsset: (projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    downloadRemoteAsset: () => Promise<import("asset-type").UploadAssetResult>;
    findAbsoluteAssetPathFromReference: (projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string) => Promise<{
        isSuccessful: boolean;
        message: string;
        absoluteAssetPath?: string | undefined;
    }>;
    findAllProjectMedia: (searchQuery?: string | undefined, returnType?: "projectRelative" | "absolute" | undefined) => Promise<string[]>;
    getAssetDirectlyGetApi: (serverContext: Context) => void | {
        isSuccessful: boolean;
        message: string;
    };
    getReferencedAssetGetApi: (serverContext: Context) => Promise<{
        isSuccessful: boolean;
        isUnauthorized?: boolean | undefined;
        message: string;
    }>;
    getStorageLocationInfo: (absoluteReferencingFilePath: string, modelName?: string | undefined) => {
        type: "typescript" | "database" | "markdown";
        absoluteAssetBaseFolderPath: string;
    };
    getTemporaryAssetsFolderPath: () => string;
    processAsset: (backendAsset?: import("asset-type").BackendAsset | import("asset-type").BackendAsset[] | undefined) => Promise<import("asset-type").BackendAsset | undefined>;
    processItemAssets: <KInterfaceName extends string | number | symbol>(item: import("model-types").AugmentedAnyModelType, interfaceName: KInterfaceName, operationName: string | null, customQueryConfig: import("fs-orm").CustomQueryConfig) => Promise<import("model-types").AugmentedAnyModelType | undefined>;
    removeOldTemporaryAssets: () => Promise<{
        removedAmount: number;
    }>;
    serverDownloadReply: (absoluteAssetPath: string, isDownload: boolean) => any;
    uploadAssetWithContext: (functionContext: import("function-context-type").FunctionContext) => Promise<import("asset-type").UploadAssetResult>;
    getAugmentedWordObject: (manualProjectRoot?: string | undefined) => Promise<import("js-util").MappedObject<import("augmented-word-types").AugmentedWord> | undefined>;
    getAugmentedWords: (manualProjectRoot?: string | undefined) => Promise<import("augmented-word-types").AugmentedWord[]>;
    getBundleAugmentedWords: () => Promise<import("augmented-word-types").AugmentedWord[]>;
    getBundleSummary: (bundleConfig: import("bundle-types").BundleConfig) => import("bundle-util").BundleSummary;
    getDbModelsForBundle: (bundleConfig: import("bundle-types").BundleConfig) => Promise<import("code-types").TsInterface[]>;
    cleanupTsDatabase: (operationName: string, manualProjectRoot?: string | undefined) => Promise<{
        amountRemoved: number;
    } | undefined>;
    shouldDeleteTsModel: (tsModel: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsComment | import("code-types").TsBuildError | import("code-types").TsLintWarning | import("code-types").TsExport | import("code-types").TsImport | import("code-types").TsVariable, operationName: string, operationRelativePaths: string[]) => boolean;
    copyCopyPairs: (copyPairs: import("collect-static-assets").CopyPair[]) => Promise<void[]>;
    copyReaderStaticAssets: (operationBasePath: string, allWebPages: import("webpage-types").WebPage<unknown>[]) => Promise<void>;
    findReaderStaticAssets: (readerWebPages: import("webpage-types").FileWebPage[]) => Promise<string[] | undefined>;
    findStaticAssets: (absoluteMarkdownFilePath: string) => Promise<string[]>;
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
    cacheLookup: (functionName: string, parameters: any[] | undefined) => import("db-recipes").CacheLookupResult;
    calculateOperatingSystemBundle: (manualProjectRoot?: string | undefined) => Promise<void>;
    deleteDbModel: <KInterface extends "TsConfig" | "Todo" | "PaymentCoupon" | "PaymentEvent" | "PaymentPlan" | "PaymentRequest" | "PaymentSubscription" | "PaymentTransaction" | "ContextualPrompt" | "ContextualPromptResult" | "SelfSprintReview" | "TodoFile" | "TodoOffer" | "AuthorizationModel" | "Device" | "Group" | "PageVisit" | "PeerMessage" | "Person" | "Persona" | "PersonInformation" | "PersonInformationValue" | "PersonPlatformConnection" | "Platform" | "Artist" | "PlayCategory" | "PlayItem" | "PlayList" | "PlaySchedule" | "RelationModelType" | "RecurringReminder" | "Interest" | "MediaChannel" | "MediaCredential" | "MediaPost" | "BundleConfig" | "FrontBackBundle" | "Dataset" | "FunctionExecution" | "Operation" | "TsBuildError" | "TsComment" | "TsExport" | "TsFunction" | "TsImport" | "TsInterface" | "TsLintWarning" | "TsVariable" | "TypescriptFile" | "Address" | "Area" | "City" | "Country" | "Location" | "KvmdWord" | "MarkdownWord" | "NepaliEnglishTranslationMatrix" | "Statement" | "TokiPonaMatrix" | "Translation" | "Word" | "WordCategory" | "WordCombination" | "WordMatrix" | "MarkdownCallToAction" | "WebMarkdownFile" | "WebsiteHeader" | "SlugModelType" | "AppDeveloper" | "Assignment" | "Bag" | "Calendar" | "Deliverable" | "Diary" | "Feeling" | "FeelingLog" | "Folder" | "Host" | "Inventory" | "Item" | "ItemCategory" | "KvmdShortcut" | "Label" | "Light" | "Listing" | "LoginCredential" | "Material" | "MessagePreset" | "PersonalCarbonFootprintProfile" | "ProgressReport" | "Question" | "Reservation" | "Resource" | "Shit" | "ShitLog" | "ShoppingList" | "Shortcut" | "Student" | "Student2" | "TaskError" | "Trackable" | "User" | "UserCredential" | "JeepType" | "LocationType" | "OperationConfig" | "OperationIndex" | "PackageJson" | "Activity" | "CompanyRequirement" | "CompanySize" | "CompanyType" | "Company" | "ContactInformation" | "Contribution" | "EsgMetric" | "ProductCategory" | "Product" | "ProofState" | "Proof" | "SustainabilityPlan" | "ValueChainPhase">(interfaceName: KInterface, id: string) => Promise<import("fs-orm").DbQueryResult>;
    getDatabaseMenu: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<{
        menu: import("code-types").ModelInfo[];
    }>;
    getDbModelMetadata: (modelName: string | undefined) => Promise<{
        tsInterface?: import("code-types").TsInterface | undefined;
        datasets?: import("code-types").Dataset[] | undefined;
        projectRelativeStorageFilePath?: string | undefined;
    }>;
    getDbModelNames: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<(string | number | symbol)[]>;
    getDbModel: <KInterface_1 extends string | number | symbol, TDatasetConfig extends import("code-types").DatasetConfig>(interfaceName: KInterface_1 | null, datasetConfig?: TDatasetConfig | undefined, search?: string | undefined) => Promise<import("db-recipes").GetDbModelResult<KInterface_1>>;
    getFunctionIndex: ({ functionName, }: {
        functionName: string;
    }) => Promise<{
        success: boolean;
        response: string;
        function?: import("code-types").TsFunction | undefined;
    }>;
    getNestedDatabaseMenu: (config?: {
        noOperationPath?: boolean | undefined;
        noOperationName?: boolean | undefined;
        noSrcRelativeFolder?: boolean | undefined;
        noPrefix?: boolean | undefined;
    } | undefined) => Promise<{
        flat?: import("webpage-types").WebPage<null>[] | undefined;
        nested?: import("webpage-types").NestedWebPage[] | undefined;
    }>;
    getReferencableModelData: (dbModelName: string | number | symbol) => Promise<{
        id: string;
        name: any;
        slug: any;
        categoryStackCalculated: any;
    }[]>;
    hasDbRecipes: () => boolean;
    makeSrcRelativeFolder: (operationRelativeTypescriptFilePath: string) => string | undefined;
    tsInterfaceToDbMenu: (tsInterface: import("code-types").TsInterface, type: string) => {
        name: string;
        operationName: string;
        type: string;
        srcRelativeFolder: string | undefined;
    } | undefined;
    upsertDbModel: <KInterfaceName_1 extends string | number | symbol, KItem extends DbModels>(interfaceName: KInterfaceName_1, data: KItem | KItem[], isNew?: boolean | undefined) => Promise<import("fs-orm").DbQueryResult>;
    validateInput: <TFunctionName extends "trim" | "canExecute" | "canRead" | "unzip" | "zip" | "ask" | "log" | "nodemon" | "pluralize" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "folderGetUpdatedAt" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "removeTrailingSlash" | "withoutExtension" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "pathArrayIsOperation" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendSms" | "getTwitterPostUrl" | "postTweetOnTwitter" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp3" | "youtubeToMp4" | "getPort" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "speakWordsToLearn" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "controlChatGpt" | "getContextualPromptResults" | "getContextualPrompt" | "getContextualPrompts" | "processChatGptPrompt" | "mapArrayJson" | "mapObjectJson" | "videoToMp3" | "csvItemArrayToCsvString" | "tryParseCsv" | "convertCsvToJson" | "convertXlsToJson" | "compressImage" | "compressImages" | "convertToMp3" | "convertToMp4" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getOutline" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "readCsvFileSync" | "readCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModel" | "getDatabaseMenu" | "getDbModelMetadata" | "getDbModelNames" | "getDbModel" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelData" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModel" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "upsert" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "getPostableFrontmatterSchema" | "getFileContents" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "moveFile" | "newFile" | "newFolder" | "processAssetUpload" | "renameFilename" | "saveFileContents" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "generateBunMonopackage" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "createSimpleTypescriptFile" | "runTestsForOperation" | "runTests" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "comparePassword" | "encryptPassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "addAuthenticationMethod" | "addDeviceAuthenticationMethodConfirm" | "addDeviceAuthenticationMethodWithContext" | "addPersonAuthenticationMethodWithContext" | "findAuthenticatedPersonWithHandle" | "findLoggedinPersonsWithContext" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginWithContext" | "loginWithPasswordWithContext" | "logoutWithContext" | "removeDeviceAuthenticationMethodWithContext" | "removePersonAuthenticationMethodWithContext" | "signupWithContext" | "signupWithPasswordWithContext" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "execAsync" | "spawnAsync" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "dev" | "checkAndGetFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeMessage" | "scrollToTop" | "selectChannel" | "selectWorkSpace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "getSocialMediaMenu" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "getTodoFilePostables" | "getWebMarkdownFilePostables" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "makeExercises" | "driverLogin" | "driverSignup" | "earthDistance" | "getMyJeep" | "getPublicJeeps" | "updateMyProfile" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "calculateFullCompany" | "companyAttachContributionInformation" | "companyAttachEsgMetricProofStates" | "companyAttachRequirements" | "companyAttachTransparency" | "concatenateItems" | "contributionAddNextContributions" | "getActivities" | "getAverage" | "getCompanies" | "getFinalProducts" | "getFullCompanyData" | "getIngredientProducts" | "getProductValueChainForProduct" | "getProductValueChain" | "getRequiredValueChainData" | "getSustainabilityPlan" | "hasEsgMetricWithStatus" | "requirementAttachProofStates" | "sumEsgMetricProofStates" | "getCompanyRequirementDescription" | "requirementAppliesToCompany" | "parseAddress" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getAssetDirectlyApiUrl" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "getEncoding" | "isBinary" | "isText" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "makeFileType" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "makeRelative" | "packageCompilesTs" | "tsconfigCompilesEsm" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "findSentenceMatches" | "searchRecursiveObjectArray" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "markdownModelTypeToMarkdownString" | "createUser" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "isResultOfInterface" | "makeTest" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "getFullPath" | "getLastPathsChunk" | "usePath" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "sum" | "takeFirst" | "trimSlashes" | "getCallerFileName" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "oneByOne" | "isPlural" | "isSingular" | "singularize" | "runChildProcess" | "clickOnSpanTag" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getChromeExecutablePath" | "gmailLogin" | "logConsoleIfDebug" | "retryClickAndWaitSelector" | "retryWaitSelector" | "setInnerHtml" | "setInputValue" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "waitMilliseconds">(functionName: TFunctionName, parameters: any[] | undefined, tsFunction: import("code-types").TsFunction) => {
        isValid: boolean;
        errors?: {
            fieldStack: string[];
            error: string;
        }[] | undefined;
    };
    validateResult: <TFunctionName_1 extends "trim" | "canExecute" | "canRead" | "unzip" | "zip" | "ask" | "log" | "nodemon" | "pluralize" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "folderGetUpdatedAt" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "removeTrailingSlash" | "withoutExtension" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "pathArrayIsOperation" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendSms" | "getTwitterPostUrl" | "postTweetOnTwitter" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp3" | "youtubeToMp4" | "getPort" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "speakWordsToLearn" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "controlChatGpt" | "getContextualPromptResults" | "getContextualPrompt" | "getContextualPrompts" | "processChatGptPrompt" | "mapArrayJson" | "mapObjectJson" | "videoToMp3" | "csvItemArrayToCsvString" | "tryParseCsv" | "convertCsvToJson" | "convertXlsToJson" | "compressImage" | "compressImages" | "convertToMp3" | "convertToMp4" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getOutline" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "readCsvFileSync" | "readCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModel" | "getDatabaseMenu" | "getDbModelMetadata" | "getDbModelNames" | "getDbModel" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelData" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModel" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "upsert" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "getPostableFrontmatterSchema" | "getFileContents" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "moveFile" | "newFile" | "newFolder" | "processAssetUpload" | "renameFilename" | "saveFileContents" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "generateBunMonopackage" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "createSimpleTypescriptFile" | "runTestsForOperation" | "runTests" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "comparePassword" | "encryptPassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "addAuthenticationMethod" | "addDeviceAuthenticationMethodConfirm" | "addDeviceAuthenticationMethodWithContext" | "addPersonAuthenticationMethodWithContext" | "findAuthenticatedPersonWithHandle" | "findLoggedinPersonsWithContext" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginWithContext" | "loginWithPasswordWithContext" | "logoutWithContext" | "removeDeviceAuthenticationMethodWithContext" | "removePersonAuthenticationMethodWithContext" | "signupWithContext" | "signupWithPasswordWithContext" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "execAsync" | "spawnAsync" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "dev" | "checkAndGetFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeMessage" | "scrollToTop" | "selectChannel" | "selectWorkSpace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "getSocialMediaMenu" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "getTodoFilePostables" | "getWebMarkdownFilePostables" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "makeExercises" | "driverLogin" | "driverSignup" | "earthDistance" | "getMyJeep" | "getPublicJeeps" | "updateMyProfile" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "calculateFullCompany" | "companyAttachContributionInformation" | "companyAttachEsgMetricProofStates" | "companyAttachRequirements" | "companyAttachTransparency" | "concatenateItems" | "contributionAddNextContributions" | "getActivities" | "getAverage" | "getCompanies" | "getFinalProducts" | "getFullCompanyData" | "getIngredientProducts" | "getProductValueChainForProduct" | "getProductValueChain" | "getRequiredValueChainData" | "getSustainabilityPlan" | "hasEsgMetricWithStatus" | "requirementAttachProofStates" | "sumEsgMetricProofStates" | "getCompanyRequirementDescription" | "requirementAppliesToCompany" | "parseAddress" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getAssetDirectlyApiUrl" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "getEncoding" | "isBinary" | "isText" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "makeFileType" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "makeRelative" | "packageCompilesTs" | "tsconfigCompilesEsm" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "findSentenceMatches" | "searchRecursiveObjectArray" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "markdownModelTypeToMarkdownString" | "createUser" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "isResultOfInterface" | "makeTest" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "getFullPath" | "getLastPathsChunk" | "usePath" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "sum" | "takeFirst" | "trimSlashes" | "getCallerFileName" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "oneByOne" | "isPlural" | "isSingular" | "singularize" | "runChildProcess" | "clickOnSpanTag" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getChromeExecutablePath" | "gmailLogin" | "logConsoleIfDebug" | "retryClickAndWaitSelector" | "retryWaitSelector" | "setInnerHtml" | "setInputValue" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "waitMilliseconds">(functionName: TFunctionName_1, result: any, tsFunction: import("code-types").TsFunction) => {
        isValid: boolean;
        errors?: {
            fieldStack: string[];
            error: string;
        }[] | undefined;
    };
    filterInterfacesFromOperationNames: (tsInterface: import("code-types").TsInterface, operationNames?: string[] | undefined) => boolean | "" | null;
    getDbModelsFromOperations: (operationNames: string[]) => Promise<import("code-types").TsInterface[]>;
    comparePassword: (rawPassword: string, encryptedPassword: string) => boolean;
    encryptPassword: (rawPassword: string) => string;
    exploreOperation: (operationBasePath: string) => Promise<import("markdown-types").TextJson[]>;
    exploreProject: (config?: {
        bundleId?: string | undefined;
    } | undefined) => Promise<import("code-types").FolderExploration[] | undefined>;
    getExplorationType: (absolutePath: string, operationFolders: string[]) => "function" | "folder" | "typescript" | "markdown" | "operation" | "operationFolder" | "interface" | "variable" | undefined;
    getFileWithExtension: (absolutePath: string) => string;
    getFolderExplorationDetails: (config: {
        path: string;
        type: "function" | "folder" | "typescript" | "markdown" | "operation" | "operationFolder" | "interface" | "variable";
        name: string;
        sort?: string | undefined;
        typeIndexType?: keyof import("code-types").IndexModels | null | undefined;
    } & import("read-typescript-file").IndexFilter) => Promise<import("code-types").ExplorationDetails>;
    getFrontmattersMappedObject: (projectRoot: string, markdownPaths?: string[] | undefined) => Promise<{
        [x: string]: import("matter-types").Frontmatter | undefined;
    }>;
    getInstanceNames: (array: any[], relativePathFromProjectRoot: string) => string[];
    getProjectRelativePaths: (config?: {
        type?: "todo" | undefined;
        earliestUpdatedAt?: number | undefined;
        filterDraft?: boolean | undefined;
        filterPrivate?: boolean | undefined;
        filterGenerated?: boolean | undefined;
        sort?: "recent" | undefined;
    } | undefined) => Promise<string[] | undefined>;
    getTodoPages: (config?: import("todo-types").TodoPagesConfig | undefined) => Promise<{
        nested: import("webpage-types").NestedWebPage[];
        flat: (import("webpage-types").FileWebPage | import("webpage-types").WebPage<null>)[];
    }>;
    getTodoPaths: (config?: import("todo-types").TodoPagesConfig | undefined) => Promise<string[]>;
    hasSameProjectPath: (projectRelativePath: string) => <T_2 extends import("model-types").TsIndexModelType>(x: T_2) => boolean;
    compressImage: (absoluteSourceImagePath: string, config?: {
        sizeWidthPx?: number | undefined;
        aspectRatio?: {
            x: number;
            y: number;
        } | undefined;
        quality?: number | undefined;
        targetFormat?: "webp" | "png" | "mp4" | undefined;
        keepOriginal?: boolean | undefined;
        isDebug?: boolean | undefined;
    } | undefined) => Promise<string | undefined>;
    compressImages: (absoluteBasePath: string, sizeWidthPx?: number | undefined, quality?: number | undefined) => Promise<void>;
    convertToMp3: (sourcePath: string, destinationPath: string) => Promise<string | undefined>;
    convertToMp4: (sourcePath: string, destinationPath: string) => Promise<string | undefined>;
    findAllDependencyOperations: ({ imports, operations, operationNames, ignoreOperationNames, ignoreFilter, }: {
        imports: import("code-types").TsImport[];
        operations: import("code-types").Operation[];
        operationNames: string[];
        ignoreOperationNames?: string[] | undefined;
        ignoreFilter?: ((operationName: string) => boolean) | undefined;
    }) => Promise<string[]>;
    findDependantsRecursively: (operationName: string, already?: string[] | undefined) => Promise<string[]>;
    findDependants: (config: {
        operationName: string;
        importName?: string | undefined;
        returnOperationName?: boolean | undefined;
        imports?: import("code-types").TsImport[] | undefined;
        onlyExternal?: boolean | undefined;
    }) => Promise<string[]>;
    findDependenciesRecursively: (imports: import("code-types").TsImport[], operations: import("code-types").Operation[], operationName: string, already: string[], ignore?: string[] | undefined, ignoreFilter?: ((operationName: string) => boolean) | undefined) => Promise<string[]>;
    findMonorepoModules: (operationName: string) => Promise<string[]>;
    getDependencyObject: () => Promise<{
        [x: string]: string[];
    }>;
    getDependencyTree: (operationNames: string[], stack: string[]) => Promise<import("find-all-dependency-operations").DependencyTree | null>;
    folderGetUpdatedAt: ({ folderPath, }: {
        folderPath: string;
    }) => Promise<number>;
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
    getAugmentedData: <T_3>(dbFileLocation: import("model-types").DbFileLocation, dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => Promise<T_3[] | null>;
    getDatabaseFiles: (modelName: string, mergedConfig: import("fs-orm").MergedQueryConfig) => Promise<import("model-types").DbFileLocation[]>;
    getDatabaseRootFolder: (operationName: string | null | undefined, manualProjectRoot?: string | undefined) => Promise<string | undefined>;
    getDbFileLocation: (storedItem: import("model-types").Storing<import("model-types").AugmentedAnyModelType>, operationName: string | null, mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("model-types").DbFileLocation | undefined>;
    getDbStorageMethodExtension: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv") => string;
    getDefaultLocationPattern: (dbStorageMethod: "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv", modelName: string) => string | undefined;
    getItemModelLocation: <T_4 extends {
        [key: string]: any;
    }>(item: T_4) => import("model-types").ModelLocation;
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
    groupByFile: <T_5 extends {
        [key: string]: any;
    }>(creationItems: import("model-types").Creation<T_5>[], mergedConfig: import("fs-orm").MergedQueryConfig, modelName: string) => Promise<import("fs-orm").ItemPerFileObject<T_5>>;
    makeStoringItem: <T_6 extends import("model-types").AugmentedAnyModelType>(item: T_6) => import("model-types").Storing<T_6>;
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
    waitForLockfile: (lockfilePath: string) => Promise<boolean>;
    getExtension: (fileNameOrPath: string) => string;
    getFileOrFolderName: <T_7 extends string | undefined>(fileOrFolderPath: T_7) => T_7;
    getFolderJs: <T_8 extends string | undefined>(filePath: T_8) => T_8;
    getSubExtension: (filename: string) => string | undefined;
    isPathRelative: (path: string) => boolean;
    removeTrailingSlash: (p: string) => string;
    withoutExtension: (fileName: string) => string;
    getFunctionExecutions: (functionName: string | undefined) => Promise<import("code-types").FunctionExecution[]>;
    getFunctionQueryPaths: (tsFunctions?: import("code-types").TsFunction[] | undefined) => Promise<{
        nested: import("webpage-types").NestedWebPage[];
        flat: import("webpage-types").WebPage<null>[];
    }>;
    getPublicBundleConfig: import("function-server-types").ApiFunction;
    getSrcRelativeFolderPath: (operationRelativeSourcePath: string) => string | undefined;
    getTsFunction: (functionName?: string | undefined) => Promise<import("function-types").FunctionData | undefined>;
    generateNamedIndex: ({ operationName, manualProjectRoot, }: {
        manualProjectRoot?: string | undefined;
        operationName: string;
    }) => Promise<void>;
    generateSimpleIndex: ({ operationName, manualProjectRoot, }: {
        operationName: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<string | undefined>;
    isTestFn: (x: import("generate-index").ImportStatement) => boolean;
    mapToImportStatement: (item: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsVariable, type: "function" | "interface" | "variable") => import("generate-index").ImportStatement;
    getImportedDependencies: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => string[] | undefined;
    getPackage: (absoluteModuleString: string) => string;
    isAbsoluteImport: (moduleString: string) => boolean;
    calculatePackageJsonDependencies: (dependencies: import("code-types").PackageInfoObject | undefined, imports: import("model-types").Creation<import("code-types").TsImport>[], operations: import("code-types").Operation[], operationName: string) => {
        newDependencies: import("code-types").PackageInfoObject;
        hasGeneratedDependenciesIndexed: boolean;
    };
    findAndWriteImportsExports: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    getDefaultSymbolType: (symbol: import("ts-morph").Symbol, debug?: boolean | undefined) => import("get-imports-exports").TypeSpecifier;
    getExportSpecifierNames: (symbol: import("ts-morph").Symbol) => string[];
    getExportSymbolTypeRecursive: (symbol: import("ts-morph").Symbol, sourceFile: import("ts-morph").SourceFile, debug?: boolean | undefined) => import("get-imports-exports").TypeSpecifier | undefined;
    getImportSpecifiersWithNames: (sourceFile: import("ts-morph").SourceFile, names: string[]) => import("ts-morph").ImportSpecifier[];
    getImportsExports: ({ sourceFiles, debug, manualProjectRoot, }: {
        sourceFiles: import("ts-morph").SourceFile[];
        debug?: boolean | undefined;
        manualProjectRoot?: string | undefined;
    }) => Promise<import("get-imports-exports").ImportsAndExports | undefined>;
    getPackageNameFromAbsoluteImport: (absoluteImportName: string) => string | undefined;
    getSymbolTypeDeclarations: (symbol: import("ts-morph").Symbol) => (import("ts-morph").TypeAliasDeclaration | import("ts-morph").InterfaceDeclaration)[];
    getTypeFromImportSpecifierRecursive: (importSpecifier: import("ts-morph").ImportSpecifier, debug?: boolean | undefined, fileStack?: string[] | undefined) => import("get-imports-exports").TypeSpecifier | undefined;
    isAbsoluteImportBuiltin: (absoluteImportName: string) => boolean;
    isImportFromOptionalFile: (tsImport: import("model-types").Creation<import("code-types").TsImport>) => boolean;
    writeResult: (options: {
        operationName: string;
        success: boolean;
        message: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<false | undefined>;
    getOperationBins: (operationFolderPath: string) => Promise<string[]>;
    getOperationPackageName: (operationFolderPath: string) => Promise<string | undefined>;
    getPackageJson: (config: {
        operationFolderPath: string;
    }) => Promise<import("code-types").Operation | null>;
    getPackageSourcePaths: ({ operationBasePath, ignoreIndexFiles, allTypes, }: {
        operationBasePath: string;
        ignoreIndexFiles?: boolean | undefined;
        allTypes?: boolean | undefined;
    }) => Promise<string[]>;
    findAndUpsertTsInterfaces: (config: {
        sourceFile?: import("ts-morph").SourceFile | undefined;
        operationName: string;
        filePath: string;
        projectRoot?: string | undefined;
    }) => Promise<import("model-types").Creation<import("code-types").TsInterface>[] | undefined>;
    findCommentTypes: (commentWithoutFrontmatter: string) => ("title" | "description" | "todo" | "discussion" | "idea" | "later" | "nb" | "section")[];
    generateSchema: (filePath: string, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo[], namedAbsoluteImportNames: string[]) => Promise<import("model-types").Creation<import("code-types").TsInterface>[]>;
    getAllComments: (tsMorphNode: import("ts-morph").VariableDeclaration | import("ts-morph").Statement<import("@ts-morph/common/lib/typescript").Statement> | import("ts-morph").Expression<import("@ts-morph/common/lib/typescript").Expression>, fileContent: string, operationRelativeTypescriptFilePath: string) => import("model-types").Creation<import("code-types").TsComment>[];
    getDbStorageMethod: (config: {
        typeName: string;
        frontmatter: import("matter-types").Frontmatter;
        extensions?: string[] | undefined;
    }) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | undefined;
    getFrontmatterDbStorageMethod: (parameters: import("matter-types").Frontmatter | null) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | null | undefined;
    getFrontmatterFunctionParameters: (frontmatter: import("matter-types").Frontmatter) => {
        runEveryPeriod: "minute" | "5-minutes" | "quarter-hour" | "hour" | "6-hours" | "midnight" | "week" | "month" | "3-months" | "year" | undefined;
        isApiExposed: boolean;
    };
    getIndexId: (filePath: string, name: string) => Promise<import("model-types").TsIndexModelType | undefined>;
    getMaxIndentationDepth: (functionText: string) => number;
    getMinMaxValidation: (keyword: "min" | "max", type: string, value: number) => {};
    getNumberOfLines: (string: string) => number;
    getParamSchema: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>, decorators?: import("ts-morph").Decorator[] | undefined, prop?: import("ts-morph").Symbol | undefined) => import("index-typescript").SimpleJsonSchema | undefined;
    getParametersFromInterfaces: (functionName: string, interfaces: import("model-types").Creation<import("code-types").TsInterface>[]) => import("code-types").FunctionParameter[];
    getPossibleRefs: (interfaces: import("model-types").Creation<import("code-types").TsInterface>[]) => {
        name: string;
        schema: import("json-schema").JSONSchema7;
    }[];
    getSizeSummary: (string: string) => import("code-types").SizeSummary;
    getSpecialExtensionDbStorageMethod: (extensions?: string[] | undefined) => "markdown" | "jsonMultiple" | "jsonSingle" | "keyValueMarkdown" | "csv" | undefined;
    getTsStatements: (sourceFile: import("ts-morph").SourceFile, tsInterfaces: import("model-types").Creation<import("code-types").TsInterface>[], operationRelativeTypescriptFilePath: string, fileContent: string) => Promise<{
        tsFunctions: import("model-types").Creation<import("code-types").TsFunction>[];
        tsVariables: import("model-types").Creation<import("code-types").TsVariable>[];
    }>;
    getTypeInfo: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>, schema?: import("json-schema").JSONSchema7 | undefined) => import("code-types").TypeInfo;
    getValidatedOperationPathParse: (filePath: string) => import("index-typescript").CompleteOperationPathParse | undefined;
    hasDefinition: typeof hasDefinition;
    hasTypescriptFileChanged: (eventName: import("watch-types").WatchEventType, path: string) => boolean;
    indexImportsExportsForFilePath: import("watch-types").ProjectWatcher;
    indexTypescriptFilePath: import("watch-types").ProjectWatcher;
    indexTypescriptFile: (project: import("ts-morph").Project, file: import("index-typescript").CompleteOperationPathParse, projectRoot: string) => Promise<void>;
    indexTypescript: (props: {
        showLogging?: boolean | undefined;
        filePaths: string[];
        manualProjectRoot: string | null;
    }) => Promise<void>;
    isPrimitive: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => boolean;
    makeTsComment: (config: {
        operationRelativeTypescriptFilePath: string;
        commentRange: import("ts-morph").CommentRange;
        statementName: string | undefined;
        rawStatement: string;
        fileContent: string;
    }) => import("model-types").Creation<import("code-types").TsComment>;
    removeTypescriptIndex: import("watch-types").ProjectWatcher;
    schemaToTsInterface: (filePath: string, typeName: string, schema: import("json-schema").JSONSchema7, morphInterfaceInfo: import("index-typescript").MorphInterfaceInfo | undefined) => Promise<import("model-types").Creation<import("code-types").TsInterface> | undefined>;
    tryCreateSchema: (config: import("ts-json-schema-generator").Config) => {
        schema?: import("json-schema").JSONSchema7 | undefined;
        error?: string | undefined;
    };
    typeToSchema: (type: import("ts-morph").Type<import("@ts-morph/common/lib/typescript").Type>) => import("index-typescript").SimpleJsonSchema | undefined;
    determineFileType: (filePath: string) => import("filename-conventions").FileType | null;
    exploreGitRepoFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    exploreMultiple: (searchConfigs: import("k-explore").SearchConfig[]) => Promise<import("markdown-types").TextJson[]>;
    exploreOperationFolders: (config: import("k-explore").BaseConfig) => Promise<string[]>;
    explorePreset: (preset: "git" | "markdown" | "todo" | "packages" | "docs" | "src", config?: import("k-explore").BaseConfig) => Promise<import("markdown-types").TextJson[]>;
    explore: ({ basePath, searchLevel, debug, ...other }: import("k-explore").SearchConfig) => Promise<import("markdown-types").TextJson[]>;
    findAllDocsFolderPaths: (ignoreOperations?: boolean | undefined, ignoreFolders?: string[] | undefined) => Promise<string[]>;
    findAllDotGitFolders: (config: import("k-explore").BaseConfig) => Promise<import("markdown-types").TextJson[]>;
    findAllFoldersWithName: (config: {
        basePath: string;
        folderName: string;
        ignoreOperations?: boolean | undefined;
        ignoreFolders?: string[] | undefined;
    }) => Promise<string[]>;
    findAllPackages: (config?: {
        basePath: string | string[] | undefined;
    } | undefined) => Promise<import("markdown-types").TextJson[]>;
    findAllTodoFolderPaths: (basePath: string, ignoreOperations?: boolean | undefined) => Promise<string[]>;
    findFilesRecursively: (config: Omit<import("k-explore").SearchConfig, "basePath"> & {
        basePath: string;
    }) => Promise<import("markdown-types").TextJson[]>;
    pathArrayIsOperation: (pathArray: string[]) => boolean;
    runTestsForOperation: (operationName: string, writeResultsToIndex?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<boolean | undefined>;
    runTests: (test: import("k-test").Test, operationName?: string | undefined) => Promise<boolean>;
    preIndexLint: ({ operationFolderPath, }: {
        operationFolderPath: string;
    }) => Promise<string[]>;
    sendMail: (mailData: import("mail").MailDataFromOptional | import("mail").MailDataFromOptional[], isMultiple?: boolean | undefined) => Promise<import("@sendgrid/mail").ClientResponse | undefined>;
    addDependantCount: (type: "tsFunction" | "tsVariable" | "tsInterface", imports: import("code-types").TsImport[]) => (item: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsVariable) => Promise<import("markdown-parsings").DependantCountObject>;
    bundleFolderWithMarkdown: (outlineTitle: string, markdownStrings: string[], resultFileName?: string | undefined) => Promise<{
        markdownParse: import("markdown-types").MarkdownParse;
        outlineString: string;
    }>;
    bundleToBookMarkdown: (config: {
        bundleConfig: import("bundle-types").BundleConfig;
        title?: string | undefined;
        coverImagePath?: string | undefined;
        isModulesIncluded?: boolean | undefined;
        manualProjectRoot?: string | undefined;
    }) => Promise<void>;
    bundleToMarkdown: ({ bundleConfigId, includeModules, }: {
        bundleConfigId: string;
        includeModules?: boolean | undefined;
    }) => string;
    createMinimizedSectionMarkdown: (markdown: string, expandTitle: string) => string;
    createMinimizedSection: (markdown: string | undefined, title: string, expandTitle: string) => import("markdown-types").MarkdownParse | undefined;
    deployToVercel: () => void;
    emailMarkdownParse: () => void;
    flattenNestedObject: <T_9>(nestedObject: import("recursive-types").NestedObject<T_9>, isLeaf?: ((content: T_9 | import("recursive-types").NestedObject<T_9> | undefined) => boolean) | undefined) => void;
    generateStaticSite: ({ projectRelativeMdFilePath, singlePage, }: {
        singlePage?: boolean | undefined;
        projectRelativeMdFilePath?: string | undefined;
    }) => void;
    getJsonSchemaSummary: (schema: import("json-schema").JSONSchema7 | undefined, isMarkdown: boolean) => {
        typeDescriptor: string;
        description: string | undefined;
    } | undefined;
    getMarkdownContents: (absoluteFolderPath: string) => Promise<{
        content: string;
        relativePath: string;
    }[] | undefined>;
    getMergedMarkdownOutlineUrl: (title: string) => {
        title: string;
        hashtagPath: string;
    };
    getOperationSummary: (config: {
        operationName: string;
        manualProjectRoot?: string | undefined;
    }) => Promise<import("markdown-parsings").OperationSummary | undefined>;
    getOutline: (markdownParse: import("markdown-types").MarkdownParse) => string | undefined;
    getPublicMarkdownNestedPathObject: (absoluteFolderPath: string) => Promise<import("recursive-types").NestedObject<string>>;
    getTitlesRecursively: (chunk: import("markdown-types").MarkdownChunk) => import("markdown-parsings").NestedTitle[];
    getTypeDescriptorRecursive: (schema: import("json-schema").JSONSchema7, isMarkdown: boolean) => string;
    isConventionFileStatement: (item: import("code-types").TsInterface | import("code-types").TsFunction | import("code-types").TsVariable, conventionFile: "test" | "cli") => boolean;
    isUpperCase: (text: string) => boolean;
    makeOutlineMarkdownString: (title: string, urls: import("markdown-parsings").MergedMarkdownOutlineUrl[]) => string;
    makePropertiesTable: (properties: import("code-types").SimplifiedSchemaProperty[] | undefined) => string;
    markdownChunkToMarkdownStringRecursive: (markdownChunk: import("markdown-types").MarkdownChunk) => string;
    markdownChunksToMarkdownStringRecursive: (markdownChunks: import("markdown-types").MarkdownChunk[]) => string;
    markdownToSayable: ({ markdown, markdownFilePath, }: {
        markdownFilePath: string;
        markdown: import("markdown-types").MarkdownParse;
    }) => import("markdown-parsings").Sayable[];
    mdToPdf: ({ absoluteFilePath, markdown, markdownParse, pdfAbsoluteFilePath, }: {
        absoluteFilePath?: string | undefined;
        markdown?: string | undefined;
        markdownParse?: import("markdown-types").MarkdownParse | undefined;
        pdfAbsoluteFilePath?: string | undefined;
    }) => void;
    mergeMarkdownParse: (markdownParses: import("markdown-types").MarkdownParse[], fileName?: string | undefined) => {
        merged: import("markdown-types").MarkdownParse;
        outline: import("markdown-parsings").MergedMarkdownOutlineUrl[];
    };
    noNewlines: (markdown: string | undefined) => string | undefined;
    operationRadio: () => void;
    operationToMarkdown: (config: {
        operationSummary: import("markdown-parsings").OperationSummary;
        returnType?: "string" | "parse" | "save" | undefined;
        includeDocs?: boolean | undefined;
        includeInfo?: boolean | undefined;
    }) => Promise<string | import("markdown-types").MarkdownParse | undefined>;
    printNestedTitles: (nestedTitles: import("markdown-parsings").NestedTitle[] | undefined, depth?: number | undefined) => string | undefined;
    print: ({ absoluteFilePath }: {
        absoluteFilePath: string;
    }) => void;
    projectToMarkdown: ({ includeTodo, }: {
        includeTodo?: boolean | undefined;
        includeOperationDetails?: boolean | undefined;
    }) => string;
    propertyToTableRow: (property: import("code-types").SimplifiedSchemaProperty) => string;
    sayablesToMp3: (config: {
        destinationAbsoluteFilePath: string;
        sayables: import("markdown-parsings").Sayable[];
    }) => void;
    selectRandomOperation: (baseFolderPath?: string | undefined) => Promise<string>;
    simplifiedSchemaToMarkdownString: (simplifiedSchema: import("code-types").SimplifiedSchema | undefined, name: string | undefined, isRequired: boolean, level?: number | undefined) => string;
    statementItemToMarkdown: (statementItem: import("markdown-parsings").StatementItem) => string | undefined;
    tsFunctionToMarkdownString: (tsFunction: import("code-types").TsFunction) => string;
    tsInterfaceToMarkdownString: (tsInterface: import("code-types").TsInterface) => string;
    tsVariableToMarkdownString: (tsVariable: import("code-types").TsVariable) => string;
    upMarkdownChunkLevelRecursively: (markdownChunks: import("markdown-types").MarkdownChunk[] | undefined) => import("markdown-types").MarkdownChunk[] | undefined;
    minifyBuild: ({ operationName, buildFolderPath, }: {
        operationName?: string | undefined;
        buildFolderPath?: string | undefined;
    }) => Promise<true | undefined>;
    getPrimaryPersona: () => Promise<import("peer-types").Persona>;
    readCsvFileSync: <T_10 extends import("csv-util").CsvItemType>(filePath: string) => T_10[] | null;
    readCsvFile: <T_11 extends import("csv-util").CsvItemType>(filePath: string | undefined) => Promise<T_11[] | null>;
    readJsonFileSync: <T_12>(filePath: string) => T_12 | null;
    readJsonFile: <T_13>(filePath: string | undefined) => Promise<T_13 | null>;
    readProjectRelativeJsonFile: <T_14>(projectRelativePath: string) => Promise<T_14 | null>;
    readKvmdFile: (filePath: string, dbFileLocation: import("model-types").DbFileLocation) => Promise<import("model-types").KeyValueMarkdownParse | null>;
    readMarkdownFileToModel: (absoluteFilePath: string, webOperationName: string, markdownCallToActions: import("markdown-types").MarkdownCallToAction[]) => Promise<import("markdown-types").WebMarkdownFile | null>;
    readMarkdownFile: (filePath: string) => Promise<import("markdown-types").MarkdownParse | null>;
    getFolderTypescriptIndex: ({ basePath, filter, sort, type, filePath, }: {
        filePath?: string | string[] | undefined;
        basePath?: string | string[] | undefined;
        type?: keyof import("code-types").IndexModels | null | undefined;
        filter?: import("read-typescript-file").IndexFilter | undefined;
        sort?: string | undefined;
    }) => Promise<import("code-types").TypescriptIndex | null>;
    readTypescriptFile: (filePath: string) => Promise<import("code-types").TypescriptIndex | null>;
    clearTsDatabase: (operationName: string | undefined) => Promise<void>;
    executeCommandQuietUnlessFail: (config: {
        command: string;
        cwd?: string | undefined;
        description?: string | undefined;
    }) => boolean;
    exitIfProcessDependenciesChanged: (operationName: string, manualProjectRoot?: string | undefined) => Promise<void>;
    generateJsonSchemas: (manualProjectRoot?: string | undefined, operationName?: string | undefined) => Promise<void>;
    getAllDbModels: (manualProjectRoot?: string | undefined, operationName?: string | undefined) => Promise<import("code-types").TsInterface[]>;
    getFileIds: ({ operationFolderPath, pathSuffix, extension, }: {
        operationFolderPath: string;
        extension?: string | string[] | undefined;
        pathSuffix: string;
    }) => Promise<string[]>;
    getIndexFileIds: (operationFolderPath: string) => Promise<string[]>;
    getSrcIds: (operationFolderPath: string) => Promise<string[]>;
    isOperationBuildNeeded: (operationBasePath: string) => boolean;
    isSdkOperation: (operationBasePath: string) => boolean;
    rebuildAllOperations: (isRebuildingProcessUpdated?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<void>;
    rebuildOperation: (config: {
        updatedAt?: number | undefined;
        typerepoManualProjectRoot?: string | undefined;
        operationManualProjectRoot?: string | undefined;
        operationBasePath: string;
        filePaths?: string[] | undefined;
        noUnresolvedRebuilding?: boolean | undefined;
        force?: boolean | undefined;
        debug?: boolean | undefined;
        noExit?: boolean | undefined;
        stack?: string[] | undefined;
    }) => Promise<boolean>;
    shouldSkip: (config: {
        operationBasePath: string;
        debug?: boolean | undefined;
        force?: boolean | undefined;
        operationManualProjectRoot?: string | undefined;
        rebuildUpdatedAt?: number | undefined;
    }) => Promise<boolean>;
    yarnBuild: (operationBasePath: string, config?: {
        rmFirst?: boolean | undefined;
        skipMinify?: boolean | undefined;
    } | undefined) => Promise<boolean>;
    sayDutch: (message: string) => void;
    sayLanguage: (message: string, language: import("say").SayLanguageEnum) => void;
    sayNepali: (message: string) => void;
    saySomething: (input: string | import("say").SayOptions) => Promise<void>;
    textToMp3: (options: Omit<import("say").SayOptions, "outputFilePath">, absoluteOutputFilePath: string) => Promise<string | undefined>;
    addAuthenticationMethod: (method: import("peer-types").AuthenticationMethodMethod, handle: string, shouldBeUnique?: boolean | undefined, credential?: string | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
        authenticationMethod?: import("peer-types").AuthenticationMethod | undefined;
    }>;
    addDeviceAuthenticationMethodConfirm: (deviceId: string, method: import("peer-types").AuthenticationMethodMethod, otp: number) => Promise<{
        isSuccessful: boolean;
        message: string;
    } | undefined>;
    addDeviceAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod, handle: string, credential?: string | undefined) => Promise<{
        isSuccessful?: boolean | undefined;
        message?: string | undefined;
        functionContext?: import("function-context-type").FunctionContext | undefined;
        authenticationMethod?: import("peer-types").AuthenticationMethod | undefined;
    }>;
    addPersonAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod, handle: string, credential?: string | undefined) => Promise<{
        isSuccessful: boolean | undefined;
        message: string;
    }>;
    findAuthenticatedPersonWithHandle: (method: import("peer-types").AuthenticationMethodMethod, handle: string) => Promise<import("peer-types").Person | undefined>;
    findLoggedinPersonsWithContext: (functionContext: import("function-context-type").FunctionContext) => Promise<{
        isSuccessful: boolean;
        persons?: import("peer-types").Person[] | undefined;
        message: string;
    }>;
    getMeWithContext: import("function-server-types").ApiFunction;
    getPublicPerson: import("function-server-types").ApiFunction;
    getPublicPersons: () => Promise<import("peer-types").PublicPerson[]>;
    isPhoneNumber: (phoneNumber: string) => boolean;
    isValidPassword: (password: string) => boolean;
    loginWithContext: (functionContext: import("function-context-type").FunctionContext) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    loginWithPasswordWithContext: import("function-server-types").ApiFunction;
    logoutWithContext: (functionContext: import("function-context-type").FunctionContext, rememberAuthentication?: boolean | undefined) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    removeDeviceAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod) => Promise<{
        isSuccessful: boolean | undefined;
        message: string | undefined;
    }>;
    removePersonAuthenticationMethodWithContext: (functionContext: import("function-context-type").FunctionContext, method: import("peer-types").AuthenticationMethodMethod) => Promise<{
        isSuccessful: boolean | undefined;
        message: string | undefined;
    }>;
    signupWithContext: (functionContext: import("function-context-type").FunctionContext, personData: import("server-login").SignupPersonData) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    signupWithPasswordWithContext: import("function-server-types").ApiFunction;
    switchCurrentPersonWithContext: (functionContext: import("function-context-type").FunctionContext, newCurentPersonId: string) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    updateMeWithContext: (functionContext: import("function-context-type").FunctionContext, details: import("peer-types").PersonProfileDetails) => Promise<{
        isSuccessful: boolean;
        message: string;
    }>;
    setJsonKey: ({ jsonPath, keyLocation, value, debug, }: {
        jsonPath: string;
        keyLocation: string;
        value: string;
        debug?: boolean | undefined;
    }) => Promise<void>;
    setKeyAtLocation: typeof setKeyAtLocation;
    findAudioWithViewsArray: (content: string, index: number, title?: string | undefined) => import("short-markdown-types").AudioWithViews[];
    markdownParseToShortMarkdown: (markdownParse: import("markdown-types").MarkdownParse) => import("short-markdown-types").ShortMarkdown | undefined;
    shortMarkdownToMarkdownParse: () => void;
    augmentShortMarkdown: (shortMarkdown: import("short-markdown-types").ShortMarkdown, projectRelativeFilePath: string) => Promise<import("short-markdown-types").ShortMarkdown | undefined>;
    fetchVoices: (dialogue: import("short-markdown-parser-node").DialogueSentence[]) => Promise<void>;
    generateAugmentedShortMarkdown: (projectRelativeMarkdownFilePath: string) => Promise<import("short-markdown-types").ShortMarkdown | undefined>;
    getOrGenerateShortMarkdown: (projectRelativeMarkdownFilePath: string) => Promise<import("short-markdown-types").ShortMarkdown | null>;
    parseDialogue: (textMarkdown: string) => {
        voice: string | undefined;
        sentence: string;
    }[];
    uberduckGetPath: (uuid: string) => string | undefined;
    uberduckSpeak: (uberduckVoice: string, text: string) => string | undefined;
    voiceCloneDialogue: (textContent: string) => Promise<{
        uuid: string | undefined;
        voice: string | undefined;
        sentence: string;
    }[]>;
    sendSms: (options: import("twilio/lib/rest/api/v2010/account/message").MessageListInstanceCreateOptions) => Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance | undefined>;
    getAllTsMorphSourceFiles: (operationBasePath: string) => Promise<import("ts-morph").SourceFile[] | undefined>;
    getHasGeneric: (type: import("ts-morph").TypeAliasDeclaration | import("ts-morph").InterfaceDeclaration) => boolean;
    getTsMorphProject: (operationFolderPath: string) => import("ts-morph").Project | undefined;
    writeToAssets: (filePath: string, data: any, assetsFileName?: string | undefined, hideLog?: boolean | undefined) => Promise<boolean | undefined>;
    getFileContents: (projectRelativeFilePath: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
        fileContents?: string | undefined;
    }>;
    getFrontmatterSchema: (markdownModelName: string | number | symbol | undefined) => Promise<import("code-types").SimplifiedSchema | undefined>;
    getWriterWebPagesMenu: () => Promise<import("webpage-types").MenuObjectType<import("webpage-types").FilePage>>;
    getWriterWebPages: () => Promise<import("webpage-types").FileWebPage[]>;
    moveFile: (projectRelativePath: string, projectRelativeNewFolderPath: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    newFile: (projectRelativeFilePath: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    newFolder: (projectRelativeFolderBasePath: string, folderName: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    processAssetUpload: (assets: import("asset-type").BackendAsset[]) => Promise<import("asset-type").BackendAsset[]>;
    renameFilename: (projectRelativeFilePath: string, newFilename: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    saveFileContents: (projectRelativeFilePath: string, newContent: string) => Promise<{
        isSuccessful: boolean;
        message?: string | undefined;
    }>;
    useCustomUrlStore: <T_15 extends string | number | boolean | string[] | boolean[] | number[] | undefined>(queryKey: string, config: import("use-url-store").CustomUrlStoreConfig) => [T_15, (newValue: T_15 | undefined) => Promise<boolean>];
    getGetApiUrl: (apiUrl: string | undefined, apiFunctionName: string, query: {
        [name: string]: string | string[] | undefined;
    }) => string | undefined;
    untypedApiFunction: (fnName: string, config: import("api-types").ApiConfig, ...parameters: any) => Promise<import("api-types").ApiReturnType<any>>;
    addToken: (name: string, previousToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    ensureToken: (name: string, newToken?: string | undefined, attachTokenToFilename?: boolean | undefined) => string;
    findAssetParametersRecursively: (object: {
        [key: string]: any;
    }, stack?: string[] | undefined) => import("asset-functions-js").AssetParameter[];
    getAssetDirectlyApiUrl: (projectRelativeAssetPath: string) => string | undefined;
    getConversionInfoFromType: (uploadMimeType: string | undefined) => {
        uploadMimeType: string | undefined;
        targetFormat: string | undefined;
        isUnchecked?: boolean | undefined;
    };
    getExtensionFromAsset: (asset: import("asset-type").Asset) => string | undefined;
    getNameFromRelativePath: (relativePath: string) => string;
    getNameWithTokenFromRelativePath: (relativePath: string, attachTokenToFilename?: boolean | undefined, newToken?: string | undefined) => string;
    getReferencedAssetApiUrl: (apiUrl: string | undefined, projectRelativeReferencingFilePath: string, referencingFileRelativeAssetPath: string, isDownload?: boolean | undefined) => string | undefined;
    getTypeFromUrlOrPath: (urlOrPath: string) => import("asset-type").AssetType;
    readableSize: (sizeBytes: number) => string;
    removeTokenIfPresent: (name: string, attachTokenToFilename?: boolean | undefined) => {
        nameWithoutToken: string;
        token: string | undefined;
    };
    getFunctionExersize: (functionId: string) => Promise<string>;
    stripCommentEnd: (trimmedLine: string) => string;
    stripCommentStart: (trimmedLine: string) => string;
    stripComment: (rawCommentString: string) => string;
    stripSlashes: (trimmedLine: string) => string;
    stripStar: (trimmedLine: string) => string;
    trim: (string: string) => string;
    getCompileErrors: (operationBasePath: string, onlyDependants?: boolean | undefined, manualProjectRoot?: string | undefined) => Promise<import("model-types").Creation<import("code-types").TsBuildError>[]>;
    getTypescriptErrorsFromFiles: typeof getTypescriptErrorsFromFiles;
    writeBuildErrors: (operationBasePath: string, operationManualProjectRoot?: string | undefined, typerepoManualProjectRoot?: string | undefined) => Promise<void>;
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
    getFileTypeFromPath: (path?: string | undefined) => import("filename-conventions").FileType | "other";
    getWriterType: (extension: string | undefined) => import("filename-conventions").WriterType;
    hasSubExtension: (srcRelativeFileId: string, subExtensions: string | string[], includeRootName?: boolean | undefined) => boolean;
    isGeneratedOperationName: (operationName: string) => boolean;
    isGeneratedOperation: (operationBasePath: string) => boolean;
    isIndexableFileId: (fileId: string) => boolean;
    frontmatterParseToString: (frontmatter: import("matter-types").Frontmatter) => string;
    frontmatterToObject: (frontmatter: import("matter-types").Frontmatter, schema: import("code-types").SimplifiedSchema) => import("matter-types").FrontmatterParse;
    getFrontmatterValueString: (value: import("frontmatter-util").FrontmatterValue) => string | null;
    objectToFrontmatter: (parse: import("matter-types").FrontmatterParse, schema: import("code-types").SimplifiedSchema) => import("matter-types").Frontmatter;
    parseFrontmatterString: (value: string) => string;
    quotedOrNot: (string: string) => string;
    stringifyNewlines: (string: string) => string;
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
    findFileNameCaseInsensitive: (folderPath: string, fileName: string) => Promise<string | undefined>;
    getAllFoldersUntilFolder: (folderPath: string) => string[];
    getFileName: (pathString: string) => string;
    getFirstAvailableFilename: (absoluteFilePath: string) => string;
    getFolderSizeObject: {
        (absoluteFolderPath: string, minimumReportSizeMb?: number | undefined, ignoreGenerated?: boolean | undefined): Promise<import("recursive-types").ChildObject<{
            size: number;
            name: string;
        }>[]>;
        isPublic: boolean;
    };
    getFolder: (pathString: string) => string;
    getLastFolder: (pathString: string) => string;
    getOneFolderUpPath: (folderPath: string) => string;
    getPathCombinations: (...chunksSegments: (string | string[])[]) => string[];
    oneUp: (filename: string) => string;
    parseMd: (mdFilePath: string) => import("fs-util").Markdown;
    removeAllExcept: (folderPath: string, config?: {
        ignore?: string[] | undefined;
        typeToRemove?: "folder" | "file" | undefined;
    } | undefined) => Promise<{
        name: string;
        removed: boolean;
    }[]>;
    renameAndCreate: (oldPath: string, newPath: string) => Promise<void>;
    writeJsonToFile: <T_16>(p: string, data: T_16) => Promise<boolean>;
    writeStringToFile: (p: string, data: string) => Promise<boolean>;
    writeToFiles: (fileObject: {
        [absoluteFilePath: string]: any;
    }) => Promise<void>;
    findFolderWhereMatch: <T_17>(fullSourcePath: string, matchFunction: (folderPath: string) => T_17) => {
        folderPath: string;
        matchResult: T_17;
    } | undefined;
    findOperationBasePathWithClassification: (startPath: string) => {
        folderPath: string;
        classification: "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm";
    } | undefined;
    findOperationBasePath: (startPath: string) => string | undefined;
    getAllPackageJsonDependencies: (operation: import("code-types").Operation) => string[];
    getCommonAncestor: (path1: string, path2: string) => string;
    getOperationClassificationObject: () => Promise<import("get-path").OperationClassificationObject>;
    getOperationClassification: (folderPath: string) => "cjs" | "ts" | "esm" | "node-cjs" | "node-esm" | "node-ts" | "server-cjs" | "ui-web" | "ui-app" | "ui-ts" | "ui-cjs" | "ui-esm" | undefined;
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
    getRootPath: (name?: "text" | "operations" | "assets" | "backups" | "bundled" | "cloned" | "distributions" | "db" | undefined, config?: {
        manualProjectRoot?: string | undefined;
    } | undefined) => string | undefined;
    getSrcRelativeFileId: (operationRelativePath: string) => string;
    hasDependency: (operation: import("code-types").Operation, dependency: string) => boolean;
    isBundle: (folderPath?: string | undefined) => boolean;
    isOperation: (absoluteFolderPath: string) => boolean;
    isUiOperation: (tsconfig: import("code-types").TsConfig | null, packageJson: import("code-types").Operation | null) => boolean;
    isWorkspaceRoot: (folderPath: string) => {
        isBundle: boolean;
        isWorkspaceRoot: boolean;
    } | undefined;
    makeRelative: (absolutePath: string, baseFolderPath: string) => string;
    packageCompilesTs: (packageJson: import("code-types").Operation | null) => boolean;
    tsconfigCompilesEsm: (tsconfig: import("code-types").TsConfig) => boolean;
    getTsConfig: (packageFolder: string) => Promise<import("code-types").TsConfig | null>;
    apply: <T_18>(functions: ((input: T_18) => T_18)[], value: T_18) => T_18;
    createEnum: <T_19 extends readonly string[]>(array: T_19) => { [K in T_19[number]]: K; };
    createMappedObject: <T_20 extends {
        [key: string]: any;
    }, U = T_20>(array: T_20[], mapKey: keyof T_20, mapFn?: ((value: T_20, array: T_20[]) => U) | undefined) => import("js-util").MappedObject<U>;
    destructureOptionalObject: <T_21 extends {
        [key: string]: any;
    }>(object: T_21 | null | undefined) => Partial<T_21>;
    findLastIndex: <T_22>(array: T_22[], findFn: (item: T_22) => boolean) => number | undefined;
    getObjectFromParamsString: (paramsString: string) => {
        [x: string]: string;
    };
    getObjectKeysArray: <TObject extends {
        [key: string]: any;
    }>(object: TObject) => Extract<keyof TObject, string>[];
    getParameterAtLocation: <T_23 = any>(object: {
        [key: string]: any;
    }, location: string[]) => T_23;
    getSubsetFromObject: <T_24, K_1 extends readonly (keyof T_24)[]>(object: T_24, keys: K_1) => Pick<T_24, K_1[number]>;
    groupByKey: <T_25 extends {
        [key: string]: any;
    }>(array: T_25[], key: keyof T_25) => {
        [key: string]: T_25[];
    };
    hasAllLetters: (a: string, b: string) => boolean;
    insertAt: <T_26>(array: T_26[], items: T_26 | T_26[], beforeIndex: number) => T_26[];
    isAllTrue: (array: boolean[]) => boolean;
    makeArray: <T_27>(...arrayOrNotArray: (T_27 | T_27[] | undefined)[]) => T_27[];
    mapAsync: <T_28, U_1>(array: T_28[], callback: (value: T_28, index: number, array: T_28[]) => Promise<U_1>) => Promise<Awaited<U_1>[]>;
    mapKeys: (object: {
        [key: string]: any;
    }, mapFn: (key: string) => string | Promise<string> | undefined) => Promise<{
        [x: string]: any;
    }>;
    mapMany: <T_29, U_2>(array: T_29[], mapFn: (item: T_29, index: number, array: T_29[]) => Promise<U_2>, limit?: number | undefined) => Promise<U_2[]>;
    mapValuesSync: <T_30, U_3>(object: {
        [key: string]: T_30;
    }, mapFn: (value: T_30) => U_3) => {
        [x: string]: U_3;
    };
    mergeNestedObject: <T_31 extends import("js-util").O>(object: T_31, otherObject: import("js-util").NestedPartial<T_31> | undefined) => T_31;
    mergeObjectParameters: <T_32>(config: T_32 | undefined, defaults: T_32 | undefined) => Partial<T_32>;
    mergeObjectsArray: <T_33 extends {
        [key: string]: any;
    }>(objectsArray: T_33[]) => T_33;
    mergeObjects: <T_34 extends {
        [key: string]: any;
    }>(...objects: (Partial<T_34> | undefined)[]) => T_34 | undefined;
    noEmptyString: (input: string | undefined) => string | undefined;
    objectMapAsync: <TObject_1 extends {
        [key: string]: any;
    }, TResultValue, TResultObject extends { [key in keyof TObject_1]: TResultValue; }>(object: TObject_1, mapFn: (key: Extract<keyof TObject_1, string>, value: TObject_1[keyof TObject_1]) => Promise<TResultValue>) => Promise<TResultObject>;
    objectMapSync: <TObject_2 extends {
        [key: string]: any;
    }, TMapResult, TResultObject_1 extends { [key_1 in keyof TObject_2]: TMapResult; }>(object: TObject_2, mapFn: (key: keyof TObject_2, value: TObject_2[keyof TObject_2]) => TMapResult) => TResultObject_1;
    objectValuesMap: <T_35 extends {
        [key: string]: T_35[string];
    }, U_4 extends unknown>(object: T_35, mapFn: (key: string, value: T_35[string]) => U_4) => {
        [key: string]: U_4;
    };
    omitUndefinedValues: <T_36 extends {
        [key: string]: any;
    }>(object: T_36) => T_36;
    onlyUnique2: <U_5>(isEqualFn?: ((a: U_5, b: U_5) => boolean) | undefined) => <T_37 extends U_5>(value: T_37, index: number, self: T_37[]) => boolean;
    onlyUnique: typeof onlyUnique;
    pickRandomArrayItem: <T_38>(array: T_38[]) => T_38;
    putIndexAtIndex: <T_39>(array: T_39[], index: number, toIndex: number) => T_39[];
    removeIndexFromArray: <T_40>(array: T_40[], index: number) => T_40[];
    removeOptionalKeysFromObjectStrings: <TObject_3 extends import("js-util").O>(object: TObject_3, keys: string[]) => TObject_3;
    removeOptionalKeysFromObject: <TObject_4 extends import("js-util").O>(object: TObject_4, keys: Exclude<Extract<keyof TObject_4, string>, Exclude<import("js-util").KeysOfType<TObject_4, Exclude<TObject_4[keyof TObject_4], undefined>>, undefined>>[]) => TObject_4;
    replaceLastOccurence: (string: string, searchValue: string, replaceValue: string) => string;
    reverseString: (string: string) => string;
    sumAllKeys: <T_41 extends {
        [key: string]: number | undefined;
    }>(objectArray: T_41[], keys: (keyof T_41)[]) => T_41;
    sumObjectParameters: <TObject_5 extends {
        [key: string]: number;
    }>(object1: TObject_5, object2: TObject_5) => TObject_5;
    sum: (items: number[]) => number;
    takeFirst: <T_42>(arrayOrNot: T_42 | T_42[]) => T_42;
    trimSlashes: (absoluteOrRelativePath: string) => string;
    getSimpleJsonString: (json: import("json-util").Json) => string | undefined;
    flattenMarkdownChunks: (markdownChunks: import("markdown-types").MarkdownChunk[]) => import("markdown-types").MarkdownParagraph[];
    getKvmdItemsRecursively: (chunk: import("markdown-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("model-types").Storing<import("model-types").KeyValueMarkdownModelType>[];
    getParagraphsRecursively: (chunk: import("markdown-types").MarkdownChunk, categoryStackCalculatedUntilNow?: import("model-types").CategoryStack | undefined) => import("markdown-types").MarkdownParagraph[];
    kvmdDataMap: <T_43 extends {
        [key: string]: string | string[] | undefined;
    }>(data: import("model-types").KeyValueMarkdownModelType[], { keyName, valueName, categoryStackCalculatedName, commentName, }: {
        keyName?: string | undefined;
        valueName?: string | undefined;
        commentName?: string | undefined;
        categoryStackCalculatedName?: string | undefined;
    }) => T_43[];
    kvmdDataToString: (kvmdData: import("model-types").KeyValueMarkdownModelType, previous: import("model-types").KeyValueMarkdownModelType | undefined) => string;
    kvmdParseToMarkdownString: (keyValueMarkdownParse: import("model-types").KeyValueMarkdownParse) => string;
    markdownStringToKvmdParse: (kvMdString: string, dbFileLocation: import("model-types").DbFileLocation) => import("model-types").KeyValueMarkdownParse;
    parseKvmdLine: (string: string) => import("model-types").KvmdLine | undefined;
    getCallerFileName: () => string | undefined;
    log: (message: string, config?: import("log").LogConfig | undefined, data?: any) => void;
    parseTitle: (markdown: string) => {
        title: string;
        rest: string;
    };
    isResultOfInterface: <TResult>(result: TResult, jsonSchema: unknown) => boolean;
    makeTest: <TResult_1>(testFunction: (() => Promise<TResult_1>) | (() => TResult_1), isValid?: ((result: TResult_1) => boolean) | undefined) => () => Promise<boolean>;
    chunkToStringRecursively: (chunk: import("markdown-types").MarkdownChunk) => string;
    getChunkParagraphsRecursively: (chunk: import("markdown-types").MarkdownChunk) => string[];
    getImplicitId: (title: string) => string;
    getMarkdownIntro: (markdownParse: import("markdown-types").MarkdownParse | null) => {
        title: string | undefined;
        firstParagraph: string | null;
    };
    getMarkdownParseParagraphs: (markdownParse: import("markdown-types").MarkdownParse) => string[];
    getMarkdownReferencePaths: (markdownString: string) => string[];
    getMarkdownReferencesFromParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownReference[];
    markdownParseToMarkdownStringFromContent: (markdownParse: import("markdown-types").MarkdownParse) => string | undefined;
    markdownParseToMarkdownString: (markdownParse: import("markdown-types").MarkdownParse) => string;
    mdContentParseRecursively: (markdownString: string, level: number) => import("markdown-types").MarkdownChunk[];
    mdToJsonParse: (markdownString: string, fileName?: string | undefined, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("markdown-types").MarkdownParse;
    parseFrontmatterMarkdownString: (markdownWithFrontmatter: string, config?: import("markdown-parse-js").MarkdownParseConfig | undefined) => import("markdown-types").MarkdownParse;
    parseMarkdownParagraph: (paragraph: string) => import("markdown-parse-js").MarkdownParagraphChunk[];
    parseMdToChunks: (markdownString: string, level: number) => import("markdown-types").MarkdownChunk[];
    removeHeaderPrefix: (string: string) => string;
    markdownParseToMarkdownModelType: (markdownParse: import("markdown-types").MarkdownParse | null) => import("model-types").Storing<import("model-types").MarkdownModelType> | null;
    parseMarkdownModelTimestamp: (parameters: import("matter-types").Frontmatter, markdownParse: import("markdown-types").MarkdownParse, parameterName: "createdAt" | "updatedAt" | "deletedAt" | "createdFirstAt" | "openedAt") => number;
    tryParseDate: (dateString: string) => number | undefined;
    findCodespans: (markdownString: string) => string[];
    findEmbeds: (markdownString: string) => import("markdown-types").MarkdownEmbed[];
    findLinks: (markdownString: string) => import("markdown-types").MarkdownLink[];
    flattenMarkdownString: (markdownString: string, findFunction: (token: import("marked").marked.Token) => boolean) => import("marked").marked.Token[];
    flattenMarkedTokenRecursive: (token: import("marked").marked.Token, findFunction: (token: import("marked").marked.Token) => boolean) => import("marked").marked.Token[];
    cleanupTimer: (uniqueId: string) => void;
    generateUniqueId: () => string;
    getNewPerformance: (label: string, uniqueId: string, isNew?: boolean | undefined) => import("measure-performance").PerformanceItem | undefined;
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
    oneByOne: <T_44, U_6>(array: T_44[], callback: (instance: T_44, index: number) => Promise<U_6>) => Promise<U_6[]>;
    getDependenciesSummary: (operationName: string) => Promise<{
        coreDependencies: string[];
        operationDependencies: string[];
        packageDependencies: string[];
    }>;
    getOperationMetaData: (operationBasePath: string) => Promise<import("operation-util").OperationMetaData | undefined>;
    recalculateOperationIndexJson: (operationBasePath: string, manualProjectRoot?: string | undefined) => Promise<void>;
    parsePrimitiveArray: (string: string) => string[];
    parsePrimitiveBoolean: (string: string) => boolean | undefined;
    parsePrimitiveString: (string: string) => string;
    parsePrimitive: (string: string, simplifiedSchema?: import("code-types").SimplifiedSchema | undefined) => import("parse-primitive").PrimitiveResult;
    byteCount: typeof byteCount;
    calculatePathMetaData: (absolutePath: string) => Promise<import("code-types").PathMetaData | undefined>;
    categorizeFiles: ({ basePath, type, ignoreIndexFiles, }: {
        basePath: string | string[];
        ignoreIndexFiles?: boolean | undefined;
        type?: "code" | "data" | "text" | undefined;
    }) => Promise<import("code-types").CategorizedFilePaths>;
    getFolderSummary: (categorizedFiles: import("code-types").CategorizedFilePaths) => Promise<import("code-types").FolderSummary>;
    getPathMainComment: (absolutePath: string) => Promise<import("code-types").TsComment | undefined>;
    sumSizeSummary: (filePaths: string[]) => Promise<import("code-types").SizeSummary>;
    isPlural: (parameterName: string) => boolean;
    isSingular: (parameterName: string) => boolean;
    pluralize: (parameterName: string) => string;
    singularize: (parameterName: string) => string;
    getKeysAtPathFromNestedObject: <T_45 extends {
        [key: string]: any;
    }>(nestedObject: T_45, objectPath: string) => string[];
    getMenuPagesObject: <T_46>(flat: import("webpage-types").WebPage<T_46>[]) => import("webpage-types").MenuObjectType<T_46>;
    makeNestedObjectFromQueryPathObject: <T_47 extends import("recursive-util").QueryPathObject>(objectArray: T_47[], initialValue: import("recursive-types").NestedObject<T_47>) => import("recursive-types").NestedObject<T_47>;
    nestedObjectToChildObject: <T_48 extends {
        [key: string]: any;
    }>(nestedObject: import("recursive-types").NestedObject<T_48>, mapFolderToT: (nestedObject: import("recursive-types").NestedObject<T_48>, key: string) => T_48, stack?: string[] | undefined) => import("recursive-types").ChildObject<T_48>[];
    nestedPathObjectToNestedMenuRecursive: (nestedPathObject: import("recursive-types").NestedPathObject | null, pathStack?: string[] | undefined, config?: {
        target?: "_blank" | undefined;
        getHref?: ((fullPath: string) => string) | undefined;
    } | undefined) => import("nested-menu-types").MenuItemType[] | undefined;
    nestifyQueryPathObjectRecursive: <T_49 extends import("recursive-util").QueryPathObject>(queryPathObjects: T_49[], level?: number | undefined) => import("recursive-util").NestedQueryPathObject<T_49>[];
    queryPathsArrayToNestedPathObject: (queryPaths: string[]) => import("recursive-types").NestedPathObject;
    reduceQueryPathsRecursively: (queryPaths: string[], initialValue: import("recursive-types").NestedPathObject) => import("recursive-types").NestedPathObject;
    bodyFromQueryString: (query?: string | undefined) => import("rest-util").QueryableObject | undefined;
    getFirstQueryStrings: (query: import("rest-util").QueryableObject) => (string | undefined)[];
    getQueryPart: (strings: string[], queryKey: string) => string;
    isValidEntry: ([_, value]: [key: string, value: any]) => boolean;
    toQueryString: (query?: any) => string;
    runChildProcess: (config: {
        operationFolderName: string;
        scriptFileName: string;
        args?: (string | undefined)[] | undefined;
    }) => Promise<(string | null)[] | undefined>;
    findFirstCommentTypes: (strippedFullComment?: string | undefined) => import("code-types").CommentTypeObject;
    getDataParameterNames: (item: import("model-types").AugmentedAnyModelType) => string[];
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
    tryParseJson: <T_50>(text: string, logParseError?: boolean | undefined) => T_50 | null;
    createCodeblockMarkdown: (text: string, language?: string | null | undefined) => string;
    crudPageToWebPages: (pageData: import("webpage-types").CrudPage) => import("webpage-types").WebPage<import("webpage-types").CrudPage>[];
    functionFormPageToWebPage: (pageData: import("webpage-types").FunctionFormPage) => import("webpage-types").WebPage<import("webpage-types").FunctionFormPage>;
};
export declare type SdkType = typeof sdk;
//# sourceMappingURL=sdk-api.d.ts.map