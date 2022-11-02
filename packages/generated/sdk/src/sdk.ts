import { getAugmentedWordObject } from "augmented-words";
import { getAugmentedWords } from "augmented-words";
import { getBundleAugmentedWords } from "augmented-words";
import { csvItemArrayToCsvString } from "csv-util";
import { tryParseCsv } from "csv-util";
import { generateCsvInstance } from "database";
import { generateJsonSingleInstance } from "database";
import { generateKvmdInstance } from "database";
import { generateMarkdownInstance } from "database";
import { generateSlugTestModel } from "database";
import { getMergedQueryConfig } from "database";
import { randomName } from "database";
import { runModelEndToEndTest } from "database";
import { testOperationModels } from "database";
import { addDefaultValues } from "fs-orm";
import { alterAny } from "fs-orm";
import { alterCsv } from "fs-orm";
import { alterJsonMultiple } from "fs-orm";
import { alterJsonSingle } from "fs-orm";
import { alterKeyValueMarkdown } from "fs-orm";
import { alterMarkdown } from "fs-orm";
import { augmentItemWithReferencedDataRecursively } from "fs-orm";
import { calculateOperationsObject } from "fs-orm";
import { createDb } from "fs-orm";
import { findParent } from "fs-orm";
import { getAugmentedData } from "fs-orm";
import { getDatabaseFiles } from "fs-orm";
import { getDatabaseRootFolder } from "fs-orm";
import { getDbFileLocation } from "fs-orm";
import { getDbStorageMethodExtension } from "fs-orm";
import { getItemModelLocation } from "fs-orm";
import { getLength } from "fs-orm";
import { getLocationPattern } from "fs-orm";
import { getMergedConfigOperationPath } from "fs-orm";
import { getParentSlug } from "fs-orm";
import { getRootFolders } from "fs-orm";
import { getWildcardDbFileLocations__OLD } from "fs-orm";
import { getWildcardDbFileLocations } from "fs-orm";
import { groupByFile } from "fs-orm";
import { makeStoringItem } from "fs-orm";
import { mergeConfigs } from "fs-orm";
import { removeKeyValueMarkdown } from "fs-orm";
import { removeMultiple } from "fs-orm";
import { upsertItems } from "fs-orm";
import { upsertKeyValueMarkdown } from "fs-orm";
import { upsert } from "fs-orm";
import { getExtension } from "fs-util-js";
import { getFolderJs } from "fs-util-js";
import { getSubExtension } from "fs-util-js";
import { isPathRelative } from "fs-util-js";
import { removeTrailingSlash } from "fs-util-js";
import { withoutExtension } from "fs-util-js";
import { determineFileType } from "k-explore";
import { exploreGitRepoFolders } from "k-explore";
import { exploreMultiple } from "k-explore";
import { exploreOperationFolders } from "k-explore";
import { explorePreset } from "k-explore";
import { explore } from "k-explore";
import { findAllDocsFolderPaths } from "k-explore";
import { findAllDotGitFolders } from "k-explore";
import { findAllFoldersWithName } from "k-explore";
import { findAllPackages } from "k-explore";
import { findAllTodoFolderPaths } from "k-explore";
import { pathArrayIsOperation } from "k-explore";
import { copyStaticAssets } from "markdown-reader-functions";
import { getAllMarkdownReaderPages } from "markdown-reader-functions";
import { getFolderExplorationInfo } from "markdown-reader-functions";
import { getMarkdownModelPages } from "markdown-reader-functions";
import { getMarkdownPageInfo } from "markdown-reader-functions";
import { getMarkdownReaderPages } from "markdown-reader-functions";
import { getMarkdownReaderQueryPaths } from "markdown-reader-functions";
import { getOperationPages } from "markdown-reader-functions";
import { getPublicMarkdownFilePaths } from "markdown-reader-functions";
import { getTodoPages } from "markdown-reader-functions";
import { markdownReaderGetStaticPaths } from "markdown-reader-functions";
import { markdownReaderGetStaticProps } from "markdown-reader-functions";
import { removeExtensionsFromPath } from "markdown-reader-functions";
import { removeNumberPrefix } from "markdown-reader-functions";
import { shouldExposeMarkdownFile } from "markdown-reader-functions";
import { getQueryPath } from "markdown-reader-functions-js";
import { readCsvFileSync } from "read-csv-file";
import { readCsvFile } from "read-csv-file";
import { readJsonFileSync } from "read-json-file";
import { readJsonFile } from "read-json-file";
import { readKvmdFile } from "read-kvmd-file";
import { readMarkdownFileToModel } from "read-markdown-file";
import { readMarkdownFile } from "read-markdown-file";
import { writeToAssets } from "write-to-assets";
import { useCustomUrlStore } from "use-url-store";
import { getGetApiUrl } from "api";
import { untypedApiFunction } from "api";
import { addToken } from "asset-functions-js";
import { ensureToken } from "asset-functions-js";
import { getAssetDirectlyApiUrl } from "asset-functions-js";
import { getExtensionFromAsset } from "asset-functions-js";
import { getNameFromRelativePath } from "asset-functions-js";
import { getNameWithTokenFromRelativePath } from "asset-functions-js";
import { getPreferredExtensionFromType } from "asset-functions-js";
import { getReferencedAssetApiUrl } from "asset-functions-js";
import { getTypeFromRelativePath } from "asset-functions-js";
import { readableSize } from "asset-functions-js";
import { removeTokenIfPresent } from "asset-functions-js";
import { ClickableIcon } from "clickable-icon";
import { markdownParseToMarkdownModelType } from "code-types";
import { parseMarkdownModelTimestamp } from "code-types";
import { tryParseDate } from "code-types";
import { camelCase } from "convert-case";
import { capitalCase } from "convert-case";
import { capitaliseFirstLetter } from "convert-case";
import { convertCase } from "convert-case";
import { getDelimiter } from "convert-case";
import { humanCase } from "convert-case";
import { kebabCase } from "convert-case";
import { lowerCaseArray } from "convert-case";
import { pascalCase } from "convert-case";
import { slugify } from "convert-case";
import { snakeCase } from "convert-case";
import { getWriterType } from "filename-conventions";
import { hasSubExtension } from "filename-conventions";
import { isGeneratedOperationName } from "filename-conventions";
import { isGeneratedOperation } from "filename-conventions";
import { isIndexableFileId } from "filename-conventions";
import { canAccessSync } from "fs-util";
import { canAccess } from "fs-util";
import { canExecuteSync } from "fs-util";
import { canExecute } from "fs-util";
import { canReadSync } from "fs-util";
import { canRead } from "fs-util";
import { canSeeSync } from "fs-util";
import { canSee } from "fs-util";
import { canWriteSync } from "fs-util";
import { canWrite } from "fs-util";
import { copyAllRelativeFiles } from "fs-util";
import { findAllMd } from "fs-util";
import { findFileNameCaseInsensitive } from "fs-util";
import { findFilesRecursively } from "fs-util";
import { findSensibleFiles } from "fs-util";
import { getAllFoldersUntilFolder } from "fs-util";
import { getFileName } from "fs-util";
import { getFirstAvailableFilename } from "fs-util";
import { getFolder } from "fs-util";
import { getLastFolder } from "fs-util";
import { getOneFolderUpPath } from "fs-util";
import { getPathCombinations } from "fs-util";
import { importFromFiles } from "fs-util";
import { isArrayGuard } from "fs-util";
import { oneUp } from "fs-util";
import { parseMd } from "fs-util";
import { removeAllExcept } from "fs-util";
import { renameAndCreate } from "fs-util";
import { writeJsonToFile } from "fs-util";
import { writeStringToFile } from "fs-util";
import { writeToFiles } from "fs-util";
import { findFolderWhereMatch } from "get-path";
import { findOperationBasePathWithClassification } from "get-path";
import { findOperationBasePath } from "get-path";
import { getAllPackageJsonDependencies } from "get-path";
import { getCommonAncestor } from "get-path";
import { getOperationClassification } from "get-path";
import { getOperationPathParse } from "get-path";
import { getOperationPath } from "get-path";
import { getOperationRelativePath } from "get-path";
import { getPathParse } from "get-path";
import { getPathsWithOperations } from "get-path";
import { getProjectRoot } from "get-path";
import { getRelativeLinkPath } from "get-path";
import { getRelativePath } from "get-path";
import { getRootPath } from "get-path";
import { getSrcRelativeFileId } from "get-path";
import { hasDependency } from "get-path";
import { isOperation } from "get-path";
import { isSensibleProject } from "get-path";
import { isWorkspaceRoot } from "get-path";
import { makeRelative } from "get-path";
import { apply } from "js-util";
import { createEnum } from "js-util";
import { createMappedObject } from "js-util";
import { findLastIndex } from "js-util";
import { getObjectFromParamsString } from "js-util";
import { getObjectKeysArray } from "js-util";
import { getParameterAtLocation } from "js-util";
import { getSubsetFromObject } from "js-util";
import { groupByKey } from "js-util";
import { insertAt } from "js-util";
import { isAllTrue } from "js-util";
import { makeArray } from "js-util";
import { mapAsync } from "js-util";
import { mapKeys } from "js-util";
import { mapMany } from "js-util";
import { mapValuesSync } from "js-util";
import { mergeObjectParameters } from "js-util";
import { mergeObjectsArray } from "js-util";
import { mergeObjects } from "js-util";
import { objectMapAsync } from "js-util";
import { objectMapSync } from "js-util";
import { objectValuesMap } from "js-util";
import { omitUndefinedValues } from "js-util";
import { onlyUnique2 } from "js-util";
import { onlyUnique } from "js-util";
import { removeIndexFromArray } from "js-util";
import { replaceLastOccurence } from "js-util";
import { reverseString } from "js-util";
import { sumAllKeys } from "js-util";
import { sumObjectParameters } from "js-util";
import { sum } from "js-util";
import { takeFirst } from "js-util";
import { trimSlashes } from "js-util";
import { flattenMarkdownChunks } from "key-value-markdown-js";
import { getKvmdItemsRecursively } from "key-value-markdown-js";
import { getParagraphsRecursively } from "key-value-markdown-js";
import { kvmdDataMap } from "key-value-markdown-js";
import { kvmdDataToString } from "key-value-markdown-js";
import { kvmdParseToMarkdownString } from "key-value-markdown-js";
import { markdownStringToKvmdParse } from "key-value-markdown-js";
import { parseKvmdLine } from "key-value-markdown-js";
import { getCallerFileName } from "log";
import { log } from "log";
import { parseTitle } from "log";
import { isResultOfInterface } from "make-test";
import { makeTest } from "make-test";
import { getChunkParagraphsRecursively } from "markdown-parse-js";
import { getImplicitId } from "markdown-parse-js";
import { getMarkdownIntro } from "markdown-parse-js";
import { getMarkdownParseParagraphs } from "markdown-parse-js";
import { getMarkdownReferencePaths } from "markdown-parse-js";
import { getMarkdownReferencesFromParagraph } from "markdown-parse-js";
import { markdownParseToMarkdownString } from "markdown-parse-js";
import { mdContentParseRecursively } from "markdown-parse-js";
import { mdToJsonParse } from "markdown-parse-js";
import { parseFrontmatterMarkdownString } from "markdown-parse-js";
import { parseMarkdownParagraph } from "markdown-parse-js";
import { parseMdToChunks } from "markdown-parse-js";
import { removeHeaderPrefix } from "markdown-parse-js";
import { frontmatterParseToString } from "matter-types";
import { getFrontmatterValueString } from "matter-types";
import { quotedOrNot } from "matter-types";
import { stringifyNewlines } from "matter-types";
import { generateId } from "model-types";
import { generatePassword } from "model-types";
import { generateRandomString } from "model-types";
import { generateTime } from "model-types";
import { isEmail } from "model-types";
import { markdownModelTypeToMarkdownString } from "model-types";
import { getAssetInputType } from "name-conventions";
import { getParameterContentType } from "name-conventions";
import { isCalculatedParameter } from "name-conventions";
import { isGeneratedParameterName } from "name-conventions";
import { ALink } from "next-a-link";
import { parsePrimitiveArray } from "parse-primitive";
import { parsePrimitiveBoolean } from "parse-primitive";
import { parsePrimitiveString } from "parse-primitive";
import { parsePrimitive } from "parse-primitive";
import { isPlural } from "pluralize";
import { isSingular } from "pluralize";
import { pluralize } from "pluralize";
import { singularize } from "pluralize";
import { bodyFromQueryString } from "rest-util";
import { getFirstQueryStrings } from "rest-util";
import { getQueryPart } from "rest-util";
import { toQueryString } from "rest-util";
import { findFirstCommentTypes } from "schema-util";
import { getPossibleReferenceParameterNames } from "schema-util";
import { getProperties } from "schema-util";
import { getRefLink } from "schema-util";
import { getReferencableModels } from "schema-util";
import { getReferenceParameterInfo } from "schema-util";
import { getSchemaItems } from "schema-util";
import { getSchema } from "schema-util";
import { simplifiedSchemaToTypeDefinitionString } from "schema-util";
import { simplifySchema } from "schema-util";
import { objectStringToJson } from "string-to-json";
import { parseIfJson } from "string-to-json";
import { parsePrimitiveJson } from "string-to-json";
import { stringToJson } from "string-to-json";
import { tryParseJson } from "try-parse-json";
import { createCodeblockMarkdown } from "ui-util";

