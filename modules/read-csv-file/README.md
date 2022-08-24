# Read csv file

read-csv-file (node operation)

Size: 65 LOC, 2046 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: canRead, fs, Path, canReadSync, path, makeTest, tryParseCsv, CsvItemType

# Outline

## Functions

- [readCsvFile](#readCsvFile)
- [readCsvFileSync](#readCsvFileSync)



# Functions

## readCsvFile

Max. indexation depth: 1, 

Reads and parses CSV file

specify a generic of what type of item the file contains an array of

## Returns: unknown

### Arguments

#### filePath (optional): string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




## readCsvFileSync

Max. indexation depth: 1, 

Reads and parses CSV file

specify a generic of what type of item the file contains an array of

### Returns: array

- null: object





### Arguments

#### filePath: string



```md
unlike PathLike, this is only a string

For now, we don't have a clear convention whether or not this string should be absolute or anything.
```




