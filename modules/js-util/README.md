# Js util

js-util (js operation)



# Outline

## Functions

- [apply](#apply)
- [createEnum](#createEnum)
- [createMappedObject](#createMappedObject)
- [findLastIndex](#findLastIndex)
- [getObjectFromParamsString](#getObjectFromParamsString)
- [getObjectKeysArray](#getObjectKeysArray)
- [getParameterAtLocation](#getParameterAtLocation)
- [getSubsetFromObject](#getSubsetFromObject)
- [groupByKey](#groupByKey)
- [insertAt](#insertAt)
- [isAllTrue](#isAllTrue)
- [makeArray](#makeArray)
- [mapAsync](#mapAsync)
- [mapKeys](#mapKeys)
- [mapMany](#mapMany)
- [mapValuesSync](#mapValuesSync)
- [mergeObjectParameters](#mergeObjectParameters)
- [mergeObjectsArray](#mergeObjectsArray)
- [mergeObjects](#mergeObjects)
- [notEmpty](#notEmpty)
- [objectMapAsync](#objectMapAsync)
- [objectMapSync](#objectMapSync)
- [objectValuesMap](#objectValuesMap)
- [omitUndefinedValues](#omitUndefinedValues)
- [onlyUnique2](#onlyUnique2)
- [onlyUnique](#onlyUnique)
- [removeIndexFromArray](#removeIndexFromArray)
- [replaceLastOccurence](#replaceLastOccurence)
- [reverseString](#reverseString)
- [sumAllKeys](#sumAllKeys)
- [sumObjectParameters](#sumObjectParameters)
- [sum](#sum)
- [takeFirst](#takeFirst)
- [trimSlashes](#trimSlashes)

## Variables

- [apply](#apply)
- [createEnum](#createenum)
- [createMappedObject](#createmappedobject)
- [findLastIndex](#findlastindex)
- [getObjectFromParamsString](#getobjectfromparamsstring)
- [getObjectKeysArray](#getobjectkeysarray)
- [getParameterAtLocation](#getparameteratlocation)
- [getSubsetFromObject](#getsubsetfromobject)
- [groupByKey](#groupbykey)
- [insertAt](#insertat)
- [isAllTrue](#isalltrue)
- [makeArray](#makearray)
- [mapAsync](#mapasync)
- [mapKeys](#mapkeys)
- [mapMany](#mapmany)
- [mapValuesSync](#mapvaluessync)
- [mergeObjectParameters](#mergeobjectparameters)
- [mergeObjectsArray](#mergeobjectsarray)
- [mergeObjects](#mergeobjects)
- [objectMapAsync](#objectmapasync)
- [objectMapSync](#objectmapsync)
- [objectValuesMap](#objectvaluesmap)
- [omitUndefinedValues](#omitundefinedvalues)
- [onlyUnique2](#onlyunique2)
- [removeIndexFromArray](#removeindexfromarray)
- [replaceLastOccurence](#replacelastoccurence)
- [reverseString](#reversestring)
- [sumAllKeys](#sumallkeys)
- [sumObjectParameters](#sumobjectparameters)
- [sum](#sum)
- [takeFirst](#takefirst)
- [trimSlashes](#trimslashes)



# Functions

## apply()

sum([1, 2, 3]);

function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## createEnum()

creates an enum object from a readonly const array so you don't have to
------
const taskNames = ["a","b","c"] as const;
type TaskNames = typeof taskNames[number];
const enummm = createEnum(taskNames);
(value of enummm: { a: "a", b: "b", c: "c" })


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## createMappedObject()

Creates a `MappedObject` of an array of any type. `MappedObject`s are great for increasing efficiency to get an item from an array. Especially useful when finds are needed on a specific key match for huge arrays. Instead of finding on the array you can simply get the right property from this object.

NB: Don't use this inside of render functions, it's a very slow function, the whole idea is that this makes it faster, so just do it once!


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## findLastIndex()

finds the last index of an array where a certain filter holds true


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getObjectFromParamsString()

useful for cli's that only take strings. This creates an object from a string

input: "x:a, y:b, z:c"
output: { x: "a", y: "b", z: "c" }

TODO: would be nice if we can validate this string immediately using a JSON SCHEMA


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getObjectKeysArray()

Handy function to get the keys of an object, but typed.

NB: The only difference from Object.keys is that this returns the keys in a typesafe manner


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## getParameterAtLocation()

utility function to get a parameter inside of a nested object


| Input      |    |    |
| ---------- | -- | -- |
| object | {  } |  |,| location | string[] |  |
| **Output** |    |    |



## getSubsetFromObject()

takes an object and a subset of its keys and returns a subset of that object

input: { x: "a", y: "b", z: "c" } and ["x"]

output: { x: "a" }


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## groupByKey()

key should be of type string!

input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
groupByKey(input, "path")
ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## insertAt()

Insert an array or item inside of an array before a certain index

Example:

```ts

const testArray = [1, 2, 3, 4, 5];
const result = insertAt(testArray, [99, 100], 2);
console.log({ testArray, result });

```


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## isAllTrue()

checks if all items in an array are true


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## makeArray()

if something is not an array, returns it as the first element of an array

if the input is undefined, an empty array will be returned.

NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## mapAsync()

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


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## mapKeys()

maps over all keys in an object and replaces them using a mapfn


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## mapMany()

Lets you map over any array with a async function while setting a max. concurrency

Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## mapValuesSync()

maps over all values in an object and replaces them using a mapfn

sync


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## mergeObjectParameters()

merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.

In short: merges two objects, for every parameter, use the default as a fallback

DEPRECATED: in favor of mergeObjects


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## mergeObjectsArray()

TODO: find a way to return the correct type interface


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## mergeObjects()

merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.

Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely

Please note that you can provide partial objects as well, as long as you are sure that the final object is full, the type interface is correct.

Please note that if a latter object has a key which holds "undefined", it will NOT overwrite it. Anything else WILL


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## notEmpty()

/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## objectMapAsync()

Map an object asynchronously and return the same object with the mapped result in its values

Example usage:


```ts

const srcFileContentObject = {
"index.ts": indexString,
"public-local.ts": publicLocalTypescriptFileString,
"public.ts": publicTypescriptFileString,
};

const srcFileWriteSuccessObject = await objectMapAsync(srcFileContentObject, async (operationRelativeTypescriptFilePath,content)=>{

try {
await fs.writeFile(
path.join(operationBasePath, "src", operationRelativeTypescriptFilePath),
content,
"utf8"
);

return true;

} catch {
return false;
}

});

```


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## objectMapSync()

maps over all values in an object and replaces them using a mapfn

Example usage:

```ts

const result = objectMapSync({ hello: "world", isTrue: true }, (key,value) => {
return `${value}123`;
});
```


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## objectValuesMap()

not sure if this is the best way, but it does save some lines of code!

maps over an object's values with a map function

DEPRECATED in favour of objectMapSync and objectMapAsync


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## omitUndefinedValues()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## onlyUnique2()

function that returns a filter function that can be used as a filter for any array. removes duplicates.

optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## onlyUnique()

/**
 * DEPRECATED: should refactor everything to use onlyUnique2 and call it onlyUnique again
 *
 * to be used as a filter. removes duplicates
 */


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## removeIndexFromArray()

removes an index from an array

example:

```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## replaceLastOccurence()

Replaces the last occerence of something in a string by something else

Example:

```ts
const result = replaceLastOccurence("theBestSlugSlugSlug", "Slug", "Slack");
console.log(result); // returns theBestSlugSlugSlack
```

NB: this is not the most efficient method, as it reverses the string by making it an array, twice. It can probably be done more efficiently by using `String.lastIndexOf`


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |,| searchValue | string |  |,| replaceValue | string |  |
| **Output** | `String`   |    |



## reverseString()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** | `String`   |    |



## sumAllKeys()

sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## sumObjectParameters()

sums all parameters in two objects together


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## sum()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## takeFirst()

takes any type T or an array of T and returns T or the first of the array (which is T)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## trimSlashes()

Trims a slash on both sides in any path


| Input      |    |    |
| ---------- | -- | -- |
| absoluteOrRelativePath | string |  |
| **Output** |    |    |


# Variables

## 📄 apply (exported const)

function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.


## 📄 createEnum (exported const)

creates an enum object from a readonly const array so you don't have to
------
const taskNames = ["a","b","c"] as const;
type TaskNames = typeof taskNames[number];
const enummm = createEnum(taskNames);
(value of enummm: { a: "a", b: "b", c: "c" })


## 📄 createMappedObject (exported const)

Creates a `MappedObject` of an array of any type. `MappedObject`s are great for increasing efficiency to get an item from an array. Especially useful when finds are needed on a specific key match for huge arrays. Instead of finding on the array you can simply get the right property from this object.

NB: Don't use this inside of render functions, it's a very slow function, the whole idea is that this makes it faster, so just do it once!


## 📄 findLastIndex (exported const)

finds the last index of an array where a certain filter holds true


## 📄 getObjectFromParamsString (exported const)

useful for cli's that only take strings. This creates an object from a string

input: "x:a, y:b, z:c"
output: { x: "a", y: "b", z: "c" }

TODO: would be nice if we can validate this string immediately using a JSON SCHEMA


## 📄 getObjectKeysArray (exported const)

Handy function to get the keys of an object, but typed.

NB: The only difference from Object.keys is that this returns the keys in a typesafe manner


## 📄 getParameterAtLocation (exported const)

utility function to get a parameter inside of a nested object


## 📄 getSubsetFromObject (exported const)

takes an object and a subset of its keys and returns a subset of that object

input: { x: "a", y: "b", z: "c" } and ["x"]

output: { x: "a" }


## 📄 groupByKey (exported const)

key should be of type string!

input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
groupByKey(input, "path")
ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}


## 📄 insertAt (exported const)

Insert an array or item inside of an array before a certain index

Example:

```ts

const testArray = [1, 2, 3, 4, 5];
const result = insertAt(testArray, [99, 100], 2);
console.log({ testArray, result });

```


## 📄 isAllTrue (exported const)

checks if all items in an array are true


## 📄 makeArray (exported const)

if something is not an array, returns it as the first element of an array

if the input is undefined, an empty array will be returned.

NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.


## 📄 mapAsync (exported const)

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


## 📄 mapKeys (exported const)

maps over all keys in an object and replaces them using a mapfn


## 📄 mapMany (exported const)

Lets you map over any array with a async function while setting a max. concurrency

Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70


## 📄 mapValuesSync (exported const)

maps over all values in an object and replaces them using a mapfn

sync


## 📄 mergeObjectParameters (exported const)

merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.

In short: merges two objects, for every parameter, use the default as a fallback

DEPRECATED: in favor of mergeObjects


## 📄 mergeObjectsArray (exported const)

TODO: find a way to return the correct type interface


## 📄 mergeObjects (exported const)

merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.

Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely

Please note that you can provide partial objects as well, as long as you are sure that the final object is full, the type interface is correct.

Please note that if a latter object has a key which holds "undefined", it will NOT overwrite it. Anything else WILL


## 📄 objectMapAsync (exported const)

Map an object asynchronously and return the same object with the mapped result in its values

Example usage:


```ts

const srcFileContentObject = {
"index.ts": indexString,
"public-local.ts": publicLocalTypescriptFileString,
"public.ts": publicTypescriptFileString,
};

const srcFileWriteSuccessObject = await objectMapAsync(srcFileContentObject, async (operationRelativeTypescriptFilePath,content)=>{

try {
await fs.writeFile(
path.join(operationBasePath, "src", operationRelativeTypescriptFilePath),
content,
"utf8"
);

return true;

} catch {
return false;
}

});

```


## 📄 objectMapSync (exported const)

maps over all values in an object and replaces them using a mapfn

Example usage:

```ts

const result = objectMapSync({ hello: "world", isTrue: true }, (key,value) => {
return `${value}123`;
});
```


## 📄 objectValuesMap (exported const)

not sure if this is the best way, but it does save some lines of code!

maps over an object's values with a map function

DEPRECATED in favour of objectMapSync and objectMapAsync


## 📄 omitUndefinedValues (exported const)

## 📄 onlyUnique2 (exported const)

function that returns a filter function that can be used as a filter for any array. removes duplicates.

optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well


## 📄 removeIndexFromArray (exported const)

removes an index from an array

example:

```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```


## 📄 replaceLastOccurence (exported const)

Replaces the last occerence of something in a string by something else

Example:

```ts
const result = replaceLastOccurence("theBestSlugSlugSlug", "Slug", "Slack");
console.log(result); // returns theBestSlugSlugSlack
```

NB: this is not the most efficient method, as it reverses the string by making it an array, twice. It can probably be done more efficiently by using `String.lastIndexOf`


## 📄 reverseString (exported const)

## 📄 sumAllKeys (exported const)

sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined


## 📄 sumObjectParameters (exported const)

sums all parameters in two objects together


## 📄 sum (exported const)

## 📄 takeFirst (exported const)

takes any type T or an array of T and returns T or the first of the array (which is T)


## 📄 trimSlashes (exported const)

Trims a slash on both sides in any path

