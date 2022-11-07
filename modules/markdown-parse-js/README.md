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

- [MarkdownCodeblock](#markdowncodeblock)
- [MarkdownParagraphChunk](#markdownparagraphchunk)
- [MarkdownParseConfig](#markdownparseconfig)
- [MarkdownReference](#markdownreference)

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



# Functions

## getChunkParagraphsRecursively()

Get all paragraphs (`content` values) recursively from a `MarkdownChunk`


| Input      |    |    |
| ---------- | -- | -- |
| chunk | `MarkdownChunk` |  |
| **Output** | string[]   |    |



## getImplicitId()

Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown


| Input      |    |    |
| ---------- | -- | -- |
| title | string |  |
| **Output** | `String`   |    |



## getMarkdownIntro()

This function takes a markdown parse and gets the first paragraph and a title from it, if available.

Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.


| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | {  } |  |
| **Output** | { title: {  }, <br />firstParagraph: {  }, <br /> }   |    |



## getMarkdownParseParagraphs()

Gets all paragraphs (recursively) from a `MarkdownParse`


| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | `MarkdownParse` |  |
| **Output** | string[]   |    |



## getMarkdownReferencePaths()

| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | string[]   |    |



## getMarkdownReferencesFromParagraph()

Gets all markdown references from a paragraph


| Input      |    |    |
| ---------- | -- | -- |
| paragraph | string |  |
| **Output** | { alt?: string, <br />path: string, <br />isAsset?: boolean, <br /> }[]   |    |



## markdownParseToMarkdownString()

| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | `MarkdownParse` |  |
| **Output** | `String`   |    |



## mdContentParseRecursively()

recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]

Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |,| level | number |  |
| **Output** |    |    |



## mdToJsonParse()

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |,| fileName (optional) | string |  |,| config (optional) | `MarkdownParseConfig` |  |
| **Output** |    |    |



## parseFrontmatterMarkdownString()

splits a markdown string into its frontmatter object and the raw content (without frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| markdownWithFrontmatter | string |  |,| config (optional) | `MarkdownParseConfig` |  |
| **Output** |    |    |



## parseMarkdownParagraph()

Parse markdown paragraph

Should split it up for every thing it encounters...


| Input      |    |    |
| ---------- | -- | -- |
| paragraph | string |  |
| **Output** | { isNewline?: boolean, <br />codeblock?: { type?: string, <br />code?: string, <br /> }, <br />text?: string, <br />isBolded?: boolean, <br />isItalic?: boolean, <br />isBackticked?: boolean, <br />reference?: { alt?: string, <br />path: string, <br />isAsset?: boolean, <br /> }, <br /> }[]   |    |



## parseMdToChunks()

should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |,| level | number |  |
| **Output** |    |    |



## removeHeaderPrefix()

removes header prefix (##### etc) and trims whats behind that


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |


# Interfaces

## 🔷 MarkdownCodeblock

Properties: 

 | Name | Type | Description |
|---|---|---|
| type (optional) | string |  |
| code (optional) | string |  |



## 🔷 MarkdownParagraphChunk

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



## 🔷 MarkdownParseConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| noFinal (optional) | boolean |  |
| frontmatterSchema (optional) | object |  |



## 🔷 MarkdownReference

Properties: 

 | Name | Type | Description |
|---|---|---|
| alt (optional) | string |  |
| path  | string |  |
| isAsset (optional) | boolean |  |


# Variables

## 📄 exampleMarkdownFileContents (exported const)

## 📄 getChunkParagraphsRecursively (exported const)

Get all paragraphs (`content` values) recursively from a `MarkdownChunk`


## 📄 getImplicitId (exported const)

Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown


## 📄 getMarkdownIntro (exported const)

This function takes a markdown parse and gets the first paragraph and a title from it, if available.

Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.


## 📄 getMarkdownParseParagraphs (exported const)

Gets all paragraphs (recursively) from a `MarkdownParse`


## 📄 getMarkdownReferencePaths (exported const)

## 📄 getMarkdownReferencesFromParagraph (exported const)

Gets all markdown references from a paragraph


## 📄 markdownParseToMarkdownString (exported const)

## 📄 mdContentParseRecursively (exported const)

recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]

Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets


## 📄 mdToJsonParse (exported const)

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!


## 📄 parseFrontmatterMarkdownString (exported const)

splits a markdown string into its frontmatter object and the raw content (without frontmatter)


## 📄 parseMarkdownParagraph (exported const)

Parse markdown paragraph

Should split it up for every thing it encounters...


## 📄 parseMdToChunks (exported const)

should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.


## 📄 removeHeaderPrefix (exported const)

removes header prefix (##### etc) and trims whats behind that

