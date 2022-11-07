# Rest util

rest-util (js operation)



# Outline

## Functions

- [bodyFromQueryString](#bodyFromQueryString)
- [getFirstQueryStrings](#getFirstQueryStrings)
- [getQueryPart](#getQueryPart)
- [toQueryString](#toQueryString)

## Variables

- [bodyFromQueryString](#bodyfromquerystring)
- [getFirstQueryStrings](#getfirstquerystrings)
- [getQueryPart](#getquerypart)
- [toQueryString](#toquerystring)



# Functions

## bodyFromQueryString()

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



## getQueryPart()

creates a query-string with one key for all strings in an array


| Input      |    |    |
| ---------- | -- | -- |
| strings | string[] |  |,| queryKey | string |  |
| **Output** |    |    |



## toQueryString()

returns something like `?x=a&y=b&z=c`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |


# Variables

## 📄 bodyFromQueryString (exported const)

converts a query string into an object that can be used as a body


## 📄 getFirstQueryStrings (exported const)

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...


## 📄 getQueryPart (exported const)

creates a query-string with one key for all strings in an array


## 📄 toQueryString (exported const)

returns something like `?x=a&y=b&z=c`

