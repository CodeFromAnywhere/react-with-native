# Path util

path-util (`OperationClassification` cjs)

Gets insightful information about any file or folder (path)




# Api reference

## calculatePathMetaData()

for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
for files: just calculates the path metadata


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## 📄 calculatePathMetaData (exported const)

for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
for files: just calculates the path metadata


## byteCount()

/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 */


| Input      |    |    |
| ---------- | -- | -- |
| s | string |  |
| **Output** | {  }   |    |



## categorizeFiles()

explores files in an operation within a specified location or from a specified type


| Input      |    |    |
| ---------- | -- | -- |
| {
  basePath,
  type,
  ignoreIndexFiles,
} | { basePath: {  }, <br />ignoreIndexFiles?: boolean, <br />type?: code / data / text, <br /> } |  |
| **Output** |    |    |



## getFolderSummary()

calculates folder summary from a categorized file paths object


| Input      |    |    |
| ---------- | -- | -- |
| categorizedFiles | `CategorizedFilePaths` |  |
| **Output** |    |    |



## 📄 categorizeFiles (exported const)

explores files in an operation within a specified location or from a specified type


## 📄 getFolderSummary (exported const)

calculates folder summary from a categorized file paths object

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (6)</summary>
    
  # getPathMainComment()

export const sumFolderSummary = (
firstFolderSummary: FolderSummary,
secondFolderSummary: FolderSummary
): FolderSummary => {
const folderSummaryKeys = Object.keys(
firstFolderSummary
) as (keyof FolderSummary)[];
const sum = mergeObjectsArray(
folderSummaryKeys.map((keyName) => {
return {
[keyName]: sumAllKeys([
firstFolderSummary[keyName],
secondFolderSummary[keyName],
],["bytes","characters","lines","numberOfFiles"]),
};
})
) as FolderSummary;

return sum;
};


takes all PathMetaData of an array that contains all child files, and merges them, taking the newest update date, the earliest created-date, and summing size

export const sumFileGeneralMetaData = async (
childrenMetaDataArray: PathGeneralMetaData[]
): Promise<PathGeneralMetaData | null> => {
const sum = childrenMetaDataArray.reduce(
(sumMetaData, pathMetaData: PathGeneralMetaData) => {
const newPathMetaData: PathGeneralMetaData = {
createdAt:
!sumMetaData || pathMetaData.createdAt < sumMetaData.createdAt
? pathMetaData.createdAt
: sumMetaData.createdAt,
updatedAt:
!sumMetaData || pathMetaData.updatedAt > sumMetaData.updatedAt
? pathMetaData.updatedAt
: sumMetaData.updatedAt,
sizes: !sumMetaData
? pathMetaData.sizes
: sumFolderSummary(sumMetaData.sizes, pathMetaData.sizes),
};

return newPathMetaData;
},
null as PathGeneralMetaData | null
);

return sum;
};


| Input      |    |    |
| ---------- | -- | -- |
| absolutePath | string |  |
| **Output** |    |    |



## getSizeSummary()

gets a size summary for a file path

Does not calculate this for files that are too big (bigger than 1MB)


| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |
| **Output** |    |    |



## sumSizeSummary()

| Input      |    |    |
| ---------- | -- | -- |
| filePaths | string[] |  |
| **Output** |    |    |



## 📄 getPathMainComment (exported const)

export const sumFolderSummary = (
firstFolderSummary: FolderSummary,
secondFolderSummary: FolderSummary
): FolderSummary => {
const folderSummaryKeys = Object.keys(
firstFolderSummary
) as (keyof FolderSummary)[];
const sum = mergeObjectsArray(
folderSummaryKeys.map((keyName) => {
return {
[keyName]: sumAllKeys([
firstFolderSummary[keyName],
secondFolderSummary[keyName],
],["bytes","characters","lines","numberOfFiles"]),
};
})
) as FolderSummary;

return sum;
};


takes all PathMetaData of an array that contains all child files, and merges them, taking the newest update date, the earliest created-date, and summing size

export const sumFileGeneralMetaData = async (
childrenMetaDataArray: PathGeneralMetaData[]
): Promise<PathGeneralMetaData | null> => {
const sum = childrenMetaDataArray.reduce(
(sumMetaData, pathMetaData: PathGeneralMetaData) => {
const newPathMetaData: PathGeneralMetaData = {
createdAt:
!sumMetaData || pathMetaData.createdAt < sumMetaData.createdAt
? pathMetaData.createdAt
: sumMetaData.createdAt,
updatedAt:
!sumMetaData || pathMetaData.updatedAt > sumMetaData.updatedAt
? pathMetaData.updatedAt
: sumMetaData.updatedAt,
sizes: !sumMetaData
? pathMetaData.sizes
: sumFolderSummary(sumMetaData.sizes, pathMetaData.sizes),
};

return newPathMetaData;
},
null as PathGeneralMetaData | null
);

return sum;
};


## 📄 getSizeSummary (exported const)

gets a size summary for a file path

Does not calculate this for files that are too big (bigger than 1MB)


## 📄 sumSizeSummary (exported const)

  </details>

