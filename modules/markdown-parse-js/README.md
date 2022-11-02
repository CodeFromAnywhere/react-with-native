# Markdown parse js

markdown-parse-js (js operation)

js-only operation containing all kinds of functions that help parsing markdown




# Outline

## Functions

- [getChunkParagraphsRecursively](#getChunkParagraphsRecursively)
- [getImplicitId](#getImplicitId)
- [getMarkdownIntro](#getMarkdownIntro)
- [getMarkdownParseParagraphs](#getMarkdownParseParagraphs)
- [getMarkdownReferencePaths](#getMarkdownReferencePaths)
- [getMarkdownReferencesFromParagraph](#getMarkdownReferencesFromParagraph)
- [markdownParseToMarkdownString](#markdownParseToMarkdownString)
- [mdContentParseRecursively](#mdContentParseRecursively)
- [mdToJsonParse](#mdToJsonParse)
- [parseFrontmatterMarkdownString](#parseFrontmatterMarkdownString)
- [parseMarkdownParagraph](#parseMarkdownParagraph)
- [parseMdToChunks](#parseMdToChunks)
- [removeHeaderPrefix](#removeHeaderPrefix)

## Interfaces

- [MarkdownChunk](#markdownchunk)
- [MarkdownCodeblock](#markdowncodeblock)
- [MarkdownParagraphChunk](#markdownparagraphchunk)
- [MarkdownParse](#markdownparse)
- [MarkdownParseConfig](#markdownparseconfig)
- [MarkdownReference](#markdownreference)
- [SimplifiedSchema](#simplifiedschema)

## Variables

- [exampleMarkdownFileContents](#examplemarkdownfilecontents)
- [getChunkParagraphsRecursively](#getchunkparagraphsrecursively)
- [getImplicitId](#getimplicitid)
- [getMarkdownIntro](#getmarkdownintro)
- [getMarkdownParseParagraphs](#getmarkdownparseparagraphs)
- [getMarkdownReferencePaths](#getmarkdownreferencepaths)
- [getMarkdownReferencesFromParagraph](#getmarkdownreferencesfromparagraph)
- [markdownParseToMarkdownString](#markdownparsetomarkdownstring)
- [mdContentParseRecursively](#mdcontentparserecursively)
- [mdToJsonParse](#mdtojsonparse)
- [parseFrontmatterMarkdownString](#parsefrontmattermarkdownstring)
- [parseMarkdownParagraph](#parsemarkdownparagraph)
- [parseMdToChunks](#parsemdtochunks)
- [removeHeaderPrefix](#removeheaderprefix)
- [test](#test)



# Functions

## getChunkParagraphsRecursively

Get all paragraphs (`content` values) recursively from a `MarkdownChunk`


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string |  |
| children (optional) | array |  |



## getImplicitId

Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown




### Parameters (1)

#### Parameter 1: title: string

## getMarkdownIntro

This function takes a markdown parse and gets the first paragraph and a title from it, if available.

Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| title  | object |  |
| firstParagraph  | object |  |



### Parameters (1)

#### Parameter 1: markdownParse: object

## getMarkdownParseParagraphs

Gets all paragraphs (recursively) from a `MarkdownParse`


### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: markdownParse: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string |  |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| content (optional) | array |  |
| raw  | string |  |



## getMarkdownReferencePaths

### Returns: array

- null: string






### Parameters (1)

#### Parameter 1: markdownString: string

## getMarkdownReferencesFromParagraph

Gets all markdown references from a paragraph


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: paragraph: string

## markdownParseToMarkdownString

### Parameters (1)

#### Parameter 1: markdownParse: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string |  |
| createdAt (optional) | number |  |
| openedAt (optional) | number |  |
| updatedAt (optional) | number |  |
| deletedAt (optional) | number |  |
| createdFirstAt (optional) | number |  |
| content (optional) | array |  |
| raw  | string |  |



## mdContentParseRecursively

recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]

Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets




### Parameters (2)

#### Parameter 1: markdownString: string

#### Parameter 2: level: number

## mdToJsonParse

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!




### Parameters (3)

#### Parameter 1: markdownString: string

#### Parameter 2: fileName (optional): string

## parseFrontmatterMarkdownString

splits a markdown string into its frontmatter object and the raw content (without frontmatter)




### Parameters (2)

#### Parameter 1: markdownWithFrontmatter: string

## parseMarkdownParagraph

Parse markdown paragraph

Should split it up for every thing it encounters...


### Returns: array

- null: object






### Parameters (1)

#### Parameter 1: paragraph: string

## parseMdToChunks

should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.




### Parameters (2)

#### Parameter 1: markdownString: string

#### Parameter 2: level: number

## removeHeaderPrefix

removes header prefix (##### etc) and trims whats behind that




### Parameters (1)

#### Parameter 1: string: string

# Interfaces

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



## MarkdownCodeblock

Properties: 

 | Name | Type | Description |
|---|---|---|
| type (optional) | string |  |
| code (optional) | string |  |



## MarkdownParagraphChunk

Properties: 

 | Name | Type | Description |
|---|---|---|
| isNewline (optional) | boolean |  |
| codeblock (optional) | object |  |
| text (optional) | string |  |
| isBolded (optional) | boolean |  |
| isItalic (optional) | boolean |  |
| isBackticked (optional) | boolean |  |
| reference (optional) | object |  |



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



## MarkdownParseConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| noFinal (optional) | boolean |  |
| frontmatterSchema (optional) | object |  |



## MarkdownReference

Properties: 

 | Name | Type | Description |
|---|---|---|
| alt (optional) | string |  |
| path  | string |  |
| isAsset (optional) | boolean |  |



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


# Variables

## exampleMarkdownFileContents (exported const)

## getChunkParagraphsRecursively (exported const)

Get all paragraphs (`content` values) recursively from a `MarkdownChunk`


## getImplicitId (exported const)

Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown


## getMarkdownIntro (exported const)

This function takes a markdown parse and gets the first paragraph and a title from it, if available.

Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.


## getMarkdownParseParagraphs (exported const)

Gets all paragraphs (recursively) from a `MarkdownParse`


## getMarkdownReferencePaths (exported const)

## getMarkdownReferencesFromParagraph (exported const)

Gets all markdown references from a paragraph


## markdownParseToMarkdownString (exported const)

## mdContentParseRecursively (exported const)

recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]

Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets


## mdToJsonParse (exported const)

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!


## parseFrontmatterMarkdownString (exported const)

splits a markdown string into its frontmatter object and the raw content (without frontmatter)


## parseMarkdownParagraph (exported const)

Parse markdown paragraph

Should split it up for every thing it encounters...


## parseMdToChunks (exported const)

should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.


## removeHeaderPrefix (exported const)

removes header prefix (##### etc) and trims whats behind that


## test (unexported const)

