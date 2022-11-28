# Get imports exports

get-imports-exports (`OperationClassification` node-cjs)



# Api reference

# CLI

<details><summary>Show CLI information (1)</summary>
    
  # 📄 [operationBasePath, manualProjectRoot] (unexported const)


  </details>

# Tests

<details><summary>Show test information(4)</summary>
    
  # getImportsExportsTest()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getImportsExportsTest (exported const)

## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (30)</summary>
    
  # calculatePackageJsonDependencies()

Calculates new packageJson dependencies object based on imports found in the whole operation.

For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)

Generated packages are not added to dependencies. Instead a config is added saying this operation only works within a monorepo since it has generated operation deps that are not on the npm registry

For external modules, uses the version that was already present in dependencies, or uses "*"

Also keeps the dependencies that were already there, nothing is removed.


| Input      |    |    |
| ---------- | -- | -- |
| dependencies (optional) | `PackageInfoObject` | Current dependencies object in your operation |,| imports | `Creation<TsImport>`[] | All imports found in your operation |,| operations | `Operation`[] | All package-json's in your monorepo |,| operationName | string |  |
| **Output** | { newDependencies: {  }, <br />hasGeneratedDependenciesIndexed: boolean, <br /> }   |    |



## findAndWriteImportsExports()

takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes

NB: has a side effect: it also updates the package.json to include all needed dependencies.


| Input      |    |    |
| ---------- | -- | -- |
| operationBasePath | string |  |,| manualProjectRoot (optional) | string | Manual project root of the operation where the imports and exports needs to be detected and written to database |
| **Output** |    |    |



## getDefaultSymbolType()

gets type of a symbol and if the type has a generic, without recursing.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { type: type / value, <br />hasGeneric?: boolean, <br /> }   |    |



## getExportSpecifierNames()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getExportSymbolTypeRecursive()

gets type of exportSymbols. recurses if it's an exportsymbol

TODO: NB: exports that come from a destructured initialiser aren't found! fix it


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { type: type / value, <br />hasGeneric?: boolean, <br /> }   |    |



## getImportSpecifiersWithNames()

get the ImportSpecifier(s) of with a certain name.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getImportsExportsTest()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getImportsExports()

Uses ts-morph to get all exports inside all files in a project or an array of source files.
Doesn't use index, it actually looks in all files except index,
so some of them may not be exported from the package itself depending on your indexing strategy!


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getPackageNameFromAbsoluteImport()

parses the absolute import name into the actual package name

- removes internal navigation in the package (everything after the package name)
- assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
- removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`


| Input      |    |    |
| ---------- | -- | -- |
| absoluteImportName | string |  |
| **Output** |    |    |



## getSymbolTypeDeclarations()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## getTypeFromImportSpecifierRecursive()

Recursive function that gets the type specifier from an import specifier


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { type: type / value, <br />hasGeneric?: boolean, <br /> }   |    |



## isAbsoluteImportBuiltin()

returns true if the absolute import is built in into node


| Input      |    |    |
| ---------- | -- | -- |
| absoluteImportName | string |  |
| **Output** |    |    |



## isAbsoluteImport()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## isImportFromOptionalFile()

returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency


| Input      |    |    |
| ---------- | -- | -- |
| tsImport | `Creation<TsImport>` |  |
| **Output** | {  }   |    |



## writeResult()

| Input      |    |    |
| ---------- | -- | -- |
| options | { operationName: string, <br />success: boolean, <br />message: string, <br />manualProjectRoot?: string, <br /> } |  |
| **Output** |    |    |



## 📄 calculatePackageJsonDependencies (exported const)

Calculates new packageJson dependencies object based on imports found in the whole operation.

For monorepo modules, uses the version inside its packagejson (Uses the database to obtain the package.json)

Generated packages are not added to dependencies. Instead a config is added saying this operation only works within a monorepo since it has generated operation deps that are not on the npm registry

For external modules, uses the version that was already present in dependencies, or uses "*"

Also keeps the dependencies that were already there, nothing is removed.


## 📄 findAndWriteImportsExports (exported const)

takes an operation base path and finds all imports and exports in all the files, and writes it to the ts-imports/ts-exports indexes

NB: has a side effect: it also updates the package.json to include all needed dependencies.


## 📄 getDefaultSymbolType (exported const)

gets type of a symbol and if the type has a generic, without recursing.


## 📄 getExportSpecifierNames (exported const)

## 📄 getExportSymbolTypeRecursive (exported const)

gets type of exportSymbols. recurses if it's an exportsymbol

TODO: NB: exports that come from a destructured initialiser aren't found! fix it


## 📄 getImportSpecifiersWithNames (exported const)

get the ImportSpecifier(s) of with a certain name.


## 📄 getImportsExportsTest (exported const)

## 📄 getImportsExports (exported const)

Uses ts-morph to get all exports inside all files in a project or an array of source files.
Doesn't use index, it actually looks in all files except index,
so some of them may not be exported from the package itself depending on your indexing strategy!


## 📄 getPackageNameFromAbsoluteImport (exported const)

parses the absolute import name into the actual package name

- removes internal navigation in the package (everything after the package name)
- assumes packages don't have slashes in their names, execpt that it takes into account scoped packages (e.g. `@company/package`)
- removes things that come before any column (`:`) e.g. `node:fs` becomes `fs`


## 📄 getSymbolTypeDeclarations (exported const)

## 📄 getTypeFromImportSpecifierRecursive (exported const)

Recursive function that gets the type specifier from an import specifier


## 📄 isAbsoluteImportBuiltin (exported const)

returns true if the absolute import is built in into node


## 📄 isAbsoluteImport (exported const)

## 📄 isImportFromOptionalFile (exported const)

returns true if the import was found in an optional file, e.g. this import is not always included in the bundle, so should not be a dependency


## 📄 writeResult (exported const)

  </details>

