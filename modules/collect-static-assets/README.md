# Collect static assets

collect-static-assets (`OperationClassification` node-cjs)



# Api reference

## findStaticAssets()

Returns the absolute paths of all static assets (embeds and links) in a markdown file of which the path is provided.


| Input      |    |    |
| ---------- | -- | -- |
| absoluteMarkdownFilePath | string |  |
| **Output** |    |    |



## 📄 findStaticAssets (exported const)

Returns the absolute paths of all static assets (embeds and links) in a markdown file of which the path is provided.

# Internal

<details><summary>Show internal (7)</summary>
    
  # copyCopyPairs()




| Input      |    |    |
| ---------- | -- | -- |
| copyPairs | `CopyPair`[] |  |
| **Output** |    |    |



## copyReaderStaticAssets()

| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |,| allWebPages | `WebPage<unknown>`[] | non-reader webPages will be filtered out by checking if the projectRelativeFilePath exists on pageData and has the extension .md |
| **Output** |    |    |



## findReaderStaticAssets()

markdown-renderer turns a relative link into this: ?mdpath=x&relativePath=y

for static, we need to turn it into something similar, but we need to guarantee no file collisions. simple!

we can just take the project-relative file path of the asset, and put it in /public/images in next.js. the final url of the asset in public next.js then becomes `images/[path/to/asset.jpg]`


| Input      |    |    |
| ---------- | -- | -- |
| readerWebPages | `ReaderWebPage`[] | Your markdown pages |
| **Output** |    |    |



## 🔹 CopyPair

Properties: 

 | Name | Type | Description |
|---|---|---|
| absoluteSourcePath  | string |  |
| absoluteDestinationPath  | string |  |



## 📄 copyCopyPairs (exported const)

## 📄 copyReaderStaticAssets (exported const)

## 📄 findReaderStaticAssets (exported const)

markdown-renderer turns a relative link into this: ?mdpath=x&relativePath=y

for static, we need to turn it into something similar, but we need to guarantee no file collisions. simple!

we can just take the project-relative file path of the asset, and put it in /public/images in next.js. the final url of the asset in public next.js then becomes `images/[path/to/asset.jpg]`
  </details>

