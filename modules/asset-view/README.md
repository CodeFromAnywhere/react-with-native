# Asset view

asset-view (`OperationClassification` ui-cjs)


## 📁 AssetView

`AssetView` shows an asset. Every file-format has a different way to be rendered.




# Api reference

## getSrc()

| Input      |    |    |
| ---------- | -- | -- |
| asset | `Asset` |  |,| projectRelativeReferencingFilePath | string |  |,| isNextStaticProductionBuild (optional) | boolean |  |
| **Output** | { src?: string, <br />downloadUrl?: string, <br /> }   |    |



## itemGetBackendAssetUrl()

Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.

If you provide an array it'll take the first asset.


| Input      |    |    |
| ---------- | -- | -- |
| config | { item: `AugmentedAnyModelType`, <br />backendAsset?: {  }, <br />isDownload?: boolean, <br /> } |  |
| **Output** | string   |    |



## `<ModelItemAssetView />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 getSrc (exported const)

## 📄 itemGetBackendAssetUrl (exported const)

Get remote url for a `BackendAsset` in an `AugmentedAnyModelType` database model item.

If you provide an array it'll take the first asset.


## 📄 ModelItemAssetView (exported const)

## `<AssetView />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { asset: `Asset`, <br />className?: string, <br />projectRelativeReferencingFilePath?: string, <br />hideDownloadLink?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<InteractiveAsset />`

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useAsset()

| Input      |    |    |
| ---------- | -- | -- |
| asset (optional) | `Asset` |  |,| projectRelativeReferencingFilePath (optional) | string |  |,| isNextStaticProductionBuild (optional) | boolean |  |
| **Output** | { rawText?: {  }, <br />type?: video / audio / image / text / other, <br />downloadUrl?: string, <br />src?: string, <br />extension?: string, <br /> }   |    |



## 📄 AssetView (exported const)

## 📄 InteractiveAsset (exported const)

shows an `Asset` with interactivity

- Any file shows the name of the file, the size, and a link to open it in a new tab in the browser
- Images show thumbnail
- Audio show duration and amplitude
- Video/screen show thumbnail and duration


## 📄 useAsset (exported const)

# Internal

<details><summary>Show internal (3)</summary>
    
  # useAssetInfo()




| Input      |    |    |
| ---------- | -- | -- |
| url (optional) | string |  |,| filename (optional) | string |  |
| **Output** | { rawText?: {  }, <br />type: video / audio / image / text / other, <br /> }   |    |



## 📄 defaultClassName (exported const)

## 📄 useAssetInfo (exported const)

  </details>

