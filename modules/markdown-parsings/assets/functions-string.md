# bundleFolderWithMarkdown

finds all md files in a folder and creates a single MarkdownParse

handy for creating a single documentation file or other things that have to include multiple markdown files in a structured way

NB: it recursively structures the files and folders with headings



## Parameters (2)

### Parameter 1: absoluteFolderPath: string







### Parameter 2: fileName (optional): string



> filename to include in the final MarkdownParse



# bundleToBookMarkdown

Input: BundleConfig (one or more folder(s), readme, operations with a docs folder)

Output should be all md files concatenated in the right order with the right titles



## Parameters (1)

### Parameter 1: config: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleConfig  | object | --- dbStorageMethod: jsonSingle<br />--- |
| title (optional) | string |  |
| coverImagePath (optional) | string |  |
| isModulesIncluded (optional) | boolean |  |
| manualProjectRoot (optional) | string |  |


# bundleToMarkdown

creates a summary for a whole bundle

NB: Related to `bundleToBookMd`

## Returns: string







## Parameters (1)

### Parameter 1: {  bundleConfigId,  includeModules,}: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| bundleConfigId  | string |  |
| includeModules (optional) | boolean | if true, also includes the private modules |


# deployToVercel

NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...

should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api

should return an url where the project will be served and the estimated time when it will be live



# emailMarkdownParse

should email a markdown parse to some email (or multiple)



# generateStaticSite

generates static site from a markdown file, with a menu on the right by default

uses next.js

because it is static, the markdown can be in the frontend assets and there is no need for a backend



## Parameters (1)

### Parameter 1: {  projectRelativeMdFilePath,  singlePage,}: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| singlePage (optional) | boolean |  |
| projectRelativeMdFilePath (optional) | string |  |


# getOutline

low-level function that gets the outline for MarkdownParse

NB: with books usually the pages are referred in the outline. Since that depends on the font size and dimensions, this cannot be done straight from the markdown parse. Eventually we probably need to check the made pdf for its content, maybe there is even a pdf feature that creates an outline for you. There must be more people having this problem.

## Returns: string







## Parameters (1)

### Parameter 1: markdownParse: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string | if available, this can be the filename of the markdown in this markdown-parse. Can be used for things like merging |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |


# getTitlesRecursively

helper function to get a nested array of the titles and its subtitles



## Parameters (1)

### Parameter 1: chunk: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |


# markdownChunkToMarkdownStringRecursive



## Returns: string







## Parameters (1)

### Parameter 1: markdownChunk: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |


# markdownChunksToMarkdownStringRecursive



## Returns: string







## Parameters (1)

### Parameter 1: markdownChunks: array

- MarkdownChunk: object





# markdownToSayable

all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.

## Returns: array

- null: object





## Parameters (1)

### Parameter 1: {  markdown,  markdownFilePath,}: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| markdownFilePath  | string |  |
| markdown  | object |  |


# mdToPdf

Have function `mdToPdf` like the vscode plugin. Probably exists.

However, may be good to do it myself since I want different renderings



## Parameters (1)

### Parameter 1: {  absoluteFilePath,  markdown,  markdownParse,  pdfAbsoluteFilePath,}: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| absoluteFilePath (optional) | string |  |
| markdown (optional) | string |  |
| markdownParse (optional) | object |  |
| pdfAbsoluteFilePath (optional) | string |  |


# mergeMarkdownParse

Merges multiple markdown parses to create a new markdown parse



## Parameters (2)

### Parameter 1: markdownParses: array

- MarkdownParse: object





### Parameter 2: fileName (optional): string







# operationRadio

randomly plays mp3 summaries of operations on the project



# operationToMarkdown

converts an operation and all its contents into a flat markdown file that contains the needed information. configurable.

markdown for reading (so there are no links)



## Parameters (1)

### Parameter 1: config: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | string |  |
| manualProjectRoot (optional) | string |  |
| isSummary (optional) | boolean | if true, just returns the outline of the operation (function + interface names, size, deps) |
| mergeDocsInline (optional) | boolean | if true, it will merge all docs into the readme, not linking to them (by default, docs will be linked to) |
| returnType (optional) | string | save: saves the result in the operation `README.md` and `CONTRIBUTING.md` and other default md files<br /><br />string: returns the full markdown string<br /><br />parse: returns the markdownparse |


# printNestedTitles

helper function (recursive) that prints nested titles with .. as prefix and a newline after every title

TODO: allow for numbering titles

## Returns: string







## Parameters (2)

### Parameter 1: nestedTitles (optional): array

- NestedTitle: object





### Parameter 2: depth (optional): number







# print

should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)

this function maybe needs "generateStaticSite"



## Parameters (1)

### Parameter 1: { absoluteFilePath }: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| absoluteFilePath  | string |  |


# projectToMarkdown

summarizes the whole OS project into a markdown string

## Returns: string







## Parameters (1)

### Parameter 1: {  includeTodo,}: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| includeTodo (optional) | boolean |  |
| includeOperationDetails (optional) | boolean |  |


# propertyToTableRow



## Returns: string







## Parameters (1)

### Parameter 1: property: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| required  | boolean | NB: can't we put this in the SimplifiedSchema itself? |


# sayablesToMp3

Creates a single audiofile of a Sayable[] and stores that in a configured location



## Parameters (1)

