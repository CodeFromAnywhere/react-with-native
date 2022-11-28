# Recursive util

recursive-util (`OperationClassification` cjs)



# Api reference

## getMenuPagesObject()

| Input      |    |    |
| ---------- | -- | -- |
| flat | `WebPage<>`[] |  |
| **Output** | { flat: { queryPath: string, <br />searchTerms?: string[], <br />target: {  }, <br />isMenuHidden?: boolean, <br />menuTitleAugmentation?: string, <br />menuTitleTooltip?: string, <br />menuTitle?: string, <br />pageData: {  }, <br /> }[], <br />nested: {  }[], <br /> }   |    |



## 📄 getMenuPagesObject (exported const)

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
| **Output** | {  }   |    |



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


## getKeysAtPathFromNestedObject()

Gets all children keys of a nested object at a certain (nested) location in the nested object

`nestedObject` should extend the `NestedObject`.

The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## nestedPathObjectToNestedMenuRecursive()

Transform a nested path object into a nested menu (MenuType), recursively


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getKeysAtPathFromNestedObject (exported const)

Gets all children keys of a nested object at a certain (nested) location in the nested object

`nestedObject` should extend the `NestedObject`.

The reduce is a bit vague, I need to  test this function further to make sure it does exactly what I want.


## 📄 nestedPathObjectToNestedMenuRecursive (exported const)

Transform a nested path object into a nested menu (MenuType), recursively

# Internal

<details><summary>Show internal (8)</summary>
    
  # makeNestedObjectFromQueryPathObject()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## nestedObjectToChildObject()

if T is an object, provide __check as one of its properties, to make it possible to check that it's a leaf. This property will be omitted in the ChildObject array


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## nestifyQueryPathObjectRecursive()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## reduceQueryPathsRecursively()

| Input      |    |    |
| ---------- | -- | -- |
| queryPaths | string[] |  |,| initialValue | `NestedPathObject` |  |
| **Output** | {  }   |    |



## 📄 makeNestedObjectFromQueryPathObject (exported const)

## 📄 nestedObjectToChildObject (exported const)

if T is an object, provide __check as one of its properties, to make it possible to check that it's a leaf. This property will be omitted in the ChildObject array


## 📄 nestifyQueryPathObjectRecursive (exported const)

## 📄 reduceQueryPathsRecursively (exported const)

  </details>

