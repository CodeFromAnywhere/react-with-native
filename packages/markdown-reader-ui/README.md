# Markdown reader ui

markdown-reader-ui (ui-es6 operation)



# Outline

## Functions

- [AugmentedWordComponent](#AugmentedWordComponent)
- [Dictionary](#Dictionary)
- [getPageTitle](#getPageTitle)
- [Layout](#Layout)
- [Search](#Search)

## Interfaces

- [AugmentedWord](#augmentedword)
- [MarkdownReaderPage](#markdownreaderpage)

## Variables

- [AugmentedWordComponent](#augmentedwordcomponent)
- [Dictionary](#dictionary)
- [getPageTitle](#getpagetitle)
- [Layout](#layout)
- [pageKeys](#pagekeys)
- [pagesObject](#pagesobject)
- [pages](#pages)
- [Search](#search)



# Functions

## AugmentedWordComponent

## Dictionary

## getPageTitle

utility function to get a title from a page




## Layout

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| pages  | array |  |
| children  | object |  |



## Search

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| results  | array |  |


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



## MarkdownReaderPage

for markdown-reader-ui, the pages can be markdown files, but they can also be connected to models





Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| filePath (optional) | string |  |
| isMenuItem (optional) | boolean |  |


# Variables

## AugmentedWordComponent (exported const)

## Dictionary (exported const)

## getPageTitle (exported const)

utility function to get a title from a page


## Layout (exported const)

## pageKeys (unexported const)

## pagesObject (exported const)

## pages (exported const)

## Search (exported const)

