# Markdown reader functions

markdown-reader-functions (`OperationClassification` ui-cjs)



# Api reference

## docsGetStaticProps()

| Input      |    |    |
| ---------- | -- | -- |
| context | `GetStaticPropsContext` |  |,| basePaths | { projectRelativeBasePath: string, <br />queryPath: string, <br /> }[] |  |,| webOperationName | string | Operation of the website that is going to be deployed |
| **Output** |    |    |



## 📄 docsGetStaticProps (exported const)

## getPublicMarkdownFilePaths()

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)

Readme is put on top!


| Input      |    |    |
| ---------- | -- | -- |
| baseFolderPath | string |  |,| includeFoldersWithResults (optional) | boolean |  |
| **Output** |    |    |



## markdownReaderGetStaticPropsFromPages()

Takes the routes and pages you want to show, and returns the MarkdownReaderPageProps you need to render the reader page.


| Input      |    |    |
| ---------- | -- | -- |
| context | `GetStaticPropsContext` |  |,| fileWebPages | `WebPage<any>`[] |  |,| webOperationName | string |  |
| **Output** |    |    |



## markdownReaderGetStaticProps()

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
| relativePath | string | should also work for filenames |
| **Output** | `String`   |    |



## 📄 getPublicMarkdownFilePaths (exported const)

Returns all absolute markdown file paths within a basePath which are not drafts and which are not marked private (through frontmatter)

Readme is put on top!


## 📄 markdownReaderGetStaticPropsFromPages (exported const)

Takes the routes and pages you want to show, and returns the MarkdownReaderPageProps you need to render the reader page.


## 📄 markdownReaderGetStaticProps (exported const)

## 📄 removeExtensionsFromPath (exported const)

- Removes numbers from file or foldernames in a path.
- Removes extension of files
- Returns the new path without numbers and without extension

Works for files and folders

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # copyStaticAssetsCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 copyStaticAssetsCli (unexported const)

  </details>

# Tests

<details><summary>Show test information(4)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (unexported const)

## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (35)</summary>
    
  # copyStaticAssets()

uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.


| Input      |    |    |
| ---------- | -- | -- |
| readerWebPages | `ReaderWebPage`[] |  |,| config (optional) | { operationName?: string, <br /> } |  |
| **Output** |    |    |



## docsGetPages()

| Input      |    |    |
| ---------- | -- | -- |
| basePaths | { projectRelativeBasePath: string, <br />queryPath: string, <br /> }[] |  |
| **Output** |    |    |



## docsGetStaticPaths()

Function that tells Next.js what the pages are that need to be statically generated


| Input      |    |    |
| ---------- | -- | -- |
| context | `GetStaticPathsContext` |  |,| basePaths | { projectRelativeBasePath: string, <br />queryPath: string, <br /> }[] |  |
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



## getChildren()

| Input      |    |    |
| ---------- | -- | -- |
| webPages | `WebPage<any>`[] |  |,| queryPath | string |  |
| **Output** |    |    |



## getFolderExplorationInfo()

Gets exploration information about a folder

- reads README.md in current folder
- reads OPERATION.md in child folders, or README.md if that doesn't exist
- gets an intro from those markdown files and returns that (uses `getMarkdownIntro`)


| Input      |    |    |
| ---------- | -- | -- |
| webPages | `WebPage<any>`[] |  |,| queryPath | string |  |,| projectRoot | string |  |
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
| config | { projectRoot: string, <br />webPages: `WebPage<any>`[], <br />queryPath: string, <br />contentPage: `ReaderWebPage`, <br />webOperationName: string, <br />markdownCallToActions: `MarkdownCallToAction`[], <br /> } |  |
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



## getReaderTodoPages()

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



## putReadmeOnTop()

Takes an array of items (`explore` results) and checks them to put readme at the start

DEPRECATED: After writing this, I found that `explore` also has `readmeOnTop` possibility, so this whole thing is not needed


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## removeNumberPrefix()

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


| Input      |    |    |
| ---------- | -- | -- |
| fileOrFolderName | string |  |
| **Output** | `String`   |    |



## shouldExposeMarkdownFile()

markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.


| Input      |    |    |
| ---------- | -- | -- |
| parameters | `Frontmatter` |  |
| **Output** | {  }   |    |



## stripReadmeFromFolder()

To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md


| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |
| **Output** | `String`   |    |



## 📄 availableExtensions (exported const)

## 📄 copyStaticAssets (exported const)

uses `getMarkdownReferencePaths` for all markdown files in the `markdown-reader-ui` and copies them into the `markdown-reader-web/public` folder, keeping the original folder structure.

NB: Removes all files in the public folder first.

To get a file from public assets after running this function, you need to get it from the `projectRelativeFilePath`, not the file relative, so you need to render it differently.


## 📄 docsGetPages (exported const)

## 📄 docsGetStaticPaths (exported const)

Function that tells Next.js what the pages are that need to be statically generated


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


## 📄 getChildren (exported const)

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

## 📄 getReaderTodoPages (exported const)

gets all todo pages as markdownreader pages


## 📄 markdownReaderGetStaticPaths (exported const)

Function that tells Next.js what the pages are that need to be statically generated


## 📄 putReadmeOnTop (exported const)

Takes an array of items (`explore` results) and checks them to put readme at the start

DEPRECATED: After writing this, I found that `explore` also has `readmeOnTop` possibility, so this whole thing is not needed


## 📄 removeNumberPrefix (exported const)

removes number prefixes from a file or folder name. Does not remove extension

defaults to untitled if the file or folder has no name after removing numbers.


## 📄 shouldExposeMarkdownFile (exported const)

markdown file should only be exposed if it doesn't say `privacy: private` or `isDraft: true` in your frontmatter.


## 📄 stripReadmeFromFolder (exported const)

To get the queryPath, we need to strip the README.md so we get the folder as URL instead of the attached README.md
  </details>

