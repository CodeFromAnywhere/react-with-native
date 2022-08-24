# Db util

db-util (node operation)

Size: 28 LOC, 2040 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: TsInterface, db, onlyUnique2

# Outline

## Functions

- [getDbModelsFromOperations](#getDbModelsFromOperations)
- [filterInterfacesFromOperationNames](#filterInterfacesFromOperationNames)



# Functions

## getDbModelsFromOperations

Max. indexation depth: 3, 



## Returns: unknown

### Arguments

#### operationNames: array

- null: string





## filterInterfacesFromOperationNames

Max. indexation depth: 3, 



## Returns: unknown

### Arguments

#### tsInterface: object



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


#### operationNames (optional): array

- null: string





