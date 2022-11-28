import { PerformanceItem } from "./PerformanceItem";
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

 */
export declare const getNewPerformance: (label: string, uniqueId: string, isNew?: boolean) => PerformanceItem | undefined;
export declare const cleanupTimer: (uniqueId: string) => void;
//# sourceMappingURL=getNewPerformance.d.ts.map