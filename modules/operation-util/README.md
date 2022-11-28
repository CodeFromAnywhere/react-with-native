# Operation util

operation-util (`OperationClassification` cjs)

Operation with utility functions to calculate things about operations and alter operation-index.




# Api reference

## recalculateOperationIndexJson()

Recalculates some operation indexable things and updates that into the database


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## 📄 recalculateOperationIndexJson (exported const)

Recalculates some operation indexable things and updates that into the database

# Internal

<details><summary>Show internal (5)</summary>
    
  # getDependenciesSummary()




| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |
| **Output** |    |    |



## getOperationMetaData()

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string | any path in an operation |
| **Output** |    |    |



## 🔹 OperationMetaData

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationBasePath  | string |  |
| operation (optional) | object |  |
| operationName  | string |  |
| srcPath  | string |  |
| operationFolderName  | string |  |
| relativeOperationLocationPath  | string |  |



## 📄 getDependenciesSummary (exported const)

## 📄 getOperationMetaData (exported const)

gets a whole bunch of metadata about an operation, mainly filepath related, but it also reads the operation index json file
  </details>

