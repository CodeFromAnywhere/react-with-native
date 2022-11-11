# Markdown reader types

markdown-reader-types (`OperationClassification` node)



# Api reference

## 🔹 AugmentedWord

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



## 🔹 MarkdownReaderPage

for markdown-reader-ui, the pages can be markdown files, but they can also be connected to models





Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| filePath (optional) | string |  |
| isMenuItem (optional) | boolean |  |



## 🔹 MarkdownReaderPageProps

Properties: 

 | Name | Type | Description |
|---|---|---|
| publicBundleConfig (optional) | object |  |
| projectRelativeMarkdownPath (optional) | string |  |
| markdownFile (optional) | object |  |
| pages  | array |  |
| title (optional) | string |  |
| children (optional) | array |  |
| previousQueryPath (optional) | string |  |
| nextQueryPath (optional) | string |  |
| description (optional) | string |  |


# Internal

<details><summary>Show internal (2)</summary>
    
  # 🔹 AugmentedWordObject

This datastructure is probably needed to make it more efficient.

Should be a lookup table for the querypath for every word








## 🔹 AugmentedWordTypeEnum

NB: can later be replaced with a string enum type: person, definition, variable, function, type interface, operation, bundle (but there may be much more)






  </details>

