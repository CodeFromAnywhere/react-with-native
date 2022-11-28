# Measure performance

measure-performance (`OperationClassification` cjs)



# Api reference

## 🔹 PerformanceItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| label  | string |  |
| durationMs  | number |  |



## generateUniqueId()

Bit annoying that we need to use all model-types here xD.

TODO: Let's extrahere this


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## getNewPerformance()

Function that lets you measure performance inside any function with ease.

Usage:

Firstly, make a performance array, and a unique execution id, and start the measurement, like so:

```ts
import { generateUniqueId, getNewPerformance, PerformanceItem, cleanupTimer } from "measure-performance";

at the start of your function

const executionId = generateUniqueId();
const performance: (PerformanceItem | undefined)[] = [];
getNewPerformance("start", executionId, true)
```


After that, push a new performance item at every step you want to measure. Provide your label describing what happened before this (the step you are measuring).


```ts
performance.push(getNewPerformance("your label", executionId));
```

At the end of your function, you can view your performance array by printing it on the console (or store it somewhere if you like)

Don't forget to run `cleanupTimer`, or you'll run into memory leaks!

```ts
cleanupTimer(executionId);
```


| Input      |    |    |
| ---------- | -- | -- |
| label | string |  |,| uniqueId | string |  |,| isNew (optional) | boolean |  |
| **Output** | { label: string, <br />durationMs: number, <br /> }   |    |



## 📄 generateUniqueId (exported const)

Bit annoying that we need to use all model-types here xD.

TODO: Let's extrahere this


## 📄 getNewPerformance (exported const)

Function that lets you measure performance inside any function with ease.

Usage:

Firstly, make a performance array, and a unique execution id, and start the measurement, like so:

```ts
import { generateUniqueId, getNewPerformance, PerformanceItem, cleanupTimer } from "measure-performance";

at the start of your function

const executionId = generateUniqueId();
const performance: (PerformanceItem | undefined)[] = [];
getNewPerformance("start", executionId, true)
```


After that, push a new performance item at every step you want to measure. Provide your label describing what happened before this (the step you are measuring).


```ts
performance.push(getNewPerformance("your label", executionId));
```

At the end of your function, you can view your performance array by printing it on the console (or store it somewhere if you like)

Don't forget to run `cleanupTimer`, or you'll run into memory leaks!

```ts
cleanupTimer(executionId);
```


## cleanupTimer()

Ensure you run this after finishing the measurement, or you'll run into memory leaks!


| Input      |    |    |
| ---------- | -- | -- |
| uniqueId | string |  |
| **Output** |    |    |



## 📄 cleanupTimer (exported const)

Ensure you run this after finishing the measurement, or you'll run into memory leaks!

