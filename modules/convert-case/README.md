# Convert case

convert-case (js operation)



# Outline

## Functions

- [camelCase](#camelCase)
- [capitalCase](#capitalCase)
- [capitaliseFirstLetter](#capitaliseFirstLetter)
- [convertCase](#convertCase)
- [getDelimiter](#getDelimiter)
- [humanCase](#humanCase)
- [kebabCase](#kebabCase)
- [lowerCaseArray](#lowerCaseArray)
- [pascalCase](#pascalCase)
- [slugify](#slugify)
- [snakeCase](#snakeCase)

## Interfaces

- [Casing](#casing)

## Variables

- [camelCase](#camelcase)
- [capitalCase](#capitalcase)
- [capitaliseFirstLetter](#capitalisefirstletter)
- [convertCase](#convertcase)
- [getDelimiter](#getdelimiter)
- [humanCase](#humancase)
- [kebabCase](#kebabcase)
- [lowerCaseArray](#lowercasearray)
- [pascalCase](#pascalcase)
- [snakeCase](#snakecase)
- [test](#test)



# Functions

## camelCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## capitalCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## capitaliseFirstLetter()

| Input      |    |    |
| ---------- | -- | -- |
| word | string |  |
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



## humanCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



## kebabCase()

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



## pascalCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |



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



## snakeCase()

| Input      |    |    |
| ---------- | -- | -- |
| text | string |  |
| **Output** |    |    |


# Interfaces

## 🔷 Casing

# Variables

## 📄 camelCase (exported const)

## 📄 capitalCase (exported const)

## 📄 capitaliseFirstLetter (exported const)

## 📄 convertCase (exported const)

## 📄 getDelimiter (exported const)

## 📄 humanCase (exported const)

## 📄 kebabCase (exported const)

## 📄 lowerCaseArray (exported const)

converts any string to an array of lowercase words

format ["word1","word2","word3"] from a string of any casing.


## 📄 pascalCase (exported const)

## 📄 snakeCase (exported const)

## 📄 test (exported const)

