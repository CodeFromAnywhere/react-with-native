# Get imported dependencies

get-imported-dependencies (`OperationClassification` node-cjs)



# Api reference

## getImportedDependencies()

DEPRECATED: should use generated index files with imports instead!

gets all imported packages (dependencies) in a project
doesn't take into account the fact that someone can set up a rule for absolute imports within the package.
this assumes that any absolute package comes from node_modules.


| Input      |    |    |
| ---------- | -- | -- |
| {
  operationFolderPath,
} | { operationFolderPath: string, <br /> } |  |
| **Output** |    |    |



## isAbsoluteImport()

if it doesn't start with a dot it must be an absolute import so most likely a package that needs to be installed


| Input      |    |    |
| ---------- | -- | -- |
| moduleString | string |  |
| **Output** | {  }   |    |



## 📄 getImportedDependencies (exported const)

DEPRECATED: should use generated index files with imports instead!

gets all imported packages (dependencies) in a project
doesn't take into account the fact that someone can set up a rule for absolute imports within the package.
this assumes that any absolute package comes from node_modules.


## 📄 isAbsoluteImport (exported const)

if it doesn't start with a dot it must be an absolute import so most likely a package that needs to be installed

# Internal

<details><summary>Show internal (2)</summary>
    
  # getPackage()

only the first part


| Input      |    |    |
| ---------- | -- | -- |
| absoluteModuleString | string |  |
| **Output** |    |    |



## 📄 getPackage (exported const)

only the first part
  </details>

