# Comment util

comment-util (`OperationClassification` cjs)



# Api reference

## stripComment()

parses comments (single line, multiline and doc) and removes the comment syntax

- removes slashes
- removes multiline comment prefix
- removes multiline comment suffix
- removes doccomment stars

example input: `// comment`, output: `comment`

example input:
```

some
multiline
comment *~/
```
output:
```
some
multiline
comment
```


| Input      |    |    |
| ---------- | -- | -- |
| rawCommentString | string |  |
| **Output** | `String`   |    |



## 📄 stripComment (exported const)

parses comments (single line, multiline and doc) and removes the comment syntax

- removes slashes
- removes multiline comment prefix
- removes multiline comment suffix
- removes doccomment stars

example input: `// comment`, output: `comment`

example input:
```

some
multiline
comment *~/
```
output:
```
some
multiline
comment
```

# Internal

<details><summary>Show internal (10)</summary>
    
  # stripCommentEnd()

only strip slahes for single-line comments


| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## stripCommentStart()

| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## stripSlashes()

| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## stripStar()

| Input      |    |    |
| ---------- | -- | -- |
| trimmedLine | string |  |
| **Output** |    |    |



## trim()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |



## 📄 stripCommentEnd (exported const)

## 📄 stripCommentStart (exported const)

## 📄 stripSlashes (exported const)

## 📄 stripStar (exported const)

## 📄 trim (exported const)

  </details>

