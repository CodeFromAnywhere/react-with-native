# Augmented word types

augmented-word-types (`OperationClassification` undefined)



# Api reference

## 🔹 AugmentedWord

AugmentedWords should have a small footprint since there can be many of them

Words with a specific affix (backticks, bolded, italic) will match against these.

Used to link automatically to functionNames, InterfaceNames, operation-names, words, and more..

TODO: This is a much more general purpose thing than just `markdown-reader-types`. Move to it's own package





Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| word  | string |  |
| queryPath (optional) | string |  |
| projectRelativeMarkdownSourcePath  | string |  |
| spoiler (optional) | string |  |
| isCaseInsensitive (optional) | boolean |  |


# Internal

<details><summary>Show internal (2)</summary>
    
  # 🔹 AugmentedWordObject

This datastructure is probably needed to make it more efficient.

Should be a lookup table for the querypath for every word








## 🔹 AugmentedWordTypeEnum

NB: can later be replaced with a string enum type: person, definition, variable, function, type interface, operation, bundle (but there may be much more)






  </details>

