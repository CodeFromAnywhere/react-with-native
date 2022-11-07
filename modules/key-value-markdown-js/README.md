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



# Functions

## flattenMarkdownChunks()

| Input      |    |    |
| ---------- | -- | -- |
| markdownChunks | `MarkdownChunk`[] |  |
| **Output** | { paragraph: string, <br />categoryStackCalculated: string[], <br />level?: number, <br /> }[]   |    |



## getKvmdItemsRecursively()

recursively dives into the Chunk to get all kvmd items

NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name


| Input      |    |    |
| ---------- | -- | -- |
| chunk | `MarkdownChunk` |  |,| categoryStackCalculatedUntilNow (optional) | `CategoryStack` |  |
| **Output** | {  }[]   |    |



## getParagraphsRecursively()

recursively dives into the Chunk to get all paragraphs inside


| Input      |    |    |
| ---------- | -- | -- |
| chunk | `MarkdownChunk` |  |,| categoryStackCalculatedUntilNow (optional) | `CategoryStack` |  |
| **Output** | { paragraph: string, <br />categoryStackCalculated: string[], <br />level?: number, <br /> }[]   |    |



## kvmdDataMap()

DEPRECATED: probably never needed, unless I make it useful

mapper function to give a kvmd data object other parameters.

NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.


| Input      |    |    |
| ---------- | -- | -- |
| data | `KeyValueMarkdownModelType`[] |  |,| {
    keyName,
    valueName,
    categoryStackCalculatedName,
    commentName,
  } | { keyName?: string, <br />valueName?: string, <br />commentName?: string, <br />categoryStackCalculatedName?: string, <br /> } |  |
| **Output** | {  }[]   |    |



## kvmdDataToString()

parses KeyValueMarkdownModelType into a string which can be part of a new markdown file

NB: we need to know the previous line as well because the header we need to print depends on it


| Input      |    |    |
| ---------- | -- | -- |
| kvmdData | `KeyValueMarkdownModelType` |  |,| previous (optional) | `KeyValueMarkdownModelType` |  |
| **Output** | `String`   |    |



## kvmdParseToMarkdownString()

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file


| Input      |    |    |
| ---------- | -- | -- |
| keyValueMarkdownParse | `KeyValueMarkdownParse` |  |
| **Output** | `String`   |    |



## markdownStringToKvmdParse()

parses a key value md string (with support for headings and frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| kvMdString | string |  |,| dbFileLocation | `DbFileLocation` |  |
| **Output** | { parameters: {  }, <br />data: {  }[], <br /> }   |    |



## parseKvmdLine()

parses a kv md line with data into a key, value, and comment (if available)

if the key is an empty string, the line will return undefined


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** | { id: string, <br />name: string, <br />slug: string, <br />value?: ul / trin / umbe / als / ru, <br />comment?: {  }, <br /> }   |    |


# Variables

## 📄 exampleKeyValueMarkdownParse (exported const)

## 📄 exampleKvMdString (exported const)

## 📄 exampleLine (exported const)

## 📄 flattenMarkdownChunks (exported const)

## 📄 getKvmdItemsRecursively (exported const)

recursively dives into the Chunk to get all kvmd items

NB: this doesn't have a reference to its parent yet, but this will be added in fs-orm on the fly because the key for that is based on the model name


## 📄 getParagraphsRecursively (exported const)

recursively dives into the Chunk to get all paragraphs inside


## 📄 kvmdDataMap (exported const)

DEPRECATED: probably never needed, unless I make it useful

mapper function to give a kvmd data object other parameters.

NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.


## 📄 kvmdDataToString (exported const)

parses KeyValueMarkdownModelType into a string which can be part of a new markdown file

NB: we need to know the previous line as well because the header we need to print depends on it


## 📄 kvmdParseToMarkdownString (exported const)

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file


## 📄 markdownStringToKvmdParse (exported const)

parses a key value md string (with support for headings and frontmatter)


## 📄 parseKvmdLine (exported const)

parses a kv md line with data into a key, value, and comment (if available)

if the key is an empty string, the line will return undefined

