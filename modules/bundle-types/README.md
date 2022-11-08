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


