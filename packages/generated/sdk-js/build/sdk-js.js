"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sdk=void 0;var use_url_store_1=require("use-url-store"),api_1=require("api"),api_2=require("api"),asset_functions_js_1=require("asset-functions-js"),asset_functions_js_2=require("asset-functions-js"),asset_functions_js_3=require("asset-functions-js"),asset_functions_js_4=require("asset-functions-js"),asset_functions_js_5=require("asset-functions-js"),asset_functions_js_6=require("asset-functions-js"),asset_functions_js_7=require("asset-functions-js"),asset_functions_js_8=require("asset-functions-js"),asset_functions_js_9=require("asset-functions-js"),asset_functions_js_10=require("asset-functions-js"),asset_functions_js_11=require("asset-functions-js"),asset_input_1=require("asset-input"),asset_input_2=require("asset-input"),asset_input_3=require("asset-input"),asset_input_4=require("asset-input"),asset_input_5=require("asset-input"),asset_input_6=require("asset-input"),asset_input_7=require("asset-input"),asset_input_8=require("asset-input"),asset_input_9=require("asset-input"),asset_view_1=require("asset-view"),asset_view_2=require("asset-view"),big_button_1=require("big-button"),breadcrumbs_1=require("breadcrumbs"),breadcrumbs_2=require("breadcrumbs"),clickable_icon_1=require("clickable-icon"),code_types_1=require("code-types"),code_types_2=require("code-types"),code_types_3=require("code-types"),code_types_4=require("code-types"),convert_case_1=require("convert-case"),convert_case_2=require("convert-case"),convert_case_3=require("convert-case"),convert_case_4=require("convert-case"),convert_case_5=require("convert-case"),convert_case_6=require("convert-case"),convert_case_7=require("convert-case"),convert_case_8=require("convert-case"),convert_case_9=require("convert-case"),convert_case_10=require("convert-case"),convert_case_11=require("convert-case"),fancy_loader_1=require("fancy-loader"),filename_conventions_1=require("filename-conventions"),filename_conventions_2=require("filename-conventions"),filename_conventions_3=require("filename-conventions"),filename_conventions_4=require("filename-conventions"),filename_conventions_5=require("filename-conventions"),fs_util_1=require("fs-util"),fs_util_2=require("fs-util"),fs_util_3=require("fs-util"),fs_util_4=require("fs-util"),fs_util_5=require("fs-util"),fs_util_6=require("fs-util"),fs_util_7=require("fs-util"),fs_util_8=require("fs-util"),fs_util_9=require("fs-util"),fs_util_10=require("fs-util"),fs_util_11=require("fs-util"),fs_util_12=require("fs-util"),fs_util_13=require("fs-util"),fs_util_14=require("fs-util"),fs_util_15=require("fs-util"),fs_util_16=require("fs-util"),fs_util_17=require("fs-util"),fs_util_18=require("fs-util"),fs_util_19=require("fs-util"),fs_util_20=require("fs-util"),fs_util_21=require("fs-util"),fs_util_22=require("fs-util"),fs_util_23=require("fs-util"),fs_util_24=require("fs-util"),fs_util_25=require("fs-util"),fs_util_26=require("fs-util"),fs_util_27=require("fs-util"),fs_util_28=require("fs-util"),fs_util_29=require("fs-util"),fs_util_30=require("fs-util"),fs_util_31=require("fs-util"),get_path_1=require("get-path"),get_path_2=require("get-path"),get_path_3=require("get-path"),get_path_4=require("get-path"),get_path_5=require("get-path"),get_path_6=require("get-path"),get_path_7=require("get-path"),get_path_8=require("get-path"),get_path_9=require("get-path"),get_path_10=require("get-path"),get_path_11=require("get-path"),get_path_12=require("get-path"),get_path_13=require("get-path"),get_path_14=require("get-path"),get_path_15=require("get-path"),get_path_16=require("get-path"),get_path_17=require("get-path"),get_path_18=require("get-path"),get_path_19=require("get-path"),get_path_20=require("get-path"),get_path_21=require("get-path"),hotkeys_1=require("hotkeys"),hotkeys_2=require("hotkeys"),hotkeys_3=require("hotkeys"),hotkeys_4=require("hotkeys"),hotkeys_5=require("hotkeys"),hotkeys_6=require("hotkeys"),hotkeys_7=require("hotkeys"),hotkeys_8=require("hotkeys"),hotkeys_9=require("hotkeys"),hotkeys_10=require("hotkeys"),js_util_1=require("js-util"),js_util_2=require("js-util"),js_util_3=require("js-util"),js_util_4=require("js-util"),js_util_5=require("js-util"),js_util_6=require("js-util"),js_util_7=require("js-util"),js_util_8=require("js-util"),js_util_9=require("js-util"),js_util_10=require("js-util"),js_util_11=require("js-util"),js_util_12=require("js-util"),js_util_13=require("js-util"),js_util_14=require("js-util"),js_util_15=require("js-util"),js_util_16=require("js-util"),js_util_17=require("js-util"),js_util_18=require("js-util"),js_util_19=require("js-util"),js_util_20=require("js-util"),js_util_21=require("js-util"),js_util_22=require("js-util"),js_util_23=require("js-util"),js_util_24=require("js-util"),js_util_25=require("js-util"),js_util_26=require("js-util"),js_util_27=require("js-util"),js_util_28=require("js-util"),js_util_29=require("js-util"),js_util_30=require("js-util"),js_util_31=require("js-util"),js_util_32=require("js-util"),js_util_33=require("js-util"),key_value_markdown_js_1=require("key-value-markdown-js"),key_value_markdown_js_2=require("key-value-markdown-js"),key_value_markdown_js_3=require("key-value-markdown-js"),key_value_markdown_js_4=require("key-value-markdown-js"),key_value_markdown_js_5=require("key-value-markdown-js"),key_value_markdown_js_6=require("key-value-markdown-js"),key_value_markdown_js_7=require("key-value-markdown-js"),key_value_markdown_js_8=require("key-value-markdown-js"),labeled_button_1=require("labeled-button"),log_1=require("log"),log_2=require("log"),log_3=require("log"),make_test_1=require("make-test"),make_test_2=require("make-test"),markdown_parse_js_1=require("markdown-parse-js"),markdown_parse_js_2=require("markdown-parse-js"),markdown_parse_js_3=require("markdown-parse-js"),markdown_parse_js_4=require("markdown-parse-js"),markdown_parse_js_5=require("markdown-parse-js"),markdown_parse_js_6=require("markdown-parse-js"),markdown_parse_js_7=require("markdown-parse-js"),markdown_parse_js_8=require("markdown-parse-js"),markdown_parse_js_9=require("markdown-parse-js"),markdown_parse_js_10=require("markdown-parse-js"),markdown_parse_js_11=require("markdown-parse-js"),markdown_parse_js_12=require("markdown-parse-js"),markdown_parse_js_13=require("markdown-parse-js"),matter_types_1=require("matter-types"),matter_types_2=require("matter-types"),matter_types_3=require("matter-types"),matter_types_4=require("matter-types"),model_types_1=require("model-types"),model_types_2=require("model-types"),model_types_3=require("model-types"),model_types_4=require("model-types"),model_types_5=require("model-types"),model_types_6=require("model-types"),name_conventions_1=require("name-conventions"),name_conventions_2=require("name-conventions"),name_conventions_3=require("name-conventions"),name_conventions_4=require("name-conventions"),next_a_link_1=require("next-a-link"),parse_primitive_1=require("parse-primitive"),parse_primitive_2=require("parse-primitive"),parse_primitive_3=require("parse-primitive"),parse_primitive_4=require("parse-primitive"),pluralize_1=require("pluralize"),pluralize_2=require("pluralize"),pluralize_3=require("pluralize"),pluralize_4=require("pluralize"),rest_util_1=require("rest-util"),rest_util_2=require("rest-util"),rest_util_3=require("rest-util"),rest_util_4=require("rest-util"),schema_util_1=require("schema-util"),schema_util_2=require("schema-util"),schema_util_3=require("schema-util"),schema_util_4=require("schema-util"),schema_util_5=require("schema-util"),schema_util_6=require("schema-util"),schema_util_7=require("schema-util"),schema_util_8=require("schema-util"),schema_util_9=require("schema-util"),schema_util_10=require("schema-util"),string_to_json_1=require("string-to-json"),string_to_json_2=require("string-to-json"),string_to_json_3=require("string-to-json"),string_to_json_4=require("string-to-json"),text_or_binary_1=require("text-or-binary"),text_or_binary_2=require("text-or-binary"),text_or_binary_3=require("text-or-binary"),try_parse_json_1=require("try-parse-json"),ui_util_1=require("ui-util");exports.sdk={useCustomUrlStore:use_url_store_1.useCustomUrlStore,getGetApiUrl:api_1.getGetApiUrl,untypedApiFunction:api_2.untypedApiFunction,addToken:asset_functions_js_1.addToken,ensureToken:asset_functions_js_2.ensureToken,getAssetDirectlyApiUrl:asset_functions_js_3.getAssetDirectlyApiUrl,getExtensionFromAsset:asset_functions_js_4.getExtensionFromAsset,getNameFromRelativePath:asset_functions_js_5.getNameFromRelativePath,getNameWithTokenFromRelativePath:asset_functions_js_6.getNameWithTokenFromRelativePath,getPreferredExtensionFromType:asset_functions_js_7.getPreferredExtensionFromType,getReferencedAssetApiUrl:asset_functions_js_8.getReferencedAssetApiUrl,getTypeFromRelativePath:asset_functions_js_9.getTypeFromRelativePath,readableSize:asset_functions_js_10.readableSize,removeTokenIfPresent:asset_functions_js_11.removeTokenIfPresent,AssetInput:asset_input_1.AssetInput,getTypeFromFileBlob:asset_input_2.getTypeFromFileBlob,makeBackendAsset:asset_input_3.makeBackendAsset,MediaRecorderComponent:asset_input_4.MediaRecorderComponent,MediaRecorder:asset_input_5.MediaRecorder,ReactMediaRecorder:asset_input_6.ReactMediaRecorder,SelectMedia:asset_input_7.SelectMedia,useReactMediaRecorder:asset_input_8.useReactMediaRecorder,WebcamCapture:asset_input_9.WebcamCapture,AssetView:asset_view_1.AssetView,InteractiveAsset:asset_view_2.InteractiveAsset,BigButton:big_button_1.BigButton,BreadCrumbs:breadcrumbs_1.BreadCrumbs,renderBreadCrumbs:breadcrumbs_2.renderBreadCrumbs,ClickableIcon:clickable_icon_1.ClickableIcon,getFunctionExersize:code_types_1.getFunctionExersize,markdownParseToMarkdownModelType:code_types_2.markdownParseToMarkdownModelType,parseMarkdownModelTimestamp:code_types_3.parseMarkdownModelTimestamp,tryParseDate:code_types_4.tryParseDate,camelCase:convert_case_1.camelCase,capitalCase:convert_case_2.capitalCase,capitaliseFirstLetter:convert_case_3.capitaliseFirstLetter,convertCase:convert_case_4.convertCase,getDelimiter:convert_case_5.getDelimiter,humanCase:convert_case_6.humanCase,kebabCase:convert_case_7.kebabCase,lowerCaseArray:convert_case_8.lowerCaseArray,pascalCase:convert_case_9.pascalCase,slugify:convert_case_10.slugify,snakeCase:convert_case_11.snakeCase,FancyLoader:fancy_loader_1.FancyLoader,getWriterType:filename_conventions_1.getWriterType,hasSubExtension:filename_conventions_2.hasSubExtension,isGeneratedOperationName:filename_conventions_3.isGeneratedOperationName,isGeneratedOperation:filename_conventions_4.isGeneratedOperation,isIndexableFileId:filename_conventions_5.isIndexableFileId,canAccessSync:fs_util_1.canAccessSync,canAccess:fs_util_2.canAccess,canExecuteSync:fs_util_3.canExecuteSync,canExecute:fs_util_4.canExecute,canReadSync:fs_util_5.canReadSync,canRead:fs_util_6.canRead,canSeeSync:fs_util_7.canSeeSync,canSee:fs_util_8.canSee,canWriteSync:fs_util_9.canWriteSync,canWrite:fs_util_10.canWrite,copyAllRelativeFiles:fs_util_11.copyAllRelativeFiles,findAllMd:fs_util_12.findAllMd,findFileNameCaseInsensitive:fs_util_13.findFileNameCaseInsensitive,findFilesRecursively:fs_util_14.findFilesRecursively,findSensibleFiles:fs_util_15.findSensibleFiles,getAllFoldersUntilFolder:fs_util_16.getAllFoldersUntilFolder,getFileName:fs_util_17.getFileName,getFirstAvailableFilename:fs_util_18.getFirstAvailableFilename,getFolder:fs_util_19.getFolder,getLastFolder:fs_util_20.getLastFolder,getOneFolderUpPath:fs_util_21.getOneFolderUpPath,getPathCombinations:fs_util_22.getPathCombinations,importFromFiles:fs_util_23.importFromFiles,isArrayGuard:fs_util_24.isArrayGuard,oneUp:fs_util_25.oneUp,parseMd:fs_util_26.parseMd,removeAllExcept:fs_util_27.removeAllExcept,renameAndCreate:fs_util_28.renameAndCreate,writeJsonToFile:fs_util_29.writeJsonToFile,writeStringToFile:fs_util_30.writeStringToFile,writeToFiles:fs_util_31.writeToFiles,findFolderWhereMatch:get_path_1.findFolderWhereMatch,findOperationBasePathWithClassification:get_path_2.findOperationBasePathWithClassification,findOperationBasePath:get_path_3.findOperationBasePath,getAllPackageJsonDependencies:get_path_4.getAllPackageJsonDependencies,getCommonAncestor:get_path_5.getCommonAncestor,getOperationClassification:get_path_6.getOperationClassification,getOperationPathParse:get_path_7.getOperationPathParse,getOperationPath:get_path_8.getOperationPath,getOperationRelativePath:get_path_9.getOperationRelativePath,getPathParse:get_path_10.getPathParse,getPathsWithOperations:get_path_11.getPathsWithOperations,getProjectRoot:get_path_12.getProjectRoot,getRelativeLinkPath:get_path_13.getRelativeLinkPath,getRelativePath:get_path_14.getRelativePath,getRootPath:get_path_15.getRootPath,getSrcRelativeFileId:get_path_16.getSrcRelativeFileId,hasDependency:get_path_17.hasDependency,isOperation:get_path_18.isOperation,isSensibleProject:get_path_19.isSensibleProject,isWorkspaceRoot:get_path_20.isWorkspaceRoot,makeRelative:get_path_21.makeRelative,isAltB:hotkeys_1.isAltB,isAltN:hotkeys_2.isAltN,isAltO:hotkeys_3.isAltO,isAltW:hotkeys_4.isAltW,isCtrlBacktick:hotkeys_5.isCtrlBacktick,isCtrlP:hotkeys_6.isCtrlP,isCtrlS:hotkeys_7.isCtrlS,isCtrlSpace:hotkeys_8.isCtrlSpace,useHotkey:hotkeys_9.useHotkey,useHotkeys:hotkeys_10.useHotkeys,apply:js_util_1.apply,createEnum:js_util_2.createEnum,createMappedObject:js_util_3.createMappedObject,findLastIndex:js_util_4.findLastIndex,getObjectFromParamsString:js_util_5.getObjectFromParamsString,getObjectKeysArray:js_util_6.getObjectKeysArray,getParameterAtLocation:js_util_7.getParameterAtLocation,getSubsetFromObject:js_util_8.getSubsetFromObject,groupByKey:js_util_9.groupByKey,insertAt:js_util_10.insertAt,isAllTrue:js_util_11.isAllTrue,makeArray:js_util_12.makeArray,mapAsync:js_util_13.mapAsync,mapKeys:js_util_14.mapKeys,mapMany:js_util_15.mapMany,mapValuesSync:js_util_16.mapValuesSync,mergeObjectParameters:js_util_17.mergeObjectParameters,mergeObjectsArray:js_util_18.mergeObjectsArray,mergeObjects:js_util_19.mergeObjects,objectMapAsync:js_util_20.objectMapAsync,objectMapSync:js_util_21.objectMapSync,objectValuesMap:js_util_22.objectValuesMap,omitUndefinedValues:js_util_23.omitUndefinedValues,onlyUnique2:js_util_24.onlyUnique2,onlyUnique:js_util_25.onlyUnique,removeIndexFromArray:js_util_26.removeIndexFromArray,replaceLastOccurence:js_util_27.replaceLastOccurence,reverseString:js_util_28.reverseString,sumAllKeys:js_util_29.sumAllKeys,sumObjectParameters:js_util_30.sumObjectParameters,sum:js_util_31.sum,takeFirst:js_util_32.takeFirst,trimSlashes:js_util_33.trimSlashes,flattenMarkdownChunks:key_value_markdown_js_1.flattenMarkdownChunks,getKvmdItemsRecursively:key_value_markdown_js_2.getKvmdItemsRecursively,getParagraphsRecursively:key_value_markdown_js_3.getParagraphsRecursively,kvmdDataMap:key_value_markdown_js_4.kvmdDataMap,kvmdDataToString:key_value_markdown_js_5.kvmdDataToString,kvmdParseToMarkdownString:key_value_markdown_js_6.kvmdParseToMarkdownString,markdownStringToKvmdParse:key_value_markdown_js_7.markdownStringToKvmdParse,parseKvmdLine:key_value_markdown_js_8.parseKvmdLine,LabeledButton:labeled_button_1.LabeledButton,getCallerFileName:log_1.getCallerFileName,log:log_2.log,parseTitle:log_3.parseTitle,isResultOfInterface:make_test_1.isResultOfInterface,makeTest:make_test_2.makeTest,getChunkParagraphsRecursively:markdown_parse_js_1.getChunkParagraphsRecursively,getImplicitId:markdown_parse_js_2.getImplicitId,getMarkdownIntro:markdown_parse_js_3.getMarkdownIntro,getMarkdownParseParagraphs:markdown_parse_js_4.getMarkdownParseParagraphs,getMarkdownReferencePaths:markdown_parse_js_5.getMarkdownReferencePaths,getMarkdownReferencesFromParagraph:markdown_parse_js_6.getMarkdownReferencesFromParagraph,markdownParseToMarkdownString:markdown_parse_js_7.markdownParseToMarkdownString,mdContentParseRecursively:markdown_parse_js_8.mdContentParseRecursively,mdToJsonParse:markdown_parse_js_9.mdToJsonParse,parseFrontmatterMarkdownString:markdown_parse_js_10.parseFrontmatterMarkdownString,parseMarkdownParagraph:markdown_parse_js_11.parseMarkdownParagraph,parseMdToChunks:markdown_parse_js_12.parseMdToChunks,removeHeaderPrefix:markdown_parse_js_13.removeHeaderPrefix,frontmatterParseToString:matter_types_1.frontmatterParseToString,getFrontmatterValueString:matter_types_2.getFrontmatterValueString,quotedOrNot:matter_types_3.quotedOrNot,stringifyNewlines:matter_types_4.stringifyNewlines,generateId:model_types_1.generateId,generatePassword:model_types_2.generatePassword,generateRandomString:model_types_3.generateRandomString,generateTime:model_types_4.generateTime,isEmail:model_types_5.isEmail,markdownModelTypeToMarkdownString:model_types_6.markdownModelTypeToMarkdownString,getAssetInputType:name_conventions_1.getAssetInputType,getParameterContentType:name_conventions_2.getParameterContentType,isCalculatedParameter:name_conventions_3.isCalculatedParameter,isGeneratedParameterName:name_conventions_4.isGeneratedParameterName,ALink:next_a_link_1.ALink,parsePrimitiveArray:parse_primitive_1.parsePrimitiveArray,parsePrimitiveBoolean:parse_primitive_2.parsePrimitiveBoolean,parsePrimitiveString:parse_primitive_3.parsePrimitiveString,parsePrimitive:parse_primitive_4.parsePrimitive,isPlural:pluralize_1.isPlural,isSingular:pluralize_2.isSingular,pluralize:pluralize_3.pluralize,singularize:pluralize_4.singularize,bodyFromQueryString:rest_util_1.bodyFromQueryString,getFirstQueryStrings:rest_util_2.getFirstQueryStrings,getQueryPart:rest_util_3.getQueryPart,toQueryString:rest_util_4.toQueryString,findFirstCommentTypes:schema_util_1.findFirstCommentTypes,getPossibleReferenceParameterNames:schema_util_2.getPossibleReferenceParameterNames,getProperties:schema_util_3.getProperties,getRefLink:schema_util_4.getRefLink,getReferencableModels:schema_util_5.getReferencableModels,getReferenceParameterInfo:schema_util_6.getReferenceParameterInfo,getSchemaItems:schema_util_7.getSchemaItems,getSchema:schema_util_8.getSchema,simplifiedSchemaToTypeDefinitionString:schema_util_9.simplifiedSchemaToTypeDefinitionString,simplifySchema:schema_util_10.simplifySchema,objectStringToJson:string_to_json_1.objectStringToJson,parseIfJson:string_to_json_2.parseIfJson,parsePrimitiveJson:string_to_json_3.parsePrimitiveJson,stringToJson:string_to_json_4.stringToJson,getEncoding:text_or_binary_1.getEncoding,isBinary:text_or_binary_2.isBinary,isText:text_or_binary_3.isText,tryParseJson:try_parse_json_1.tryParseJson,createCodeblockMarkdown:ui_util_1.createCodeblockMarkdown};
//# sourceMappingURL=sdk-js.js.map