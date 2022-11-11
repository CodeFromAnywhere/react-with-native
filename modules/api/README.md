# Api

api (`OperationClassification` js)

Operation that makes the typerepo API exposable on the frontend in a completely typesafe way.




# Docs

<details><summary>demo.md</summary>
    
  Please check this video for an explanation about the queries

https://youtu.be/gGfGVvRn5xw

  </details>

# Api reference

## 📄 api (exported const)

This object contains an api function for every function in the backend


NB: only use this if you can access localStorage of the browser or the app. This means this won't work in node or in getStaticProps functions or so


## 📄 queries (exported const)

This object contains a react-query `useQuery` hook for every api function


## 📄 apiWithConfig (exported const)

This object contains a api function for every function in the backend

The difference from `api` is that it allows you to also insert custom api configurations


## getGetApiUrl()

gets an api url for a context get api

returns something like `[apiUrl]/[apiFunctionName][queryString]`


| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| apiFunctionName | string |  |,| query | { [key: string]: {  } } |  |
| **Output** | `String`   |    |



## 📄 AUTH_TOKEN_STORAGE_KEY (exported const)

## 📄 getGetApiUrl (exported const)

gets an api url for a context get api

returns something like `[apiUrl]/[apiFunctionName][queryString]`

# Internal

<details><summary>Show internal (3)</summary>
    
  # untypedApiFunction()

Used for calling the actual api for a function with some config

NB: this is not a typed function as we are just overwriting it so we don't need any inference on this


| Input      |    |    |
| ---------- | -- | -- |
| fnName | string |  |,| config | `ApiConfig` |  |,| parameters | {  } |  |
| **Output** |    |    |



## 📄 sdkExample (exported const)

## 📄 untypedApiFunction (exported const)

Used for calling the actual api for a function with some config

NB: this is not a typed function as we are just overwriting it so we don't need any inference on this
  </details>

