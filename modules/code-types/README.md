---
: undefined
contains all calculated info about an operation that needs to be retreived often: some package-only things, but also a collection of all indexes of all files
```: undefined
Properties: 
| Name | Type | Description |: undefined
|---|---|---|: undefined
| updatedAt  | number |  |: undefined
| packageName  | string | name of the package in package.json |: undefined
| folderName  | string | name of the operation folder |: undefined
| relativeOperationLocationPath  | string | relative path to the operation (does not include operation folder itself)<br /><br />relative from project root |: undefined
| classification  | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js
| packageDependencies  | array | package dependency names (non-operation) |: undefined
| operationDependencies  | array | operation dependency names |: undefined
| coreDependencies  | array | core dependencies (e.g. `path` and `fs`) |: undefined
| id (optional) | string | here for compatibility, should implement... |: undefined
| createdAt  | number |  |: undefined
| buildSucceeded  | boolean |  |: undefined
| dependenciesBuildsFailed  | boolean |  |: undefined
| indexImportExportError  | string |  |: undefined
| lintProblems  | array |  |: undefined
| indexInteracesErrors  | array |  |: undefined
| indexErrors  | array |  |: undefined
| size  | object | objective size measurements of all files in a folder<br /><br />summary for a folder should contain file-summaries for different filetypes and an overal file summary |: undefined
## PackageJSON: object
(from: `code-types`)
jsonSingle model: undefined
```md: undefined
--- defaultDbStorageMethod: jsonSingle
---
# Code types

code-types (node operation)

Size: 1154 LOC, 1401 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: JSONSchema7Type, Schema, Schema, Schema
- From Operations: FrontMatter, KeyValueMarkdownModelType, CategoryStack, Stats, Markdown, FrontMatter, Markdown, Markdown, kebabCase

# Outline

## Functions

