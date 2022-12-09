# Asset input

asset-input (`OperationClassification` ui-cjs)


## 📸 Asset Input

This component lets you easily add asset input that includes upload with the `typerepo` server standard (`function-server`)


### Installation

Add the css to your web project: `import "asset-input/css.css";`




# Api reference

## `<AssetInput />`

Usage possible in: form, writer-ui, anywhere else (custom)

Supports

- audio recording
- file upload (multiple possible)
- camera (taking a picture)
- video camera (taking a video)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 AssetInput (exported const)

Usage possible in: form, writer-ui, anywhere else (custom)

Supports

- audio recording
- file upload (multiple possible)
- camera (taking a picture)
- video camera (taking a video)

# Internal

<details><summary>Show internal (18)</summary>
    
  # `<FileInput />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## getTypeFromFileBlob()

| Input      |    |    |
| ---------- | -- | -- |
| file | { size: number, <br />type: string, <br />lastModified: number, <br />name: string, <br />webkitRelativePath: string, <br /> } |  |
| **Output** | audio / video / image / text / other   |    |



## makeBackendAsset()

| Input      |    |    |
| ---------- | -- | -- |
| asset | `Asset` |  |,| projectRelativeReferencingFilePath | string |  |,| modelName (optional) | string |  |
| **Output** | {  }   |    |



## `<MediaRecorderComponent />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<MediaRecorder />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<ReactMediaRecorder />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { type: {  }, <br />props: {  }, <br />key?: ul / trin / umbe, <br /> }   |    |



## `<SelectMedia />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { source: `MediaSourceEnum`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## useReactMediaRecorder()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { error: string, <br />muteAudio: {  }, <br />unMuteAudio: {  }, <br />startRecording: {  }, <br />pauseRecording: {  }, <br />resumeRecording: {  }, <br />stopRecording: {  }, <br />mediaBlobUrl?: string, <br />status: media_aborted / permission_denied / no_specified_media_found / media_in_use / invalid_media_constraints / no_constraints / recorder_error / idle / acquiring_media / delayed_start / recording / stopping / stopped / paused, <br />isAudioMuted: boolean, <br />previewStream: {  }, <br />previewAudioStream: {  }, <br />clearBlobUrl: {  }, <br /> }   |    |



## `<WebcamCapture />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 🔹 MediaSourceEnum

google: remote image urls
giphy: remote image urls
unsplashed: remote image urls
youtube: remote video urls (selectable as mp3, mp4, or url)








## 📄 FileInput (exported const)

## 📄 getTypeFromFileBlob (exported const)

## 📄 makeBackendAsset (exported const)

## 📄 MediaRecorderComponent (exported const)

## 📄 MediaRecorder (exported const)

## 📄 ReactMediaRecorder (exported const)

## 📄 SelectMedia (exported const)

## 📄 WebcamCapture (exported const)

  </details>

