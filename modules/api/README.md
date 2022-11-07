# Api

api (js operation)

Operation that makes the typerepo API exposable on the frontend in a completely typesafe way.




# Outline

## Docs

- [Demo](#demo)

## Functions

- [getGetApiUrl](#getGetApiUrl)
- [untypedApiFunction](#untypedApiFunction)

## Variables

- [apiWithConfig](#apiwithconfig)
- [api](#api)
- [AUTH_TOKEN_STORAGE_KEY](#auth-token-storage-key)
- [getGetApiUrl](#getgetapiurl)
- [queries](#queries)
- [sdkExample](#sdkexample)
- [untypedApiFunction](#untypedapifunction)



# Docs

## Demo

Please check this video for an explanation about the queries

https://youtu.be/gGfGVvRn5xw


# Functions

## getGetApiUrl()

gets an api url for a context get api

returns something like `[apiUrl]/[apiFunctionName][queryString]`


| Input      |    |    |
| ---------- | -- | -- |
| apiUrl | string |  |,| apiFunctionName | string |  |,| query | { [key: string]: {  } } |  |
| **Output** | `String`   |    |



## untypedApiFunction()

Used for calling the actual api for a function with some config

NB: this is not a typed function as we are just overwriting it so we don't need any inference on this


| Input      |    |    |
| ---------- | -- | -- |
| fnName | string |  |,| config | `ApiConfig` |  |,| parameters | {  } |  |
| **Output** |    |    |


# Variables

## 📄 apiWithConfig (exported const)

This object contains a api function for every function in the backend

The difference from `api` is that it allows you to also insert custom api configurations


## 📄 api (exported const)

This object contains an api function for every function in the backend


NB: only use this if you can access localStorage of the browser or the app. This means this won't work in node or in getStaticProps functions or so


## 📄 AUTH_TOKEN_STORAGE_KEY (exported const)

## 📄 getGetApiUrl (exported const)

gets an api url for a context get api

returns something like `[apiUrl]/[apiFunctionName][queryString]`


## 📄 queries (exported const)

This object contains a react-query `useQuery` hook for every api function


## 📄 sdkExample (exported const)

## 📄 untypedApiFunction (exported const)

Used for calling the actual api for a function with some config

NB: this is not a typed function as we are just overwriting it so we don't need any inference on this

