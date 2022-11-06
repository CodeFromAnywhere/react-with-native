# Language types

language-types (js operation)



# Outline

## Models

- [KvmdWord](#kvmdword)
- [MarkdownWord](#markdownword)
- [NepaliEnglishTranslationMatrix](#nepalienglishtranslationmatrix)
- [Statement](#statement)
- [TokiPonaMatrix](#tokiponamatrix)
- [Translation](#translation)
- [Word](#word)
- [WordCategory](#wordcategory)
- [WordMatrix](#wordmatrix)

## Interfaces

- [BackendAsset](#backendasset)
- [CategoryStack](#categorystack)
- [DefaultModelType](#defaultmodeltype)
- [Id](#id)
- [KeyValueMarkdownModelType](#keyvaluemarkdownmodeltype)
- [Language](#language)
- [MappedWordMatrix](#mappedwordmatrix)
- [Markdown](#markdown)
- [MarkdownModelType](#markdownmodeltype)
- [ParameterName](#parametername)
- [Slug](#slug)
- [SlugModelType](#slugmodeltype)
- [Text](#text)
- [WordConjucation](#wordconjucation)
- [WordInfo](#wordinfo)
- [WordInfoObject](#wordinfoobject)
- [WordPriority](#wordpriority)
- [WordType](#wordtype)



# Models

## KvmdWord

keyValueMarkdown model



Should later be migrated to `WordMatrix`





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean |  |



## MarkdownWord

markdown model



Should later be migrated to `WordMatrix`





Properties: 

 | Name | Type | Description |
|---|---|---|
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



## NepaliEnglishTranslationMatrix

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| en  | string |  |
| index  | number |  |
| ne  | string |  |



## Statement

markdown model









Properties: 

 | Name | Type | Description |
|---|---|---|
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
| type (optional) | string |  |
| url (optional) | string |  |
| author (optional) | string |  |
| agreement (optional) | number |  |
| importancyCalculated (optional) | number |  |
| wordSlugs  | array |  |



## TokiPonaMatrix

jsonMultiple model



DEPRECATED: to be migrated to `WordMatrix`





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| category  | string |  |
| type  | string |  |
| tok (optional) | string |  |
| nl (optional) | string |  |
| en (optional) | string |  |
| np (optional) | string |  |
| pt-br (optional) | string |  |
| em  | string |  |



## Translation

jsonMultiple model



We could have a Translation model that collects any translation for any key for any model for any language.
The original source text is still stored in the models itself, and every model has just one language.

If you want a markdown or text key to be translated, add `{parameter}_TranslationId` to the model. The translation can then be generated on-demand and improved afterwards.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| sourcePath  | string |  |
| language  | string |  |
| markdown  | string |  |
| text  | string |  |



## Word

jsonMultiple model



The goal of the words model is to provide a definition for every word we use, in any language.

DEPRECATED: Should be replaced with `WordMatrix`





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| rank (optional) | number |  |
| usageCountCalculated (optional) | number |  |
| english_wordSlug (optional) | string |  |
| root_wordSlug (optional) | string |  |
| common_wordSlug (optional) | string |  |
| tokiPona_wordSlugs (optional) | array |  |
| definition_statementId (optional) | string |  |
| parameterNameSlug (optional) | string |  |



## WordCategory

jsonMultiple model



Different ways to categorise a word semantically





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| description  | string |  |



## WordMatrix

jsonMultiple model




WordMatrix is a matrix that contains as much information about a word as possible in as many languages as possible. Easy to use for 1:1 translation

Besides the keys that are language-agnostic, for every language `key` (See `Language`), there are multiple keys that are connected to that specific language

- [key]: the latin standard written representation for this word
- [key]Alternative: the alternative written representation for this word, if any (if the language commonly uses a different script, this can be noted here)
- [key]Audio: a short audio recording for pronunciation of this word
- [key]Phonetic: a phonetic representation of pronunciation of this word in this language
- [key]Examples: An array of examples of usage of this word (can contain both a text and audio)

@see Language





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| description  | string |  |
| descriptionAudio  | object |  |
| image (optional) | object |  |
| wordCategorySlugs  | array |  |
| type (optional) | string |  |
| priorityLevel (optional) | string |  |
| rank (optional) | number |  |
| usageCountCalculated (optional) | number |  |
| conjucations (optional) | array |  |
| root_wordMatrixSlug (optional) | string | If the word is a certain conjugation of a root word, this should be a reference to the root word |
| root_word (optional) | object |  |
| common_wordMatrixSlug (optional) | string | f the word is a synonym to a more common word, this should be a reference to the more common synonym. This is a 1:1 synonym only |
| opposite_wordMatrixSlug (optional) | string | If there's another word that's the complete opposite of this one, you can declare it here |
| tokiPona_wordMatrixSlugs (optional) | array | The closest way to express this word in toki pona terms. |
| emoji_wordMatrixSlugs (optional) | array |  |
| emoji (optional) | string | Single emoji describing this word 1:1 (if it are more emojis of multiple words, please use the reference instead) |
| english (optional) | object |  |
| dutch (optional) | object |  |
| nepali (optional) | object |  |
| portuguese (optional) | object |  |
| brazilian (optional) | object |  |
| german (optional) | object |  |
| french (optional) | object |  |
| spanish (optional) | object |  |
| italian (optional) | object |  |
| norwegian (optional) | object |  |
| swedish (optional) | object |  |
| danish (optional) | object |  |
| vietnamese (optional) | object |  |
| indonesian (optional) | object |  |
| southAfrican (optional) | object |  |
| tokiPona (optional) | object |  |
| hindi (optional) | object |  |
| mandarin (optional) | object |  |
| arabic (optional) | object |  |
| bengali (optional) | object |  |
| urdu (optional) | object |  |
| japanese (optional) | object |  |
| swahili (optional) | object |  |


# Interfaces

## BackendAsset

Part of the asset that should be sent to the backend. The rest should frontend-only

Some values are stored, some are not





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt (optional) | string |  |
| relativePath (optional) | string |  |
| name (optional) | string |  |
| temporaryDestination (optional) | string |  |



## CategoryStack

- null: string






## DefaultModelType

Use this model by default





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |



## Id

Should be an unique string By default, you can use `generateId()` to generate a random string of 16 characters. If you wish, you can also use any other string, as long as you are sure it's unique.


## Background Info

azAZ09 characters are easy to copy and provide 62 characters. the goal of an id is to be unique.

the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.

the change of duplicate ids gets bigger once you make them shorter the change of finding an existing id gets bigger once you make them shorter

An Id with 12 characters would provide 3.22e21 combinations.

What is the change of duplicate ids? This depends on the amount of identifyable items in the data What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.

Why make an id short? I don't know if there's an important reason.

All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.

An id would look like this:

``` { "id": "sk2EcW9AkZpksk2EcW9AkZpk" } ```

Looks good to me! Don't think about it and just keep it simple. We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.








## KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file. empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean |  |



## Language

all currently supported languages








## MappedWordMatrix

Mapped Object for performance reasons








## Markdown

a string that is known to contain markdown.








## MarkdownModelType

Handy model type for storing stuff in a Markdown file.

1 markdown file will represent 1 MarkdownModelType extended instance

another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content

TODO: see how this relates to MarkdownFile. Make this very clear!





Properties: 

 | Name | Type | Description |
|---|---|---|
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



## ParameterName

Properties: 

 | Name | Type | Description |
|---|---|---|
| pattern  | string |  |
| example  | string |  |
| description  | string |  |
| type  | string |  |
| secondaryType (optional) | string |  |
| contentType  | array |  |



## Slug

use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.








## SlugModelType

use this model for things with a name that have an unique slug that can be used to identify the model





Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |



## Text

text can be in multiple formats. most texts in data are probably just text but they can also contain markdown
---- if there is a data model with just a single text and it is clear from the name of the model what it should be, better call it either text or markdown.








## WordConjucation

In linguistics, conjugation is the creation of derived forms of a verb from its principal parts by inflection

Besides this, there are also other ways to alter a word to add/change meaning, this should be summed up using this enum.








## WordInfo

Properties: 

 | Name | Type | Description |
|---|---|---|
| latin (optional) | string |  |
| alternative (optional) | string |  |
| phonetic (optional) | string | Phonetic writing is used to describe how the word is pronounced |
| audio (optional) | object | Audio fragment containing the spoken word |
| examples (optional) | array | Sentences containing this word |



## WordInfoObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| english (optional) | object |  |
| dutch (optional) | object |  |
| nepali (optional) | object |  |
| portuguese (optional) | object |  |
| brazilian (optional) | object |  |
| german (optional) | object |  |
| french (optional) | object |  |
| spanish (optional) | object |  |
| italian (optional) | object |  |
| norwegian (optional) | object |  |
| swedish (optional) | object |  |
| danish (optional) | object |  |
| vietnamese (optional) | object |  |
| indonesian (optional) | object |  |
| southAfrican (optional) | object |  |
| tokiPona (optional) | object |  |
| hindi (optional) | object |  |
| mandarin (optional) | object |  |
| arabic (optional) | object |  |
| bengali (optional) | object |  |
| urdu (optional) | object |  |
| japanese (optional) | object |  |
| swahili (optional) | object |  |



## WordPriority

## WordType

