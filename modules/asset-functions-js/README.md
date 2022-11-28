# Asset functions js

asset-functions-js (`OperationClassification` cjs)


## ❌ No description set yet

Please set a description for this operation in OPERATION.md

This is a js operation. This means you cannot use any react or node, it's pure typescript, compiled to javascript, and can be used anywhere.




# Api reference

## getReferencedAssetApiUrl()

| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| projectRelativeReferencingFilePath | string |  |,| referencingFileRelativeAssetPath | string |  |,| isDownload (optional) | boolean | If true, asset will be returned as download |
| **Output** | `String`   |    |



## getTypeFromUrlOrPath()

We are assuming the asset name and extsion appear at the end of the URL


| Input      |    |    |
| ---------- | -- | -- |
| urlOrPath | string |  |
| **Output** | image / video / audio / text / other   |    |



## 📄 getReferencedAssetApiUrl (exported const)

## 📄 getTypeFromUrlOrPath (exported const)

We are assuming the asset name and extsion appear at the end of the URL


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
| projectRelativeAssetPath | string |  |
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


## 📄 getAssetDirectlyApiUrl (exported const)

## 📄 getExtensionFromAsset (exported const)

Returns a preliminary filename, based on the `Asset`


## 📄 getNameWithTokenFromRelativePath (exported const)

first gets the name from the relativePath

then ensures the token is attached (if not already there)


## 📄 readableSize (exported const)

## 📄 removeTokenIfPresent (exported const)

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (8)</summary>
    
  # findAssetParametersRecursively()

Recursively finds all asset parameters in an object (for example in a database model item)


| Input      |    |    |
| ---------- | -- | -- |
| object | {  } |  |,| stack (optional) | string[] |  |
| **Output** | { assetInputType: { type: image / video / audio / file / asset, <br />isMultiple: boolean, <br /> }, <br />parameterName: string, <br />stack?: string[], <br /> }[]   |    |



## getConversionInfoFromType()

Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...

Here the extension is decided.

NB: we also need to convert the file itself in case of mp3


| Input      |    |    |
| ---------- | -- | -- |
| uploadMimeType (optional) | string |  |
| **Output** | { uploadMimeType?: string, <br />targetFormat?: string, <br />isUnchecked?: boolean, <br /> }   |    |



## getNameFromRelativePath()

| Input      |    |    |
| ---------- | -- | -- |
| relativePath | string |  |
| **Output** | `String`   |    |



## 🔹 AssetParameter

Properties: 

 | Name | Type | Description |
|---|---|---|
| assetInputType  | object |  |
| parameterName  | string |  |
| stack (optional) | array |  |



## 📄 findAssetParametersRecursively (exported const)

Recursively finds all asset parameters in an object (for example in a database model item)


## 📄 getConversionInfoFromType (exported const)

Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...

Here the extension is decided.

NB: we also need to convert the file itself in case of mp3


## 📄 getNameFromRelativePath (exported const)

## 📄 tokenPrefix (exported const)

NB: any filename should not be expected to enter this as part of its name. Otherwise it breaks the code and the filename will be changed to the thing before this string.

NB: don't put any things inhere that are different, slugified, as the name will be slugified!
  </details>

