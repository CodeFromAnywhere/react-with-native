# Markdown parse js

markdown-parse-js (js operation)

js-only operation containing all kinds of functions that help parsing markdown




# Api reference

## mdToJsonParse()

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |,| fileName (optional) | string |  |,| config (optional) | `MarkdownParseConfig` |  |
| **Output** |    |    |



## 📄 mdToJsonParse (exported const)

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name. First make a refactor script for this, because it is too hard to rename stuff that is used a lot.

TODO: BUG: it doesn't take into account triple backticks! if there is markdown inside of the triple backticks, it can still be seen as main markdown. Triple backticks are stronger!


## getImplicitId()

Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown


| Input      |    |    |
| ---------- | -- | -- |
| title | string |  |
| **Output** | `String`   |    |



## parseFrontmatterMarkdownString()

splits a markdown string into its frontmatter object and the raw content (without frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| markdownWithFrontmatter | string |  |,| config (optional) | `MarkdownParseConfig` |  |
| **Output** |    |    |



## 📄 getImplicitId (exported const)

Implicit ids are a convention in markdown. A title gets an implicit id by removing spaces and making the title lowercase.

See https://stackoverflow.com/questions/6695439/how-to-link-to-a-named-anchor-in-multimarkdown


## 📄 parseFrontmatterMarkdownString (exported const)

splits a markdown string into its frontmatter object and the raw content (without frontmatter)


## markdownParseToMarkdownString()

| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | `MarkdownParse` |  |
| **Output** | `String`   |    |



## 📄 markdownParseToMarkdownString (exported const)

## getMarkdownIntro()

This function takes a markdown parse and gets the first paragraph and a title from it, if available.

Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.


| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | {  } |  |
| **Output** | { title: {  }, <br />firstParagraph: {  }, <br /> }   |    |



## getMarkdownReferencePaths()

| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string |  |
| **Output** | string[]   |    |



## 📄 getMarkdownIntro (exported const)

This function takes a markdown parse and gets the first paragraph and a title from it, if available.

Currently assumes that the first paragraph starts directly after the title or there is no title and the content is at the beginning.

TODO: It would be better to find the first paragraph based on the level.


## 📄 getMarkdownReferencePaths (exported const)

