# Markdown reader types

markdown-reader-types (node operation)



# Outline

## Interfaces

- [AugmentedWord](#augmentedword)
- [AugmentedWordObject](#augmentedwordobject)
- [AugmentedWordTypeEnum](#augmentedwordtypeenum)
- [MarkdownReaderPage](#markdownreaderpage)
- [MarkdownReaderPageProps](#markdownreaderpageprops)
- [WebMarkdownFile](#webmarkdownfile)



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



## AugmentedWordObject

This datastructure is probably needed to make it more efficient.

Should be a lookup table for the querypath for every word








## AugmentedWordTypeEnum

NB: can later be replaced with a string enum type: person, definition, variable, function, type interface, operation, bundle (but there may be much more)








## MarkdownReaderPage

for markdown-reader-ui, the pages can be markdown files, but they can also be connected to models





Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| filePath (optional) | string |  |
| isMenuItem (optional) | boolean |  |



## MarkdownReaderPageProps

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



## WebMarkdownFile

Every markdown file meant for the web, should have these optional parameters that can be declared as its frontmatter

NB: This is not part of MarkdownModelType, because MarkdownModelType is very barebones general purpose, not only for the web!





Properties: 

 | Name | Type | Description |
|---|---|---|
| headerImage  | object |  |
| headerTitle  | string |  |
| headerSubTitle  | string |  |
| headerCta  | object |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |
| isDraft (optional) | boolean |  |
| privacy  | string |  |
| language  | string |  |
| isLanguageCustom (optional) | boolean |  |
| websiteCallToActionSlugs (optional) | array |  |
| shop_itemIds (optional) | array |  |
| author_personSlugs  | array |  |
| interestSlugs  | array |  |


