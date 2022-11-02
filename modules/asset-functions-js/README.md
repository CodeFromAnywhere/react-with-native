# Asset functions js

asset-functions-js (js operation)


## ❌ No description set yet

Please set a description for this operation in OPERATION.md

This is a js operation. This means you cannot use any react or node, it's pure typescript, compiled to javascript, and can be used anywhere.




# Outline

## Functions

- [addToken](#addToken)
- [ensureToken](#ensureToken)
- [getAssetDirectlyApiUrl](#getAssetDirectlyApiUrl)
- [getExtensionFromAsset](#getExtensionFromAsset)
- [getNameFromRelativePath](#getNameFromRelativePath)
- [getNameWithTokenFromRelativePath](#getNameWithTokenFromRelativePath)
- [getPreferredExtensionFromType](#getPreferredExtensionFromType)
- [getReferencedAssetApiUrl](#getReferencedAssetApiUrl)
- [getTypeFromRelativePath](#getTypeFromRelativePath)
- [readableSize](#readableSize)
- [removeTokenIfPresent](#removeTokenIfPresent)

## Interfaces

- [Asset](#asset)

## Variables

- [addToken](#addtoken)
- [ensureToken](#ensuretoken)
- [getAssetDirectlyApiUrl](#getassetdirectlyapiurl)
- [getExtensionFromAsset](#getextensionfromasset)
- [getNameFromRelativePath](#getnamefromrelativepath)
- [getNameWithTokenFromRelativePath](#getnamewithtokenfromrelativepath)
- [getPreferredExtensionFromType](#getpreferredextensionfromtype)
- [getReferencedAssetApiUrl](#getreferencedassetapiurl)
- [getTypeFromRelativePath](#gettypefromrelativepath)
- [readableSize](#readablesize)
- [removeTokenIfPresent](#removetokenifpresent)
- [tokenPrefix](#tokenprefix)



# Functions

## addToken

If previousToken is not present, will be generated randomly




### Parameters (3)

#### Parameter 1: name: string

#### Parameter 2: previousToken (optional): string

#### Parameter 3: attachTokenToFilename (optional): boolean

## ensureToken

Remove the token (if present), then add it again




### Parameters (3)

#### Parameter 1: name: string

#### Parameter 2: newToken (optional): string

#### Parameter 3: attachTokenToFilename (optional): boolean

## getAssetDirectlyApiUrl

### Parameters (2)

#### Parameter 1: apiUrl: string

#### Parameter 2: projectRelativeAssetPath: string

## getExtensionFromAsset

Returns a preliminary filename, based on the `Asset`


### Returns: string

### Parameters (1)

#### Parameter 1: asset: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| alt (optional) | string |  |
| relativePath (optional) | string |  |
| name (optional) | string |  |
| temporaryDestination (optional) | string |  |
| blobPath (optional) | string |  |
| originalFilename (optional) | string |  |
| sizeBytes (optional) | number |  |
| blob (optional) | object |  |
| uploadProgress (optional) | number |  |



## getNameFromRelativePath

### Parameters (1)

#### Parameter 1: relativePath: string

## getNameWithTokenFromRelativePath

first gets the name from the relativePath

then ensures the token is attached (if not already there)




### Parameters (3)

#### Parameter 1: relativePath: string

#### Parameter 2: attachTokenToFilename (optional): boolean

#### Parameter 3: newToken (optional): string

## getPreferredExtensionFromType

Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...

Here the extension is decided.

NB: we also need to convert the file itself in case of mp3




### Parameters (1)

#### Parameter 1: type (optional): string

## getReferencedAssetApiUrl

### Parameters (4)

#### Parameter 1: apiUrl: string

#### Parameter 2: projectRelativeReferencingFilePath: string

#### Parameter 3: referencingFileRelativeAssetPath: string

#### Parameter 4: isDownload (optional): boolean

## getTypeFromRelativePath

### Returns: string(Enum: video | audio | image | other)

### Parameters (1)

#### Parameter 1: relativePath: string

## readableSize

### Parameters (1)

#### Parameter 1: sizeBytes: number

## removeTokenIfPresent

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| nameWithoutToken  | object |  |
| token (optional) | string |  |



### Parameters (2)

#### Parameter 1: name: string

#### Parameter 2: attachTokenToFilename (optional): boolean

# Interfaces

## Asset

Asset you can upload

This is not a database model, it can exist in properties of any db model or type interface.

Only `alt` and `relativePath` are stored, the other parameters are optionally required for uploading and user interfaces, and are not always there

NB: don't use this in your model, use `StoredAsset` instead.





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt (optional) | string |  |
| relativePath (optional) | string |  |
| name (optional) | string |  |
| temporaryDestination (optional) | string |  |
| blobPath (optional) | string |  |
| type (optional) | string |  |
| originalFilename (optional) | string |  |
| sizeBytes (optional) | number |  |
| blob (optional) | object |  |
| uploadProgress (optional) | number |  |


# Variables

## addToken (exported const)

If previousToken is not present, will be generated randomly


## ensureToken (exported const)

Remove the token (if present), then add it again


## getAssetDirectlyApiUrl (exported const)

## getExtensionFromAsset (exported const)

Returns a preliminary filename, based on the `Asset`


## getNameFromRelativePath (exported const)

## getNameWithTokenFromRelativePath (exported const)

first gets the name from the relativePath

then ensures the token is attached (if not already there)


## getPreferredExtensionFromType (exported const)

Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...

Here the extension is decided.

NB: we also need to convert the file itself in case of mp3


## getReferencedAssetApiUrl (exported const)

## getTypeFromRelativePath (exported const)

## readableSize (exported const)

## removeTokenIfPresent (exported const)

## tokenPrefix (exported const)

NB: any filename should not be expected to enter this as part of its name. Otherwise it breaks the code and the filename will be changed to the thing before this string.

NB: don't put any things inhere that are different, slugified, as the name will be slugified!

