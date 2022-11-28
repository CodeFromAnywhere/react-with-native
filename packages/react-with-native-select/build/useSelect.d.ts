import { Item } from "./types";
/**
Create a value selector in a single line of code, including its state!

# **Usage**

```ts
const [SelectView, view, setView] = useSelect(views);
```
 */
export declare const useSelect: <T extends unknown>(items?: Item<T>[] | undefined, initialValue?: Item<T> | undefined, withValue?: ((value: Item<T> | undefined) => void) | undefined) => [Component: () => JSX.Element, value: Item<T> | null, setValue: (value: Item<T> | null) => void];
//# sourceMappingURL=useSelect.d.ts.map