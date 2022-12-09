# Ffmpeg util

ffmpeg-util (`OperationClassification` node-cjs)



# Api reference

## convertToMp3()

Uses ffmpeg to convert a file to mp3

Returns the new file path on success


| Input      |    |    |
| ---------- | -- | -- |
| sourcePath | string |  |,| destinationPath | string |  |
| **Output** |    |    |



## 📄 convertToMp3 (exported const)

Uses ffmpeg to convert a file to mp3

Returns the new file path on success


## convertToMp4()

Uses ffmpeg to convert a file to mp3

Returns the new file path on success


| Input      |    |    |
| ---------- | -- | -- |
| sourcePath | string |  |,| destinationPath | string |  |
| **Output** |    |    |



## 📄 convertToMp4 (exported const)

Uses ffmpeg to convert a file to mp3

Returns the new file path on success

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # compressImagesCli()

`compressImages` CLI syntax:

`compressImages [basePath]`

can also be relative path


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 compressImagesCli (unexported const)

`compressImages` CLI syntax:

`compressImages [basePath]`

can also be relative path
  </details>

# Internal

<details><summary>Show internal (4)</summary>
    
  # compressImage()




| Input      |    |    |
| ---------- | -- | -- |
| absoluteSourceImagePath | string |  |,| config (optional) | { sizeWidthPx?: number, <br />aspectRatio?: { x: number, <br />y: number, <br /> }, <br />quality?: number, <br />targetFormat?: webp / png / mp4, <br />keepOriginal?: boolean, <br />isDebug?: boolean, <br /> } |  |
| **Output** |    |    |



## compressImages()

searches the folder recursively for all images and converts them to webp


| Input      |    |    |
| ---------- | -- | -- |
| absoluteBasePath | string |  |,| sizeWidthPx (optional) | number |  |,| quality (optional) | number |  |
| **Output** |    |    |



## 📄 compressImage (exported const)

## 📄 compressImages (exported const)

searches the folder recursively for all images and converts them to webp
  </details>

