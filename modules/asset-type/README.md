# Asset type

asset-type (`OperationClassification` cjs)

All types related to asset upload




# Api reference

## 🔹 BackendAsset

Part of the asset that should be sent to the backend. The rest should frontend-only

Some values are stored, some are not





Properties: 

 | Name | Type | Description |
|---|---|---|
| alt (optional) | string |  |
| relativePath (optional) | string |  |
| name (optional) | string |  |
| temporaryDestination (optional) | string |  |
| projectRelativeReferencingFilePath (optional) | string |  |
| modelName (optional) | string |  |
| absoluteUrl (optional) | string |  |



## 🔹 Asset

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
| projectRelativeReferencingFilePath (optional) | string |  |
| modelName (optional) | string |  |
| absoluteUrl (optional) | string |  |
| blobPath (optional) | string |  |
| type (optional) | string |  |
| originalFilename (optional) | string |  |
| sizeBytes (optional) | number |  |
| blob (optional) | object |  |
| uploadProgress (optional) | number |  |



## 🔹 AssetType

Possible Asset Types

Later, maybe also support:
"markdown","json","typescript"








## 🔹 NewAssetType

Possible types for new asset upload in the frontend



> Possible types for new asset upload in the frontend




## 🔹 NewAssetType

Possible types for new asset upload in the frontend








## 🔹 UploadAssetResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| isUnauthorized (optional) | boolean |  |
| message (optional) | string |  |
| temporaryDestination (optional) | string |  |



## 🔹 UploadAssetResult

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccessful  | boolean |  |
| message (optional) | string |  |
| temporaryDestination (optional) | string |  |



## 🔹 CompressionConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| bitrate (optional) | number | used for audio |
| fps (optional) | number | Frames per second. Used for video |
| resolution (optional) | object | Set the resolution. Will not upscale.<br /><br />Used for video and images |
| shouldOverwrite (optional) | boolean | if true, will overwrite the original file |



## 🔹 CompressionConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| bitrate (optional) | number |  |
| fps (optional) | number |  |
| resolution (optional) | object |  |
| shouldOverwrite (optional) | boolean |  |



## 🔹 Image

Properties: 

 | Name | Type | Description |
|---|---|---|
| projectRelativePath  | string |  |
| width  | number |  |
| height  | number |  |
| base64  | string |  |
| caption  | string |  |


# Internal

<details><summary>Show internal (4)</summary>
    
  # 🔹 CompressionOption

CompressionOption should be able to be applied on the model parameter through frontmatter

- default (default option): Default King OS wide compression. User can make customize it within a sensible limit
- none: no compression applied by default (user can optionally compress it)
- high: compressed bigtime by default (user cannot make it be compressed less)
- low: compressed just a little (user cannot make it be compressed less, but can optionally compress it more)



> CompressionOption should be able to be applied on the model parameter through frontmatter<br /><br />- default (default option): Default King OS wide compression. User can make customize it within a sensible limit<br />- none: no compression applied by default (user can optionally compress it)<br />- high: compressed bigtime by default (user cannot make it be compressed less)<br />- low: compressed just a little (user cannot make it be compressed less, but can optionally compress it more)




## 🔹 CompressionOption

CompressionOption should be able to be applied on the model parameter through frontmatter

- default (default option): Default OS wide compression. User can make customize it within a logical limit
- none: no compression applied by default (user can optionally compress it)
- high: compressed bigtime by default (user cannot make it be compressed less)
- low: compressed just a little (user cannot make it be compressed less, but can optionally compress it more)








## 🔹 UploadAssetBody

NB: other things like alt, final destination etc, should not be sent with the upload, but instead with the function



> NB: other things like alt, final destination etc, should not be sent with the upload, but instead with the function

Properties: 

 | Name | Type | Description |
|---|---|---|
| authToken (optional) | string |  |



## 🔹 UploadAssetBody

NB: other things like alt, final destination etc, should not be sent with the upload, but instead with the function





Properties: 

 | Name | Type | Description |
|---|---|---|
| authToken (optional) | string |  |

  </details>

