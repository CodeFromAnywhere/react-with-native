---
runEveryPeriod: midnight
---
# Asset functions node

asset-functions-node (`OperationClassification` node-cjs)



# Api reference

## processAsset()

Processes an asset by moving the file in the right location, if needed...

- Alt is kept, nothing to do with it
- Giving a different name will change the new path
- relativePath is checked if it exists (if temporaryDestination is undefined). It is used to obtain the extension.
- temporaryDestination must be checked. if it exists, must replace the file on relativePath calculated from name

After processing, this function should return a `BackendAsset` without the non-storable parameters

BEWARE: `absoluteReferencingFilePath`, and for db-models also `modelName`, need to be given here! Otherwise this won't work!


| Input      |    |    |
| ---------- | -- | -- |
| backendAsset (optional) | {  } | The backendAsset that may need processing |
| **Output** |    |    |



## 📄 processAsset (exported const)

Processes an asset by moving the file in the right location, if needed...

- Alt is kept, nothing to do with it
- Giving a different name will change the new path
- relativePath is checked if it exists (if temporaryDestination is undefined). It is used to obtain the extension.
- temporaryDestination must be checked. if it exists, must replace the file on relativePath calculated from name

After processing, this function should return a `BackendAsset` without the non-storable parameters

BEWARE: `absoluteReferencingFilePath`, and for db-models also `modelName`, need to be given here! Otherwise this won't work!


## processItemAssets()

processes all assets in an item and returns the new item


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 processItemAssets (exported const)

processes all assets in an item and returns the new item

# Internal

All temporary assets that were created more than 24 hours ago and are still there, will be removed by this function.

This allows us to easily delete assets without concequences and also if the user closes a form without submitting it, these assets uploaded will go away.

This function should be executed using a daily CRON


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## serverDownloadReply()

Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`



For this I finally ended up using builtin server.js stuff, we don't need to set those manually...

See https://serverjs.io/documentation/reply/#file-
And https://serverjs.io/documentation/reply/#download-

See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition

NB: ensure to return the result of this function in your endpoint, otherwise it won't work


| Input      |    |    |
| ---------- | -- | -- |
| absoluteAssetPath | string |  |,| isDownload | boolean |  |
| **Output** |    |    |



## uploadAssetWithContext()

Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.

It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.

NB: this function only works by providing a file as blobs under the "file" property name!


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** |    |    |



## 🔹 ReceivedFile

This is the format that I receive for a file with server.js, even though they say it's a formidable.file, which it's not...





Properties: 

 | Name | Type | Description |
|---|---|---|
| size  | number |  |
| path  | string |  |
| name  | string |  |
| type  | string |  |
| hash  | object |  |
| lastModifiedDate  | string |  |



## 📄 compressAsset (exported const)

Audio, image, video can be compressed. This should be done to logical defaults, can be turned off, or can be specifically set to other dimensions using a doc-comment on the model.

- audio: bitrate
- video: fps and resolution
- image: resolution

Returns the new absolute path of the compressed asset (which can be the same as the initial path)


## 📄 deleteReferencedAsset (exported const)

## 📄 downloadRemoteAsset (exported const)

Download a remote asset to the `assets` folder (temporary location)

used for:

- giphy
- google images
- unsplashed
- p2p
- youtube to mp3 picker
- youtube to mp4 picker
- project assets (via api)


## 📄 findAbsoluteAssetPathFromReference (exported const)

## 📄 findAllProjectMedia (exported const)

Media:`.png`, `.mp4`, `.mp3`, `.zip`, `.pdf`

- finds all media in all `db` folders. Can be anywhere, so an explore will probably be best.
- finds all media in every operation in any folder except for `node_modules`, `db`, `src`, `build`, `.[anything]`. (so mostly in `todo`, `docs` and `assets`)
- find all media in every other folder that is not an operation

Return all of this as project relative path array


## 📄 getAssetDirectlyGetApi (exported const)

Useful for getting assets directly, for example for the `SelectMedia` component for `project`-media

Requires more access rights


## 📄 getReferencedAssetGetApi (exported const)

Function to get a referenced asset that has been referenced from any db-model or any ts, tsx or md file, anywhere in the project.

Assets should only be exposed if you have access to the model they are referenced in or to the md file they are referenced in.

Exposes all assets like `/asset?path=/text/interests/programming/storage-of-data/best-storage-methods.md&asset=./audio-is-amazing.m4a`



## Security

Assets are only exposed if they are referenced in a markdown file that is accessible to the user. So when looking up the asset, make sure there's a link to it via `[]()` or `![]()` in the markdown that is connected to it in the URL. If not, don't expose it!

This can be used for any ui that has the functions backend available.

The advantage is that we don't need to build it, this works in `dev` mode. there is no asset duplication.

since the name is `getReferencedAssetGetApi` this should be exposed on `getReferencedAsset`

IMPLEMENTATION NOW:

- check referencing file to find the reference.
- for markdown, typescript: `](./xyz)`
- for json: `"relativePath": "./xyz"`

- If this occurs, calculate abosolute asset path from referencing file folder + relative path

- If this asset exists, expose it.


## 📄 getStorageLocationInfo (exported const)

returns the  type of file the asset is referenced from, and the `baseFolderPath` where the `asset` should be stored


## 📄 getTemporaryAssetsFolderPath (exported const)

## 📄 mediaExtensions (exported const)

## 📄 removeOldTemporaryAssets (exported const)

---
runEveryPeriod: midnight
---


All temporary assets that were created more than 24 hours ago and are still there, will be removed by this function.

This allows us to easily delete assets without concequences and also if the user closes a form without submitting it, these assets uploaded will go away.

This function should be executed using a daily CRON


## 📄 serverDownloadReply (exported const)

Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`



For this I finally ended up using builtin server.js stuff, we don't need to set those manually...

See https://serverjs.io/documentation/reply/#file-
And https://serverjs.io/documentation/reply/#download-

See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition

NB: ensure to return the result of this function in your endpoint, otherwise it won't work


## 📄 uploadAssetWithContext (exported const)

Uploads an asset to the server, and puts it in a temporary location in the assets folder of `function-server`. It returns the filename of the file in the temporary location.

It can only be accessed through that random name. This random name has 32 characters so cannot be easily guessed. This should be secure enough. The file should be moved to the final destination in the actual function that needs the file.

NB: this function only works by providing a file as blobs under the "file" property name!
  </details>

