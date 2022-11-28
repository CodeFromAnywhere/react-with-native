# Writer functions

writer-functions (`OperationClassification` node-cjs)



# Api reference

## getFrontmatterSchema()

Gets the frontmatterSchema of any markdown model. This should contain all elements that are required to be in the frontmatter of the markdown


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getFrontmatterSchema (exported const)

Gets the frontmatterSchema of any markdown model. This should contain all elements that are required to be in the frontmatter of the markdown

# Internal

<details><summary>Show internal (18)</summary>
    
  # getFileContents()

Gets the contents of a file in the project


| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |
| **Output** |    |    |



## getWriterWebPagesMenu()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getWriterWebPages()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## moveFile()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativePath | string | Can be file only for now |,| projectRelativeNewFolderPath | string |  |
| **Output** |    |    |



## newFile()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |
| **Output** |    |    |



## newFolder()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFolderBasePath | string |  |,| folderName | string |  |
| **Output** |    |    |



## processAssetUpload()

Used for the markdown reader to immediately process a asset upload. If we want to validate this, it would be good to allow a second parameter that checks if you have access to the file


| Input      |    |    |
| ---------- | -- | -- |
| assets | `BackendAsset`[] |  |
| **Output** |    |    |



## renameFilename()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |,| newFilename | string |  |
| **Output** |    |    |



## saveFileContents()

| Input      |    |    |
| ---------- | -- | -- |
| projectRelativeFilePath | string |  |,| newContent | string |  |
| **Output** |    |    |



## 📄 getFileContents (exported const)

Gets the contents of a file in the project


## 📄 getWriterWebPagesMenu (exported const)

## 📄 getWriterWebPages (exported const)

## 📄 moveFile (exported const)

## 📄 newFile (exported const)

## 📄 newFolder (exported const)

## 📄 processAssetUpload (exported const)

Used for the markdown reader to immediately process a asset upload. If we want to validate this, it would be good to allow a second parameter that checks if you have access to the file


## 📄 renameFilename (exported const)

## 📄 saveFileContents (exported const)

  </details>

