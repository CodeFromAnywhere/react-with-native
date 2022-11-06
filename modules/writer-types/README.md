# Writer types

writer-types (node operation)



# Outline

## Interfaces

- [Language](#language)
- [SubtextConfig](#subtextconfig)
- [SubtextRelatedThing](#subtextrelatedthing)
- [SubwordConfig](#subwordconfig)
- [SubwordViewMode](#subwordviewmode)
- [WordPriority](#wordpriority)
- [WriterViewEnum](#writerviewenum)



# Interfaces

## Language

all currently supported languages








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



## SubtextRelatedThing

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| quantity  | string |  |



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



## SubwordViewMode

## WordPriority

## WriterViewEnum

