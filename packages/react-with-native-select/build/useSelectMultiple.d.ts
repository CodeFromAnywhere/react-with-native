import { SelectMultipleInputProps } from "./SelectMultiple";
import { Item } from "./types";
/**
Create a value selector in a single line of code, including its state!
 */
export declare const useSelectMultiple: <T extends unknown>(items?: Item<T | null>[] | undefined, initialValue?: Item<T | null>[] | undefined, withValue?: ((value: Item<T | null>[]) => void) | undefined, config?: Omit<SelectMultipleInputProps<T>, "value" | "options" | "onChange"> | undefined) => [Component: () => JSX.Element, value: Item<T | null>[], setValue: (value: Item<T | null>[]) => void];
//# sourceMappingURL=useSelectMultiple.d.ts.map