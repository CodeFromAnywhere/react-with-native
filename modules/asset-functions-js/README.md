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

## addToken()

If previousToken is not present, will be generated randomly


| Input      |    |    |
| ---------- | -- | -- |
| name | string |  |,| previousToken (optional) | string | if given, uses this token, otherwise generates a new random token |,| attachTokenToFilename (optional) | boolean |  |
| **Output** | `String`   |    |



## ensureToken()

Remove the token (if present), then add it again


| Input      |    |    |
| ---------- | -- | -- |
| name | string |  |,| newToken (optional) | string | if given, is used for generating new token

if already present, token is used from the name instead of this one |,| attachTokenToFilename (optional) | boolean |  |
| **Output** | `String`   |    |



## getAssetDirectlyApiUrl()

| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| projectRelativeAssetPath | string |  |
| **Output** | `String`   |    |



## getExtensionFromAsset()

Returns a preliminary filename, based on the `Asset`


| Input      |    |    |
| ---------- | -- | -- |
| asset | `Asset` |  |
| **Output** | string   |    |



## getNameFromRelativePath()

| Input      |    |    |
| ---------- | -- | -- |
| relativePath | string |  |
| **Output** | `String`   |    |



## getNameWithTokenFromRelativePath()

first gets the name from the relativePath

then ensures the token is attached (if not already there)


| Input      |    |    |
| ---------- | -- | -- |
| relativePath | string |  |,| attachTokenToFilename (optional) | boolean |  |,| newToken (optional) | string |  |
| **Output** | `String`   |    |



## getPreferredExtensionFromType()

Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...

Here the extension is decided.

NB: we also need to convert the file itself in case of mp3


| Input      |    |    |
| ---------- | -- | -- |
| type (optional) | string |  |
| **Output** |    |    |



## getReferencedAssetApiUrl()

| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| projectRelativeReferencingFilePath | string |  |,| referencingFileRelativeAssetPath | string |  |,| isDownload (optional) | boolean | If true, asset will be returned as download |
| **Output** | `String`   |    |



## getTypeFromRelativePath()

| Input      |    |    |
| ---------- | -- | -- |
| relativePath | string |  |
| **Output** | video / audio / image / other   |    |



## readableSize()

| Input      |    |    |
| ---------- | -- | -- |
| sizeBytes | number |  |
| **Output** | `String`   |    |



## removeTokenIfPresent()

| Input      |    |    |
| ---------- | -- | -- |
| name | string |  |,| attachTokenToFilename (optional) | boolean |  |
| **Output** | { nameWithoutToken: {  }, <br />token?: string, <br /> }   |    |


# Variables

## 📄 addToken (exported const)

If previousToken is not present, will be generated randomly


## 📄 ensureToken (exported const)

Remove the token (if present), then add it again


## 📄 getAssetDirectlyApiUrl (exported const)

## 📄 getExtensionFromAsset (exported const)

Returns a preliminary filename, based on the `Asset`


## 📄 getNameFromRelativePath (exported const)

## 📄 getNameWithTokenFromRelativePath (exported const)

first gets the name from the relativePath

then ensures the token is attached (if not already there)


## 📄 getPreferredExtensionFromType (exported const)

Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...

Here the extension is decided.

NB: we also need to convert the file itself in case of mp3


## 📄 getReferencedAssetApiUrl (exported const)

## 📄 getTypeFromRelativePath (exported const)

## 📄 readableSize (exported const)

## 📄 removeTokenIfPresent (exported const)

## 📄 tokenPrefix (exported const)

NB: any filename should not be expected to enter this as part of its name. Otherwise it breaks the code and the filename will be changed to the thing before this string.

NB: don't put any things inhere that are different, slugified, as the name will be slugified!

