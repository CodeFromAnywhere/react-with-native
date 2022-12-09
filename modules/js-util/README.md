# Js util

js-util (`OperationClassification` cjs)



# Api reference

## notEmpty()

/**
 * Removes empty values (null or undefined) from your arrays in a type-safe way
 */


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## mergeObjectsArray()

TODO: find a way to return the correct type interface


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 mergeObjectsArray (exported const)

TODO: find a way to return the correct type interface


## makeArray()

if something is not an array, returns it as the first element of an array

if the input is undefined, an empty array will be returned.

NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 makeArray (exported const)

if something is not an array, returns it as the first element of an array

if the input is undefined, an empty array will be returned.

NB: TODO: find out the workings of the array constructor (`Array("any value")`), because maybe it does something very similar. No need to have a dependency then if it's similar.


## onlyUnique2()

function that returns a filter function that can be used as a filter for any array. removes duplicates.

optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 onlyUnique2 (exported const)

function that returns a filter function that can be used as a filter for any array. removes duplicates.

optionally takes a compare function that should return a "true" if two instances are equal. if you use this function, make sure to pass a generic of the type the items will have, in order to make this equality function type safe as well


## destructureOptionalObject()

Easy way to destructure your object even if it may be `undefined` or `null`.

Have you ever had a function with an optional configuration parameter, but you want to access all its properties? It's a hassle. This function lets you turn `doSomething` into `doSomethingBetter`. Check the code.

```ts


const doSomething = (config?: { a: string; b: boolean; c: number }) => {
const a = config?.a;
const b = config?.b;
const c = config?.c;

return "something" + a + b + c;
};

const doSomethingBetter = (config?: { a: string; b: boolean; c: number }) => {
const { a, b, c } = destructureOptionalObject(config);
return "something" + a + b + c;
};

```

<!-- It would be great if I could also make examples that not only refer to input/output combos but maybe another function that showcases it's usage... -->


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 destructureOptionalObject (exported const)

Easy way to destructure your object even if it may be `undefined` or `null`.

Have you ever had a function with an optional configuration parameter, but you want to access all its properties? It's a hassle. This function lets you turn `doSomething` into `doSomethingBetter`. Check the code.

```ts


const doSomething = (config?: { a: string; b: boolean; c: number }) => {
const a = config?.a;
const b = config?.b;
const c = config?.c;

return "something" + a + b + c;
};

const doSomethingBetter = (config?: { a: string; b: boolean; c: number }) => {
const { a, b, c } = destructureOptionalObject(config);
return "something" + a + b + c;
};

```

<!-- It would be great if I could also make examples that not only refer to input/output combos but maybe another function that showcases it's usage... -->


## takeFirst()

takes any type T or an array of T and returns T or the first of the array (which is T)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 takeFirst (exported const)

takes any type T or an array of T and returns T or the first of the array (which is T)


## mergeNestedObject()

type X = IsOptional<string|undefined>;

Merges an object into an object, ensuring typesafety. The second object needs to be a recursive subset of the first.

LIMITATION: When you set a value to undefined, ensure that it is allowed by the original object, we are not checking for this!

TODO: is it possible to remove this type unsafety? It would be nice to only be able to set it to undefined if that is allowed by T. Not sure if it's possible to check the difference bewteen a key not being present and a key being present and the value being undefined... Look it up!

Example:


```ts

const testObject: {
a: string;
b: number;
c: { x: string; y: number; z: { a: string; b: number; c: { x: "wow" } } };
} = {
a: "lol",
b: 8,
c: { x: "lol", y: 88, z: { a: "wow", b: 888, c: { x: "wow" } } },
};

const result = mergeNestedObject(testObject, {
c: { z: { c: { x: undefined }, b: 999 } },
});

console.dir({ testObject, result }, { depth: 10 });

result will be: { a: 'lol', b: 8, c: { x: 'lol', y: 88, z: { a: 'wow', b: 999, c: { x: undefined } } }
}

```

It's great, because you can't make any type mistakes, and your code becomes much shorter for altering an object


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 mergeNestedObject (exported const)

Merges an object into an object, ensuring typesafety. The second object needs to be a recursive subset of the first.

LIMITATION: When you set a value to undefined, ensure that it is allowed by the original object, we are not checking for this!

