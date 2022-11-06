# Code types

code-types (js operation)



# Outline

## Functions

- [getExamples](#getExamples)
- [getFunctionExersize](#getFunctionExersize)
- [markdownParseToMarkdownModelType](#markdownParseToMarkdownModelType)
- [parseMarkdownModelTimestamp](#parseMarkdownModelTimestamp)
- [tryParseDate](#tryParseDate)

## Models

- [Dataset](#dataset)
- [FunctionExecution](#functionexecution)
- [OperationConfig](#operationconfig)
- [OperationIndex](#operationindex)
- [PackageJson](#packagejson)
- [SocialMediaCallToAction](#socialmediacalltoaction)
- [TsBuildError](#tsbuilderror)
- [TsComment](#tscomment)
- [TsConfig](#tsconfig)
- [TsExport](#tsexport)
- [TsFunction](#tsfunction)
- [TsImport](#tsimport)
- [TsInterface](#tsinterface)
- [TsLintWarning](#tslintwarning)
- [TsVariable](#tsvariable)
- [WebMarkdownFile](#webmarkdownfile)
- [WebsiteCallToAction](#websitecalltoaction)

## Interfaces

- [AnyModelType](#anymodeltype)
- [AuthorizationLevel](#authorizationlevel)
- [BackendAsset](#backendasset)
- [CategorizedFilePaths](#categorizedfilepaths)
- [CategoryStack](#categorystack)
- [CommentType](#commenttype)
- [CommentTypeObject](#commenttypeobject)
- [CompilerOptions](#compileroptions)
- [DatasetFilter](#datasetfilter)
- [DatasetSort](#datasetsort)
- [DbStorageMethod](#dbstoragemethod)
- [DefaultModelType](#defaultmodeltype)
- [Downmatter](#downmatter)
- [ExplorationDetails](#explorationdetails)
- [FolderExploration](#folderexploration)
- [FolderSummary](#foldersummary)
- [Frontmatter](#frontmatter)
- [FunctionParameter](#functionparameter)
- [GeneralOperationIndex](#generaloperationindex)
- [Id](#id)
- [ImportClassification](#importclassification)
- [IndexModels](#indexmodels)
- [JSONSchema7Type](#jsonschema7type)
- [Language](#language)
- [Markdown](#markdown)
- [MarkdownAssetType](#markdownassettype)
- [MarkdownChunk](#markdownchunk)
- [MarkdownContentLevel](#markdowncontentlevel)
- [MarkdownEmbed](#markdownembed)
- [MarkdownHeader](#markdownheader)
- [MarkdownLink](#markdownlink)
- [MarkdownModelType](#markdownmodeltype)
- [MarkdownParagraph](#markdownparagraph)
- [MarkdownParse](#markdownparse)
- [MaybeInteface](#maybeinteface)
- [ModelInfo](#modelinfo)
- [OperationClassification](#operationclassification)
- [OperationPathParse](#operationpathparse)
- [PackageInfoObject](#packageinfoobject)
- [ParameterName](#parametername)
- [PathMetaData](#pathmetadata)
- [PathParse](#pathparse)
- [PerformanceItem](#performanceitem)
- [ProjectType](#projecttype)
- [RunEveryPeriodEnum](#runeveryperiodenum)
- [Schema](#schema)
- [SensibleConfig](#sensibleconfig)
- [SimplifiedSchema](#simplifiedschema)
- [SimplifiedSchemaItem](#simplifiedschemaitem)
- [SimplifiedSchemaProperty](#simplifiedschemaproperty)
- [SimplifiedSchemaType](#simplifiedschematype)
- [SizeSummary](#sizesummary)
- [Slug](#slug)
- [SlugModelType](#slugmodeltype)
- [Stats](#stats)
- [TextJson](#textjson)
- [TsIndexModelType](#tsindexmodeltype)
- [TypeCoverage](#typecoverage)
- [TypeInfo](#typeinfo)
- [TypescriptIndex](#typescriptindex)
- [WebsiteHeader](#websiteheader)

## Variables

- [commentTypesConst](#commenttypesconst)
- [commentTypes](#commenttypes)
- [contentTypeConst](#contenttypeconst)
- [dbStorageMethodsConst](#dbstoragemethodsconst)
- [dbStorageMethods](#dbstoragemethods)
- [getExamples](#getexamples)
- [getFunctionExersize](#getfunctionexersize)
- [indexDbModelFolders](#indexdbmodelfolders)
- [indexDbModels](#indexdbmodels)
- [markdownParseToMarkdownModelType](#markdownparsetomarkdownmodeltype)
- [operationClassificationConst](#operationclassificationconst)
- [parseMarkdownModelTimestamp](#parsemarkdownmodeltimestamp)
- [runEveryPeriodReadonlyArray](#runeveryperiodreadonlyarray)
- [runEveryPeriodStringArray](#runeveryperiodstringarray)
- [tryParseDate](#tryparsedate)
- [typescriptIndexModels](#typescriptindexmodels)



# Functions

## getExamples

### Parameters (1)

#### Parameter 1: functionName: string

## getFunctionExersize

### Parameters (1)

#### Parameter 1: functionId: string

## markdownParseToMarkdownModelType

makes a markdownModelType from a markdownParse.




### Parameters (1)

#### Parameter 1: markdownParse: object

## parseMarkdownModelTimestamp

First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent

If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system

If that doesn't succeed, sometimes we'll set it to  the current timestamp


### Returns: object

### Parameters (3)

#### Parameter 1: parameters: object

#### Parameter 3: parameterName: string(Enum: createdAt | createdFirstAt | updatedAt | deletedAt | openedAt)

## tryParseDate

Tries to parse a date from a string
- implements default behavior of `new Date` with a try catch
- returns a unix timestamp (ms since 1970 AD)

TODO: put in a better location... date-util?


### Returns: number

### Parameters (1)

#### Parameter 1: dateString: string

# Models

## Dataset

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| modelName  | string |  |
| filter (optional) | object |  |
| sort (optional) | object |  |
| maxRows (optional) | number |  |
| startFromIndex (optional) | number |  |
| objectParameterKeys (optional) | array |  |
| ignoreObjectParameterKeys (optional) | array |  |



## FunctionExecution

jsonMultiple model



Model for tests, examples, cache, and recent executions of any function

Requirement for **tifo-stitching**

Example:

const someFunction = (inputA: string, inputB:string):string => {

return `${inputA} != ${inputB}`
}


find this in the database after executing the function

const functionExecution1 = {
....
functionName: "someFunction",
inputParameters: ["hello", "world"],
output: "hello != world",
isTest: false,
isExample: false,
isResultFromCache: false,
performance: [....],
}





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| functionName  | string |  |
| tsFunctionId  | string |  |
| inputParameters (optional) | array |  |
| output  | object |  |
| isTest  | boolean |  |
| isExample  | boolean |  |
| description  | string |  |
| isResultFromCache  | boolean |  |
| hasApiChanged (optional) | boolean |  |
| performance  | array |  |



## OperationConfig

markdown model




anything configurable about the operation.

Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.

Let's try to use OPERATION.md

TODO: Make this work and make sure the operationconfig is parsed from this file using `db.get("OperationConfig")` as per convention.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |
| indirectDependencies (optional) | array |  |
| authors (optional) | array |  |
| contributors (optional) | array |  |
| shortDescriptionText (optional) | string |  |



## OperationIndex

jsonSingle model




contains all calculated info about an operation that needs to be retreived often:
some package-only things, but also a collection of all indexes of all files

should be able to be found in operaiton folder in /db/operation-index.json





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| packageName  | string |  |
| folderName  | string |  |
| relativeOperationLocationPath  | string |  |
| classification  | string |  |
| packageDependencies  | array |  |
| operationDependencies  | array |  |
| coreDependencies  | array |  |
| buildSucceeded  | boolean |  |
| dependenciesBuildsFailed  | boolean |  |
| indexImportExportError  | string |  |
| lintProblems  | array |  |
| indexInteracesErrors  | array |  |
| indexErrors  | array |  |
| size  | object |  |



## PackageJson

jsonSingle model









Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| path (optional) | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository (optional) | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| scripts (optional) | object |  |
| type (optional) | string |  |
| sensible (optional) | object |  |
| operation (optional) | object |  |



## SocialMediaCallToAction

markdown model



A call to action suffix is a handy model that can be used to place under a postable. this way we are getting much more conversions from the traffic received on media





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |



## TsBuildError

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| line (optional) | number |  |
| character (optional) | number |  |
| message  | string |  |



## TsComment

jsonMultiple model



comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.


The convention should be that single-line comments should start with that. This then becomes the type of the comment.
You can also put multiple prefixes at the start.

Example:

`// TODO: NB: this is a todo but its also important`

Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.



There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.
- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...
- privacy
- ...?

NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!

NB: comments are part of the code, so they should always be in English!





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| comment  | string |  |
| parameters  | object |  |
| types  | array |  |
| firstLine  | number |  |
| lastLine  | number |  |
| statementName (optional) | string |  |
| rawStatement (optional) | string |  |



## TsConfig

jsonSingle model




would be nice if we have a type interface for this, just like package.json
for now just type the stuff we need





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| include (optional) | array |  |
| exclude (optional) | array |  |
| compilerOptions  | object |  |



## TsExport

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| comments  | array |  |
| type (optional) | string |  |
| alias (optional) | string |  |
| hasGeneric (optional) | boolean |  |



## TsFunction

jsonSingle model




Interface for arrow functions and normal functions





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| canCache (optional) | boolean |  |
| isGetApi (optional) | boolean |  |
| isPostApi (optional) | boolean |  |
| isExported  | boolean |  |
| isApiExposed  | boolean |  |
| publicAuthorization  | array |  |
| runEveryPeriod (optional) | string |  |
| description (optional) | string |  |
| rawText (optional) | string |  |
| commentsInside  | array |  |
| returnType  | object |  |
| parameters (optional) | array |  |
| size  | object |  |
| commentSize (optional) | object |  |
| codeSize (optional) | object |  |
| cumulativeSize (optional) | object |  |
| cumulativeCommentSize (optional) | object |  |
| cumulativeCodeSize (optional) | object |  |
| maxIndentationDepth  | number |  |
| dependantFiles (optional) | array |  |



## TsImport

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| comments  | array |  |
| module  | string |  |
| alias (optional) | string |  |
| classification  | string |  |
| type (optional) | string |  |
| hasGeneric (optional) | boolean |  |
| isAbsolute  | boolean |  |
| isModuleResolved  | boolean |  |
| isModuleFromMonorepo  | boolean |  |



## TsInterface

jsonSingle model




TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| type  | object |  |
| description (optional) | string |  |
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |
| dbStorageMethod (optional) | string |  |



## TsLintWarning

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| line  | number |  |
| character  | number |  |
| message  | string |  |



## TsVariable

jsonSingle model









Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| description (optional) | string |  |
| value  | string |  |
| classification  | string |  |
| type  | object |  |
| isExported  | boolean |  |
| comments  | array |  |



## WebMarkdownFile

markdown model



Every markdown file meant for the web, should have these optional parameters that can be declared as its frontmatter

NB: This is not part of MarkdownModelType, because MarkdownModelType is very barebones general purpose, not only for the web!





Properties: 

 | Name | Type | Description |
|---|---|---|
| headerImage  | object |  |
| headerTitle  | string |  |
| headerSubTitle  | string |  |
| headerCta  | object |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |
| isDraft (optional) | boolean |  |
| privacy  | string |  |
| language  | string |  |
| isLanguageCustom (optional) | boolean |  |
| websiteCallToActionSlugs (optional) | array |  |
| shop_itemIds (optional) | array |  |
| author_personSlugs  | array |  |
| interestSlugs  | array |  |



## WebsiteCallToAction

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| url  | string |  |
| title  | string |  |
| description  | string |  |
| banner (optional) | string |  |


# Interfaces

## AnyModelType

Parameters that every model will always have.

NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.

NB: RelationTypes are also not always included for the same reason





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |



## AuthorizationLevel

`AuthorizationLevel` is a single Enum that can apply to privacy and authorization of text, functions, and data.

For files (ts, md, json, etc...):

- write-create
- write-update
- write-delete
- read
- search (only search index)

For db model data subsets:

- write-update
- write-create
- write-delete
- read
- search (only search index)

For functions:
- execute

For functions, interfaces, variables:

- read (reading docs only. for source, you need to provide the file auth)
- search (only search index)








## BackendAsset

Part of the asset that should be sent to the backend. The rest should frontend-only

Some values are stored, some are not





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt (optional) | string |  |
| relativePath (optional) | string |  |
| name (optional) | string |  |
| temporaryDestination (optional) | string |  |



## CategorizedFilePaths

filepaths categorized based on the filetype. With king os there are only these filetypes:

- code: ts, tsx
- data: json
- text: md, mdx





Properties: 

 | Name | Type | Description |
|---|---|---|
| code  | array |  |
| data  | array |  |
| text  | array |  |



## CategoryStack

- null: string






## CommentType

special line prefixes:

**Developer related comments**

- TODO: for developer to know what to do
- DISCUSSION: for developer to state that discussion is needed
- IDEA: for developer to state ideas
- LATER: for developer to mark as thing that needs to be done later
- NB: for developer to add a note

**Form related comments**

- TITLE: if available, will be used as title of form input (overwrites humanCase version of the property-name itself in that case)
- SECTION: start a new section in the form from this point, the value behind here can be the title
- DESCRIPTION: if available, will be used as description of the form input








## CommentTypeObject

Every `CommentType` can be a key in the `SimplifiedSchema`, if available.





Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |



## CompilerOptions

Properties: 

 | Name | Type | Description |
|---|---|---|
| allowJs (optional) | boolean |  |
| allowSyntheticDefaultImports (optional) | boolean |  |
| allowUmdGlobalAccess (optional) | boolean |  |
| allowUnreachableCode (optional) | boolean |  |
| allowUnusedLabels (optional) | boolean |  |
| alwaysStrict (optional) | boolean |  |
| baseUrl (optional) | string |  |
| charset (optional) | string |  |
| checkJs (optional) | boolean |  |
| declaration (optional) | boolean |  |
| declarationMap (optional) | boolean |  |
| emitDeclarationOnly (optional) | boolean |  |
| declarationDir (optional) | string |  |
| disableSizeLimit (optional) | boolean |  |
| disableSourceOfProjectReferenceRedirect (optional) | boolean |  |
| disableSolutionSearching (optional) | boolean |  |
| disableReferencedProjectLoad (optional) | boolean |  |
| downlevelIteration (optional) | boolean |  |
| emitBOM (optional) | boolean |  |
| emitDecoratorMetadata (optional) | boolean |  |
| exactOptionalPropertyTypes (optional) | boolean |  |
| experimentalDecorators (optional) | boolean |  |
| forceConsistentCasingInFileNames (optional) | boolean |  |
| importHelpers (optional) | boolean |  |
| importsNotUsedAsValues (optional) | number |  |
| inlineSourceMap (optional) | boolean |  |
| inlineSources (optional) | boolean |  |
| isolatedModules (optional) | boolean |  |
| jsx (optional) | number |  |
| keyofStringsOnly (optional) | boolean |  |
| lib (optional) | array |  |
| locale (optional) | string |  |
| mapRoot (optional) | string |  |
| maxNodeModuleJsDepth (optional) | number |  |
| module (optional) | number |  |
| moduleResolution (optional) | number |  |
| moduleSuffixes (optional) | array |  |
| moduleDetection (optional) | number |  |
| newLine (optional) | number |  |
| noEmit (optional) | boolean |  |
| noEmitHelpers (optional) | boolean |  |
| noEmitOnError (optional) | boolean |  |
| noErrorTruncation (optional) | boolean |  |
| noFallthroughCasesInSwitch (optional) | boolean |  |
| noImplicitAny (optional) | boolean |  |
| noImplicitReturns (optional) | boolean |  |
| noImplicitThis (optional) | boolean |  |
| noStrictGenericChecks (optional) | boolean |  |
| noUnusedLocals (optional) | boolean |  |
| noUnusedParameters (optional) | boolean |  |
| noImplicitUseStrict (optional) | boolean |  |
| noPropertyAccessFromIndexSignature (optional) | boolean |  |
| assumeChangesOnlyAffectDirectDependencies (optional) | boolean |  |
| noLib (optional) | boolean |  |
| noResolve (optional) | boolean |  |
| noUncheckedIndexedAccess (optional) | boolean |  |
| out (optional) | string |  |
| outDir (optional) | string |  |
| outFile (optional) | string |  |
| paths (optional) | object |  |
| preserveConstEnums (optional) | boolean |  |
| noImplicitOverride (optional) | boolean |  |
| preserveSymlinks (optional) | boolean |  |
| preserveValueImports (optional) | boolean |  |
| project (optional) | string |  |
| reactNamespace (optional) | string |  |
| jsxFactory (optional) | string |  |
| jsxFragmentFactory (optional) | string |  |
| jsxImportSource (optional) | string |  |
| composite (optional) | boolean |  |
| incremental (optional) | boolean |  |
| tsBuildInfoFile (optional) | string |  |
| removeComments (optional) | boolean |  |
| rootDir (optional) | string |  |
| rootDirs (optional) | array |  |
| skipLibCheck (optional) | boolean |  |
| skipDefaultLibCheck (optional) | boolean |  |
| sourceMap (optional) | boolean |  |
| sourceRoot (optional) | string |  |
| strict (optional) | boolean |  |
| strictFunctionTypes (optional) | boolean |  |
| strictBindCallApply (optional) | boolean |  |
| strictNullChecks (optional) | boolean |  |
| strictPropertyInitialization (optional) | boolean |  |
| stripInternal (optional) | boolean |  |
| suppressExcessPropertyErrors (optional) | boolean |  |
| suppressImplicitAnyIndexErrors (optional) | boolean |  |
| target (optional) | number |  |
| traceResolution (optional) | boolean |  |
| useUnknownInCatchVariables (optional) | boolean |  |
| resolveJsonModule (optional) | boolean |  |
| types (optional) | array |  |
| typeRoots (optional) | array |  |
| esModuleInterop (optional) | boolean |  |
| useDefineForClassFields (optional) | boolean |  |



## DatasetFilter

Can be better, see https://www.w3schools.com/js/js_comparisons.asp





Properties: 

 | Name | Type | Description |
|---|---|---|
| objectParameterKey  | string |  |
| value (optional) | string |  |
| operator  | string |  |
| filterFunctionName (optional) | string |  |



## DatasetSort

Sort by comparing the two values using the `Array.sort` method and Greater than and Less than operators.





Properties: 

 | Name | Type | Description |
|---|---|---|
| objectParameterKey  | string |  |
| sortDirection (optional) | string |  |
| sortFunctionName (optional) | string |  |



## DbStorageMethod

The following strategies are available to store the data.

- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`

- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`

- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`

- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`

- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`


### Definitions:

- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`
- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used








## DefaultModelType

Use this model by default





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |



## Downmatter

Properties: 

 | Name | Type | Description |
|---|---|---|
| detectedLanguage (optional) | string |  |
| labels (optional) | array |  |



## ExplorationDetails

Properties: 

 | Name | Type | Description |
|---|---|---|
| tsBuildErrors (optional) | array |  |
| tsLintWarnings (optional) | array |  |
| tsFunctions (optional) | array |  |
| tsVariables (optional) | array |  |
| tsInterfaces (optional) | array |  |
| tsComments (optional) | array |  |
| tsImports (optional) | array |  |
| tsExports (optional) | array |  |
| success (optional) | boolean |  |
| response (optional) | string |  |
| markdown (optional) | object |  |
| pathMetaData (optional) | object |  |
| operationIndexes (optional) | array |  |
| index  | array |  |



## FolderExploration

suggested type for menu is FolderExploration[]

NB: recursive!





Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| relativeProjectPath  | string |  |
| children (optional) | array |  |



## FolderSummary

objective size measurements of all files in a folder

summary for a folder should contain file-summaries for different filetypes and an overal file summary





Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | object |  |
| textSize  | object |  |
| dataSize  | object |  |
| codeSize  | object |  |



## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes








## FunctionParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| required  | boolean |  |



## GeneralOperationIndex

Properties: 

 | Name | Type | Description |
|---|---|---|
| updatedAt  | number |  |
| name  | string |  |
| slug  | string |  |
| packageName  | string |  |
| folderName  | string |  |
| relativeOperationLocationPath  | string |  |
| classification  | string |  |
| packageDependencies  | array |  |
| operationDependencies  | array |  |
| coreDependencies  | array |  |



## Id

Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.


## Background Info

azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.

the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.

the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter

An Id with 12 characters would provide 3.22e21 combinations.

What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.

Why make an id short? I don't know if there's an important reason.

All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.

An id would look like this:

``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```

Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.








## ImportClassification

node: node core packages like fs and path

react: react standard packages like react, react-native, expo, react-dom, etc.

package: packages from npm that are not classified as operations

operation: operations from our monorepo

internal: imports from other places in the same operation

NB: don't confuse this with OperationClassification








## IndexModels

Properties: 

 | Name | Type | Description |
|---|---|---|
| TsBuildError  | object |  |
| TsLintWarning  | object |  |
| TsFunction  | object |  |
| TsVariable  | object |  |
| TsInterface  | object |  |
| TsComment  | object |  |
| TsImport  | object |  |
| TsExport  | object |  |



## JSONSchema7Type

Primitive type








## Language

all currently supported languages








## Markdown

a string that is known to contain markdown.








## MarkdownAssetType

type of asset that is being embedded








## MarkdownChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number |  |
| content (optional) | string |  |
| markdownEmbed (optional) | object |  |
| markdownLink (optional) | object |  |
| title (optional) | string |  |
| children (optional) | array |  |



## MarkdownContentLevel

0 is a paragraph
1-6 is h1 until h6








## MarkdownEmbed

Anything in the format `![alt](src)`

NB: I need to be very clear how this one works





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| src  | string |  |
| type  | string |  |



## MarkdownHeader

Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number |  |
| title  | string |  |



## MarkdownLink

Anything in the format `[alt](href)`

It needs to be clear how this works. There is a convention for this, and I should implement that as good as possible, and document it here





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt  | string |  |
| href  | string |  |
| type  | string |  |



## MarkdownModelType

Handy model type for storing stuff in a Markdown file.

1 markdown file will represent 1 MarkdownModelType extended instance

another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content

TODO: see how this relates to MarkdownFile. Make this very clear!





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |



## MarkdownParagraph

Properties: 

 | Name | Type | Description |
|---|---|---|
| paragraph  | string |  |
| categoryStackCalculated  | array |  |
| level (optional) | number |  |



## MarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string |  |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| parameters  | object |  |
| downmatterParameters (optional) | object |  |
| content (optional) | array |  |
| raw  | string |  |



## MaybeInteface

at some point in processing we need this interface where definition can also be null





Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | object |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| description (optional) | string |  |
| commentsInside  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |
| rawText (optional) | string |  |
| extensions (optional) | array |  |
| isDbModel  | boolean |  |
| isOperationIndex  | boolean |  |
| operationStorageLocationRelativeFilePath (optional) | string |  |
| dbStorageMethod (optional) | string |  |



## ModelInfo

used to show a list of models available in a menu structure





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| slug  | string |  |
| rows  | number |  |



## OperationClassification

## Classification

TODO: think about what the differences are and how we need to change processes to make it all work good


### Possible values

js: only js (no node) (well, ts of course, but it gets built into js)

ts: non-built ts code

node: includes other node packages, operations, core-imports, or globals.

server: exposes something on some port when it is ran and uses node code

web: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...

app: uses react-native and exposes something on some port when it is ran

DEPRECATED: ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. highly discouraged, please use ui-es5, or, if needed, ui-esm)

ui-es5: ui which main entry points to javascript es5 files (this ui package can be built)

ui-esm: ui which builds to ESM module resolved Javascript








## OperationPathParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| srcFileId  | string |  |
| operationName (optional) | string |  |
| operationFolderName  | string |  |
| relativePathFromProjectRoot  | string |  |



## PackageInfoObject

## ParameterName

Properties: 

 | Name | Type | Description |
|---|---|---|
| pattern  | string |  |
| example  | string |  |
| description  | string |  |
| type  | string |  |
| secondaryType (optional) | string |  |
| contentType  | array |  |



## PathMetaData

All interesting metadata about any path (files and folders)





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string |  |
| mainComment (optional) | object |  |
| fullFileName (optional) | string |  |
| isFolder  | boolean |  |
| updatedAt  | number |  |
| createdAt  | number |  |
| sizes  | object |  |



## PathParse

object to represent a folder or file path in different ways

NB: doesn't include the absolute path so the indexes can be exported easily witout creating incorrect paths





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string |  |



## PerformanceItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| label  | string |  |
| durationMs  | number |  |



## ProjectType

DEPRECATED: TODO: should use OperationClassification








## RunEveryPeriodEnum

Used to specify functions that need to run every time with a specific interval

All times are at at the server timezone time

- `minute`: every minute at 0 seconds
- `5-mintues`: every 5 minutes, starting at the first minute of the hour
- `quarter-hour`: every 15 minutes, starting at the first minute of the hour
- `hour`: every hour, starting at the first minute of the hour
- `6-hours`: every 6 hours, starting at midnight
- `midnight`: every midnight (00:00:00)
- `week`: every week at sundaynight (sunday, 1 second after 23:59:59 PM)
- `month`: at the first second of the first day of the month (0:00:00)
- `3-months`: every start of the quarter: january 1st (0:00:00), april 1st, july 1st, october 1st
- `year`: every new year at january 1st at 0:00:00








## Schema

Properties: 

 | Name | Type | Description |
|---|---|---|
| $id (optional) | string |  |
| $ref (optional) | string |  |
| $schema (optional) | string |  |
| $comment (optional) | string |  |
| $defs (optional) | object |  |
| type (optional) | object |  |
| enum (optional) | array |  |
| const (optional) | object |  |
| multipleOf (optional) | number |  |
| maximum (optional) | number |  |
| exclusiveMaximum (optional) | number |  |
| minimum (optional) | number |  |
| exclusiveMinimum (optional) | number |  |
| maxLength (optional) | number |  |
| minLength (optional) | number |  |
| pattern (optional) | string |  |
| items (optional) | object |  |
| additionalItems (optional) | object |  |
| maxItems (optional) | number |  |
| minItems (optional) | number |  |
| uniqueItems (optional) | boolean |  |
| contains (optional) | object |  |
| maxProperties (optional) | number |  |
| minProperties (optional) | number |  |
| required (optional) | array |  |
| properties (optional) | object |  |
| patternProperties (optional) | object |  |
| additionalProperties (optional) | object |  |
| dependencies (optional) | object |  |
| propertyNames (optional) | object |  |
| if (optional) | object |  |
| then (optional) | object |  |
| else (optional) | object |  |
| allOf (optional) | array |  |
| anyOf (optional) | array |  |
| oneOf (optional) | array |  |
| not (optional) | object |  |
| format (optional) | string |  |
| contentMediaType (optional) | string |  |
| contentEncoding (optional) | string |  |
| definitions (optional) | object |  |
| title (optional) | string |  |
| description (optional) | string |  |
| default (optional) | object |  |
| readOnly (optional) | boolean |  |
| writeOnly (optional) | boolean |  |
| examples (optional) | object |  |



## SensibleConfig

Sensible-global configurations

TODO: rename to `typerepo`





Properties: 

 | Name | Type | Description |
|---|---|---|
| skipMinify (optional) | boolean |  |
| isSensibleProject (optional) | boolean |  |
| hasGeneratedDependencies (optional) | boolean |  |
| appPort (optional) | number |  |
| isNotSdkable (optional) | boolean |  |



## SimplifiedSchema

JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form





Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |
| type  | string |  |
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |



## SimplifiedSchemaItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |



## SimplifiedSchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |
| required  | boolean |  |



## SimplifiedSchemaType

## SizeSummary

type interface that can be used to summarize multiple files





Properties: 

 | Name | Type | Description |
|---|---|---|
| numberOfFiles (optional) | number |  |
| characters  | number |  |
| lines  | number |  |
| bytes  | number |  |
| linesPerFile  | number |  |
| charactersPerLine  | number |  |
| bytesPerCharacter  | number |  |



## Slug

use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.








## SlugModelType

use this model for things with a name that have an unique slug that can be used to identify the model





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |



## Stats

A `fs.Stats` object provides information about a file.

Objects returned from  {@link  stat } ,  {@link  lstat }  and  {@link  fstat }  and their synchronous counterparts are of this type. If `bigint` in the `options` passed to those methods is true, the numeric values will be `bigint` instead of `number`, and the object will contain additional nanosecond-precision properties suffixed with `Ns`.

```console Stats {   dev: 2114,   ino: 48064969,   mode: 33188,   nlink: 1,   uid: 85,   gid: 100,   rdev: 0,   size: 527,   blksize: 4096,   blocks: 8,   atimeMs: 1318289051000.1,   mtimeMs: 1318289051000.1,   ctimeMs: 1318289051000.1,   birthtimeMs: 1318289051000.1,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```

`bigint` version:

```console BigIntStats {   dev: 2114n,   ino: 48064969n,   mode: 33188n,   nlink: 1n,   uid: 85n,   gid: 100n,   rdev: 0n,   size: 527n,   blksize: 4096n,   blocks: 8n,   atimeMs: 1318289051000n,   mtimeMs: 1318289051000n,   ctimeMs: 1318289051000n,   birthtimeMs: 1318289051000n,   atimeNs: 1318289051000000000n,   mtimeNs: 1318289051000000000n,   ctimeNs: 1318289051000000000n,   birthtimeNs: 1318289051000000000n,   atime: Mon, 10 Oct 2011 23:24:11 GMT,   mtime: Mon, 10 Oct 2011 23:24:11 GMT,   ctime: Mon, 10 Oct 2011 23:24:11 GMT,   birthtime: Mon, 10 Oct 2011 23:24:11 GMT } ```





Properties: 

 | Name | Type | Description |
|---|---|---|
| dev  | number |  |
| ino  | number |  |
| mode  | number |  |
| nlink  | number |  |
| uid  | number |  |
| gid  | number |  |
| rdev  | number |  |
| size  | number |  |
| blksize  | number |  |
| blocks  | number |  |
| atimeMs  | number |  |
| mtimeMs  | number |  |
| ctimeMs  | number |  |
| birthtimeMs  | number |  |
| atime  | string |  |
| mtime  | string |  |
| ctime  | string |  |
| birthtime  | string |  |



## TextJson

Properties: 

 | Name | Type | Description |
|---|---|---|
| json (optional) | object |  |
| typescriptJson (optional) | object |  |
| markdownJson (optional) | object |  |
| path  | string |  |
| isFolder  | boolean |  |
| stats (optional) | object |  |
| metaData (optional) | object |  |
| isCancelRecursionResult (optional) | boolean |  |



## TsIndexModelType

identifier of any index type interface





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |



## TypeCoverage

quantification of coverage of the specified type or subtypes in our database.








## TypeInfo

all info that should always be collected when indexing any type interface





Properties: 

 | Name | Type | Description |
|---|---|---|
| typeDefinition (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| isObject  | boolean |  |
| isArray  | boolean |  |
| isPrimitive  | boolean |  |
| isEnum  | boolean |  |
| isEnumLiteral  | boolean |  |
| typeCoverage  | number |  |
| rawType  | string |  |



## TypescriptIndex

Typescript file metadata (all indexes from typescript files, together)





Properties: 

 | Name | Type | Description |
|---|---|---|
| tsBuildErrors  | array |  |
| tsLintWarnings  | array |  |
| tsFunctions  | array |  |
| tsVariables  | array |  |
| tsInterfaces  | array |  |
| tsComments  | array |  |
| tsImports  | array |  |
| tsExports  | array |  |



## WebsiteHeader

Properties: 

 | Name | Type | Description |
|---|---|---|
| headerImage  | object |  |
| headerTitle  | string |  |
| headerSubTitle  | string |  |
| headerCta  | object |  |


# Variables

## commentTypesConst (exported const)

## commentTypes (exported const)

## contentTypeConst (unexported const)

Improves the convention for parameter names that refer to models. probably it's better to do this: `slug/id/index` are reserved on every model, let's call them "Ref". `modelNameRef` refers to modelName. But what if you want to call it differently? Then you'd need to distinguish a prefix from the modelName. Let's do this with a underscore (no dash because underscore preserves ability to dotting on the object). If you want a reference to a user be called author, you'd name it `author_userSlug`.

TODO: reduce all TsInterfaces and functions into their parameters :D


## dbStorageMethodsConst (exported const)

## dbStorageMethods (exported const)

## getExamples (unexported const)

## getFunctionExersize (exported const)

## indexDbModelFolders (exported const)

## indexDbModels (exported const)

All type interfaces that are used to index stuff, which are added to the database

NB: It's not handy to get this from the database because this is used to generate the database xD


## markdownParseToMarkdownModelType (exported const)

makes a markdownModelType from a markdownParse.


## operationClassificationConst (exported const)

## parseMarkdownModelTimestamp (exported const)

First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent

If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system

If that doesn't succeed, sometimes we'll set it to  the current timestamp


## runEveryPeriodReadonlyArray (exported const)

## runEveryPeriodStringArray (exported const)

## tryParseDate (exported const)

Tries to parse a date from a string
- implements default behavior of `new Date` with a try catch
- returns a unix timestamp (ms since 1970 AD)

TODO: put in a better location... date-util?


## typescriptIndexModels (exported const)

