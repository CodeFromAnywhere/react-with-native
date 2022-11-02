# Name conventions

name-conventions (js operation)

Any functions and variables related to variable declaration naming conventions




# Outline

## Functions

- [getAssetInputType](#getAssetInputType)
- [getParameterContentType](#getParameterContentType)
- [isCalculatedParameter](#isCalculatedParameter)
- [isGeneratedParameterName](#isGeneratedParameterName)

## Interfaces

- [AssetInputType](#assetinputtype)
- [PatternMatcher](#patternmatcher)
- [SimplifiedSchemaType](#simplifiedschematype)

## Variables

- [generatedParameterNames](#generatedparameternames)
- [getAssetInputType](#getassetinputtype)
- [getParameterContentType](#getparametercontenttype)
- [isCalculatedParameter](#iscalculatedparameter)
- [isGeneratedParameterName](#isgeneratedparametername)
- [markdownTextParameterNames](#markdowntextparameternames)
- [parameterNames](#parameternames)
- [passwordTextParameterNames](#passwordtextparameternames)
- [patternMatchers](#patternmatchers)
- [referenceParameterNames](#referenceparameternames)
- [referencePluralParameterNames](#referencepluralparameternames)



# Functions

## getAssetInputType

Convention parameters for assets: [name], [name]s, xyz[Name], xyz[Name]s

Different ways to name assets: `image`, `video`, `audio`, `file` or just `asset`, which is everything together


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| isMultiple  | boolean |  |



### Parameters (2)

#### Parameter 1: parameterName: string

#### Parameter 2: valueType (optional): string(Enum: string | number | boolean | object | array | null)

## getParameterContentType

### Parameters (1)

#### Parameter 1: parameterName: string

## isCalculatedParameter

this is part of the database convention




### Parameters (1)

#### Parameter 1: parameterName: string

## isGeneratedParameterName

### Parameters (1)

#### Parameter 1: parameterName: string

# Interfaces

## AssetInputType

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| isMultiple  | boolean |  |



## PatternMatcher

Properties: 

 | Name | Type | Description |
|---|---|---|
| pattern  | string |  |
| matches  | string |  |
| isSingleWord (optional) | boolean |  |



## SimplifiedSchemaType

# Variables

## generatedParameterNames (exported const)

## getAssetInputType (exported const)

## getParameterContentType (exported const)

## isCalculatedParameter (exported const)

this is part of the database convention


## isGeneratedParameterName (exported const)

## markdownTextParameterNames (exported const)

Any parameter names that should render a textArea


## parameterNames (exported const)

### Form input types

How do we show different UI's based on certain things we know about some parameter (name + type)? There are many things

- All "image" or "xxxImage" should be Image + camera inputs
- All "asset" or "xxxAsset" should be File inputs
- All "recording" or "xxxAudio" should be mic inputs
- All "position" or "xxxPosition" should be coordinates which should be pickable on the map
- All "path" or "xxxPath" should be an input where you can select a relative path from project root or operation src root, depending on what we need. It needs to be clear what kind of paths are allowed, so we need to think about all the options and if we can all put that in the parameter name (would be best) or if we need to use the description...


## passwordTextParameterNames (exported const)

## patternMatchers (exported const)

## referenceParameterNames (exported const)

## referencePluralParameterNames (exported const)

