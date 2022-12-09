# Short markdown parser node

short-markdown-parser-node (`OperationClassification` node-cjs)



# Api reference

# Tests

<details><summary>Show test information(4)</summary>
    
  # fetchVoicesTest()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateAugmentedShortMarkdownTest()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 fetchVoicesTest (exported const)

## 📄 generateAugmentedShortMarkdownTest (unexported const)

  </details>

# Internal

<details><summary>Show internal (22)</summary>
    
  # augmentShortMarkdown()




| Input      |    |    |
| ---------- | -- | -- |
| shortMarkdown | `ShortMarkdown` |  |,| projectRelativeFilePath | string |  |
| **Output** |    |    |



## fetchVoicesTest()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## fetchVoices()

| Input      |    |    |
| ---------- | -- | -- |
| dialogue | `DialogueSentence`[] |  |
| **Output** |    |    |



## generateAugmentedShortMarkdown()

The first step is to ensure that this would actually work. It needs to generate the MP3s and refer to them correctly in the file.


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeMarkdownFilePath | string |  |
| **Output** |    |    |



## getOrGenerateShortMarkdown()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeMarkdownFilePath | string |  |
| **Output** |    |    |



## parseDialogue()

| Input      |    |    |
| ---------- | -- | -- |
| textMarkdown | string |  |
| **Output** | { voice?: string, <br />sentence: string, <br /> }[]   |    |



## uberduckGetPath()

| Input      |    |    |
| ---------- | -- | -- |
| uuid | string |  |
| **Output** | string   |    |



## uberduckSpeak()

| Input      |    |    |
| ---------- | -- | -- |
| uberduckVoice | string |  |,| text | string |  |
| **Output** | string   |    |



## voiceCloneDialogue()

| Input      |    |    |
| ---------- | -- | -- |
| textContent | string |  |
| **Output** |    |    |



## 🔹 DialogueSentence

Properties: 

 | Name | Type | Description |
|---|---|---|
| remotePath (optional) | string |  |
| uuid (optional) | string |  |
| voice (optional) | string |  |
| sentence  | string |  |



## 📄 augmentShortMarkdown (exported const)

## 📄 fetchVoicesTest (exported const)

## 📄 fetchVoices (exported const)

## 📄 generateAugmentedShortMarkdown (exported const)

The first step is to ensure that this would actually work. It needs to generate the MP3s and refer to them correctly in the file.


## 📄 getOrGenerateShortMarkdown (exported const)

## 📄 MINIMUM_DURATION_MS (exported const)

## 📄 parseDialogue (exported const)

## 📄 uberduckApiKey (exported const)

## 📄 uberduckGetPath (exported const)

## 📄 uberduckSecret (exported const)

## 📄 uberduckSpeak (exported const)

## 📄 voiceCloneDialogue (exported const)

  </details>

