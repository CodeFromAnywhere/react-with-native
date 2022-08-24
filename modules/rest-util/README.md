# Rest util

rest-util (js operation)

Size: 79 LOC, 2035 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: makeArray

# Outline

## Functions

- [bodyFromQueryString](#bodyFromQueryString)
- [isValidEntry](#isValidEntry)
- [toQueryString](#toQueryString)
- [getFirstQueryStrings](#getFirstQueryStrings)
- [getQueryPart](#getQueryPart)



# Functions

## bodyFromQueryString

Max. indexation depth: 4, 

converts a query string into an object that can be used as a body

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## isValidEntry

Max. indexation depth: 1, 



### Returns: boolean







## toQueryString

Max. indexation depth: 6, 



### Returns: string







## getFirstQueryStrings

Max. indexation depth: 2, 

NB: doesn't work in node.

Query keys can be string or string[] or undefined.

This function takes only the first string if it's an array...

## Returns: unknown

## getQueryPart

Max. indexation depth: 1, 

creates a query-string with one key for all strings in an array

## Returns: unknown

### Arguments

#### strings: array

- null: string





#### queryKey: string







