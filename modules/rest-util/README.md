# Rest util

rest-util (`OperationClassification` cjs)



# Api reference

## toQueryString()

returns something like `?x=a&y=b&z=c`


| Input      |    |    |
| ---------- | -- | -- |
| query (optional) | {  } |  |
| **Output** | `String`   |    |



## 📄 toQueryString (exported const)

returns something like `?x=a&y=b&z=c`


## getQueryPart()

creates a query-string with one key for all strings in an array


| Input      |    |    |
| ---------- | -- | -- |
| strings | string[] |  |,| queryKey | string |  |
| **Output** |    |    |



## 📄 getQueryPart (exported const)

creates a query-string with one key for all strings in an array

# Internal

<details><summary>Show internal (7)</summary>
    
  # bodyFromQueryString()

converts a query string into an object that can be used as a body


| Input      |    |    |
| ---------- | -- | -- |
| query (optional) | string | NB: everything AFTER The "?", so this should be the format: x=x&y=y&z=z&z=z2 |
| **Output** | {  }   |    |



## getFirstQueryStrings()

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...


| Input      |    |    |
| ---------- | -- | -- |
| query | `QueryableObject` |  |
| **Output** |    |    |



## isValidEntry()

| Input      |    |    |
| ---------- | -- | -- |
| [_, value] | (string | {  })[] |  |
| **Output** | {  }   |    |



## 🔹 QueryableObject

## 📄 bodyFromQueryString (exported const)

converts a query string into an object that can be used as a body


## 📄 getFirstQueryStrings (exported const)

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...


## 📄 isValidEntry (exported const)

  </details>

