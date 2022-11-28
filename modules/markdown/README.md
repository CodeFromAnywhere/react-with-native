# Markdown

markdown (`OperationClassification` ui-esm)


## markdown

this uses `react-markdown` to render markdown in the browser with react...

This is a ui-esm operation. This means it's a ui operation that builds to javascript with ESM module resolving... It was based on this example: https://prateeksurana.me/blog/react-library-with-typescript/




# Api reference

## renderMarkdownContent()

renders a markdown striing (without frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 renderMarkdownContent (exported const)

renders a markdown striing (without frontmatter)


## `<MarkdownCodeblock />`

Renders a markdown codeblock with a text as content and an optional extension


| Input      |    |    |
| ---------- | -- | -- |
| props | { text: string, <br />extension?: string, <br />minimalMode?: `CodeblockMode`, <br />expandedMode?: `CodeblockMode`, <br />isInitiallyExpanded?: boolean, <br />isModeStatic?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 MarkdownCodeblock (exported const)

Renders a markdown codeblock with a text as content and an optional extension


## getRealSrc()

Based on markdown info, gest the real source for an image


| Input      |    |    |
| ---------- | -- | -- |
| src (optional) | string |  |,| config | `MarkdownParseRenderConfig` |  |
| **Output** | string   |    |



## 🔹 MarkdownParseRenderConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| projectRelativeBaseFolderPath  | string |  |
| projectRelativeMarkdownFilePath  | string |  |
| augmentedWordObject (optional) | object |  |
| isStatic (optional) | boolean |  |
| isDev (optional) | boolean |  |
| big (optional) | boolean |  |



## 📄 getRealSrc (exported const)

Based on markdown info, gest the real source for an image

# Internal

<details><summary>Show internal (21)</summary>
    
  # getUrlFromRelativeUrl()

gets the renderable asset url from the relative url


| Input      |    |    |
| ---------- | -- | -- |
| relativeUrl | string |  |,| relativeUrlStrategy | api / static |  |,| projectRelativeBaseFolderPath | string |  |,| projectRelativeMarkdownFilePath | string |  |
| **Output** | `String`   |    |



## getYoutubeId()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



## `<HtmlHeader />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<Parameter />`

In markdown, if you wish to refer to a parameter, you can backtick it and put a "." in front. You can also add a value to it if you wish, by adding the ":" and the value afterwards.


| Input      |    |    |
| ---------- | -- | -- |
| props | { text: string, <br /> } |  |
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



## useOpenHashDetails()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔹 CodeblockMode

## 📄 defaultExpandedMode (exported const)

## 📄 defaultMinimalMode (exported const)

## 📄 getUrlFromRelativeUrl (exported const)

gets the renderable asset url from the relative url


## 📄 getYoutubeId (exported const)

## 📄 HtmlHeader (exported const)

## 📄 Parameter (exported const)

In markdown, if you wish to refer to a parameter, you can backtick it and put a "." in front. You can also add a value to it if you wish, by adding the ":" and the value afterwards.


## 📄 renderFrontmatter (exported const)

Renders markdown frontmatter parameters (and optionally a spacer)


## 📄 renderMarkdownChunk (exported const)

renders a MarkdownChunk interface


## 📄 renderMarkdownParse (exported const)

renders the MardkownParse interface (including frontmatter)


## 📄 renderMarkdownTitle (exported const)

renders a markdown title (level should be 1 for h1 and 6 for h6)


## 📄 useOpenHashDetails (exported const)

  </details>

