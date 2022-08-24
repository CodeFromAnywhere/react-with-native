# Make test

make-test (node operation)

Size: 64 LOC, 2120 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [isResultOfInterface](#isResultOfInterface)
- [makeTest](#makeTest)



# Functions

## isResultOfInterface

Max. indexation depth: 1, 

TODO: need validate-json-schema. also this can be its own little package, as it can be used in many other places

not sure if this should be part of make-test at all, because we want operations to be able to operate independently without the os, right? so then it won't work because you don't always have indexes...

### Returns: boolean







## makeTest

Max. indexation depth: 6, 

create a test that is testable with `runAllTests`...

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



