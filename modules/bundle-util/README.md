# Bundle util

bundle-util (node operation)

Size: 169 LOC, 2044 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: fs, path, findFileNameCaseInsensitive, getPathsWithOperations, getProjectRoot, explore, exploreOperationFolders, kebabCase, getRootPath, makeArray, notEmpty, onlyUnique2, BundleConfig, path, TsInterface, getDbModelsFromOperations, BundleConfig

# Outline

## Functions

- [getRealPathFromQueryPath](#getRealPathFromQueryPath)
- [getBundleQueryPaths](#getBundleQueryPaths)
- [getBundleSummary](#getBundleSummary)
- [getDbModelsForBundle](#getDbModelsForBundle)



# Functions

## getRealPathFromQueryPath

Max. indexation depth: 3, 



## Returns: unknown

### Arguments

#### queryPath: string







#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |


## getBundleQueryPaths

Max. indexation depth: 3, 



## Returns: unknown

### Arguments

#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |


## getBundleSummary

Max. indexation depth: 5, 

Summarizes a bundle config so it can be used easily in things like explore project

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| packageNames  | array |  |
| moduleNames  | array |  |
| appNames  | array |  |


### Arguments

#### bundleConfig: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| id  | string | unique id used for compatibility purposes |
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| language  | string | all currently supported languages |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| docsRelativeFolderPath (optional) | string | later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way. |
| readmeRelativeFilePath (optional) | string |  |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |


## getDbModelsForBundle

Max. indexation depth: 1, 

Gets all TsInterface's that are used in a bundle according to a BundleConfig

## Returns: unknown

### Arguments

#### bundleConfig: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| updatedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| deletedAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| createdFirstAt  | number | Time<br /><br />Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time. I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.<br /><br />It is the amount of ms since 1970.<br /><br />I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.<br /><br />Therefore, let's store all time values in the format Date.now() |
| id  | string | unique id used for compatibility purposes |
| slug  | string | use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example. |
| name  | string | Human readable name of the monorepo (A kebab-case version of this will be used as root foldername) |
| language  | string | all currently supported languages |
| bundles  | array |  |
| dependencies  | array | Generated, private by default. If they're already here, uses private/public setting as given.<br /><br />When generating, removes the ones that are not dependencies (of dependencies) of your standalone apps |
| docsRelativeFolderPath (optional) | string | later this could be known by the frontend so it will render a ui to select a folder<br /><br />We need to figure out how we can know all type types in between when getting the type definition schema, not only the final type. If I'm lucky there is a way to find it as a #ref in a consistent way. |
| readmeRelativeFilePath (optional) | string |  |
| foldersFromRepo (optional) | array | if given, it will fetch these folders from the repo and paste them in the bundle whenever the bundle is generated<br /><br />can be handy if you're working with someone else... |
| informationStrategy (optional) | string | push (default): take needed information from project and push to bundle (removing the existing info)<br /><br />pullReplace: pull bundle and keep its information intact, not taking anything new from the OS, replacing all the information we had from these models in the OS<br /><br />pullMerge: pull bundle and use its information in conjunction with the information we had in the OS. This option will merge both information sources, removing duplicate IDs<br /><br />NB: Later we may want to define this setting on a per-model basis! |
| gitRepoUrl (optional) | string |  |
| branchName (optional) | string | specify the branch to use of your git repo (defaults to "main") |