TODO: is it possible to remove this type unsafety? It would be nice to only be able to set it to undefined if that is allowed by T. Not sure if it's possible to check the difference bewteen a key not being present and a key being present and the value being undefined... Look it up!

Example:


```ts

const testObject: {
a: string;
b: number;
c: { x: string; y: number; z: { a: string; b: number; c: { x: "wow" } } };
} = {
a: "lol",
b: 8,
c: { x: "lol", y: 88, z: { a: "wow", b: 888, c: { x: "wow" } } },
};

const result = mergeNestedObject(testObject, {
c: { z: { c: { x: undefined }, b: 999 } },
});

console.dir({ testObject, result }, { depth: 10 });

result will be: { a: 'lol', b: 8, c: { x: 'lol', y: 88, z: { a: 'wow', b: 999, c: { x: undefined } } }
}

```

It's great, because you can't make any type mistakes, and your code becomes much shorter for altering an object


## getSubsetFromObject()

takes an object and a subset of its keys and returns a subset of that object

input: { x: "a", y: "b", z: "c" } and ["x"]

output: { x: "a" }


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## omitUndefinedValues()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 getSubsetFromObject (exported const)

takes an object and a subset of its keys and returns a subset of that object

input: { x: "a", y: "b", z: "c" } and ["x"]

output: { x: "a" }


## 📄 omitUndefinedValues (exported const)

## isAllTrue()

checks if all items in an array are true


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



## trimSlashes()

Trims a slash on both sides in any path


| Input      |    |    |
| ---------- | -- | -- |
| absoluteOrRelativePath | string |  |
| **Output** |    |    |



## 📄 isAllTrue (exported const)

checks if all items in an array are true


## 📄 removeIndexFromArray (exported const)

removes an index from an array

example:

```ts
const exampleArray = ["a", "b", "c", "d", "e"];
console.log(removeIndexFromArray(exampleArray, 2)); //c should be removed
```


## 📄 trimSlashes (exported const)

Trims a slash on both sides in any path


## mapMany()

Lets you map over any array with a async function while setting a max. concurrency

Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## pickRandomArrayItem()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## sum()

| Input      |    |    |
| ---------- | -- | -- |
| a | number |  |,| b | number |  |
| **Output** |    |    |



## 📄 mapMany (exported const)

Lets you map over any array with a async function while setting a max. concurrency

Taken and improved from https://codeburst.io/async-map-with-limited-parallelism-in-node-js-2b91bd47af70


## 📄 pickRandomArrayItem (exported const)

## 📄 sum (exported const)

## createMappedObject()

Creates a `MappedObject` of an array of any type. `MappedObject`s are great for increasing efficiency to get an item from an array. Especially useful when finds are needed on a specific key match for huge arrays. Instead of finding on the array you can simply get the right property from this object.

NB: Don't use this inside of render functions, it's a very slow function, the whole idea is that this makes it faster, so just do it once!


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



## removeOptionalKeysFromObject()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 createMappedObject (exported const)

Creates a `MappedObject` of an array of any type. `MappedObject`s are great for increasing efficiency to get an item from an array. Especially useful when finds are needed on a specific key match for huge arrays. Instead of finding on the array you can simply get the right property from this object.

NB: Don't use this inside of render functions, it's a very slow function, the whole idea is that this makes it faster, so just do it once!


## 📄 getObjectKeysArray (exported const)

Handy function to get the keys of an object, but typed.

NB: The only difference from Object.keys is that this returns the keys in a typesafe manner


## 📄 insertAt (exported const)

Insert an array or item inside of an array before a certain index

Example:

```ts

const testArray = [1, 2, 3, 4, 5];
const result = insertAt(testArray, [99, 100], 2);
console.log({ testArray, result });

```


## 📄 removeOptionalKeysFromObject (exported const)

## apply()

sum([1, 2, 3]);

function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



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



## getParameterAtLocation()

utility function to get a parameter inside of a nested object


| Input      |    |    |
| ---------- | -- | -- |
| object | {  } |  |,| location | string[] |  |
| **Output** |    |    |



## hasAllLetters()

all letters of b can be found in a, in order (but other letters in between are allowed)


| Input      |    |    |
| ---------- | -- | -- |
| a | string |  |,| b | string |  |
| **Output** | {  }   |    |



## mapValuesSync()

maps over all values in an object and replaces them using a mapfn

sync


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



## noEmptyString()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | string   |    |



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



## putIndexAtIndex()

