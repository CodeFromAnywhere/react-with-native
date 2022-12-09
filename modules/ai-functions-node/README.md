# Ai functions node

ai-functions-node (`OperationClassification` node-cjs)



# Api reference

## getContextualPromptResults()

Gets all contextualPromptResults, but only if specific things are true

TODO:

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { prompt_projectRelativePath?: string, <br />promptSlugs?: string[], <br /> } |  |
| **Output** |    |    |



## getContextualPrompts()

Returns all contextual prompts for the selection and for the page with the right context type


| Input      |    |    |
| ---------- | -- | -- |
| contextType (optional) | `FileType` | If not given, will return all |,| scopeProjectRelativePath (optional) | string |  |
| **Output** |    |    |



## 🔹 ContextualPromptsObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| selectionContextualPrompts  | array |  |
| pageContextualPrompts  | array |  |
| folderContextualPrompts  | array |  |
| databaseContextualPromptSlugs  | array |  |



## 📄 getContextualPromptResults (exported const)

Gets all contextualPromptResults, but only if specific things are true

TODO:

- For any prompt we have for this filetype: get it from the database
- For prompts about a folder: path/to/folder/.index/prompt-results.json
- For prompts about a file or a selection thereof: path/to/folder/.index/[filename]/prompt-results.json

NB: the slug of the ones in index should be the ID, and does not need to be set by the user, because we cannot guarantee that it's no duplicate.


## 📄 getContextualPrompts (exported const)

Returns all contextual prompts for the selection and for the page with the right context type

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # controlChatGptCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 controlChatGptCli (exported const)

  </details>

# Internal

<details><summary>Show internal (12)</summary>
    
  # controlChatGptCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## controlChatGpt()

| Input      |    |    |
| ---------- | -- | -- |
| prompt | string |  |,| headless (optional) | boolean |  |
| **Output** |    |    |



## getContextualPrompt()

| Input      |    |    |
| ---------- | -- | -- |
| contextualPromptSlug (optional) | string |  |,| customPromptContent | string |  |,| saveNewPromptWithName | string |  |
| **Output** |    |    |



## getContextualPromptsArray()

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


| Input      |    |    |
| ---------- | -- | -- |
| scopeProjectRelativePath (optional) | string | If available, will also get the scoped context |
| **Output** |    |    |



## getFolderRelativeScopeDbFilePath()

Function to centralise the convention of the db file location of a scoped prompt


| Input      |    |    |
| ---------- | -- | -- |
| filename (optional) | string |  |
| **Output** | `String`   |    |



## processChatGptPrompt()

| Input      |    |    |
| ---------- | -- | -- |
| config | { contextContent: string, <br />selectionContent: string, <br />contextualPromptSlug?: string, <br />customPromptContent: string, <br />saveNewPromptWithName: string, <br />commentContent: string, <br />isHeadless?: boolean, <br />prompt_projectRelativePath?: string, <br />thread?: string, <br /> } |  |
| **Output** |    |    |



## 📄 controlChatGptCli (exported const)

## 📄 controlChatGpt (exported const)

## 📄 getContextualPrompt (exported const)

## 📄 getContextualPromptsArray (exported const)

Wrapper around the database to support the usecase of storing a file in a custom location for contextualPrompts.


## 📄 getFolderRelativeScopeDbFilePath (exported const)

Function to centralise the convention of the db file location of a scoped prompt


## 📄 processChatGptPrompt (exported const)

  </details>

