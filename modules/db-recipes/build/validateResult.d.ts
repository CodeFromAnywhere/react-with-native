import { TsFunction } from "code-types";
declare type ValidationResult = {
    isValid: boolean;
    errors?: {
        fieldStack: string[];
        error: string;
    }[];
};
/** wrapper function that takes that data but also the interface of the function and validates the parameters before it executes the function.*/
export declare const validateResult: <TFunctionName extends "trim" | "canExecute" | "canRead" | "unzip" | "zip" | "ask" | "log" | "nodemon" | "pluralize" | "compressAsset" | "deleteReferencedAsset" | "downloadRemoteAsset" | "findAbsoluteAssetPathFromReference" | "findAllProjectMedia" | "getAssetDirectlyGetApi" | "getReferencedAssetGetApi" | "getStorageLocationInfo" | "getTemporaryAssetsFolderPath" | "processAsset" | "processItemAssets" | "removeOldTemporaryAssets" | "serverDownloadReply" | "uploadAssetWithContext" | "folderGetUpdatedAt" | "getExtension" | "getFileOrFolderName" | "getFolderJs" | "getSubExtension" | "isPathRelative" | "removeTrailingSlash" | "withoutExtension" | "getAssociatedMd" | "getAvailableFolderPath" | "getOperationBins" | "getOperationPackageName" | "getPackageJson" | "getPackageSourcePaths" | "isEqualArray" | "renameTemplateFiles" | "renameTemplateToNormalFile" | "renameToTemplateFile" | "setJsonKey" | "setKeyAtLocation" | "initiateWatch" | "makeSubscription" | "pickWatcher" | "watchFoldersChokidar" | "watchFoldersFs" | "watchFolders" | "writeToAssets" | "allOperationsRemoveJsSrc" | "allOperationsToMarkdown" | "clearAllTsDatabases" | "codeAll" | "forAllFiles" | "forAllFolders" | "getAllOperationClassifications" | "gitShipAllRepos" | "mdAllOperations" | "minifyAllOperations" | "publishAllOperations" | "removeAllFiles" | "removeAllFolders" | "removeAll" | "renameAll" | "runScriptEverywhere" | "setScriptEverywhere" | "exploreOperation" | "exploreProject" | "getExplorationType" | "getFileWithExtension" | "getFolderExplorationDetails" | "getFrontmattersMappedObject" | "getInstanceNames" | "getProjectRelativePaths" | "getTodoPages" | "getTodoPaths" | "hasSameProjectPath" | "getAllOperationSourcePaths" | "determineFileType" | "exploreGitRepoFolders" | "exploreMultiple" | "exploreOperationFolders" | "explorePreset" | "explore" | "findAllDocsFolderPaths" | "findAllDotGitFolders" | "findAllFoldersWithName" | "findAllPackages" | "findAllTodoFolderPaths" | "findFilesRecursively" | "pathArrayIsOperation" | "deleteApp" | "listApps" | "logApp" | "logTableObject" | "pm2ConnectDisconnect" | "pm2Connect" | "restartApp" | "startApp" | "stopAllAppsExcept" | "stopApps" | "watchAll" | "exitIfOperationsChange" | "gitCommitAllCron" | "watchOperations" | "brigtnessFull" | "brigtnessZero" | "decreaseBrightness" | "increaseBrightness" | "macosSetup" | "playMusic" | "generateRecurringReminders" | "remindMeAboutNextMinute" | "setRandomTimezone" | "disableDarkMode" | "enableDarkMode" | "setDarkmodeCommand" | "toggleDarkMode" | "disableScreenSleep2" | "disableScreenSleep" | "enableScreenSleep" | "downVolume" | "getVolume" | "setVolume" | "upVolume" | "getOpenableFilePath" | "vscodeOpen" | "loginToDevto" | "publishBlogOnDevTo" | "typeIntoTheField" | "facebookPostOnTheGroup" | "facebookPost" | "facebookTimeLinePost" | "getLatestFacebookPostUrl" | "sendFacebookMessage" | "searchAndDownloadGifs" | "buildQuery" | "errArrayLenZero" | "errFileSize" | "errFileType" | "errInvalidType" | "errTextLenZero" | "errTextOverflow" | "generateArrayFromJson" | "getStringForTranslation" | "launch" | "startTranslation" | "storeResult" | "translateText" | "sendMail" | "publishBlogOnMedium" | "publishBlogOnReddit" | "sendSms" | "getTwitterPostUrl" | "postTweetOnTwitter" | "youtubeSearchAndDownload" | "youtubeSearch" | "youtubeToMp3" | "youtubeToMp4" | "getPort" | "getBundleSummary" | "getDbModelsForBundle" | "createBackup" | "getHumanReadableDate" | "createDistribution" | "filterInterfacesFromOperationNames" | "getDbModelsFromOperations" | "applyDataset" | "calculateBundleDependencies" | "calculateToPath" | "copyCodestories" | "copyDocsAndReadme" | "copyFromRepoToNiche" | "copyOperation" | "copyReadmesBeforeFolderToBundle" | "copyTodosIntoBundle" | "findAndCopyOperations" | "findInherited" | "generateAllBundles" | "generateBundle" | "generateBundles" | "getBundlePaths" | "getCompareFn" | "getDataset" | "getIndirectDependencies" | "getMatchingFilters" | "mergeBundleConfigs" | "syncInformation" | "syncNicheFolder" | "yarnInstall" | "installNodeModules" | "yarnInstallNewDistribution" | "detectLanguage" | "generateSimpleSentence" | "makeAudioCourse" | "sleep" | "createFolder" | "getAllMarkdownFiles" | "getFileInfo" | "getTranslatedWord" | "markdownStoreAndRecord" | "parseMarkdownWordByWord" | "recordMdFile" | "startMarkdownTranslator" | "translatedArrayToKeyValue" | "watchMdFile" | "createWordSimplificationMap" | "findBetterWords" | "getSynonymFrequencyDataset" | "preprocessSynonyms" | "preprocessWordFrequencies" | "speakWordsToLearn" | "createPaymentRequestWithContext" | "createPaymentTransactionWithContext" | "defaultResponse" | "fail" | "getPaymentWebPages" | "succeed" | "controlChatGpt" | "getContextualPromptResults" | "getContextualPrompt" | "getContextualPrompts" | "processChatGptPrompt" | "mapArrayJson" | "mapObjectJson" | "videoToMp3" | "csvItemArrayToCsvString" | "tryParseCsv" | "convertCsvToJson" | "convertXlsToJson" | "compressImage" | "compressImages" | "convertToMp3" | "convertToMp4" | "copyCopyPairs" | "copyReaderStaticAssets" | "findReaderStaticAssets" | "findStaticAssets" | "docToMd" | "docxToMd" | "addCodestoryToSection" | "addModelName" | "findCodestories" | "makeCodespanMappedObject" | "makeCodestory" | "mapChunkRecursively" | "mapMarkdownParseSections" | "writeAllCodestories" | "writeCodespanDetails" | "addDependantCount" | "bundleFolderWithMarkdown" | "bundleToBookMarkdown" | "bundleToMarkdown" | "createMinimizedSectionMarkdown" | "createMinimizedSection" | "deployToVercel" | "emailMarkdownParse" | "flattenNestedObject" | "generateStaticSite" | "getJsonSchemaSummary" | "getMarkdownContents" | "getMergedMarkdownOutlineUrl" | "getOperationSummary" | "getOutline" | "getPublicMarkdownNestedPathObject" | "getTitlesRecursively" | "getTypeDescriptorRecursive" | "isConventionFileStatement" | "isUpperCase" | "makeOutlineMarkdownString" | "makePropertiesTable" | "markdownChunkToMarkdownStringRecursive" | "markdownChunksToMarkdownStringRecursive" | "markdownToSayable" | "mdToPdf" | "mergeMarkdownParse" | "noNewlines" | "operationRadio" | "operationToMarkdown" | "printNestedTitles" | "print" | "projectToMarkdown" | "propertyToTableRow" | "sayablesToMp3" | "selectRandomOperation" | "simplifiedSchemaToMarkdownString" | "statementItemToMarkdown" | "tsFunctionToMarkdownString" | "tsInterfaceToMarkdownString" | "tsVariableToMarkdownString" | "upMarkdownChunkLevelRecursively" | "findAudioWithViewsArray" | "markdownParseToShortMarkdown" | "shortMarkdownToMarkdownParse" | "augmentShortMarkdown" | "generateAugmentedShortMarkdown" | "getOrGenerateShortMarkdown" | "readCsvFileSync" | "readCsvFile" | "readJsonFileSync" | "readJsonFile" | "readProjectRelativeJsonFile" | "readKvmdFile" | "readMarkdownFileToModel" | "readMarkdownFile" | "getFolderTypescriptIndex" | "readTypescriptFile" | "generateCsvInstance" | "generateJsonSingleInstance" | "generateKvmdInstance" | "generateMarkdownInstance" | "generateSlugTestModel" | "getMergedQueryConfig" | "randomName" | "runModelEndToEndTest" | "testOperationModels" | "cacheLookup" | "calculateOperatingSystemBundle" | "deleteDbModel" | "getDatabaseMenu" | "getDbModelMetadata" | "getDbModelNames" | "getDbModel" | "getFunctionIndex" | "getNestedDatabaseMenu" | "getReferencableModelData" | "hasDbRecipes" | "makeSrcRelativeFolder" | "tsInterfaceToDbMenu" | "upsertDbModel" | "validateInput" | "validateResult" | "addDefaultValues" | "alterAny" | "alterCsv" | "alterJsonMultiple" | "alterJsonSingle" | "alterKeyValueMarkdown" | "alterMarkdown" | "augmentItemWithReferencedDataRecursively" | "calculateOperationsObject" | "createDb" | "findParent" | "getAugmentedData" | "getDatabaseFiles" | "getDatabaseRootFolder" | "getDbFileLocation" | "getDbStorageMethodExtension" | "getDefaultLocationPattern" | "getItemModelLocation" | "getLength" | "getLocationPattern" | "getMergedConfigOperationPath" | "getParentSlug" | "getRootFolders" | "getWildcardDbFileLocations__OLD" | "getWildcardDbFileLocations" | "groupByFile" | "makeStoringItem" | "mergeConfigs" | "removeKeyValueMarkdown" | "removeMultiple" | "upsertItems" | "upsertKeyValueMarkdown" | "upsert" | "validateModel" | "validate" | "getFunctionExecutions" | "getFunctionQueryPaths" | "getPublicBundleConfig" | "getSrcRelativeFolderPath" | "getTsFunction" | "getAugmentedWordObject" | "getAugmentedWords" | "getBundleAugmentedWords" | "codestoriesGetPages" | "codestoriesGetStaticPaths" | "codestoriesGetStaticProps" | "addPeerMessage" | "addPeer" | "augmentDevice" | "deviceGetAppsCalculated" | "getAllAppOperations" | "getAugmentedPersons" | "getFirstEmoji" | "getNestedPathObject" | "getPeerMessages" | "getPeerPeople" | "getPeersFromPeersRecursively" | "getPublicFolderNestedPathObjectFromPeer" | "getPublicFolderNestedPathObject" | "getPublicPeers" | "isPortUsed" | "lateFetchPeerMessageSync" | "ping" | "proactivePushAddPeerMessage" | "removePeer" | "sortDevices" | "updatePeer" | "getPrimaryPersona" | "youtubeToPlayItem" | "getDayNumber" | "remindMe" | "getPostableFrontmatterSchema" | "getFileContents" | "getFrontmatterSchema" | "getWriterWebPagesMenu" | "getWriterWebPages" | "moveFile" | "newFile" | "newFolder" | "processAssetUpload" | "renameFilename" | "saveFileContents" | "getLight" | "getLocation" | "fetchWithTimeout" | "isOnline" | "calculateBbqAbility" | "calculateCloudyness" | "calculateCodeFromNatureAbility" | "calculateDresscode" | "calculateKiteability" | "calculateRainyness" | "calculateSunnyness" | "calculateWindyness" | "fetchWeatherStormGlass" | "fetchWeatherTommorowIOApi" | "getCustomWeatherData" | "cleanupTsDatabase" | "shouldDeleteTsModel" | "findAllDependencyOperations" | "findDependantsRecursively" | "findDependants" | "findDependenciesRecursively" | "findMonorepoModules" | "getDependencyObject" | "getDependencyTree" | "generateBunMonopackage" | "getItemNewPath" | "generateNamedIndex" | "generateSimpleIndex" | "isTestFn" | "mapToImportStatement" | "generateDbSdk" | "generateEnvSdks" | "generateFunctionPathsSdk" | "generateFunctionSdks" | "generateInterfacePathsSdk" | "generateOperationsSdk" | "generateSdkApiWatcher" | "generateSdkApi" | "generateSdkOperations" | "getFunctionSdksContent" | "getSdkDescription" | "getSdkFunctionsPerClassification" | "isNonUiOperationBuild" | "newEnvSdk" | "newFunctionKeysSdkOperation" | "newFunctionSdkOperation" | "tsFunctionIsIndexable" | "tsFunctionIsSdkable" | "updateClassifications" | "getImportedDependencies" | "getPackage" | "isAbsoluteImport" | "calculatePackageJsonDependencies" | "findAndWriteImportsExports" | "getDefaultSymbolType" | "getExportSpecifierNames" | "getExportSymbolTypeRecursive" | "getImportSpecifiersWithNames" | "getImportsExports" | "getPackageNameFromAbsoluteImport" | "getSymbolTypeDeclarations" | "getTypeFromImportSpecifierRecursive" | "isAbsoluteImportBuiltin" | "isImportFromOptionalFile" | "writeResult" | "getMissingDependencies" | "findAndUpsertTsInterfaces" | "findCommentTypes" | "generateSchema" | "getAllComments" | "getDbStorageMethod" | "getFrontmatterDbStorageMethod" | "getFrontmatterFunctionParameters" | "getIndexId" | "getMaxIndentationDepth" | "getMinMaxValidation" | "getNumberOfLines" | "getParamSchema" | "getParametersFromInterfaces" | "getPossibleRefs" | "getSpecialExtensionDbStorageMethod" | "getTsStatements" | "getTypeInfo" | "getValidatedOperationPathParse" | "hasDefinition" | "hasTypescriptFileChanged" | "indexImportsExportsForFilePath" | "indexTypescriptFilePath" | "indexTypescriptFile" | "indexTypescript" | "isPrimitive" | "makeTsComment" | "removeTypescriptIndex" | "schemaToTsInterface" | "tryCreateSchema" | "typeToSchema" | "preIndexLint" | "minifyBuild" | "getAvailableOperationName" | "newOperationWithFiles" | "newOperation" | "newTemplate" | "buildPackage" | "installMissingMonorepoDependencies" | "obfucsate" | "testPackage" | "prettierOperation" | "clearTsDatabase" | "executeCommandQuietUnlessFail" | "exitIfProcessDependenciesChanged" | "generateJsonSchemas" | "getAllDbModels" | "getFileIds" | "getIndexFileIds" | "getSrcIds" | "isOperationBuildNeeded" | "isSdkOperation" | "rebuildAllOperations" | "rebuildOperation" | "shouldSkip" | "yarnBuild" | "renameOperation" | "createSimpleTypescriptFile" | "runTestsForOperation" | "runTests" | "getAllTsMorphSourceFiles" | "getHasGeneric" | "getTsMorphProject" | "comparePassword" | "encryptPassword" | "calculateDeviceName" | "executeFunctionWithParameters" | "getAuthorizationInfo" | "isGetEndpoint" | "savePageVisit" | "storeFunctionExecution" | "upsertDevice" | "addAuthenticationMethod" | "addDeviceAuthenticationMethodConfirm" | "addDeviceAuthenticationMethodWithContext" | "addPersonAuthenticationMethodWithContext" | "findAuthenticatedPersonWithHandle" | "findLoggedinPersonsWithContext" | "getMeWithContext" | "getPublicPerson" | "getPublicPersons" | "isPhoneNumber" | "isValidPassword" | "loginWithContext" | "loginWithPasswordWithContext" | "logoutWithContext" | "removeDeviceAuthenticationMethodWithContext" | "removePersonAuthenticationMethodWithContext" | "signupWithContext" | "signupWithPasswordWithContext" | "switchCurrentPersonWithContext" | "updateMeWithContext" | "sayDutch" | "sayLanguage" | "sayNepali" | "saySomething" | "textToMp3" | "askOk" | "getArgumentOrAsk" | "cliVersionUpdates" | "handleVersionUpdates" | "execAsync" | "spawnAsync" | "executeCommand" | "getCommand" | "isCommandPerOs" | "getDbPath" | "rawPolygonToPolygon" | "dev" | "checkAndGetFileUrl" | "elementExists" | "getAllMessages" | "getLatestMessages" | "getSlackChannelMemberList" | "getSlackChannels" | "getSlackMessageFrom" | "getSlackWorkspaces" | "scrapeMessage" | "scrollToTop" | "selectChannel" | "selectWorkSpace" | "sendSlackMessage" | "slackLogin" | "storeAllSlackChannel" | "storeSlackChannelMember" | "getSocialMediaMenu" | "addSocialMediaCredential" | "canBePosted" | "createAllSocialMediaPost" | "createSocialMediaPost" | "devtoCotentAnalyzer" | "facebookContentAnalyzer" | "getSocialMediaCredentials" | "getTodoFilePostables" | "getWebMarkdownFilePostables" | "mediumCotentAnalyzer" | "postSocialMediaPostToDevto" | "postSocialMediaPostToFacebook" | "postSocialMediaPostToMedium" | "postSocialMediaPostToReddit" | "postSocialMediaPostToTwitter" | "redditContentAnalyzer" | "socialMediaPostPlanner" | "startSocialMediaController" | "twitterContentAnalyzer" | "updateSocialMediaPost" | "makeExercises" | "driverLogin" | "driverSignup" | "earthDistance" | "getMyJeep" | "getPublicJeeps" | "updateMyProfile" | "getAllOperations" | "getAllPackagesNames" | "getGithubPersonalAccessToken" | "getGithubRepoLastCommitInfo" | "getRepoNameFromRepositoryUrl" | "initializeGitOrUseExistingAndPull" | "operationGithubPull" | "operationGithubPush" | "pullMultipleOperations" | "pushMultipleOperations" | "readAndWriteToPackageJsonExample" | "updateAllOperationStatus" | "calculateFullCompany" | "companyAttachContributionInformation" | "companyAttachEsgMetricProofStates" | "companyAttachRequirements" | "companyAttachTransparency" | "concatenateItems" | "contributionAddNextContributions" | "getActivities" | "getAverage" | "getCompanies" | "getFinalProducts" | "getFullCompanyData" | "getIngredientProducts" | "getProductValueChainForProduct" | "getProductValueChain" | "getRequiredValueChainData" | "getSustainabilityPlan" | "hasEsgMetricWithStatus" | "requirementAttachProofStates" | "sumEsgMetricProofStates" | "getCompanyRequirementDescription" | "requirementAppliesToCompany" | "parseAddress" | "addToken" | "ensureToken" | "findAssetParametersRecursively" | "getAssetDirectlyApiUrl" | "getConversionInfoFromType" | "getExtensionFromAsset" | "getNameFromRelativePath" | "getNameWithTokenFromRelativePath" | "getReferencedAssetApiUrl" | "getTypeFromUrlOrPath" | "readableSize" | "removeTokenIfPresent" | "getEncoding" | "isBinary" | "isText" | "canAccessSync" | "canAccess" | "canExecuteSync" | "canReadSync" | "canSeeSync" | "canSee" | "canWriteSync" | "canWrite" | "copyAllRelativeFiles" | "findFileNameCaseInsensitive" | "getAllFoldersUntilFolder" | "getFileName" | "getFirstAvailableFilename" | "getFolder" | "getLastFolder" | "getOneFolderUpPath" | "getPathCombinations" | "oneUp" | "parseMd" | "removeAllExcept" | "renameAndCreate" | "writeJsonToFile" | "writeStringToFile" | "writeToFiles" | "getTsConfig" | "byteCount" | "calculatePathMetaData" | "categorizeFiles" | "getFolderSummary" | "getPathMainComment" | "getSizeSummary" | "sumSizeSummary" | "makeFileType" | "findFolderWhereMatch" | "findOperationBasePathWithClassification" | "findOperationBasePath" | "getAllPackageJsonDependencies" | "getCommonAncestor" | "getOperationClassificationObject" | "getOperationClassification" | "getOperationPathParse" | "getOperationPath" | "getOperationRelativePath" | "getPathParse" | "getPathsWithOperations" | "getProjectRoot" | "getRelativeLinkPath" | "getRelativePath" | "getRootPath" | "getSrcRelativeFileId" | "hasDependency" | "isBundle" | "isOperation" | "isUiOperation" | "isWorkspaceRoot" | "makeRelative" | "packageCompilesTs" | "tsconfigCompilesEsm" | "getDependenciesSummary" | "getOperationMetaData" | "recalculateOperationIndexJson" | "getFileTypeFromPath" | "getWriterType" | "hasSubExtension" | "isGeneratedOperationName" | "isGeneratedOperation" | "isIndexableFileId" | "getAssetInputType" | "getParameterContentType" | "isCalculatedParameter" | "isGeneratedParameterName" | "jsonToMdString" | "jsonToSayString" | "getSimpleJsonString" | "flattenMarkdownChunks" | "getKvmdItemsRecursively" | "getParagraphsRecursively" | "kvmdDataMap" | "kvmdDataToString" | "kvmdParseToMarkdownString" | "markdownStringToKvmdParse" | "parseKvmdLine" | "chunkToStringRecursively" | "getChunkParagraphsRecursively" | "getImplicitId" | "getMarkdownIntro" | "getMarkdownParseParagraphs" | "getMarkdownReferencePaths" | "getMarkdownReferencesFromParagraph" | "markdownParseToMarkdownStringFromContent" | "markdownParseToMarkdownString" | "mdContentParseRecursively" | "mdToJsonParse" | "parseFrontmatterMarkdownString" | "parseMarkdownParagraph" | "parseMdToChunks" | "removeHeaderPrefix" | "findCodespans" | "findEmbeds" | "findLinks" | "flattenMarkdownString" | "flattenMarkedTokenRecursive" | "parsePrimitiveArray" | "parsePrimitiveBoolean" | "parsePrimitiveString" | "parsePrimitive" | "tryParseJson" | "bodyFromQueryString" | "getFirstQueryStrings" | "getQueryPart" | "isValidEntry" | "toQueryString" | "findSentenceMatches" | "searchRecursiveObjectArray" | "frontmatterParseToString" | "frontmatterToObject" | "getFrontmatterValueString" | "objectToFrontmatter" | "parseFrontmatterString" | "quotedOrNot" | "stringifyNewlines" | "getFunctionExersize" | "createInvoiceContactMarkdown" | "createInvoiceMarkdown" | "createKeyValueMarkdown" | "money" | "newInvoice" | "printDate" | "markdownParseToMarkdownModelType" | "parseMarkdownModelTimestamp" | "tryParseDate" | "generateId" | "generatePassword" | "generateRandomString" | "generateTime" | "isEmail" | "markdownModelTypeToMarkdownString" | "createUser" | "getBacktickContents" | "isInPeriod" | "isOutOfStock" | "kvmdToCredential" | "upcomingOutgoingFlights" | "whereShouldIgo" | "crudPageToWebPages" | "functionFormPageToWebPage" | "stripCommentEnd" | "stripCommentStart" | "stripComment" | "stripSlashes" | "stripStar" | "getCompileErrors" | "getTypescriptErrorsFromFiles" | "writeBuildErrors" | "findFirstCommentTypes" | "getDataParameterNames" | "getPossibleReferenceParameterNames" | "getProperties" | "getRefLink" | "getReferencableModels" | "getReferenceParameterInfo" | "getSchemaItems" | "getSchema" | "simplifiedSchemaToTypeDefinitionString" | "simplifySchema" | "getSimpleTypescriptFileString" | "jsonToString" | "parseRawSimpleTypescriptFile" | "isResultOfInterface" | "makeTest" | "getGetApiUrl" | "untypedApiFunction" | "makeArraysGetEndpoint" | "makeGetEndpoint" | "objectStringToJson" | "parseIfJson" | "parsePrimitiveJson" | "stringToJson" | "getFullPath" | "getLastPathsChunk" | "usePath" | "createCodeblockMarkdown" | "useCustomUrlStore" | "getKeysAtPathFromNestedObject" | "getMenuPagesObject" | "makeNestedObjectFromQueryPathObject" | "nestedObjectToChildObject" | "nestedPathObjectToNestedMenuRecursive" | "nestifyQueryPathObjectRecursive" | "queryPathsArrayToNestedPathObject" | "reduceQueryPathsRecursively" | "camelCase" | "capitalCase" | "capitaliseFirstLetter" | "convertCase" | "getDelimiter" | "humanCase" | "kebabCase" | "lowerCaseArray" | "pascalCase" | "slugify" | "snakeCase" | "apply" | "createEnum" | "createMappedObject" | "destructureOptionalObject" | "findLastIndex" | "getObjectFromParamsString" | "getObjectKeysArray" | "getParameterAtLocation" | "getSubsetFromObject" | "groupByKey" | "hasAllLetters" | "insertAt" | "isAllTrue" | "makeArray" | "mapAsync" | "mapKeys" | "mapMany" | "mapValuesSync" | "mergeNestedObject" | "mergeObjectParameters" | "mergeObjectsArray" | "mergeObjects" | "noEmptyString" | "objectMapAsync" | "objectMapSync" | "objectValuesMap" | "omitUndefinedValues" | "onlyUnique2" | "onlyUnique" | "pickRandomArrayItem" | "putIndexAtIndex" | "removeIndexFromArray" | "removeOptionalKeysFromObjectStrings" | "removeOptionalKeysFromObject" | "replaceLastOccurence" | "reverseString" | "sumAllKeys" | "sumObjectParameters" | "sum" | "takeFirst" | "trimSlashes" | "getCallerFileName" | "parseTitle" | "cleanupTimer" | "generateUniqueId" | "getNewPerformance" | "oneByOne" | "isPlural" | "isSingular" | "singularize" | "runChildProcess" | "clickOnSpanTag" | "facebookLogin" | "foundOrNotXpath" | "foundOrNot" | "getChromeExecutablePath" | "gmailLogin" | "logConsoleIfDebug" | "retryClickAndWaitSelector" | "retryWaitSelector" | "setInnerHtml" | "setInputValue" | "trueClick" | "twitterLogin" | "typeInTheInputField" | "typeOnTheTargetWithXpathSelector" | "waitMilliseconds">(functionName: TFunctionName, result: any, tsFunction: TsFunction) => ValidationResult;
export {};
//# sourceMappingURL=validateResult.d.ts.map