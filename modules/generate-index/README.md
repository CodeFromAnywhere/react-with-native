# Generate index

generate-index (`OperationClassification` node-cjs)



# Api reference

## generateSimpleIndex()

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationName,
  manualProjectRoot,
} | { operationName: string, <br />manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## 📄 generateSimpleIndex (exported const)

generates operation index and writes it to index.ts in src of the operation.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes

# CLI

<details><summary>Show CLI information (1)</summary>
    
  # 📄 [operationName] (unexported const)


  </details>

# Internal

<details><summary>Show internal (7)</summary>
    
  # generateNamedIndex()

Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationName,
  manualProjectRoot,
} | { manualProjectRoot?: string, <br />operationName: string, <br /> } |  |
| **Output** |    |    |



## isTestFn()

| Input      |    |    |
| ---------- | -- | -- |
| x | `ImportStatement` |  |
| **Output** | {  }   |    |



## mapToImportStatement()

| Input      |    |    |
| ---------- | -- | -- |
| item | {  } |  |,| type | variable / function / interface |  |
| **Output** | { type: function / variable / interface, <br />name: string, <br />srcRelativeFileId: string, <br /> }   |    |



## 🔹 ImportStatement

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| name  | string |  |
| srcRelativeFileId  | string |  |



## 📄 generateNamedIndex (exported const)

Generates an index.ts file based on named statements in the operation. Also generates test array. Not used currently.

NB: This overwrites the indexfile of the operation in the src folder! Make sure you don't have anything there still.. All functions should be in other filenames.

Should be ran every time an operation changes


## 📄 isTestFn (exported const)

## 📄 mapToImportStatement (exported const)

  </details>

