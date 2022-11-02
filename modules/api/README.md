# Api

api (js operation)

Operation that makes the typerepo API exposable on the frontend in a completely typesafe way.




# Outline

## Functions

- [fn1](#fn1)
- [fn2](#fn2)
- [fn3](#fn3)
- [getGetApiUrl](#getGetApiUrl)
- [untypedApiFunction](#untypedApiFunction)

## Interfaces

- [ApiConfig](#apiconfig)

## Variables

- [apiWithConfig](#apiwithconfig)
- [api](#api)
- [AUTH_TOKEN_STORAGE_KEY](#auth-token-storage-key)
- [fn1](#fn1)
- [fn2](#fn2)
- [fn3](#fn3)
- [getGetApiUrl](#getgetapiurl)
- [queries](#queries)
- [sdkExample](#sdkexample)
- [untypedApiFunction](#untypedapifunction)



# Functions

## fn1

There is probably some doc-comments available for the function, maybe we can fix this with proxies to pass those comments... that would be insane.


### Returns: object

### Parameters (2)

#### Parameter 1: a: string

#### Parameter 2: b: number

## fn2

### Returns: object

### Parameters (2)

#### Parameter 1: a: string

#### Parameter 2: b: number

## fn3

### Parameters (2)

#### Parameter 1: a: string

#### Parameter 2: b: number

## getGetApiUrl

gets an api url for a context get api

returns something like `[apiUrl]/[apiFunctionName][queryString]`




### Parameters (3)

#### Parameter 1: apiUrl: string

#### Parameter 2: apiFunctionName: string

#### Parameter 3: query: object

## untypedApiFunction

Used for calling the actual api for a function with some config

NB: this is not a typed function as we are just overwriting it so we don't need any inference on this




### Parameters (3)

#### Parameter 1: fnName: string

#### Parameter 2: config: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| apiUrl (optional) | string |  |
| authToken (optional) | string |  |
| timeout (optional) | number |  |



#### Parameter 3: parameters: object

# Interfaces

## ApiConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| apiUrl (optional) | string |  |
| authToken (optional) | string |  |
| timeout (optional) | number |  |


# Variables

## apiWithConfig (exported const)

This object contains a api function for every function in the backend

The difference from `api` is that it allows you to also insert custom api configurations


## api (exported const)

This object contains an api function for every function in the backend


NB: only use this if you can access localStorage of the browser or the app. This means this won't work in node or in getStaticProps functions or so


## AUTH_TOKEN_STORAGE_KEY (exported const)

## fn1 (unexported const)

There is probably some doc-comments available for the function, maybe we can fix this with proxies to pass those comments... that would be insane.


## fn2 (unexported const)

## fn3 (unexported const)

## getGetApiUrl (exported const)

gets an api url for a context get api

returns something like `[apiUrl]/[apiFunctionName][queryString]`


## queries (exported const)

This object contains a react-query `useQuery` hook for every api function


## sdkExample (exported const)

## untypedApiFunction (exported const)

Used for calling the actual api for a function with some config

NB: this is not a typed function as we are just overwriting it so we don't need any inference on this

