# Ai types

ai-types (`OperationClassification` cjs)



# Api reference

## 🔸 ContextualPromptResult

jsonMultiple model



A result from a contextual prompt. Doesn't include the full context, for that you can find all results for a certain thread





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
| isValidCalculated (optional) | boolean |  |
| contextualPromptSlug  | string |  |
| prompt_projectRelativePath (optional) | string |  |
| prompt (optional) | string |  |
| selectionString (optional) | string |  |
| isFavorite (optional) | boolean |  |
| resultText (optional) | string |  |
| resultAssets  | array |  |
| thread (optional) | string |  |



## 🔸 ContextualPrompt

jsonSingle model




Model for prompting information from third party sources





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
| title (optional) | string |  |
| scopeProjectRelativePath (optional) | string |  |
| promptContent  | string |  |
| folderContentContext (optional) | string |  |
| usesContext (optional) | boolean |  |
| usesSelection (optional) | boolean |  |
| usesAnyContext (optional) | boolean |  |
| contextType (optional) | string |  |
| instantExecution (optional) | boolean |  |
| isFavorite (optional) | boolean |  |



## 🔸 AiDemoApp

jsonSingle model









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
| domain (optional) | string |  |
| headerTitle  | string |  |
| hasImageBoolean (optional) | boolean |  |
| headerSubtitle (optional) | string |  |
| headerCtaHref (optional) | string |  |
| headerCtaText (optional) | string |  |


# Internal

<details><summary>Show internal (1)</summary>
    
  # 🔹 ContextualContent







Properties: 

 | Name | Type | Description |
|---|---|---|
| contextContent  | string |  |
| contextSelection (optional) | string |  |
| context_projectRelativeFilePath (optional) | string |  |

  </details>

