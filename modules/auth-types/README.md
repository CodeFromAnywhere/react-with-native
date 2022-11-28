# Auth types

auth-types (`OperationClassification` node-cjs)



# Api reference

## 🔹 Authorization

`Authorization` helps you provide certain access to files, data, functionality, and code. Authorization can be provided custom, or by indexation. The indexation of the codebase and text-files overwrites the custom authorization in the `Group`-model.


### Different authorizations

For files (ts, md, json, etc...):

- canWriteCreate
- canWriteUpdate
- canWriteDelete
- canRead
- canSearch (only search index)

For db model data subsets:

- canWriteUpdate
- canWriteCreate
- canWriteDelete
- canRead
- canSearch (only search index)

For functions:

- canExecute

For functions, interfaces, variables:

- canRead (reading docs only. for source, you need to provide the file auth)
- canSearch (only search index)





Properties: 

 | Name | Type | Description |
|---|---|---|
| isProjectWide (optional) | boolean |  |
| authorizedOperationName (optional) | string |  |
| tsFunctionId (optional) | string |  |
| tsVariableId (optional) | string |  |
| tsInterfaceId (optional) | string |  |
| datasetId (optional) | string |  |
| authorizedProjectRelativePath (optional) | string |  |
| canExecute (optional) | boolean |  |
| canWriteCreate (optional) | boolean |  |
| canWriteUpdate (optional) | boolean |  |
| canWriteDelete (optional) | boolean |  |
| canRead (optional) | boolean |  |
| canSearch (optional) | boolean |  |



## 🔸 AuthorizationModel

jsonMultiple model



Authorization model for indexed authorizations

Don't edit this! If you wish to add authorizations to a group, either edit the code or text-files, or provide custom authorizations to the `Group`.





Properties: 

 | Name | Type | Description |
|---|---|---|
| isProjectWide (optional) | boolean |  |
| authorizedOperationName (optional) | string |  |
| tsFunctionId (optional) | string |  |
| tsVariableId (optional) | string |  |
| tsInterfaceId (optional) | string |  |
| datasetId (optional) | string |  |
| authorizedProjectRelativePath (optional) | string |  |
| canExecute (optional) | boolean |  |
| canWriteCreate (optional) | boolean |  |
| canWriteUpdate (optional) | boolean |  |
| canWriteDelete (optional) | boolean |  |
| canRead (optional) | boolean |  |
| canSearch (optional) | boolean |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |


