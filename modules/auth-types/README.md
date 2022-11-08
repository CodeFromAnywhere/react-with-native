# Auth types

auth-types (node operation)



# Api reference

## 🔹 Authorization

Properties: 

 | Name | Type | Description |
|---|---|---|
| type  | string |  |
| value  | string |  |
| authorizations  | array |  |



## 🔹 AuthorizationLevel

`AuthorizationLevel` is a single Enum that can apply to privacy and authorization of text, functions, and data.

For files (ts, md, json, etc...):

- write-create
- write-update
- write-delete
- read
- search (only search index)

For db model data subsets:

- write-update
- write-create
- write-delete
- read
- search (only search index)

For functions:
- execute

For functions, interfaces, variables:

- read (reading docs only. for source, you need to provide the file auth)
- search (only search index)







# Internal

<details><summary>Show internal (2)</summary>
  
  # 📄 authorizationLevelReadonlyArray (exported const)




## 📄 authorizationLevelStringArray (exported const)

  </details>

