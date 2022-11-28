# Function functions node

function-functions-node (`OperationClassification` node-cjs)



# Api reference

# Internal

<details><summary>Show internal (10)</summary>
    
  # getFunctionExecutions()




| Input      |    |    |
| ---------- | -- | -- |
| functionName (optional) | string |  |
| **Output** |    |    |



## getFunctionQueryPaths()

Calculate all required query paths for the function UI menu...

- bundles + main project as root folders (`["main project", ...bundleNames]`)
- per folder all operations it contains, nested, in the project relative folder where it should be ending up
- per operation all functions it contains, nested, relative to the src folder. not file, only folders should become menu

Example:

- main
- modules
- packages
- db-ui
- components
- `<IndexInstanceContainer>`
- `<Layout>`
- `<UpsertForm>`
- hooks
- `useGetDbModelQuery`
- `useReferencableModelDataQuery`
- pages
- Page
- Page
- Page
- getPageTitle
- generated
- himalayajeep-functions
- apps
- bundle A
- bundle B

NB: if possible, rename the menu items if the items in a folder are not unique (use file-name to replace item name if this happens)


| Input      |    |    |
| ---------- | -- | -- |
| tsFunctions (optional) | `TsFunction`[] |  |
| **Output** |    |    |



## getPublicBundleConfig()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getSrcRelativeFolderPath()

| Input      |    |    |
| ---------- | -- | -- |
| operationRelativeSourcePath | string |  |
| **Output** |    |    |



## getTsFunction()

| Input      |    |    |
| ---------- | -- | -- |
| functionName (optional) | string |  |
| **Output** |    |    |



## 📄 getFunctionExecutions (exported const)

## 📄 getFunctionQueryPaths (exported const)

Calculate all required query paths for the function UI menu...

- bundles + main project as root folders (`["main project", ...bundleNames]`)
- per folder all operations it contains, nested, in the project relative folder where it should be ending up
- per operation all functions it contains, nested, relative to the src folder. not file, only folders should become menu

Example:

- main
- modules
- packages
- db-ui
- components
- `<IndexInstanceContainer>`
- `<Layout>`
- `<UpsertForm>`
- hooks
- `useGetDbModelQuery`
- `useReferencableModelDataQuery`
- pages
- Page
- Page
- Page
- getPageTitle
- generated
- himalayajeep-functions
- apps
- bundle A
- bundle B

NB: if possible, rename the menu items if the items in a folder are not unique (use file-name to replace item name if this happens)


## 📄 getPublicBundleConfig (exported const)

## 📄 getSrcRelativeFolderPath (exported const)

## 📄 getTsFunction (exported const)

  </details>

