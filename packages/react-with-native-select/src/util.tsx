import { Item } from "./types";

export const getRealValue = <T extends unknown>({
  value,
  selectFirstOption,
  options,
  title,
}: {
  title: string;
  options: Item<T>[];
  value?: Item<T> | null;
  selectFirstOption?: boolean;
}): Item<T> => {
  return value
    ? value
    : selectFirstOption
    ? options[0]
    : { label: title, value: undefined as T };
};
