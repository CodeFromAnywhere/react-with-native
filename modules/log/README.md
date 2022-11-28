# Log

log (`OperationClassification` cjs)



# Api reference

## log()

Log a message with a special type


| Input      |    |    |
| ---------- | -- | -- |
| message | string | the message to be displayed to the user |,| config (optional) | `LogConfig` | the configuration (optional) |,| data (optional) | {  } | Extra data the user needs to be able to see. |
| **Output** |    |    |



## 📄 log (exported const)

Log a message with a special type

# Internal

<details><summary>Show internal (10)</summary>
    
  # getCallerFileName()

TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## parseTitle()

TODO: Should parse a title from markdown


| Input      |    |    |
| ---------- | -- | -- |
| markdown | string |  |
| **Output** | { title: {  }, <br />rest: {  }, <br /> }   |    |



## 🔹 GlobalLogConfig

a logging configuration object that you can set using a file in the root of your operation or project.





Properties: 

 | Name | Type | Description |
|---|---|---|
| showDebug (optional) | boolean |  |
| showDefault (optional) | boolean |  |
| sayTitles (optional) | boolean |  |
| logFolder (optional) | string |  |



## 🔹 LogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| title (optional) | string |  |
| type (optional) | string |  |
| customConfig (optional) | object |  |



## 🔹 LogType

how should it look and feel?








## 🔹 OperationLogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| config  | object |  |
| fileConfig (optional) | object |  |
| functionConfig (optional) | object |  |



## 🔹 ProjectLogConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| config  | object |  |
| operationConfig  | object |  |



## 📄 DEBUG (exported const)

if true, also shows debug messages


## 📄 getCallerFileName (exported const)

TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show


## 📄 parseTitle (exported const)

TODO: Should parse a title from markdown
  </details>

