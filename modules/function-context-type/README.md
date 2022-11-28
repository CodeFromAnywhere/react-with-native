# Function context type

function-context-type (`OperationClassification` cjs)



# Api reference

## 🔹 FunctionContext

Should be attached as first argument of the function, if the name of the function is in the format of:

- `xyzWithContext`: attaches all context
- `xyzWithContextRaw`: attaches all context, api returns just the result of the function without wrapping it in the `RealApiReturnType`. Needed in case you have a different server.js `server.reply`

For more info see `apiConvention`





Properties: 

 | Name | Type | Description |
|---|---|---|
| tsFunction (optional) | object |  |
| authorizations (optional) | array |  |
| device  | object |  |
| groups (optional) | array |  |
| hasAuthorization  | boolean |  |
| authToken  | string |  |
| serverContext (optional) | object |  |


