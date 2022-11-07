# Filename conventions

filename-conventions (js operation)

Any functions and variables related to filename conventions




# Outline

## Functions

- [getWriterType](#getWriterType)
- [hasSubExtension](#hasSubExtension)
- [isGeneratedOperationName](#isGeneratedOperationName)
- [isGeneratedOperation](#isGeneratedOperation)
- [isIndexableFileId](#isIndexableFileId)

## Interfaces

- [DropboxExtension](#dropboxextension)
- [FileType](#filetype)
- [JsonExtension](#jsonextension)
- [MarkdownExtension](#markdownextension)
- [SearchableExtension](#searchableextension)
- [SearchLevel](#searchlevel)
- [TypescriptExtension](#typescriptextension)
- [WriterType](#writertype)

## Variables

- [allowedSearchContentExtensions](#allowedsearchcontentextensions)
- [buildFolderName](#buildfoldername)
- [databaseFolderName](#databasefoldername)
- [extensions](#extensions)
- [fileTypes](#filetypes)
- [frontendOptionalFileSubExtensions](#frontendoptionalfilesubextensions)
- [generatedFolders](#generatedfolders)
- [getWriterType](#getwritertype)
- [hasSubExtension](#hassubextension)
- [isGeneratedOperationName](#isgeneratedoperationname)
- [isGeneratedOperation](#isgeneratedoperation)
- [isIndexableFileId](#isindexablefileid)
- [jsonExtensionsConst](#jsonextensionsconst)
- [jsonExtensions](#jsonextensions)
- [markdownExtensionsConst](#markdownextensionsconst)
- [markdownExtensions](#markdownextensions)
- [operationUnindexableNamesOrSubExtensions](#operationunindexablenamesorsubextensions)
- [projectRelativeGeneratedOperationsFolder](#projectrelativegeneratedoperationsfolder)
- [sourceFolderName](#sourcefoldername)
- [typescriptExtensionsConst](#typescriptextensionsconst)
- [typescriptExtensions](#typescriptextensions)



# Functions

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



## isGeneratedOperationName()

| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## isGeneratedOperation()

| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |
| **Output** |    |    |



## isIndexableFileId()

| Input      |    |    |
| ---------- | -- | -- |
| fileId | string |  |
| **Output** | {  }   |    |


# Interfaces

## 🔷 DropboxExtension

these filetypes should never be opened with explore. They should be processed and either indexed or converted. This creates a md or json with the proper metadata, which, in turn, can be explored.








## 🔷 FileType

## 🔷 JsonExtension

## 🔷 MarkdownExtension

## 🔷 SearchableExtension

## 🔷 SearchLevel

## 🔷 TypescriptExtension

## 🔷 WriterType

Type of content that can be interpreted by the `writer-input`







# Variables

## 📄 allowedSearchContentExtensions (exported const)

## 📄 buildFolderName (exported const)

## 📄 databaseFolderName (exported const)

## 📄 extensions (exported const)

## 📄 fileTypes (exported const)

## 📄 frontendOptionalFileSubExtensions (exported const)

these special operations are generated, so should not be copied, but should be generated in the bundle after everything is copied


## 📄 generatedFolders (exported const)

## 📄 getWriterType (exported const)

Gets the writer type based on the extension


## 📄 hasSubExtension (exported const)

Returns true if a fileid includes one of the specified subextensions.


## 📄 isGeneratedOperationName (exported const)

## 📄 isGeneratedOperation (exported const)

## 📄 isIndexableFileId (exported const)

## 📄 jsonExtensionsConst (exported const)

## 📄 jsonExtensions (exported const)

## 📄 markdownExtensionsConst (exported const)

## 📄 markdownExtensions (exported const)

## 📄 operationUnindexableNamesOrSubExtensions (exported const)

## 📄 projectRelativeGeneratedOperationsFolder (exported const)

## 📄 sourceFolderName (exported const)

## 📄 typescriptExtensionsConst (exported const)

## 📄 typescriptExtensions (exported const)

