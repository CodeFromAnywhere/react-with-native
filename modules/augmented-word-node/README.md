# Augmented word node

augmented-word-node (`OperationClassification` node-cjs)



# Api reference

# Internal

<details><summary>Show internal (6)</summary>
    
  # getAugmentedWordObject()




| Input      |    |    |
| ---------- | -- | -- |
| manualProjectRoot (optional) | string |  |
| **Output** |    |    |



## getAugmentedWords()

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is an OS-project, also bundles (`/[docs-path]`)


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



## 📄 getAugmentedWordObject (exported const)

## 📄 getAugmentedWords (exported const)

Gets all augmented words of the entire project

- words with their definitions, if available (`/dictionary?word=x`)
- functions, interfaces, variables, operations (`/[operation-path]#name`)
- if this is an OS-project, also bundles (`/[docs-path]`)


## 📄 getBundleAugmentedWords (exported const)

NB: should only be executed if this is not a sensible-project, as it might not have `BundleConfig` otherwise
  </details>

