# Filename conventions

filename-conventions (js operation)

Any functions and variables related to filename conventions




# Api reference

## 📄 databaseFolderName (exported const)

## 🔹 SearchableExtension

## 📄 buildFolderName (exported const)

## 📄 generatedFolders (exported const)

## isGeneratedOperationName()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## isIndexableFileId()

| Input      |    |    |
| ---------- | -- | -- |
| fileId | string |  |
| **Output** | {  }   |    |



## 📄 extensions (exported const)

## 📄 isGeneratedOperationName (exported const)

## 📄 isIndexableFileId (exported const)

## 📄 sourceFolderName (exported const)

## getWriterType()

Gets the writer type based on the extension


| Input      |    |    |
| ---------- | -- | -- |
| extension (optional) | string |  |
| **Output** | typescript / markdown / other   |    |



## hasSubExtension()

Returns true if a fileid includes one of the specified subextensions.


| Input      |    |    |
| ---------- | -- | -- |
| srcRelativeFileId | string |  |,| subExtensions | {  } |  |,| includeRootName (optional) | boolean | if true, also returns true if the extension is the complete name of the file |
| **Output** | {  }   |    |



## isGeneratedOperation()

| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |
| **Output** |    |    |



## 🔹 SearchLevel

## 🔹 WriterType

Type of content that can be interpreted by the `writer-input`








## 📄 allowedSearchContentExtensions (exported const)

## 📄 fileTypes (exported const)

## 📄 frontendOptionalFileSubExtensions (exported const)

these special operations are generated, so should not be copied, but should be generated in the bundle after everything is copied


## 📄 getWriterType (exported const)

Gets the writer type based on the extension


## 📄 hasSubExtension (exported const)

Returns true if a fileid includes one of the specified subextensions.


## 📄 isGeneratedOperation (exported const)

## 📄 jsonExtensions (exported const)

## 📄 markdownExtensions (exported const)

## 📄 projectRelativeGeneratedOperationsFolder (exported const)

## 📄 typescriptExtensions (exported const)

