# Code types

code-types (`OperationClassification` cjs)



# Api reference

## 🔸 TsFunction

jsonSingle model




Interface for arrow functions and normal functions





Properties: 

 | Name | Type | Description |
|---|---|---|
| explicitTypeName (optional) | string |  |
| isExported  | boolean |  |
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
| groupAuthorization  | object |  |
| isApiExposed  | boolean |  |
| canCache (optional) | boolean |  |
| runEveryPeriod (optional) | string |  |
| price (optional) | number |  |
| classification (optional) | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |



## 🔸 TsInterface

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



## 🔸 Operation

jsonSingle model




Model for `typerepo` operations. Stored in `package.json` in every package (compatible with regular npm package.json data structure). An `Operation` is a NPM Package that applies the `typerepo` convention.

TODO: add a validation to package.json files for the whole project, to ensure i can apply `fs-orm` convention





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
| path (optional) | string |  |
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
| operation (optional) | object |  |



## 🔹 SimplifiedSchema

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



## 🔹 OperationClassification

`OperationClassification` tells you to what kind of environment the operation can be exposed to. It tells you things about how it will be built. There are three categories: Full stack, frontend only, and backend only. The aim is to do as much as possible in the full stack realm so it can be reused anywhere. If that is not possible, `ui-esm` is preferred for the frontend, or `node-esm` for things that require backend.

TODO: It would be great to learn more about this topic and see if I can make more cross-environment packages. A great use case would be to create a wrapper around the current `fs-orm` to enable using it at the frontend too.


## Possible values

FULL STACK

- `cjs`: only js (no node) (well, ts of course, but it gets built into common js)

- `ts`: non-built typescript code (needs to be transpiled, not recommended)

TODO: `esm`: builds to ESM module resolved Javascript

FRONTEND ONLY (cannot be used within backend-only operations)

- `ui-web`: has next.config.js and thus exposes something on some port when it is ran. next.js + react-based...

- `ui-app`: uses react-native and exposes something on some port when it is ran

- `ui-ts`: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled. Primarily used for big ui libraries tied to a `ui-web` and `ui-app` for convenience. For other things, it is highly discouraged, please use `ui-cjs` or `ui-esm`)

- `ui-cjs`: ui which main entry points to javascript es5 files (this ui package can be built). don't import ESM packages in here, this may give problems.

- `ui-esm`: ui which builds to ESM module resolved Javascript. All packages that use `ui-esm` packages, need to be `ui-esm`, `ui-es6`, `ui-web`, or `ui-app` in order to work properly. It seems to have difficulties using this in `ui-cjs`

BACKEND ONLY (cannot be used within frontend-only operations)

- `node-cjs`: includes other node packages, operations, core-imports, and globals.

TODO: `node-esm`: Typescript package that is built to ESM Javascript which also includes all node packages, operations, core-imports and globals.

TODO: `node-ts`: transpilable node package

- `server-cjs`: exposes something on some port when it is ran and uses node code


## Indexation

Operations will be classified automatically. It is good to remember that:

- It will be classified as UI if `isUiOperation` resolves to true
- It will be classified as Node if `Operation` has a (dev)dependency on `@types/node`.
- Otherwise, it will be classified as base typescript (full stack)
- It will be classified to an ESM operation if `tsconfigCompilesEsm` resolves to true.
- It will be classified to a TS operation if `packageCompilesTs` resolves to true
- In order for it to be classified as a server, you must set `isNodeServer` to true in the `.operation` config object of `Operation`








## 🔹 FunctionParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema (optional) | object |  |
| simplifiedSchema (optional) | object |  |
| required  | boolean |  |



## 🔸 TsImport

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



## 🔸 TsVariable

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



## 🔸 TsConfig

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



## 🔸 Dataset

jsonMultiple model



Model

Make subsets of models that can be used for authorising someone for a subset of data, or transfering (or filtering out) subsets of data to a bundle.





Properties: 

 | Name | Type | Description |
|---|---|---|
| filter (optional) | array |  |
| sort (optional) | array |  |
| maxRows (optional) | number |  |
| startFromIndex (optional) | number |  |
| objectParameterKeys (optional) | array |  |
| ignoreObjectParameterKeys (optional) | array |  |
| view (optional) | object |  |
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
| price (optional) | number |  |
| defaultView (optional) | string |  |
| allowedModelViews (optional) | array |  |



## 🔹 FolderSummary

objective size measurements of all files in a folder

summary for a folder should contain file-summaries for different filetypes and an overal file summary





Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | object |  |
| textSize  | object |  |
| dataSize  | object |  |
| codeSize  | object |  |



## 🔸 FunctionExecution

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
| description (optional) | string |  |
| isResultFromCache  | boolean |  |
| hasApiChanged (optional) | boolean |  |
| performance  | array |  |



