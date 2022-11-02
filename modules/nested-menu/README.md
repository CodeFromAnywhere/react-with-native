# Nested menu

nested-menu (ui-es5 operation)



# Outline

## Functions

- [getKeysAtPathFromNestedObject](#getKeysAtPathFromNestedObject)
- [NestedMenuItem](#NestedMenuItem)
- [NestedMenu](#NestedMenu)
- [nestedPathObjectToNestedMenuRecursive](#nestedPathObjectToNestedMenuRecursive)
- [queryPathsArrayToNestedPathObject](#queryPathsArrayToNestedPathObject)
- [reduceQueryPathsRecursively](#reduceQueryPathsRecursively)
- [useExpanded](#useExpanded)

## Interfaces

- [ExpandedObject](#expandedobject)
- [NestedObject](#nestedobject)
- [NestedPathObject](#nestedpathobject)

## Variables

- [getKeysAtPathFromNestedObject](#getkeysatpathfromnestedobject)
- [NestedMenuItem](#nestedmenuitem)
- [nestedMenuStoreInitialValues](#nestedmenustoreinitialvalues)
- [NestedMenu](#nestedmenu)
- [nestedPathObjectToNestedMenuRecursive](#nestedpathobjecttonestedmenurecursive)
- [queryPathsArrayToNestedPathObject](#querypathsarraytonestedpathobject)
- [reduceQueryPathsRecursively](#reducequerypathsrecursively)
- [{ StoreProvider, useStore }](#storeprovider-usestore)
- [useExpanded](#useexpanded)



# Functions

## getKeysAtPathFromNestedObject

Gets all children keys of a nested object at a certain (nested) location in the nested object

`nestedObject` should extend the NestedObject.

The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.




## NestedMenuItem

General purpose NestedMenuItem

TODO: make style customizable




## NestedMenu

General purpose nested menu component

Please make sure that you also wrap your app with `MenuStoreProvider`, or this will crash...!




## nestedPathObjectToNestedMenuRecursive

Transform a nested path object into a nested menu (MenuType), recursively




## queryPathsArrayToNestedPathObject

Handy function to transform an array of `querypaths` into a nested menu, assuming you want to create a new sub-menu for every path

May also work for relative filePaths

Input:

["hello/world","hello/moon","hello/sun"]

Output:

{
"hello":{
"moon":null,
"world":null,
"sun":null
}
}




### Parameters (1)

#### Parameter 1: queryPaths: array

- null: string






## reduceQueryPathsRecursively

### Parameters (2)

#### Parameter 1: queryPaths: array

- null: string






#### Parameter 2: initialValue: object

## useExpanded

### Parameters (1)

#### Parameter 1: queryPath (optional): string

# Interfaces

## ExpandedObject

## NestedObject

## NestedPathObject

A different way to represent a path array in a nested object of folders

{
"folderName": {
"file1": null,
"file2": null
},
"folderName2": {
"file1": null,
"file2": null
}
}







# Variables

## getKeysAtPathFromNestedObject (exported const)

Gets all children keys of a nested object at a certain (nested) location in the nested object

`nestedObject` should extend the NestedObject.

The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.


## NestedMenuItem (exported const)

General purpose NestedMenuItem

TODO: make style customizable


## nestedMenuStoreInitialValues (exported const)

## NestedMenu (exported const)

General purpose nested menu component

Please make sure that you also wrap your app with `MenuStoreProvider`, or this will crash...!


## nestedPathObjectToNestedMenuRecursive (exported const)

Transform a nested path object into a nested menu (MenuType), recursively


## queryPathsArrayToNestedPathObject (exported const)

Handy function to transform an array of `querypaths` into a nested menu, assuming you want to create a new sub-menu for every path

May also work for relative filePaths

Input:

["hello/world","hello/moon","hello/sun"]

Output:

{
"hello":{
"moon":null,
"world":null,
"sun":null
}
}


## reduceQueryPathsRecursively (exported const)

## { StoreProvider, useStore } (exported const)

## useExpanded (exported const)