### Parameter 1: {  sayables,  destinationAbsoluteFilePath,}: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| destinationAbsoluteFilePath  | string |  |
| sayables  | array |  |


# selectRandomOperation

selects a random operation



## Parameters (1)

### Parameter 1: baseFolderPath (optional): string







# simplifiedSchemaToMarkdownString

Should render a string with one or more markdown tables to represent the simplifiedSchema

## Returns: string







## Parameters (4)

### Parameter 1: simplifiedSchema (optional): object



> JSONSchema7 derivative that has the following capabilities and and characteristics...<br /><br />- does not include objects in objects that are also referenced to using xxxSlug or xxxId<br />- recursively finds the references and expands them, unless the references are circular<br />- easier to read<br />- has all the information we need<br />- is able to generate an object with values in the exact format the function needs it<br />- is able to easily generate a form

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string |  |
| circularRefName (optional) | string | sometimes we still need to reference to another schema because this thing is recursive. In that case the ref name will be here |
| enum (optional) | array | in case of enums this could appear... mostly strings, but e.g. numbers can also be an enum I think |
| properties (optional) | array | in case of object, this will always appear |
| items (optional) | array | in case of arrays, this will always appear |


### Parameter 2: name: string







### Parameter 3: isRequired: boolean







### Parameter 4: level (optional): number



> the headers level, defaults to 1



# test





# tsFunctionToMarkdownString

TsFunction:
- name and operation
- size
- description (doc-comment)
- input, output

## Returns: string







## Parameters (1)

### Parameter 1: tsFunction: object



> --- dbStorageMethod: jsonSingle<br />---<br /><br />Interface for arrow functions and normal functions

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| isExported  | boolean | The function is immediately exported upon creation. If the os dev tools are being used, this means it is also exported from the operation |
| isApiExposed  | boolean | for all exported functions in node operations, true by default false for others<br /><br />can be overwritten using frontmatter |
| rawText (optional) | string | raw text of the function |
| commentsInside  | array | all comments found in a function and the node that they belong to |
| parameters (optional) | array | parameters the function takes as its arguments, if any |
| maxIndentationDepth  | number | maximum amount of times indedented in this function<br /><br />good for determining the complexity and finding code that can be simplified/destructured into smaller pieces |
| dependantFiles (optional) | array | finds all files that import this function<br /><br />NB: this is not indexed because this information has nothing to do with the operation itself, but the exposure to the broader monorepo. This is calculated on the fly. |


# tsInterfaceToMarkdownString

properties, their type, and their description

use simplifiedJsonSchema, but split up nested things into multiple tables (ive written a thing for splitting up nested objects before, use that)

## Returns: string







## Parameters (1)

### Parameter 1: tsInterface: object



> --- dbStorageMethod: jsonSingle<br />---<br /><br />TODO: Just like parameters, this should be linted for. If you define an interface that's not declared here, that should ring a bell.

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null | name of operation the model belongs to<br /><br />- calculated value (not stored in database)<br />- can be `null` or an actual operationName that it was saved at<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| projectRelativePath  | string | path to dbfile<br /><br />- calculated value (not stored in database)<br />- relatively from the project (without slash at start)<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| operationRelativePath (optional) | string | path to db file<br /><br />- relatively from the operation root folder (without slash at start)<br />- calculated value (not stored in database)<br />- can be `undefined` if the db file does not belong to an operation<br />- can be `undefined` when you are creating an item, because then it can be set for you |
| id  | string | unique id of the model |
| name  | string | name (identifier) of the model |
| slug  | string | kebab-case variant of the name |
| operationRelativeTypescriptFilePath  | string | relative file path from the operation that this indexed instance is referencing to<br /><br />e.g. src/general.ts<br /><br />(no preceding slash) |
| commentsInside  | array |  |
| isExported  | boolean | boolean indicating whether or not this interface is exported from the file, and with that, from the operation |
| hasGeneric  | boolean | boolean indicating whether or not this interface uses one or more generic variables |
| rawText (optional) | string | raw interface text, coming from ts-morph |
| extensions (optional) | array | if the interface extends anything, names will be specified here |
| isDbModel  | boolean | If true, this interface is marked as a db model, which means it will be included in the db function autocompletion so it's easy to store and fetch data in this format.<br /><br />Is automatically set to true when indexing and when one of the following statements holds true<br /><br />- if the doc-comment contains frontmatter with `isDbModel` or `dbStorageMethod` specified<br />- if the interface last word is "db" or "model" and if there are minimum 2 words<br />- if the interface extends some other special interface |
| isOperationIndex  | boolean | If this is true, this is a db-model that is ALWAYS attached to an operation.<br /><br />By default this means it will get a folder in the `db` folder in the operation folder, where the interface will be stored linked to the file-id in specified folder.<br /><br />However, you can also specify a `storageLocationRelativeFilePath` if you want to store the model on an exact location relative to the operation root. |
| operationStorageLocationRelativeFilePath (optional) | string | If given, specify a file path here where the data should be stored. Must be an operation relative path.<br /><br />This will map onto the "operationRelativePath" for that instance.<br /><br />NB: Since this is a single file per project or per operation, it will overwrite your data in case of `jsonSingle` or `markdown` storage. |


# upMarkdownChunkLevelRecursively

Ups the levels of the markdownChunk array, recursively.

Can be useful for merging multiple markdown sources



## Parameters (1)

### Parameter 1: markdownChunks (optional): array

- MarkdownChunk: object



