# Compile typescript

compile-typescript (`OperationClassification` cjs)



# Api reference

# CLI

<details><summary>Show CLI information (1)</summary>
    
  # 📄 [
  operationBasePath,
  operationManualProjectRoot,
  typerepoManualProjectRoot,
] (unexported const)


  </details>

# Internal

<details><summary>Show internal (5)</summary>
    
  # getCompileErrors()

gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one

1) get buildErrors for all src files of current operation
2) if build doesn't succeed, only check for build errors in current operation
3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |,| onlyDependants (optional) | boolean |  |,| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## getTypescriptErrorsFromFiles()

/**
 * uses official typescript compiler to check all given files for compilation errors
 */


| Input      |    |    |
| ---------- | -- | -- |
| {
  filePaths,
  debug,
} | { basePath: string, <br />filePaths: string[], <br />compilerOptions: `CompilerOptions`, <br />packageJson: `PackageJson`, <br />debug?: boolean, <br /> } |  |
| **Output** | {  }[]   |    |



## writeBuildErrors()

| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |,| operationManualProjectRoot (optional) | string |  |,| typerepoManualProjectRoot (optional) | string |  |
| **Output** |    |    |



## 📄 getCompileErrors (exported const)

gets compileErrors of an operation. if it has no errors, it also check all dependants to see if they have errors, possibly because we changed this one

1) get buildErrors for all src files of current operation
2) if build doesn't succeed, only check for build errors in current operation
3) if build succeeds, check iffor build errors in all files in all operations that depend on this one. this means we need compile to be ran for every operation

TODO: Later, only check all build errors of all dependants if and only if an export blueprint (io) has changed and if this export was imported there


## 📄 writeBuildErrors (exported const)

  </details>

