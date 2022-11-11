# Nested menu

nested-menu (`OperationClassification` ui-es5)



# Api reference

## nestedPathObjectToNestedMenuRecursive()

Transform a nested path object into a nested menu (MenuType), recursively


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## queryPathsArrayToNestedPathObject()

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


| Input      |    |    |
| ---------- | -- | -- |
| queryPaths | string[] |  |
| **Output** |    |    |



## 📄 nestedPathObjectToNestedMenuRecursive (exported const)

Transform a nested path object into a nested menu (MenuType), recursively


## 📄 queryPathsArrayToNestedPathObject (exported const)

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


## `<NestedMenu />`

General purpose nested menu component

Please make sure that you also wrap your app with `MenuStoreProvider`, or this will crash...!


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 nestedMenuStoreInitialValues (exported const)

## 📄 NestedMenu (exported const)

General purpose nested menu component

Please make sure that you also wrap your app with `MenuStoreProvider`, or this will crash...!


## 🔹 NestedPathObject

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








## getKeysAtPathFromNestedObject()

Gets all children keys of a nested object at a certain (nested) location in the nested object

`nestedObject` should extend the `NestedObject`.

The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getKeysAtPathFromNestedObject (exported const)

Gets all children keys of a nested object at a certain (nested) location in the nested object

`nestedObject` should extend the `NestedObject`.

The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.

# Internal

<details><summary>Show internal (8)</summary>
    
  # `<NestedMenuItem />`

General purpose NestedMenuItem

TODO: make style customizable


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## reduceQueryPathsRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| queryPaths | string[] |  |,| initialValue | `NestedPathObject` |  |
| **Output** |    |    |



## useExpanded()

| Input      |    |    |
| ---------- | -- | -- |
| queryPath (optional) | string |  |
| **Output** |    |    |



## 🔹 ExpandedObject

## 📄 NestedMenuItem (exported const)

General purpose NestedMenuItem

TODO: make style customizable


## 📄 reduceQueryPathsRecursively (exported const)

## 📄 { StoreProvider, useStore } (exported const)

## 📄 useExpanded (exported const)

  </details>

