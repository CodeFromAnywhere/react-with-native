# Augmented words

augmented-words (node operation)



# Outline

## Functions

- [getAugmentedWordObject](#getAugmentedWordObject)
- [getAugmentedWords](#getAugmentedWords)
- [getBundleAugmentedWords](#getBundleAugmentedWords)

## Variables

- [getAugmentedWordObject](#getaugmentedwordobject)
- [getAugmentedWords](#getaugmentedwords)
- [getBundleAugmentedWords](#getbundleaugmentedwords)



# Functions

## getAugmentedWordObject()

| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## getAugmentedWords()

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is a non-sensible-project, also bundles (`/[docs-path]`)


| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## getBundleAugmentedWords()

NB: should only be executed if this is not a sensible-project, as it might not have `BundleConfig` otherwise


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |


# Variables

## 📄 getAugmentedWordObject (exported const)

## 📄 getAugmentedWords (exported const)

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is a non-sensible-project, also bundles (`/[docs-path]`)


## 📄 getBundleAugmentedWords (exported const)

NB: should only be executed if this is not a sensible-project, as it might not have `BundleConfig` otherwise

