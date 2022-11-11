# Asset input

asset-input (`OperationClassification` js)


## 📸 Asset Input

This component lets you easily add asset input that includes upload with the `typerepo` server standard (`function-server`)


### Installation

Add the css to your web project: `import "asset-input/css.css";`




# Docs

<details><summary>usage-in-nextjs.md</summary>
    
  **UPDATE** No need for these workarounds anymore! You can simply use the newer version of next.js. Couldn't find exactly when they added support, but in `13.3.1` it just magically works! Related RFC: https://github.com/vercel/next.js/discussions/31517


### Before

Use `next/dynamic` if you want to use this in next.js, as it will crash when it is tried with SSR.

See https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr for more info.

```ts
import dynamic from "next/dynamic";

const AssetUI = dynamic(() => import("asset-ui"), {
  ssr: false,
});
```

You can also just use `asset-input-next`, where I did this for you!

The problem with this, though, is we can't easily create components without using `next/dynamic`. Every component needs to expose the regular one and the one that is wrapped with `next/dynamic`. This is annoying because next is a huge dependency, so it requires you to create two packages every time: a regular one and one for next.js support.

The reason why it's crashing is because `new Worker(xyz)` is executed during SSR within a Node.js environment. In the browser, `Worker` is a global class, but in Next.js it doesn't exist.

It gets executed by this file: `/node_modules/extendable-media-recorder-wav-encoder-broker/src/module.ts`

it is imported here: `/Users/king/King/operations/node_modules/extendable-media-recorder-wav-encoder/src/module.ts`

  </details>

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
| **Output** | audio / video / image / other   |    |



## makeBackendAsset()

| Input      |    |    |
| ---------- | -- | -- |
| asset | `Asset` |  |
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