Takes an item from an index of an array and put it somewhere at another index


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## removeOptionalKeysFromObjectStrings()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



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



## sumAllKeys()

sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 📄 apply (exported const)

function that takes an array of functions and applies them one by one, on the value or the result of the previous function. Only possible if the type of the value stays the same.


## 📄 findLastIndex (exported const)

finds the last index of an array where a certain filter holds true


## 📄 getObjectFromParamsString (exported const)

useful for cli's that only take strings. This creates an object from a string

input: "x:a, y:b, z:c"
output: { x: "a", y: "b", z: "c" }

TODO: would be nice if we can validate this string immediately using a JSON SCHEMA


## 📄 getParameterAtLocation (exported const)

utility function to get a parameter inside of a nested object


## 📄 hasAllLetters (exported const)

all letters of b can be found in a, in order (but other letters in between are allowed)


## 📄 mapValuesSync (exported const)

maps over all values in an object and replaces them using a mapfn

sync


## 📄 mergeObjects (exported const)

merges multiple objects, overwriting the previous one with the next. Can be useful for configs where there are multiple layers of configs that overwrite each other.

Please note though, that only the root keys of the object are overwriting each other, so if there is nested datastructures, the last one with a specific key overwrites the previous ones copletely

Please note that you can provide partial objects as well, as long as you are sure that the final object is full, the type interface is correct.

Please note that if a latter object has a key which holds "undefined", it will NOT overwrite it. Anything else WILL


## 📄 noEmptyString (exported const)

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


## 📄 putIndexAtIndex (exported const)

Takes an item from an index of an array and put it somewhere at another index


## 📄 removeOptionalKeysFromObjectStrings (exported const)

## 📄 replaceLastOccurence (exported const)

Replaces the last occerence of something in a string by something else

Example:

```ts
const result = replaceLastOccurence("theBestSlugSlugSlug", "Slug", "Slack");
console.log(result); // returns theBestSlugSlugSlack
```

NB: this is not the most efficient method, as it reverses the string by making it an array, twice. It can probably be done more efficiently by using `String.lastIndexOf`


## 📄 sumAllKeys (exported const)

sums all keys of an array of objects, assuming the objects have the same datastructure and assuming the values contain either numbers or undefined

# Tests

<details><summary>Show test information(6)</summary>
    
  # concatenate()




| Input      |    |    |
| ---------- | -- | -- |
| letter | string |  |
| **Output** |    |    |



## main()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## mergeNestedObjectTest()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 concatenate (unexported const)

## 📄 main (unexported const)

## 📄 mergeNestedObjectTest (unexported const)

  </details>

# Internal

<details><summary>Show internal (17)</summary>
    
  # createEnum()

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



## groupByKey()

key should be of type string!

input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
groupByKey(input, "path")
ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}


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



## mergeObjectParameters()

merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.

In short: merges two objects, for every parameter, use the default as a fallback

DEPRECATED: in favor of mergeObjects


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## objectValuesMap()

not sure if this is the best way, but it does save some lines of code!

maps over an object's values with a map function

DEPRECATED in favour of objectMapSync and objectMapAsync


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## reverseString()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** | `String`   |    |



## sumObjectParameters()

sums all parameters in two objects together


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 🔹 O

## 📄 createEnum (exported const)

creates an enum object from a readonly const array so you don't have to
------
const taskNames = ["a","b","c"] as const;
type TaskNames = typeof taskNames[number];
const enummm = createEnum(taskNames);
(value of enummm: { a: "a", b: "b", c: "c" })


## 📄 groupByKey (exported const)

key should be of type string!

input = [{path:"xyz"},{path:"xyz"},{path:"abc"}]
groupByKey(input, "path")
ouput: { xyz: [{path:"xyz"},{path:"xyz"}], abc: [{path:"abc"}]}


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


## 📄 mergeObjectParameters (exported const)

merges two objects: a config object and a defaults object. If the config object has something missing, a default will be used from the defaults object.

In short: merges two objects, for every parameter, use the default as a fallback

DEPRECATED: in favor of mergeObjects


## 📄 objectValuesMap (exported const)

not sure if this is the best way, but it does save some lines of code!

maps over an object's values with a map function

DEPRECATED in favour of objectMapSync and objectMapAsync


## 📄 reverseString (exported const)

## 📄 sumObjectParameters (exported const)

sums all parameters in two objects together
  </details>