## 🔹 RunEveryPeriodEnum

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








## 🔸 TsComment

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



## 🔸 TsExport

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



## 🔹 CategorizedFilePaths

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



## 🔹 CommentType

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








## 🔹 CommentTypeObject

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



## 🔹 DatasetConfig

The part of dataset that can be used in certain functions





Properties: 

 | Name | Type | Description |
|---|---|---|
| filter (optional) | array |  |
| sort (optional) | array |  |
| maxRows (optional) | number |  |
| startFromIndex (optional) | number |  |
| objectParameterKeys (optional) | array |  |
| ignoreObjectParameterKeys (optional) | array |  |
| view (optional) | object |  |



## 🔹 DbStorageMethod

The following strategies are available to store the data.

- **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`

- **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`

- **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`

- **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`

- **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`


### Definitions:

- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`
- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used








## 🔹 IndexModels

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



## 🔹 OperationPathParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| srcFileId  | string |  |
| operationName (optional) | string |  |
| operationFolderName  | string |  |
| relativePathFromProjectRoot  | string |  |



## 🔹 ParameterName

Properties: 

 | Name | Type | Description |
|---|---|---|
| pattern  | string |  |
| example  | string |  |
| description  | string |  |
| type  | string |  |
| secondaryType (optional) | string |  |
| contentType  | array |  |



## 🔹 SimplifiedSchemaProperty

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |
| required  | boolean |  |



## 🔹 SizeSummary

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



## 🔸 TsBuildError

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



## 🔸 TsLintWarning

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



## 📄 commentTypes (exported const)

## 📄 dbStorageMethods (exported const)

## 📄 operationClassificationConst (exported const)

## 📄 typescriptIndexModels (exported const)

## 🔹 DatasetFilter

Can be better, see https://www.w3schools.com/js/js_comparisons.asp





Properties: 

 | Name | Type | Description |
|---|---|---|
| objectParameterKey  | string |  |
| value  | string |  |
| operator  | string |  |
| filterFunctionName (optional) | string |  |



## 🔹 DatasetSort

Sort by comparing the two values using the `Array.sort` method and Greater than and Less than operators.





Properties: 

 | Name | Type | Description |
|---|---|---|
| objectParameterKey  | string |  |
| sortDirection (optional) | string |  |
| sortFunctionName (optional) | string |  |



## 🔹 ExplorationDetails

Properties: 

 | Name | Type | Description |
|---|---|---|
| tsImports (optional) | array |  |
| tsFunctions (optional) | array |  |
| tsInterfaces (optional) | array |  |
| tsVariables (optional) | array |  |
| tsBuildErrors (optional) | array |  |
| tsLintWarnings (optional) | array |  |
| tsComments (optional) | array |  |
| tsExports (optional) | array |  |
| success (optional) | boolean |  |
| response (optional) | string |  |
| markdown (optional) | object |  |
| pathMetaData (optional) | object |  |
| operations (optional) | array |  |
| index  | array |  |



## 🔹 FileContentInfo

Stuff you can find by reading the file





Properties: 

 | Name | Type | Description |
|---|---|---|
| mainComment (optional) | object |  |
| fullFileName (optional) | string |  |
| sizes  | object |  |



## 🔹 FolderExploration

suggested type for menu is FolderExploration[]

NB: recursive!





Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| relativeProjectPath  | string |  |
| children (optional) | array |  |



## 🔹 ImportClassification

node: node core packages like fs and path

react: react standard packages like react, react-native, expo, react-dom, etc.

package: packages from npm that are not classified as operations

operation: operations from our monorepo

internal: imports from other places in the same operation

NB: don't confuse this with OperationClassification








## 🔹 MaybeInteface

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



## 🔹 ModelInfo

used to show a list of models available in a menu structure





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| slug  | string |  |
| rows  | number |  |



## 🔹 PackageInfoObject

## 🔹 PathMetaData

All interesting metadata about any path (files and folders)





Properties: 

 | Name | Type | Description |
|---|---|---|
| updatedAt  | number |  |
| createdAt  | number |  |
| relativePathFromProjectRoot  | string |  |
| mainComment (optional) | object |  |
| fullFileName (optional) | string |  |
| sizes  | object |  |



## 🔹 PathParse

object to represent a folder or file path in different ways

NB: doesn't include the absolute path so the indexes can be exported easily witout creating incorrect paths





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativePathFromProjectRoot  | string |  |



## 🔹 PathStats

Information which can be found by fs.stat





Properties: 

 | Name | Type | Description |
|---|---|---|
| updatedAt  | number |  |
| createdAt  | number |  |



## 🔹 SimplifiedSchemaItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| schema  | object |  |



## 🔹 SimplifiedSchemaType

