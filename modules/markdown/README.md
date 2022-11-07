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

- [CodeblockMode](#codeblockmode)
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

## getRealSrc()

Based on markdown info, gest the real source for an image


| Input      |    |    |
| ---------- | -- | -- |
| src (optional) | string |  |,| config | `MarkdownParseRenderConfig` |  |
| **Output** | string   |    |



## getUrlFromRelativeUrl()

gets the renderable asset url from the relative url


| Input      |    |    |
| ---------- | -- | -- |
| relativeUrl | string |  |,| relativeUrlStrategy | api / static |  |,| projectRelativeBaseFolderPath | string |  |,| projectRelativeMarkdownFilePath | string |  |
| **Output** | `String`   |    |



## getYoutubeId()

| Input      |    |    |
| ---------- | -- | -- |
| url (optional) | string |  |
| **Output** | string   |    |



## <MarkdownCodeblock />

Renders a markdown codeblock with a text as content and an optional extension


| Input      |    |    |
| ---------- | -- | -- |
| props | { text: string, <br />extension?: string, <br />minimalMode?: `CodeblockMode`, <br />expandedMode?: `CodeblockMode`, <br />isInitiallyExpanded?: boolean, <br />isModeStatic?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## renderFrontmatter()

Renders markdown frontmatter parameters (and optionally a spacer)


| Input      |    |    |
| ---------- | -- | -- |
| parameters | `Frontmatter` |  |,| config (optional) | { renderSpacer?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## renderMarkdownChunk()

renders a MarkdownChunk interface


| Input      |    |    |
| ---------- | -- | -- |
| chunk | `MarkdownChunk` |  |,| config | `MarkdownParseRenderConfig` |  |
| **Output** | `JSX.Element`   |    |



## renderMarkdownContent()

renders a markdown striing (without frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| content | string |  |,| config | `MarkdownParseRenderConfig` |  |
| **Output** | `JSX.Element`   |    |



## renderMarkdownParse()

renders the MardkownParse interface (including frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | `MarkdownParse` |  |,| config | `MarkdownParseRenderConfig` |  |
| **Output** | `JSX.Element`   |    |



## renderMarkdownTitle()

renders a markdown title (level should be 1 for h1 and 6 for h6)


| Input      |    |    |
| ---------- | -- | -- |
| title | string |  |,| level | number |  |
| **Output** | `JSX.Element`   |    |


# Interfaces

## 🔷 CodeblockMode

## 🔷 MarkdownParseRenderConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| projectRelativeBaseFolderPath  | string |  |
| projectRelativeMarkdownFilePath  | string |  |
| isStatic (optional) | boolean |  |
| isDev (optional) | boolean |  |
| big (optional) | boolean |  |


# Variables

## 📄 defaultExpandedMode (exported const)

## 📄 defaultMinimalMode (exported const)

## 📄 getRealSrc (exported const)

Based on markdown info, gest the real source for an image


## 📄 getUrlFromRelativeUrl (exported const)

gets the renderable asset url from the relative url


## 📄 getYoutubeId (exported const)

## 📄 MarkdownCodeblock (exported const)

Renders a markdown codeblock with a text as content and an optional extension


## 📄 renderFrontmatter (exported const)

Renders markdown frontmatter parameters (and optionally a spacer)


## 📄 renderMarkdownChunk (exported const)

renders a MarkdownChunk interface


## 📄 renderMarkdownContent (exported const)

renders a markdown striing (without frontmatter)


## 📄 renderMarkdownParse (exported const)

renders the MardkownParse interface (including frontmatter)


## 📄 renderMarkdownTitle (exported const)

renders a markdown title (level should be 1 for h1 and 6 for h6)