export const sdk = { getAugmentedWordObject,
getAugmentedWords,
getBundleAugmentedWords,
csvItemArrayToCsvString,
tryParseCsv,
generateCsvInstance,
generateJsonSingleInstance,
generateKvmdInstance,
generateMarkdownInstance,
generateSlugTestModel,
getMergedQueryConfig,
randomName,
runModelEndToEndTest,
testOperationModels,
addDefaultValues,
alterAny,
alterCsv,
alterJsonMultiple,
alterJsonSingle,
alterKeyValueMarkdown,
alterMarkdown,
augmentItemWithReferencedDataRecursively,
calculateOperationsObject,
createDb,
findParent,
getAugmentedData,
getDatabaseFiles,
getDatabaseRootFolder,
getDbFileLocation,
getDbStorageMethodExtension,
getItemModelLocation,
getLength,
getLocationPattern,
getMergedConfigOperationPath,
getParentSlug,
getRootFolders,
getWildcardDbFileLocations__OLD,
getWildcardDbFileLocations,
groupByFile,
makeStoringItem,
mergeConfigs,
removeKeyValueMarkdown,
removeMultiple,
upsertItems,
upsertKeyValueMarkdown,
upsert,
getExtension,
getFolderJs,
getSubExtension,
isPathRelative,
removeTrailingSlash,
withoutExtension,
determineFileType,
exploreGitRepoFolders,
exploreMultiple,
exploreOperationFolders,
explorePreset,
explore,
findAllDocsFolderPaths,
findAllDotGitFolders,
findAllFoldersWithName,
findAllPackages,
findAllTodoFolderPaths,
pathArrayIsOperation,
copyStaticAssets,
getAllMarkdownReaderPages,
getFolderExplorationInfo,
getMarkdownModelPages,
getMarkdownPageInfo,
getMarkdownReaderPages,
getMarkdownReaderQueryPaths,
getOperationPages,
getPublicMarkdownFilePaths,
getTodoPages,
markdownReaderGetStaticPaths,
markdownReaderGetStaticProps,
removeExtensionsFromPath,
removeNumberPrefix,
shouldExposeMarkdownFile,
getQueryPath,
readCsvFileSync,
readCsvFile,
readJsonFileSync,
readJsonFile,
readKvmdFile,
readMarkdownFileToModel,
readMarkdownFile,
writeToAssets,
useCustomUrlStore,
getGetApiUrl,
untypedApiFunction,
addToken,
ensureToken,
getAssetDirectlyApiUrl,
getExtensionFromAsset,
getNameFromRelativePath,
getNameWithTokenFromRelativePath,
getPreferredExtensionFromType,
getReferencedAssetApiUrl,
getTypeFromRelativePath,
readableSize,
removeTokenIfPresent,
ClickableIcon,
markdownParseToMarkdownModelType,
parseMarkdownModelTimestamp,
tryParseDate,
camelCase,
capitalCase,
capitaliseFirstLetter,
convertCase,
getDelimiter,
humanCase,
kebabCase,
lowerCaseArray,
pascalCase,
slugify,
snakeCase,
getWriterType,
hasSubExtension,
isGeneratedOperationName,
isGeneratedOperation,
isIndexableFileId,
canAccessSync,
canAccess,
canExecuteSync,
canExecute,
canReadSync,
canRead,
canSeeSync,
canSee,
canWriteSync,
canWrite,
copyAllRelativeFiles,
findAllMd,
findFileNameCaseInsensitive,
findFilesRecursively,
findSensibleFiles,
getAllFoldersUntilFolder,
getFileName,
getFirstAvailableFilename,
getFolder,
getLastFolder,
getOneFolderUpPath,
getPathCombinations,
importFromFiles,
isArrayGuard,
oneUp,
parseMd,
removeAllExcept,
renameAndCreate,
writeJsonToFile,
writeStringToFile,
writeToFiles,
findFolderWhereMatch,
findOperationBasePathWithClassification,
findOperationBasePath,
getAllPackageJsonDependencies,
getCommonAncestor,
getOperationClassification,
getOperationPathParse,
getOperationPath,
getOperationRelativePath,
getPathParse,
getPathsWithOperations,
getProjectRoot,
getRelativeLinkPath,
getRelativePath,
getRootPath,
getSrcRelativeFileId,
hasDependency,
isOperation,
isSensibleProject,
isWorkspaceRoot,
makeRelative,
apply,
createEnum,
createMappedObject,
findLastIndex,
getObjectFromParamsString,
getObjectKeysArray,
getParameterAtLocation,
getSubsetFromObject,
groupByKey,
insertAt,
isAllTrue,
makeArray,
mapAsync,
mapKeys,
mapMany,
mapValuesSync,
mergeObjectParameters,
mergeObjectsArray,
mergeObjects,
objectMapAsync,
objectMapSync,
objectValuesMap,
omitUndefinedValues,
onlyUnique2,
onlyUnique,
removeIndexFromArray,
replaceLastOccurence,
reverseString,
sumAllKeys,
sumObjectParameters,
sum,
takeFirst,
trimSlashes,
flattenMarkdownChunks,
getKvmdItemsRecursively,
getParagraphsRecursively,
kvmdDataMap,
kvmdDataToString,
kvmdParseToMarkdownString,
markdownStringToKvmdParse,
parseKvmdLine,
getCallerFileName,
log,
parseTitle,
isResultOfInterface,
makeTest,
getChunkParagraphsRecursively,
getImplicitId,
getMarkdownIntro,
getMarkdownParseParagraphs,
getMarkdownReferencePaths,
getMarkdownReferencesFromParagraph,
markdownParseToMarkdownString,
mdContentParseRecursively,
mdToJsonParse,
parseFrontmatterMarkdownString,
parseMarkdownParagraph,
parseMdToChunks,
removeHeaderPrefix,
frontmatterParseToString,
getFrontmatterValueString,
quotedOrNot,
stringifyNewlines,
generateId,
generatePassword,
generateRandomString,
generateTime,
isEmail,
markdownModelTypeToMarkdownString,
getAssetInputType,
getParameterContentType,
isCalculatedParameter,
isGeneratedParameterName,
ALink,
parsePrimitiveArray,
parsePrimitiveBoolean,
parsePrimitiveString,
parsePrimitive,
isPlural,
isSingular,
pluralize,
singularize,
bodyFromQueryString,
getFirstQueryStrings,
getQueryPart,
toQueryString,
findFirstCommentTypes,
getPossibleReferenceParameterNames,
getProperties,
getRefLink,
getReferencableModels,
getReferenceParameterInfo,
getSchemaItems,
getSchema,
simplifiedSchemaToTypeDefinitionString,
simplifySchema,
objectStringToJson,
parseIfJson,
parsePrimitiveJson,
stringToJson,
tryParseJson,
createCodeblockMarkdown};

export type SdkType = typeof sdk;