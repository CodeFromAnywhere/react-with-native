# Key value markdown js

key-value-markdown-js (js operation)



# Api reference

## kvmdParseToMarkdownString()

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file


| Input      |    |    |
| ---------- | -- | -- |
| keyValueMarkdownParse | `KeyValueMarkdownParse` |  |
| **Output** | `String`   |    |



## 📄 kvmdParseToMarkdownString (exported const)

parses KeyValueMarkdownParse into a markdown string so it can be saved as a markdown file


## markdownStringToKvmdParse()

parses a key value md string (with support for headings and frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| kvMdString | string |  |,| dbFileLocation | `DbFileLocation` |  |
| **Output** | { parameters: {  }, <br />data: {  }[], <br /> }   |    |



## 📄 markdownStringToKvmdParse (exported const)

parses a key value md string (with support for headings and frontmatter)


## flattenMarkdownChunks()

| Input      |    |    |
| ---------- | -- | -- |
| markdownChunks | `MarkdownChunk`[] |  |
| **Output** | { paragraph: string, <br />categoryStackCalculated: string[], <br />level?: number, <br /> }[]   |    |



## 📄 flattenMarkdownChunks (exported const)

