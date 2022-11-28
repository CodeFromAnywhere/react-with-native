# Read typescript file

read-typescript-file (`OperationClassification` node-cjs)



# Api reference

## getFolderTypescriptIndex()

get a Typescript index for all that is found in a folder


| Input      |    |    |
| ---------- | -- | -- |
| {
  basePath,
  filter,
  sort,
  type,
  filePath,
} | { filePath?: {  }, <br />basePath?: {  }, <br />type?: TsBuildError / TsLintWarning / TsFunction / TsVariable / TsInterface / TsComment / TsImport / TsExport / null, <br />filter?: `IndexFilter`, <br />sort?: string, <br /> } |  |
| **Output** |    |    |



## 🔹 IndexFilter

Properties: 

 | Name | Type | Description |
|---|---|---|
| hasCommentTypes (optional) | array |  |
| interfaceIsDbModel (optional) | boolean |  |



## 📄 getFolderTypescriptIndex (exported const)

get a Typescript index for all that is found in a folder

# Internal

<details><summary>Show internal (2)</summary>
    
  # readTypescriptFile()

Reads and parses a markdown file


| Input      |    |    |
| ---------- | -- | -- |
| filePath | `Path` |  |
| **Output** |    |    |



## 📄 readTypescriptFile (exported const)

Reads and parses a markdown file
  </details>

