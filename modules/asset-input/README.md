# Asset input

asset-input (js operation)


## 📸 Asset Input

This component lets you easily add asset input that includes upload with the `typerepo` server standard (`function-server`)


### Installation

Add the css to your web project: `import "asset-input/css.css";`




# Outline

## Docs

- [Usage in nextjs](#usage-in-nextjs)

## Functions

- [AssetInput](#AssetInput)
- [Audio](#Audio)
- [base64UrltoBlob](#base64UrltoBlob)
- [FileInput](#FileInput)
- [getTypeFromFileBlob](#getTypeFromFileBlob)
- [makeBackendAsset](#makeBackendAsset)
- [MediaRecorderComponent](#MediaRecorderComponent)
- [MediaRecorder](#MediaRecorder)
- [ReactMediaRecorder](#ReactMediaRecorder)
- [SelectMedia](#SelectMedia)
- [useReactMediaRecorder](#useReactMediaRecorder)
- [VideoPreview](#VideoPreview)
- [Video](#Video)
- [WebcamCapture](#WebcamCapture)

## Interfaces

- [Asset](#asset)
- [MediaSourceEnum](#mediasourceenum)

## Variables

- [ASPECT_RATIO](#aspect-ratio)
- [AssetInput](#assetinput)
- [Audio](#audio)
- [base64UrltoBlob](#base64urltoblob)
- [FileInput](#fileinput)
- [getTypeFromFileBlob](#gettypefromfileblob)
- [HEIGHT](#height)
- [makeBackendAsset](#makebackendasset)
- [MediaRecorderComponent](#mediarecordercomponent)
- [MediaRecorder](#mediarecorder)
- [ReactMediaRecorder](#reactmediarecorder)
- [SelectMedia](#selectmedia)
- [videoConstraints](#videoconstraints)
- [VideoPreview](#videopreview)
- [Video](#video)
- [WebcamCapture](#webcamcapture)
- [WIDTH](#width)



# Docs

## Usage in nextjs

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


# Functions

## AssetInput

Usage possible in: form, writer-ui, anywhere else (custom)

Supports

- audio recording
- file upload (multiple possible)
- camera (taking a picture)
- video camera (taking a video)




## Audio

## base64UrltoBlob

Taken from https://github.com/mozmorris/react-webcam/issues/65#issuecomment-385126201

There are probably much better solutions




## FileInput

## getTypeFromFileBlob

### Returns: string(Enum: audio | video | image | other)

### Parameters (1)

#### Parameter 1: file: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | number |  |
| type  | string |  |
| lastModified  | number |  |
| name  | string |  |
| webkitRelativePath  | string |  |



## makeBackendAsset

### Returns: object

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



## MediaRecorderComponent

## MediaRecorder

## ReactMediaRecorder

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | object |  |
| props  | object |  |
| key (optional) | string |  |



## SelectMedia

### Parameters (1)

#### Parameter 1: props: object

## useReactMediaRecorder

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| error  | string |  |
| muteAudio  | object |  |
| unMuteAudio  | object |  |
| startRecording  | object |  |
| pauseRecording  | object |  |
| resumeRecording  | object |  |
| stopRecording  | object |  |
| mediaBlobUrl (optional) | string |  |
| status  | string |  |
| isAudioMuted  | boolean |  |
| previewStream  | object |  |
| previewAudioStream  | object |  |
| clearBlobUrl  | object |  |



## VideoPreview

## Video

## WebcamCapture

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



## MediaSourceEnum

google: remote image urls
giphy: remote image urls
unsplashed: remote image urls
youtube: remote video urls (selectable as mp3, mp4, or url)







# Variables

## ASPECT_RATIO (unexported const)

## AssetInput (exported const)

Usage possible in: form, writer-ui, anywhere else (custom)

Supports

- audio recording
- file upload (multiple possible)
- camera (taking a picture)
- video camera (taking a video)


## Audio (unexported const)

## base64UrltoBlob (unexported const)

Taken from https://github.com/mozmorris/react-webcam/issues/65#issuecomment-385126201

There are probably much better solutions


## FileInput (exported const)

## getTypeFromFileBlob (exported const)

## HEIGHT (unexported const)

## makeBackendAsset (exported const)

## MediaRecorderComponent (exported const)

## MediaRecorder (exported const)

## ReactMediaRecorder (exported const)

## SelectMedia (exported const)

## videoConstraints (unexported const)

## VideoPreview (unexported const)

## Video (unexported const)

## WebcamCapture (exported const)

## WIDTH (unexported const)

