# Nested menu

nested-menu (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [NestedMenu](#NestedMenu)
- [NestedMenuItem](#NestedMenuItem)
- [nestedPathObjectToNestedMenuRecursive](#nestedPathObjectToNestedMenuRecursive)
- [reduceQueryPathsRecursively](#reduceQueryPathsRecursively)
- [queryPathsArrayToNestedPathObject](#queryPathsArrayToNestedPathObject)



# Functions

## NestedMenu

Max. indexation depth: 4, 

General purpose nested menu component

TODO: support for expanded items

## Returns: unknown

## NestedMenuItem

Max. indexation depth: 8, 

General purpose NestedMenuItem

TODO: make style customizable

## Returns: unknown

## nestedPathObjectToNestedMenuRecursive

Max. indexation depth: 3, 

Transform a nested path object into a nested menu (MenuType), recursively

## Returns: unknown

### Arguments

#### nestedPathObject: object



```md
your nested path object that you want to create a menu for
```


Properties: 

 | Name | Type | Description |
|---|---|---|



#### pathStack (optional): array

- null: string

```md
used for recursion to get the final url (defaults to empty array)
```




## reduceQueryPathsRecursively

Max. indexation depth: 3, 



### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



### Arguments

#### queryPaths: array

- null: string





#### initialValue: object



```md
A different way to represent a path array in a nested object of folders
```


Properties: 

 | Name | Type | Description |
|---|---|---|



## queryPathsArrayToNestedPathObject

Max. indexation depth: 2, 

Handy function to transform an array of querypaths into a nested menu, assuming you want to create a new sub-menu for every path

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



### Arguments

#### queryPaths: array

- null: string





