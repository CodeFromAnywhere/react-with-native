import { useState } from "react";
import { Select } from "./Select";
import { Item } from "./types";

/**
Create a value selector in a single line of code, including its state!

# **Usage**

```ts
const [SelectView, view, setView] = useSelect(views);
```
 */
export const useSelect = <T extends unknown>(
  items?: Item<T>[],
  initialValue?: Item<T>,
  /**
   * Optionally you can do other things with the value as well, like setting it to a global store
   */
  withValue?: (value: Item<T> | undefined) => void
): [
  Component: () => JSX.Element,
  value: Item<T> | null,
  setValue: (value: Item<T> | null) => void
] => {
  const realItems = items || [];
  const [value, setValue] = useState<Item<T> | null>(initialValue || null);

  const Component = () => (
    <Select
      className="bg-transparent"
      title="Test"
      onChange={(v) => {
        setValue(v);

        if (v) {
          withValue?.(v);
        }
      }}
      value={value}
      options={realItems}
    />
  );
  return [Component, value, setValue];
};
