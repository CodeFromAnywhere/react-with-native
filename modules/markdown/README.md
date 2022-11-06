# Markdown

markdown (ui-esm operation)


## markdown

this uses `react-markdown` to render markdown in the browser with react...

This is a ui-esm operation. This means it's a ui operation that builds to javascript with ESM module resolving... It was based on this example: https://prateeksurana.me/blog/react-library-with-typescript/




# Outline

## Functions

- [getRealSrc](#getRealSrc)
- [getUrlFromRelativeUrl](#getUrlFromRelativeUrl)
- [getYoutubeId](#getYoutubeId)
- [MarkdownCodeblock](#MarkdownCodeblock)
- [renderFrontmatter](#renderFrontmatter)
- [renderMarkdownChunk](#renderMarkdownChunk)
- [renderMarkdownContent](#renderMarkdownContent)
- [renderMarkdownParse](#renderMarkdownParse)
- [renderMarkdownTitle](#renderMarkdownTitle)

## Interfaces

- [AugmentedWord](#augmentedword)
- [CodeblockMode](#codeblockmode)
- [Frontmatter](#frontmatter)
- [MarkdownChunk](#markdownchunk)
- [MarkdownParse](#markdownparse)
- [MarkdownParseRenderConfig](#markdownparserenderconfig)

## Variables

- [defaultExpandedMode](#defaultexpandedmode)
- [defaultMinimalMode](#defaultminimalmode)
- [getRealSrc](#getrealsrc)
- [getUrlFromRelativeUrl](#geturlfromrelativeurl)
- [getYoutubeId](#getyoutubeid)
- [MarkdownCodeblock](#markdowncodeblock)
- [renderFrontmatter](#renderfrontmatter)
- [renderMarkdownChunk](#rendermarkdownchunk)
- [renderMarkdownContent](#rendermarkdowncontent)
- [renderMarkdownParse](#rendermarkdownparse)
- [renderMarkdownTitle](#rendermarkdowntitle)



# Functions

## getRealSrc

Based on markdown info, gest the real source for an image


### Returns: string

### Parameters (2)

#### Parameter 1: src (optional): string

## getUrlFromRelativeUrl

gets the renderable asset url from the relative url




### Parameters (4)

#### Parameter 1: relativeUrl: string

#### Parameter 2: relativeUrlStrategy: string(Enum: api | static)

#### Parameter 3: projectRelativeBaseFolderPath: string

#### Parameter 4: projectRelativeMarkdownFilePath: string

## getYoutubeId

### Returns: string

### Parameters (1)

#### Parameter 1: url (optional): string

## MarkdownCodeblock

Renders a markdown codeblock with a text as content and an optional extension




### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| text  | string |  |
| extension (optional) | string |  |
| minimalMode (optional) | string |  |
| expandedMode (optional) | string |  |
| isInitiallyExpanded (optional) | boolean |  |
| isModeStatic (optional) | boolean |  |



## renderFrontmatter

Renders markdown frontmatter parameters (and optionally a spacer)




### Parameters (2)

#### Parameter 1: parameters: object

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| renderSpacer (optional) | boolean |  |



## renderMarkdownChunk

renders a MarkdownChunk interface




### Parameters (2)

#### Parameter 1: chunk: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| content (optional) | string |  |
| title (optional) | string |  |
| children (optional) | array |  |





## renderMarkdownContent

renders a markdown striing (without frontmatter)




### Parameters (2)

#### Parameter 1: content: string

## renderMarkdownParse

renders the MardkownParse interface (including frontmatter)




### Parameters (2)

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





## renderMarkdownTitle

renders a markdown title (level should be 1 for h1 and 6 for h6)




### Parameters (2)

#### Parameter 1: title: string

#### Parameter 2: level: number

# Interfaces

## AugmentedWord

AugmentedWords should have a small footprint since there can be many of them

Words with a specific affix (backticks, bolded, italic) will match against these.

Used to link automatically to functionNames, InterfaceNames, operation-names, words, and more..





Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| word  | string |  |
| queryPath (optional) | string |  |
| projectRelativeMarkdownSourcePath  | string |  |
| spoiler (optional) | string |  |
| isCaseInsensitive (optional) | boolean |  |



## CodeblockMode

## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes








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



## MarkdownParseRenderConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| projectRelativeBaseFolderPath  | string |  |
| projectRelativeMarkdownFilePath  | string |  |
| isStatic (optional) | boolean |  |
| isDev (optional) | boolean |  |
| big (optional) | boolean |  |


# Variables

## defaultExpandedMode (exported const)

## defaultMinimalMode (exported const)

## getRealSrc (exported const)

Based on markdown info, gest the real source for an image


## getUrlFromRelativeUrl (exported const)

gets the renderable asset url from the relative url


## getYoutubeId (exported const)

## MarkdownCodeblock (exported const)

Renders a markdown codeblock with a text as content and an optional extension


## renderFrontmatter (exported const)

Renders markdown frontmatter parameters (and optionally a spacer)


## renderMarkdownChunk (exported const)

renders a MarkdownChunk interface


## renderMarkdownContent (exported const)

renders a markdown striing (without frontmatter)


## renderMarkdownParse (exported const)

renders the MardkownParse interface (including frontmatter)


## renderMarkdownTitle (exported const)

renders a markdown title (level should be 1 for h1 and 6 for h6)

