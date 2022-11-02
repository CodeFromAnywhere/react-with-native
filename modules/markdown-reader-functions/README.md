# Markdown reader functions

markdown-reader-functions (node operation)



# Outline

## Functions

- [copyStaticAssetsCli](#copyStaticAssetsCli)
- [copyStaticAssets](#copyStaticAssets)
- [getAllMarkdownReaderPages](#getAllMarkdownReaderPages)
- [getFolderExplorationInfo](#getFolderExplorationInfo)
- [getMarkdownModelPages](#getMarkdownModelPages)
- [getMarkdownPageInfo](#getMarkdownPageInfo)
- [getMarkdownReaderPages](#getMarkdownReaderPages)
- [getMarkdownReaderQueryPaths](#getMarkdownReaderQueryPaths)
- [getOperationPages](#getOperationPages)
- [getPublicMarkdownFilePaths](#getPublicMarkdownFilePaths)
- [getTodoPages](#getTodoPages)
- [main](#main)
- [markdownReaderGetStaticPaths](#markdownReaderGetStaticPaths)
- [markdownReaderGetStaticProps](#markdownReaderGetStaticProps)
- [removeExtensionsFromPath](#removeExtensionsFromPath)
- [removeNumberPrefix](#removeNumberPrefix)
- [shouldExposeMarkdownFile](#shouldExposeMarkdownFile)
- [test](#test)

## Interfaces

- [Frontmatter](#frontmatter)
- [GetStaticPathsContext](#getstaticpathscontext)
- [GetStaticPropsContext](#getstaticpropscontext)
- [MarkdownReaderPage](#markdownreaderpage)
- [NestedPathObject](#nestedpathobject)

## Variables

- [availableExtensions](#availableextensions)
- [copyStaticAssetsCli](#copystaticassetscli)
- [copyStaticAssets](#copystaticassets)
- [getAllMarkdownReaderPages](#getallmarkdownreaderpages)
- [getFolderExplorationInfo](#getfolderexplorationinfo)
- [getMarkdownModelPages](#getmarkdownmodelpages)
- [getMarkdownPageInfo](#getmarkdownpageinfo)
- [getMarkdownReaderPages](#getmarkdownreaderpages)
- [getMarkdownReaderQueryPaths](#getmarkdownreaderquerypaths)
- [getOperationPages](#getoperationpages)
- [getPublicMarkdownFilePaths](#getpublicmarkdownfilepaths)
- [getTodoPages](#gettodopages)
- [main](#main)
- [markdownReaderGetStaticPaths](#markdownreadergetstaticpaths)
- [markdownReaderGetStaticProps](#markdownreadergetstaticprops)
- [removeExtensionsFromPath](#removeextensionsfrompath)
- [removeNumberPrefix](#removenumberprefix)
- [shouldExposeMarkdownFile](#shouldexposemarkdownfile)
- [test](#test)



# Functions

## copyStaticAssetsCli

## copyStaticAssets

uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.




### Parameters (2)

#### Parameter 1: markdownReaderPages: array

- MarkdownReaderPage: object






#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName (optional) | string |  |



## getAllMarkdownReaderPages

....? I should've commented this

const hasDocs = !!relativeDocsPages.find(

(x) => x.queryPath.toLowerCase() === "docs/readme"

);

if (!hasDocs) {

const hasRootReadme = fs.existsSync(path.join(projectRoot, "README.md"));

if (hasRootReadme) {

relativeDocsPages.unshift({

queryPath: "docs/readme",

filePath: "README.md",

isMenuItem: true,

});

}

}

Gets all pages of a bundle based on the fs and database

Pages it finds:

- operation-readmes
- multiple docs basePaths with all folders and markdown pages there in (`/[project-relative-path]`)
- `/dictionary`
- all markdown model types we have in the db-sdk, optionally, depending on config

Requirements:

- README should always be on top in a folder.
- numbers and extensions are omitted from paths, but still connected to the right file
- If the docs doesn't have a readme, the /docs/readme path shows the root readme.

Does not include AugmentedWord. Just the main pages, not with queries and hashes

Used to generate the menu




### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |



## getFolderExplorationInfo

Gets exploration information about a folder

- reads README.md in current folder
- reads OPERATION.md in child folders, or README.md if that doesn't exist
- gets an intro from those markdown files and returns that (uses `getMarkdownIntro`)




### Parameters (3)

#### Parameter 1: nestedPathObject: object

#### Parameter 2: queryPath: string

#### Parameter 3: projectRoot: string

## getMarkdownModelPages

Transforms all your markdown models into  markdown reader pages

Steps:
- Finds all markdown model types from the database config
- Gets their basepaths according to `fs-orm` convention
- Checks if they actually exist
- Finds all markdown therein
- Makess markdown reader pages out of them




### Parameters (1)

#### Parameter 1: projectRoot: string

## getMarkdownPageInfo

If a markdown page is found, this function fetches all metadata needed to render that markdown page




### Parameters (4)

#### Parameter 1: projectRoot: string

#### Parameter 2: nestedPathObject: object

#### Parameter 3: queryPath: string

#### Parameter 4: contentPage: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| filePath (optional) | string |  |
| isMenuItem (optional) | boolean |  |



## getMarkdownReaderPages

Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.




## getMarkdownReaderQueryPaths

### Parameters (1)

#### Parameter 1: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |



## getOperationPages

### Parameters (1)

#### Parameter 1: projectRoot: string

## getPublicMarkdownFilePaths

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)




### Parameters (2)

#### Parameter 1: baseFolderPath: string

#### Parameter 2: includeFoldersWithResults (optional): boolean

## getTodoPages

gets all todo pages as markdownreader pages




### Parameters (1)

#### Parameter 1: projectRoot: string

## main

## markdownReaderGetStaticPaths

Function that tells Next.js what the pages are that need to be statically generated




### Parameters (1)

#### Parameter 1: context: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |



## markdownReaderGetStaticProps

Fix `operationBasePath not working` error when building: log `getStaticProps`/`getStaticPaths`




### Parameters (1)

#### Parameter 1: context: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| preview (optional) | boolean |  |
| previewData (optional) | object |  |
| locale (optional) | string |  |
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |



## removeExtensionsFromPath

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders




### Parameters (1)

#### Parameter 1: relativePath: string

## removeNumberPrefix

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.




### Parameters (1)

#### Parameter 1: fileOrFolderName: string

## shouldExposeMarkdownFile

### Returns: object

### Parameters (1)

#### Parameter 1: parameters: object

## test

# Interfaces

## Frontmatter

Our version of frontmatter is a bit simpler than regular frontmatter

Not sure if this is a good idea, but it keeps it simple for our OS

all values parse in a similar way to csv

make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array

NB: string arrays are comma separated values, where you can put values with special characters in between quotes








## GetStaticPathsContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |



## GetStaticPropsContext

Properties: 

 | Name | Type | Description |
|---|---|---|
| params (optional) | object |  |
| preview (optional) | boolean |  |
| previewData (optional) | object |  |
| locale (optional) | string |  |
| locales (optional) | array |  |
| defaultLocale (optional) | string |  |



## MarkdownReaderPage

for markdown-reader-ui, the pages can be markdown files, but they can also be connected to models





Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| filePath (optional) | string |  |
| isMenuItem (optional) | boolean |  |



## NestedPathObject

A different way to represent a path array in a nested object of folders

{  "folderName": {    "file1": null,    "file2": null  },  "folderName2": {    "file1": null,    "file2": null  } }







# Variables

## availableExtensions (exported const)

## copyStaticAssetsCli (unexported const)

## copyStaticAssets (exported const)

uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.


## getAllMarkdownReaderPages (exported const)

Gets all pages of a bundle based on the fs and database

Pages it finds:

- operation-readmes
- multiple docs basePaths with all folders and markdown pages there in (`/[project-relative-path]`)
- `/dictionary`
- all markdown model types we have in the db-sdk, optionally, depending on config

Requirements:

- README should always be on top in a folder.
- numbers and extensions are omitted from paths, but still connected to the right file
- If the docs doesn't have a readme, the /docs/readme path shows the root readme.

Does not include AugmentedWord. Just the main pages, not with queries and hashes

Used to generate the menu


## getFolderExplorationInfo (exported const)

Gets exploration information about a folder

- reads README.md in current folder
- reads OPERATION.md in child folders, or README.md if that doesn't exist
- gets an intro from those markdown files and returns that (uses `getMarkdownIntro`)


## getMarkdownModelPages (exported const)

Transforms all your markdown models into  markdown reader pages

Steps:
- Finds all markdown model types from the database config
- Gets their basepaths according to `fs-orm` convention
- Checks if they actually exist
- Finds all markdown therein
- Makess markdown reader pages out of them


## getMarkdownPageInfo (exported const)

If a markdown page is found, this function fetches all metadata needed to render that markdown page


## getMarkdownReaderPages (exported const)

Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.


## getMarkdownReaderQueryPaths (exported const)

## getOperationPages (exported const)

## getPublicMarkdownFilePaths (exported const)

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)


## getTodoPages (exported const)

gets all todo pages as markdownreader pages


## main (unexported const)

## markdownReaderGetStaticPaths (exported const)

Function that tells Next.js what the pages are that need to be statically generated


## markdownReaderGetStaticProps (exported const)

Fix `operationBasePath not working` error when building: log `getStaticProps`/`getStaticPaths`


## removeExtensionsFromPath (exported const)

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders


## removeNumberPrefix (exported const)

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


## shouldExposeMarkdownFile (exported const)

## test (unexported const)

