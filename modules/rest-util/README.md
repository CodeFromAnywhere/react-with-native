# Rest util

rest-util (`OperationClassification` js)



# Api reference

## toQueryString()

returns something like `?x=a&y=b&z=c`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
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

<details><summary>Show internal (4)</summary>
    
  # bodyFromQueryString()

converts a query string into an object that can be used as a body


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getFirstQueryStrings()

NB: doesn't work in node.

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 bodyFromQueryString (exported const)

converts a query string into an object that can be used as a body


## 📄 getFirstQueryStrings (exported const)

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...
  </details>

