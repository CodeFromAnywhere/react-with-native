# Markdown reader functions

markdown-reader-functions (node operation)



# Outline

## Functions

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
- [markdownReaderGetStaticPaths](#markdownReaderGetStaticPaths)
- [markdownReaderGetStaticProps](#markdownReaderGetStaticProps)
- [removeExtensionsFromPath](#removeExtensionsFromPath)
- [removeNumberPrefix](#removeNumberPrefix)
- [shouldExposeMarkdownFile](#shouldExposeMarkdownFile)

## Variables

- [availableExtensions](#availableextensions)
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
- [markdownReaderGetStaticPaths](#markdownreadergetstaticpaths)
- [markdownReaderGetStaticProps](#markdownreadergetstaticprops)
- [removeExtensionsFromPath](#removeextensionsfrompath)
- [removeNumberPrefix](#removenumberprefix)
- [shouldExposeMarkdownFile](#shouldexposemarkdownfile)



# Functions

## copyStaticAssets()

uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.


| Input      |    |    |
| ---------- | -- | -- |
| markdownReaderPages | `MarkdownReaderPage`[] |  |,| config (optional) | { operationName?: string, <br /> } |  |
| **Output** |    |    |



## getAllMarkdownReaderPages()

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


| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## getFolderExplorationInfo()

Gets exploration information about a folder

- reads README.md in current folder
- reads OPERATION.md in child folders, or README.md if that doesn't exist
- gets an intro from those markdown files and returns that (uses `getMarkdownIntro`)


| Input      |    |    |
| ---------- | -- | -- |
| nestedPathObject | `NestedPathObject` |  |,| queryPath | string |  |,| projectRoot | string |  |
| **Output** |    |    |



## getMarkdownModelPages()

Transforms all your markdown models into  markdown reader pages

Steps:
- Finds all markdown model types from the database config
- Gets their basepaths according to `fs-orm` convention
- Checks if they actually exist
- Finds all markdown therein
- Makess markdown reader pages out of them


| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |
| **Output** |    |    |



## getMarkdownPageInfo()

If a markdown page is found, this function fetches all metadata needed to render that markdown page


| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |,| nestedPathObject | `NestedPathObject` |  |,| queryPath | string |  |,| contentPage | `MarkdownReaderPage` |  |
| **Output** |    |    |



## getMarkdownReaderPages()

Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getMarkdownReaderQueryPaths()

| Input      |    |    |
| ---------- | -- | -- |
| config (optional) | { manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## getOperationPages()

| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |,| bundleMarkdownReaderConfig (optional) | `BundleMarkdownReaderConfig` |  |
| **Output** |    |    |



## getPublicMarkdownFilePaths()

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)


| Input      |    |    |
| ---------- | -- | -- |
| baseFolderPath | string |  |,| includeFoldersWithResults (optional) | boolean |  |
| **Output** |    |    |



## getTodoPages()

gets all todo pages as markdownreader pages


| Input      |    |    |
| ---------- | -- | -- |
| projectRoot | string |  |
| **Output** |    |    |



## markdownReaderGetStaticPaths()

Function that tells Next.js what the pages are that need to be statically generated


| Input      |    |    |
| ---------- | -- | -- |
| context | `GetStaticPathsContext` |  |
| **Output** |    |    |



## markdownReaderGetStaticProps()

Fix `operationBasePath not working` error when building: log `getStaticProps`/`getStaticPaths`


| Input      |    |    |
| ---------- | -- | -- |
| context | `GetStaticPropsContext` |  |
| **Output** |    |    |



## removeExtensionsFromPath()

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders


| Input      |    |    |
| ---------- | -- | -- |
| relativePath | string |  |
| **Output** | `String`   |    |



## removeNumberPrefix()

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


| Input      |    |    |
| ---------- | -- | -- |
| fileOrFolderName | string |  |
| **Output** | `String`   |    |



## shouldExposeMarkdownFile()

| Input      |    |    |
| ---------- | -- | -- |
| parameters | `Frontmatter` |  |
| **Output** | {  }   |    |


# Variables

## 📄 availableExtensions (exported const)

## 📄 copyStaticAssets (exported const)

uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.


## 📄 getAllMarkdownReaderPages (exported const)

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


## 📄 getFolderExplorationInfo (exported const)

Gets exploration information about a folder

- reads README.md in current folder
- reads OPERATION.md in child folders, or README.md if that doesn't exist
- gets an intro from those markdown files and returns that (uses `getMarkdownIntro`)


## 📄 getMarkdownModelPages (exported const)

Transforms all your markdown models into  markdown reader pages

Steps:
- Finds all markdown model types from the database config
- Gets their basepaths according to `fs-orm` convention
- Checks if they actually exist
- Finds all markdown therein
- Makess markdown reader pages out of them


## 📄 getMarkdownPageInfo (exported const)

If a markdown page is found, this function fetches all metadata needed to render that markdown page


## 📄 getMarkdownReaderPages (exported const)

Gets all markdownreader pages for multiple basePaths. Can add a prefix, can also remove the last folder of basePath from the suffix.


## 📄 getMarkdownReaderQueryPaths (exported const)

## 📄 getOperationPages (exported const)

## 📄 getPublicMarkdownFilePaths (exported const)

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)


## 📄 getTodoPages (exported const)

gets all todo pages as markdownreader pages


## 📄 markdownReaderGetStaticPaths (exported const)

Function that tells Next.js what the pages are that need to be statically generated


## 📄 markdownReaderGetStaticProps (exported const)

Fix `operationBasePath not working` error when building: log `getStaticProps`/`getStaticPaths`


## 📄 removeExtensionsFromPath (exported const)

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders


## 📄 removeNumberPrefix (exported const)

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


## 📄 shouldExposeMarkdownFile (exported const)

