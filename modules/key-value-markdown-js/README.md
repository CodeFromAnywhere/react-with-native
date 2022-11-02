# Key value markdown js

key-value-markdown-js (js operation)



# Outline

## Functions

- [flattenMarkdownChunks](#flattenMarkdownChunks)
- [getKvmdItemsRecursively](#getKvmdItemsRecursively)
- [getParagraphsRecursively](#getParagraphsRecursively)
- [kvmdDataMap](#kvmdDataMap)
- [kvmdDataToString](#kvmdDataToString)
- [kvmdParseToMarkdownString](#kvmdParseToMarkdownString)
- [markdownStringToKvmdParse](#markdownStringToKvmdParse)
- [parseKvmdLine](#parseKvmdLine)

## Interfaces

- [CategoryStack](#categorystack)
- [DbFileLocation](#dbfilelocation)
- [KeyValueMarkdownModelType](#keyvaluemarkdownmodeltype)
- [KeyValueMarkdownParse](#keyvaluemarkdownparse)
- [MarkdownChunk](#markdownchunk)

## Variables

- [exampleKeyValueMarkdownParse](#examplekeyvaluemarkdownparse)
- [exampleKvMdString](#examplekvmdstring)
- [exampleLine](#exampleline)
- [flattenMarkdownChunks](#flattenmarkdownchunks)
- [getKvmdItemsRecursively](#getkvmditemsrecursively)
- [getParagraphsRecursively](#getparagraphsrecursively)
- [kvmdDataMap](#kvmddatamap)
- [kvmdDataToString](#kvmddatatostring)
- [kvmdParseToMarkdownString](#kvmdparsetomarkdownstring)
- [markdownStringToKvmdParse](#markdownstringtokvmdparse)
- [parseKvmdLine](#parsekvmdline)
- [test](#test)



# Functions

## flattenMarkdownChunks

### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: markdownChunks: array

- MarkdownChunk: object






## getKvmdItemsRecursively

recursively dives into the Chunk to get all kvmd items

NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name


### Returns: array

- null: object






### Parameters (2)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string |  |
| children (optional) | array |  |



#### Parameter 2: categoryStackCalculatedUntilNow (optional): array

- null: string






## getParagraphsRecursively

recursively dives into the Chunk to get all paragraphs inside


### Returns: array

- null: object






### Parameters (2)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string |  |
| children (optional) | array |  |



#### Parameter 2: categoryStackCalculatedUntilNow (optional): array

- null: string






## kvmdDataMap

DEPRECATED: probably never needed, unless I make it useful

mapper function to give a kvmd data object other parameters.

NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.


### Returns: array

- null: object






### Parameters (2)

#### Parameter 1: data: array

- KeyValueMarkdownModelType: object






#### Parameter 2: {    keyName,    valueName,    categoryStackCalculatedName,    commentName,  }: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| keyName (optional) | string |  |
| valueName (optional) | string |  |
| commentName (optional) | string |  |
| categoryStackCalculatedName (optional) | string |  |



## kvmdDataToString

parses KeyValueMarkdownModelType into a string which can be part of a new markdown file

NB: we need to know the previous line as well because the header we need to print depends on it




### Parameters (2)

#### Parameter 1: kvmdData: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| isHeaderCalculated  | boolean |  |



#### Parameter 2: previous (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| isHeaderCalculated  | boolean |  |



## kvmdParseToMarkdownString

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file




### Parameters (1)

#### Parameter 1: keyValueMarkdownParse: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| data  | array |  |



## markdownStringToKvmdParse

parses a key value md string (with support for headings and frontmatter)


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| data  | array |  |



### Parameters (2)

#### Parameter 1: kvMdString: string

#### Parameter 2: dbFileLocation: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## parseKvmdLine

parses a kv md line with data into a key, value, and comment (if available)

if the key is an empty string, the line will return undefined


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment (optional) | object |  |



### Parameters (1)

#### Parameter 1: string: string

# Interfaces

## CategoryStack

- null: string






## DbFileLocation

Object used to hand over all information about the location of a db-file in a structured way





Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean |  |



## KeyValueMarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| data  | array |  |



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


# Variables

## exampleKeyValueMarkdownParse (exported const)

## exampleKvMdString (exported const)

## exampleLine (exported const)

## flattenMarkdownChunks (exported const)

## getKvmdItemsRecursively (exported const)

recursively dives into the Chunk to get all kvmd items

NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name


## getParagraphsRecursively (exported const)

recursively dives into the Chunk to get all paragraphs inside


## kvmdDataMap (exported const)

DEPRECATED: probably never needed, unless I make it useful

mapper function to give a kvmd data object other parameters.

NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.


## kvmdDataToString (exported const)

parses KeyValueMarkdownModelType into a string which can be part of a new markdown file

NB: we need to know the previous line as well because the header we need to print depends on it


## kvmdParseToMarkdownString (exported const)

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file


## markdownStringToKvmdParse (exported const)

parses a key value md string (with support for headings and frontmatter)


## parseKvmdLine (exported const)

parses a kv md line with data into a key, value, and comment (if available)

if the key is an empty string, the line will return undefined


## test (unexported const)

