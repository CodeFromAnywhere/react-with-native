# Language types

language-types (js operation)



# Api reference

## 🔸 TokiPonaMatrix

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



## 🔹 WordPriority

# Internal

<details><summary>Show internal (13)</summary>
  
  # 🔸 KvmdWord

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



## 🔹 MappedWordMatrix

Mapped Object for performance reasons








## 🔸 MarkdownWord

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



## 🔸 NepaliEnglishTranslationMatrix

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



## 🔸 Statement

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



## 🔸 Translation

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



## 🔸 Word

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



## 🔸 WordCategory

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



## 🔹 WordConjucation

In linguistics, conjugation is the creation of derived forms of a verb from its principal parts by inflection

Besides this, there are also other ways to alter a word to add/change meaning, this should be summed up using this enum.








## 🔹 WordInfo

Properties: 

 | Name | Type | Description |
|---|---|---|
| latin (optional) | string |  |
| alternative (optional) | string |  |
| phonetic (optional) | string | Phonetic writing is used to describe how the word is pronounced |
| audio (optional) | object | Audio fragment containing the spoken word |
| examples (optional) | array | Sentences containing this word |



## 🔹 WordInfoObject

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



## 🔸 WordMatrix

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



## 🔹 WordType

  </details>

