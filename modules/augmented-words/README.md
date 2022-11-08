# Augmented words

augmented-words (node operation)



# Api reference

## getAugmentedWordObject()

| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## 📄 getAugmentedWordObject (exported const)

# Internal

<details><summary>Show internal (4)</summary>
  
  # getAugmentedWords()

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



## 📄 getAugmentedWords (exported const)

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is a non-sensible-project, also bundles (`/[docs-path]`)


## 📄 getBundleAugmentedWords (exported const)

NB: should only be executed if this is not a sensible-project, as it might not have `BundleConfig` otherwise
  </details>

