"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cleanupTimer=exports.getNewPerformance=void 0;
/**
 * TODO: This stores into memory. May cause memory leaks in the long run if not cleaned up!
 */
var timer={},getNewPerformance=function(e,r,t){var n=timer[r],o=Date.now();if(timer[r]=o,!t)return{label:e,durationMs:o-n}};
/**
Function that lets you measure performance inside any function with ease.

Usage:

Firstly, make a performance array, and a unique execution id, like so:

```ts
const executionId = generateUniqueId();
const performance: (PerformanceItem | undefined)[] = [];
```

Then, at the start of the function, add this:

```ts
performance.push(getNewPerformance("start", executionId, true));
```

After that, push a new performance item at every step you want to measure. Provide your label describing what happened before this (the step you are measuring).


```ts
performance.push(getNewPerformance("your label", executionId));
```

At the end of your function, print (or store) your performance array.

 */exports.getNewPerformance=getNewPerformance;var cleanupTimer=function(e){delete timer[e]};exports.cleanupTimer=cleanupTimer;
//# sourceMappingURL=getNewPerformance.js.map