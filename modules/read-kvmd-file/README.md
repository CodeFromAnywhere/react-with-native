# Read kvmd file

read-kvmd-file (node operation)

Size: 24 LOC, 2125 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: canRead, fs, path, Path, KeyValueMarkdownParse, kvMdStringToJson

# Outline

## Functions

- [readKvmdFile](#readKvmdFile)



# Functions

## readKvmdFile

Max. indexation depth: 1, 

Reads and parses a markdown file

## Returns: unknown

### Arguments

#### filePath: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




