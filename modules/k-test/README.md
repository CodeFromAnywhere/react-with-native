# K test

k-test (`OperationClassification` node-cjs)



# Api reference

# CLI

<details><summary>Show CLI information (1)</summary>
    
  # 📄 [operationName, manualProjectRoot] (unexported const)


  </details>

# Internal

<details><summary>Show internal (5)</summary>
    
  # runTestsForOperation()

runTestsForOperation(operationName) runs all tests that can be found in an operation. nicely logs and returns which funtions are working or not and why

this assumes the index file exports all tests under the `test` constant, which should be done using this framework

this also assumes your tests are exported from build/index.js (which means you need to build your code, not transpile, so it's not possible for every type of operation)


| Input      |    |    |
| ---------- | -- | -- |
| operationName | string |  |,| writeResultsToIndex (optional) | boolean |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## runTests()

run tests and log the results.

input: Test

output: isAllValid (boolean)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 runTestsForOperation (exported const)

runTestsForOperation(operationName) runs all tests that can be found in an operation. nicely logs and returns which funtions are working or not and why

this assumes the index file exports all tests under the `test` constant, which should be done using this framework

this also assumes your tests are exported from build/index.js (which means you need to build your code, not transpile, so it's not possible for every type of operation)


## 📄 runTests (exported const)

run tests and log the results.

input: Test

output: isAllValid (boolean)


## 📄 test (exported const)

test for example function
  </details>

