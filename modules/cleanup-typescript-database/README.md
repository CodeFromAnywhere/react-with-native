# Cleanup typescript database

cleanup-typescript-database (`OperationClassification` node-cjs)

Collection of functions to cleanup the typescript database (all typescript related models)




# Api reference

## cleanupTsDatabase()

From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## 📄 cleanupTsDatabase (exported const)

From all Ts Index Models, removes the instances that refer to a ts file that doesn't exist anymore in the operation.

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

<details><summary>Show internal (2)</summary>
    
  # shouldDeleteTsModel()




| Input      |    |    |
| ---------- | -- | -- |
| tsModel | {  } |  |,| operationName | string |  |,| operationRelativePaths | string[] |  |
| **Output** | {  }   |    |



## 📄 shouldDeleteTsModel (exported const)

  </details>

