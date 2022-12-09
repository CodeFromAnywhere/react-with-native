# Set json key

set-json-key (`OperationClassification` node-cjs)

Useful functions to alter JSON files (can be used both with node or with a CLI)




# Api reference

## setJsonKey()

npx setjsonkey [json-path] key1.key2.[index/latest/push].key3 "value"


collect arguments 1 2 and 3
find file (arg1) in path, import json (or start with empty object in a new file)
reduce keys (arg2) to go deeper into the object and create keys as they don't exist
make sure it works with arrays too
convert value string (arg3) to number, boolean if they seem to be like that


| Input      |    |    |
| ---------- | -- | -- |
| {
  jsonPath,
  keyLocation,
  value,
  debug,
} | { jsonPath: string, <br />keyLocation: string, <br />value: string, <br />debug?: boolean, <br /> } |  |
| **Output** |    |    |



## setKeyAtLocation()

| Input      |    |    |
| ---------- | -- | -- |
| path | string |  |,| value | {  } |  |,| object | {  } |  |
| **Output** |    |    |



## 📄 setJsonKey (exported const)

