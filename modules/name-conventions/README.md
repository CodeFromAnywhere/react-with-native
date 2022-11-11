# Name conventions

name-conventions (`OperationClassification` js)

Any functions and variables related to variable declaration naming conventions




# Api reference

## getAssetInputType()

Convention parameters for assets: [name], [name]s, xyz[Name], xyz[Name]s

Different ways to name assets: `image`, `video`, `audio`, `file` or just `asset`, which is everything together


| Input      |    |    |
| ---------- | -- | -- |
| parameterName | string |  |,| valueType (optional) | `SimplifiedSchemaType` |  |
| **Output** | { type: image / video / audio / file / asset, <br />isMultiple: boolean, <br /> }   |    |



## 📄 getAssetInputType (exported const)

## isCalculatedParameter()

this is part of the database convention


| Input      |    |    |
| ---------- | -- | -- |
| parameterName | string |  |
| **Output** |    |    |



## 📄 isCalculatedParameter (exported const)

this is part of the database convention


## 🔹 AssetInputType

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| isMultiple  | boolean |  |



## 📄 markdownTextParameterNames (exported const)

Any parameter names that should render a textArea


## 📄 passwordTextParameterNames (exported const)

## 📄 referenceParameterNames (exported const)

## 📄 referencePluralParameterNames (exported const)

# Internal

<details><summary>Show internal (9)</summary>
    
  # getParameterContentType()




| Input      |    |    |
| ---------- | -- | -- |
| parameterName | string |  |
| **Output** |    |    |



## isGeneratedParameterName()

| Input      |    |    |
| ---------- | -- | -- |
| parameterName | string |  |
| **Output** |    |    |



## 🔹 PatternMatcher

Properties: 

 | Name | Type | Description |
|---|---|---|
| pattern  | string |  |
| matches  | string |  |
| isSingleWord (optional) | boolean |  |



## 📄 assetsFolders (exported const)

## 📄 generatedParameterNames (exported const)

## 📄 getParameterContentType (exported const)

## 📄 isGeneratedParameterName (exported const)

## 📄 parameterNames (exported const)

### Form input types

How do we show different UI's based on certain things we know about some parameter (name + type)? There are many things

- All "image" or "xxxImage" should be Image + camera inputs
- All "asset" or "xxxAsset" should be File inputs
- All "recording" or "xxxAudio" should be mic inputs
- All "position" or "xxxPosition" should be coordinates which should be pickable on the map
- All "path" or "xxxPath" should be an input where you can select a relative path from project root or operation src root, depending on what we need. It needs to be clear what kind of paths are allowed, so we need to think about all the options and if we can all put that in the parameter name (would be best) or if we need to use the description...


## 📄 patternMatchers (exported const)

  </details>

