"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cleanupTimer=exports.getNewPerformance=void 0;
/**
 * TODO: This stores into memory. May cause memory leaks in the long run if not cleaned up!
 */
var timer={},getNewPerformance=function(e,r,t){var n=timer[r],o=Date.now();if(timer[r]=o,!t)return{label:e,durationMs:o-n}};
/**
Function that lets you measure performance inside any function with ease.

Usage:

Firstly, make a performance array, and a unique execution id, and start the measurement, like so:

```ts
import { generateUniqueId, getNewPerformance, PerformanceItem, cleanupTimer } from "measure-performance";

// at the start of your function

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

 */exports.getNewPerformance=getNewPerformance;
/**
 * Ensure you run this after finishing the measurement, or you'll run into memory leaks!
 */
var cleanupTimer=function(e){delete timer[e]};exports.cleanupTimer=cleanupTimer;
//# sourceMappingURL=measure-performance.js.map