## 🔹 TypeInfo

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



## 🔹 TypescriptIndex

Typescript file metadata (all indexes from typescript files, together)





Properties: 

 | Name | Type | Description |
|---|---|---|
| tsImports  | array |  |
| tsFunctions  | array |  |
| tsInterfaces  | array |  |
| tsVariables  | array |  |
| tsBuildErrors  | array |  |
| tsLintWarnings  | array |  |
| tsComments  | array |  |
| tsExports  | array |  |



## 📄 modelViews (exported const)

## 📄 runEveryPeriodStringArray (exported const)

# Internal

<details><summary>Show internal (24)</summary>
    
  # getFunctionExersize()




| Input      |    |    |
| ---------- | -- | -- |
| functionId | string |  |
| **Output** |    |    |



## 🔹 CompilerOptions

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



## 🔹 DatasetConfigKey

## 🔹 DatasetConfigShape

Properties: 

 | Name | Type | Description |
|---|---|---|
| filter (optional) | object |  |
| sort (optional) | object |  |
| maxRows (optional) | object |  |
| startFromIndex (optional) | object |  |
| objectParameterKeys (optional) | object |  |
| ignoreObjectParameterKeys (optional) | object |  |
| view (optional) | object |  |



## 🔹 DatasetFilterOperator

## 🔹 FunctionClassification

- `react`: The core library that should always be used that wraps react and react native.

- `dumb`: Presentational components that only care about how things look, and have no idea about the type of information that they will contain (**data-agnostic**), nor their context they're used in.

- `smart`: Presentational components that may contain getters and setters for global state. This means they're still easy enough to set up, but

- `wise`: stateful components that use the backend as well to do things. for example, `simplified-schema-form`

- `genius`: blocks of components that have certain functionality. Example: `file-writer` or `crud`








## 🔹 ModelView

## 🔹 ModelViewEnum

Models should be able to be shown in multiple different views:

- Table: useful to show models with much details
- Grid: useful to show models with a visual aspect and less details
- Timeline: useful to show text-related models
- Tree: useful to show a hierarchy








## 🔹 TsFunctionFrontmatterConfig

Everything you can do with frontmatter on a TsFunction





Properties: 

 | Name | Type | Description |
|---|---|---|
| groupAuthorization  | object |  |
| isApiExposed  | boolean |  |
| canCache (optional) | boolean |  |
| runEveryPeriod (optional) | string |  |
| price (optional) | number |  |
| classification (optional) | string |  |



## 🔹 TsFunctionIndex

Properties: 

 | Name | Type | Description |
|---|---|---|
| explicitTypeName (optional) | string |  |
| isExported  | boolean |  |
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



## 🔹 TypeCoverage

quantification of coverage of the specified type or subtypes in our database.








## 🔸 TypescriptFile

jsonMultiple model



IDEA: What if we could make a custom db storage method for a typescript file, so you can read and write typescript with the database?

The first thing I can do, is to generate all typescript stuff using a model like this:

Later, I can read a typescript file with a rust parser to get it into this model again.

This is actually super useful for metacoding and coding GUI's

Also a great start for making my own programming language ;)


There are multiple ways of describing a typescript file I guess. This is one of them. Another one could be a definition where you put the required context in the statements and types themselves.





Properties: 

 | Name | Type | Description |
|---|---|---|
| statements  | array |  |
| interfaces  | array |  |
| returnStatementRaw (optional) | string |  |
| statementContext (optional) | array |  |
| typeContext (optional) | array |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |



## 🔹 TypescriptScopeContent

Properties: 

 | Name | Type | Description |
|---|---|---|
| statements  | array |  |
| interfaces  | array |  |
| returnStatementRaw (optional) | string |  |



## 🔹 TypescriptScopeContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| statementContext (optional) | array |  |
| typeContext (optional) | array |  |



## 🔹 TypescriptScopeStatementContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| isRequired (optional) | boolean |  |
| simplifiedSchema  | object |  |
| comment  | string |  |
| isRest (optional) | boolean |  |



## 🔹 TypescriptScopeTypeContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| comment (optional) | string |  |
| simplifiedSchema  | object |  |



## 📄 commentTypesConst (exported const)

## 📄 datasetConfigKeys (exported const)

## 📄 datasetFilterOperatorConst (exported const)

NB: keys are made `humanCase` and used in UI, so keep a readable name


## 📄 dbStorageMethodsConst (exported const)

## 📄 getFunctionExersize (exported const)

## 📄 indexDbModelFolders (exported const)

## 📄 indexDbModels (exported const)

All type interfaces that are used to index stuff, which are added to the database

NB: It's not handy to get this from the database because this is used to generate the database xD


## 📄 runEveryPeriodReadonlyArray (exported const)

  </details>

