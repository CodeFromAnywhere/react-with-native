# Convert case

convert-case (`OperationClassification` js)



# Api reference

## kebabCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## 📄 kebabCase (exported const)

## humanCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## 📄 humanCase (exported const)

## slugify()

/**
 * this function does the same as kebabCase but it also does some more transformation on top
 *
 * useful for making simple URLs and filenames. Kebacase is not enough
 *
 * NB: this is no two way transformation. When slugifying something, information is lost and it cannot be converted back in the original name.
 *
 * TODO: make the tranformations that are done here into smaller util functions and make a clean function that can be ran before running every casing conversion (maybe in a config)
 */


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |



## camelCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## lowerCaseArray()

converts any string to an array of lowercase words

format ["word1","word2","word3"] from a string of any casing.


| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## 📄 camelCase (exported const)

## 📄 lowerCaseArray (exported const)

converts any string to an array of lowercase words

format ["word1","word2","word3"] from a string of any casing.


## capitaliseFirstLetter()

| Input      |    |    |
| ---------- | -- | -- |
| word | string |  |
| **Output** |    |    |



## pascalCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## 📄 capitaliseFirstLetter (exported const)

## 📄 pascalCase (exported const)

# Internal

<details><summary>Show internal (10)</summary>
    
  # capitalCase()




| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## convertCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string | NB: texts of more than a sentence are not supported |,| target | `Casing` |  |
| **Output** |    |    |



## getDelimiter()

| Input      |    |    |
| ---------- | -- | -- |
| target | `Casing` |  |
| **Output** | _ /   / - /    |    |



## snakeCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## 🔹 Casing

## 📄 capitalCase (exported const)

## 📄 convertCase (exported const)

## 📄 getDelimiter (exported const)

## 📄 snakeCase (exported const)

## 📄 test (exported const)

  </details>

