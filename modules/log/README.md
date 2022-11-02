# Log

log (js operation)



# Outline

## Functions

- [getCallerFileName](#getCallerFileName)
- [log](#log)
- [parseTitle](#parseTitle)

## Interfaces

- [GlobalLogConfig](#globallogconfig)
- [LogConfig](#logconfig)
- [LogType](#logtype)
- [OperationLogConfig](#operationlogconfig)
- [ProjectLogConfig](#projectlogconfig)

## Variables

- [DEBUG](#debug)
- [getCallerFileName](#getcallerfilename)
- [log](#log)
- [options](#options)
- [parseTitle](#parsetitle)
- [resetString](#resetstring)



# Functions

## getCallerFileName

TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show




## log

Log a message with a special type




### Parameters (3)

#### Parameter 1: message: string

#### Parameter 2: config (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| title (optional) | string |  |
| type (optional) | string |  |
| customConfig (optional) | object |  |



#### Parameter 3: data (optional): object

## parseTitle

TODO: Should parse a title from markdown


### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| title  | object |  |
| rest  | object |  |



### Parameters (1)

#### Parameter 1: markdown: string

# Interfaces

## GlobalLogConfig

a logging configuration object that you can set using a file in the root of your operation or project.





Properties: 

 | Name | Type | Description |
|---|---|---|
| showDebug (optional) | boolean |  |
| showDefault (optional) | boolean |  |
| sayTitles (optional) | boolean |  |
| logFolder (optional) | string |  |



## LogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| title (optional) | string |  |
| type (optional) | string |  |
| customConfig (optional) | object |  |



## LogType

how should it look and feel?








## OperationLogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| config  | object |  |
| fileConfig (optional) | object |  |
| functionConfig (optional) | object |  |



## ProjectLogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| config  | object |  |
| operationConfig  | object |  |


# Variables

## DEBUG (exported const)

if true, also shows debug messages


## getCallerFileName (exported const)

TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show


## log (exported const)

Log a message with a special type


## options (unexported const)

special character combinations that make the console message be printed differently


## parseTitle (exported const)

TODO: Should parse a title from markdown


## resetString (unexported const)

