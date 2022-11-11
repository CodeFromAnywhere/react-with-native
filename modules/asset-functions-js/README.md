# Asset functions js

asset-functions-js (`OperationClassification` js)


## ❌ No description set yet

Please set a description for this operation in OPERATION.md

This is a js operation. This means you cannot use any react or node, it's pure typescript, compiled to javascript, and can be used anywhere.




# Api reference

## getReferencedAssetApiUrl()

| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| projectRelativeReferencingFilePath | string |  |,| referencingFileRelativeAssetPath | string |  |,| isDownload (optional) | boolean | If true, asset will be returned as download |
| **Output** | `String`   |    |



## 📄 getReferencedAssetApiUrl (exported const)

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



## getExtensionFromAsset()

Returns a preliminary filename, based on the `Asset`


| Input      |    |    |
| ---------- | -- | -- |
| asset | `Asset` |  |
| **Output** | string   |    |



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



## 📄 addToken (exported const)

If previousToken is not present, will be generated randomly


## 📄 ensureToken (exported const)

Remove the token (if present), then add it again


## 📄 getExtensionFromAsset (exported const)

Returns a preliminary filename, based on the `Asset`


## 📄 getNameWithTokenFromRelativePath (exported const)

first gets the name from the relativePath

then ensures the token is attached (if not already there)


## 📄 getPreferredExtensionFromType (exported const)

Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...

Here the extension is decided.

NB: we also need to convert the file itself in case of mp3


## 📄 getTypeFromRelativePath (exported const)

## 📄 readableSize (exported const)

## 📄 removeTokenIfPresent (exported const)

# Internal

<details><summary>Show internal (5)</summary>
    
  # getAssetDirectlyApiUrl()




| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| projectRelativeAssetPath | string |  |
| **Output** | `String`   |    |



## getNameFromRelativePath()

| Input      |    |    |
| ---------- | -- | -- |
| relativePath | string |  |
| **Output** | `String`   |    |



## 📄 getAssetDirectlyApiUrl (exported const)

## 📄 getNameFromRelativePath (exported const)

## 📄 tokenPrefix (exported const)

NB: any filename should not be expected to enter this as part of its name. Otherwise it breaks the code and the filename will be changed to the thing before this string.

NB: don't put any things inhere that are different, slugified, as the name will be slugified!
  </details>

