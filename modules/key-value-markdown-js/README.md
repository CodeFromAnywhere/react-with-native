# Key value markdown js

key-value-markdown-js (node operation)

Size: 486 LOC, 2132 data characters, 266 text characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: KeyValueMarkdownParse, MarkdownChunk, MarkdownParagraph, MarkdownChunk, MarkdownParagraph, CategoryStack, makeTest, mdToJsonParse, KeyValueMarkdownModelType, KeyValueMarkdownParse, makeTest, mdToJsonParse, KeyValueMarkdownModelType, MarkdownHeader, KeyValueMarkdownModelType, notEmpty, KeyValueMarkdownModelType, KeyValueMarkdownParse, frontmatterParseToString, makeTest, KeyValueMarkdownModelType, kebabCase, makeTest

# Outline

## Functions

- [flattenMarkdownChunks](#flattenMarkdownChunks)
- [getParagraphsRecursively](#getParagraphsRecursively)
- [kvMdStringToJson](#kvMdStringToJson)
- [kvmdDataMap](#kvmdDataMap)
- [kvmdDataToString](#kvmdDataToString)
- [kvmdParseToMarkdownString](#kvmdParseToMarkdownString)
- [parseLine](#parseLine)



# Functions

## flattenMarkdownChunks

Max. indexation depth: 2, 



### Returns: array

- null: object





### Arguments

#### markdownChunks: array

- MarkdownChunk: object





## getParagraphsRecursively

Max. indexation depth: 3, 

recursively dives into the Chunk to get all paragraphs inside

### Returns: array

- null: object





### Arguments

#### chunk: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number | 0 is a paragraph 1-6 is h1 until h6 |
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |


#### categoryStackUntilNow (optional): array

- null: string





## kvMdStringToJson

Max. indexation depth: 5, 

parses a key value md string (with support for headings and frontmatter)

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| data  | array |  |


### Arguments

#### kvMdString: string







#### relativeFilePath (optional): string







## kvmdDataMap

Max. indexation depth: 3, 

DEPRECATED: probably never needed, unless I make it useful

mapper function to give a kvmd data object other parameters.

NB: not sure if this is useful. it would be useful if we could auto-generate the application of this function for multiple db models.

### Returns: array

- null: object





### Arguments

#### data: array

- KeyValueMarkdownModelType: object





#### {    keyName,    valueName,    categoryStackName,    commentName,  }: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| keyName (optional) | string | key by default |
| valueName (optional) | string | value by default |
| commentName (optional) | string | comment by default |
| categoryStackName (optional) | string | categoryStack by default |


## kvmdDataToString

Max. indexation depth: 6, 

parses KeyValueMarkdownModelType into a string which can be part of a new markdown file

NB: we need to know the previous line as well because the header we need to print depends on it

### Returns: string







### Arguments

#### kvmdData: object



```md
handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"
```


Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | Calculated:<br /><br />by taking the relative file path + a stringified version of the index.<br /><br />used for compatibility with some general purpose functions |
| index  | number | line where the kv was found (at any given moment this is an unqiue identifier, but it may change without notice, so it's not a good idea to store stuff in kvmd if it has references to the id) |
| relativeIndex  | number | relative index from the category header, starting count with 1. if there is no header, also counts starting with 1 |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| categoryStack  | array |  |


#### previous (optional): object



```md
handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"
```


Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string | Calculated:<br /><br />by taking the relative file path + a stringified version of the index.<br /><br />used for compatibility with some general purpose functions |
| index  | number | line where the kv was found (at any given moment this is an unqiue identifier, but it may change without notice, so it's not a good idea to store stuff in kvmd if it has references to the id) |
| relativeIndex  | number | relative index from the category header, starting count with 1. if there is no header, also counts starting with 1 |
| name  | string | key<br /><br />should be english because it's kind of part of the codebase! |
| slug  | string | calculated: slug for this key (kebab case form of the name) |
| value (optional) | string | value behind the semicolom (:). If not given, will be undefined.<br /><br />If possible, will be parsed to a number, boolean, null or undefined... otherwise it's a string<br /><br />can be any language that we can detect |
| comment  | string | comment in html syntax. if not given, will be null |
| categoryStack  | array |  |


## kvmdParseToMarkdownString

Max. indexation depth: 4, 

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file

### Returns: string







### Arguments

#### keyValueMarkdownParse: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| data  | array |  |


## parseLine

Max. indexation depth: 2, 

parses a kv md line with data into a key, value, and comment (if available)

## Returns: unknown

### Arguments

#### string: string







