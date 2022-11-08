# Bundle types

bundle-types (js operation)



# Api reference

## 🔸 BundleConfig

jsonSingle model




Configuration options for bundles. Used with `generateBundle`

Everything in this model will be copied over to the created bundle, except for `createBundleConfig` and `customisableBundleConfig`.





Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| bundleMarkdownReaderConfig (optional) | object |  |
| slug  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| customisableBundleConfig  | object |  |
| createBundleConfig  | object |  |



## 🔹 BundleMarkdownReaderConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| showTodos (optional) | boolean |  |
| omitModulesMenu (optional) | boolean |  |
| omitAppsMenu (optional) | boolean |  |
| omitDictionaryMenu (optional) | boolean |  |
| omitPackagesMenu (optional) | boolean |  |
| customOperationNames (optional) | array |  |



## 🔹 CustomisableBundleConfig

configuration that can be applied when generating a new bundle

It can be put in the BundleConfig, but it can also be set manually for an individual Bundle Generation.





Properties: 

 | Name | Type | Description |
|---|---|---|
| isOffline (optional) | boolean |  |
| skipPull (optional) | boolean |  |
| skipPush (optional) | boolean |  |
| skipUpsert (optional) | boolean |  |
| debug (optional) | boolean |  |
| description (optional) | string |  |
| branchName (optional) | string |  |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |
| gitUserEmail (optional) | string |  |
| gitUserName (optional) | string |  |



## 🔹 FinalBundleConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| customisableBundleConfig  | object |  |
| createBundleConfig  | object |  |
| categoryStackCalculated (optional) | array |  |
| id  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| slug (optional) | string |  |
| name (optional) | string |  |
| language (optional) | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | string |  |
| bundleMarkdownReaderConfig (optional) | string |  |



## 🔹 FinalCreateBundleConfig

CreateBundleConfig after applying the defaults





Properties: 

 | Name | Type | Description |
|---|---|---|
| informationStrategy (optional) | string |  |
| foldersFromRepo (optional) | array |  |
| keepStructure (optional) | boolean |  |
| modelInformationStrategy (optional) | object |  |
| additional_datasetSlugs (optional) | array |  |
| filter_datasetSlugs (optional) | array |  |
| isDraft (optional) | boolean |  |
| keepTodos (optional) | boolean |  |
| bundles  | array |  |
| dependencies  | array |  |
| docsRelativeFolderPath (optional) | object |  |
| readmeRelativeFilePath (optional) | string |  |



## 🔹 FinalCustomisableBundleConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| description (optional) | string |  |
| debug (optional) | boolean |  |
| branchName (optional) | string |  |
| isOffline (optional) | boolean |  |
| skipPull (optional) | boolean |  |
| skipPush (optional) | boolean |  |
| skipUpsert (optional) | boolean |  |
| publicEnvironmentVariables (optional) | object |  |
| privateEnvironmentVariables (optional) | object |  |
| gitUserEmail (optional) | string |  |
| gitUserName (optional) | string |  |



## 🔹 InformationStrategy

push (default): take needed information from project and push to bundle (removing the existing info)

pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS

pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs

ignore: don't put any data in the bundle!








## 🔹 OperationPrivacy

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | string |  |
| privacy  | string |  |


# Internal

<details><summary>Show internal (9)</summary>
  
  # 🔹 AppShell










## 🔹 CreateBundleConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| keepStructure (optional) | boolean |  |
| informationStrategy (optional) | string |  |
| modelInformationStrategy (optional) | object |  |
| additional_datasetSlugs (optional) | array |  |
| filter_datasetSlugs (optional) | array |  |
| isDraft (optional) | boolean |  |
| keepTodos (optional) | boolean |  |
| bundles  | array |  |
| dependencies  | array |  |
| docsRelativeFolderPath (optional) | object |  |
| readmeRelativeFilePath (optional) | string |  |
| foldersFromRepo (optional) | array |  |



## 🔹 EnvironmentVariableObject

## 🔹 FrontBackBundle

This type can specify a frontend and backend that belong to each other. it doesn't include all operations that the ui or server are dependent on, they are calculated separately





Properties: 

 | Name | Type | Description |
|---|---|---|
| operations (optional) | array |  |
| uiOperationName (optional) | string |  |
| appShellOperationNames (optional) | array |  |
| serverOperationName (optional) | string |  |
| productionWebUrl (optional) | string |  |
| productionApiUrl (optional) | string |  |
| endpointsAuthToken (optional) | string |  |



## 🔹 OperationName

later we can make this an enum! it can be auto-generated along with enums for the operation paths, and more things alike.

if it's an enum it will automatically be possible to select a value from it in the simplified schema form :D

besides simply having OperationName, we can have specific operation classification operation names:

- JsOperationName (js)
- NodeOperationName (node)
- ServerOperationName (server)
- AppShellOperationName (web, app, etc.)
- UiOperationName (ui-es6 and ui-es5)








## 🔹 ProjectRelativeFilePath

## 🔹 ProjectRelativeFolderPath

later this could be known by the frontend so it will render a ui to select a folder

We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way.








## 🔹 PublicBundleConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| name  | string |  |
| description (optional) | string |  |
| emoji (optional) | string |  |
| primaryColor (optional) | string |  |
| gitRepoUrl (optional) | string |  |
| isGitRepoPublic (optional) | boolean |  |
| bundleMarkdownReaderConfig (optional) | object |  |



## 🔹 ServerOperationName

  </details>

