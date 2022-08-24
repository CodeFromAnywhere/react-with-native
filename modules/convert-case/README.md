# Convert case

convert-case (node operation)

Size: 209 LOC, 2258 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: makeTest

# Outline

## Functions

- [splitCasingDelimiters](#splitCasingDelimiters)
- [getDelimiter](#getDelimiter)
- [capitaliseFirstLetter](#capitaliseFirstLetter)
- [convertToTargetCasing](#convertToTargetCasing)
- [convertCase](#convertCase)
- [camelCase](#camelCase)
- [pascalCase](#pascalCase)
- [snakeCase](#snakeCase)
- [kebabCase](#kebabCase)
- [capitalCase](#capitalCase)
- [humanCase](#humanCase)
- [lowerCaseArray](#lowerCaseArray)
- [slugify](#slugify)



# Functions

## splitCasingDelimiters

Max. indexation depth: 4, 



### Returns: array

- null: string





### Arguments

#### word: string







## getDelimiter

Max. indexation depth: 1, 



### Returns: string(Enum: _ |   | - | ) 







### Arguments

#### target: string(Enum: camel | pascal | snake | kebab | capital | human) 







## capitaliseFirstLetter

Max. indexation depth: 1, 



## Returns: unknown

### Arguments

#### word: string







## convertToTargetCasing

Max. indexation depth: 2, 



## Returns: unknown

### Arguments

#### word: string







#### index: number







#### target: string(Enum: camel | pascal | snake | kebab | capital | human) 







## convertCase

Max. indexation depth: 3, 



## Returns: unknown

### Arguments

#### text: string



```md
NB: texts of more than a sentence are not supported
```




#### target: string(Enum: camel | pascal | snake | kebab | capital | human) 







## camelCase

Max. indexation depth: 0, 



## Returns: unknown

### Arguments

#### text: string







## pascalCase

Max. indexation depth: 0, 



## Returns: unknown

### Arguments

#### text: string







## snakeCase

Max. indexation depth: 0, 



## Returns: unknown

### Arguments

#### text: string







## kebabCase

Max. indexation depth: 0, 



## Returns: unknown

### Arguments

#### text: string







## capitalCase

Max. indexation depth: 0, 



## Returns: unknown

### Arguments

#### text: string







## humanCase

Max. indexation depth: 0, 



## Returns: unknown

### Arguments

#### text: string







## lowerCaseArray

Max. indexation depth: 1, 

converts any string to an array of lowercase words

format ["word1","word2","word3"] from a string of any casing.

## Returns: unknown

### Arguments

#### text: string







## slugify

Max. indexation depth: 2, 

/**
 * this function does the same as kebabCase but it also does some more transformation on top
 *
 * TODO: make the tranformations that are done here into smaller util functions and make a clean function that can be ran before running every casing conversion (maybe in a config)
 */

## Returns: unknown

### Arguments

#### string: string