- [isGeneratedParameterName](#isGeneratedParameterName)
- [getParameterContentType](#getParameterContentType)

## Models:

- [OperationIndex](#OperationIndex)
- [PackageJSON](#PackageJSON)
- [TsComment](#TsComment)
- [TsFunction](#TsFunction)
- [TsInterface](#TsInterface)
- [TsBuildError](#TsBuildError)
- [TsLintWarning](#TsLintWarning)
- [TsVariable](#TsVariable)
- [TsImport](#TsImport)
- [TsExport](#TsExport)



# Functions

## isGeneratedParameterName

Max. indexation depth: 3, 



## Returns: unknown

### Arguments

#### parameterName: string







## getParameterContentType

Max. indexation depth: 1, 



## Returns: unknown

### Arguments

#### parameterName: string







# Models

```


Properties: 

 | Name | Type | Description |
|---|---|---|
| id (optional) | string |  |
| path  | string |  |
| name (optional) | string |  |
| main (optional) | string |  |
| source (optional) | string |  |
| description (optional) | string |  |
| version (optional) | string |  |
| private (optional) | boolean |  |
| author (optional) | object |  |
| repository  | object |  |
| homepage (optional) | string |  |
| dependencies (optional) | object |  |
| devDependencies (optional) | object |  |
| peerDependencies (optional) | object |  |
| bin (optional) | object |  |
| workspaces (optional) | array |  |
| type (optional) | string | # Classification<br /><br />TODO: think about what the differences are and how we need to change processes to make it all work good<br /><br />### Possible values<br /><br />js: only js (no node) (well, ts of course)<br /><br />node: includes other node packages, operations, core-imports, or globals.<br /><br />server: exposes something on some port when it is ran and uses node code<br /><br />web: uses react and exposes something on some port when it is ran<br /><br />app: uses react-native and exposes something on some port when it is ran<br /><br />ui-es6: uses react (with (native)), which main entry points to typescript es6 files (this ui package cannot be built, should be transpiled)<br /><br />ui-es5: ui which main entry points to javascript es5 files (this ui package can be built) |
| sensible (optional) | object | Sensible-global configurations |
| operation (optional) | object | anything configurable about the operation.<br /><br />This can live in operation.json or as a prop in package.json. |


## TsComment

(from: `code-types`)

jsonMultiple model



comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.

special line prefixes:
- TODO:
- DISCUSSION:
- IDEA:
- LATER:
- NB:

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

## TsComment: object



```md
comments are basically one-or-multi-line human content inside of typescript files, so it's a very important to do something useful with them.

special line prefixes:
- TODO:
- DISCUSSION:
- IDEA:
- LATER:
- NB:

The convention should be that single-line comments should start with that. This then becomes the type of the comment. You can also put multiple prefixes at the start.

Example:

`// TODO: NB: this is a todo but its also important`

Multiline comments can also have one or multiple types in their text, but they should not be split into multiple comments as the context could be needed some times.



There are also some other things comments can say about statements, but these should be inside the frontmatter, and are much more flexible.
- classified[0-10] indicating level of classification. This way I can share subsets of the codebase, maybe...
- privacy
- ...?

NB: with the current setup we can also parse `.md` files as being a TsComment, keep it that way!

NB: comments are part of the code, so they should always be in English!
```


Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| comment  | string | a string that is known to contain markdown. |
| parameters  | object |  |
| types  | array | These are the type indicators that were found in this single or multiline comment. Can be multiple. |
| firstLine  | number | first line of the comment |
| lastLine  | number | last line of the comment |
| statementName (optional) | string | statement name the comment belongs to |
| rawStatement (optional) | string | raw statement text the comment belongs to |


## TsFunction

(from: `code-types`)

jsonMultiple model



Interface for arrow functions and normal functions

## TsFunction: object



```md
Interface for arrow functions and normal functions
```


Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| description (optional) | string | a string that is known to contain markdown. |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| returnType  | object | all info that should always be collected when indexing any type interface |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| size  | object | type interface that can be used to summarize multiple files |
| commentSize (optional) | object | type interface that can be used to summarize multiple files |
| codeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCommentSize (optional) | object | type interface that can be used to summarize multiple files |
| cumulativeCodeSize (optional) | object | type interface that can be used to summarize multiple files |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |


## TsInterface

(from: `code-types`)

jsonMultiple model



TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.

## TsInterface: object



```md
TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.
```


Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| type  | object | all info that should always be collected when indexing any type interface |
| description (optional) | string | a string that is known to contain markdown. |
| commentsInside  | array |  |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | if true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />is automatically set to true when indexing and when one of the following statements holds true<br />- if the doc-comment contains frontmatter with `isDbModel` or `defaultDbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| defaultDbStorageMethod (optional) | string |  |


## TsBuildError

(from: `code-types`)

jsonMultiple model





## TsBuildError: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| line (optional) | number |  |
| character (optional) | number |  |
| message  | string |  |


## TsLintWarning

(from: `code-types`)

jsonMultiple model





## TsLintWarning: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| line  | number |  |
| character  | number |  |
| message  | string |  |


## TsVariable

(from: `code-types`)

jsonMultiple model





## TsVariable: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| value  | string |  |
| classification  | string |  |
| type  | object | all info that should always be collected when indexing any type interface |
| comments  | array | surrounding comments and comments inside of the variable |


## TsImport

(from: `code-types`)

jsonMultiple model





## TsImport: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| comments  | array | surrounding comments and comments inside of the import |
| module  | string |  |
| alias (optional) | string | TODO: not sure, but I believe alias should be defined at the import, not at the export, right? |
| classification  | string | node: node core packages like fs and path<br /><br />react: react standard packages like react, react-native, expo, react-dom, etc.<br /><br />package: packages from npm that are not classified as operations<br /><br />operation: operations from our monorepo<br /><br />internal: imports from other places in the same operation<br /><br />NB: don't confuse this with OperationClassification |
| type (optional) | string | sometimes the import statement module referenced cannot be found, in that case it cannot be known whether the import should contain a type or value, so it will be undefined. |
| hasGeneric (optional) | boolean | only for type exports. tells you whether or not the type has one or more generic parameter(s) |
| isAbsolute  | boolean |  |
| isModuleResolved  | boolean |  |
| isModuleFromMonorepo  | boolean |  |


## TsExport

(from: `code-types`)

jsonMultiple model





## TsExport: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeOperationBasePathFromProjectRoot  | string | relative file path from the project-root to the operation (DOES include operation folder)<br /><br />e.g. /tools/cognition/typescript/index-typescript |
| relativeFilePathFromSrc  | string | relative file path from the operation src<br /><br />e.g. general.ts |
| srcFileId  | string | file id (same as relativeFilePathFromSrc but without extension)<br /><br />e.g. "general" |
| operationName (optional) | string | operation package.json name |
| operationFolderName  | string | operation folder name (by convention, must be identical to operationName, but it could have some mistakes) |
| relativePathFromProjectRoot  | string | relative file or folder path from the project root |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| comments  | array | surrounding comments and comments inside of the import |
| type (optional) | string |  |
| alias (optional) | string | used for duplicate export names |
| hasGeneric (optional) | boolean | only for type exports. tells you whether or not the type has one or more generic parameter(s) |


