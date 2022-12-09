# Frontmatter util

frontmatter-util (`OperationClassification` cjs)



# Api reference

## frontmatterParseToString()

Parses frontmatter object into a frontmatter string


| Input      |    |    |
| ---------- | -- | -- |
| frontmatter | `Frontmatter` |  |
| **Output** | `String`   |    |



## frontmatterToObject()

| Input      |    |    |
| ---------- | -- | -- |
| frontmatter | `Frontmatter` |  |,| schema | `SimplifiedSchema` |  |
| **Output** | {  }   |    |



## 📄 frontmatterParseToString (exported const)

Parses frontmatter object into a frontmatter string


## 📄 frontmatterToObject (exported const)

## objectToFrontmatter()

| Input      |    |    |
| ---------- | -- | -- |
| parse | `FrontmatterParse` |  |,| schema | `SimplifiedSchema` |  |
| **Output** | {  }   |    |



## 📄 objectToFrontmatter (exported const)

# Internal

<details><summary>Show internal (10)</summary>
    
  # getFrontmatterValueString()




| Input      |    |    |
| ---------- | -- | -- |
| value (optional) | {  } |  |
| **Output** | {  }   |    |



## parseFrontmatterString()

Parse a string as stored in frontmatter back to the original string


| Input      |    |    |
| ---------- | -- | -- |
| value | string |  |
| **Output** |    |    |



## quotedOrNot()

For now, simply quote a string if it contains commas

There are probably more edgecases that need to be fixed here


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** | `String`   |    |



## stringifyNewlines()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |



## 🔹 FrontmatterValue

## 📄 getFrontmatterValueString (exported const)

## 📄 parseFrontmatterString (exported const)

Parse a string as stored in frontmatter back to the original string


## 📄 quotedOrNot (exported const)

For now, simply quote a string if it contains commas

There are probably more edgecases that need to be fixed here


## 📄 stringifyNewlines (exported const)

## 📄 test (exported const)

  </details>

