# Writer input

writer-input (ui-esm operation)


## Writer Input

component to create a writer input

This is a ui-esm operation. This means it's a ui operation that builds to javascript with ESM module resolving... It was based on this example: https://prateeksurana.me/blog/react-library-with-typescript/




# Outline

## Functions

- [Completion](#Completion)
- [ContentEditableDivInput](#ContentEditableDivInput)
- [ContextTextArea](#ContextTextArea)
- [DivContentEditable](#DivContentEditable)
- [editSubtextSubwordConfig](#editSubtextSubwordConfig)
- [FrontmatterForm](#FrontmatterForm)
- [getContext](#getContext)
- [getSubtext](#getSubtext)
- [getTextSegments](#getTextSegments)
- [getWriterTypeFromContent](#getWriterTypeFromContent)
- [isAugmentedWordMatch](#isAugmentedWordMatch)
- [isTypescript](#isTypescript)
- [MarkdownCompletions](#MarkdownCompletions)
- [MarkdownParsePresentation](#MarkdownParsePresentation)
- [MarkdownView](#MarkdownView)
- [MarkedParagraph](#MarkedParagraph)
- [MarkedText](#MarkedText)
- [MarkedToken](#MarkedToken)
- [omitSpecialCharactersFromStart](#omitSpecialCharactersFromStart)
- [parseTextContentToHtmlString](#parseTextContentToHtmlString)
- [SmartContentEditableDivInput](#SmartContentEditableDivInput)
- [SpannedSentence](#SpannedSentence)
- [SubtextContainer](#SubtextContainer)
- [Subword](#Subword)
- [testAllContentEditableRenderComponents](#testAllContentEditableRenderComponents)
- [testContentEditableRenderComponent](#testContentEditableRenderComponent)
- [TitleContainer](#TitleContainer)
- [trimAround](#trimAround)
- [trimLeft](#trimLeft)
- [TypescriptCompletions](#TypescriptCompletions)
- [WriterConfigForm](#WriterConfigForm)
- [WriterInput](#WriterInput)

## Interfaces

- [AugmentedWord](#augmentedword)
- [MarkdownParse](#markdownparse)
- [MarkdownParseRenderConfig](#markdownparserenderconfig)
- [SubtextConfig](#subtextconfig)
- [SubwordConfig](#subwordconfig)
- [TextEditingContext](#texteditingcontext)
- [WriterConfigFormValue](#writerconfigformvalue)

## Variables

- [Completion](#completion)
- [ContentEditableDivInput](#contenteditabledivinput)
- [ContextTextArea](#contexttextarea)
- [depthFontSizes](#depthfontsizes)
- [DivContentEditable](#divcontenteditable)
- [editSubtextSubwordConfig](#editsubtextsubwordconfig)
- [FrontmatterForm](#frontmatterform)
- [getContext](#getcontext)
- [getSubtext](#getsubtext)
- [getTextSegments](#gettextsegments)
- [getWriterTypeFromContent](#getwritertypefromcontent)
- [isAugmentedWordMatch](#isaugmentedwordmatch)
- [isTypescript](#istypescript)
- [MarkdownCompletions](#markdowncompletions)
- [MarkdownParsePresentation](#markdownparsepresentation)
- [MarkdownView](#markdownview)
- [MarkedParagraph](#markedparagraph)
- [MarkedText](#markedtext)
- [MarkedToken](#markedtoken)
- [MAX_COMPLETIONS_AMOUNT](#max-completions-amount)
- [metaClickableClassName](#metaclickableclassname)
- [omitSpecialCharactersFromStart](#omitspecialcharactersfromstart)
- [parseTextContentToHtmlString](#parsetextcontenttohtmlstring)
- [SmartContentEditableDivInput](#smartcontenteditabledivinput)
- [SpannedSentence](#spannedsentence)
- [specialCharacters](#specialcharacters)
- [SubtextContainer](#subtextcontainer)
- [Subword](#subword)
- [testAllContentEditableRenderComponents](#testallcontenteditablerendercomponents)
- [testContentEditableRenderComponent](#testcontenteditablerendercomponent)
- [TitleContainer](#titlecontainer)
- [trimAround](#trimaround)
- [trimLeft](#trimleft)
- [TypescriptCompletions](#typescriptcompletions)
- [{ useStore }](#usestore)
- [{ vscodeOpen }](#vscodeopen)
- [WriterConfigForm](#writerconfigform)
- [writerInitialValues](#writerinitialvalues)
- [WriterInput](#writerinput)



# Functions

## Completion

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| augmentedWord  | object |  |



## ContentEditableDivInput

Div that is `contentEditable` by default and has possibilities for color/style highlighting, autocomplete, subtexts and tooltips




## ContextTextArea

## DivContentEditable

## editSubtextSubwordConfig

Interesting... In order to auto-generate a form for this, we need to combine the two into a simple function that does NOTHING. Why? Because we can't store it in the database, it is better to keep this in the frontend...

NB: DEPRECATED: TODO: function isn't used. Since the indexation didn't go right, the solution with a `SimplifiedSchemaForm` ended up being easier. Keeping it here because I need to fix the indexation nonetheless.


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| subtextConfig  | object |  |
| subwordConfig  | object |  |



### Parameters (2)

#### Parameter 1: subtextConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| isEnabled (optional) | boolean |  |
| translations (optional) | array |  |
| showEmojiTranslation (optional) | boolean |  |
| showDefinitionsWithPriority (optional) | array |  |
| showRelated (optional) | array |  |



#### Parameter 2: subwordConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| isEnabled (optional) | boolean |  |
| subwordSize (optional) | string |  |
| translations (optional) | array |  |
| showDefinition (optional) | boolean |  |
| blurMode (optional) | string |  |
| replaceWordMode (optional) | string |  |
| heatmapMode (optional) | string |  |



## FrontmatterForm

Renders a form for frontmatter without save button




## getContext

Gets the current word you are typing from a text and the cursor position.

Takes into account multiple word separators: tabs, newlines, and spaces.


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| wordAtPosition  | string |  |



### Parameters (1)

#### Parameter 1: editorDetails: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| text  | string |  |
| positionIndex  | number |  |



## getSubtext

make a subtext text based on the text of a complete paragraph (may contain single newlines and other markdown stuff, but never double newlines)

Returns either the subtext string or a HTML string with a container around the subtext, depending on if you provide `withContainer`


### Returns: string

### Parameters (2)

#### Parameter 1: markdownString: string

#### Parameter 2: subtextConfig: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| isEnabled (optional) | boolean |  |
| translations (optional) | array |  |
| showEmojiTranslation (optional) | boolean |  |
| showDefinitionsWithPriority (optional) | array |  |
| showRelated (optional) | array |  |



## getTextSegments

Iterates over all child-nodes in the editor, replaces text with a segment, and replaces nodes with a flat list of segments

Returns all textSegments in an array


### Returns: array

- null: object






## getWriterTypeFromContent

### Returns: string(Enum: typescript | markdown | other)

### Parameters (1)

#### Parameter 1: text: string

## isAugmentedWordMatch

### Parameters (2)

#### Parameter 1: augmentedWord: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| word  | string |  |
| queryPath (optional) | string |  |
| projectRelativeMarkdownSourcePath  | string |  |
| spoiler (optional) | string |  |
| isCaseInsensitive (optional) | boolean |  |



#### Parameter 2: completableWord: string

## isTypescript

only detect typescript if the string starts with `import`. must be improved later on. It would be great to be able to detect that it's a typescript file even if it contains syntax errors.




### Parameters (1)

#### Parameter 1: text: string

## MarkdownCompletions

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| context  | object |  |
| augmentedWords (optional) | array |  |



## MarkdownParsePresentation

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| markdownParse  | object |  |
| projectRelativeBaseFolderPath  | string |  |
| projectRelativeMarkdownFilePath  | string |  |



## MarkdownView

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| view  | string |  |
| markdownParse  | object |  |
| markdownParseRenderConfig  | object |  |



## MarkedParagraph

## MarkedText

## MarkedToken

Function that can be used to iterate over the marked parse and style every token, recursively

NB: this returns a regular react component, and should, for setting it as InnerHTML, be parsed with the `ReactDOMServer`




### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| subtextConfig  | object |  |
| subwordConfig  | object |  |
| markdownFileConfig  | object |  |
| testModeEnabled (optional) | boolean |  |



## omitSpecialCharactersFromStart

Omits all special characters from the start of a word for the first special character it finds. The other special characters found after that won't be trimmed.




### Parameters (1)

#### Parameter 1: word (optional): string

## parseTextContentToHtmlString

Returns a html string from a text string that can be rendered in the dom

NB: because we're parsing text from div.innerText, sometimes there are two newlines when there should be one break.

Three newlines means there should be two breaks...




## SmartContentEditableDivInput

Uses ContentEditableDivInput, and attaches the Completions to it based on the content type. Also all other data required...


NB: TODO: once the autocomplete inside the contentEditable is done, these things should move inside of there. I need a component that has lots of UI/UX but isn't very smart. This will be able to be re-used in many usecases...




## SpannedSentence

Needs to be done for every text that can have potential interactions




### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| sentence  | string |  |
| testModeEnabled (optional) | boolean |  |



## SubtextContainer

Returns a string with HTML for the subtext container, given you already have




### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| rawMarkdown  | string |  |
| subtextConfig  | object |  |



## Subword

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| word  | string |  |
| subwordConfig  | object |  |



## testAllContentEditableRenderComponents

Can be used to test all `ContentEditableRenderComponent`s with example inputs

Instead you can also enable devmode and just check it on the live examples




## testContentEditableRenderComponent

Creates an element from the markdown input, and then uses the `toMarkdownString` function to make it markdown again.

TODO: use <template>, might be more accurate. See https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518


### Returns: object

## TitleContainer

container for any index instance that needs to be rendered in the explore page




## trimAround

Removes x amount of characters from both sides of a word




### Parameters (2)

#### Parameter 1: word: string

#### Parameter 2: trimLength: number

## trimLeft

Trims a character from a word at the left until that character is not found anymore (recursive)




### Parameters (2)

#### Parameter 1: word: string

#### Parameter 2: character: string

## TypescriptCompletions

In `typescript`, every word should be autocompletable with the typescript stuff, without backticks.




### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| context  | object |  |
| augmentedWords (optional) | array |  |



## WriterConfigForm

## WriterInput

Writer input for any utf8 based text, file or no file



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



## SubtextConfig

Configuration of what should be shown in the subtext





Properties: 

 | Name | Type | Description |
|---|---|---|
| isEnabled (optional) | boolean |  |
| translations (optional) | array |  |
| showEmojiTranslation (optional) | boolean |  |
| showDefinitionsWithPriority (optional) | array |  |
| showRelated (optional) | array |  |



## SubwordConfig

Configurate what should be shown about words





Properties: 

 | Name | Type | Description |
|---|---|---|
| isEnabled (optional) | boolean |  |
| subwordSize (optional) | string |  |
| translations (optional) | array |  |
| translationsViewMode (optional) | string |  |
| showDefinition (optional) | boolean |  |
| occurenceAmountViewMode (optional) | string |  |
| blurMode (optional) | string |  |
| audioMode (optional) | string |  |
| replaceWordMode (optional) | string |  |
| heatmapMode (optional) | string |  |



## TextEditingContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| wordAtPosition  | string |  |



## WriterConfigFormValue

- SubtextConfig: object
- SubwordConfig: object





# Variables

## Completion (exported const)

## ContentEditableDivInput (exported const)

Div that is `contentEditable` by default and has possibilities for color/style highlighting, autocomplete, subtexts and tooltips


## ContextTextArea (exported const)

## depthFontSizes (exported const)

## DivContentEditable (exported const)

## editSubtextSubwordConfig (exported const)

Interesting... In order to auto-generate a form for this, we need to combine the two into a simple function that does NOTHING. Why? Because we can't store it in the database, it is better to keep this in the frontend...

NB: DEPRECATED: TODO: function isn't used. Since the indexation didn't go right, the solution with a `SimplifiedSchemaForm` ended up being easier. Keeping it here because I need to fix the indexation nonetheless.


## FrontmatterForm (exported const)

Renders a form for frontmatter without save button


## getContext (exported const)

Gets the current word you are typing from a text and the cursor position.

Takes into account multiple word separators: tabs, newlines, and spaces.


## getSubtext (exported const)

make a subtext text based on the text of a complete paragraph (may contain single newlines and other markdown stuff, but never double newlines)

Returns either the subtext string or a HTML string with a container around the subtext, depending on if you provide `withContainer`


## getTextSegments (exported const)

Iterates over all child-nodes in the editor, replaces text with a segment, and replaces nodes with a flat list of segments

Returns all textSegments in an array


## getWriterTypeFromContent (exported const)

## isAugmentedWordMatch (exported const)

## isTypescript (exported const)

only detect typescript if the string starts with `import`. must be improved later on. It would be great to be able to detect that it's a typescript file even if it contains syntax errors.


## MarkdownCompletions (exported const)

## MarkdownParsePresentation (exported const)

## MarkdownView (exported const)

## MarkedParagraph (exported const)

## MarkedText (exported const)

## MarkedToken (exported const)

Function that can be used to iterate over the marked parse and style every token, recursively

NB: this returns a regular react component, and should, for setting it as InnerHTML, be parsed with the `ReactDOMServer`


## MAX_COMPLETIONS_AMOUNT (exported const)

## metaClickableClassName (exported const)

## omitSpecialCharactersFromStart (exported const)

Omits all special characters from the start of a word for the first special character it finds. The other special characters found after that won't be trimmed.


## parseTextContentToHtmlString (exported const)

Returns a html string from a text string that can be rendered in the dom

NB: because we're parsing text from div.innerText, sometimes there are two newlines when there should be one break.

Three newlines means there should be two breaks...


## SmartContentEditableDivInput (exported const)

Uses ContentEditableDivInput, and attaches the Completions to it based on the content type. Also all other data required...


NB: TODO: once the autocomplete inside the contentEditable is done, these things should move inside of there. I need a component that has lots of UI/UX but isn't very smart. This will be able to be re-used in many usecases...


## SpannedSentence (exported const)

Needs to be done for every text that can have potential interactions


## specialCharacters (exported const)

## SubtextContainer (exported const)

Returns a string with HTML for the subtext container, given you already have


## Subword (exported const)

## testAllContentEditableRenderComponents (exported const)

Can be used to test all `ContentEditableRenderComponent`s with example inputs

Instead you can also enable devmode and just check it on the live examples


## testContentEditableRenderComponent (exported const)

Creates an element from the markdown input, and then uses the `toMarkdownString` function to make it markdown again.

TODO: use <template>, might be more accurate. See https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518


## TitleContainer (exported const)

container for any index instance that needs to be rendered in the explore page


## trimAround (exported const)

Removes x amount of characters from both sides of a word


## trimLeft (exported const)

Trims a character from a word at the left until that character is not found anymore (recursive)


## TypescriptCompletions (exported const)

In `typescript`, every word should be autocompletable with the typescript stuff, without backticks.


## { useStore } (exported const)

## { vscodeOpen } (unexported const)

## WriterConfigForm (exported const)

## writerInitialValues (exported const)

## WriterInput (exported const)

Writer input for any utf8 based text, file or no file

