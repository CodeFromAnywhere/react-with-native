# Asset view

asset-view (js operation)


## 📁 AssetView

`AssetView` shows an asset. Every file-format has a different way to be rendered.




# Outline

## Functions

- [AssetView](#AssetView)
- [InteractiveAsset](#InteractiveAsset)

## Interfaces

- [Asset](#asset)

## Variables

- [AssetView](#assetview)
- [defaultClassName](#defaultclassname)
- [InteractiveAsset](#interactiveasset)



# Functions

## AssetView

### Parameters (1)

#### Parameter 1: props: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| asset  | object |  |
| className (optional) | string |  |
| projectRelativeReferencingFilePath  | string |  |
| hideDownloadLink (optional) | boolean |  |



## InteractiveAsset

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration



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

## AssetView (exported const)

## defaultClassName (exported const)

## InteractiveAsset (exported const)

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration

