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
- [WriterConfigForm](#writerconfigform)
- [writerInitialValues](#writerinitialvalues)
- [WriterInput](#writerinput)



# Functions

## <Completion />

| Input      |    |    |
| ---------- | -- | -- |
| props | { augmentedWord: `AugmentedWord`, <br />augmentedWordObject?: `MappedObject<AugmentedWord>`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <ContentEditableDivInput />

Div that is `contentEditable` by default and has possibilities for color/style highlighting, autocomplete, subtexts and tooltips


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <ContextTextArea />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <DivContentEditable />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## editSubtextSubwordConfig()

Interesting... In order to auto-generate a form for this, we need to combine the two into a simple function that does NOTHING. Why? Because we can't store it in the database, it is better to keep this in the frontend...

NB: DEPRECATED: TODO: function isn't used. Since the indexation didn't go right, the solution with a `SimplifiedSchemaForm` ended up being easier. Keeping it here because I need to fix the indexation nonetheless.


| Input      |    |    |
| ---------- | -- | -- |
| subtextConfig | `SubtextConfig` |  |,| subwordConfig | `SubwordConfig` |  |
| **Output** | { subtextConfig: { isEnabled?: boolean, <br />translations?: { language: english / dutch / nepali / portuguese / brazilian / german / french / spanish / italian / norwegian / swedish / danish / vietnamese / indonesian / southAfrican / tokiPona / hindi / mandarin / arabic / bengali / urdu / japanese / swahili, <br />showAlternative?: boolean, <br />showPhonetic?: boolean, <br />showLatin?: boolean, <br />showTokiPona?: boolean, <br />showCommon?: boolean, <br /> }[], <br />showEmojiTranslation?: boolean, <br />showDefinitionsWithPriority?: critical / high / medium / low[], <br />showRelated?: { type: image / asset / pages / data / code, <br />quantity: single / short / all, <br /> }[], <br /> }, <br />subwordConfig: { isEnabled?: boolean, <br />subwordSize?: normal / mini / micro, <br />translations?: english / dutch / nepali / portuguese / brazilian / german / french / spanish / italian / norwegian / swedish / danish / vietnamese / indonesian / southAfrican / tokiPona / hindi / mandarin / arabic / bengali / urdu / japanese / swahili[], <br />translationsViewMode?: disabled / tooltip / context / subword, <br />showDefinition?: boolean, <br />occurenceAmountViewMode?: disabled / tooltip / context / subword, <br />blurMode?: disabled / special, <br />audioMode?: disabled / tooltip / context / subword, <br />replaceWordMode?: tokiPona / disabled / translate / alternative / phonetic / emoji, <br />heatmapMode?: disabled / projectFrequency / englishFrequency, <br /> }, <br /> }   |    |



## <FrontmatterForm />

Renders a form for frontmatter without save button


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## getContext()

Gets the current word you are typing from a text and the cursor position.

Takes into account multiple word separators: tabs, newlines, and spaces.


| Input      |    |    |
| ---------- | -- | -- |
| editorDetails | { text: string, <br />positionIndex: number, <br /> } |  |
| **Output** | { wordAtPosition: string, <br /> }   |    |



## getSubtext()

make a subtext text based on the text of a complete paragraph (may contain single newlines and other markdown stuff, but never double newlines)

Returns either the subtext string or a HTML string with a container around the subtext, depending on if you provide `withContainer`


| Input      |    |    |
| ---------- | -- | -- |
| markdownString | string | Raw markdown string |,| subtextConfig | `SubtextConfig` |  |
| **Output** | string   |    |



## getTextSegments()

Iterates over all child-nodes in the editor, replaces text with a segment, and replaces nodes with a flat list of segments

Returns all textSegments in an array


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { text: string, <br />node: {  }, <br /> }[]   |    |



## getWriterTypeFromContent()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** | typescript / markdown / other   |    |



## isAugmentedWordMatch()

| Input      |    |    |
| ---------- | -- | -- |
| augmentedWord | `AugmentedWord` |  |,| completableWord | string |  |
| **Output** |    |    |



## isTypescript()

only detect typescript if the string starts with `import`. must be improved later on. It would be great to be able to detect that it's a typescript file even if it contains syntax errors.


| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## <MarkdownCompletions />

| Input      |    |    |
| ---------- | -- | -- |
| props | { context: {  }, <br />augmentedWords?: `AugmentedWord`[], <br />augmentedWordObject?: `MappedObject<AugmentedWord>`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <MarkdownParsePresentation />

| Input      |    |    |
| ---------- | -- | -- |
| props | { markdownParse: `MarkdownParse`, <br />augmentedWordObject?: `MappedObject<AugmentedWord>`, <br />projectRelativeBaseFolderPath: string, <br />projectRelativeMarkdownFilePath: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <MarkdownView />

| Input      |    |    |
| ---------- | -- | -- |
| props | { view: view / presentation, <br />markdownParse: `MarkdownParse`, <br />markdownParseRenderConfig: `MarkdownParseRenderConfig`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <MarkedParagraph />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <MarkedText />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <MarkedToken />

Function that can be used to iterate over the marked parse and style every token, recursively

NB: this returns a regular react component, and should, for setting it as InnerHTML, be parsed with the `ReactDOMServer`


| Input      |    |    |
| ---------- | -- | -- |
| props | { item: `marked.Token`, <br />subtextConfig: `SubtextConfig`, <br />subwordConfig: `SubwordConfig`, <br />markdownFileConfig: `MarkdownParseRenderConfig`, <br />testModeEnabled?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## omitSpecialCharactersFromStart()

Omits all special characters from the start of a word for the first special character it finds. The other special characters found after that won't be trimmed.


| Input      |    |    |
| ---------- | -- | -- |
| word (optional) | string |  |
| **Output** |    |    |



## parseTextContentToHtmlString()

Returns a html string from a text string that can be rendered in the dom

NB: because we're parsing text from div.innerText, sometimes there are two newlines when there should be one break.

Three newlines means there should be two breaks...


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## <SmartContentEditableDivInput />

Uses ContentEditableDivInput, and attaches the Completions to it based on the content type. Also all other data required...


NB: TODO: once the autocomplete inside the contentEditable is done, these things should move inside of there. I need a component that has lots of UI/UX but isn't very smart. This will be able to be re-used in many usecases...


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <SpannedSentence />

Needs to be done for every text that can have potential interactions


| Input      |    |    |
| ---------- | -- | -- |
| props | { sentence: string, <br />subtextConfig: `SubtextConfig`, <br />subwordConfig: `SubwordConfig`, <br />markdownFileConfig: `MarkdownParseRenderConfig`, <br />testModeEnabled?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <SubtextContainer />

Returns a string with HTML for the subtext container, given you already have


| Input      |    |    |
| ---------- | -- | -- |
| props | { rawMarkdown: string, <br />subtextConfig: `SubtextConfig`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <Subword />

| Input      |    |    |
| ---------- | -- | -- |
| props | { word: string, <br />subwordConfig: `SubwordConfig`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## testAllContentEditableRenderComponents()

Can be used to test all `ContentEditableRenderComponent`s with example inputs

Instead you can also enable devmode and just check it on the live examples


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## testContentEditableRenderComponent()

Creates an element from the markdown input, and then uses the `toMarkdownString` function to make it markdown again.

TODO: use <template>, might be more accurate. See https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## <TitleContainer />

container for any index instance that needs to be rendered in the explore page


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## trimAround()

Removes x amount of characters from both sides of a word


| Input      |    |    |
| ---------- | -- | -- |
| word | string |  |,| trimLength | number |  |
| **Output** | `String`   |    |



## trimLeft()

Trims a character from a word at the left until that character is not found anymore (recursive)


| Input      |    |    |
| ---------- | -- | -- |
| word | string |  |,| character | string |  |
| **Output** | `String`   |    |



## <TypescriptCompletions />

In `typescript`, every word should be autocompletable with the typescript stuff, without backticks.


| Input      |    |    |
| ---------- | -- | -- |
| props | { context: {  }, <br />augmentedWords?: `AugmentedWord`[], <br />augmentedWordObject?: `MappedObject<AugmentedWord>`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <WriterConfigForm />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <WriterInput />

Writer input for any utf8 based text, file or no file


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |


# Interfaces

## 🔷 TextEditingContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| wordAtPosition  | string |  |



## 🔷 WriterConfigFormValue

- SubtextConfig: object
- SubwordConfig: object





# Variables

## 📄 Completion (exported const)

## 📄 ContentEditableDivInput (exported const)

Div that is `contentEditable` by default and has possibilities for color/style highlighting, autocomplete, subtexts and tooltips


## 📄 ContextTextArea (exported const)

## 📄 depthFontSizes (exported const)

## 📄 DivContentEditable (exported const)

## 📄 editSubtextSubwordConfig (exported const)

Interesting... In order to auto-generate a form for this, we need to combine the two into a simple function that does NOTHING. Why? Because we can't store it in the database, it is better to keep this in the frontend...

NB: DEPRECATED: TODO: function isn't used. Since the indexation didn't go right, the solution with a `SimplifiedSchemaForm` ended up being easier. Keeping it here because I need to fix the indexation nonetheless.


## 📄 FrontmatterForm (exported const)

Renders a form for frontmatter without save button


## 📄 getContext (exported const)

Gets the current word you are typing from a text and the cursor position.

Takes into account multiple word separators: tabs, newlines, and spaces.


## 📄 getSubtext (exported const)

make a subtext text based on the text of a complete paragraph (may contain single newlines and other markdown stuff, but never double newlines)

Returns either the subtext string or a HTML string with a container around the subtext, depending on if you provide `withContainer`


## 📄 getTextSegments (exported const)

Iterates over all child-nodes in the editor, replaces text with a segment, and replaces nodes with a flat list of segments

Returns all textSegments in an array


## 📄 getWriterTypeFromContent (exported const)

## 📄 isAugmentedWordMatch (exported const)

## 📄 isTypescript (exported const)

only detect typescript if the string starts with `import`. must be improved later on. It would be great to be able to detect that it's a typescript file even if it contains syntax errors.


## 📄 MarkdownCompletions (exported const)

## 📄 MarkdownParsePresentation (exported const)

## 📄 MarkdownView (exported const)

## 📄 MarkedParagraph (exported const)

## 📄 MarkedText (exported const)

## 📄 MarkedToken (exported const)

Function that can be used to iterate over the marked parse and style every token, recursively

NB: this returns a regular react component, and should, for setting it as InnerHTML, be parsed with the `ReactDOMServer`


## 📄 MAX_COMPLETIONS_AMOUNT (exported const)

## 📄 metaClickableClassName (exported const)

## 📄 omitSpecialCharactersFromStart (exported const)

Omits all special characters from the start of a word for the first special character it finds. The other special characters found after that won't be trimmed.


## 📄 parseTextContentToHtmlString (exported const)

Returns a html string from a text string that can be rendered in the dom

NB: because we're parsing text from div.innerText, sometimes there are two newlines when there should be one break.

Three newlines means there should be two breaks...


## 📄 SmartContentEditableDivInput (exported const)

Uses ContentEditableDivInput, and attaches the Completions to it based on the content type. Also all other data required...


NB: TODO: once the autocomplete inside the contentEditable is done, these things should move inside of there. I need a component that has lots of UI/UX but isn't very smart. This will be able to be re-used in many usecases...


## 📄 SpannedSentence (exported const)

Needs to be done for every text that can have potential interactions


## 📄 specialCharacters (exported const)

## 📄 SubtextContainer (exported const)

Returns a string with HTML for the subtext container, given you already have


## 📄 Subword (exported const)

## 📄 testAllContentEditableRenderComponents (exported const)

Can be used to test all `ContentEditableRenderComponent`s with example inputs

Instead you can also enable devmode and just check it on the live examples


## 📄 testContentEditableRenderComponent (exported const)

Creates an element from the markdown input, and then uses the `toMarkdownString` function to make it markdown again.

TODO: use <template>, might be more accurate. See https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518


## 📄 TitleContainer (exported const)

container for any index instance that needs to be rendered in the explore page


## 📄 trimAround (exported const)

Removes x amount of characters from both sides of a word


## 📄 trimLeft (exported const)

Trims a character from a word at the left until that character is not found anymore (recursive)


## 📄 TypescriptCompletions (exported const)

In `typescript`, every word should be autocompletable with the typescript stuff, without backticks.


## 📄 { useStore } (exported const)

## 📄 WriterConfigForm (exported const)

## 📄 writerInitialValues (exported const)

## 📄 WriterInput (exported const)

Writer input for any utf8 based text, file or no file

