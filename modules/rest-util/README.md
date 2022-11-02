# Rest util

rest-util (js operation)



# Outline

## Functions

- [bodyFromQueryString](#bodyFromQueryString)
- [getFirstQueryStrings](#getFirstQueryStrings)
- [getQueryPart](#getQueryPart)
- [isValidEntry](#isValidEntry)
- [toQueryString](#toQueryString)

## Variables

- [bodyFromQueryString](#bodyfromquerystring)
- [getFirstQueryStrings](#getfirstquerystrings)
- [getQueryPart](#getquerypart)
- [isValidEntry](#isvalidentry)
- [toQueryString](#toquerystring)



# Functions

## bodyFromQueryString

converts a query string into an object that can be used as a body


### Returns: object

## getFirstQueryStrings

NB: doesn't work in node.

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...




## getQueryPart

creates a query-string with one key for all strings in an array




### Parameters (2)

#### Parameter 1: strings: array

- null: string






#### Parameter 2: queryKey: string

## isValidEntry

### Returns: object

## toQueryString

returns something like `?x=a&y=b&z=c`



# Variables

## bodyFromQueryString (exported const)

converts a query string into an object that can be used as a body


## getFirstQueryStrings (exported const)

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...


## getQueryPart (exported const)

creates a query-string with one key for all strings in an array


## isValidEntry (unexported const)

## toQueryString (exported const)

returns something like `?x=a&y=b&z=c`

