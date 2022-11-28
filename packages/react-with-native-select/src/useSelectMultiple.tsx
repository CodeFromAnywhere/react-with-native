import { useState } from "react";
import {
  SelectMultipleInput,
  SelectMultipleInputProps,
} from "./SelectMultiple";
import { Item } from "./types";

/**
Create a value selector in a single line of code, including its state!
 */
export const useSelectMultiple = <T extends unknown>(
  items?: Item<T | null>[],
  initialValue?: Item<T | null>[],
  /**
   * Optionally you can do other things with the value as well, like setting it to a global store
   */
  withValue?: (value: Item<T | null>[]) => void,
  config?: Omit<SelectMultipleInputProps<T>, "onChange" | "value" | "options">
): [
  Component: () => JSX.Element,
  value: Item<T | null>[],
  setValue: (value: Item<T | null>[]) => void
] => {
  const realItems = items || [];
  const [value, setValue] = useState<Item<T | null>[]>(initialValue || []);

  const realOnChange = (v: Item<T | null>[]) => {
    setValue(v);

    if (v) {
      withValue?.(v);
    }
  };

  const Component = () => (
    <SelectMultipleInput
      {...config}
      onChange={realOnChange}
      value={value}
      options={realItems}
    />
  );
  return [Component, value, realOnChange];
};
