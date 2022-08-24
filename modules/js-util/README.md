# Js util

js-util (node operation)

Size: 343 LOC, 2285 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [apply](#apply)
- [createEnum](#createEnum)
- [groupByKey](#groupByKey)
- [isAllTrue](#isAllTrue)
- [mapKeys](#mapKeys)
- [mapValues](#mapValues)
- [mapValuesSync](#mapValuesSync)
- [onlyUnique2](#onlyUnique2)
- [makeArray](#makeArray)
- [takeFirst](#takeFirst)
- [getSubsetFromObject](#getSubsetFromObject)
- [getObjectFromParamsString](#getObjectFromParamsString)
- [sumObjectParameters](#sumObjectParameters)
- [sumAllKeys](#sumAllKeys)
- [mergeObjectsArray](#mergeObjectsArray)
- [mergeObjectParameters](#mergeObjectParameters)
- [onlyUnique](#onlyUnique)
- [objectValuesMap](#objectValuesMap)
- [notEmpty](#notEmpty)
- [mapAsync](#mapAsync)



# Functions

## apply

Max. indexation depth: 2, 

function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.

## Returns: unknown

## createEnum

Max. indexation depth: 2, 

creates an enum object from a readonly const array so you don't have to
------
const taskNames = ["a","b","c"] as const;
type TaskNames = typeof taskNames[number];
const enummm = createEnum(taskNames);
(value of enummm: { a: "a", b: "b", c: "c" })

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## groupByKey

Max. indexation depth: 3, 

key should be of type string!

input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
groupByKey(input, "path")
ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}

## Returns: unknown

## isAllTrue

Max. indexation depth: 1, 

checks if all items in an array are true

### Returns: boolean







## mapKeys

Max. indexation depth: 4, 

maps over all keys in an object and replaces them using a mapfn

## Returns: unknown

## mapValues

Max. indexation depth: 3, 

maps over all values in an object and replaces them using a mapfn

NB: TODO: the current type interface leads this object to be detyped if it had a clear type. I hope I can find a way to solve this!

## Returns: unknown

## mapValuesSync

Max. indexation depth: 2, 

maps over all values in an object and replaces them using a mapfn

sync

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## onlyUnique2

Max. indexation depth: 3, 

function that returns a filter function that can be used as a filter for any array. removes duplicates.

optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## makeArray

Max. indexation depth: 5, 

if something is not an array, returns it as the first element of an array

if the input is undefined, an empty array will be returned.

NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.

## Returns: unknown

## takeFirst

Max. indexation depth: 1, 

takes any type T or an array of T and returns T or the first of the array (which is T)

## Returns: unknown

## getSubsetFromObject

Max. indexation depth: 2, 

takes an object and a subset of its keys and returns a subset of that object

input: { x: "a", y: "b", z: "c" } and ["x"]

output: { x: "a" }

## Returns: unknown

## getObjectFromParamsString

Max. indexation depth: 4, 

useful for cli's that only take strings. This creates an object from a string

input: "x:a, y:b, z:c"
output: { x: "a", y: "b", z: "c" }

TODO: would be nice if we can validate this string immediately using a JSON SCHEMA

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## sumObjectParameters

Max. indexation depth: 3, 

sums all parameters in two objects together

## Returns: unknown

## sumAllKeys

Max. indexation depth: 6, 

sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined

## Returns: unknown

## mergeObjectsArray

Max. indexation depth: 2, 



## Returns: unknown

## mergeObjectParameters

Max. indexation depth: 2, 

merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.

In short: merges two objects, for every parameter, use the default as a fallback

NB: could be useful to rewrite this later if I need multiple levels of defaults... The only provided argument can just be a T[], which reduces that by using deeper and deeper fallbacks. For example, VSCode does this with settings: you have workspace settings, user settings, and global settings

## Returns: unknown

## onlyUnique

Max. indexation depth: 1, 

/**
 * DEPRECATED: should refactor everything to use onlyUnique2 and call it onlyUnique again
 *
 * to be used as a filter. removes duplicates
 */

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## objectValuesMap

Max. indexation depth: 2, 

/**
 * not sure if this is the best way, but it does save some lines of code!
 *
 * maps over an object's values with a map function
 */

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## notEmpty

Max. indexation depth: 1, 

/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */

### Returns: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## mapAsync

Max. indexation depth: 1, 

mapAsync makes it possible to map over an array async without having to do the promise.all afterwards

It saves a lot of lines of code, and makes it more readable
Example usage:


```ts

const myNumbers = [1, 2, 3, 4, 5];

const doubleAsync = (num) => Promise.resolve(num + num);
const sqrtAsync = (sum) => Promise.resolve(sum * sum);
const halfAsync = (time) => Promise.resolve(time / 2);

const doubleSqrtHalfs = await mapAsync(myNumbers, doubleAsync)
.then((sums) => mapAsync(sums, sqrtAsync))
.then((times) => mapAsync(times, halfAsync));
```

## Returns: unknown

